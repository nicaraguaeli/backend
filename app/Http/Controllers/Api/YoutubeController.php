<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;

class YoutubeController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->query('q', '');
        $maxResults = $request->query('maxResults', 50);

        // Si el archivo no existe (ej. primera vez), forzamos la ejecución del comando para crearlo
        if (!Storage::disk('local')->exists('youtube_videos.json')) {
            \Illuminate\Support\Facades\Artisan::call('youtube:fetch-data', [
                '--maxResults' => 50
            ]);
        }

        // Leemos del archivo json guardado
        if (Storage::disk('local')->exists('youtube_videos.json')) {
            $videos = json_decode(Storage::disk('local')->get('youtube_videos.json'), true);
            if (is_array($videos)) {
                if (!empty($query)) {
                    $queryLower = mb_strtolower($query);
                    $videos = array_filter($videos, function ($video) use ($queryLower) {
                        $title = mb_strtolower($video['title'] ?? '');
                        $desc = mb_strtolower($video['description'] ?? '');
                        return str_contains($title, $queryLower) || str_contains($desc, $queryLower);
                    });
                    $videos = array_values($videos);
                }
                return response()->json(array_slice($videos, 0, $maxResults));
            }
        }

        // Si por alguna razón falló la lectura/creación, retornamos un arreglo vacío
        return response()->json([]);
    }
}