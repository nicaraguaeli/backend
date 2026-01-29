@extends('adminlte::page')

@section('title', 'Crear Banner')

@section('content_header')
    <h1>Crear Banner</h1>
@stop

@section('content')
    <div class="card">
        <div class="card-body">
            <form action="{{ route('admin.banners.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                <div class="form-group">
                    <label for="file">Archivo Media (Imagen o Video)</label>
                    <input type="file" name="file" id="file" class="form-control-file @error('file') is-invalid @enderror" accept="image/*,video/mp4,video/webm" required>
                    <small class="form-text text-muted">Soporta JPG, PNG, GIF, MP4, WEBM (Max 10MB)</small>
                    @error('file')
                        <span class="badgem badge-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="link">Link (Opcional)</label>
                    <input type="url" name="link" id="link" class="form-control @error('link') is-invalid @enderror" value="{{ old('link') }}" placeholder="https://ejemplo.com">
                    @error('link')
                        <span class="invalid-feedback">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="position">Posición (Opcional)</label>
                    <select name="position" id="position" class="form-control @error('position') is-invalid @enderror">
                        <option value="">Seleccione una posición</option>
                        <option value="home_top" {{ old('position') == 'home_top' ? 'selected' : '' }}>Home Top</option>
                        <option value="sidebar" {{ old('position') == 'sidebar' ? 'selected' : '' }}>Sidebar</option>
                        <option value="footer" {{ old('position') == 'footer' ? 'selected' : '' }}>Footer</option>
                        <option value="content" {{ old('position') == 'content' ? 'selected' : '' }}>Contenido</option>
                    </select>
                    @error('position')
                        <span class="invalid-feedback">{{ $message }}</span>
                    @enderror
                </div>



                <button type="submit" class="btn btn-primary">Guardar Banner</button>
                <a href="{{ route('admin.banners.index') }}" class="btn btn-secondary">Cancelar</a>
            </form>
        </div>
    </div>
@stop
