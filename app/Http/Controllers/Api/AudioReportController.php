<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AudioReport;

class AudioReportController extends Controller
{
    public function index(Request $request)
    {
        $query = AudioReport::with(['author', 'categories'])
            ->where('is_active', true)
            ->orderByDesc('published_at');

        $reports = $query->get()->map(function ($item) {
            // Map fields to the shape expected by the frontend service
            $image = $item->image_path ?: null;
            if ($image && !str_starts_with($image, 'http')) {
                // stored via storage/app/public, expose via storage symlink
                $image = '/storage/' . ltrim($image, '/');
            }

            $audio = $item->audio_url ?: null;
            if ($audio && !str_starts_with($audio, 'http')) {
                $audio = '/storage/' . ltrim($audio, '/');
            }

            return [
                'id' => $item->id,
                'slug' => $item->slug,
                'url' => $audio,
                'titulo' => $item->title,
                'entrada' => $item->excerpt,
                'contenido' => $item->content,
                'categoria' => $item->categories->first()?->name ?? 'Reportajes',
                'imagen' => $image,
                'autor' => $item->author?->name ?? null,
                'created_at' => optional($item->published_at ?? $item->created_at)->toDateTimeString(),
            ];
        });

        return response()->json($reports);
    }

    public function show($slug)
    {
        $audioReport = AudioReport::with(['author', 'categories'])
            ->where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        // Map image path
        $image = $audioReport->image_path ?: null;
        if ($image && !str_starts_with($image, 'http')) {
            $image = '/storage/' . ltrim($image, '/');
        }

        // Map audio URL
        $audio = $audioReport->audio_url ?: null;
        if ($audio && !str_starts_with($audio, 'http')) {
            $audio = '/storage/' . ltrim($audio, '/');
        }

        $data = [
            'id' => $audioReport->id,
            'slug' => $audioReport->slug,
            'url' => $audio,
            'titulo' => $audioReport->title,
            'entrada' => $audioReport->excerpt,
            'contenido' => $audioReport->content,
            'categoria' => $audioReport->categories->first()?->name ?? 'Reportajes',
            'imagen' => $image,
            'autor' => $audioReport->author?->name ?? null,
            'created_at' => optional($audioReport->published_at ?? $audioReport->created_at)->toDateTimeString(),
        ];

        return \Inertia\Inertia::render('AudioReportajeDetail', [
            'audioReport' => $data
        ]);
    }
}
