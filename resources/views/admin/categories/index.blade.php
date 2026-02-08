@extends('adminlte::page')

@section('title', 'Categories')

@section('content_header')
    <h1>Gestión de Categorías</h1>
@stop

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Listado de Categorías</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#categoryModal" id="btn-create-category">
                            <i class="fas fa-plus"></i> Crear Categoría
                        </button>
                    </div>
                    
                   
                  

                <div class="card-body">
                    <div id="categories-feedback" class="mb-2"></div>
                    <div class="table-responsive">
                        <table class="table table-sm table-hover" id="categoriesTable">
                            <thead class="thead-light">
                                <tr>
                                    <th class="text-center" style="width: 50px;"></th>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th class="text-center">Imagen</th>
                                    <th class="text-center">Menú</th>
                                    <th class="text-center">Activo</th>
                                    <th class="text-center">Destacado</th>
                                    <th class="text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="sortable-categories" style="counter-reset: rowNumber 0;">                                @forelse($categories as $category)
                                    @include('admin.categories.partials.category-row', ['category' => $category])
                                @empty
                                    <tr>
                                        <td colspan="8" class="text-center text-muted">No hay categorías registradas.</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex justify-content-center">
                         {{ $categories->links() }}
                    </div>
                    

            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="categoryModal" tabindex="-1" role="dialog" aria-labelledby="categoryModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="categoryModalLabel">Crear Categoría</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="category-form" role="form" enctype="multipart/form-data">
                <div class="modal-body">
                    <input type="hidden" id="category_id" name="id">
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Ingrese el nombre" required>
                    </div>
                    <div class="form-group">
                        <label for="slug">Slug</label>
                        <input type="text" class="form-control" id="slug" name="slug" placeholder="Slug amigable" required>
                    </div>
                    <div class="form-group">
                        <label for="image_path">Imagen</label>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="image_path" name="image_path" accept="image/*">
                                <label class="custom-file-label" for="image_path">Elegir imagen...</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-center">
                        <img id="image-preview" src="#" alt="Vista previa" style="display: none; max-height: 150px; border-radius: 5px;"/>
                    </div>
                    
                    <!-- Theme Colors (Only for Featured Categories) -->
                    <div id="theme-colors-section" style="display: none;">
                        <hr>
                        <h6 class="text-primary mb-3">
                            <i class="fas fa-palette"></i> Colores de Tema (Categoría Destacada)
                        </h6>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="theme_color">Color Principal</label>
                                    <div class="input-group">
                                        <input type="color" class="form-control form-control-color" id="theme_color" name="theme_color" value="#6f42c1" title="Elige el color principal" style="max-width: 60px;">
                                        <input type="text" class="form-control" id="theme_color_text" placeholder="#6f42c1" maxlength="7" pattern="^#[0-9A-Fa-f]{6}$">
                                    </div>
                                    <small class="form-text text-muted">Color para la temática de la categoría destacada</small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="theme_color_secondary">Color Secundario</label>
                                    <div class="input-group">
                                        <input type="color" class="form-control form-control-color" id="theme_color_secondary" name="theme_color_secondary" value="#ffc107" title="Elige el color secundario" style="max-width: 60px;">
                                        <input type="text" class="form-control" id="theme_color_secondary_text" placeholder="#ffc107" maxlength="7" pattern="^#[0-9A-Fa-f]{6}$">
                                    </div>
                                    <small class="form-text text-muted">Color secundario para gradientes</small>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Color Preview -->
                        <div class="form-group">
                            <label>Vista Previa del Tema</label>
                            <div id="color-preview" class="p-4 rounded text-white text-center" style="background: linear-gradient(135deg, #6f42c1 0%, #ffc107 100%);">
                                <h5 class="mb-0">Ejemplo de Categoría</h5>
                                <small>Así se verá la categoría destacada</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-primary" id="form-submit-btn">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>
@stop

