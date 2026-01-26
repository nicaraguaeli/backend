<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AudioReport extends Model
{
    //
    protected $fillable = [
        
        'title',
        'slug',
        'excerpt',
        'content',
        'image_path',
        'audio_url',
        'author_id',
        'published_at',
        'is_active',
    ];

    public function author()
    {
        return $this->belongsTo(Author::class);
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'audio_report_category');
    }
}
