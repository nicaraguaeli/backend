@extends('adminlte::page')

@section('title', 'Editar Vacante')

@section('content_header')
    <h1>Editar Vacante</h1>
@stop

@section('css')
    <!-- Summernote CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css" rel="stylesheet">
@stop

@section('content')
    <div class="card">
        <div class="card-body">
            <form action="{{ route('admin.vacancies.update', $vacancy) }}" method="POST">
                @csrf
                @method('PUT')
                
                @include('admin.vacancies.form')

                <div class="form-group mt-3 d-flex justify-content-end">
                    <a href="{{ route('admin.vacancies.index') }}" class="btn btn-secondary mr-2">Cancelar</a>
                    <button type="submit" class="btn btn-primary">Actualizar Vacante</button>
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

            function loadCities(countryId, selectedCity) {
                if (countryId) {
                    $.ajax({
                        url: '{{ url('admin/countries') }}/' + countryId + '/cities',
                        type: 'GET',
                        dataType: 'json',
                        success: function(data) {
                            $('#city').empty().append('<option value="">Seleccione una ciudad</option>');
                            $.each(data, function(key, value) {
                                $('#city').append('<option value="' + value.id + '"' + (selectedCity == value.id ? ' selected' : '') + '>' + value.name + '</option>');
                            });
                        }
                    });
                } else {
                    $('#city').empty().append('<option value="">Seleccione un país primero</option>');
                }
            }

            var initialCountryId = $('#country_id').val();
            var oldCity = "{{ old('city', $vacancy->city_id ?? '') }}";
            loadCities(initialCountryId, oldCity);

            
        });
    </script>
@stop
