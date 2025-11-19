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
                ]
            });

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
@stop