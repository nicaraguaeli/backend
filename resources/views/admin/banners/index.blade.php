@extends('adminlte::page')

@section('title', 'Publicidad')

@section('content_header')
    <h1>Banners Publicitarios</h1>
@stop

@section('content')
    <div class="card">
        <div class="card-header">
            <a href="{{ route('admin.banners.create') }}" class="btn btn-primary">Crear Banner</a>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">{{ session('success') }}</div>
            @endif

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Vista Previa</th>
                        <th>Tipo</th>
                        <th>Link</th>
                        <th>Posición</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($banners as $banner)
                        <tr data-id="{{ $banner->id }}">
                            <td>{{ $banner->id }}</td>
                            <td>
                                @if(Str::startsWith($banner->mime_type, 'video'))
                                    <video src="{{ asset('storage/' . $banner->file_path) }}" style="height: 50px; width: auto;" muted loop autoplay></video>
                                @else
                                    <img src="{{ asset('storage/' . $banner->file_path) }}" alt="Banner" style="height: 50px; width: auto;">
                                @endif
                            </td>
                            <td><span class="badge badge-info">{{ $banner->mime_type }}</span></td>
                            <td>
                                @if($banner->link)
                                    <a href="{{ $banner->link }}" target="_blank">{{ Str::limit($banner->link, 30) }}</a>
                                @else
                                    -
                                @endif
                            </td>
                            <td>{{ $banner->position ?? 'General' }}</td>
                            <td>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input banner-toggle" id="isActiveSwitch{{$banner->id}}" data-field="is_active" {{ $banner->is_active ? 'checked' : '' }}>
                                    <label class="custom-control-label" for="isActiveSwitch{{$banner->id}}"></label>
                                </div>
                            </td>
                            <td>
                                <a href="{{ route('admin.banners.edit', $banner) }}" class="btn btn-sm btn-primary">Editar</a>
                                <form action="{{ route('admin.banners.destroy', $banner) }}" method="POST" class="d-inline" onsubmit="return confirm('¿Eliminar banner?')">
                                    @csrf
                                    @method('DELETE')
                                    <button class="btn btn-sm btn-danger">Eliminar</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="7" class="text-center">No hay banners registrados.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
            
            <div class="mt-4">
                {{ $banners->links() }}
            </div>
        </div>
    </div>
@stop

@push('js')
<script>
document.addEventListener('DOMContentLoaded', function () {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '{{ csrf_token() }}';

    function showToast(type, message) {
        $(document).Toasts('create', {
            class: `bg-${type}`,
            title: type === 'success' ? 'Éxito' : 'Error',
            autohide: true,
            delay: 3000,
            body: message
        });
    }

    const tableBody = document.querySelector('tbody');

    tableBody.addEventListener('change', e => {
        if (e.target.classList.contains('banner-toggle')) {
            const toggle = e.target;
            const id = toggle.closest('tr').dataset.id;
            const field = toggle.dataset.field;
            
            toggle.disabled = true;

            fetch(`/admin/banners/${id}`, {
                method: 'PUT', // Spoofing PUT/PATCH, but using PUT as per resource route
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': token,
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ [field]: toggle.checked }),
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    showToast('success', data.message || 'Actualizado.');
                } else {
                    throw new Error(data.message || 'Falló la actualización.');
                }
            })
            .catch(err => {
                showToast('danger', err.message);
                toggle.checked = !toggle.checked; // Revert
            })
            .finally(() => toggle.disabled = false );
        }
    });
});
</script>
@endpush
