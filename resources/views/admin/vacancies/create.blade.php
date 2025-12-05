@extends('adminlte::page')

@section('title', 'Crear Vacante')

@section('content_header')
    <h1>Crear Nueva Vacante</h1>
@stop

@section('css')
    <!-- Summernote CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css" rel="stylesheet">
@stop

@section('content')
    <div class="card">
        <div class="card-body">
            <form action="{{ route('admin.vacancies.store') }}" method="POST">
                @csrf
                
                @include('admin.vacancies.form')

                <div class="form-group mt-3 d-flex justify-content-end">
                    <a href="{{ route('admin.vacancies.index') }}" class="btn btn-secondary mr-2">Cancelar</a>
                    <button type="submit" class="btn btn-primary">Crear Vacante</button>
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

       
        });
    </script>
@stop
