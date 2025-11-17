@extends('adminlte::page')

@section('title', 'Categories')

@section('content_header')
    <h1>Categorías</h1>
@stop

@section('content')
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h3 class="card-title">Listado</h3>

            <!-- Inline create category form -->
            <div class="d-flex align-items-center">
                <div class="input-group">
                    <input id="newCategoryName" type="text" class="form-control" placeholder="Nueva categoría">
                    <div class="input-group-append">
                        <button id="createCategoryBtn" class="btn btn-primary">Crear</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-body">
            <div id="categoriesFeedback" class="mb-2"></div>

            @if(isset($categories) && $categories->count())
                <div class="table-responsive">
                    <table class="table table-sm table-hover" id="categoriesTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th class="text-center">Noticias</th> {{-- nueva columna --}}
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($categories as $category)
                                <tr data-id="{{ $category->id }}" data-name="{{ $category->name }}" data-news-count="{{ $category->news_count }}">
                                    <td class="align-middle">{{ $category->id }}</td>
                                    <td class="align-middle category-name">{{ $category->name }}</td>
                                    <td class="align-middle text-center news-count">{{ $category->news_count }}</td> {{-- mostrar conteo --}}
                                    <td class="align-middle">
                                        <button type="button" class="btn btn-sm btn-outline-secondary edit-category-btn" data-id="{{ $category->id }}" data-name="{{ $category->name }}">Editar</button>

                                        <form action="{{ route('admin.categories.destroy', $category) }}" method="POST" class="d-inline delete-category-form" data-id="{{ $category->id }}">
                                            @csrf
                                            @method('DELETE')
                                            <button type="button" class="btn btn-sm btn-outline-danger delete-category-btn" data-id="{{ $category->id }}">Borrar</button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                {{ $categories->links() }}
            @else
                <p class="text-muted">No hay categorías.</p>
            @endif
        </div>
    </div>

    <!-- Edit modal -->
    <div class="modal fade" id="categoryEditModal" tabindex="-1" role="dialog" aria-labelledby="categoryEditModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <form id="editCategoryForm" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="categoryEditModalLabel">Editar categoría</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    @csrf
                    @method('PATCH')
                    <input type="hidden" id="editCategoryId" name="id">
                    <div class="form-group">
                        <label for="editCategoryName">Nombre</label>
                        <input id="editCategoryName" name="name" type="text" class="form-control" required>
                        <div class="invalid-feedback" id="editCategoryError"></div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button id="saveCategoryBtn" type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
@stop

