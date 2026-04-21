<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index()
    {
        $videos = [];

        if (Storage::disk('local')->exists('youtube_videos.json')) {
            $decoded = json_decode(Storage::disk('local')->get('youtube_videos.json'), true);

            if (is_array($decoded)) {
                $videos = collect($decoded)
                    ->filter(fn($v) => !empty($v['id']) && !empty($v['title']))
                    ->map(function ($v) {
                        // Normalise date to readable Spanish format
                        $dateFormatted = '';
                        if (!empty($v['date'])) {
                            try {
                                $dateFormatted = \Carbon\Carbon::parse($v['date'])
                                    ->locale('es')
                                    ->isoFormat('D MMM YYYY');
                            } catch (\Throwable $e) {
                                $dateFormatted = $v['date'];
                            }
                        }

                        return [
                            'id'          => (string) $v['id'],
                            'title'       => $v['title'],
                            'description' => $v['description'] ?? '',
                            'thumbnail'   => $v['thumbnail'] ?? '',
                            'videoUrl'    => $v['videoUrl'] ?? '',
                            'date'        => $dateFormatted,
                            'location'    => 'Nicaragua',
                            'duration'    => $v['duration'] ?? '',
                            'category'    => $v['category'] ?? 'ABC TV',
                        ];
                    })
                    ->values()
                    ->all();
            }
        }

        return Inertia::render('Videos', [
            'videos' => $videos,
        ]);
    }
}
