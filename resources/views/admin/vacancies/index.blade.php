@extends('adminlte::page')

@section('title', 'Empleos')

@section('content_header')
    <h1>Empleos</h1>
@stop

@section('content')
    <div class="card">
        <div class="card-body">

            {{-- Acciones y búsqueda --}}
            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <a href="{{ route('admin.vacancies.create') }}" class="btn btn-primary">
                    <i class="fas fa-plus mr-1"></i> Crear Empleo
                </a>

                <form method="GET" action="{{ route('admin.vacancies.index') }}" class="form-inline">
                    <div class="input-group mr-2">
                        <input type="search" name="q" value="{{ request('q') }}"
                               class="form-control" placeholder="Buscar cargo o empresa..." aria-label="Buscar">
                    </div>
                    <select name="status" class="form-control mr-2" aria-label="Estado">
                        <option value="">Todos los estados</option>
                        <option value="active"   {{ request('status') === 'active'   ? 'selected' : '' }}>✅ Activas</option>
                        <option value="inactive" {{ request('status') === 'inactive' ? 'selected' : '' }}>🚫 Inactivas</option>
                    </select>
                    <button class="btn btn-outline-secondary mr-1" type="submit">Buscar</button>
                    <a href="{{ route('admin.vacancies.index') }}" class="btn btn-link">Limpiar</a>
                </form>
            </div>

            @if(session('success'))
                <div class="alert alert-success alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    {{ session('success') }}
                </div>
            @endif

            @if($vacancies->count())
                <div class="table-responsive">
                    <table class="table table-sm table-hover" aria-label="Lista de empleos">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Cargo</th>
                                <th>Empleador</th>
                                <th>Ubicación</th>
                                <th>Tipo</th>
                                <th>Vence</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($vacancies as $vacancy)
                                <tr data-id="{{ $vacancy->id }}">
                                    <td>{{ $vacancies->firstItem() + $loop->index }}</td>
                                    <td><strong>{{ $vacancy->title }}</strong></td>
                                    <td>{{ $vacancy->company ?? '-' }}</td>
                                    <td>{{ $vacancy->city ?? '-' }}</td>
                                    <td>{{ $vacancy->employment_type ?? '-' }}</td>
                                    <td>
                                        @if($vacancy->expires_at)
                                            <span class="{{ $vacancy->expires_at->isPast() ? 'text-danger' : 'text-muted' }}">
                                                {{ $vacancy->expires_at->format('d/m/Y') }}
                                            </span>
                                        @else
                                            -
                                        @endif
                                    </td>
                                    <td>
                                        @if($vacancy->is_active)
                                            <span class="badge badge-success">Activo</span>
                                        @else
                                            <span class="badge badge-secondary">Inactivo</span>
                                        @endif
                                    </td>
                                    <td>
                                        <a href="{{ route('admin.vacancies.edit', $vacancy) }}" class="btn btn-sm btn-outline-secondary">Editar</a>
                                        <form action="{{ route('admin.vacancies.destroy', $vacancy) }}" method="POST" class="d-inline" onsubmit="return confirm('¿Confirmar eliminar este empleo?')">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-sm btn-outline-danger">Borrar</button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                <div class="mt-2">
                    {{ $vacancies->links() }}
                </div>
            @else
                <p class="text-muted mt-3">No se encontraron empleos{{ request('q') ? ' para "' . request('q') . '"' : '' }}.</p>
            @endif
        </div>
    </div>
@stop
