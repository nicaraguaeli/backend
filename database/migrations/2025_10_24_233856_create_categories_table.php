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
        Schema::create('categories', function (Blueprint $table) {
            
            $table->id();
            $table->string('name', 100);
            $table->string('slug', 100)->unique();
            $table->boolean('is_active')->default(true);    // activa por defecto
            $table->boolean('is_featured')->default(false); // no destacada por defecto
            $table->boolean('show_in_menu')->default(false); // no mostrar en el menú por defecto
            $table->unsignedInteger('menu_order')->default(0); // orden por defecto
            $table->string('image_path', 255)->nullable();    // Imagen de la categoría
            $table->timestamps();

        
       
        
            //
        
    
        });
           
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
