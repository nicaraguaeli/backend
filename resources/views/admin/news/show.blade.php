
@extends('adminlte::page')

@section('title', $news->title)

@section('content_header')
    <h1>{{ $news->title }}</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    @if ($news->image_path)
                        <img src="{{ asset('storage/' . $news->image_path) }}" class="img-fluid" alt="{{ $news->title }}">
                    @endif
                    <div class="mt-4">
                        {!! $news->content !!}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Detalles de la noticia</h3>
                </div>
                <div class="card-body">
                    <p><strong>Slug:</strong> {{ $news->slug }}</p>
                    <p><strong>Autor:</strong> {{ $news->author->name ?? 'N/A' }}</p>
                    <p><strong>Categorias:</strong>
                        @foreach ($news->categories as $category)
                            <span class="badge bg-primary">{{ $category->name }}</span>
                        @endforeach
                    </p>
                    <p><strong>Etiquetas:</strong>
                        @foreach ($news->tags as $tag)
                            <span class="badge bg-secondary">{{ $tag->name }}</span>
                        @endforeach
                    </p>
                    <p><strong>Publicado:</strong> {{ $news->published_at->format('d/m/Y H:i') }}</p>
                    <p><strong>Ciudad:</strong> {{ $news->city ?? 'N/A' }}</p>
                    <p><strong>Pais:</strong> {{ $news->country ?? 'N/A' }}</p>
                    <p><strong>Area:</strong> {{ $news->area ?? 'N/A' }}</p>
                    <p><strong>Destacado:</strong> {{ $news->is_featured ? 'Si' : 'No' }}</p>
                    <p><strong>Status:</strong> {{ $news->status ? 'Publicado' : 'No Publicado' }}</p>
                </div>
                <div class="card-footer">
                    <a href="{{ route('admin.news.edit', $news) }}" class="btn btn-primary">Editar</a>
                </div>
            </div>
        </div>
    </div>
@stop
