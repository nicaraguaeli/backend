<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'lead',
        'excerpt',
        'content',
        'area',
        'published_at',
        'image_path',
        'caption',
        'city',
        'country',
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

    public function tags()
    {
        return $this->belongsToMany(\App\Models\Tag::class, 'news_tag');
    }
}
