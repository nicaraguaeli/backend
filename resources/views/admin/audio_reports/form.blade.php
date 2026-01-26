<div class="row">
    {{-- Columna Izquierda --}}
    <div class="col-md-8">
        <div class="form-group">
            <label for="title">Título</label>
            <input type="text" name="title" id="title" class="form-control @error('title') is-invalid @enderror"
                   value="{{ old('title', $audioReport->title ?? '') }}" required>
            @error('title')
                <span class="invalid-feedback">{{ $message }}</span>
            @enderror
        </div>

        <div class="form-group">
            <label for="slug">Slug</label>
            <input type="text" name="slug" id="slug" class="form-control"
                   value="{{ old('slug', $audioReport->slug ?? '') }}" readonly>
            <small class="text-muted">Se genera automáticamente desde el título.</small>
        </div>

        <div class="form-group">
            <label for="excerpt">Extracto</label>
            <textarea name="excerpt" id="excerpt" class="form-control @error('excerpt') is-invalid @enderror" rows="3">{{ old('excerpt', $audioReport->excerpt ?? '') }}</textarea>
            @error('excerpt')
                <span class="invalid-feedback">{{ $message }}</span>
            @enderror
        </div>

        <div class="form-group">
            <label for="content">Contenido</label>
            <textarea name="content" id="content" class="textarea @error('content') is-invalid @enderror">{{ old('content', $audioReport->content ?? '') }}</textarea>
            @error('content')
                <span class="invalid-feedback">{{ $message }}</span>
            @enderror
        </div>
    </div>

    {{-- Columna Derecha --}}
    <div class="col-md-4">
        {{-- Imagen Destacada --}}
        <div class="form-group">
            <label>Imagen Destacada</label>
            <div class="custom-file">
                <input type="file" class="custom-file-input @error('image') is-invalid @enderror" id="image" name="image" accept="image/*">
                <label class="custom-file-label" for="image">Elegir imagen</label>
            </div>
            <div class="mt-2">
                @if(!empty($audioReport->image_path))
                    <img id="imagePreview" class="image-preview" alt="Previsualización" src="{{ asset('storage/' . $audioReport->image_path) }}" style="max-height:200px; width:auto; object-fit:contain;">
                @else
                    <img id="imagePreview" class="image-preview d-none" alt="Previsualización" style="max-height:200px; width:auto; object-fit:contain;">
                @endif
            </div>
            @error('image')
                <span class="text-danger d-block mt-1">{{ $message }}</span>
            @enderror
        </div>

        {{-- Archivo de Audio --}}
        <div class="form-group">
            <label>Archivo de Audio</label>
            <div class="custom-file">
                <input type="file" class="custom-file-input @error('audio') is-invalid @enderror" id="audio" name="audio" accept=".mp3,.wav,.ogg">
                <label class="custom-file-label" for="audio">Elegir audio</label>
            </div>
            @error('audio')
                <span class="text-danger d-block mt-1">{{ $message }}</span>
            @enderror
        </div>

        {{-- Fecha de Publicación --}}
        <div class="form-group">
            <label for="published_at">Fecha de Publicación</label>
            <input type="datetime-local" name="published_at" id="published_at" class="form-control @error('published_at') is-invalid @enderror"
                   value="{{ old('published_at', isset($audioReport) && $audioReport->published_at ? \Carbon\Carbon::parse($audioReport->published_at)->format('Y-m-d\TH:i') : '') }}">
            @error('published_at')
                <span class="invalid-feedback">{{ $message }}</span>
            @enderror
        </div>

        {{-- Autor --}}
        <div class="form-group">
            <label for="author_id">Autor</label>
            <select name="author_id" id="author_id" class="form-control select2 @error('author_id') is-invalid @enderror">
                <option value="">Seleccione un autor</option>
                @foreach($authors as $author)
                    <option value="{{ $author->id }}" {{ old('author_id', $audioReport->author_id ?? '') == $author->id ? 'selected' : '' }}>{{ $author->name }}</option>
                @endforeach
            </select>
            @error('author_id')
                <span class="invalid-feedback">{{ $message }}</span>
            @enderror
        </div>

        {{-- Categorías --}}
        <div class="form-group">
            <label for="categories">Categorías</label>
            <select name="categories[]" id="categories" class="form-control select2 @error('categories') is-invalid @enderror" multiple="multiple">
                @foreach($categories as $category)
                    <option value="{{ $category->id }}" {{ (collect(old('categories', $audioReport->categories->pluck('id') ?? []))->contains($category->id)) ? 'selected' : '' }}>{{ $category->name }}</option>
                @endforeach
            </select>
            @error('categories')
                <span class="text-danger">{{ $message }}</span>
            @enderror
        </div>

    </div>
</div>