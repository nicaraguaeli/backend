@extends('adminlte::page')

@section('title', 'Create News')

@section('content_header')
    <h1>Create News</h1>
@stop

@section('css')
    <!-- Summernote CSS (CDN) -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css" rel="stylesheet">
    <!-- Select2 CSS (CDN) -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <style>
        .image-preview { max-width: 100%; height: auto; margin-top: 0.5rem; border-radius: 4px; }
        .form-section-title { font-weight: 600; margin-bottom: 0.5rem; color: #333; }
        .small-help { font-size: 0.9rem; color: #6c757d; }
        .select2-container .select2-selection--multiple { min-height: 38px; }
        /* Fix alignment/height so Select2 looks like .form-control */
        .select2-container--default .select2-selection--single,
        .select2-container--default .select2-selection--multiple {
            min-height: 38px;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            padding: 2px 8px;
            box-sizing: border-box;
        }
        .select2-container--default .select2-selection--single .select2-selection__rendered {
            line-height: 34px; /* vertically center the text */
            padding-left: 4px;
            color: #495057;
        }
        .select2-container--default .select2-selection--multiple .select2-selection__rendered {
            padding: 4px 6px;
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }
        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 34px;
        }
        /* When select is disabled, keep consistent look */
        .select2-container--default.select2-container--disabled .select2-selection {
            background-color: #e9ecef;
            opacity: 1;
        }
        /* Make select2 tags not overflow */
        .select2-selection__choice {
            color: #fff;
            background: #007bff;
            border: none;
            padding: 0 6px;
        }
        .tag {
            display: inline-block;
            background-color: #5a6268;
            color: white;
            padding: 6px 12px;
            border-radius: 15px;
            margin: 5px 5px 5px 0;
            font-size: 0.9em;
            font-weight: 500;
            cursor: default;
            transition: background-color 0.2s;
        }
        .tag:hover {
            background-color: #4d545a;
        }
        .tag .remove-tag {
            margin-left: 8px;
            cursor: pointer;
            font-weight: bold;
            color: #eee;
            transition: color 0.2s;
        }
        .tag .remove-tag:hover {
            color: #fff;
        }
    </style>
@stop

@section('content')
    <div class="card">
        <div class="card-body">
           <form action="{{ route('admin.news.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('POST')

                @include('admin.news.form')
                
       


                <div class="form-group mt-3 d-flex justify-content-end">
                    <a href="{{ route('admin.news.index') }}" class="btn btn-secondary mr-2">Cancelar</a>
                    <button type="submit" class="btn btn-primary">Crear Noticia</button>
                </div>
               </form>
        </div>
    </div>
@stop

@section('js')
    <!-- Summernote JS (CDN) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.js"></script>
    <!-- Select2 JS (CDN) -->
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.js"></script>


    <script>
        $(function () {
            // Summernote
           $('.textarea').summernote({
    height: 320,
    toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'italic', 'underline', 'clear']],
        ['fontname', ['fontname']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview']]
    ],
    callbacks: {

        // 🔹 Intercepta la subida de imágenes (NO base64)
        onImageUpload: function(files) {
            uploadImageWithCaption(files[0], this);
        },

        // 🔹 Evita pegar imágenes base64 desde Word / Google Docs
        onPaste: function(e) {
            let clipboardData = (e.originalEvent || e).clipboardData;
            if (clipboardData && clipboardData.items) {
                for (let i = 0; i < clipboardData.items.length; i++) {
                    if (clipboardData.items[i].type.indexOf('image') !== -1) {
                        e.preventDefault();
                        alert('Pegado de imágenes no permitido. Usa el botón de imagen.');
                        return;
                    }
                }
            }
        }
    }
});

// 🔹 Subida de imagen con caption
function uploadImageWithCaption(file, editor) {

    const caption = prompt('Pie de foto (opcional):');

    let data = new FormData();
    data.append('image', file);
    data.append('caption', caption ?? '');

    fetch('/admin/summernote/upload', {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        },
        body: data
    })
    .then(res => res.json())
    .then(response => {

       const figureHtml = `
    
        <img src="${response.url}" alt="${response.caption ?? ''}">
        ${response.caption 
            ? `<figcaption class="figure-caption mt-2 text-end fst-italic">
                 ${response.caption}
               </figcaption>` 
            : ''}
    
`;

$(editor).summernote('pasteHTML', figureHtml);

    })
    .catch(() => {
        alert('Error subiendo la imagen');
    });
}

            // Select2 for multi-selects
            $('.select2').select2({
                width: '100%',
                placeholder: 'Seleccionar',
                allowClear: true,
                maximumSelectionLength: 2

            });

            // Select2 for tags (tag creation)
            $('.select2-tags').select2({
                tags: true,
                tokenSeparators: [','],
                placeholder: 'Añadir tags',
                width: '100%'
            });

            // Slug auto-generation (only if slug empty)
            $('#title').on('blur', function () {
                const title = $(this).val().trim();
                const slugInput = $('#slug');
                if (!slugInput.val() && title) {
                    const slug = title.toLowerCase()
                        .replace(/[^\w\s-]/g, '')
                        .trim()
                        .replace(/\s+/g, '-');
                    slugInput.val(slug);
                }
            });

            // Image preview and filename label
            $('#image_path').on('change', function (e) {
                const file = this.files && this.files[0];
                const label = $(this).next('.custom-file-label');
                if (file) {
                    label.text(file.name);
                    const url = URL.createObjectURL(file);
                    $('#imagePreview').attr('src', url).removeClass('d-none');
                } else {
                    label.text('Elegir imagen');
                    $('#imagePreview').attr('src', '').addClass('d-none');
                }
            });

            // Improve file input display for browsers not supporting bootstrap custom-file (optional)
            $('.custom-file-input').on('change', function () {
                const fileName = $(this).val().split('\\').pop();
                $(this).next('.custom-file-label').addClass('selected').html(fileName);
            });

            // Asegúrate que Select2 esté inicializado en #country_id y #city_id
            $('#country_id').select2({
                width: '100%',
                placeholder: 'Seleccionar país'
            });
            $('#city_id').select2({
                width: '100%',
                placeholder: 'Seleccionar ciudad'
            });

            // Cargar ciudades cuando cambie el país
            $('#country_id').on('change', function () {
                const countryId = $(this).val();
                const citiesSelect = $('#city_id');
                citiesSelect.prop('disabled', true).empty().append('<option value="">Cargando...</option>');
                if (!countryId) {
                    citiesSelect.empty().append('<option value="">Seleccionar ciudad...</option>');
                    citiesSelect.prop('disabled', true).trigger('change');
                    return;
                }

                // Construir URL desde data attribute (reemplaza placeholder)
                let urlTemplate = $(this).data('cities-url');
                const url = urlTemplate.replace('COUNTRY_ID', countryId);

                $.get(url)
                    .done(function (data) {
                        citiesSelect.empty();
                        citiesSelect.append('<option value="">Seleccionar ciudad...</option>');
                        if (Array.isArray(data) && data.length) {
                            data.forEach(function (c) {
                                citiesSelect.append(new Option(c.name, c.id));
                            });
                            citiesSelect.prop('disabled', false);
                        } else {
                            citiesSelect.append('<option value="">Sin ciudades</option>');
                            citiesSelect.prop('disabled', true);
                        }
                        citiesSelect.trigger('change');
                    })
                    .fail(function () {
                        citiesSelect.empty().append('<option value="">Error cargando ciudades</option>');
                        citiesSelect.prop('disabled', true).trigger('change');
                    });
            });
        });
        
    </script>

   <script>
