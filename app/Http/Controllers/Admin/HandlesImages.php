<?php

namespace App\Http\Controllers\Admin\Traits;

use App\Models\Option;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Illuminate\Support\Str;

trait HandlesImages
{
    /**
     * Procesa y guarda una imagen, aplicando una marca de agua si es necesario.
     *
     * @param Request $request
     * @param string|null $existingImagePath La ruta de la imagen existente para eliminarla (en actualizaciones).
     * @return string|null La nueva ruta de la imagen o null si no se subió ninguna.
     */
    protected function handleImageUpload(Request $request, ?string $existingImagePath = null): ?string
    {
        if (!$request->filled('cropped_image') && !$request->hasFile('image_path')) {
            return null;
        }

        // Si es una actualización y hay una nueva imagen, elimina la anterior.
        if ($existingImagePath) {
            Storage::disk('public')->delete($existingImagePath);
        }

        $manager = ImageManager::gd();

        if ($request->filled('cropped_image')) {
            $base64_image = $request->input('cropped_image');
            @list($type, $file_data) = explode(';', $base64_image);
            @list(, $file_data) = explode(',', $file_data);
            $image = $manager->read(base64_decode($file_data));
        } else { // hasFile('image_path')
            $image = $manager->read($request->file('image_path'));
        }

        // Aplicar marca de agua si se solicita
        if ($request->boolean('add_watermark')) {
            $this->applyWatermark($image, $manager);
        }

        $imageName = 'news/' . Str::random(40) . '.jpg';
        $encodedImage = $image->toJpeg(90);
        Storage::disk('public')->put($imageName, (string) $encodedImage);

        return $imageName;
    }

    /**
     * Aplica la marca de agua a una imagen.
     *
     * @param \Intervention\Image\Interfaces\ImageInterface $image
     * @param ImageManager $manager
     */
    private function applyWatermark($image, ImageManager $manager): void
    {
        $watermarkOption = Option::where('key', 'watermark_image_path')->first();

        if ($watermarkOption && Storage::disk('public')->exists($watermarkOption->value)) {
            // Leer watermark como binario
            $watermarkBinary = Storage::disk('public')->get($watermarkOption->value);
            $watermark = $manager->read($watermarkBinary);

            // Aplicar watermark
            $image->place($watermark, 'bottom-right', 10, 10, 50);
        }
    }
}