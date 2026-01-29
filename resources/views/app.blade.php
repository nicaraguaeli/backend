<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>Radio ABC Stereo | Inicio | ABC Stereo</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=inter:300,400,500,600,700&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        <script>
            // Force Ziggy to use the subdirectory path
            if (Ziggy && Ziggy.url) {
                // Ensure we don't double append if somehow it's already there
                const subPath = '/radioabc/public';
                if (!Ziggy.url.endsWith(subPath)) {
                    Ziggy.url = Ziggy.url.replace(/\/$/, '') + subPath;
                }
            }
        </script>
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
