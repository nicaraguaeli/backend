@extends('adminlte::page')

@section('title', 'News')

@section('content_header')
    <h1>Noticias</h1>
@stop

@section('css')
    <!-- Select2 CSS (CDN) -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/@ttskch/select2-bootstrap4-theme@1.5.2/dist/select2-bootstrap4.min.css" rel="stylesheet" />
    <style>
        /* General table / actions styling */
        .row-actions {
            visibility: hidden;
            padding-top: 2px;
        }
        tr:hover .row-actions { visibility: visible; }

        .btn-link {
            border: none;
            outline: none;
            background: none;
            cursor: pointer;
            color: #007bff;
            padding: 0;
            font-family: inherit;
            font-size: inherit;
        }
        .btn-link.text-danger { color: #dc3545; }
        .row-actions a, .row-actions .btn-link { font-size: 0.9em; }
        td > strong > a { color: #343a40; }
        td > strong > a:hover,
        .row-actions a:hover,
        .row-actions .btn-link:hover {
            color: #0056b3;
            text-decoration: underline;
        }
        .btn-link.text-danger:hover { color: #a71d2a; }

        /* Responsive and spacing */
        .table-responsive { margin-top: 1rem; }
        .bulk-actions { display:flex; gap:.5rem; align-items:center; }
        .badge { font-size:.85em; }

        /* Accessibility / focus */
        .focus-outline:focus { outline: 2px dashed #0b5ed7; outline-offset: 2px; }

        /* Quick-edit modal form sizing */
        .quick-edit-modal .modal-body { max-height: 65vh; overflow:auto; }

        /* Small spinner inside buttons */
        .btn .spinner-border-sm { vertical-align: text-bottom; margin-right: .4rem; }

        /* Improve custom-switch spacing */
        .custom-control { display:flex; align-items:center; gap:.5rem; }
    </style>
@stop

@section('content')
    <div class="card">
        <div class="d-flex gap-2">
                <a href="{{ route('admin.news.create') }}" class="btn btn-primary">Añadir Noticia</a>
            </div>
        

        <div class="card-body">
            <!-- Filters / Search -->
            <form method="GET" action="{{ route('admin.news.index') }}" class="form-inline mb-3" role="search" aria-label="Filters">
                <div class="input-group mr-2" style="min-width:260px;">
                    <input name="q" value="{{ request('q') }}" class="form-control" placeholder="Buscar título..." type="search" aria-label="Buscar título">
                </div>

                <select name="author" class="form-control mr-2" style="min-width:180px">
                    <option value="">Todos los autores</option>
                    @foreach($authors as $a)
                        <option value="{{ $a->id }}" {{ request('author') == $a->id ? 'selected' : '' }}>{{ $a->name }}</option>
                    @endforeach
                </select>

                <select name="category" class="form-control mr-2" style="min-width:180px">
                    <option value="">Todas las categorías</option>
                    @foreach($categories as $c)
                        <option value="{{ $c->id }}" {{ request('category') == $c->id ? 'selected' : '' }}>{{ $c->name }}</option>
                    @endforeach
                </select>

                <!-- moved buttons next to category for easier access -->
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary mr-2" type="submit">Buscar</button>
                    <a href="{{ route('admin.news.index') }}" class="btn btn-link">Limpiar</a>
                </div>
            </form>

            <!-- Bulk actions -->
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="bulk-actions">
                    <div class="form-check">
                        <input id="selectAll" class="form-check-input" type="checkbox" aria-label="Seleccionar todo">
                        <label for="selectAll" class="form-check-label small">Seleccionar todo</label>
                    </div>

                    <div class="btn-group">
                        <button id="bulkPublish" class="btn btn-sm btn-outline-success" title="Publicar seleccionados">Publicar</button>
                        <button id="bulkUnpublish" class="btn btn-sm btn-outline-secondary" title="Despublicar seleccionados">Despublicar</button>
                        <button id="bulkDelete" class="btn btn-sm btn-outline-danger" title="Mover a papelera">Borrar</button>
                    </div>
                    <small id="selectedCount" class="text-muted ml-2">0 seleccionados</small>
                </div>

                <div>
                    <span class="text-muted small">Total: {{ $news->count() }}</span>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-hover table-sm" role="table" aria-label="Lista de noticias">
                    <thead>
                        <tr>
                            <th style="width: 40px; padding-left: 1.25rem;"><!-- checkbox col -->
                                &nbsp;
                            </th>
                            <th style="width: 10px; padding-left: 1.25rem;">#</th>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th>Categoria</th>
                            <th>Visto</th>
                            <th>Destacar</th>
                            <th>Publicar</th>
                            <th>Creado el</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($news as $new)
                            <tr id="news-{{ $new->id }}">
                                <td style="padding-left: 1.25rem;">
                                    <input type="checkbox" class="row-checkbox" value="{{ $new->id }}" aria-label="Seleccionar noticia {{ $new->id }}">
                                </td>
                                <td style="padding-left: 1.25rem;">{{$loop->iteration + ($news->firstItem() - 1) }}</td>
                                <td>
                                    <strong><a href="{{ route('admin.news.edit', $new) }}">{{ $new->title }}</a></strong>
                                    <div class="row-actions">
                                        <a href="{{ route('admin.news.edit', $new) }}">Editar</a> |
                                        <a href="#" class="quick-edit-btn" data-id="{{ $new->id }}" data-toggle="tooltip" title="Edicion rápida">Edicion Rapida</a> |
                                        <form action="{{ route('admin.news.destroy', $new) }}" method="POST" style="display: inline;" class="delete-form" data-id="{{ $new->id }}">
                                            @csrf
                                            @method('DELETE')
                                            <button type="button" class="btn-link text-danger trash-btn" data-id="{{ $new->id }}">Eliminar</button>
                                        </form> |
                                        <a href="#" class="view-btn">Ver</a>
                                    </div>
                                </td>
                                <td>
                                    @if(is_iterable($new->author))
                                        @foreach ($new->author as $author)
                                            {{ $author->name }}{{ !$loop->last ? ', ' : '' }}
                                        @endforeach
                                    @else
                                        {{ optional($new->author)->name ?? 'N/A' }}
                                    @endif
                                </td>
                                <td>
                                    @foreach ($new->categories as $category)
                                        {{ $category->name }}
                                    @endforeach
                                </td>
                                <td><span class="badge badge-dark">  {{ $new->views ?? 0 }}</span></td>
                                <td class="text-center">
                                    <a href="#"
                                       class="highlight-btn"
                                       data-id="{{ $new->id }}"
                                       data-url="{{ route('admin.news.highlight', $new) }}">
                                        @if ($new->is_featured)
                                            <i id="highlight-icon-{{ $new->id }}" class="fas fa-star text-warning" aria-hidden="true"></i>
                                        @else
                                            <i id="highlight-icon-{{ $new->id }}" class="far fa-star" aria-hidden="true"></i>
                                        @endif
                                    </a>
                                </td>
                                <td>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox"
                                               class="custom-control-input status-switch"
                                               data-id="{{ $new->id }}"
                                               data-url="{{ route('admin.news.update.status', $new) }}"
                                               id="statusSwitch{{ $new->id }}"
                                               {{ $new->status ? 'checked' : '' }}>
                                        <label class="custom-control-label" for="statusSwitch{{ $new->id }}"></label>
                                    </div>
                                </td>
                                <td>{{ $new->published_at
        ? $new->published_at
            ->locale('es')                         {{-- cambia idioma --}}
            ->translatedFormat('d-M-Y')            {{-- muestra 25-nov-2025 --}}
            . ' (' . $new->published_at->locale('es')->diffForHumans() . ')' 
        : 'N/A' }}</td>
                            </tr>

                            <!-- hidden inline quick-edit form (source for modal) -->
                            <tr id="quick-edit-{{ $new->id }}" style="display: none;">
                                <td colspan="9">
                                    <form action="{{ route('admin.news.quick_update', $new->id) }}" method="POST" class="quick-edit-form" data-id="{{ $new->id }}">
                                        @csrf
                                        @method('PATCH')
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="title-{{ $new->id }}">Titulo</label>
                                                    <input type="text" name="title" id="title-{{ $new->id }}" class="form-control" value="{{ $new->title }}">
                                                </div>
                                                <div class="form-group">
                                                    <label for="slug-{{ $new->id }}">Slug</label>
                                                    <input type="text" name="slug" id="slug-{{ $new->id }}" class="form-control" value="{{ $new->slug }}">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="categories-{{ $new->id }}">Categorias</label>
                                                    <select name="categories[]" id="categories-{{ $new->id }}" class="form-control select2-quick-categories" multiple>
                                                        @foreach ($categories as $category)
                                                            <option value="{{ $category->id }}" {{ in_array($category->id, $new->categories->pluck('id')->toArray()) ? 'selected' : '' }}>
                                                                {{ $category->name }}
                                                            </option>
                                                        @endforeach
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label for="tags-{{ $new->id }}">Tags</label>
                                                    <select name="tags[]" id="tags-{{ $new->id }}" class="form-control select2-quick-tags" multiple>
                                                        @foreach ($tags ?? \App\Models\Tag::orderBy('name')->get() as $tag)
                                                            <option value="{{ $tag->id }}" {{ in_array($tag->id, $new->tags->pluck('id')->toArray()) ? 'selected' : '' }}>
                                                                {{ $tag->name }}
                                                            </option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex gap-2">
                                            <button type="submit" class="btn btn-primary quick-edit-submit">Actualizar</button>
                                            <button type="button" class="btn btn-secondary cancel-quick-edit" data-id="{{ $new->id }}">Cancelar</button>
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="d-flex justify-content-left mt-4">
    {{ $news->links() }}
</div>


            </div>
        </div>
    </div>

    <!-- Quick Edit Modal (re-uses hidden inline form) -->
    <div class="modal fade quick-edit-modal" id="quickEditModal" tabindex="-1" role="dialog" aria-labelledby="quickEditModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="quickEditModalLabel" class="modal-title">Edicion rapida</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- form content injected here -->
                </div>
            </div>
        </div>
    </div>

    <!-- Delete confirmation modal -->
    <div class="modal fade" id="confirmDeleteModal" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="confirmDeleteLabel">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-body" id="confirmDeleteLabel">¿Confirmar mover la(s) noticia(s) seleccionada(s) a la papelera?</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" id="confirmDeleteBtn" class="btn btn-danger">Confirmar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ARIA live region for non-js fallback messages -->
    <div id="ariaMessages" class="sr-only" aria-live="polite" aria-atomic="true"></div>



@stop

@section('js')
    <!-- Select2 JS (CDN) -->
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

    <script>
    $(function () {
        // helper to init Select2 safely inside a context (e.g. modal)
        function initQuickSelects(context) {
            context.find('.select2-quick-categories').each(function () {
                try { $(this).select2('destroy'); } catch(e) {}
                $(this).select2({
                    width: '100%',
                    dropdownParent: $('#quickEditModal'),
                    placeholder: 'Seleccionar categorías',
                    allowClear: true
                });
            });
            context.find('.select2-quick-tags').each(function () {
                try { $(this).select2('destroy'); } catch(e) {}
                $(this).select2({
                    width: '100%',
                    dropdownParent: $('#quickEditModal'),
                    placeholder: 'Etiquetas',
                    tags: true,
                    tokenSeparators: [','],
                    allowClear: true
                });
            });
        }

        // Init Select2 on any inline hidden quick-edit selects to keep consistency (optional)
        initQuickSelects($(document));

        // Quick edit click: clone form, inject into modal and init Select2 inside modal
        $(document).on('click', '.quick-edit-btn', function (e) {
            e.preventDefault();
            const id = $(this).data('id');
            const sourceRow = $('#quick-edit-' + id);
            const form = sourceRow.find('.quick-edit-form').first();
            if (!form.length) { toastr.error('Formulario de edición rápida no disponible.'); return; }

            // clone without Select2 DOM artifacts
            const cloned = form.clone(false, false);
            cloned.attr('id', 'quick-edit-modal-form-' + id);
            $('#quickEditModal .modal-body').empty().append(cloned);

            // init Select2 on cloned selects inside modal
            initQuickSelects($('#quickEditModal'));

            // show modal
            $('#quickEditModal').modal('show');
        });

        // destroy Select2 on modal close to avoid duplicate elements when reopened
        $('#quickEditModal').on('hidden.bs.modal', function () {
            $(this).find('.select2-hidden-accessible').each(function () {
                try { $(this).select2('destroy'); } catch(e) {}
            });
            $(this).find('.select2-container').remove(); // cleanup leftover containers
            $('#quickEditModal .modal-body').empty();
        });

        // Utility
        const aria = (msg) => { $('#ariaMessages').text(msg); };

        // ---- STATUS SWITCH (AJAX) ----
        document.querySelectorAll('.status-switch').forEach(switchEl => {
            switchEl.addEventListener('change', function () {
                const el = this;
                const newsId = el.dataset.id;
                const isChecked = el.checked;
                const url = el.dataset.url;

                el.disabled = true;
                fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                        'Accept': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify({ status: isChecked })
                })
                .then(res => {
                    if (!res.ok) throw res;
                    return res.json();
                })
                .then(data => {
                    if (data.success) {
                        toastr.success(`La noticia ahora está ${isChecked ? 'visible' : 'no visible'}.`);
                        aria(`Estado actualizado: ${isChecked ? 'visible' : 'no visible'}`);
                    } else {
                        el.checked = !isChecked;
                        toastr.error(data.message || 'Fallo al actualizar el estado.');
                    }
                })
                .catch(err => {
                    console.error(err);
                    el.checked = !isChecked;
                    toastr.error('Ocurrió un error al actualizar el estado.');
                })
                .finally(() => { el.disabled = false; });
            });
        });

        // ---- HIGHLIGHT (AJAX) ----
        document.querySelectorAll('.highlight-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const el = this;
                const newsId = el.dataset.id;
                const url = el.dataset.url;
                const icon = document.getElementById('highlight-icon-' + newsId);

                el.style.pointerEvents = 'none'; // Disable clicks

                fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                        'Accept': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify({}) // No body needed, just the action
                })
                .then(res => {
                    if (!res.ok) throw res;
                    return res.json();
                })
                .then(data => {
                    if (data.success) {
                        const isFeatured = data.is_featured;
                        toastr.success(`La noticia ahora está ${isFeatured ? 'destacada' : 'no destacada'}.`);
                        aria(`Noticia ${isFeatured ? 'destacada' : 'no destacada'}`);
                        if (isFeatured) {
                            icon.classList.remove('far', 'fa-star');
                            icon.classList.add('fas', 'fa-star', 'text-warning');
                        } else {
                            icon.classList.remove('fas', 'fa-star', 'text-warning');
                            icon.classList.add('far', 'fa-star');
                        }
                    } else {
                        toastr.error(data.message || 'Fallo al actualizar.');
                    }
                })
                .catch(err => {
                    console.error(err);
                    toastr.error('Ocurrió un error al actualizar.');
                })
                .finally(() => { el.style.pointerEvents = 'auto'; }); // Re-enable clicks
            });
        });

        // ---- SELECT ALL / BULK ACTIONS ----
        function updateSelectedCount() {
            const count = $('.row-checkbox:checked').length;
            $('#selectedCount').text(count + ' seleccionados');
            return count;
        }

        $('#selectAll').on('change', function () {
            $('.row-checkbox').prop('checked', this.checked);
            updateSelectedCount();
        });

        $(document).on('change', '.row-checkbox', function () {
            const all = $('.row-checkbox').length;
            const checked = $('.row-checkbox:checked').length;
            $('#selectAll').prop('checked', all > 0 && checked === all);
            updateSelectedCount();
        });

        function performBulkAction(action) {
            const ids = $('.row-checkbox:checked').map(function(){ return $(this).val(); }).get();
            if (!ids.length) { toastr.info('No hay elementos seleccionados.'); return; }

            // Show confirmation modal
            $('#confirmDeleteModal .modal-body').text(
                action === 'delete' ? `¿Confirmar borrar ${ids.length} noticia(s)?` :
                action === 'publish' ? `¿Confirmar publicar ${ids.length} noticia(s)?` :
                `¿Confirmar despublicar ${ids.length} noticia(s)?`
            );
            $('#confirmDeleteModal').modal('show');

            $('#confirmDeleteBtn').off('click').on('click', function () {
                $('#confirmDeleteModal').modal('hide');

                // For delete: submit a delete form per id (server-side resource route)
                if (action === 'delete') {
                    // submit sequentially to avoid race conditions
                    let i = 0;
                    const submitNext = () => {
                        if (i >= ids.length) {
                            location.reload(); // reload to reflect server state
                            return;
                        }
                        const id = ids[i++];
                        const form = $('<form>', { method: 'POST', action: '{{ url("admin/news") }}/' + id }).hide();
                        form.append('@csrf'.replace(/&lt;/g,'<').replace(/&gt;/g,'>'));
                        form.append('<input name="_method" type="hidden" value="DELETE">');
                        $('body').append(form);
                        form.submit();
                    };
                    submitNext();
                } else {
                    // Publish/unpublish: try AJAX to endpoint /admin/news/bulk-status (not created by default)
                    fetch('{{ route("admin.news.bulk-status") }}', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({ ids: ids, action: action })
                    })
                    .then(r => r.json())
                    .then(d => {
                        if (d.success) {
                            toastr.success(d.message || 'Operación realizada.');
                            location.reload();
                        } else {
                            toastr.error(d.message || 'Error en la operación.');
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        toastr.error('Error al ejecutar la acción en el servidor.');
                    });
                }
            });
        }

        $('#bulkDelete').on('click', () => performBulkAction('delete'));
        $('#bulkPublish').on('click', () => performBulkAction('publish'));
        $('#bulkUnpublish').on('click', () => performBulkAction('unpublish'));

        // ---- QUICK EDIT (modal) ----
        $(document).on('click', '.quick-edit-btn', function (e) {
            e.preventDefault();
            console.log('quick-edit clicked');
            const id = $(this).data('id');
            const sourceRow = $('#quick-edit-' + id);
            if (!sourceRow.length) {
                console.error('quick-edit source row not found for id', id);
                toastr.error('Formulario de edición rápida no disponible.');
                return;
            }
            const form = sourceRow.find('.quick-edit-form').first();
            if (!form.length) {
                console.error('quick-edit form not found inside source row', id);
                toastr.error('Formulario de edición rápida no disponible.');
                return;
            }

            // clone and inject
            const cloned = form.clone(true, true);
            cloned.attr('id', 'quick-edit-modal-form-' + id);

            // remove any lingering Select2 remnants before injecting
            $('#quickEditModal .modal-body').empty().append(cloned);

            // initialize Select2 on cloned selects (categories + tags) if exists
            // --- INICIO: Generación automática de Slug ---
            const titleInput = cloned.find('input[name="title"]');
            const slugInput = cloned.find('input[name="slug"]');

            function slugify(text) {
                const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
                const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
                const p = new RegExp(a.split('').join('|'), 'g')

                return text.toString().toLowerCase()
                    .replace(/\s+/g, '-') // Replace spaces with -
                    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
                    .replace(/&/g, '-and-') // Replace & with 'and'
                    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                    .replace(/\-\-+/g, '-') // Replace multiple - with single -
                    .replace(/^-+/, '') // Trim - from start of text
                    .replace(/-+$/, '') // Trim - from end of text
            }

            titleInput.on('input', function() {
                slugInput.val(slugify($(this).val()));
            });
            // --- FIN: Generación automática de Slug ---
            try {
                if (cloned.find('.select2-quick-categories').length) {
                    cloned.find('.select2-quick-categories').select2({
                        width: '100%',
                        dropdownParent: $('#quickEditModal'),
                        placeholder: 'Seleccionar categorías',
                        allowClear: true
                    });
                }
                if (cloned.find('.select2-quick-tags').length) {
                    cloned.find('.select2-quick-tags').select2({
                        width: '100%',
                        dropdownParent: $('#quickEditModal'),
                        placeholder: 'Etiquetas',
                        tags: true,
                        tokenSeparators: [','],
                        allowClear: true
                    });
                }
            } catch (err) {
                console.warn('Select2 init failed in quick edit (maybe Select2 missing):', err);
            }

            // show modal using Bootstrap's JS API
            try {
                $('#quickEditModal').modal('show');
            } catch (err) {
                console.error('Modal show failed:', err);
                // fallback: scroll to inline quick-edit row and show it
                sourceRow.show();
                $('html, body').animate({ scrollTop: sourceRow.offset().top - 80 }, 300);
            }
        });

        // Ensure dynamic selects in modal are destroyed on close to avoid duplicate DOM artifacts
        $('#quickEditModal').on('hidden.bs.modal', function () {
            $(this).find('.select2-hidden-accessible').each(function () {
                try { $(this).select2('destroy'); } catch(e) {}
            });
            $('#quickEditModal .modal-body').empty();
        });

        // Handle submit for forms injected into modal (reuse AJAX quick-edit logic)
        $(document).on('submit', '.quick-edit-form', function (e) {
            e.preventDefault();
            const form = $(this);
            const id = form.data('id');
            const url = form.attr('action');
            const submitBtn = form.find('.quick-edit-submit').first();
            const origText = submitBtn.html();

            const fd = new FormData(this);
            if (!fd.has('_method')) fd.append('_method','PATCH');

            submitBtn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Guardando...');

            fetch(url, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Accept': 'application/json'
                },
                body: fd
            })
            .then(async res => {
                const ct = res.headers.get('content-type') || '';
                if (ct.includes('application/json')) return res.json();
                throw new Error('non-json');
            })
            .then(data => {
                if (data && data.success) {
                    // update DOM: title and categories if provided
                    if (data.data && data.data.title) {
                        $('#news-' + id).find('td strong a').text(data.data.title);
                    }
                    if (data.data && data.data.categories_html) {
                        $('#news-' + id).find('td').eq(4).html(data.data.categories_html);
                    } else if (data.data && Array.isArray(data.data.categories)) {
                        const container = $('#news-' + id).find('td').eq(4);
                        container.empty();
                        data.data.categories.forEach(c => container.append('<span class="badge badge-primary mr-1">'+ c.name +'</span>'));
                    }
                    toastr.success('Actualizado correctamente.');
                    $('#quickEditModal').modal('hide');
                } else {
                    if (data && data.errors) {
                        form.find('.is-invalid').removeClass('is-invalid');
                        form.find('.invalid-feedback').remove();
                        Object.keys(data.errors).forEach(function (field) {
                            const input = form.find('[name="'+field+'"], [name="'+field+'[]"]');
                            input.addClass('is-invalid');
                            input.after('<div class="invalid-feedback">'+ (data.errors[field][0] || '') +'</div>');
                        });
                    } else {
                        toastr.error(data.message || 'Error al actualizar.');
                    }
                }
            })
            .catch(err => {
                console.error(err);
                if (err.message === 'non-json') location.reload();
                else toastr.error('Ocurrió un error. Intenta de nuevo.');
            })
            .finally(() => submitBtn.prop('disabled', false).html(origText));
        });

        // restore focus / cleanup modal on close
        $('#quickEditModal').on('hidden.bs.modal', function () {
            $('#quickEditModal .modal-body').empty();
        });

        // Cancel buttons inside moved forms
        $(document).on('click', '.cancel-quick-edit', function () {
            $('#quickEditModal').modal('hide');
        });

        // ---- DELETE single (trash-btn) ----
        let singleDeleteForm = null;
        $('.trash-btn').on('click', function () {
            const id = $(this).data('id');
            singleDeleteForm = $(this).closest('form.delete-form');
            $('#confirmDeleteModal .modal-body').text('¿Confirmar mover la noticia a la papelera?');
            $('#confirmDeleteModal').modal('show');
            $('#confirmDeleteBtn').off('click').on('click', function () {
                $('#confirmDeleteModal').modal('hide');
                if (singleDeleteForm && singleDeleteForm.length) singleDeleteForm.submit();
            });
        });

        // Tooltip init
        $('[data-toggle="tooltip"]').tooltip();

    }); // end ready
</script>
@stop