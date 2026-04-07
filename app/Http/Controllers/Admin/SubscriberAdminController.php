<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\WeeklyNewsDigest;
use App\Models\News;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SubscriberAdminController extends Controller
{
    /** Lista todos los suscriptores */
    public function index()
    {
        $subscribers = Subscriber::orderBy('created_at', 'desc')->get();
        return view('admin.subscribers.index', compact('subscribers'));
    }

    /** Eliminar suscriptor */
    public function destroy(Subscriber $subscriber)
    {
        $subscriber->delete();
        return back()->with('success', 'Suscriptor eliminado.');
    }

    /** Enviar el boletín ahora (modo prueba) */
    public function sendNow(Request $request)
    {
        $subscribers = Subscriber::whereNotNull('confirmed_at')->get();

        if ($subscribers->isEmpty()) {
            return back()->with('error', 'No hay suscriptores confirmados.');
        }

        $news = News::with(['categories', 'author'])
            ->where('is_published', true)
            ->orderBy('published_at', 'desc')
            ->take(8)
            ->get();

        if ($news->isEmpty()) {
            return back()->with('error', 'No hay noticias publicadas para enviar.');
        }

        $sent = 0;
        $errors = [];

        foreach ($subscribers as $subscriber) {
            try {
                Mail::to($subscriber->email)
                    ->send(new WeeklyNewsDigest($news, $subscriber->unsubscribe_token));
                $sent++;
            } catch (\Throwable $e) {
                $errors[] = "{$subscriber->email}: " . $e->getMessage();
            }
        }

        if ($errors) {
            $msg = "Enviado a {$sent}. Errores: " . implode(' | ', $errors);
            return back()->with('error', $msg);
        }

        return back()->with('success', "✅ Boletín enviado exitosamente a {$sent} suscriptor(es).");
    }
}
