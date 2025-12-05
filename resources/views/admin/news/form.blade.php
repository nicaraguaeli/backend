{{-- resources/views/admin/news/form.blade.php --}}
<button class="btn btn-info mb-3" type="button" id="toggleRelatedBtn">
    Mostrar noticias relacionadas ▼
</button>

<div id="relatedContainer" class="border rounded p-3" style="display:none;">
    <h4 class="mb-3">Noticias Relacionadas</h4>
    <div id="relatedResults"></div>
</div>
<div class="row">
    <div class="col-md-8">
        <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" name="title" id="title" class="form-control"
                   value="{{ old('title', $news->title ?? '') }}" required>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="slug">Slug</label>
                <input type="text" name="slug" id="slug" class="form-control"
                       value="{{ old('slug', $news->slug ?? '') }}">
            </div>
            <div class="form-group col-md-6">
                <label for="excerpt">Resumen corto</label>
                <input type="text" name="excerpt" id="excerpt" class="form-control"
                       value="{{ old('excerpt', $news->excerpt ?? '') }}">
            </div>
        </div>

        <div class="form-group">
            <label for="lead">Lead</label>
            <textarea name="lead" id="lead" class="form-control" rows="3">{{ old('lead', $news->lead ?? '') }}</textarea>
        </div>

        <div class="form-group">
            <label for="content">Contenido</label>
            <textarea class="textarea" name="content" id="content" required>{{ old('content', $news->content ?? '') }}</textarea>
        </div>
    </div>

    <div class="col-md-4">
        {{-- Imagen destacada --}}
        <div class="form-group">
            <label>Imagen destacada</label>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="image_path" name="image_path" accept="image/*">
                <label class="custom-file-label" for="image_path">Elegir imagen</label>
            </div>

            <div class="form-check mt-2">
                <input class="form-check-input" type="checkbox" name="add_watermark" id="add_watermark" value="1" {{ old('add_watermark', $news->add_watermark ?? false) ? 'checked' : '' }}>
                <label class="form-check-label" for="add_watermark">
                    Agregar marca de agua
                </label>
            </div>

            {{-- Hidden input para enviar imagen recortada como base64 --}}
            <input type="hidden" name="cropped_image" id="cropped_image">

            <div class="mt-2">
                <label>Previsualización de la imagen</label>
                <div>
                    @if(!empty($news->image_path))
                        <img id="imagePreview" src="{{ asset('storage/' . $news->image_path) }}" class="image-preview" alt="Previsualización" style="max-height:300px; width:auto; object-fit:contain;">
                    @else
                        <img id="imagePreview" class="image-preview d-none" alt="Previsualización" style="max-height:300px; width:auto; object-fit:contain;">
                    @endif
                </div>
            </div>

            {{-- Modal para Cropper --}}
            <div class="modal fade" id="cropperModal" tabindex="-1" role="dialog" aria-labelledby="cropperModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Recortar imagen</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="img-container">
                                <img id="cropperImage" style="max-width:100%;" alt="Imagen para recortar">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" id="cropCancelBtn" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" id="cropSaveBtn">Recortar y guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group mt-2">
                <label for="caption">Pie de foto</label>
                <input type="text" name="caption" id="caption" class="form-control"
                       value="{{ old('caption', $news->caption ?? '') }}">
            </div>
        </div>

        <div class="form-group">
            <label for="published_at">Publicado el</label>
            <input type="datetime-local" name="published_at" id="published_at" class="form-control"
                   value="{{ old('published_at', isset($news->published_at) ? $news->published_at->format('Y-m-d\TH:i') : '') }}">
        </div>

        <div class="form-group">
                            <label for="area">Area</label>
                            <select name="area" id="area" class="form-control">
                                <option value="">Seleccionar...</option>
                                <option value="Nacional" {{ old('area', $news->area ?? '') == 'Nacional' ? 'selected' : '' }}>Nacional</option>
                                <option value="Local" {{ old('area', $news->area ?? '') == 'Local' ? 'selected' : '' }}>Local</option>
                                <option value="Departamental" {{ old('area', $news->area ?? '') == 'Departamental' ? 'selected' : '' }}>Departamental</option>
                                <option value="Internacional" {{ old('area', $news->area ?? '') == 'Internacional' ? 'selected' : '' }}>Internacional</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="country_id">Pais</label>
                            <select name="country_id" id="country_id" class="form-control select2"
                                    data-cities-url="{{ url('admin/countries/COUNTRY_ID/cities') }}">
                                <option value="">Seleccionar país...</option>
                                @foreach($countries as $country)
                                    <option value="{{ $country->id }}" {{ old('country_id', $country_id ?? '') == $country->id ? 'selected' : '' }}>{{ $country->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="city_id">Ciudad</label>
                            <select name="city_id" id="city_id" class="form-control select2" {{ !empty($cities) ? '' : 'disabled' }}>
                                <option value="">Seleccionar ciudad...</option>
                                 @if(isset($cities))
                                @foreach($cities as $city)
                                    <option value="{{ $city->id }}" {{ old('city_id', $city_id ?? '') == $city->id ? 'selected' : '' }}>{{ $city->name }}</option>
                                @endforeach
                                @endif
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="author_id">Autor(s)</label>
                            <select name="author_id[]" id="author_id" class="form-control select2" multiple="multiple" required>
                                @foreach ($authors as $author)
                                    <option class="text-dark" value="{{ $author->id }}" {{ in_array($author->id, old('author_id', $news->author->pluck('id')->toArray() ?? [])) ? 'selected' : '' }}>{{ $author->name }}</option>
                                @endforeach
                            </select>
                            <small class="small-help">Puede seleccionar uno o varios autores.</small>
                        </div>

                        <div class="form-group">
                            <label for="categories">Categorias</label>
                            <select name="categories[]" id="categories" class="form-control select2" multiple="multiple" required>
                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}" {{ in_array($category->id, old('categories', $news->categories->pluck('id')->toArray() ?? [])) ? 'selected' : '' }}>{{ $category->name }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="tags">Tags</label>
                            <select id="tags" name="tags[]" class="form-control select2-tags" multiple="multiple">
                                @if(isset($news))
                                    @foreach($news->tags as $tag)
                                        <option value="{{ $tag->id }}" selected>{{ $tag->name }}</option>
                                    @endforeach
                                @endif
                            </select>
                            <small class="small-help">Escriba y presione Enter para crear tags.</small>
                        </div>


        {{-- Los selects de país, ciudad, autor, categorías y tags igual puedes mantenerlos con old(...) --}}
        {{-- (omite el JS aquí, porque se mantiene en el create/edit principal) --}}
    </div>
</div>

{{-- Añadir CDN de Cropper (CSS) --}}
<link href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.css" rel="stylesheet"/>

{{-- Añadir scripts de Cropper al final del form (usar jQuery/Bootstrap ya presentes en la app) --}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
    // Slug generator
    const titleInput = document.getElementById('title');
    const slugInput = document.getElementById('slug');

    if (titleInput && slugInput) {
        titleInput.addEventListener('keyup', function() {
            const title = this.value;
            slugInput.value = slugify(title);
        });
    }

    function slugify(text) {
        return text.toString().toLowerCase()
            .normalize('NFD') // Normaliza para separar acentos de letras
            .replace(/[\u0300-\u036f]/g, '') // Elimina los diacríticos (acentos)
            .replace(/\s+/g, '-')           // Reemplaza espacios con -
            .replace(/[^\w\-]+/g, '')       // Elimina caracteres no alfanuméricos (excepto guiones)
            .replace(/\-\-+/g, '-')         // Reemplaza múltiples - con uno solo
            .replace(/^-+/, '')             // Elimina - del inicio
            .replace(/-+$/, '');            // Elimina - del final
    }

    // Cropper.js logic
    let cropper = null;
    const imageInput = document.getElementById('image_path');
    const cropperImage = document.getElementById('cropperImage');
    const cropperModal = $('#cropperModal');
    const imagePreview = document.getElementById('imagePreview');
    const croppedInput = document.getElementById('cropped_image');
    const cropSaveBtn = document.getElementById('cropSaveBtn');
    const fileLabel = document.querySelector('.custom-file-label[for="image_path"]');

    function resetCropper() {
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }
        cropperImage.src = '';
    }

    imageInput.addEventListener('change', function (e) {
        const file = this.files && this.files[0];
        if (!file) return;

        // actualizar label
        if (fileLabel) fileLabel.textContent = file.name;

        const url = URL.createObjectURL(file);
        cropperImage.src = url;

        // abrir modal y crear cropper cuando se muestre
        cropperModal.on('shown.bs.modal.cropper', function () {
            // init cropper
            cropper = new Cropper(cropperImage, {
                viewMode: 1,
                aspectRatio: 16 / 9,
                autoCropArea: 0.9,
                movable: true,
                zoomable: true,
                rotatable: true,
                scalable: false,
                cropBoxResizable: false,
                maxCropBoxWidth: 1200,
                maxCropBoxHeight: 675
            });
        });

        // limpiar al esconder
        cropperModal.on('hidden.bs.modal.cropper', function () {
            try { URL.revokeObjectURL(url); } catch (err) {}
            resetCropper();
            cropperModal.off('.cropper');
        });

        cropperModal.modal('show');
    });

   cropSaveBtn.addEventListener('click', function () {
    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas({
        width: 1200,
        height: 675,
        fillColor: '#fff'
    });

    canvas.toBlob(function (blob) {
        const reader = new FileReader();
        reader.onloadend = function () {
            const base64data = reader.result;
            if (croppedInput) croppedInput.value = base64data;

            if (imagePreview) {
                imagePreview.src = base64data;
                imagePreview.classList.remove('d-none');
            }

            cropperModal.modal('hide');
        };
        reader.readAsDataURL(blob);
    }, 'image/jpeg', 0.9);
});


    // Si el usuario desea remover la imagen seleccionada manualmente:
    // puedes añadir aquí un handler para limpiar input/preview si hace falta.
});
</script>
