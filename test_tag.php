<?php

use App\Models\Tag;
use Illuminate\Support\Facades\Validator;

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

echo "Testing Tag Creation...\n";

$data = [
    'name' => 'TestTag' . rand(1000, 9999),
];
$data['slug'] = strtolower($data['name']); // Simulating Str::slug

echo "Attempting to create tag: " . $data['name'] . "\n";

try {
    $tag = Tag::create($data);
    echo "Tag created successfully! ID: " . $tag->id . "\n";
    echo "Name: " . $tag->name . "\n";
} catch (\Exception $e) {
    file_put_contents('error_log.txt', (string) $e);
    echo "Error logged to error_log.txt\n";
}
