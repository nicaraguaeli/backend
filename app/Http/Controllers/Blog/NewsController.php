<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{


    //
    public function index(Request $request)
    {
        $query = \App\Models\News::with('categories', 'author', 'tags');

        if ($request->has('category')) {
            $slug = $request->query('category');
            $query->whereHas('categories', function($q) use ($slug) {
                $q->where('slug', $slug);
            });
        }

        $news = $query->get();
        return response()->json($news);
    }

    public function show($slug)
    {
        
        $news = News::with(['author', 'categories', 'tags'])
            ->where('slug', $slug)
            ->firstOrFail();

        if (!$news->is_published && !auth()->check()) {
            abort(404);
        }

        // Increment views
        $news->increment('views');

        // Fetch most read news (for sidebar)
        $mostReadNews = News::with(['categories', 'author'])
            ->where('is_published', true)
            ->where('id', '!=', $news->id)
            ->orderBy('views', 'desc')
            ->take(5)
            ->get();

        // Fetch related news (for bottom section - based on category)
        $relatedNews = News::with(['categories', 'author'])
            ->where('is_published', true)
            ->where('id', '!=', $news->id)
            ->whereHas('categories', function ($query) use ($news) {
                $query->whereIn('categories.id', $news->categories->pluck('id'));
            })
            ->orderBy('published_at', 'desc')
            ->take(4)
            ->get();
            
        // If not enough related news, fill with latest
        if ($relatedNews->count() < 4) {
             $extraNews = News::with(['categories', 'author'])
                ->where('is_published', true)
                ->where('id', '!=', $news->id)
                ->whereNotIn('id', $relatedNews->pluck('id'))
                ->orderBy('published_at', 'desc')
                ->take(4 - $relatedNews->count())
                ->get();
             $relatedNews = $relatedNews->merge($extraNews);
        }

        // Fetch generic 'More News' for the bottom grid
        $moreNews = News::with(['categories', 'author'])
            ->where('is_published', true)
            ->where('id', '!=', $news->id)
            ->whereNotIn('id', $relatedNews->pluck('id'))
            ->orderBy('published_at', 'desc')
            ->take(6)
            ->get();

        return \Inertia\Inertia::render('Article', [
            'article' => $news,
            'mostReadNews' => $mostReadNews,
            'relatedNews' => $relatedNews,
            'moreNews' => $moreNews
        ]);
    }

    /**
     * Devuelve noticias relacionadas dadas arrays de category_ids y tag_ids.
     * GET /api/news/related?category_ids[]=1&tag_ids[]=2&exclude=10&limit=5
     */
    public function related(Request $request)
    {
        $categoryIds = (array) $request->query('category_ids', []);
        $tagIds = (array) $request->query('tag_ids', []);
        $exclude = $request->query('exclude');
        $limit = (int) $request->query('limit', 5);

        if (empty($categoryIds) && empty($tagIds)) {
            return response()->json(['success' => true, 'data' => []]);
        }

        $news = News::with(['author','journalist','categories','tags'])
            ->relatedBy($categoryIds, $tagIds, $exclude, $limit)
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'slug' => $item->slug,
                    'excerpt' => $item->excerpt,
                    'published_at' => $item->published_at ? $item->published_at->toDateTimeString() : null,
                    'image_url' => $item->image_path ? asset('storage/' . ltrim($item->image_path, '/')) : null,
                    'matched_categories_count' => $item->matched_categories_count ?? 0,
                    'matched_tags_count' => $item->matched_tags_count ?? 0,
                    'author' => $item->author ? ['id'=>$item->author->id,'name'=>$item->author->name] : null,
                    'categories' => $item->categories->map(fn($c)=>['id'=>$c->id,'name'=>$c->name])->values(),
                    'tags' => $item->tags->map(fn($t)=>['id'=>$t->id,'name'=>$t->name])->values(),
                ];
            });

        return response()->json(['success' => true, 'data' => $news]);
    }

    /**
     * Suggestions endpoint for typeahead search (returns small set of matches)
     * GET /api/news/suggestions?q=term
     */
    public function suggestions(Request $request)
    {
        $q = trim((string) $request->query('q', ''));
        if (strlen($q) < 2) {
            return response()->json([]);
        }

        $results = News::where('is_published', true)
            ->where('title', 'like', "%{$q}%")
            ->orderByRaw("CASE WHEN title LIKE ? THEN 0 ELSE 1 END", ["{$q}%"]) // prefer prefix matches
            ->limit(8)
            ->get(['id', 'title', 'slug', 'excerpt']);

        return response()->json($results);
    }
}
