<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class CorporateController extends Controller
{
    /**
     * Display the About Us page
     */
    public function about(): Response
    {
        return Inertia::render('Corporate/About', [
            'title' => 'Quiénes Somos - ABC Stereo'
        ]);
    }

    /**
     * Display the Advertising page
     */
    public function advertise(): Response
    {
        return Inertia::render('Corporate/Advertise', [
            'title' => 'Anúnciate con Nosotros - ABC Stereo'
        ]);
    }

    /**
     * Display the Contact page
     */
    public function contact(): Response
    {
        return Inertia::render('Corporate/Contact', [
            'title' => 'Contáctanos - ABC Stereo'
        ]);
    }

    /**
     * Display the Programming page
     */
    public function programming(): Response
    {
        return Inertia::render('Corporate/Programming', [
            'title' => 'Programación - ABC Stereo'
        ]);
    }
}
