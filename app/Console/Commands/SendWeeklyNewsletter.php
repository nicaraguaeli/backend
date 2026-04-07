<?php

namespace App\Console\Commands;

use App\Mail\WeeklyNewsDigest;
use App\Models\News;
use App\Models\Subscriber;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendWeeklyNewsletter extends Command
{
    protected $signature   = 'newsletter:send-weekly';
    protected $description = 'Envía el resumen semanal de noticias a todos los suscriptores';

    public function handle(): int
    {
        // Noticias de los últimos 7 días
        $newsCollection = News::with(['categories', 'author'])
            ->where('is_published', true)
            ->where('published_at', '>=', now()->subDays(7))
            ->orderBy('published_at', 'desc')
            ->take(8)
            ->get();

        if ($newsCollection->isEmpty()) {
            $this->warn('No hay noticias publicadas esta semana. No se envió ningún correo.');
            return self::SUCCESS;
        }

        $subscribers = Subscriber::whereNotNull('confirmed_at')->get();

        if ($subscribers->isEmpty()) {
            $this->warn('No hay suscriptores confirmados.');
            return self::SUCCESS;
        }

        $sent = 0;
        $failed = 0;

        foreach ($subscribers as $subscriber) {
            try {
                Mail::to($subscriber->email)
                    ->send(new WeeklyNewsDigest($newsCollection, $subscriber->unsubscribe_token));
                $sent++;
                $this->line("  ✓ Enviado a: {$subscriber->email}");
            } catch (\Throwable $e) {
                $failed++;
                $this->error("  ✗ Error con {$subscriber->email}: " . $e->getMessage());
            }
        }

        $this->info("\n✅ Boletín enviado: {$sent} exitosos, {$failed} fallidos.");

        return self::SUCCESS;
    }
}
