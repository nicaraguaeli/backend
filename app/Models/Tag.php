<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Str;

class Tag extends Model
{
    public $timestamps = false;

    protected $fillable = ['name', 'slug'];


    protected function name(): Attribute
    {
        return Attribute::make(
            set: fn ($value) => Str::ucfirst(strtolower($value))
        );
    }

    public function news()
    {
        return $this->belongsToMany(News::class, 'news_tag');
    }
}
