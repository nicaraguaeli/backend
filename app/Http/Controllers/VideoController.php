<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index()
    {
        // Mock data - replace with actual database queries when Video model is created
        $videos = [
            [
                'id' => 1,
                'title' => 'Últimas Noticias del Día - Resumen Informativo',
                'description' => 'Mantente informado con las noticias más importantes del día. Cobertura completa de los eventos nacionales e internacionales.',
                'thumbnail' => 'https://via.placeholder.com/640x360/0066CC/FFFFFF?text=Noticias+del+D%C3%ADa',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'views' => 15420,
                'duration' => '12:34',
                'published_at' => now()->subDays(1)->toDateTimeString(),
                'category' => 'Noticias'
            ],
            [
                'id' => 2,
                'title' => 'Entrevista Exclusiva: Análisis Político Nacional',
                'description' => 'Conversamos con expertos sobre la situación política actual del país.',
                'thumbnail' => 'https://via.placeholder.com/640x360/CC0000/FFFFFF?text=Pol%C3%ADtica',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'views' => 8930,
                'duration' => '18:45',
                'published_at' => now()->subDays(2)->toDateTimeString(),
                'category' => 'Noticias'
            ],
            [
                'id' => 3,
                'title' => 'Resumen Deportivo: Lo Mejor de la Semana',
                'description' => 'Todos los goles, jugadas y momentos destacados del deporte nacional e internacional.',
                'thumbnail' => 'https://via.placeholder.com/640x360/00CC66/FFFFFF?text=Deportes',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'views' => 23150,
                'duration' => '15:20',
                'published_at' => now()->subDays(3)->toDateTimeString(),
                'category' => 'Deportes'
            ],
            [
                'id' => 4,
                'title' => 'Reportaje Especial: Cultura y Tradiciones',
                'description' => 'Un viaje por las tradiciones y costumbres que nos definen como nación.',
                'thumbnail' => 'https://via.placeholder.com/640x360/CC6600/FFFFFF?text=Cultura',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'views' => 5670,
                'duration' => '22:10',
                'published_at' => now()->subDays(5)->toDateTimeString(),
                'category' => 'Reportajes'
            ],
            [
                'id' => 5,
                'title' => 'En Vivo: Conferencia de Prensa Presidencial',
                'description' => 'Transmisión en directo de la conferencia de prensa del gobierno.',
                'thumbnail' => 'https://via.placeholder.com/640x360/9900CC/FFFFFF?text=En+Vivo',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'views' => 45200,
                'duration' => '1:05:30',
                'published_at' => now()->subHours(6)->toDateTimeString(),
                'category' => 'Noticias'
            ],
            [
                'id' => 6,
                'title' => 'Economía: Análisis del Mercado y Finanzas',
                'description' => 'Expertos analizan las tendencias económicas y su impacto en la población.',
                'thumbnail' => 'https://via.placeholder.com/640x360/006699/FFFFFF?text=Econom%C3%ADa',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'views' => 12340,
                'duration' => '14:25',
                'published_at' => now()->subDays(4)->toDateTimeString(),
                'category' => 'Noticias'
            ],
            [
                'id' => 7,
                'title' => 'Entretenimiento: Lo Más Destacado de la Farándula',
                'description' => 'Las noticias más recientes del mundo del espectáculo y entretenimiento.',
                'thumbnail' => 'https://via.placeholder.com/640x360/CC0099/FFFFFF?text=Far%C3%A1ndula',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'views' => 18750,
                'duration' => '10:15',
                'published_at' => now()->subDays(1)->toDateTimeString(),
                'category' => 'Entretenimiento'
            ],
            [
                'id' => 8,
                'title' => 'Salud y Bienestar: Consejos de Expertos',
                'description' => 'Recomendaciones de profesionales de la salud para mejorar tu calidad de vida.',
                'thumbnail' => 'https://via.placeholder.com/640x360/00CC99/FFFFFF?text=Salud',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'views' => 9820,
                'duration' => '16:40',
                'published_at' => now()->subDays(6)->toDateTimeString(),
                'category' => 'Reportajes'
            ],
        ];

        return Inertia::render('Videos', [
            'videos' => $videos,
            'featuredVideo' => $videos[0] ?? null
        ]);
    }
}
