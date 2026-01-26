<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AudioReport;
use App\Models\Author;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AudioReportController extends Controller
{
    public function index()
    {
        $audioReports = AudioReport::latest()->paginate(10);
        return view('admin.audio_reports.index', compact('audioReports'));
    }

    public function create()
    {
        $authors = Author::all();
        $categories = Category::all();
        $audioReport = new AudioReport(); // empty model so the form partial can safely read properties
        return view('admin.audio_reports.create', compact('authors', 'categories', 'audioReport'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'audio' => 'nullable|file|mimes:mp3,wav,ogg|max:10240', // 10MB max
            'author_id' => 'nullable|exists:authors,id',
            'categories' => 'nullable|array',
            'categories.*' => 'exists:categories,id',
            'published_at' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        $data = $request->except(['image', 'audio', 'categories']);
        $data['slug'] = Str::slug($request->title);
        $data['is_active'] = $request->has('is_active');

        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('audio_reports/images', 'public');
        }

        if ($request->hasFile('audio')) {
            $data['audio_url'] = $request->file('audio')->store('audio_reports/audios', 'public');
        }

        $audioReport = AudioReport::create($data);

        if ($request->has('categories')) {
            $audioReport->categories()->sync($request->categories);
        }

        return redirect()->route('admin.audio_reports.index')
            ->with('success', 'Audio Reportaje creado exitosamente.');
    }

    public function show(AudioReport $audioReport)
    {
        //
    }

    public function edit(AudioReport $audioReport)
    {
        $authors = Author::all();
        $categories = Category::all();
        return view('admin.audio_reports.edit', compact('audioReport', 'authors', 'categories'));
    }

    public function update(Request $request, AudioReport $audioReport)
    {
        // 🔹 CASO 1: Toggle is_active (update parcial)
    if ($request->has('is_active') && $request->keys() === ['is_active']) {
        $audioReport->update([
            'is_active' => $request->boolean('is_active'),
        ]);

        return response()->json([
            'success' => true,
            'is_active' => $audioReport->is_active,
        ]);
    }

    // 🔹 CASO 2: Update completo
        $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'audio' => 'nullable|file|mimes:mp3,wav,ogg|max:10240',
            'author_id' => 'nullable|exists:authors,id',
            'categories' => 'nullable|array',
            'categories.*' => 'exists:categories,id',
            'published_at' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        $data = $request->except(['image', 'audio', 'categories']);
        $data['slug'] = Str::slug($request->title);
        

        // Handle image upload (replace)
        if ($request->hasFile('image')) {
            // delete old image if exists
            if (!empty($audioReport->image_path) && Storage::disk('public')->exists($audioReport->image_path)) {
                Storage::disk('public')->delete($audioReport->image_path);
            }
            $data['image_path'] = $request->file('image')->store('audio_reports/images', 'public');
        }

        // Handle audio upload (replace)
        if ($request->hasFile('audio')) {
            if (!empty($audioReport->audio_url) && Storage::disk('public')->exists($audioReport->audio_url)) {
                Storage::disk('public')->delete($audioReport->audio_url);
            }
            $data['audio_url'] = $request->file('audio')->store('audio_reports/audios', 'public');
        }

        $audioReport->update($data);

        // Sync categories (allow empty array to clear)
        $audioReport->categories()->sync($request->input('categories', []));

        return redirect()->route('admin.audio_reports.index')
            ->with('success', 'Audio Reportaje actualizado exitosamente.');
    }

    public function destroy(AudioReport $audioReport)
    {
        //
    }
}
