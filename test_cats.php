<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$cat = App\Models\Category::with('children')->where('name', 'Noticias ABC')->first();
echo "Noticias ABC Total children: " . $cat->children->count() . "\n";
foreach($cat->children as $child) {
    echo " - " . $child->name . " (is_active: " . $child->is_active . ", show_in_menu: " . $child->show_in_menu . ")\n";
}
