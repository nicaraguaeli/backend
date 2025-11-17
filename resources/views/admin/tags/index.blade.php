@extends('adminlte::page')

@section('title', 'Tags')

@section('content_header')
    <h1>Tags</h1>
@stop

@section('content')
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h3 class="card-title">Listado</h3>

            <!-- Inline create tag form -->
            <div class="d-flex align-items-center">
                <div class="input-group">
                    <input id="newTagName" type="text" class="form-control" placeholder="Nuevo tag">
                    <div class="input-group-append">
                        <button id="createTagBtn" class="btn btn-primary">Crear</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-body">
            <div id="tagsFeedback" class="mb-2"></div>

            @if(isset($tags) && $tags->count())
                <div class="table-responsive">
                    <table class="table table-sm table-hover" id="tagsTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th class="text-center">Noticias</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($tags as $tag)
                                <tr data-id="{{ $tag->id }}" data-name="{{ $tag->name }}" data-news-count="{{ $tag->news_count ?? 0 }}">
                                    <td class="align-middle">{{ $tag->id }}</td>
                                    <td class="align-middle tag-name">{{ $tag->name }}</td>
                                    <td class="align-middle text-center news-count">{{ $tag->news_count ?? 0 }}</td>
                                    <td class="align-middle">
                                        <button type="button" class="btn btn-sm btn-outline-secondary edit-tag-btn" data-id="{{ $tag->id }}" data-name="{{ $tag->name }}">Editar</button>

                                        <form action="{{ route('admin.tags.destroy', $tag) }}" method="POST" class="d-inline delete-tag-form" data-id="{{ $tag->id }}">
                                            @csrf
                                            @method('DELETE')
                                            <button type="button" class="btn btn-sm btn-outline-danger delete-tag-btn" data-id="{{ $tag->id }}">Borrar</button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                <div class="mt-2">
                    {{ $tags->links() }}
                </div>
            @else
                <p class="text-muted">No hay tags.</p>
            @endif
        </div>
    </div>

    <!-- Edit modal -->
    <div class="modal fade" id="tagEditModal" tabindex="-1" role="dialog" aria-labelledby="tagEditModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <form id="editTagForm" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="tagEditModalLabel">Editar tag</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    @csrf
                    @method('PATCH')
                    <input type="hidden" id="editTagId" name="id">
                    <div class="form-group">
                        <label for="editTagName">Nombre</label>
                        <input id="editTagName" name="name" type="text" class="form-control" required>
                        <div class="invalid-feedback" id="editTagError"></div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button id="saveTagBtn" type="submit" class="btn btn-primary">Guardar</button>
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
            const fb = document.getElementById('tagsFeedback');
            fb.innerHTML = `<div class="alert alert-${type==="success"?"success":"danger"}">${message}</div>`;
            setTimeout(()=> fb.innerHTML='',4000);
        }
    }

    // CREATE tag (AJAX)
    document.getElementById('createTagBtn').addEventListener('click', function () {
        const nameInput = document.getElementById('newTagName');
        const name = nameInput.value.trim();
        if (!name) { showToast('error','Ingrese un nombre.'); return; }

        this.disabled = true;
        fetch('{{ route("admin.tags.store") }}', {
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
            showToast('success', 'Tag creado.');
            const tbody = document.querySelector('#tagsTable tbody');
            if (tbody) {
                const tag = data.data || data;
                const newsCount = tag.news_count ?? 0;
                const tr = document.createElement('tr');
                tr.setAttribute('data-id', tag.id);
                tr.setAttribute('data-name', tag.name);
                tr.setAttribute('data-news-count', newsCount);
                tr.innerHTML = `<td class="align-middle">${tag.id}</td>
                                <td class="align-middle tag-name">${tag.name}</td>
                                <td class="align-middle text-center news-count">${newsCount}</td>
                                <td class="align-middle">
                                    <button type="button" class="btn btn-sm btn-outline-secondary edit-tag-btn" data-id="${tag.id}" data-name="${tag.name}">Editar</button>
                                    <form action="/admin/tags/${tag.id}" method="POST" class="d-inline delete-tag-form" data-id="${tag.id}">
                                        <input type="hidden" name="_token" value="${token}">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <button type="button" class="btn btn-sm btn-outline-danger delete-tag-btn" data-id="${tag.id}">Borrar</button>
                                    </form>
                                </td>`;
                if (tbody.firstChild) tbody.insertBefore(tr, tbody.firstChild);
                else tbody.appendChild(tr);
            } else {
                location.reload();
            }
            nameInput.value = '';
        })
        .catch(err => {
            console.error(err);
            showToast('error', err && err.errors ? Object.values(err.errors).flat()[0] : (err.message || 'Error al crear tag.'));
        });
    });

    // OPEN edit modal (delegated)
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.edit-tag-btn');
        if (!btn) return;
        const id = btn.dataset.id;
        const name = btn.dataset.name;
        document.getElementById('editTagId').value = id;
        document.getElementById('editTagName').value = name;
        document.getElementById('editTagError').textContent = '';
        $('#tagEditModal').modal('show');
    });

    // SUBMIT edit (AJAX PATCH)
    document.getElementById('editTagForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const id = document.getElementById('editTagId').value;
        const name = document.getElementById('editTagName').value.trim();
        if (!name) {
            document.getElementById('editTagError').textContent = 'Ingrese un nombre.';
            document.getElementById('editTagName').classList.add('is-invalid');
            return;
        }
        const btn = document.getElementById('saveTagBtn');
        btn.disabled = true;

        fetch('/admin/tags/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token,
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name })
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
            showToast('success','Tag actualizado.');
            const tr = document.querySelector('#tagsTable tbody tr[data-id="'+id+'"]');
            const updated = data.data || data;
            const newName = updated.name ?? name;
            const newCount = updated.news_count ?? (tr ? parseInt(tr.dataset.newsCount || tr.getAttribute('data-news-count') || 0) : 0);

            if (tr) {
                tr.querySelector('.tag-name').textContent = newName;
                tr.dataset.name = newName;
                tr.dataset.newsCount = newCount;
                const ncEl = tr.querySelector('.news-count');
                if (ncEl) ncEl.textContent = newCount;
                tr.querySelectorAll('.edit-tag-btn, .delete-tag-btn').forEach(b => {
                    if (b.dataset) b.dataset.name = newName;
                });
            } else {
                location.reload();
            }
            $('#tagEditModal').modal('hide');
        })
        .catch(err => {
            console.error(err);
            document.getElementById('editTagError').textContent = err && err.errors ? Object.values(err.errors).flat()[0] : (err.message || 'Error al actualizar.');
            document.getElementById('editTagName').classList.add('is-invalid');
        });
    });

    // DELETE (confirmation + AJAX)
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.delete-tag-btn');
        if (!btn) return;
        const id = btn.dataset.id;
        if (!confirm('¿Confirmar borrar este tag?')) return;

        btn.disabled = true;
        fetch('/admin/tags/' + id, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': token,
                'Accept': 'application/json'
            }
        })
        .then(async res => {
            btn.disabled = false;
            const body = await res.json().catch(()=>null);
            if (!res.ok) throw body || new Error('Error al borrar');
            return body;
        })
        .then(data => {
            showToast('success','Tag borrado.');
            const tr = document.querySelector('#tagsTable tbody tr[data-id="'+id+'"]');
            if (tr) tr.remove();
            if (!document.querySelectorAll('#tagsTable tbody tr').length) location.reload();
        })
        .catch(err => {
            console.error(err);
            showToast('error', err && err.message ? err.message : 'Error al borrar tag.');
        });
    });
});
</script>
@stop