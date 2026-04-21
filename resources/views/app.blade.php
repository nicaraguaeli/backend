<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- ============================================================
             LCP FIX: Preload the hero image BEFORE React mounts.
             The browser will start downloading it immediately when it
             reads the HTML, instead of waiting for JS to execute.
        ============================================================ --}}
        @if (!empty($heroImageUrl))
            <link rel="preload" as="image" href="{{ $heroImageUrl }}" fetchpriority="high">
        @endif

        {{-- Preconnect para fuentes (reduce latencia DNS) --}}
        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link rel="dns-prefetch" href="https://fonts.bunny.net">

        @if (isset($meta))
            <title inertia>{{ $meta['title'] }}</title>
            <meta name="description" content="{{ $meta['description'] }}">

            <!-- Open Graph / Facebook -->
            <meta property="og:type" content="{{ $meta['type'] ?? 'website' }}">
            <meta property="og:url" content="{{ $meta['url'] ?? url()->current() }}">
            <meta property="og:title" content="{{ $meta['title'] }}">
            <meta property="og:description" content="{{ $meta['description'] }}">
            <meta property="og:image" content="{{ $meta['image'] }}">

            <!-- Twitter -->
            <meta property="twitter:card" content="summary_large_image">
            <meta property="twitter:url" content="{{ $meta['url'] ?? url()->current() }}">
            <meta property="twitter:title" content="{{ $meta['title'] }}">
            <meta property="twitter:description" content="{{ $meta['description'] }}">
            <meta property="twitter:image" content="{{ $meta['image'] }}">
        @else
            <title inertia>Radio ABC Stereo</title>
            <meta name="description" content="¡En las mejores calificaciones! Radio en vivo, Noticias ABC, música, salud, deportes y entretenimiento.">
            <meta property="og:type" content="website">
            <meta property="og:title" content="Radio ABC Stereo">
            <meta property="og:description" content="¡En las mejores calificaciones! Radio en vivo, Noticias ABC, música, salud, deportes y entretenimiento.">
            <meta property="og:image" content="{{ asset('storage/logotipo.png') }}">
        @endif

        <!-- Favicon -->
        <link rel="icon" href="{{ asset('storage/logotipo.png') }}" type="image/png">

        {{-- ============================================================
             CSS CRÍTICO INLINE: Evita el FOUC (flash de contenido sin estilo)
             y permite que el hero se pinte visualmente ANTES de que
             Bootstrap/SCSS termine de cargarse.
        ============================================================ --}}
        <style>
            /* Reset básico para evitar el salto de layout */
            *, *::before, *::after { box-sizing: border-box; }
            html, body { margin: 0; padding: 0; font-family: Inter, sans-serif; background: #fff; }

            /* Hero placeholder: evita CLS mientras carga la imagen */
            .hero-section {
                position: relative;
                display: flex;
                align-items: center;
                min-height: 80vh;
                background-color: #0b1c3a; /* color de fallback */
                overflow: hidden;
            }
            .hero-overlay {
                position: absolute; inset: 0; z-index: 1;
                background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,32,96,0.5) 50%, rgba(0,32,96,0.3) 100%);
            }
            /* Previene el destello blanco inicial del body */
            #app { min-height: 100vh; }
        </style>

        <!-- Fuentes — no bloquea render con display=swap -->
        <link href="https://fonts.bunny.net/css?family=inter:300,400,500,600,700&display=swap" rel="stylesheet">

        <!-- Scripts -->
        <script>
            window.APP_URL = "{{ url('/') }}";
        </script>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead

        {{-- ============================================================
             Google Analytics — cargado con defer (no bloquea el render)
             Se mueve al final del <head> para no competir con recursos críticos
        ============================================================ --}}
        <script defer src="https://www.googletagmanager.com/gtag/js?id=G-CN1GLDDTMK"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CN1GLDDTMK');
        </script>
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
