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
                            <td>
                                @if(Str::startsWith($banner->mime_type, 'video'))
                                    <span class="badge badge-dark">Video</span>
                                @else
                                    <span class="badge badge-info">Imagen</span>
                                @endif
                            </td>
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

    // Mapa de rutas generado por Blade (correcto, independiente del prefijo)
    const bannerRoutes = {
        @foreach($banners as $banner)
        {{ $banner->id }}: '{{ route('admin.banners.update', $banner) }}',
        @endforeach
    };

    function showToast(type, message) {
        if (typeof toastr !== 'undefined') {
            if (type === 'success') toastr.success(message);
            else toastr.error(message);
        } else if (typeof $ !== 'undefined' && $(document).Toasts) {
            $(document).Toasts('create', {
                class: `bg-${type}`,
                title: type === 'success' ? 'Éxito' : 'Error',
                autohide: true,
                delay: 3000,
                body: message
            });
        } else {
            console.warn(message);
        }
    }

    const tableBody = document.querySelector('tbody');

    tableBody.addEventListener('change', e => {
        if (!e.target.classList.contains('banner-toggle')) return;

        const toggle = e.target;
        const id     = parseInt(toggle.closest('tr').dataset.id);
        const field  = toggle.dataset.field;
        const url    = bannerRoutes[id];

        if (!url) {
            showToast('danger', 'No se encontró la ruta para este banner.');
            return;
        }

        toggle.disabled = true;

        fetch(url, {
            method: 'POST',   // Laravel resource update acepta POST con _method spoofing
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token,
                'Accept': 'application/json',
                'X-HTTP-Method-Override': 'PUT',
            },
            body: JSON.stringify({
                _method: 'PUT',
                [field]: toggle.checked,
            }),
        })
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .then(data => {
            if (data.success) {
                showToast('success', data.message || 'Estado actualizado.');
            } else {
                throw new Error(data.message || 'Falló la actualización.');
            }
        })
        .catch(err => {
            showToast('danger', 'Error: ' + err.message);
            toggle.checked = !toggle.checked; // Revertir el switch
        })
        .finally(() => toggle.disabled = false);
    });
});
</script>
@endpush

