<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use App\Http\Controllers\Controller;

class YoutubeController extends Controller
{
    public function playlistsWithVideos()
    {
        $cacheKey = 'youtube_playlists_with_videos';

        return Cache::remember($cacheKey, 300, function () {

            $apiKey = config('services.youtube.key');
            $channelId = config('services.youtube.channel_id');

            // 🥇 1. Obtener playlists
            $playlistsResponse = Http::get('https://www.googleapis.com/youtube/v3/playlists', [
                'part' => 'snippet',
                'channelId' => $channelId,
                'maxResults' => 10,
                'key' => $apiKey,
            ]);

            if (!$playlistsResponse->ok()) {
                return response()->json(['error' => 'Error fetching playlists'], 500);
            }

            $playlists = $playlistsResponse->json()['items'] ?? [];

            // 🥈 2. Para cada playlist, traer videos
            $result = collect($playlists)->map(function ($playlist) use ($apiKey) {

                $playlistId = $playlist['id'];
                $playlistTitle = $playlist['snippet']['title'];

                $videosResponse = Http::get('https://www.googleapis.com/youtube/v3/playlistItems', [
                    'part' => 'snippet',
                    'playlistId' => $playlistId,
                    'maxResults' => 50,
                    'key' => $apiKey,
                ]);

                if (!$videosResponse->ok()) {
                    return null;
                }

                $videos = collect($videosResponse->json()['items'] ?? [])
                    ->map(function ($item) use ($playlistId, $playlistTitle) {

                        if (!isset($item['snippet']['resourceId']['videoId']))
                            return null;

                        return [
                            'id' => $item['snippet']['resourceId']['videoId'],
                            'title' => $item['snippet']['title'],
                            'description' => $item['snippet']['description'],
                            'thumbnail' => $item['snippet']['thumbnails']['high']['url']
                                ?? $item['snippet']['thumbnails']['default']['url']
                                ?? '',
                            'videoUrl' => 'https://www.youtube.com/embed/' . $item['snippet']['resourceId']['videoId'],
                            'date' => $item['snippet']['publishedAt'],

                            // 🔥 AQUÍ TU CATEGORÍA REAL
                            'category' => $playlistTitle,
                            'playlistId' => $playlistId,
                        ];
                    })
                    ->filter()
                    ->values();

                return [
                    'playlistId' => $playlistId,
                    'playlistTitle' => $playlistTitle,
                    'videos' => $videos,
                ];
            })
                ->filter()
                ->values();

            return response()->json($result);
        });
    }
}