<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = false;

    // Solo columnas reales
    protected $fillable = [
        'name', 'slug', 'is_active', 'is_featured'
    ];

    public function news()
    {
        return $this->belongsToMany(News::class, 'category_news');
    }
}
