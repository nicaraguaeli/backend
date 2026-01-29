<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;
use Illuminate\Support\Facades\Storage;

class BannerController extends Controller
{
    public function index()
    {
        $banners = Banner::latest()->paginate(10);
        return view('admin.banners.index', compact('banners'));
    }

    public function create()
    {
        return view('admin.banners.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,gif,mp4,webm|max:51200',
            'link' => 'nullable|url|max:255',
            'position' => 'nullable|string|max:50',
            // 'is_active' removed, defaulting to true
        ]);

        $data = $request->only(['link', 'position']);
        $data['is_active'] = true; // Default to active on creation

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('banners', 'public');
            $data['file_path'] = $path;
            $data['mime_type'] = $file->getMimeType();
        }

        Banner::create($data);

        return redirect()->route('admin.banners.index')->with('success', 'Banner creado exitosamente.');
    }

    public function edit(Banner $banner)
    {
        return view('admin.banners.edit', compact('banner'));
    }

    public function update(Request $request, Banner $banner)
    {
        // Check for toggle partial update
        if ($request->expectsJson() && $request->has('is_active') && count($request->all()) === 1) {
             $request->validate(['is_active' => 'boolean']);
             $banner->update(['is_active' => $request->input('is_active')]);
             return response()->json(['success' => true, 'message' => 'Estado actualizado.']);
        }

        $request->validate([
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif,mp4,webm|max:10240',
            'link' => 'nullable|url|max:255',
            'position' => 'nullable|string|max:50',
        ]);

        $data = $request->only(['link', 'position']);
        
        if ($request->hasFile('file')) {
            // Delete old file
            if ($banner->file_path) {
                Storage::disk('public')->delete($banner->file_path);
            }
            $file = $request->file('file');
            $path = $file->store('banners', 'public');
            $data['file_path'] = $path;
            $data['mime_type'] = $file->getMimeType();
        }

        $banner->update($data);

        return redirect()->route('admin.banners.index')->with('success', 'Banner actualizado.');
    }

    public function destroy(Banner $banner)
    {
        if ($banner->file_path) {
            Storage::disk('public')->delete($banner->file_path);
        }
        $banner->delete();
        return redirect()->route('admin.banners.index')->with('success', 'Banner eliminado.');
    }
}
