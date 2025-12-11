<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Admin\Traits\HandlesImages;

use App\Http\Controllers\Controller;
use Intervention\Image\ImageManager;
use App\Models\News;
use App\Models\Author;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\City;
use App\Models\Tag;
use Illuminate\Support\Facades\Storage;
use App\Models\Option;


class NewsController extends Controller

{
   use HandlesImages;

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
       $watermarkPath = Option::where( 'key', 'watermark_image_path' )->value('value');

        $news = new News();


        return view('admin.news.create', compact('authors', 'categories', 'countries', 'tags', 'news', 'watermarkPath'));
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
            'city_id' => 'required|exists:cities,id',
            'country_id' => 'required|exists:countries,id',
            'tags' => 'nullable|array',
            'tags.*' => 'distinct',
            'add_watermark' => 'sometimes|boolean', // <-- validación añadida
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

        // Manejar la subida de imagen usando el trait
        $imagePath = $this->handleImageUpload($request);

        if ($imagePath) {
            $data['image_path'] = $imagePath;
            
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
        $tags = Tag::orderBy('name')->get();
        $watermarkPath = Option::where( 'key', 'watermark_image_path' )->value('value');
        
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

        return view('admin.news.edit', compact('news', 'authors', 'categories', 'countries', 'cities', 'country_id', 'city_id', 'tags', 'watermarkPath'));
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
    ]);

    // ✅ Resolver city / country
    $cityName = null;
    $countryName = null;

    if ($request->filled('city_id')) {
        $city = City::with('country')->find($request->city_id);
        $cityName = $city?->name;
        $countryName = $city?->country?->name;
    } elseif ($request->filled('country_id')) {
        $countryName = Country::find($request->country_id)?->name;
    }

    $data = $request->only(
        'title', 'slug', 'lead', 'excerpt',
        'caption', 'content', 'area', 'published_at'
    );

    $data['city'] = $cityName;
    $data['country'] = $countryName;

    // NUEVA LÓGICA DE IMAGEN
$applyWatermark = $request->boolean('add_watermark');
$imagePath = null;

if ($request->filled('cropped_image')) {
    // extraer base64
    $imageData = $request->input('cropped_image');
    if (strpos($imageData, ',') !== false) {
        [, $imageData] = explode(',', $imageData, 2);
    }
    $binary = base64_decode($imageData);

    $imagePath = $this->storeImageBinary(
        $binary,
        $news->image_path,
        $applyWatermark
    );
} elseif ($request->hasFile('image_path')) {
    // sigue funcionando para archivos físicos normales
    $binary = file_get_contents($request->file('image_path')->getRealPath());

    $imagePath = $this->storeImageBinary(
        $binary,
        $news->image_path,
        $applyWatermark
    );
} elseif ($applyWatermark && $news->image_path) {
    $binary = Storage::disk('public')->get($news->image_path);

    $imagePath = $this->storeImageBinary(
        $binary,
        $news->image_path,
        true
    );
}

if ($imagePath) {
    $data['image_path'] = $imagePath;
}


    $news->update($data);

    // ✅ Relaciones
    $news->categories()->sync($request->categories);
    $news->author()->sync($request->author_id);

    // ✅ Tags
    $tagIds = [];
    foreach ($request->input('tags', []) as $t) {
        if (is_numeric($t) && Tag::where('id', $t)->exists()) {
            $tagIds[] = (int) $t;
        } else {
            $name = trim($t);
            if ($name !== '') {
                $tagIds[] = Tag::firstOrCreate(['name' => $name])->id;
            }
        }
    }
    $news->tags()->sync($tagIds);

    return redirect()
        ->route('admin.news.index')
        ->with('success', 'News updated successfully.');
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
public function related(Request $request)
{
    $categoryIds = $request->input('categoryIds', []);
    $tagIds = $request->input('tagIds', []);
    $excludeId = $request->input('excludeId'); // null si es creación
    $limit = $request->input('limit', 5);

    $related = News::relatedBy(
        $categoryIds,
        $tagIds,
        $excludeId,
        $limit
    )->get(['id', 'title', 'slug', 'published_at']);

    return response()->json($related);
}

}
