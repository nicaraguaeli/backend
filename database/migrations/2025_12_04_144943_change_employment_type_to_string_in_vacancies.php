<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('vacancies', function (Blueprint $table) {
        $table->string('employment_type')->change();
    });
}

public function down()
{
    Schema::table('vacancies', function (Blueprint $table) {
        $table->enum('employment_type', [
            'Tiempo completo',
            'Medio tiempo',
            'Remoto',
            'Temporal',
            'Por proyecto'
        ])->change();
    });
}

};
