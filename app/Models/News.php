<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'title',
        'slug', 
        'excerpt',
        'lead',       
        'content',
        'city',
        'country',
        'area',
        'image_path',
        'caption',
        'published_at',
        'views', 
        'is_featured',
        'is_published',      
        'is_hero',
        
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_news');
    }

    public function author()
    {
        return $this->belongsToMany(Author::class, 'author_news');
    }

    /**
     * Devuelve el primer autor como objeto plano {id, name, type}.
     * Los componentes React esperan `article.author.name`, no una colección.
     */
    public function getSerializedAuthorAttribute(): ?array
    {
        $first = $this->author->first();
        if (!$first) return null;
        return ['id' => $first->id, 'name' => $first->name, 'type' => $first->type];
    }

    /**
     * Devuelve los co-autores (todos menos el primero) como array plano.
     */
    public function getSerializedCoAuthorsAttribute(): array
    {
        return $this->author->slice(1)->values()->map(fn($a) => [
            'id'   => $a->id,
            'name' => $a->name,
            'type' => $a->type,
        ])->values()->toArray();
    }

    public function tags()
    {
        return $this->belongsToMany(\App\Models\Tag::class, 'news_tag');
    }

    /**
     * Scope: buscar noticias relacionadas por categorías y tags.
     * Uso: News::relatedBy($categoryIds, $tagIds, $excludeId, $limit)->get();
     */
    public function scopeRelatedBy($query, array $categoryIds = [], array $tagIds = [], $excludeId = null, $limit = 5)
    {
        $categoryIds = array_filter($categoryIds);
        $tagIds = array_filter($tagIds);

        // incluir conteos de coincidencias
        if ($categoryIds) {
            $query->withCount(['categories as matched_categories_count' => function ($q) use ($categoryIds) {
                $q->whereIn('categories.id', $categoryIds);
            }]);
        } else {
            $query->withCount(['categories as matched_categories_count' => function ($q) {
                $q->whereRaw('0=1');
            }]);
        }

        if ($tagIds) {
            $query->withCount(['tags as matched_tags_count' => function ($q) use ($tagIds) {
                $q->whereIn('tags.id', $tagIds);
            }]);
        } else {
            $query->withCount(['tags as matched_tags_count' => function ($q) {
                $q->whereRaw('0=1');
            }]);
        }

        // filtrar por al menos una coincidencia (categoria o tag)
        $query->where(function ($q) use ($categoryIds, $tagIds) {
            if ($categoryIds) {
                $q->whereHas('categories', function ($qq) use ($categoryIds) {
                    $qq->whereIn('categories.id', $categoryIds);
                });
            }
            if ($tagIds) {
                $q->orWhereHas('tags', function ($qq) use ($tagIds) {
                    $qq->whereIn('tags.id', $tagIds);
                });
            }
        });

        if ($excludeId) {
            $query->where('id', '!=', $excludeId);
        }

        // ordenar por relevancia (más coincidencias primero) y por fecha
        $query->orderByRaw('(matched_categories_count + matched_tags_count) DESC')
              ->orderByDesc('published_at')
              ->limit($limit);

        return $query;
    }
}
