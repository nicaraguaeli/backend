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
            'name' => 'required|string|max:191',
        ]);

        // Normalizar nombre y generar slug desde el mismo valor
        $name = trim($validated['name']);
        $base = \Illuminate\Support\Str::slug($name);
        if ($base === '') {
            // fallback si el nombre no genera un slug válido
            $base = 'categoria-' . time();
        }

        $slug = $base;
        $i = 1;
        while (Category::where('slug', $slug)->exists()) {
            $slug = $base . '-' . $i++;
        }

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
            return response()->json(['success' => true, 'data' => $category], 201);
        }

        return redirect()->route('admin.categories.index')->with('success', 'Categoría creada.');
    }

    public function update(Request $request, Category $category)
    {
        $data = $request->validate([
            'name' => 'required|string|max:191',
        ]);

        $category->update($data);

        if ($request->expectsJson()) {
            return response()->json(['success' => true, 'data' => $category]);
        }

        return redirect()->route('admin.categories.index')->with('success', 'Categoría actualizada.');
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('admin.categories.index')->with('success', 'Categoría eliminada con éxito.');
    }
}