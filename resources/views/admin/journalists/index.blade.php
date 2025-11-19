@extends('adminlte::page')

@section('title', 'Periodistas')

@section('content_header')
    <h1>Periodistas</h1>
@stop

@section('content')
    <div class="card">
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Tipo</th>
                        <th class="text-center">Noticias</th> {{-- nueva columna --}}
                        <th>Status</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($journalists as $journalist)
                        <tr>
                            <td>
                                {{ $journalists->firstItem() ? $journalists->firstItem() + $loop->index : $loop->iteration }}
                            </td>
                            <td>{{ $journalist->name }}</td>
                            <td>{{ $journalist->email }}</td>
                            <td>{{ $journalist->phone_number }}</td>
                            <td>{{ $journalist->type }}</td>
                            @php
                                $q = request()->except('page');
                                $q['author'] = $journalist->id;
                                $newsUrl = url('/admin/news') . '?' . http_build_query($q);
                            @endphp
                            <td class="align-middle text-center">
                                <a href="{{ $newsUrl }}" class="btn btn-link p-0" title="Ver noticias de {{ $journalist->name }}">
                                    {{ $journalist->news_count ?? 0 }}
                                </a>
                            </td> {{-- mostrar contador con enlace --}}
                            <td>{{ $journalist->status ? 'Activo' : 'Inactivo' }}</td>
                            <td>
                                <a href="{{ route('admin.journalists.edit', $journalist) }}" class="btn btn-sm btn-primary">Editar</a>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="8">No hay periodistas registrados.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>

            <div class="mt-2">
                {{ $journalists->links() }}
            </div>
        </div>
    </div>
@stop
