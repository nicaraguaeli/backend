<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{


    //
    public function index()
    {
        $news = \App\Models\News::with('categories', 'author', 'tags')->get();
        return response()->json($news);
    }
}
