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
use App\Http\Controllers\Api\YoutubeController;

Route::get('/youtube', [YoutubeController::class, 'index']);
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

    // 2. Most Read News (Sidebar) — top 5 por vistas en los últimos 7 días
    $mostReadNews = \App\Models\News::with(['categories', 'author'])
        ->where('is_published', true)
        ->where('published_at', '>=', now()->subDays(7))
        ->orderBy('views', 'desc')
        ->take(5)
        ->get();

    // 3. Featured News (For FeaturedSection)
    $featuredNews = \App\Models\News::with(['categories', 'author'])
        ->where('is_published', true)
        ->where('is_featured', true)
        ->orderBy('published_at', 'desc')
        ->take(4)
        ->get();

    $isFallbackFeatured = false;
    if ($featuredNews->isEmpty()) {
        $featuredNews = \App\Models\News::with(['categories', 'author'])
            ->where('is_published', true)
            ->whereHas('categories', function ($q) {
                $q->where('slug', 'reportajes-abc');
            })
            ->orderBy('published_at', 'desc')
            ->take(4)
            ->get();
        $isFallbackFeatured = true;
    }

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



    // Serializar autor (many-to-many → objeto plano {id, name, type}) para todos los items
    // Esto hace que React pueda acceder a post.author.name en lugar de recibir una colección vacía
    $serializeAuthor = fn($news) => array_merge($news->toArray(), [
        'author' => $news->serialized_author,
    ]);
    $serializeCollection = fn($col) => $col->map($serializeAuthor)->values();

    return Inertia::render('Welcome', [
        'latestNews' => $latestNews ? $serializeAuthor($latestNews) : null,
        'mostReadNews' => $serializeCollection($mostReadNews),
        'featuredNews' => $serializeCollection($featuredNews),
        'isFallbackFeatured' => $isFallbackFeatured,
        'moreNews' => $serializeCollection($moreNews),
        'featuredCategories' => $featuredCategories,
        'nacionalesNews' => $serializeCollection($nacionalesNews),
        'internationalNews' => $serializeCollection($internationalNews),
        'banners' => $banners,

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

    $file = $request->file('image');
    $path = $file->store('news/images', 'public');

    if ($request->boolean('add_watermark')) {
        $manager = \Intervention\Image\ImageManager::gd();
        $image = $manager->read(\Illuminate\Support\Facades\Storage::disk('public')->get($path));
        
        $watermarkOption = \App\Models\Option::where('key', 'watermark_image_path')->first();
        if ($watermarkOption && \Illuminate\Support\Facades\Storage::disk('public')->exists($watermarkOption->value)) {
            $watermarkBinary = \Illuminate\Support\Facades\Storage::disk('public')->get($watermarkOption->value);
            $watermark = $manager->read($watermarkBinary);
            
            // Escalar watermark al 20% del ancho de la imagen para que coincida con la destacada
            $watermarkWidth = (int) ($image->width() * 0.2);
            $watermark->scale(width: $watermarkWidth);
            
            // Colocar en el centro
            $image->place($watermark, 'center', 10, 10, 50);
            
            // Save the image back
            $encodedImage = $image->toJpeg(90);
            \Illuminate\Support\Facades\Storage::disk('public')->put($path, (string) $encodedImage);
        }
    }

    return response()->json([
        'url' => asset('storage/' . $path),
        'caption' => $request->caption,
    ]);
});


Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
Route::get('/dashboard/stream-status', [App\Http\Controllers\HomeController::class, 'streamStatusAjax'])->middleware('auth')->name('dashboard.stream-status');


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
Route::get('/nota/{slug}', [BlogNewsController::class, 'show'])->name('news.show');


// Ruta de Búsqueda (React - página de resultados paginados)
Route::get('/search', [BlogNewsController::class, 'search'])->name('search');

// Ruta para Noticias por Autor (React - paginadas)
Route::get('/autor/{id}', [BlogNewsController::class, 'authorNews'])->name('author.news');


// Rutas API para el Blog (React consumirá esto)
Route::get('api/news', [BlogNewsController::class, 'index'])->name('api.news.index');

Route::get('api/categories', function () {
    return response()->json(\App\Models\Category::with('children')->whereNull('parent_id')->get());
})->name('api.categories.index');

// API para AudioReportajes (consumido por React)
Route::get('api/audioreportajes', [App\Http\Controllers\Api\AudioReportController::class, 'index'])->name('api.audioreportajes.index');

// Ruta para Detalle de AudioReportaje (React)
Route::get('/audioreportaje/{slug}', [App\Http\Controllers\Api\AudioReportController::class, 'show'])->name('audioreportaje.show');

// Suggestions endpoint for search typeahead
Route::get('api/news/suggestions', [App\Http\Controllers\Blog\NewsController::class, 'suggestions'])->name('api.news.suggestions');

