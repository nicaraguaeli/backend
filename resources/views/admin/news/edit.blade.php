@extends('adminlte::page')

@section('title', 'Editar noticia')

@section('content_header')
    <h1>Editar Noticia</h1>
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

                <form action="{{ route('admin.news.update', $news) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                @include('admin.news.form')

                <div class="form-group mt-3 d-flex justify-content-end">
                    <a href="{{ route('admin.news.index') }}" class="btn btn-secondary mr-2">Cancelar</a>
                    <button type="submit" class="btn btn-primary">Actualizar Noticia</button>
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

            

            // Asegúrate que Select2 esté inicializado en #country_id y #city_id
            $('#country_id').select2({
                width: '100%',
                placeholder: 'Seleccionar país'
            });
            $('#city_id').select2({
                width: '100%',
                placeholder: 'Seleccionar ciudad'
            });

            // helper para cargar ciudades
            function loadCitiesForCountry(countryId, selectedCityId) {
                const citiesSelect = $('#city_id');
                if (!countryId) {
                    citiesSelect.empty().append('<option value="">Seleccionar ciudad...</option>');
                    citiesSelect.prop('disabled', true).trigger('change');
                    return;
                }

                // obtener plantilla de URL desde data attribute (si existe)
                let urlTemplate = $('#country_id').data('cities-url') || '/admin/countries/COUNTRY_ID/cities';
                const url = urlTemplate.replace('COUNTRY_ID', countryId);

                // mostrar cargando
                citiesSelect.prop('disabled', true).empty().append('<option value="">Cargando...</option>').trigger('change');

                return $.get(url)
                    .done(function (data) {
                        // aceptar varias formas de respuesta
                        let items = [];
                        if (Array.isArray(data)) items = data;
                        else if (Array.isArray(data.data)) items = data.data;
                        else if (Array.isArray(data.cities)) items = data.cities;
                        else if (Array.isArray(data.items)) items = data.items;

                        citiesSelect.empty();
                        citiesSelect.append('<option value="">Seleccionar ciudad...</option>');

                        if (items.length) {
                            items.forEach(function (c) {
                                const option = new Option(c.name, c.id, false, (selectedCityId && String(c.id) === String(selectedCityId)));
                                citiesSelect.append(option);
                            });
                            citiesSelect.prop('disabled', false);
                        } else {
                            citiesSelect.append('<option value="">Sin ciudades</option>');
                            citiesSelect.prop('disabled', true);
                        }

                        citiesSelect.trigger('change');
                    })
                    .fail(function (xhr, status, err) {
                        console.error('Error cargando ciudades:', status, err, xhr.responseText);
                        citiesSelect.empty().append('<option value="">Error cargando ciudades</option>');
                        citiesSelect.prop('disabled', true).trigger('change');
                    });
            }

            // Cargar ciudades cuando cambie el país
            $('#country_id').on('change', function () {
                const countryId = $(this).val();
                // si hay una ciudad preseleccionada en el input (por ejemplo en edición)
                const preselected = $('#city_id').data('selected') || $('#city_id').val() || null;
                loadCitiesForCountry(countryId, preselected);
            });

            // Si estamos editando y ya hay un país seleccionado, cargar sus ciudades y seleccionar la ciudad actual
            const initialCountry = $('#country_id').val();
            const initialCity = $('#city_id').data('selected') || $('#city_id').val();
            if (initialCountry) {
                loadCitiesForCountry(initialCountry, initialCity);
            }
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