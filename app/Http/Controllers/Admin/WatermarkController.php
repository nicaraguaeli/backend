<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\JsonResponse;

class WatermarkController extends Controller
{
    /**
     * Upload watermark image (AJAX).
     * Accepts: watermark (file), add_watermark (optional flag)
     */
    public function upload(Request $request): JsonResponse
    {
        // if client didn't send a file and didn't ask to upload, return a benign response
        if (!$request->hasFile('watermark')) {
            // If client explicitly requested upload (flag), return error
            if ($request->boolean('add_watermark')) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se recibió el archivo de marca de agua.'
                ], 422);
            }
            return response()->json(['success' => true, 'message' => 'No file provided.'], 200);
        }

        $file = $request->file('watermark');

        // validate file
        $validated = $request->validate([
            'watermark' => 'required|image|mimes:png,jpeg,webp|max:2048',
        ]);

        try {
            $path = $file->store('watermarks', 'public');

            // opcional: si quieres exponer ruta pública
            $publicPath = asset('storage/' . $path);

            return response()->json([
                'success' => true,
                'message' => 'Marca de agua subida.',
                'path' => $publicPath,
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al guardar la marca de agua.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}