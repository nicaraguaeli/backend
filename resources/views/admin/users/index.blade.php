@extends('adminlte::page')

@section('title', 'Usuarios')

@section('content_header')
    <h1>Gestión de Usuarios</h1>
@stop

@section('css')
<style>
    .badge-admin   { background-color: #dc3545; color: #fff; }
    .badge-editor  { background-color: #17a2b8; color: #fff; }
    .badge-pending { background-color: #ffc107; color: #212529; }
    .badge-active  { background-color: #28a745; color: #fff; }
</style>
@stop

@section('content')

    {{-- Flash messages --}}
    @if (session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
        </div>
    @endif
    @if (session('error'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            {{ session('error') }}
            <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
        </div>
    @endif

    <div class="card">
        <div class="card-header">
            <h3 class="card-title">
                Usuarios registrados
                <span class="badge badge-secondary ml-2">{{ $users->count() }}</span>
            </h3>
        </div>

        <div class="card-body p-0">
            <table class="table table-striped table-hover mb-0">
                <thead class="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        @if(auth()->user()->role === 'admin')
                            <th>Aprobar / Cambiar rol</th>
                            <th>Eliminar</th>
                        @endif
                    </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>
                                {{ $user->name }}
                                @if($user->id === auth()->id())
                                    <span class="badge badge-light border ml-1">Tú</span>
                                @endif
                            </td>
                            <td>{{ $user->email }}</td>
                            <td>
                                @if($user->role === 'admin')
                                    <span class="badge badge-admin">Admin</span>
                                @else
                                    <span class="badge badge-editor">{{ $user->role }}</span>
                                @endif
                            </td>
                            <td>
                                @if($user->is_active)
                                    <span class="badge badge-active">Activo</span>
                                @else
                                    <span class="badge badge-pending">Pendiente</span>
                                @endif
                            </td>

                            @if(auth()->user()->role === 'admin')
                                {{-- Approve + role form --}}
                                <td>
                                    <form action="{{ route('admin.users.update', $user) }}" method="POST" class="form-inline">
                                        @csrf
                                        @method('PUT')

                                        <select name="role" class="form-control form-control-sm mr-1">
                                            <option value="admin"  {{ $user->role === 'admin'  ? 'selected' : '' }}>Admin</option>
                                            <option value="Editor" {{ $user->role === 'Editor' ? 'selected' : '' }}>Editor</option>
                                        </select>

                                        <select name="is_active" class="form-control form-control-sm mr-1">
                                            <option value="1" {{ $user->is_active ? 'selected' : '' }}>Activo</option>
                                            <option value="0" {{ !$user->is_active ? 'selected' : '' }}>Inactivo</option>
                                        </select>

                                        <button type="submit" class="btn btn-success btn-sm">
                                            <i class="fas fa-check"></i> Guardar
                                        </button>
                                    </form>
                                </td>

                                {{-- Delete --}}
                                <td>
                                    @if($user->id !== auth()->id())
                                        <form action="{{ route('admin.users.destroy', $user) }}" method="POST"
                                              onsubmit="return confirm('¿Estás seguro de eliminar a {{ addslashes($user->name) }}?')">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger btn-sm">
                                                <i class="fas fa-trash"></i> Eliminar
                                            </button>
                                        </form>
                                    @else
                                        <span class="text-muted small">—</span>
                                    @endif
                                </td>
                            @endif
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@stop
