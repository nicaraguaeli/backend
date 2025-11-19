
@extends('adminlte::page')

@section('title', 'Crear periodista')

@section('content_header')
    <h1>Crear Periodista</h1>
@stop

@section('content')
<div class="card">
    <form action="{{ route('admin.journalists.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        @include('admin.journalists._form')

        <div class="card-footer d-flex justify-content-end">
            <a href="{{ route('admin.journalists.index') }}" class="btn btn-secondary mr-2">Cancelar</a>
            <button type="submit" class="btn btn-primary">Crear</button>
        </div>
    </form>
</div>
@stop

@section('js')
    @yield('jsForm')
@stop