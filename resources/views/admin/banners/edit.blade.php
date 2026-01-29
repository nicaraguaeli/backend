@extends('adminlte::page')

@section('title', 'Editar Banner')

@section('content_header')
    <h1>Editar Banner</h1>
@stop

@section('content')
    <div class="card">
        <div class="card-body">
            <form action="{{ route('admin.banners.update', $banner) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label>Archivo Actual</label>
                    <div class="mb-2">
                        @if(Str::startsWith($banner->mime_type, 'video'))
                            <video src="{{ asset('storage/' . $banner->file_path) }}" style="max-height: 200px; max-width: 100%;" controls></video>
                        @else
                            <img src="{{ asset('storage/' . $banner->file_path) }}" alt="Banner" style="max-height: 200px; max-width: 100%;">
                        @endif
                    </div>
                </div>

                <div class="form-group">
                    <label for="file">Reemplazar Archivo (Opcional)</label>
                    <input type="file" name="file" id="file" class="form-control-file @error('file') is-invalid @enderror" accept="image/*,video/mp4,video/webm">
                    <small class="form-text text-muted">Deja vacio para mantener el actual. Soporta JPG, PNG, GIF, MP4, WEBM (Max 10MB)</small>
                    @error('file')
                        <span class="badgem badge-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="link">Link (Opcional)</label>
                    <input type="url" name="link" id="link" class="form-control @error('link') is-invalid @enderror" value="{{ old('link', $banner->link) }}" placeholder="https://ejemplo.com">
                    @error('link')
                        <span class="invalid-feedback">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="position">Posición (Opcional)</label>
                    <select name="position" id="position" class="form-control @error('position') is-invalid @enderror">
                        <option value="">Seleccione una posición</option>
                        <option value="home_top" {{ old('position', $banner->position) == 'home_top' ? 'selected' : '' }}>Home Top</option>
                        <option value="sidebar" {{ old('position', $banner->position) == 'sidebar' ? 'selected' : '' }}>Sidebar</option>
                        <option value="footer" {{ old('position', $banner->position) == 'footer' ? 'selected' : '' }}>Footer</option>
                        <option value="content" {{ old('position', $banner->position) == 'content' ? 'selected' : '' }}>Contenido</option>
                    </select>
                    @error('position')
                        <span class="invalid-feedback">{{ $message }}</span>
                    @enderror
                </div>



                <button type="submit" class="btn btn-primary">Actualizar Banner</button>
                <a href="{{ route('admin.banners.index') }}" class="btn btn-secondary">Cancelar</a>
            </form>
        </div>
    </div>
@stop
