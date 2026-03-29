@extends('adminlte::page')

@section('title', 'Crear Empleo')

@section('content_header')
    <h1>Crear Nuevo Empleo</h1>
@stop

@section('css')
    <!-- Summernote CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css" rel="stylesheet">
@stop

@section('content')
    <div class="card">
        <div class="card-body">
            <form action="{{ route('admin.vacancies.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                
                @include('admin.vacancies.form')

                <div class="form-group mt-3 d-flex justify-content-end">
                    <a href="{{ route('admin.vacancies.index') }}" class="btn btn-secondary mr-2">Cancelar</a>
                    <button type="submit" class="btn btn-primary">Crear Empleo</button>
                </div>
            </form>
        </div>
    </div>
@stop

@section('js')
    <!-- Summernote JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.js"></script>
    <script>
        $(function () {
            // Initialize Summernote
            $('.textarea').summernote({
                height: 250,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'clear']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['view', ['fullscreen', 'codeview']]
                ]
            });

            // Preview de imagen al seleccionar archivo
            $('#image_path').on('change', function () {
                const file = this.files && this.files[0];
                const label = $(this).next('.custom-file-label');
                if (file) {
                    label.text(file.name);
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        $('#imagePreview').attr('src', e.target.result).removeClass('d-none');
                        $('#noImageText').addClass('d-none');
                    };
                    reader.readAsDataURL(file);
                } else {
                    label.text('Elegir imagen');
                    $('#imagePreview').attr('src', '').addClass('d-none');
                    $('#noImageText').removeClass('d-none');
                }
            });
        });
    </script>
@stop
