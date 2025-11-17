<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;
use Illuminate\Database\QueryException;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::withCount('news')->orderBy('name')->paginate(25);
        return view('admin.tags.index', compact('tags'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:191',
        ]);

        try {
            $tag = Tag::create($data);
        } catch (\Exception $e) {
            if ($request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Error al crear el tag.',
                    'error' => $e->getMessage()
                ], 500);
            }
            return redirect()->back()->withInput()->withErrors(['name' => 'Error al crear el tag.']);
        }

        // incluir news_count en la respuesta
        $tag->news_count = $tag->news()->count();

        if ($request->expectsJson()) {
            return response()->json(['success' => true, 'data' => $tag], 201);
        }

        return redirect()->route('admin.tags.index')->with('success', 'Tag creado.');
    }

    public function update(Request $request, Tag $tag)
    {
        $data = $request->validate([
            'name' => 'required|string|max:191',
        ]);

        try {
            $tag->update($data);
        } catch (\Exception $e) {
            if ($request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Error al actualizar el tag.',
                    'error' => $e->getMessage()
                ], 500);
            }
            return redirect()->back()->withErrors(['name' => 'Error al actualizar el tag.']);
        }

        $tag->news_count = $tag->news()->count();

        if ($request->expectsJson()) {
            return response()->json(['success' => true, 'data' => $tag]);
        }

        return redirect()->route('admin.tags.index')->with('success', 'Tag actualizado.');
    }

    public function destroy(Request $request, Tag $tag)
    {
        try {
            $tag->delete();
        } catch (QueryException $e) {
            $msg = 'No se pudo borrar la etiqueta.';
            if ($e->getCode() === '23000') {
                $msg = 'No se puede borrar: existen registros relacionados.';
            }
            if ($request->expectsJson()) {
                return response()->json(['success' => false, 'message' => $msg, 'error' => $e->getMessage()], 409);
            }
            return redirect()->back()->withErrors(['error' => $msg]);
        } catch (\Exception $e) {
            if ($request->expectsJson()) {
                return response()->json(['success' => false, 'message' => 'Error inesperado.'], 500);
            }
            return redirect()->back()->withErrors(['error' => 'Error inesperado.']);
        }

        if ($request->expectsJson()) {
            return response()->json(['success' => true]);
        }

        return redirect()->route('admin.tags.index')->with('success', 'Tag eliminado con éxito.');
    }
}