<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class FetchYouTubeData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'youtube:fetch-data {--maxResults=50}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch data from YouTube API and save to a JSON file to avoid quota limits';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $maxResults = $this->option('maxResults');

        try {
            $channelId = config('services.youtube.channel_id');
            $uploadsPlaylistId = 'UU' . substr($channelId, 2);

            $response = Http::get('https://www.googleapis.com/youtube/v3/playlistItems', [
                'part' => 'snippet',
                'playlistId' => $uploadsPlaylistId,
                'maxResults' => $maxResults,
                'key' => config('services.youtube.key'),
            ]);

            if (!$response->ok()) {
                $this->error('Failed to fetch data from YouTube API: ' . $response->body());
                Log::error('YouTube API Cron Error: ' . $response->body());
                return Command::FAILURE;
            }

            $data = $response->json();

            $videos = collect($data['items'] ?? [])
                ->map(function ($item) {
                    $videoId = $item['snippet']['resourceId']['videoId'] ?? null;
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

            Storage::disk('local')->put('youtube_videos.json', $videos->toJson());

            $this->info('YouTube data fetched and saved successfully.');
            return Command::SUCCESS;
        } catch (\Exception $e) {
            $this->error('An error occurred: ' . $e->getMessage());
            Log::error('YouTube API Cron Exception: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }
}
