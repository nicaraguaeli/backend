<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Subscriber extends Model
{
    protected $fillable = ['email', 'unsubscribe_token', 'confirmed_at'];

    protected $casts = [
        'confirmed_at' => 'datetime',
    ];

    public static function generateToken(): string
    {
        return Str::random(64);
    }

    public function isConfirmed(): bool
    {
        return $this->confirmed_at !== null;
    }
}