// Boletín / Newsletter
Route::post('/boletin/suscribirse', [App\Http\Controllers\SubscriberController::class, 'subscribe'])->name('newsletter.subscribe');
Route::get('/boletin/cancelar/{token}', [App\Http\Controllers\SubscriberController::class, 'unsubscribe'])->name('newsletter.unsubscribe');


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
    Route::post('marca-agua/subir', [App\Http\Controllers\Admin\OptionController::class, 'uploadWatermark'])->name('watermark.upload');
    Route::delete('marca-agua/eliminar', [App\Http\Controllers\Admin\OptionController::class, 'deleteWatermark'])->name('watermark.delete');

    // Noticias
    Route::post('noticias/relacionadas', [NewsController::class, 'related'])->name('news.related');
    Route::get('noticias/{news}/vista-previa', [NewsController::class, 'preview'])->name('news.preview');
    Route::resource('noticias', NewsController::class)
        ->parameters(['noticias' => 'news'])
        ->names([
            'index' => 'news.index',
            'create' => 'news.create',
            'store' => 'news.store',
            'show' => 'news.show',
            'edit' => 'news.edit',
            'update' => 'news.update',
            'destroy' => 'news.destroy',
        ]);
    Route::patch('noticias/{news}/estado', [NewsController::class, 'updateStatus'])->name('news.update.status');
    Route::patch('noticias/{news}/destacar', [NewsController::class, 'highlight'])->name('news.highlight');
    Route::patch('noticias/{news}/hero', [NewsController::class, 'setHero'])->name('news.set-hero');
    Route::patch('noticias/actualizar-rapido/{news}', [NewsController::class, 'quickUpdate'])->name('news.quick_update');
    Route::post('noticias/estado-masivo', [NewsController::class, 'bulkStatusUpdate'])->name('news.bulk-status');

    // Categorías
    Route::resource('categorias', CategoryController::class)
        ->parameters(['categorias' => 'category'])
        ->names([
            'index' => 'categories.index',
            'create' => 'categories.create',
            'store' => 'categories.store',
            'show' => 'categories.show',
            'edit' => 'categories.edit',
            'update' => 'categories.update',
            'destroy' => 'categories.destroy',
        ]);
    Route::post('categorias/reordenar', [CategoryController::class, 'reorder'])->name('categories.reorder');

    // Etiquetas
    Route::resource('etiquetas', TagController::class)
        ->parameters(['etiquetas' => 'tag'])
        ->names([
            'index' => 'tags.index',
            'create' => 'tags.create',
            'store' => 'tags.store',
            'show' => 'tags.show',
            'edit' => 'tags.edit',
            'update' => 'tags.update',
            'destroy' => 'tags.destroy',
        ]);

    // Autores (antes: journalists)
    Route::resource('autores', App\Http\Controllers\Admin\JournalistController::class)
        ->parameters(['autores' => 'journalist'])
        ->names([
            'index' => 'journalists.index',
            'create' => 'journalists.create',
            'store' => 'journalists.store',
            'show' => 'journalists.show',
            'edit' => 'journalists.edit',
            'update' => 'journalists.update',
            'destroy' => 'journalists.destroy',
        ]);
    Route::patch('autores/{journalist}/estado', [App\Http\Controllers\Admin\JournalistController::class, 'updateStatus'])->name('journalists.update.status');

    // Usuarios
    Route::resource('usuarios', App\Http\Controllers\Admin\UserController::class)
        ->parameters(['usuarios' => 'user'])
        ->names([
            'index' => 'users.index',
            'create' => 'users.create',
            'store' => 'users.store',
            'show' => 'users.show',
            'edit' => 'users.edit',
            'update' => 'users.update',
            'destroy' => 'users.destroy',
        ]);
    Route::patch('usuarios/{user}/estado', [App\Http\Controllers\Admin\UserController::class, 'updateStatus'])->name('users.update.status');

    // Países / Ciudades
    Route::get('paises/{country}/ciudades', [App\Http\Controllers\Admin\CountryController::class, 'cities'])->name('admin.countries.cities');

    // Empleos
    Route::resource('empleos-admin', App\Http\Controllers\Admin\VacancyController::class)
        ->parameters(['empleos-admin' => 'vacancy'])
        ->names([
            'index' => 'vacancies.index',
            'create' => 'vacancies.create',
            'store' => 'vacancies.store',
            'show' => 'vacancies.show',
            'edit' => 'vacancies.edit',
            'update' => 'vacancies.update',
            'destroy' => 'vacancies.destroy',
        ]);

    // Audioreportajes
    Route::resource('audioreportajes-admin', App\Http\Controllers\Admin\AudioReportController::class)
        ->parameters(['audioreportajes-admin' => 'audio_report'])
        ->names([
            'index' => 'audio_reports.index',
            'create' => 'audio_reports.create',
            'store' => 'audio_reports.store',
            'show' => 'audio_reports.show',
            'edit' => 'audio_reports.edit',
            'update' => 'audio_reports.update',
            'destroy' => 'audio_reports.destroy',
        ]);

    // Publicidad / Banners
    Route::resource('publicidad', App\Http\Controllers\Admin\BannerController::class)
        ->parameters(['publicidad' => 'banner'])
        ->names([
            'index' => 'banners.index',
            'create' => 'banners.create',
            'store' => 'banners.store',
            'show' => 'banners.show',
            'edit' => 'banners.edit',
            'update' => 'banners.update',
            'destroy' => 'banners.destroy',
        ]);

    // Perfil y Contraseña
    Route::get('perfil', [App\Http\Controllers\Admin\ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('perfil', [App\Http\Controllers\Admin\ProfileController::class, 'update'])->name('profile.update');
    Route::get('contrasena', [App\Http\Controllers\Admin\ProfileController::class, 'editPassword'])->name('password.edit');
    Route::put('contrasena', [App\Http\Controllers\Admin\ProfileController::class, 'updatePassword'])->name('password.update');

    // Suscriptores del Boletín
    Route::get('suscriptores', [App\Http\Controllers\Admin\SubscriberAdminController::class, 'index'])->name('subscribers.index');
    Route::delete('suscriptores/{subscriber}', [App\Http\Controllers\Admin\SubscriberAdminController::class, 'destroy'])->name('subscribers.destroy');
    Route::post('suscriptores/enviar-ahora', [App\Http\Controllers\Admin\SubscriberAdminController::class, 'sendNow'])->name('subscribers.send-now');

});

// Comentamos las rutas de auth de Breeze para usar las de Blade
// require __DIR__.'/auth.php';
