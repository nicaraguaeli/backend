<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // 1. Counts for Info Boxes
        $newsCount = \App\Models\News::count();
        $publishedNewsCount = \App\Models\News::where('is_published', true)->count();
        $usersCount = \App\Models\User::count();
        $categoriesCount = \App\Models\Category::count();
        $vacanciesCount = \App\Models\Vacancy::where('is_active', true)->whereDate('expires_at', '>=', now())->count();
        $bannersCount = \App\Models\Banner::where('is_active', true)->count();

        // 2. Latest News for Activity Widget
        $latestNews = \App\Models\News::with('author')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        // 3. Stream Status Check
        $streamStatus = $this->checkStreamStatus();

        return view('home', compact(
            'newsCount',
            'publishedNewsCount',
            'usersCount',
            'categoriesCount',
            'vacanciesCount',
            'bannersCount',
            'latestNews',
            'streamStatus'
        ));
    }

    /**
     * AJAX endpoint: returns real-time stream status as JSON.
     * Called every 3 minutes by the dashboard JavaScript auto-refresh.
     */
    public function streamStatusAjax()
    {
        $online = $this->checkStreamStatus();
        return response()->json([
            'online'    => $online,
            'checkedAt' => now()->toTimeString(),
        ]);
    }

    /**
     * Check if the Icecast stream is online by querying its official JSON stats endpoint.
     *
     * WHY /status-json.xsl and NOT /stream:
     *  - Doing GET/HEAD to /stream opens an infinite audio connection and hangs.
     *  - /status-json.xsl is the standard Icecast health/stats URL and returns a
     *    small JSON payload describing all active mount points and their listener counts.
     *  - verify:false bypasses the self-signed SSL certificate on port 4205 that
     *    causes "TLS handshake failure" on production servers.
     */
    private function checkStreamStatus(): bool
    {
        $statsUrl = 'https://hoth.alonhosting.com:4205/status-json.xsl';

        try {
            $response = \Illuminate\Support\Facades\Http::timeout(5)
                ->withOptions(['verify' => false])
                ->get($statsUrl);

            if (!$response->successful()) {
                return false;
            }

            $data = $response->json();

            // Icecast JSON structure: { "icestats": { "source": {...} | [{...}] } }
            $source = $data['icestats']['source'] ?? null;

            if (empty($source)) {
                return false;
            }

            // Single active source comes as an object with 'listenurl'
            if (isset($source['listenurl'])) {
                return true;
            }

            // Multiple sources come as an array — at least one means stream is up
            if (is_array($source) && count($source) > 0) {
                return true;
            }

            return false;

        } catch (\Exception $e) {
            return false;
        }
    }
}
