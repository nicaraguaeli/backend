<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Option;
use Illuminate\Support\Facades\Storage;

class OptionController extends Controller
{
    public function uploadWatermark(Request $request)
    {
        
        
        $request->validate([
            'watermark' => 'required|image|mimes:png,jpg,jpeg|max:2048',
        ]);

        // Delete old watermark if it exists
        $this->deleteWatermarkImage();

        $path = $request->file('watermark')->store('watermarks', 'public');

        Option::updateOrCreate(
            ['key' => 'watermark_image_path'],
            ['value' => $path]
        );

        return response()->json([
            'success' => true,
            'path' => Storage::url($path)
        ]);
    }

    public function deleteWatermark()
    {
        $this->deleteWatermarkImage();

        return response()->json(['success' => true]);
    }

    private function deleteWatermarkImage()
    {
        $watermark = Option::where('key', 'watermark_image_path')->first();

        if ($watermark && Storage::disk('public')->exists($watermark->value)) {
            Storage::disk('public')->delete($watermark->value);
            $watermark->delete();
        }
    }
}
