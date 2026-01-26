<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'bio',
        'avatar',
        'type',
        'is_active',
    ];

    public function news()
    {
        return $this->belongsToMany(News::class, 'author_news');
    }

    public function audioReports()
    {
        return $this->hasMany(AudioReport::class);
    }
}
