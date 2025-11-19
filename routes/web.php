<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\CountryController;
use App\Http\Controllers\Blog\NewsController as BlogNewsController;

Route::get('/', function () {
    return view('welcome');
});
// ruta pública para obtener todas las noticias en JSON
    Route::get('api/news', [BlogNewsController::class, 'index'])->name('api.news.index');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'auth'], function () {
    Route::resource('news', NewsController::class);
    Route::patch('news/{news}/status', [NewsController::class, 'updateStatus'])->name('news.update.status');
    Route::patch('news/{news}/highlight', [NewsController::class, 'highlight'])->name('news.highlight');
    Route::patch('news/quick-update/{news}', [NewsController::class, 'quickUpdate'])->name('news.quick_update');
    Route::post('news/bulk-status', [NewsController::class, 'bulkStatusUpdate'])->name('news.bulk-status');
    Route::resource('categories', CategoryController::class);
    Route::resource('tags', TagController::class);
    Route::resource('journalists', App\Http\Controllers\Admin\JournalistController::class);
    Route::resource('users', App\Http\Controllers\Admin\UserController::class);
    Route::patch('users/{user}/status', [App\Http\Controllers\Admin\UserController::class, 'updateStatus'])->name('users.update.status');
    Route::get('countries/{country}/cities', [App\Http\Controllers\Admin\CountryController::class, 'cities'])->name('admin.countries.cities');
    
});