@section('js')
<script>
document.addEventListener('DOMContentLoaded', function () {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    function showToast(type, message) {
        if (window.toastr) {
            if (type === 'success') toastr.success(message);
            else if (type === 'error') toastr.error(message);
            else toastr.info(message);
        } else {
            const fb = document.getElementById('categoriesFeedback');
            fb.innerHTML = `<div class="alert alert-${type==="success"?"success":"danger"}">${message}</div>`;
            setTimeout(()=> fb.innerHTML='',4000);
        }
    }

    // CREATE category (AJAX)
    document.getElementById('createCategoryBtn').addEventListener('click', function () {
        const nameInput = document.getElementById('newCategoryName');
        const name = nameInput.value.trim();
        if (!name) { showToast('error','Ingrese un nombre.'); return; }

        this.disabled = true;
        fetch('{{ route("admin.categories.store") }}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token,
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name })
        })
        .then(async res => {
            this.disabled = false;
            if (!res.ok) {
                const err = await res.json().catch(()=>null);
                throw err && err.message ? err : new Error('Error al crear');
            }
            return res.json();
        })
        .then(data => {
            showToast('success', 'Categoría creada.');
            // prepend new row to table (if exists)
            const tbody = document.querySelector('#categoriesTable tbody');
            if (tbody) {
                const cat = data.data || data;
                const tr = document.createElement('tr');
                tr.setAttribute('data-id', cat.id);
                tr.setAttribute('data-name', cat.name);
                tr.innerHTML = `<td class="align-middle">${cat.id}</td>
                                <td class="align-middle category-name">${cat.name}</td>
                                <td class="align-middle text-center news-count">${cat.news_count}</td> {{-- mostrar conteo --}}
                                <td class="align-middle">
                                    <button type="button" class="btn btn-sm btn-outline-secondary edit-category-btn" data-id="${cat.id}" data-name="${cat.name}">Editar</button>
                                    <form action="/admin/categories/${cat.id}" method="POST" class="d-inline delete-category-form" data-id="${cat.id}">
                                        <input type="hidden" name="_token" value="${token}">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <button type="button" class="btn btn-sm btn-outline-danger delete-category-btn" data-id="${cat.id}">Borrar</button>
                                    </form>
                                </td>`;
                if (tbody.firstChild) tbody.insertBefore(tr, tbody.firstChild);
                else tbody.appendChild(tr);
            } else {
                // if no table present, reload
                location.reload();
            }
            nameInput.value = '';
        })
        .catch(err => {
            console.error(err);
            showToast('error', err && err.errors ? Object.values(err.errors).flat()[0] : (err.message || 'Error al crear categoría.'));
        });
    });

    // OPEN edit modal (delegated)
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.edit-category-btn');
        if (!btn) return;
        const id = btn.dataset.id;
        const name = btn.dataset.name;
        document.getElementById('editCategoryId').value = id;
        document.getElementById('editCategoryName').value = name;
        document.getElementById('editCategoryError').textContent = '';
        $('#categoryEditModal').modal('show');
    });

    // SUBMIT edit (AJAX PATCH)
    document.getElementById('editCategoryForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const id = document.getElementById('editCategoryId').value;
        const name = document.getElementById('editCategoryName').value.trim();
        if (!name) {
            document.getElementById('editCategoryError').textContent = 'Ingrese un nombre.';
            document.getElementById('editCategoryName').classList.add('is-invalid');
            return;
        }
        const btn = document.getElementById('saveCategoryBtn');
        btn.disabled = true;

        fetch('/admin/categories/' + id, {
            method: 'POST', // method spoofing below
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token,
                'Accept': 'application/json'
            },
            body: JSON.stringify({ _method: 'PATCH', name })
        })
        .then(async res => {
            btn.disabled = false;
            if (!res.ok) {
                const err = await res.json().catch(()=>null);
                throw err && err.message ? err : new Error('Error al actualizar');
            }
            return res.json();
        })
        .then(data => {
            showToast('success','Categoría actualizada.');
            // update row in table
            const tr = document.querySelector('#categoriesTable tbody tr[data-id="'+id+'"]');
            if (tr) {
                tr.querySelector('.category-name').textContent = name;
                tr.dataset.name = name;
                tr.querySelectorAll('.edit-category-btn, .delete-category-btn').forEach(b => {
                    if (b.dataset) b.dataset.name = name;
                });
            } else {
                location.reload();
            }
            $('#categoryEditModal').modal('hide');
        })
        .catch(err => {
            console.error(err);
            document.getElementById('editCategoryError').textContent = err && err.errors ? Object.values(err.errors).flat()[0] : (err.message || 'Error al actualizar.');
            document.getElementById('editCategoryName').classList.add('is-invalid');
        });
    });

    // DELETE (confirmation + AJAX)
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.delete-category-btn');
        if (!btn) return;
        const id = btn.dataset.id;
        if (!confirm('¿Confirmar borrar esta categoría?')) return;

        btn.disabled = true;
        fetch('/admin/categories/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token,
                'Accept': 'application/json'
            },
            body: JSON.stringify({ _method: 'DELETE' })
        })
        .then(async res => {
            btn.disabled = false;
            if (!res.ok) {
                const err = await res.json().catch(()=>null);
                throw err && err.message ? err : new Error('Error al borrar');
            }
            return res.json();
        })
        .then(data => {
            showToast('success','Categoría borrada.');
            const tr = document.querySelector('#categoriesTable tbody tr[data-id="'+id+'"]');
            if (tr) tr.remove();
            // optional: if table empty reload to refresh pagination
            if (!document.querySelectorAll('#categoriesTable tbody tr').length) location.reload();
        })
        .catch(err => {
            console.error(err);
            showToast('error', err && err.message ? err.message : 'Error al borrar categoría.');
        });
    });
});
</script>
@stop