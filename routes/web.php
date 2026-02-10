<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Blog\NewsController as BlogNewsController;

// Ruta pública para el blog (React)
Route::get('/', function () {
    // 1. Latest News (Hero)
    // Prefer a published news item explicitly marked as hero; otherwise fallback to the latest published news
    $heroNews = \App\Models\News::with(['author', 'categories'])
        ->where('is_published', true)
        ->where('is_hero', true)
        ->orderBy('published_at', 'desc')
        ->orderBy('created_at', 'desc')
        ->first();

    $latestNews = $heroNews ?? \App\Models\News::with(['author', 'categories'])
        ->where('is_published', true)
        ->orderBy('published_at', 'desc')
        ->orderBy('created_at', 'desc')
        ->first();

    // 2. Most Read News (Sidebar)
    $mostReadNews = \App\Models\News::with(['categories', 'author'])
        ->where('is_published', true)
        ->orderBy('views', 'desc')
        ->take(5)
        ->get();

    // 3. Featured News (For FeaturedSection)
    $featuredNews = \App\Models\News::with(['categories', 'author'])
        ->where('is_published', true)
        ->where('is_featured', true)
        ->orderBy('published_at', 'desc')
        ->take(5)
        ->get();

    // 4. More News (Main Content)
    $moreNewsQuery = \App\Models\News::with(['categories', 'author'])
        ->where('is_published', true)
        ->orderBy('published_at', 'desc')
        ->orderBy('created_at', 'desc');

    if ($latestNews) {
        $moreNewsQuery->where('id', '!=', $latestNews->id);
    }
    
    // Exclude featured news from "More News" to avoid duplication
    if ($featuredNews->isNotEmpty()) {
        $moreNewsQuery->whereNotIn('id', $featuredNews->pluck('id'));
    }

    $moreNews = $moreNewsQuery->take(6)->get();

    // 5. Featured Categories
    $featuredCategories = \App\Models\Category::where('is_active', true)
        ->where('is_featured', true)
        ->get();

    // 6. Nacionales News
    $nacionalesNews = \App\Models\News::with(['categories', 'author'])
        ->where('is_published', true)
        ->where('area', 'Nacional')
        ->orderBy('published_at', 'desc')
        ->take(4)
        ->get();

    $internationalNews = \App\Models\News::with(['categories', 'author'])
        ->where('is_published', true)
        ->where('area', 'Internacional')
        ->orderBy('published_at', 'desc')
        ->take(4)
        ->get();

    // 7. Banners
    $banners = \App\Models\Banner::where('is_active', true)->get();

    // 8. Videos (Mock Data)
    $videos = [
        [
            'id' => 1,
            'title' => 'Últimas Noticias del Día - Resumen Informativo',
            'description' => 'Mantente informado con las noticias más importantes del día. Cobertura completa de los eventos nacionales e internacionales.',
            'thumbnail' => 'https://via.placeholder.com/640x360/0066CC/FFFFFF?text=Noticias+del+D%C3%ADa',
            'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            'views' => 15420,
            'duration' => '12:34',
            'published_at' => now()->subDays(1)->toDateTimeString(),
            'category' => 'Noticias'
        ],
        [
            'id' => 2,
            'title' => 'Entrevista Exclusiva: Análisis Político Nacional',
            'description' => 'Conversamos con expertos sobre la situación política actual del país.',
            'thumbnail' => 'https://via.placeholder.com/640x360/CC0000/FFFFFF?text=Pol%C3%ADtica',
            'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            'views' => 8930,
            'duration' => '18:45',
            'published_at' => now()->subDays(2)->toDateTimeString(),
            'category' => 'Noticias'
        ],
        [
            'id' => 3,
            'title' => 'Resumen Deportivo: Lo Mejor de la Semana',
            'description' => 'Todos los goles, jugadas y momentos destacados del deporte nacional e internacional.',
            'thumbnail' => 'https://via.placeholder.com/640x360/00CC66/FFFFFF?text=Deportes',
            'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            'views' => 23150,
            'duration' => '15:20',
            'published_at' => now()->subDays(3)->toDateTimeString(),
            'category' => 'Deportes'
        ],
        [
            'id' => 4,
            'title' => 'Reportaje Especial: Cultura y Tradiciones',
            'description' => 'Un viaje por las tradiciones y costumbres que nos definen como nación.',
            'thumbnail' => 'https://via.placeholder.com/640x360/CC6600/FFFFFF?text=Cultura',
            'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            'views' => 5670,
            'duration' => '22:10',
            'published_at' => now()->subDays(5)->toDateTimeString(),
            'category' => 'Reportajes'
        ]
    ];

    return Inertia::render('Welcome', [
        'latestNews' => $latestNews,
        'mostReadNews' => $mostReadNews,
        'featuredNews' => $featuredNews,
        'moreNews' => $moreNews,
        'featuredCategories' => $featuredCategories,
        'nacionalesNews' => $nacionalesNews,
        'internationalNews' => $internationalNews,
        'banners' => $banners,
        'videos' => $videos,
    ]);
})->name('home');

// Rutas de Autenticación (Blade - para Admin)
Auth::routes(['login' => false]);

