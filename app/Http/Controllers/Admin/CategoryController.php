<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\Traits\HandlesImages;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    use HandlesImages;

    public function index(Request $request)
    {
        // Order primarily by menu_order (nulls pushed to the end), then by name
        $categories = Category::withCount('news')
            ->orderByRaw('COALESCE(menu_order, 999999) asc')
            ->orderBy('name')
            ->paginate(25);

        return view('admin.categories.index', compact('categories'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:191|unique:categories,name',
            'slug' => 'required|string|max:191|unique:categories,slug',
            'image_path' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'theme_color' => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
            'theme_color_secondary' => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
        ]);

        $data = [
            'name' => trim($validated['name']),
            'slug' => Str::slug($validated['slug']),
            'theme_color' => $request->input('theme_color'),
            'theme_color_secondary' => $request->input('theme_color_secondary'),
        ];

        try {
            if ($request->hasFile('image_path')) {
                $data['image_path'] = $this->handleImageUpload($request);
            }

            // If menu_order not provided, set it to the end (max + 1)
            if (!isset($data['menu_order'])) {
                $max = Category::max('menu_order');
                $data['menu_order'] = $max ? $max + 1 : 1;
            }

            $category = Category::create($data);
        } catch (\Exception $e) {
            if ($request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Error al crear la categoría.',
                    'error' => $e->getMessage()
                ], 500);
            }
            return redirect()->back()->withInput()->withErrors(['name' => 'Error al crear la categoría.']);
        }

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true, 
                'data' => $category, 
                'message' => 'Categoría creada con éxito',
                'row_html' => view('admin.categories.partials.category-row', compact('category'))->render()
            ], 201);
        }

        return redirect()->route('admin.categories.index')->with('success', 'Categoría creada.');
    }

    public function update(Request $request, Category $category)
    {
        $isToggleRequest = count($request->all()) === 1 && 
            ($request->has('is_active') || $request->has('is_featured') || $request->has('show_in_menu') || $request->has('menu_order'));

        if ($isToggleRequest) {
            $validated = $request->validate([
                'is_active' => 'sometimes|boolean',
                'is_featured' => 'sometimes|boolean',
                'show_in_menu' => 'sometimes|boolean',
                'menu_order' => 'sometimes|integer',
            ]);
            $category->update($validated);
        } else {
            $validated = $request->validate([
                'name' => 'required|string|max:191|unique:categories,name,' . $category->id,
                'slug' => 'required|string|max:191|unique:categories,slug,' . $category->id,
                'image_path' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'theme_color' => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
                'theme_color_secondary' => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
            ]);

            $data = [
                'name' => trim($validated['name']),
                'slug' => Str::slug($validated['slug']),
                'theme_color' => $request->input('theme_color'),
                'theme_color_secondary' => $request->input('theme_color_secondary'),
            ];

            if ($request->hasFile('image_path')) {
                $data['image_path'] = $this->handleImageUpload($request, $category->image_path);
            }
            
            $category->update($data);
        }

        if ($request->expectsJson()) {
             return response()->json([
                'success' => true, 
                'data' => $category, 
                'message' => 'Categoría actualizada con éxito.',
                'row_html' => view('admin.categories.partials.category-row', compact('category'))->render()
            ]);
        }

        return redirect()->route('admin.categories.index')->with('success', 'Categoría actualizada.');
    }

    public function reorder(Request $request)
    {
        $validated = $request->validate([
            'order' => 'required|array',
            'order.*' => 'required|integer|exists:categories,id',
        ]);

        foreach ($validated['order'] as $index => $categoryId) {
            Category::where('id', $categoryId)->update(['menu_order' => $index + 1]);
        }

        return response()->json(['success' => true, 'message' => 'El orden de las categorías ha sido actualizado.']);
    }

    public function destroy(Request $request, Category $category)
    {
        if ($category->image) {
            Storage::disk('public')->delete($category->image);
        }
        $category->delete();

        if ($request->expectsJson()) {
            return response()->json(['success' => true, 'message' => 'Categoría eliminada.']);
        }

        return redirect()->route('admin.categories.index')->with('success', 'Categoría eliminada con éxito.');
    }
}