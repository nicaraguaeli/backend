<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Author;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\City;
use App\Models\Tag;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        // base query
        $query = News::with('author', 'categories');

        // search by title
        if ($request->filled('q')) {
            $q = $request->input('q');
            $query->where('title', 'like', "%{$q}%");
        }

        // filter by author id
        if ($request->filled('author')) {
            $query->whereHas('author', function ($qb) use ($request) {
                $qb->where('authors.id', $request->input('author'));
            });
        }

        // filter by category id
        if ($request->filled('category')) {
            $query->whereHas('categories', function ($qb) use ($request) {
                $qb->where('categories.id', $request->input('category'));
            });
        }

        // paginate and preserve query string
        $news = $query->orderBy('id', 'desc')->paginate(20)->appends($request->query());

        // load helper lists once
        $categories = Category::orderBy('name')->get();
        $authors = Author::orderBy('name')->get();

        return view('admin.news.index', compact('news', 'categories', 'authors'));
    }

    public function create()
    {
        $authors = Author::all();
        $categories = Category::all();
        $countries = Country::orderBy('name')->get();
        $tags = Tag::orderBy('name')->get();

        $news = new News();


        return view('admin.news.create', compact('authors', 'categories', 'countries', 'tags', 'news'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'slug'=> 'required',
            'lead' => 'required',
            'excerpt' => 'required',
            'caption' => 'required',
            'area' => 'required',
            'published_at' => 'required',
            'image_path' => 'required|image',
            'content' => 'required',
            'author_id' => 'required|array',
            'author_id.*' => 'exists:authors,id',
            'categories' => 'required|array',
            'categories.*' => 'exists:categories,id',
            'city_id' => 'nullable|exists:cities,id',
            'country_id' => 'nullable|exists:countries,id',
            'tags' => 'nullable|array',
            'tags.*' => 'distinct',
        ]);

        // Resolve city and country names
        $cityName = null;
        $countryName = null;

        if ($request->filled('city_id')) {
            $city = City::with('country')->find($request->city_id);
            if ($city) {
                $cityName = $city->name;
                $countryName = $city->country->name ?? null;
            }
        } elseif ($request->filled('country_id')) {
            $country = Country::find($request->country_id);
            $countryName = $country->name ?? null;
        }

        // Prepare data to create News
        $data = $request->only('title', 'slug', 'lead', 'excerpt', 'caption', 'content', 'area', 'published_at');
        $data['city'] = $cityName;
        $data['country'] = $countryName;

        // Handle image upload
        if ($request->hasFile('image_path')) {
            $data['image_path'] = $request->file('image_path')->store('news', 'public');
        }

        $news = News::create($data);

        // Sync relations (authors can be multiple)
        $news->categories()->sync($request->categories);
        $news->author()->sync($request->author_id);

        // Tags: accept IDs or new names; create missing tags
        $tagIds = [];
        foreach ($request->input('tags', []) as $t) {
            if (is_numeric($t) && Tag::where('id', (int)$t)->exists()) {
                $tagIds[] = (int)$t;
            } else {
                $name = trim((string)$t);
                if ($name === '') continue;
                $tag = Tag::firstOrCreate(['name' => $name]);
                $tagIds[] = $tag->id;
            }
        }
        $news->tags()->sync($tagIds);

        return redirect()->route('admin.news.index')->with('success', 'News created successfully.');
    }

    public function show(News $news)
    {
        return view('admin.news.show', compact('news'));
    }

    public function edit(News $news)
    {
        $authors = Author::all();
        $categories = Category::all();
        $countries = Country::orderBy('name')->get();
        
        // Find the country by name to get its ID
        $country = Country::where('name', $news->country)->first();
        $country_id = $country ? $country->id : null;

        // Find the city by name to get its ID
        $city = City::where('name', $news->city)->first();
        $city_id = $city ? $city->id : null;

        $cities = [];
        if ($country_id) {
            $cities = City::where('country_id', $country_id)->orderBy('name')->get();
        }

        return view('admin.news.edit', compact('news', 'authors', 'categories', 'countries', 'cities', 'country_id', 'city_id'));
    }

    public function update(Request $request, News $news)
    {
        $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:news,slug,' . $news->id,
            'lead' => 'required',
            'excerpt' => 'required',
            'caption' => 'required',
            'area' => 'required',
            'published_at' => 'required',
            'image_path' => 'nullable|image',
            'content' => 'required',
            'author_id' => 'required|array',
            'author_id.*' => 'exists:authors,id',
            'categories' => 'required|array',
            'categories.*' => 'exists:categories,id',
            'city_id' => 'nullable|exists:cities,id',
            'country_id' => 'nullable|exists:countries,id',
            'tags' => 'nullable|array',
            'tags.*' => 'distinct',
        ]);

        // Resolve city and country names
        $cityName = null;
        $countryName = null;

        if ($request->filled('city_id')) {
            $city = City::with('country')->find($request->city_id);
            if ($city) {
                $cityName = $city->name;
                $countryName = $city->country->name ?? null;
            }
        } elseif ($request->filled('country_id')) {
            $country = Country::find($request->country_id);
            $countryName = $country->name ?? null;
        }

        // Prepare data to update News
        $data = $request->only('title', 'slug', 'lead', 'excerpt', 'caption', 'content', 'area', 'published_at');
        $data['city'] = $cityName;
        $data['country'] = $countryName;

        // Handle image upload
        if ($request->hasFile('image_path')) {
            // Delete old image
            if ($news->image_path) {
                Storage::disk('public')->delete($news->image_path);
            }
            $data['image_path'] = $request->file('image_path')->store('news', 'public');
        }

        $news->update($data);

        // Sync relations
        $news->categories()->sync($request->categories);
        $news->author()->sync($request->author_id);

        // Tags: accept IDs or new names; create missing tags
        $tagIds = [];
        foreach ($request->input('tags', []) as $t) {
            if (is_numeric($t) && Tag::where('id', (int)$t)->exists()) {
                $tagIds[] = (int)$t;
            } else {
                $name = trim((string)$t);
                if ($name === '') continue;
                $tag = Tag::firstOrCreate(['name' => $name]);
                $tagIds[] = $tag->id;
            }
        }
        $news->tags()->sync($tagIds);

        return redirect()->route('admin.news.index')->with('success', 'News updated successfully.');
    }

    public function destroy(News $news)
    {
        $news->delete();

        return redirect()->route('admin.news.index')->with('success', 'News deleted successfully.');
    }

    public function updateStatus(Request $request, News $news)
    {
        $request->validate([
            'status' => 'required|boolean',
        ]);

        $news->status = $request->status;
        $news->save();

        return response()->json(['success' => true, 'message' => 'News status updated successfully.']);
    }

    public function highlight(Request $request, News $news)
    {
        $news->is_featured = !$news->is_featured;
        $news->save();

        return response()->json(['success' => true, 'is_featured' => $news->is_featured]);
    }

    public function quickUpdate(Request $request, News $news)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:news,slug,' . $news->id,
            'categories' => 'sometimes|array',
            'categories.*' => 'exists:categories,id',
            'tags' => 'nullable|array',
            'tags.*' => 'distinct',
        ]);

        $news->update($request->only('title', 'slug'));

        if ($request->has('categories')) {
            $news->categories()->sync($request->categories);
        }

        // Tags: accept IDs or new names; create missing tags
        if ($request->has('tags')) {
            $tagIds = [];
            foreach ($request->input('tags', []) as $t) {
                if (is_numeric($t) && Tag::where('id', (int)$t)->exists()) {
                    $tagIds[] = (int)$t;
                } else {
                    $name = trim((string)$t);
                    if ($name === '') continue;
                    $tag = Tag::firstOrCreate(['name' => $name]);
                    $tagIds[] = $tag->id;
                }
            }
            $news->tags()->sync($tagIds);
        }

        return redirect()->route('admin.news.index')->with('success', 'News updated successfully.');
    }

    public function bulkStatusUpdate(Request $request)
{
    $request->validate([
        'ids' => 'required|array',
        'ids.*' => 'exists:news,id',
        'action' => 'required|string|in:publish,unpublish',
    ]);

    $ids = $request->input('ids');
    $action = $request->input('action');

    $status = $action === 'publish';
    $published_at = $status ? now() : null;

    News::whereIn('id', $ids)->update([
        'status' => $status,

    ]);

    $message = $action === 'publish'
        ? 'Noticias publicadas correctamente.'
        : 'Noticias despublicadas correctamente.';

    return response()->json(['success' => true, 'message' => $message]);
}
}
