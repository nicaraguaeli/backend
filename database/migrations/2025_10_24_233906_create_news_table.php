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
        Schema::create('news', function (Blueprint $table) {
            
                
                $table->id();
                $table->string('title', 300);
                $table->string('slug', 255)->unique();
                $table->text('excerpt')->nullable();
                $table->text('lead')->nullable(); // <- Aquí lo agregamos
                $table->longText('content');
                $table->string('city', 100)->nullable();
                $table->string('country', 100)->nullable();
                $table->string('area', 100)->nullable();
                $table->string('image_path', 255)->nullable();
                $table->string('caption', 255)->nullable();              
                $table->timestamp('published_at')->nullable();
                $table->integer('views')->default(0);
                $table->boolean('is_featured')->default(false);
                $table->boolean('is_published')->default(false);
                $table->boolean('is_hero')->default(false);
                $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};
