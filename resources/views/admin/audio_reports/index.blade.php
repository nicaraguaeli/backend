@extends('adminlte::page')

@section('title', 'Audio Reportajes')

@section('content_header')
    <h1>Audio Reportajes</h1>
@stop

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Lista de Audio Reportajes</h3>
            <div class="card-tools">
                <a href="{{ route('admin.audio_reports.create') }}" class="btn btn-primary btn-sm">
                    <i class="fas fa-plus"></i> Nuevo Audio Reportaje
                </a>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Publicado</th>
                        <th class="text-center">Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($audioReports as $report)
                        <tr>
                            <td>{{ $report->id }}</td>
                            <td>{{ $report->title }}</td>
                            <td>{{ $report->author ? $report->author->name : 'N/A' }}</td>
                            <td>{{ $report->published_at }}</td>
                            <td class="text-center">
                               <div class="custom-control custom-switch justify-content-center">
    <input type="checkbox"
           class="custom-control-input status-switch"
           data-id="{{ $report->id }}"
           data-url="{{ route('admin.audio_reports.update', $report) }}"
           id="statusSwitch{{ $report->id }}"
           {{ $report->is_active ? 'checked' : '' }}>
    <label class="custom-control-label" for="statusSwitch{{ $report->id }}"></label>
</div>

                            </td>
                            <td>
                                <a href="{{ route('admin.audio_reports.edit', $report) }}" class="btn btn-info btn-sm">
                                    <i class="fas fa-pencil-alt"></i>
                                </a>
                                <form action="{{ route('admin.audio_reports.destroy', $report) }}" method="POST" style="display: inline-block;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('¿Estás seguro?')">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="6" class="text-center">No hay audio reportajes registrados.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div class="card-footer">
            {{ $audioReports->links() }}
        </div>
    </div>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script>
    $(function () {
        // For toastr notifications
        @if(session('success'))
            toastr.success('{{ session('success') }}');
        @endif
        @if(session('error'))
            toastr.error('{{ session('error') }}');
        @endif

        // ---- STATUS SWITCH (AJAX) ----
        document.querySelectorAll('.status-switch').forEach(switchEl => {
            switchEl.addEventListener('change', function () {
                const el = this;
                const reportId = el.dataset.id;
                const isChecked = el.checked;
                const url = el.dataset.url;

                el.disabled = true;
                fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                        'Accept': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify({ is_active: isChecked })
                })
                .then(res => {
                    if (!res.ok) {
                        // Attempt to get a more detailed error from the response body
                        return res.json().then(errorBody => {
                           throw new Error(errorBody.message || 'Error del servidor');
                        });
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.success) {
                        toastr.success(data.message || `El reportaje ahora está ${isChecked ? 'activo' : 'inactivo'}.`);
                    } else {
                        el.checked = !isChecked; // Revert switch on failure
                        toastr.error(data.message || 'Fallo al actualizar el estado.');
                    }
                })
                .catch(err => {
                    console.error('Error en el switch de estado:', err);
                    el.checked = !isChecked; // Revert switch on error
                    toastr.error(err.message || 'Ocurrió un error al actualizar el estado.');
                })
                .finally(() => {
                    el.disabled = false;
                });
            });
        });
    });
    </script>
@stop
