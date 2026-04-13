@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1 class="m-0 text-dark fw-bold">Dashboard General</h1>
@stop

@section('content')
    <div class="alert alert-info alert-dismissible fade show elevation-2" role="alert" style="border-left: 5px solid #17a2b8;">
        <h5 class="fw-bold mb-1"><i class="fas fa-check-circle me-2"></i> ¡Navegación Personalizada Activa!</h5>
        <p class="mb-0">
            Se ha habilitado la plantilla agrupador de Noticias. Ahora cuando los usuarios den clic en la categoría padre <strong>"Noticias ABC"</strong>, serán redirigidos a una página diseñada especialmente que muestra las 4 noticias más recientes de cada una de sus subcategorías.
        </p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

    <!-- Stream Status Monitor (estado inicial: verificando, JS lo actualiza al cargar) -->
    <div class="row mb-3">
        <div class="col-12">
            <div class="info-box bg-gradient-secondary elevation-2" id="stream-status-box">
                <span class="info-box-icon"><i class="fas fa-circle-notch fa-spin" id="stream-icon"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text fw-bold text-uppercase" id="stream-title">Estado de Transmisión</span>
                    <span class="info-box-number" id="stream-label">Verificando señal...</span>
                    <div class="d-flex align-items-center gap-3 mt-1">
                        <span class="progress-description mb-0" id="stream-desc">Consultando servidor de streaming...</span>
                        <span class="badge bg-white text-dark fw-bold px-2 py-1 d-none" id="stream-listeners-badge">
                            <i class="fas fa-headphones me-1"></i>
                            <span id="stream-listeners">0</span> oyentes
                        </span>
                    </div>
                    <small class="text-white-50 mt-1 d-block" id="stream-last-check"></small>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- Info Boxes with Gradients -->
        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box bg-gradient-info elevation-2">
                <span class="info-box-icon"><i class="fas fa-newspaper"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">Noticias Totales</span>
                    <span class="info-box-number">{{ $newsCount }}</span>
                    <div class="progress">
                        <div class="progress-bar" style="width: 70%"></div>
                    </div>
                    <span class="progress-description">
                        {{ $publishedNewsCount }} Publicadas
                    </span>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box bg-gradient-success elevation-2">
                <span class="info-box-icon"><i class="fas fa-users"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">Usuarios</span>
                    <span class="info-box-number">{{ $usersCount }}</span>
                    <div class="progress">
                        <div class="progress-bar" style="width: 70%"></div>
                    </div>
                    <span class="progress-description">
                        Registrados
                    </span>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box bg-gradient-warning elevation-2 text-white">
                <span class="info-box-icon"><i class="fas fa-list"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">Categorías</span>
                    <span class="info-box-number">{{ $categoriesCount }}</span>
                    <div class="progress">
                        <div class="progress-bar" style="width: 70%"></div>
                    </div>
                    <span class="progress-description">
                        Activas
                    </span>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box bg-gradient-danger elevation-2">
                <span class="info-box-icon"><i class="fas fa-ad"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">Banners Activos</span>
                    <span class="info-box-number">{{ $bannersCount }}</span>
                    <div class="progress">
                        <div class="progress-bar" style="width: 70%"></div>
                    </div>
                    <span class="progress-description">
                        En rotación
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <!-- Main Activity Column -->
        <div class="col-lg-8">
            <div class="card card-outline card-primary shadow-sm">
                <div class="card-header border-0">
                    <h3 class="card-title fw-bold"><i class="fas fa-history me-2"></i> Actividad Reciente</h3>
                    <div class="card-tools">
                        <a href="{{ route('admin.news.index') }}" class="btn btn-tool btn-sm">
                            <i class="fas fa-bars"></i> Ver todas
                        </a>
                    </div>
                </div>
                <div class="card-body table-responsive p-0">
                    <table class="table table-striped table-valign-middle">
                        <thead class="bg-light">
                        <tr>
                            <th>Título</th>
                            <th class="text-center">Estado</th>
                            <th class="text-center">Vistas</th>
                            <th class="text-end">Fecha</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($latestNews as $news)
                            <tr>
                                <td>
                                    @if($news->image_path)
                                        <img src="{{ asset('storage/' . $news->image_path) }}" alt="News" class="img-circle img-size-32 mr-2">
                                    @else
                                        <img src="https://ui-avatars.com/api/?name={{ urlencode($news->title) }}&background=random" alt="News" class="img-circle img-size-32 mr-2">
                                    @endif
                                    <span class="fw-bold text-dark">{{ Str::limit($news->title, 40) }}</span>
                                    <br/>
                                    <small class="text-muted ms-5">por {{ $news->author->pluck('name')->join(', ') ?: 'Redacción' }}</small>
                                </td>
                                <td class="text-center">
                                    @if($news->is_published)
                                        <span class="badge badge-success px-3 py-2 rounded-pill">Publicado</span>
                                    @else
                                        <span class="badge badge-secondary px-3 py-2 rounded-pill">Borrador</span>
                                    @endif
                                </td>
                                <td class="text-center">
                                    <span class="text-muted"><i class="fas fa-eye me-1"></i> {{ number_format($news->views) }}</span>
                                </td>
                                <td class="text-end">
                                    <small class="text-secondary fw-bold">{{ $news->created_at->diffForHumans() }}</small>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Quick Stats Chart Placeholder or More Info -->
             <div class="row">
                <div class="col-md-6">
                     <div class="small-box bg-info">
                        <div class="inner">
                            <h3>{{ $vacanciesCount }}</h3>
                            <p>Vacantes Disponibles</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <a href="{{ route('admin.vacancies.index') }}" class="small-box-footer">
                            Administrar <i class="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <!-- Placeholder custom widget -->
                     <div class="card bg-gradient-dark">
                        <div class="card-header border-0">
                            <h3 class="card-title">
                                <i class="fas fa-calendar-alt mr-1"></i>
                                Fecha
                            </h3>
                        </div>
                        <div class="card-body pt-0">
                            <!--The calendar -->
                            <div id="calendar" style="width: 100%"></div>
                            <h4 class="text-center mt-3 mb-0 fw-bold">{{ now()->locale('es')->isoFormat('D [de] MMMM [de] YYYY') }}</h4>
                        </div>
                    </div>
                </div>
             </div>

        </div>

        <!-- Quick Actions Column -->
        <div class="col-lg-4">
            <div class="card shadow-sm border-0 bg-white">
                <div class="card-header bg-white border-bottom-0 pt-4">
                    <h3 class="card-title fw-bold text-dark"><i class="fas fa-bolt text-warning me-2"></i> Acciones Rápidas</h3>
                </div>
                <div class="card-body">
                    <div class="d-grid gap-3">
                        <a href="{{ route('admin.news.create') }}" class="btn btn-outline-primary btn-lg text-start shadow-sm transition-hover">
                            <i class="fas fa-plus-circle me-3 fa-lg"></i> Redactar Noticia
                        </a>
                        <a href="{{ route('admin.banners.create') }}" class="btn btn-outline-danger btn-lg text-start shadow-sm transition-hover">
                            <i class="fas fa-images me-3 fa-lg"></i> Subir Publicidad
                        </a>
                        <a href="{{ route('admin.vacancies.create') }}" class="btn btn-outline-success btn-lg text-start shadow-sm transition-hover">
                            <i class="fas fa-briefcase me-3 fa-lg"></i> Publicar Vacante
                        </a>
                         <a href="{{ route('admin.audio_reports.create') }}" class="btn btn-outline-info btn-lg text-start shadow-sm transition-hover">
                            <i class="fas fa-microphone me-3 fa-lg"></i> Nuevo Audio Reportaje
                        </a>
                    </div>
                </div>
            </div>

            <!-- System Info / Credits -->
            <div class="card card-widget widget-user-2 shadow-sm mt-4">
                <div class="widget-user-header bg-warning">
                    <div class="widget-user-image">
                         <img class="img-circle elevation-2 bg-white p-1" src="{{ asset('storage/logotipo.png') }}" alt="User Avatar">
                    </div>
                    <h3 class="widget-user-username text-white fw-bold text-shadow">ABC Stereo</h3>
                    <h5 class="widget-user-desc text-white text-shadow">Panel de Administración</h5>
                </div>
                <div class="card-footer p-0">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a href="/" target="_blank" class="nav-link text-secondary fw-bold">
                                Ver Sitio Web <span class="float-right badge bg-primary"><i class="fas fa-external-link-alt"></i></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-secondary">
                                Versión <span class="float-right badge bg-secondary">1.0.0</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
