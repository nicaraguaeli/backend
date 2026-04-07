<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resumen Semanal — Radio ABC Stereo</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Georgia, 'Times New Roman', serif; background: #f4f4f4; color: #1a1a1a; }
        .wrapper { max-width: 620px; margin: 30px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        /* Header */
        .header { background: #003087; padding: 32px 40px; text-align: center; }
        .header img { height: 48px; width: auto; }
        .header-title { color: #ffffff; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; margin-top: 12px; opacity: 0.8; font-family: Arial, sans-serif; }
        .red-bar { height: 4px; background: #dc2626; }
        /* Hero */
        .hero { padding: 32px 40px 24px; border-bottom: 1px solid #f0f0f0; }
        .week-label { display: inline-block; background: #dc2626; color: #fff; font-size: 11px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 3px; font-family: Arial, sans-serif; margin-bottom: 16px; }
        .hero h1 { font-size: 26px; color: #003087; line-height: 1.3; margin-bottom: 8px; }
        .hero p { font-size: 14px; color: #666; font-family: Arial, sans-serif; line-height: 1.6; }
        /* Articles */
        .articles { padding: 24px 40px; }
        .article-item { display: flex; gap: 16px; padding: 20px 0; border-bottom: 1px solid #f0f0f0; }
        .article-item:last-child { border-bottom: none; }
        .article-number { font-size: 28px; font-weight: bold; color: #e8e8e8; font-family: Arial, sans-serif; line-height: 1; flex-shrink: 0; width: 36px; }
        .article-body { flex: 1; }
        .article-category { font-size: 10px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase; color: #dc2626; font-family: Arial, sans-serif; margin-bottom: 6px; }
        .article-title { font-size: 17px; color: #1a1a2e; line-height: 1.4; margin-bottom: 8px; }
        .article-title a { color: #1a1a2e; text-decoration: none; }
        .article-title a:hover { color: #003087; }
        .article-excerpt { font-size: 13px; color: #666; font-family: Arial, sans-serif; line-height: 1.6; margin-bottom: 10px; }
        .article-meta { font-size: 11px; color: #999; font-family: Arial, sans-serif; }
        .read-more { display: inline-block; font-size: 12px; font-weight: bold; color: #dc2626; text-decoration: none; font-family: Arial, sans-serif; letter-spacing: 0.5px; }
        .article-image { width: 100px; height: 75px; object-fit: cover; border-radius: 4px; flex-shrink: 0; }
        /* CTA */
        .cta-section { background: #f8f9fc; padding: 28px 40px; text-align: center; border-top: 1px solid #e8e8e8; }
        .cta-title { font-size: 15px; color: #003087; margin-bottom: 8px; }
        .cta-sub { font-size: 13px; color: #666; font-family: Arial, sans-serif; margin-bottom: 16px; }
        .cta-btn { display: inline-block; background: #003087; color: #fff; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-size: 13px; font-weight: bold; font-family: Arial, sans-serif; }
        /* Footer */
        .footer { padding: 24px 40px; text-align: center; background: #1a1a2e; }
        .footer p { font-size: 11px; color: #888; font-family: Arial, sans-serif; line-height: 1.8; }
        .footer a { color: #aaa; }
    </style>
</head>
<body>
<div class="wrapper">
    <div class="red-bar"></div>
    <!-- Header -->
    <div class="header">
        <div style="font-size:22px; font-weight:bold; color:#fff; letter-spacing:1px;">📻 Radio ABC Stereo</div>
        <div class="header-title">Boletín Semanal de Noticias</div>
    </div>

    <!-- Hero -->
    <div class="hero">
        <span class="week-label">Semana del {{ now()->startOfWeek()->format('d M') }} al {{ now()->endOfWeek()->format('d M Y') }}</span>
        <h1>Las noticias más importantes de la semana</h1>
        <p>Aquí tienes un resumen de los {{ $news->count() }} artículos más relevantes publicados esta semana en RadioABCStereo.</p>
    </div>

    <!-- Articles -->
    <div class="articles">
        @foreach($news as $index => $article)
        <div class="article-item">
            <div class="article-number">{{ str_pad($index + 1, 2, '0', STR_PAD_LEFT) }}</div>
            <div class="article-body">
                @if($article->categories->first())
                <div class="article-category">{{ $article->categories->first()->name }}</div>
                @endif
                <div class="article-title">
                    <a href="{{ url('/nota/' . $article->slug) }}">{{ $article->title }}</a>
                </div>
                @if($article->excerpt)
                <div class="article-excerpt">{{ Str::limit($article->excerpt, 120) }}</div>
                @endif
                <div class="article-meta">
                    {{ optional($article->serialized_author)['name'] ?? 'Redacción' }} &bull;
                    {{ \Carbon\Carbon::parse($article->published_at)->format('d \d\e M') }}
                </div>
                <a href="{{ url('/nota/' . $article->slug) }}" class="read-more">Leer nota →</a>
            </div>
            @if($article->image_path)
            <img src="{{ asset('storage/' . $article->image_path) }}" alt="{{ $article->title }}" class="article-image">
            @endif
        </div>
        @endforeach
    </div>

    <!-- CTA -->
    <div class="cta-section">
        <div class="cta-title">¿Quieres escucharnos en vivo?</div>
        <div class="cta-sub">La mejor programación de Estelí, Nicaragua. 24 horas al día.</div>
        <a href="{{ url('/') }}" class="cta-btn">Ir al portal →</a>
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>
            Radio ABC Stereo &bull; Estelí, Nicaragua<br>
            Recibiste este boletín porque te suscribiste en nuestro sitio web.<br>
            <a href="{{ url('/boletin/cancelar/' . $unsubscribeToken) }}">Cancelar suscripción</a>
        </p>
    </div>
</div>
</body>
</html>
