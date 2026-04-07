<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    /** POST /boletin/suscribirse */
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255',
        ]);

        $email = strtolower(trim($request->email));

        // Si ya existe, no duplicar
        $existing = Subscriber::where('email', $email)->first();
        if ($existing) {
            return response()->json([
                'message' => '¡Ya estás suscrito! Pronto recibirás nuestro boletín.'
            ]);
        }

        Subscriber::create([
            'email'              => $email,
            'unsubscribe_token'  => Subscriber::generateToken(),
            'confirmed_at'       => now(), // Confirmación directa (sin doble opt-in por ahora)
        ]);

        return response()->json([
            'message' => '¡Gracias! Te has suscrito correctamente. 🎉'
        ]);
    }

    /** GET /boletin/cancelar/{token} */
    public function unsubscribe(string $token)
    {
        $subscriber = Subscriber::where('unsubscribe_token', $token)->firstOrFail();
        $subscriber->delete();

        return view('emails.unsubscribed');
    }
}
