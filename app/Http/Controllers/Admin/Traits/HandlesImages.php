<?php

namespace App\Http\Controllers\Admin\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Option;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

trait HandlesImages
{
    protected function handleImageUpload(Request $request, ?string $oldPath = null): ?string
    {
        $applyWatermark   = $request->boolean('add_watermark');
        $watermarkOpacity = $request->integer('watermark_opacity', 50);

        // Caso: imagen recortada (base64)
        if ($request->filled('cropped_image')) {

            $base64 = $request->input('cropped_image');
            

            if (strpos($base64, ',') !== false) {
                [, $data] = explode(',', $base64, 2);
            } else {
                $data = $base64;
            }

            $binary = base64_decode($data);

            if ($binary === false) {
               
                return null;
            }

            return $this->storeImageBinary($binary, $oldPath, $applyWatermark, $watermarkOpacity);
        }

        // Caso: archivo tradicional
        if ($request->hasFile('image_path') && $request->file('image_path')->isValid()) {
            
            $binary = file_get_contents($request->file('image_path')->getRealPath());
            return $this->storeImageBinary($binary, $oldPath, $applyWatermark, $watermarkOpacity);
        }

        return null;
    }


   protected function storeImageBinary(
    string $binary,
    ?string $oldPath = null,
    bool $applyWatermark = false,
    int $watermarkOpacity = 100
): ?string {


     // 📅 Carpeta por mes-año (01-2026)
    $folder = 'news/' . now()->format('m-Y');

     // 🖼️ Nombre final del archivo
    $filename = $folder . '/' . Str::random(40) . '.jpg';
    

    try {

        Storage::disk('public')->makeDirectory('news');

        $manager = ImageManager::gd();
        $img = $manager->read($binary);
       
        // ✅ SOLO modificación
        if ($applyWatermark) {

            $watermarkOption = Option::where(
                'key',
                'watermark_image_path'
            )->first();

            if ($watermarkOption && Storage::disk('public')->exists($watermarkOption->value)) {

                $watermarkBinary = Storage::disk('public')->get($watermarkOption->value);
                $watermark = $manager->read($watermarkBinary);

                        $watermark->resize(
                        $img->width(),
                        $img->height()
                    );

                    $img->place(
                        $watermark,
                        'top-left',
                        0,
                        0,
                        $watermarkOpacity
                    );
            }
        }

        // ✅ Guardar nueva imagen ANTES de borrar la anterior.
        // Si falla aquí, la imagen anterior queda intacta (catch retorna null sin borrar nada).
        Storage::disk('public')->put(
            $filename,
            $img->toJpeg(90)
        );

        // ✅ Solo borrar la imagen anterior DESPUÉS de confirmar que la nueva se guardó.
        if ($oldPath && $oldPath !== $filename) {
            Storage::disk('public')->delete($oldPath);
        }

        return $filename;

    } catch (\Throwable $e) {
        report($e);
        return null;
    }
}



    
}