@push('js')
<script>
document.addEventListener('DOMContentLoaded', function () {
    // --- UTILITIES ---
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '{{ csrf_token() }}';
    const slugify = text =>
        text.toString().toLowerCase().trim()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text

    function showToast(type, message) {
        // Uses AdminLTE's Toasts plugin, make sure it's enabled
        $(document).Toasts('create', {
            class: `bg-${type}`,
            title: type === 'success' ? 'Éxito' : 'Error',
            autohide: true,
            delay: 3000,
            body: message
        });
    }

    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // --- FORM ELEMENTS ---
    const form = document.getElementById('category-form');
    const modal = $('#categoryModal');
    const modalTitle = document.getElementById('categoryModalLabel');
    const categoryIdInput = document.getElementById('category_id');
    const nameInput = document.getElementById('name');
    const slugInput = document.getElementById('slug');
    const imageInput = document.getElementById('image_path');
    const imagePreview = document.getElementById('image-preview');
    const submitBtn = document.getElementById('form-submit-btn');
    const tableBody = document.querySelector('#categoriesTable tbody');

    // --- COLOR PICKER LOGIC ---
    const themeColorPicker = document.getElementById('theme_color');
    const themeColorText = document.getElementById('theme_color_text');
    const themeColorSecondaryPicker = document.getElementById('theme_color_secondary');
    const themeColorSecondaryText = document.getElementById('theme_color_secondary_text');
    const colorPreview = document.getElementById('color-preview');
    const themeColorsSection = document.getElementById('theme-colors-section');

    // Toggle visibility of theme colors
    function toggleThemeColors(isFeatured) {
        if (isFeatured) {
            themeColorsSection.style.display = 'block';
        } else {
            themeColorsSection.style.display = 'none';
        }
    }

    // Sync color picker with text input
    themeColorPicker.addEventListener('input', function() {
        themeColorText.value = this.value.toUpperCase();
        updateColorPreview();
    });

    themeColorText.addEventListener('input', function() {
        const value = this.value.trim();
        if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
            themeColorPicker.value = value;
            updateColorPreview();
        }
    });

    themeColorSecondaryPicker.addEventListener('input', function() {
        themeColorSecondaryText.value = this.value.toUpperCase();
        updateColorPreview();
    });

    themeColorSecondaryText.addEventListener('input', function() {
        const value = this.value.trim();
        if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
            themeColorSecondaryPicker.value = value;
            updateColorPreview();
        }
    });

    // Update color preview
    function updateColorPreview() {
        const color1 = themeColorPicker.value || '#6f42c1';
        const color2 = themeColorSecondaryPicker.value || '#ffc107';
        colorPreview.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
    }

    // Initialize color preview
    updateColorPreview();

    // --- FORM LOGIC ---
    function resetForm() {
        form.reset();
        modalTitle.textContent = 'Crear Categoría';
        submitBtn.textContent = 'Guardar';
        categoryIdInput.value = '';
        imagePreview.style.display = 'none';
        imagePreview.src = '#';
        document.querySelector('.custom-file-label').textContent = 'Elegir imagen...';
        form.classList.remove('is-editing');
        
        // Hide colors by default and reset values
        toggleThemeColors(false);
        themeColorPicker.value = '#6f42c1';
        themeColorText.value = '#6f42c1';
        themeColorSecondaryPicker.value = '#ffc107';
        themeColorSecondaryText.value = '#ffc107';
        updateColorPreview();
    }

    // Reset form when modal is opened via button (Create)
    $('#btn-create-category').on('click', function() {
        resetForm();
    });

    function prepareEditForm(category) {
        resetForm();
        form.classList.add('is-editing');
        modalTitle.textContent = 'Editar Categoría';
        submitBtn.textContent = 'Actualizar';

        categoryIdInput.value = category.id;
        nameInput.value = category.name;
        slugInput.value = category.slug;

        if (category.image_url) {
            imagePreview.src = category.image_url;
            imagePreview.style.display = 'block';
        }
        
        // Show theme colors only if category is featured
        toggleThemeColors(category.is_featured == 1 || category.is_featured === true);
        
        if (category.theme_color) {
            themeColorPicker.value = category.theme_color;
            themeColorText.value = category.theme_color.toUpperCase();
        }
        if (category.theme_color_secondary) {
            themeColorSecondaryPicker.value = category.theme_color_secondary;
            themeColorSecondaryText.value = category.theme_color_secondary.toUpperCase();
        }
        updateColorPreview();
        
        modal.modal('show');
    }
    
    // Auto-slugify on name input using event delegation for robustness
    $(document).on('input', '#name', function() {
        $('#slug').val(slugify($(this).val()));
    });

    // Image preview
    imageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
            document.querySelector('.custom-file-label').textContent = file.name;
        }
    });

    // --- AJAX OPERATIONS ---
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const id = categoryIdInput.value;
        const url = id ? '{{ url("admin/categories") }}/' + id : '{{ route('admin.categories.store') }}';
        
        // For updates, we use POST but spoof the method with _method
        if (id) {
            formData.append('_method', 'PATCH');
        }

        fetch(url, {
            method: 'POST', // Always POST for FormData with file uploads
            headers: {
                'X-CSRF-TOKEN': token,
                'Accept': 'application/json',
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showToast('success', data.message);
                const newRowHtml = data.row_html;

                if (id) { // Update
                    const row = document.querySelector(`tr[data-id='${id}']`);
                    if(row) row.outerHTML = newRowHtml;
                } else { // Create
                    const emptyRow = tableBody.querySelector('td[colspan="8"]');
                    if(emptyRow) emptyRow.parentElement.remove();
                    tableBody.insertAdjacentHTML('afterbegin', newRowHtml);
                }
                modal.modal('hide');
                resetForm();
            } else {
                let errorMessage = data.message || 'Ocurrió un error.';
                if (data.errors) {
                    errorMessage = Object.values(data.errors).map(e => e.join(' ')).join(' ');
                }
                showToast('danger', errorMessage);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showToast('danger', 'No se pudo conectar con el servidor.');
        })
        .finally(() => {
            submitBtn.disabled = false;
        });
    });

    // AJAX update for toggles and position (delegated)
    const debouncedUpdate = debounce((id, data, element) => {
        element.disabled = true;
        fetch('{{ url("admin/categories") }}/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token,
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                showToast('success', data.message || 'Actualizado.');
            } else {
                throw new Error(data.message || 'Falló la actualización.');
            }
        })
        .catch(err => {
            showToast('error', err.message);
            if (element.type === 'checkbox') element.checked = !element.checked; // Revert
        })
        .finally(() => element.disabled = false );
    }, 500);

    tableBody.addEventListener('change', e => {
        if (e.target.classList.contains('category-toggle')) {
            const toggle = e.target;
            const id = toggle.closest('tr').dataset.id;
            const field = toggle.dataset.field;
            debouncedUpdate(id, { [field]: toggle.checked }, toggle);
        } else if (e.target.classList.contains('menu-order-input')) {
            const input = e.target;
            const id = input.closest('tr').dataset.id;
            debouncedUpdate(id, { menu_order: input.value }, input);
        }
    });

    // Make table rows sortable (drag handle) and persist order via AJAX
    (function(){
        // Helper to load external scripts dynamically
        function loadScript(url, integrity, crossorigin) {
            return new Promise((resolve, reject) => {
                const existing = document.querySelector(`script[src="${url}"]`);
                if (existing) return resolve(existing);
                const s = document.createElement('script');
                s.src = url;
                if (integrity) s.integrity = integrity;
                if (crossorigin) s.crossOrigin = crossorigin;
                s.onload = () => resolve(s);
                s.onerror = (e) => reject(e);
                document.head.appendChild(s);
            });
        }

        // Ensure jQuery exists; if missing, try to load it from CDN
        let _jqLoading = false;
        async function ensureJQuery() {
            if (typeof window.jQuery !== 'undefined') return true;
            if (_jqLoading) return false;
            _jqLoading = true;
            try {
                await loadScript('https://code.jquery.com/jquery-3.6.0.min.js', 'sha256-/xUj+3OJ+Q5w5Qv3C4wT9ZqLLc5bM6f7e3m6E4HY0Y=', 'anonymous');
                console.log('jQuery cargado desde CDN.');
                showToast('success', 'jQuery cargado desde CDN para habilitar funcionalidades de administración.');
                return true;
            } catch (err) {
                console.warn('No se pudo cargar jQuery desde CDN:', err);
                showToast('danger', 'No se pudo cargar jQuery. Revisa las dependencias de admin.');
                return false;
            }
        }

        // Try to load jQuery UI from CDN if Sortable isn't available
        let _jqUiLoading = false;
        async function ensureJQueryUI() {
            if (typeof window.jQuery === 'undefined') return false;
            if (window.jQuery && window.jQuery.fn && window.jQuery.fn.sortable) return true;
            if (_jqUiLoading) return false;
            _jqUiLoading = true;
            try {
                await loadScript('https://code.jquery.com/ui/1.13.2/jquery-ui.min.js', 'sha256-lYX8FQkNcm3wse6m2k4jX2SLd6Hn0i2x8mYp0iPqY60=', 'anonymous');
                console.log('jQuery UI cargado desde CDN.');
                showToast('success', 'jQuery UI cargado desde CDN.');
                return true;
            } catch (err) {
                console.warn('No se pudo cargar jQuery UI desde CDN:', err);
                showToast('danger', 'No se pudo cargar jQuery UI. La funcionalidad de ordenar estará limitada.');
                return false;
            }
        }

        function initSortable() {
            if (typeof $ === 'undefined' || !$.fn || !$.fn.sortable) {
                console.warn('jQuery o jQuery UI Sortable aún no disponibles. Retry pending...');
                return false;
            }

            const $container = $('#sortable-categories');
            if (!$container.length) return true;

            // If already initialized, destroy and re-init to attach fresh handlers
            if ($container.data('ui-sortable')) {
                try { $container.sortable('destroy'); } catch (e) { /* ignore */ }
            }

            $container.sortable({
                handle: '.drag-handle',
                placeholder: 'sort-highlight',
                axis: 'y',
                forcePlaceholderSize: true,
                start: function(e, ui) {
                    ui.item.addClass('sorting');
                    console.log('sortable:start', ui.item.data('id'));
                },
                stop: function(e, ui) {
                    ui.item.removeClass('sorting');
                    console.log('sortable:stop', ui.item.data('id'));
                },
                update: function(event, ui) {
                    // Collect ordered IDs
                    const order = $('#sortable-categories tr').map(function() { return $(this).data('id'); }).get();

                    // Optimistically update displayed indices
                    $('#sortable-categories tr').each(function(index) {
                        $(this).find('.index-col').text(index + 1);
                    });

                    // Send new order to server
                    fetch('{{ route('admin.categories.reorder') }}', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': token,
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({ order })
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            showToast('success', data.message || 'Orden actualizado.');
                        } else {
                            throw new Error(data.message || 'Error al actualizar el orden.');
                        }
                    })
                    .catch(err => {
                        showToast('danger', err.message || 'No se pudo guardar el orden.');
                        console.error('Reorder error:', err);
                        // Optionally reload to restore server state
                        // location.reload();
                    });
                }
            }).disableSelection();

            console.log('Sortable initialized on #sortable-categories');
            return true;
        }

        // Retry initialization in case jQuery UI is loaded after this script
        let attempts = 0;
        async function tryInit() {
            attempts++;
            // Try to ensure jQuery first, then jQuery UI
            const jqOk = await ensureJQuery();
            const jqUiOk = jqOk ? await ensureJQueryUI() : false;

            const ok = initSortable();
            if (!ok && attempts < 10) {
                console.log('Retrying sortable init, attempt', attempts);
                setTimeout(tryInit, 400);
            } else if (!ok) {
                console.warn('No se pudo inicializar sortable después de varios intentos.');
                showToast('warning', 'jQuery UI no disponible. Activando fallback nativo de arrastrar y ordenar (escritorio).');
                // Initialize native fallback for desktop
                initNativeSortableFallback();
            }
        }
        tryInit();

        // --- Native HTML5 Drag-and-Drop Fallback (desktop) ---
        function initNativeSortableFallback() {
            const tbody = document.getElementById('sortable-categories');
            if (!tbody || tbody._nativeSortableInit) return;
            tbody._nativeSortableInit = true;
            let dragged = null;

            // Make rows draggable and attach handlers
            function attachDraggable(row) {
                row.setAttribute('draggable', 'true');
                row.addEventListener('dragstart', (e) => {
                    if (!e.target.querySelector('.drag-handle:hover') && !e.target.matches(':hover')) {
                        // allow dragging only when user grabbed the handle; but HTML5 doesn't give handle directly
                    }
                    dragged = row;
                    row.classList.add('dragging');
                    try { e.dataTransfer.setData('text/plain', row.dataset.id); } catch (_) {}
                    e.dataTransfer.effectAllowed = 'move';
                });

                row.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    const target = e.currentTarget;
                    if (target && target !== dragged) {
                        target.classList.add('drag-over');
                    }
                    return false;
                });

                row.addEventListener('dragleave', (e) => {
                    e.currentTarget.classList.remove('drag-over');
                });

                row.addEventListener('drop', (e) => {
                    e.preventDefault();
                    const target = e.currentTarget;
                    if (!dragged || dragged === target) return;

                    // Insert before or after depending on mouse position
                    const rect = target.getBoundingClientRect();
                    const halfway = rect.top + rect.height / 2;
                    if (e.clientY < halfway) {
                        tbody.insertBefore(dragged, target);
                    } else {
                        tbody.insertBefore(dragged, target.nextSibling);
                    }

                    cleanupVisuals();
                    sendNativeOrder();
                });

                row.addEventListener('dragend', (e) => {
                    if (dragged) dragged.classList.remove('dragging');
                    cleanupVisuals();
                    dragged = null;
                });
            }

            function cleanupVisuals() {
                tbody.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
                tbody.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));
            }

            function sendNativeOrder() {
                const order = Array.from(tbody.querySelectorAll('tr')).map(tr => parseInt(tr.dataset.id));
                // Update visible indices
                tbody.querySelectorAll('tr').forEach((tr, i) => tr.querySelector('.index-col').textContent = i + 1);

                fetch('{{ route('admin.categories.reorder') }}', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': token,
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ order })
                })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        showToast('success', data.message || 'Orden actualizado (fallback).');
                    } else {
                        throw new Error(data.message || 'Error al actualizar el orden.');
                    }
                })
                .catch(err => {
                    showToast('danger', err.message || 'No se pudo guardar el orden (fallback).');
                    console.error('Fallback reorder error:', err);
                });
            }

            // Attach to existing rows and observe for new rows
            tbody.querySelectorAll('tr').forEach(row => attachDraggable(row));

            const observer = new MutationObserver(muts => {
                muts.forEach(m => {
                    m.addedNodes && m.addedNodes.forEach(n => {
                        if (n.nodeType === 1 && n.tagName === 'TR') attachDraggable(n);
                    });
                });
            });
            observer.observe(tbody, { childList: true });

            // Touch support (improved): long-press on the handle to start dragging
            let touchDrag = null;
            let touchStartX = 0;
            let touchStartY = 0;
            let touchRow = null;
            let longPressTimeout;
            const LONG_PRESS_DELAY = 450; // ms
            const MOVE_CANCEL_THRESHOLD = 10; // px

            function onTouchStart(e) {
                // Only start long-press when touching the drag handle
                if (!e.target.closest('.drag-handle')) return;
                const t = e.touches[0];
                touchStartX = t.clientX;
                touchStartY = t.clientY;
                // row element
                touchRow = e.target.closest('tr');

                // Set a timeout to enter long-press mode
                longPressTimeout = setTimeout(() => {
                    if (!touchRow) return;
                    // visual feedback for long-press ready
                    touchRow.classList.add('long-press-ready');

                    // small delay to transition into dragging state for clarity
                    setTimeout(() => {
                        // If user already started dragging or cancelled, skip
                        if (!touchRow || !touchRow.classList.contains('long-press-ready')) return;
                        touchDrag = touchRow;
                        touchRow.classList.remove('long-press-ready');
                        touchRow.classList.add('dragging');
                        // short vibration feedback if supported
                        if (navigator.vibrate) navigator.vibrate(10);
                        showToast('info', 'Modo táctil: arrastra la fila hacia arriba/abajo y suéltala para ordenar.');
                    }, 60);
                }, LONG_PRESS_DELAY);
            }

            function onTouchMove(e) {
                const t = e.touches[0];

                // If long-press hasn't activated yet, cancel if user moves finger too much (likely a scroll)
                if (!touchDrag) {
                    const dx = Math.abs(t.clientX - touchStartX);
                    const dy = Math.abs(t.clientY - touchStartY);
                    if (dx > MOVE_CANCEL_THRESHOLD || dy > MOVE_CANCEL_THRESHOLD) {
                        clearTimeout(longPressTimeout);
                        if (touchRow) touchRow.classList.remove('long-press-ready');
                        touchRow = null;
                    }
                    return;
                }

                // When dragging, prevent page scroll and perform reorder
                e.preventDefault();
                const el = document.elementFromPoint(t.clientX, t.clientY);
                const row = el ? el.closest('#sortable-categories tr') : null;
                if (row && row !== touchDrag) {
                    const rect = row.getBoundingClientRect();
                    const halfway = rect.top + rect.height / 2;
                    if (t.clientY < halfway) tbody.insertBefore(touchDrag, row);
                    else tbody.insertBefore(touchDrag, row.nextSibling);
                }
            }

            function onTouchEnd(e) {
                clearTimeout(longPressTimeout);
                if (touchRow) touchRow.classList.remove('long-press-ready');
                if (!touchDrag) return;
                touchDrag.classList.remove('dragging');
                sendNativeOrder();
                touchDrag = null;
                touchRow = null;
            }

            function onTouchCancel(e) {
                clearTimeout(longPressTimeout);
                if (touchRow) touchRow.classList.remove('long-press-ready');
                if (touchDrag) touchDrag.classList.remove('dragging');
                touchDrag = null;
                touchRow = null;
            }

            // Attach touch handlers to the drag-handle (preferred) and row as fallback
            tbody.querySelectorAll('tr').forEach(row => {
                const handle = row.querySelector('.drag-handle');
                const startTarget = handle || row;
                startTarget.addEventListener('touchstart', onTouchStart, { passive: true });
                row.addEventListener('touchmove', onTouchMove, { passive: false });
                row.addEventListener('touchend', onTouchEnd, { passive: true });
                row.addEventListener('touchcancel', onTouchCancel, { passive: true });
            });

            showToast('success', 'Fallback nativo de arrastrar/ordenar activado (escritorio y soporte táctil básico).');
        }

        // On touch devices, try to load jQuery UI Touch Punch for touch support
        if ('ontouchstart' in window) {
            // Only load once
            if (!window._jqui_touch_punch_loaded) {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js';
                script.crossOrigin = 'anonymous';
                script.onload = () => {
                    window._jqui_touch_punch_loaded = true;
                    console.log('jQuery UI Touch Punch cargado para soporte táctil.');
                    // Re-init sortable to bind touch support
                    tryInit();
                    showToast('success', 'Soporte táctil habilitado para arrastrar.');
                };
                script.onerror = () => {
                    console.warn('No se pudo cargar jquery.ui.touch-punch desde CDN.');
                };
                document.head.appendChild(script);
            }
        }
    })();

    // Event delegation for Edit and Delete
    tableBody.addEventListener('click', e => {
        if (e.target.classList.contains('edit-btn')) {
            e.preventDefault();
            const category = JSON.parse(e.target.dataset.category);
            prepareEditForm(category);
        }
        
        if (e.target.closest('.delete-category-form')) {
            e.preventDefault();
            if (confirm('¿Está seguro de que desea eliminar esta categoría? Esta acción no se puede deshacer.')) {
                 const form = e.target.closest('.delete-category-form');
                 const id = form.closest('tr').dataset.id;
                 
                 fetch(form.action, {
                    method: 'DELETE',
                    headers: { 'X-CSRF-TOKEN': token, 'Accept': 'application/json' }
                 })
                 .then(res => res.json())
                 .then(data => {
                    if (data.success) {
                        showToast('success', 'Categoría eliminada.');
                        form.closest('tr').remove();
                    } else {
                        throw new Error('No se pudo eliminar.');
                    }
                 })
                 .catch(err => showToast('error', err.message));
            }
        }
    });
});
</script>
@endpush

@section('css')
<style>
    .table-responsive {
        min-height: 400px;
    }
    .custom-file-label::after {
        content: "Buscar";
    }
    /* Auto-numbering CSS */
    #categoriesTable tbody tr {
        counter-increment: rowNumber;
    }
    #categoriesTable tbody tr td.index-col::before {
        content: counter(rowNumber);
    }

    /* Drag handle improvements: larger hit area and touch friendliness */
    .drag-handle { cursor: move; -webkit-user-select: none; -ms-user-select: none; user-select: none; touch-action: none; text-align: center; width: 44px; }
    .drag-handle i { font-size: 14px; color: #6c757d; }

    /* Long-press feedback for touch devices */
    tr.long-press-ready { outline: 2px dashed rgba(0,123,255,0.18); background: rgba(0,123,255,0.03); }
    tr.dragging { box-shadow: 0 6px 14px rgba(0,0,0,0.12); transform: translateZ(0); }

    .sorting { opacity: 0.96; background: rgba(0,0,0,0.02); }

</style>
@endsection