Route::get('admin', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login');
Route::post('admin', [App\Http\Controllers\Auth\LoginController::class, 'login']);

Route::post('admin/summernote/upload', function (Illuminate\Http\Request $request) {

    $request->validate([
        'image' => 'required|image|max:2048',
        'caption' => 'nullable|string|max:255',
    ]);

    $path = $request->file('image')->store('news/images', 'public');

    return response()->json([
        'url' => asset('storage/' . $path),
        'caption' => $request->caption,
    ]);
});


Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');

// Corporate Pages Routes
Route::get('/quienes-somos', [App\Http\Controllers\CorporateController::class, 'about'])->name('corporate.about');
Route::get('/anunciate', [App\Http\Controllers\CorporateController::class, 'advertise'])->name('corporate.advertise');
Route::get('/contacto', [App\Http\Controllers\CorporateController::class, 'contact'])->name('corporate.contact');
Route::get('/programacion', [App\Http\Controllers\CorporateController::class, 'programming'])->name('corporate.programming');




// Ruta para Categorías (React)
Route::get('/category/{slug}', function ($slug) {
    $category = \App\Models\Category::where('slug', $slug)->firstOrFail();
    
    // Si es una categoría destacada, usar el layout especial
    if ($category->is_featured) {
        return Inertia::render('FeaturedCategory', [
            'category' => $category
        ]);
    }
    
    // Categorías normales usan el layout estándar
    return Inertia::render('Category', [
        'category' => $slug,
        'categoryName' => $category->name
    ]);
})->name('category.show');

// Ruta para Detalle de Noticia (React)
Route::get('/news/{slug}', [BlogNewsController::class, 'show'])->name('news.show');

// Rutas API para el Blog (React consumirá esto)
Route::get('api/news', [BlogNewsController::class, 'index'])->name('api.news.index');

Route::get('api/categories', function () {
    return response()->json(\App\Models\Category::all());
})->name('api.categories.index');

// API para AudioReportajes (consumido por React)
Route::get('api/audioreportajes', [App\Http\Controllers\Api\AudioReportController::class, 'index'])->name('api.audioreportajes.index');

// Ruta para Detalle de AudioReportaje (React)
Route::get('/audioreportaje/{slug}', [App\Http\Controllers\Api\AudioReportController::class, 'show'])->name('audioreportaje.show');

// Suggestions endpoint for search typeahead
Route::get('api/news/suggestions', [App\Http\Controllers\Blog\NewsController::class, 'suggestions'])->name('api.news.suggestions');

// Ruta para Empleos (React)
Route::get('/empleos', function () {
    $vacancies = \App\Models\Vacancy::where('is_active', true)
        ->whereDate('expires_at', '>=', now())
        ->orderBy('created_at', 'desc')
        ->get();

    return Inertia::render('Jobs', [
        'vacancies' => $vacancies
    ]);
})->name('jobs.index');

// Ruta para Videos (ABC TV)
Route::get('/videos', [App\Http\Controllers\VideoController::class, 'index'])->name('videos.index');

// Grupo de Rutas Admin (Blade)
Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'auth'], function () {
    
    
    // Rutas para la marca de agua
    Route::post('watermark/upload', [App\Http\Controllers\Admin\OptionController::class, 'uploadWatermark'])->name('watermark.upload');
    Route::delete('watermark/delete', [App\Http\Controllers\Admin\OptionController::class, 'deleteWatermark'])->name('watermark.delete');

    Route::post('news/related', [NewsController::class, 'related'])->name('news.related');
    Route::get('news/{news}/preview', [NewsController::class, 'preview'])
    ->name('news.preview');
    Route::resource('news', NewsController::class);
    Route::patch('news/{news}/status', [NewsController::class, 'updateStatus'])->name('news.update.status');
    Route::patch('news/{news}/highlight', [NewsController::class, 'highlight'])->name('news.highlight');
    Route::patch('news/{news}/set-hero', [NewsController::class, 'setHero'])->name('news.set-hero');
    Route::patch('news/quick-update/{news}', [NewsController::class, 'quickUpdate'])->name('news.quick_update');
    Route::post('news/bulk-status', [NewsController::class, 'bulkStatusUpdate'])->name('news.bulk-status');
    
    Route::resource('categories', CategoryController::class);
    Route::post('categories/reorder', [CategoryController::class, 'reorder'])->name('categories.reorder');
    Route::resource('tags', TagController::class);
    Route::resource('journalists', App\Http\Controllers\Admin\JournalistController::class);
    Route::patch('journalists/{journalist}/status', [App\Http\Controllers\Admin\JournalistController::class, 'updateStatus'])->name('journalists.update.status');
    Route::resource('users', App\Http\Controllers\Admin\UserController::class);
    Route::patch('users/{user}/status', [App\Http\Controllers\Admin\UserController::class, 'updateStatus'])->name('users.update.status');
    Route::get('countries/{country}/cities', [App\Http\Controllers\Admin\CountryController::class, 'cities'])->name('admin.countries.cities');
    
    // Rutas para Empleos (Vacancies)
    Route::resource('vacancies', App\Http\Controllers\Admin\VacancyController::class);

    // Rutas para Audio Reportajes
    Route::resource('audio_reports', App\Http\Controllers\Admin\AudioReportController::class);

    // Rutas para Banners (Publicidad)
    Route::resource('banners', App\Http\Controllers\Admin\BannerController::class);

    // Rutas de Perfil y Contraseña
    Route::get('profile', [App\Http\Controllers\Admin\ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('profile', [App\Http\Controllers\Admin\ProfileController::class, 'update'])->name('profile.update');
    Route::get('password', [App\Http\Controllers\Admin\ProfileController::class, 'editPassword'])->name('password.edit');
    Route::put('password', [App\Http\Controllers\Admin\ProfileController::class, 'updatePassword'])->name('password.update');

   
});

// Comentamos las rutas de auth de Breeze para usar las de Blade
// require __DIR__.'/auth.php';