function fetchRelatedNews() {
    let categoryIds = $('#categories').val();
    let tagIds = $('#tags').val();
    const resultsContainer = $('#relatedResults');

    if ((!categoryIds || categoryIds.length === 0) && (!tagIds || tagIds.length === 0)) {
        resultsContainer.html('<div class="col-12 text-center text-muted py-4"><i class="fas fa-info-circle fa-2x mb-2"></i><p>Selecciona categorías o tags para ver sugerencias.</p></div>');
        return;
    }

    resultsContainer.html('<div class="col-12 text-center text-muted py-4"><i class="fas fa-spinner fa-spin fa-2x"></i><p class="mt-2">Buscando noticias relacionadas...</p></div>');

    $.post("{{ route('admin.news.related') }}", {
        categoryIds,
        tagIds,
        limit: 6,
        _token: "{{ csrf_token() }}"
    })
    .done(function(data) {
        if (!data.length) {
            resultsContainer.html('<div class="col-12 text-center text-muted py-4"><p>No se encontraron noticias relacionadas.</p></div>');
            return;
        }

        let html = '';
        data.forEach(n => {
            const url = `{{ url('/') }}/news/${n.slug}`;
            // Asumiendo que n.image_path existe, si no usar placeholder
            const image = n.image_path ? `/storage/${n.image_path}` : 'https://via.placeholder.com/150';

            html += `
            <div class="col-md-6 mb-2">
                <div class="card h-100 shadow-sm">
                    <div class="card-body p-2 d-flex flex-column">
                        <h6 class="card-title font-weight-bold mb-1" style="font-size: 0.9rem;">${n.title}</h6>
                        <p class="card-text text-muted small mb-2 flex-grow-1" style="font-size: 0.8rem;">${n.excerpt || ''}</p>
                        <div class="mt-auto">
                            <div class="input-group input-group-sm">
                                <input type="text" class="form-control form-control-sm" value="${url}" readonly style="font-size: 0.75rem;">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-primary btn-sm copy-btn" type="button" data-url="${url}" style="font-size: 0.75rem;">
                                        <i class="fas fa-copy"></i> Copiar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        resultsContainer.html(html);
    })
    .fail(function() {
        resultsContainer.html('<div class="col-12 text-center text-danger py-4"><p>Error cargando noticias relacionadas.</p></div>');
    });
}

// EVENTOS
// Ya no necesitamos el evento on change para cargar automáticamente, se carga al abrir el modal
// $(document).on('change', '#categories, #tags', fetchRelatedNews);

// Función robusta para copiar al portapapeles
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback para navegadores antiguos o contextos no seguros (http)
        let textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((resolve, reject) => {
            try {
                document.execCommand('copy');
                resolve();
            } catch (err) {
                reject(err);
            } finally {
                textArea.remove();
            }
        });
    }
}

// Botón de copiar
$(document).on('click', '.copy-btn', function () {
    const url = $(this).data('url');
    const btn = $(this);
    const originalHtml = btn.html();

    copyToClipboard(url).then(() => {
        btn.removeClass('btn-outline-primary').addClass('btn-success').html('<i class="fas fa-check"></i> Copiado');
        setTimeout(() => {
            btn.removeClass('btn-success').addClass('btn-outline-primary').html(originalHtml);
        }, 1500);
    }).catch(err => {
        console.error('Error al copiar', err);
        btn.removeClass('btn-outline-primary').addClass('btn-danger').html('<i class="fas fa-times"></i> Error');
        setTimeout(() => {
            btn.removeClass('btn-danger').addClass('btn-outline-primary').html(originalHtml);
        }, 1500);
    });
});
</script>


@stop