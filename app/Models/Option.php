<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    // Nombre de la tabla (por si acaso)
    protected $table = 'options';

    // Campos asignables
    protected $fillable = [
        'key',
        'value',
    ];

    // Evita casts raros si luego guardás JSON
    protected $casts = [
        'value' => 'string',
    ];

    // Desactiva timestamps si no los querés
    // public $timestamps = false;
}
