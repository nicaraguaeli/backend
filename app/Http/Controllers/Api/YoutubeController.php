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

        // Intentamos leer siempre del archivo json guardado por el cronjob para evitar llamadas a la API
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

        $cacheKey = "youtube_videos_" . md5($query . $maxResults);

        return Cache::remember($cacheKey, 300, function () use ($query, $maxResults) {

            $channelId = config('services.youtube.channel_id');

            if (!empty($query)) {
                $response = Http::get('https://www.googleapis.com/youtube/v3/search', [
                    'part' => 'snippet',
                    'channelId' => $channelId,
                    'maxResults' => $maxResults,
                    'order' => 'date',
                    'type' => 'video',
                    'q' => $query,
                    'key' => config('services.youtube.key'),
                ]);
            } else {
                $uploadsPlaylistId = 'UU' . substr($channelId, 2);
                $response = Http::get('https://www.googleapis.com/youtube/v3/playlistItems', [
                    'part' => 'snippet',
                    'playlistId' => $uploadsPlaylistId,
                    'maxResults' => $maxResults,
                    'key' => config('services.youtube.key'),
                ]);
            }

            if (!$response->ok()) {
                // Logueamos y retornamos el detalle exacto de google para debugear
                \Illuminate\Support\Facades\Log::error('YouTube API Error: ' . $response->body());
                return response()->json([
                    'error' => 'Error fetching YouTube data',
                    'google_api_message' => $response->json()
                ], 500);
            }

            $data = $response->json();

            $videos = collect($data['items'] ?? [])
                ->map(function ($item) use ($query) {
                    $videoId = !empty($query)
                        ? ($item['id']['videoId'] ?? null)
                        : ($item['snippet']['resourceId']['videoId'] ?? null);

                    if (!$videoId)
                        return null;

                    return [
                        'id' => $videoId,
                        'title' => $item['snippet']['title'],
                        'description' => $item['snippet']['description'],
                        'thumbnail' => $item['snippet']['thumbnails']['high']['url']
                            ?? $item['snippet']['thumbnails']['default']['url']
                            ?? '',
                        'videoUrl' => 'https://www.youtube.com/embed/' . $videoId,
                        'date' => $item['snippet']['publishedAt'],
                    ];
                })
                ->filter()
                ->values();

            return response()->json($videos);
        });
    }
}