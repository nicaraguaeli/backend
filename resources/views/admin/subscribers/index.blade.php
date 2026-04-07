@extends('adminlte::page')

@section('title', 'Suscriptores del Boletín')

@section('content_header')
    <div class="d-flex align-items-center justify-content-between">
        <h1><i class="fas fa-envelope-open-text mr-2 text-primary"></i>Suscriptores del Boletín</h1>
        <form method="POST" action="{{ route('admin.subscribers.send-now') }}" onsubmit="return confirm('¿Enviar el boletín ahora a todos los suscriptores?')">
            @csrf
            <button type="submit" class="btn btn-success btn-lg">
                <i class="fas fa-paper-plane mr-2"></i>
                Enviar Boletín Ahora
            </button>
        </form>
    </div>
@stop

@section('content')

{{-- Alertas --}}
@if(session('success'))
    <div class="alert alert-success alert-dismissible fade show">
        <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
        {{ session('success') }}
    </div>
@endif
@if(session('error'))
    <div class="alert alert-danger alert-dismissible fade show">
        <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
        {{ session('error') }}
    </div>
@endif

<div class="row">
    {{-- Stats Card --}}
    <div class="col-12 col-md-4 mb-4">
        <div class="info-box bg-primary">
            <span class="info-box-icon"><i class="fas fa-users"></i></span>
            <div class="info-box-content">
                <span class="info-box-text">Total Suscriptores</span>
                <span class="info-box-number">{{ $subscribers->count() }}</span>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-4 mb-4">
        <div class="info-box bg-success">
            <span class="info-box-icon"><i class="fas fa-check-circle"></i></span>
            <div class="info-box-content">
                <span class="info-box-text">Confirmados</span>
                <span class="info-box-number">{{ $subscribers->whereNotNull('confirmed_at')->count() }}</span>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-4 mb-4">
        <div class="info-box bg-info">
            <span class="info-box-icon"><i class="fas fa-calendar-week"></i></span>
            <div class="info-box-content">
                <span class="info-box-text">Esta semana</span>
                <span class="info-box-number">{{ $subscribers->where('created_at', '>=', now()->subDays(7))->count() }}</span>
            </div>
        </div>
    </div>
</div>

{{-- Tabla de suscriptores --}}
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Lista de Suscriptores</h3>
    </div>
    <div class="card-body p-0">
        <table class="table table-hover table-striped mb-0">
            <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Estado</th>
                    <th>Suscrito el</th>
                    <th class="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                @forelse($subscribers as $index => $subscriber)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td><strong>{{ $subscriber->email }}</strong></td>
                    <td>
                        @if($subscriber->confirmed_at)
                            <span class="badge badge-success">Confirmado</span>
                        @else
                            <span class="badge badge-warning">Pendiente</span>
                        @endif
                    </td>
                    <td>{{ $subscriber->created_at->format('d M Y, H:i') }}</td>
                    <td class="text-center">
                        <form method="POST" action="{{ route('admin.subscribers.destroy', $subscriber) }}"
                              onsubmit="return confirm('¿Eliminar suscriptor {{ $subscriber->email }}?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-danger">
                                <i class="fas fa-trash"></i>
                            </button>
                        </form>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="5" class="text-center text-muted py-4">
                        <i class="fas fa-inbox fa-2x mb-2 d-block"></i>
                        No hay suscriptores aún. El formulario del footer los registrará automáticamente.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@stop

@section('css')
<style>
    .info-box { border-radius: 8px; }
</style>
@stop
