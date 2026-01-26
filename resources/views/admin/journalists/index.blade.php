@extends('adminlte::page')

@section('title', 'Periodistas')

@section('content_header')
    <h1>Periodistas</h1>
@stop

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Listado de Periodistas</h3>
                    <div class="card-tools">
                        <a href="{{ route('admin.journalists.create') }}" class="btn btn-primary btn-sm">
                            <i class="fas fa-plus"></i> Crear Periodista
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-sm table-hover">
                            <thead class="thead-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Teléfono</th>
                                    <th>Tipo</th>
                                    <th class="text-center">Noticias</th> {{-- nueva columna --}}
                                    <th>Activo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($journalists as $journalist)
                                    <tr data-id="{{ $journalist->id }}">
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
                                        <td class="align-middle text-center">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input journalist-toggle" id="statusSwitch{{$journalist->id}}" data-field="is_active" {{ $journalist->is_active ? 'checked' : '' }}>
                                                <label class="custom-control-label" for="statusSwitch{{$journalist->id}}"></label>
                                            </div>
                                        </td>
                                        <td class="align-middle text-center">
                                            <a href="{{ route('admin.journalists.edit', $journalist) }}" class="btn btn-sm btn-outline-secondary">Editar</a>
                                            <button type="button" class="btn btn-sm btn-outline-danger delete-journalist-btn" data-id="{{ $journalist->id }}">Eliminar</button>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="8" class="text-center text-muted">No hay periodistas registrados.</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex justify-content-center">
                        {{ $journalists->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@stop

@push('js')
<script>
document.addEventListener('DOMContentLoaded', function () {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '{{ csrf_token() }}';
    console.log('CSRF Token:', token);

    // AJAX update for status toggle
    document.addEventListener('change', e => {
        if (e.target.classList.contains('journalist-toggle')) {
            const toggle = e.target;
            const id = toggle.closest('tr').dataset.id;
            const field = toggle.dataset.field;
            toggle.disabled = true;
            console.log('Sending request:', { id, field, value: toggle.checked });
            fetch(`{{ route('admin.journalists.update.status', ':id') }}`.replace(':id', id), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': token,
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ [field]: toggle.checked }),
            })
            .then(res => {
                console.log('Response status:', res.status);
                return res.json();
            })
            .then(data => {
                console.log('Response data:', data);
                if (data.success) {
                    // Optionally show toast
                } else {
                    throw new Error(data.message || 'Falló la actualización.');
                }
            })
            .catch(err => {
                console.error('Error:', err);
                toggle.checked = !toggle.checked; // Revert
            })
            .finally(() => toggle.disabled = false );
        }
    });

    // Event delegation for Delete
    document.addEventListener('click', e => {
        if (e.target.classList.contains('delete-journalist-btn')) {
            e.preventDefault();
            const id = e.target.dataset.id;
            console.log('Deleting journalist with ID:', id);
            if (confirm('¿Está seguro de que desea eliminar este periodista? Esta acción no se puede deshacer.')) {
                fetch(`{{ url('/admin/journalists') }}/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': token,
                        'Accept': 'application/json'
                    }
                })
                .then(res => {
                    console.log('Delete response status:', res.status);
                    return res.json();
                })
                .then(data => {
                    console.log('Delete response data:', data);
                    if (data.success) {
                        // Remove the row
                        e.target.closest('tr').remove();
                        console.log('Periodista eliminado.');
                    } else {
                        throw new Error('No se pudo eliminar.');
                    }
                })
                .catch(err => {
                    console.error('Error:', err);
                    alert('Error al eliminar: ' + err.message);
                });
            }
        }
    });
});
</script>
@endpush
