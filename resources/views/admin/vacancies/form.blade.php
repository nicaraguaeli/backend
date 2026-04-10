<div class="row">
    <div class="col-md-8">
        <div class="form-group">
            <label for="title">Puesto Laboral</label>
            <input type="text" name="title" id="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title', $vacancy->title ?? '') }}" required>
            @error('title')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

        <div class="form-group">
            <label for="company">Empleador</label>
            <input type="text" name="company" id="company" class="form-control @error('company') is-invalid @enderror" value="{{ old('company', $vacancy->company ?? '') }}">
            @error('company')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

        <div class="form-group">
            <label for="description">Descripción</label>
            <textarea name="description" id="description" class="form-control textarea @error('description') is-invalid @enderror" rows="10">{{ old('description', $vacancy->description ?? '') }}</textarea>
            @error('description')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <div class="col-md-4">

         <div class="form-group">
            <label>Imagen (opcional)</label>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="image_path" name="image_path" accept="image/*">
                <label class="custom-file-label" for="image_path">Elegir imagen</label>
            </div>
        </div>

        <div class="form-group">
            <label>Previsualización</label>
            <div>
                @if(!empty($vacancy->file_path))
                    {{-- Imagen ya guardada en edición --}}
                    <div class="mb-2">
                        <img id="imagePreview"
                             src="{{ asset('storage/' . $vacancy->file_path) }}"
                             class="image-preview"
                             alt="Imagen actual"
                             style="max-height:200px; width:auto; object-fit:contain; border:1px solid #ddd; border-radius:4px; padding:4px;">
                        <div class="mt-1">
                            <small class="text-muted">URL: </small>
                            <small><code>{{ asset('storage/' . $vacancy->file_path) }}</code></small>
                        </div>
                    </div>
                @else
                    <img id="imagePreview"
                         class="image-preview d-none"
                         alt="Previsualización"
                         style="max-height:200px; width:auto; object-fit:contain; border:1px solid #ddd; border-radius:4px; padding:4px;">
                    <p id="noImageText" class="text-muted small">Ninguna imagen seleccionada.</p>
                @endif
            </div>
        </div>

        <div class="form-group">
            <label for="expires_at">Fecha de expiración</label>
            <input
                type="date"
                name="expires_at"
                id="expires_at"
                class="form-control @error('expires_at') is-invalid @enderror"
                value="{{ old('expires_at', isset($vacancy) && $vacancy->expires_at ? \Carbon\Carbon::parse($vacancy->expires_at)->format('Y-m-d') : '') }}"
            >
            @error('expires_at')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
            @enderror
            <small class="text-muted">Puede ingresar una fecha futura o pasada para reutilizar un empleo vencido.</small>
        </div>

        <div class="form-group">
            <label for="employment_type">Tipo de contrato</label>
            <select name="employment_type" id="employment_type" class="form-control @error('employment_type') is-invalid @enderror">
                <option value="">-- Seleccionar --</option>
                @foreach($vacancies_types ?? [] as $key => $value)
                    <option value="{{ $key }}" @selected(old('employment_type', $vacancy->employment_type ?? '') == $key)>{{ $value }}</option>
                @endforeach
            </select>
            @error('employment_type')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

        <div class="form-group">
            <label for="city">Ciudad</label>
            <select name="city" id="city" class="form-control @error('city') is-invalid @enderror">
                <option value="">-- Seleccione una ciudad --</option>
                @foreach($cities ?? [] as $city)
                    <option value="{{ $city->name }}" @selected(old('city', $vacancy->city ?? '') == $city->name)>{{ $city->name }}
                    </option>
                @endforeach
            </select>
            @error('city')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

    </div>
</div>
