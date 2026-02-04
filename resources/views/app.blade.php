<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

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
            <title inertia>Radio ABC Stereo | Inicio | ABC Stereo</title>
            <meta name="description" content="Noticias de última hora, deportes, farándula y la mejor programación musical.">
            <meta property="og:type" content="website">
            <meta property="og:title" content="Radio ABC Stereo | Inicio | ABC Stereo">
            <meta property="og:description" content="Noticias de última hora, deportes, farándula y la mejor programación musical.">
            <meta property="og:image" content="{{ asset('img/brand.png') }}">
        @endif

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=inter:300,400,500,600,700&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        <script>
            window.APP_URL = "{{ url('/') }}";
        </script>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
