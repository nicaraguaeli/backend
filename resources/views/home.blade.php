@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1 class="m-0 text-dark fw-bold">Dashboard General</h1>
@stop

@section('content')
    <!-- Stream Status Monitor -->
    <div class="row mb-3">
        <div class="col-12">
            @if($streamStatus)
                <div class="info-box bg-gradient-success elevation-3">
                    <span class="info-box-icon"><i class="fas fa-broadcast-tower fa-beat"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text fw-bold text-uppercase">Estado de Transmisión</span>
                        <span class="info-box-number">EN VIVO - ONLINE</span>
                        <span class="progress-description">
                            La señal de streaming está operando correctamente.
                        </span>
                    </div>
                </div>
            @else
                <div class="info-box bg-gradient-danger elevation-4 user-select-none">
                    <span class="info-box-icon"><i class="fas fa-exclamation-triangle fa-shake"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text fw-bold text-uppercase">ALERTA: Transmisión Caída</span>
                        <span class="info-box-number">OFFLINE - SIN SEÑAL</span>
                        <span class="progress-description">
                             No se detecta señal en el servidor de streaming. Verifique el encoder.
                        </span>
                        <a href="https://hoth.alonhosting.com:4205/stream" target="_blank" class="text-white text-decoration-underline mt-2 d-inline-block small">Verificar URL Directa</a>
                    </div>
                </div>
            @endif
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
                         <img class="img-circle elevation-2 bg-white p-1" src="https://radioabcstereo.com/img/brand.png" alt="User Avatar">
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
    <script> console.log('Dashboard loaded'); </script>
@stop