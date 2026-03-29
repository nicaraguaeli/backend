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
        $query = \App\Models\News::with('categories', 'author', 'tags')
            ->where('is_published', true);

        if ($request->has('category')) {
            $slug = $request->query('category');
            $query->whereHas('categories', function($q) use ($slug) {
                $q->where('slug', $slug);
            });
        }

        $news = $query->orderBy('published_at', 'desc')
            ->paginate(12);
            
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

        // Check if article belongs to a featured category
        $hasFeaturedCategory = $news->categories->contains(function ($category) {
            return $category->is_featured;
        });

        // Prepare Meta Data for SEO/Sharing
        $meta = [
            'title' => $news->title . ' | Radio ABC Stereo',
            'description' => $news->lead ?? $news->excerpt,
            'image' => $news->image_path ? asset('storage/' . $news->image_path) : asset('img/brand.png'),
            'url' => route('news.show', $news->slug),
            'type' => 'article'
        ];

        // If article belongs to a featured category, use special layout
        if ($hasFeaturedCategory) {
            return \Inertia\Inertia::render('FeaturedArticle', [
                'article' => $news
            ])->withViewData(['meta' => $meta]);
        }

        // Regular article flow
        // --- Fetch all news sets with deduplication ---
        $usedIds = collect([$news->id]); // always exclude current article

        // 1. MOST READ NEWS (sidebar) — top 5 por vistas en los últimos 7 días
        $mostReadNews = News::with(['categories', 'author'])
            ->where('is_published', true)
            ->where('published_at', '>=', now()->subDays(7))
            ->whereNotIn('id', $usedIds)
            ->orderBy('views', 'desc')
            ->take(5)
            ->get();
        $usedIds = $usedIds->merge($mostReadNews->pluck('id'));

        // 2. RELATED NEWS (same category) — up to 4
        $categoryIds = $news->categories->pluck('id');
        $relatedNews = News::with(['categories', 'author'])
            ->where('is_published', true)
            ->whereNotIn('id', $usedIds)
            ->whereHas('categories', function ($q) use ($categoryIds) {
                $q->whereIn('categories.id', $categoryIds);
            })
            ->orderBy('published_at', 'desc')
            ->take(4)
            ->get();
        $usedIds = $usedIds->merge($relatedNews->pluck('id'));

        // 3. AUTHOR NEWS — up to 4 articles by the same author(s)
        $authorIds = $news->author->pluck('id');
        $authorNews = collect();
        if ($authorIds->isNotEmpty()) {
            $authorNews = News::with(['categories', 'author'])
                ->where('is_published', true)
                ->whereNotIn('id', $usedIds)
                ->whereHas('author', function ($q) use ($authorIds) {
                    $q->whereIn('authors.id', $authorIds);
                })
                ->orderBy('published_at', 'desc')
                ->take(4)
                ->get();
            $usedIds = $usedIds->merge($authorNews->pluck('id'));
        }

        // 4. CATEGORY RECOMMENDATIONS — fill from latest news of same categories, then any latest
        $categoryRecommendations = News::with(['categories', 'author'])
            ->where('is_published', true)
            ->whereNotIn('id', $usedIds)
            ->whereHas('categories', function ($q) use ($categoryIds) {
                $q->whereIn('categories.id', $categoryIds);
            })
            ->orderBy('published_at', 'desc')
            ->take(6)
            ->get();
        $usedIds = $usedIds->merge($categoryRecommendations->pluck('id'));

        // Fill recommendations if fewer than 6
        if ($categoryRecommendations->count() < 6) {
            $fillCount = 6 - $categoryRecommendations->count();
            $fillNews = News::with(['categories', 'author'])
                ->where('is_published', true)
                ->whereNotIn('id', $usedIds)
                ->orderBy('published_at', 'desc')
                ->take($fillCount)
                ->get();
            $categoryRecommendations = $categoryRecommendations->merge($fillNews);
        }

        // Serializar autores usando los accessors del modelo
        $articleData = array_merge($news->toArray(), [
            'author'    => $news->serialized_author,
            'coAuthors' => $news->serialized_co_authors,
        ]);

        // Helper para serializar una colección de noticias con autor plano
        $serializeNews = fn($collection) => $collection->map(fn($item) => array_merge($item->toArray(), [
            'author' => $item->serialized_author,
        ]))->values();

        // Banners activos para la página de artículo (sidebar, in-content, bottom)
        $articleBanners = \App\Models\Banner::where('is_active', true)
            ->whereIn('position', ['article_sidebar', 'article_mid', 'article_bottom'])
            ->get();


        return \Inertia\Inertia::render('Article', [
            'article'                  => $articleData,
            'mostReadNews'             => $serializeNews($mostReadNews),
            'relatedNews'              => $serializeNews($relatedNews),
            'authorNews'               => $serializeNews($authorNews),
            'categoryRecommendations'  => $serializeNews($categoryRecommendations),
            'banners'                  => $articleBanners,
        ])->withViewData(['meta' => $meta]);
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
     * Página de resultados de búsqueda paginados
     * GET /search?q=termino&page=1
     */
    public function search(Request $request)
    {
        $q = trim((string) $request->query('q', ''));

        $results = null;
        $total   = 0;

        if (strlen($q) >= 2) {
            $paginator = News::where('is_published', true)
                ->where(function ($query) use ($q) {
                    $query->where('title',   'like', "%{$q}%")
                          ->orWhere('excerpt', 'like', "%{$q}%")
                          ->orWhere('lead',    'like', "%{$q}%")
                          ->orWhere('content', 'like', "%{$q}%");
                })
                ->orderBy('published_at', 'desc')
                ->paginate(20)
                ->withQueryString();

            $total   = $paginator->total();
            $results = $paginator;
        }

        return \Inertia\Inertia::render('Search', [
            'query'   => $q,
            'results' => $results,
            'total'   => $total,
        ]);
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
            ->where(function ($query) use ($q) {
                $query->where('title',   'like', "%{$q}%")
                      ->orWhere('excerpt', 'like', "%{$q}%");
            })
            ->orderByRaw("CASE WHEN title LIKE ? THEN 0 ELSE 1 END", ["{$q}%"]) // prefer prefix matches
            ->orderBy('published_at', 'desc') // más recientes primero
            ->limit(8)
            ->get(['id', 'title', 'slug', 'excerpt', 'published_at']);

        return response()->json($results);
    }
}