@stop

@section('css')
    <style>
        .transition-hover {
            transition: all 0.3s ease;
        }
        .transition-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }
        .text-shadow {
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
    </style>
@stop

@section('js')
<script>
(function () {
    // ─── Configuración ────────────────────────────────────────────────────────
    const POLL_INTERVAL_MS  = 3 * 60 * 1000;  // 3 minutos entre cada check
    const ICECAST_STATS_URL = 'https://hoth.alonhosting.com:4205/status-json.xsl';
    const PROXY_URL         = '{{ route("dashboard.stream-status") }}';

    // ─── DOM refs ─────────────────────────────────────────────────────────────
    const box             = document.getElementById('stream-status-box');
    const iconEl          = document.getElementById('stream-icon');
    const labelEl         = document.getElementById('stream-label');
    const descEl          = document.getElementById('stream-desc');
    const checkEl         = document.getElementById('stream-last-check');
    const listenersBadge  = document.getElementById('stream-listeners-badge');
    const listenersCount  = document.getElementById('stream-listeners');

    // ─── Actualizar widget ────────────────────────────────────────────────────
    function updateWidget(online, listeners, title) {
        if (!box) return;

        if (online) {
            box.className        = 'info-box bg-gradient-success elevation-3';
            iconEl.className     = 'fas fa-broadcast-tower fa-beat';
            labelEl.textContent  = 'EN VIVO — ONLINE';
            descEl.textContent   = title
                ? '"' + title + '" — señal operando correctamente.'
                : 'La señal de streaming está operando correctamente.';

            // Mostrar badge de listeners
            if (listenersBadge && listenersCount) {
                listenersCount.textContent = listeners.toLocaleString('es-NI');
                listenersBadge.classList.remove('d-none');
            }
        } else {
            box.className        = 'info-box bg-gradient-danger elevation-4';
            iconEl.className     = 'fas fa-exclamation-triangle fa-shake';
            labelEl.textContent  = 'OFFLINE — SIN SEÑAL';
            descEl.textContent   = 'No se detecta señal en el servidor. Verifique el encoder.';

            if (listenersBadge) listenersBadge.classList.add('d-none');
        }

        if (checkEl) {
            checkEl.textContent = 'Última verificación: ' + new Date().toLocaleTimeString('es-NI');
        }
    }

    // ─── Parsear respuesta de Icecast ─────────────────────────────────────────
    function parseIcecast(data) {
        const source = (data && data.icestats && data.icestats.source) ? data.icestats.source : null;
        if (!source) return { online: false, listeners: 0, title: '' };

        // Source puede ser un objeto (1 fuente) o un array (varias fuentes)
        if (Array.isArray(source)) {
            const first = source[0] || {};
            return {
                online:    source.length > 0,
                listeners: parseInt(first.listeners || 0, 10),
                title:     first.title || first.server_name || '',
            };
        }
        return {
            online:    Boolean(source.listenurl),
            listeners: parseInt(source.listeners || 0, 10),
            title:     source.title || source.server_name || '',
        };
    }

    // ─── Estrategia: browser directo → proxy servidor ─────────────────────────
    function checkStream() {
        // 1. Intentar desde el navegador directamente (evita restricciones del servidor PHP)
        fetch(ICECAST_STATS_URL)
            .then(function (res) { return res.json(); })
            .then(function (data) {
                const parsed = parseIcecast(data);
                updateWidget(parsed.online, parsed.listeners, parsed.title);
            })
            .catch(function () {
                // 2. Si el browser no puede (CORS u otro), usar el proxy PHP
                fetch(PROXY_URL, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                        updateWidget(
                            Boolean(data.online),
                            parseInt(data.listeners || 0, 10),
                            data.title || ''
                        );
                    })
                    .catch(function () {
                        if (checkEl) checkEl.textContent = 'No se pudo verificar — reintentando en 3 min';
                    });
            });
    }

    // ─── Iniciar ──────────────────────────────────────────────────────────────
    checkStream();                                    // <-- inmediato al cargar
    setInterval(checkStream, POLL_INTERVAL_MS);       // <-- cada 3 minutos

    console.log('[Stream Monitor] Activo — polling cada 3 minutos.');
})();
</script>
@stop