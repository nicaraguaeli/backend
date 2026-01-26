@extends('adminlte::page')

@section('title', 'Crear Audio Reportaje')

@section('content_header')
    <h1>Crear Nuevo Audio Reportaje</h1>
@stop

@section('css')
    <!-- Summernote CSS (CDN) -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css" rel="stylesheet">
    <!-- Select2 CSS (CDN) -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <style>
        .image-preview { max-width: 100%; height: auto; margin-top: 0.5rem; border-radius: 4px; }
        .select2-container .select2-selection--multiple { min-height: 38px; }
        .select2-container--default .select2-selection--single,
        .select2-container--default .select2-selection--multiple {
            min-height: 38px;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            padding: 2px 8px;
            box-sizing: border-box;
        }
        .select2-container--default .select2-selection--single .select2-selection__rendered {
            line-height: 34px;
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
    </style>
@stop

@section('content')
    <div class="card">
        <div class="card-body">
            <form action="{{ route('admin.audio_reports.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                @include('admin.audio_reports.form')

                <div class="form-group mt-3 d-flex justify-content-end">
                    <a href="{{ route('admin.audio_reports.index') }}" class="btn btn-secondary mr-2">Cancelar</a>
                    <button type="submit" class="btn btn-primary">Guardar Audio Reportaje</button>
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
        $(document).ready(function() {
            // Summernote
            $('.textarea').summernote({
                height: 300,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'clear']],
                    ['fontname', ['fontname']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['insert', ['link', 'picture', 'video']],
                    ['view', ['fullscreen', 'codeview']]
                ]
            });

            // Select2
            $('.select2').select2({
                width: '100%',
                placeholder: 'Seleccionar',
                allowClear: true
            });

            // Custom file input label update
            $(".custom-file-input").on("change", function() {
                var fileName = $(this).val().split("\\").pop();
                $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
            });

            // Image preview
            $('#image').on('change', function (e) {
                const file = this.files && this.files[0];
                if (file) {
                    const url = URL.createObjectURL(file);
                    $('#imagePreview').attr('src', url).removeClass('d-none');
                } else {
                    $('#imagePreview').attr('src', '').addClass('d-none');
                }
            });

            // Slug generator
            $('#title').on('keyup blur', function() {
                var title = $(this).val();
                var slug = title.toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .trim()
                    .replace(/\s+/g, '-');
                $('#slug').val(slug);
            });
        });
    </script>
@stop
