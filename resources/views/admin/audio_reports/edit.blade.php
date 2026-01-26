@extends('adminlte::page')

@section('title', 'Editar Audio Reportaje')

@section('content_header')
    <h1>Editar Audio Reportaje</h1>
@stop

@section('css')
    <!-- Summernote CSS (CDN) -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css" rel="stylesheet">
    <!-- Select2 CSS (CDN) -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
@stop

@section('content')
    <div class="card">
        <div class="card-body">
            <form action="{{ route('admin.audio_reports.update', $audioReport) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                @include('admin.audio_reports.form')

                <div class="form-group mt-3 d-flex justify-content-end">
                    <a href="{{ route('admin.audio_reports.index') }}" class="btn btn-secondary mr-2">Cancelar</a>
                    <button type="submit" class="btn btn-primary">Actualizar Audio Reportaje</button>
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
        document.addEventListener('DOMContentLoaded', function () {
            // Initialize WYSIWYG and Select2 if available
            if (window.jQuery && window.jQuery.fn && window.jQuery.fn.summernote) {
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

                $('.select2').select2({
                    width: '100%',
                    placeholder: 'Seleccionar',
                    allowClear: true
                });
            }

            // Custom file input label update (works with jQuery or vanilla fallback)
            function updateCustomFileLabel(input) {
                var label = input.nextElementSibling;
                if (!label) return;
                var fileName = input.value.split('\\').pop();
                if (fileName) {
                    label.classList.add('selected');
                    label.innerHTML = fileName;
                }
            }

            document.querySelectorAll('.custom-file-input').forEach(function (el) {
                el.addEventListener('change', function () { updateCustomFileLabel(this); });
            });

            // Image preview
            const imageInput = document.getElementById('image');
            const imagePreview = document.getElementById('imagePreview');

            if (imageInput) {
                imageInput.addEventListener('change', function () {
                    const file = this.files && this.files[0];
                    if (file) {
                        const url = URL.createObjectURL(file);
                        imagePreview.src = url;
                        imagePreview.classList.remove('d-none');
                    } else {
                        imagePreview.src = '';
                        imagePreview.classList.add('d-none');
                    }
                });
            }

            // Slug generator (same behavior as create)
            const titleInput = document.getElementById('title');
            const slugInput = document.getElementById('slug');
            if (titleInput && slugInput) {
                function slugify(text) {
                    return text.toLowerCase()
                        .replace(/[^\w\s-]/g, '')
                        .trim()
                        .replace(/\s+/g, '-');
                }
                titleInput.addEventListener('keyup', function () { slugInput.value = slugify(this.value); });
                titleInput.addEventListener('blur', function () { slugInput.value = slugify(this.value); });
            }
        });
    </script>
@stop