@csrf
<div class="card-body">
    <div class="form-group">
        <label for="name">Nombre</label>
        <input id="name" name="name" type="text" class="form-control @error('name') is-invalid @enderror"
               value="{{ old('name', $journalist->name ?? '') }}" required>
        @error('name') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input id="email" name="email" type="email" class="form-control @error('email') is-invalid @enderror"
               value="{{ old('email', $journalist->email ?? '') }}">
        @error('email') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="form-group">
        <label for="phone_number">Teléfono</label>
        <input id="phone_number" name="phone_number" type="text" class="form-control @error('phone_number') is-invalid @enderror"
               value="{{ old('phone_number', $journalist->phone_number ?? '') }}">
        @error('phone_number') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="form-group">
        <label for="type">Tipo</label>
        <select id="type" name="type" class="form-control @error('type') is-invalid @enderror" required>
            <option value="Periodista" {{ old('type', $journalist->type ?? '') == 'Periodista' ? 'selected' : '' }}>Periodista</option>
            <option value="Colaborador" {{ old('type', $journalist->type ?? '') == 'Colaborador' ? 'selected' : '' }}>Colaborador</option>
        </select>
        @error('type') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="form-group">
        <label for="bio">Biografía</label>
        <textarea id="bio" name="bio" rows="4" class="form-control @error('bio') is-invalid @enderror">{{ old('bio', $journalist->bio ?? '') }}</textarea>
        @error('bio') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="form-group">
        <label for="avatar">Avatar (imagen)</label>
        <input id="avatar" name="avatar" type="file" accept="image/*" class="form-control-file @error('avatar') is-invalid @enderror">
        @error('avatar') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror

        <div class="mt-2">
            @if(!empty($journalist->avatar))
                <img id="avatarPreview" src="{{ asset('storage/' . $journalist->avatar) }}" alt="avatar" style="max-height:300px; width:auto; object-fit:contain;">
            @else
                <img id="avatarPreview" class="d-none" alt="avatar preview" style="max-height:300px; width:auto; object-fit:contain;">
            @endif
        </div>
    </div>
</div>

@section('jsForm')
<script>
document.addEventListener('DOMContentLoaded', function () {
    const avatarInput = document.getElementById('avatar');
    const preview = document.getElementById('avatarPreview');
    if (!avatarInput) return;
    avatarInput.addEventListener('change', function () {
        const file = this.files && this.files[0];
        if (!file) {
            if (preview) preview.classList.add('d-none');
            return;
        }
        const url = URL.createObjectURL(file);
        if (preview) {
            preview.src = url;
            preview.classList.remove('d-none');
        }
    });
});
</script>
@endsection
