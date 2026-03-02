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
        // Using HEAD + withOptions verify:false to avoid TLS handshake failures
        // on production servers where the streaming server (port 4205) uses a
        // self-signed or incompatible SSL certificate.
        $streamUrl = 'https://hoth.alonhosting.com:4205/stream';
        $streamStatus = false;
        try {
            $response = \Illuminate\Support\Facades\Http::timeout(5)
                ->withOptions(['verify' => false])
                ->head($streamUrl);
            // 200 = stream active, 302/301 = redirect (also active), anything else = down
            $streamStatus = in_array($response->status(), [200, 301, 302, 400]);
        } catch (\Exception $e) {
            $streamStatus = false;
        }

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
}
