<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        // traer categorías con el conteo de noticias relacionadas
        $categories = Category::withCount('news')
            ->orderBy('name')
            ->paginate(25);

        return view('admin.categories.index', compact('categories'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:191|unique:categories,name',
        ]);

        // Normalizar nombre y generar slug desde el mismo valor
        $name = trim($validated['name']);
        $slug = Str::slug($name);

        $data = [
            'name' => $name,
            'slug' => $slug,
        ];

        try {
            $category = Category::create($data);
        } catch (\Exception $e) {
            // para AJAX devolver JSON legible; otherwise redirect con error
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
            $category->loadCount('news');
            return response()->json(['success' => true, 'data' => $category], 201);
        }

        return redirect()->route('admin.categories.index')->with('success', 'Categoría creada.');
    }

    public function update(Request $request, Category $category)
    {
        // Si la petición contiene 'is_active' o 'is_featured', se valida y actualiza solo ese campo.
        if ($request->has('is_active') || $request->has('is_featured')) {
            $field = $request->has('is_active') ? 'is_active' : 'is_featured';
            $validated = $request->validate([
                $field => 'required|boolean',
            ]);
            $category->update($validated);
        } else {
            // De lo contrario, se valida y actualiza el nombre.
            $validated = $request->validate([
                'name' => 'required|string|max:191|unique:categories,name,' . $category->id,
            ]);
            $category->update([
                'name' => $validated['name'],
                'slug' => Str::slug($validated['name']),
            ]);
        }

        if ($request->expectsJson()) {
            return response()->json(['success' => true, 'data' => $category]);
        }

        return redirect()->route('admin.categories.index')->with('success', 'Categoría actualizada.');
    }

    public function destroy(Request $request, Category $category)
    {
        $category->delete();

        if ($request->expectsJson()) {
            return response()->json(['success' => true]);
        }

        return redirect()->route('admin.categories.index')->with('success', 'Categoría eliminada con éxito.');
    }
}