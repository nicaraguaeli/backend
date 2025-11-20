<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{


    //
    public function index()
    {
        $news = \App\Models\News::with('categories', 'author', 'tags')->get();
        return response()->json($news);
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

        $news = News::with(['author','journalist','categories','tags','country','city'])
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
}
