<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->string('theme_color', 7)->nullable()->after('image_path')->comment('Color hex para la temática de la categoría (ej: #6f42c1)');
            $table->string('theme_color_secondary', 7)->nullable()->after('theme_color')->comment('Color secundario para gradientes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn(['theme_color', 'theme_color_secondary']);
        });
    }
};
