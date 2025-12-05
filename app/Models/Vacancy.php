<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    protected $table = 'vacancies';

    protected $fillable = [
        'title',
        'company',
        'city',
        'country',
        'employment_type',
        'description',
        'expires_at',
        'is_active',
    ];

    protected $casts = [
        'expires_at' => 'date',
        'is_active' => 'boolean',
    ];

    /*
    |--------------------------------------------------------------------------
    | Scopes
    |--------------------------------------------------------------------------
    */

    // Solo vacantes activas y no vencidas
    public function scopeActive(Builder $query): Builder
    {
        return $query
            ->where('is_active', true)
            ->whereDate('expires_at', '>=', now());
    }

    // Filtrar por ciudad
    public function scopeCity(Builder $query, string $city): Builder
    {
        return $query->where('city', $city);
    }

    // Filtrar por tipo de empleo
    public function scopeEmploymentType(Builder $query, string $type): Builder
    {
        return $query->where('employment_type', $type);
    }

    // Ordenar por recientes
    public function scopeRecent(Builder $query): Builder
    {
        return $query->latest();
    }
}
