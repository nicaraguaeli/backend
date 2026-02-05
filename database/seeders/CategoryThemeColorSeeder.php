<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoryThemeColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categoryColors = [
            // Salud y Bienestar - Morado
            'a-tu-salud' => ['primary' => '#6f42c1', 'secondary' => '#9b59b6'],
            'salud' => ['primary' => '#6f42c1', 'secondary' => '#9b59b6'],
            'bienestar' => ['primary' => '#6f42c1', 'secondary' => '#9b59b6'],
            
            // Deportes - Verde
            'deportes' => ['primary' => '#10b981', 'secondary' => '#34d399'],
            'sports' => ['primary' => '#10b981', 'secondary' => '#34d399'],
            
            // Arte y Cultura - Naranja/Dorado
            'arte' => ['primary' => '#f59e0b', 'secondary' => '#fbbf24'],
            'cultura' => ['primary' => '#f59e0b', 'secondary' => '#fbbf24'],
            'arte-y-cultura' => ['primary' => '#f59e0b', 'secondary' => '#fbbf24'],
            
            // Política - Rojo
            'politica' => ['primary' => '#dc2626', 'secondary' => '#ef4444'],
            'nacional' => ['primary' => '#dc2626', 'secondary' => '#ef4444'],
            'nacionales' => ['primary' => '#dc2626', 'secondary' => '#ef4444'],
            
            // Economía - Cyan
            'economia' => ['primary' => '#0891b2', 'secondary' => '#06b6d4'],
            'negocios' => ['primary' => '#0891b2', 'secondary' => '#06b6d4'],
            
            // Tecnología - Púrpura
            'tecnologia' => ['primary' => '#7c3aed', 'secondary' => '#a78bfa'],
            'tech' => ['primary' => '#7c3aed', 'secondary' => '#a78bfa'],
            
            // Entretenimiento - Rosa
            'entretenimiento' => ['primary' => '#ec4899', 'secondary' => '#f472b6'],
            'espectaculos' => ['primary' => '#ec4899', 'secondary' => '#f472b6'],
            
            // Internacional - Azul
            'internacional' => ['primary' => '#2563eb', 'secondary' => '#3b82f6'],
            'mundo' => ['primary' => '#2563eb', 'secondary' => '#3b82f6'],
        ];

        foreach ($categoryColors as $slug => $colors) {
            Category::where('slug', $slug)->update([
                'theme_color' => $colors['primary'],
                'theme_color_secondary' => $colors['secondary']
            ]);
        }

        $this->command->info('Category theme colors updated successfully!');
    }
}
