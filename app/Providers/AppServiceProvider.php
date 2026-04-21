<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Paginator::useBootstrap();

        // Fix 2: Share nav categories with every Inertia response.
        // Cached for 1 hour — cleared automatically when categories are updated.
        Inertia::share([
            'navCategories' => fn () => Cache::remember('nav_categories', now()->addHour(), fn () =>
                \App\Models\Category::with('children')
                    ->whereNull('parent_id')
                    ->where('is_active', true)
                    ->orderBy('menu_order')
                    ->get()
            ),
        ]);
    }
}
