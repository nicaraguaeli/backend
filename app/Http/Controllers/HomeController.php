<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     * NOTE: $streamStatus is intentionally set to null here.
     * The actual check is handled by the browser-side JavaScript
     * calling the Icecast /status-json.xsl endpoint directly.
     * This avoids production server outbound restrictions on port 4205.
     */
    public function index()
    {
        $newsCount          = \App\Models\News::count();
        $publishedNewsCount = \App\Models\News::where('is_published', true)->count();
        $usersCount         = \App\Models\User::count();
        $categoriesCount    = \App\Models\Category::count();
        $vacanciesCount     = \App\Models\Vacancy::where('is_active', true)->whereDate('expires_at', '>=', now())->count();
        $bannersCount       = \App\Models\Banner::where('is_active', true)->count();

        $latestNews = \App\Models\News::with('author')
            ->orderBy('published_at', 'desc')
            ->take(5)
            ->get();

        return view('home', compact(
            'newsCount',
            'publishedNewsCount',
            'usersCount',
            'categoriesCount',
            'vacanciesCount',
            'bannersCount',
            'latestNews'
        ));
    }

    /**
     * Server-side proxy for the Icecast stats endpoint.
     * The JS first tries a direct browser→Icecast call (no CORS issues with this
     * particular server). If that fails, it falls back to this proxy route.
     */
    public function streamStatusAjax()
    {
        $statsUrl = 'https://hoth.alonhosting.com:4205/status-json.xsl';

        try {
            $response = \Illuminate\Support\Facades\Http::timeout(8)
                ->withOptions([
                    'verify'          => false,
                    'allow_redirects' => true,
                ])
                ->get($statsUrl);

            $body = $response->body();
            $data = json_decode($body, true);

            $source    = $data['icestats']['source'] ?? null;
            $online    = false;
            $listeners = 0;
            $title     = '';

            if (!empty($source)) {
                // Single source comes as associative array with 'listenurl'
                if (isset($source['listenurl'])) {
                    $online    = true;
                    $listeners = (int) ($source['listeners'] ?? 0);
                    $title     = (string) ($source['title'] ?? $source['server_name'] ?? '');
                }
                // Multiple sources come as a numeric array
                elseif (is_array($source)) {
                    $first     = $source[0] ?? [];
                    $online    = true;
                    $listeners = (int) ($first['listeners'] ?? 0);
                    $title     = (string) ($first['title'] ?? $first['server_name'] ?? '');
                }
            }

            return response()->json([
                'online'    => $online,
                'listeners' => $listeners,
                'title'     => $title,
                'checkedAt' => now()->toTimeString(),
                'source'    => 'server-proxy',
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'online'    => false,
                'listeners' => 0,
                'title'     => '',
                'checkedAt' => now()->toTimeString(),
                'source'    => 'server-proxy',
                'error'     => $e->getMessage(),
            ]);
        }
    }
}
