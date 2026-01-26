<tr data-id="{{ $category->id }}">
    <td class="align-middle text-center drag-handle" style="cursor: move;">
        <i class="fas fa-arrows-alt text-muted"></i>
    </td>
    <td class="align-middle index-col font-weight-bold"></td>
    <td class="align-middle category-name">{{ $category->name }}</td>
    <td class="align-middle text-center">
        @if($category->image_path)
            <img src="{{ asset('storage/' . $category->image_path) }}" alt="{{ $category->name }}" style="width: 50px; height: auto; border-radius: 5px;">
        @else
            <span class="text-muted">Sin imagen</span>
        @endif
    </td>
    <td class="align-middle text-center">
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input category-toggle" id="showInMenuSwitch{{$category->id}}" data-field="show_in_menu" {{ $category->show_in_menu ? 'checked' : '' }}>
            <label class="custom-control-label" for="showInMenuSwitch{{$category->id}}"></label>
        </div>
    </td>
    <td class="align-middle text-center">
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input category-toggle" id="isActiveSwitch{{$category->id}}" data-field="is_active" {{ $category->is_active ? 'checked' : '' }}>
            <label class="custom-control-label" for="isActiveSwitch{{$category->id}}"></label>
        </div>
    </td>
    <td class="align-middle text-center">
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input category-toggle" id="isFeaturedSwitch{{$category->id}}" data-field="is_featured" {{ $category->is_featured ? 'checked' : '' }}>
            <label class="custom-control-label" for="isFeaturedSwitch{{$category->id}}"></label>
        </div>
    </td>
    <td class="align-middle text-center">
        <button class="btn btn-sm btn-outline-secondary edit-btn" data-category='{{ json_encode($category) }}'>Editar</button>
        <form action="{{ route('admin.categories.destroy', $category->id) }}" method="POST" class="d-inline delete-category-form">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-sm btn-outline-danger">Eliminar</button>
        </form>
    </td>
</tr>
