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
        Schema::create('vacancies', function (Blueprint $table) {
            
            $table->id();
            // Información principal
            $table->string('title'); // Locutor / Presentador de Radio
            $table->string('company'); // Radio ABC Stereo

            // Ubicación
            $table->string('city'); // Estelí
            $table->string('country')->default('Nicaragua');

            // Tipo de empleo
            $table->string('employment_type');

            // Contenido
            $table->text('description');

            // Fechas
            $table->date('expires_at');

            // Estado
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
