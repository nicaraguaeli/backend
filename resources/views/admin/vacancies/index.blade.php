@extends('adminlte::page')

@section('title', 'Vacancies')

@section('content_header')
    <h1>Vacantes</h1>
@stop

@section('content')
    <div class="card">
        <div class="card-body">
            @if(isset($vacancies) && $vacancies->count())
                <div class="table-responsive">
                    <table class="table table-sm table-hover" aria-label="Lista de vacantes">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Cargo</th>
                                <th>Empleador</th>
                                <th>Ubicación</th>
                                <th>Tipo de vacante</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($vacancies as $vacancy)
                                <tr data-id="{{ $vacancy->id }}">
                                    <td>{{ $vacancies->firstItem() ? $vacancies->firstItem() + $loop->index : $loop->iteration }}</td>
                                    <td>{{ $vacancy->title }}</td>
                                    <td>{{ $vacancy->company ?? '-' }}</td>
                                    <td>{{ $vacancy->city ?? '-' }}</td>
                                    <td>{{ $vacancy->employment_type ?? '-' }}</td>
                                    <td>{{ $vacancy->is_active ? 'Activa' : 'Inactiva' }}</td>
                                    <td>
                                        @if(!empty($vacancy) && !empty($vacancy->id))
                                            <a href="{{ route('admin.vacancies.edit', ['vacancy' => $vacancy->id]) }}" class="btn btn-sm btn-outline-secondary">Editar</a>

                                            <form action="{{ route('admin.vacancies.destroy', ['vacancy' => $vacancy->id]) }}" method="POST" class="d-inline" onsubmit="return confirm('¿Confirmar eliminar?')">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-outline-danger">Borrar</button>
                                            </form>
                                        @else
                                            <span class="text-muted">Sin acciones</span>
                                        @endif
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
                <p class="text-muted">No hay vacantes registradas.</p>
            @endif
        </div>
    </div>
@stop