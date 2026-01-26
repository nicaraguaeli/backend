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
        
        Schema::create('audio_reports', function (Blueprint $table) {
            
            $table->id();

            $table->string('title');
            $table->string('slug')->unique();

            $table->text('excerpt')->nullable();
            $table->longText('content')->nullable();

            $table->string('image_path')->nullable();
            $table->string('audio_url');

            $table->unsignedBigInteger('author_id');

            $table->timestamp('published_at')->nullable();
            $table->boolean('is_active')->default(false);

            $table->timestamps();

            // Relaciones
            $table->foreign('author_id')
                  ->references('id')
                  ->on('authors')
                  ->onDelete('cascade');

            
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('audio_reports');
    }
};
