<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use App\Http\Controllers\Controller;

class YoutubeController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->query('q', '');
        $maxResults = $request->query('maxResults', 50);

        $cacheKey = "youtube_videos_" . md5($query . $maxResults);

        return Cache::remember($cacheKey, 300, function () use ($query, $maxResults) {

            $response = Http::get('https://www.googleapis.com/youtube/v3/search', [
                'part' => 'snippet',
                'channelId' => config('services.youtube.channel_id'),
                'maxResults' => $maxResults,
                'order' => 'date',
                'type' => 'video',
                'q' => $query,
                'key' => config('services.youtube.key'),
            ]);

            if (!$response->ok()) {
                return response()->json([
                    'error' => 'Error fetching YouTube data'
                ], 500);
            }

            $data = $response->json();

            $videos = collect($data['items'] ?? [])
                ->map(function ($item) {
                    if (!isset($item['id']['videoId']))
                        return null;

                    return [
                        'id' => $item['id']['videoId'],
                        'title' => $item['snippet']['title'],
                        'description' => $item['snippet']['description'],
                        'thumbnail' => $item['snippet']['thumbnails']['high']['url']
                            ?? $item['snippet']['thumbnails']['default']['url']
                            ?? '',
                        'videoUrl' => 'https://www.youtube.com/embed/' . $item['id']['videoId'],
                        'date' => $item['snippet']['publishedAt'],
                    ];
                })
                ->filter()
                ->values();

            return response()->json($videos);
        });
    }
}