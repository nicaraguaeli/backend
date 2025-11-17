<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    public function news()
    {
        return $this->belongsToMany(News::class, 'author_news');
    }
}
