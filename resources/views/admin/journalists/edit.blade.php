
@extends('adminlte::page')

@section('title', 'Editar periodista')

@section('content_header')
    <h1>Editar Periodista</h1>
@stop

@section('content')
<div class="card">
    <form action="{{ route('admin.journalists.update', $journalist) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PATCH')
        @include('admin.journalists._form')

        <div class="card-footer d-flex justify-content-end">
            <a href="{{ route('admin.journalists.index') }}" class="btn btn-secondary mr-2">Cancelar</a>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
    </form>
</div>
@stop

@section('js')
    @yield('jsForm')
@stop