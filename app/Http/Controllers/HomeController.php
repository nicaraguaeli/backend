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
        $streamUrl = 'https://hoth.alonhosting.com:4205/stream';
        $streamStatus = false;
        try {
            // Using a short timeout to prevent blocking the dashboard load
            $response = \Illuminate\Support\Facades\Http::timeout(2)->get($streamUrl);
            $streamStatus = $response->successful();
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
