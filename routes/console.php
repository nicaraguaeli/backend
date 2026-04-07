<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Boletín semanal: cada lunes a las 8:00 AM
Schedule::command('newsletter:send-weekly')->weeklyOn(1, '8:00');
