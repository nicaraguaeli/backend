<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = false;

    // Solo columnas reales
    protected $fillable = [
        'name', 'slug', 'is_active', 'is_featured', 'show_in_menu', 'menu_order', 'image_path', 'theme_color', 'theme_color_secondary'
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return $this->image_path ? asset('storage/' . $this->image_path) : null;
    }

    

    public function news()
    {
        return $this->belongsToMany(News::class, 'category_news');
    }
    public function audioReports()
    {
        return $this->belongsToMany(AudioReport::class, 'audio_report_category');
    }

    
}
