$filePath = "resources\views\admin\categories\index.blade.php"
$content = Get-Content $filePath -Raw -Encoding UTF8

# Código a insertar
$colorFields = @"

                    
                    <!-- Theme Colors -->
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="theme_color">Color Principal</label>
                                <div class="input-group">
                                    <input type="color" class="form-control form-control-color" id="theme_color" name="theme_color" value="#6f42c1" title="Elige el color principal">
                                    <input type="text" class="form-control" id="theme_color_text" placeholder="#6f42c1" maxlength="7" pattern="^#[0-9A-Fa-f]{6}$">
                                </div>
                                <small class="form-text text-muted">Color para la temática de la categoría destacada</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="theme_color_secondary">Color Secundario</label>
                                <div class="input-group">
                                    <input type="color" class="form-control form-control-color" id="theme_color_secondary" name="theme_color_secondary" value="#ffc107" title="Elige el color secundario">
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
"@

# Buscar y reemplazar
$searchPattern = '                    <div class="form-group text-center">' + "`r`n" + '                        <img id="image-preview" src="#" alt="Vista previa" style="display: none; max-height: 150px; border-radius: 5px;"/>' + "`r`n" + '                    </div>'

if ($content -match [regex]::Escape($searchPattern)) {
    $replacement = $searchPattern + $colorFields
    $newContent = $content -replace [regex]::Escape($searchPattern), $replacement
    $newContent | Out-File $filePath -Encoding UTF8 -NoNewline
    Write-Host "✓ Campos de color agregados exitosamente"
} else {
    Write-Host "✗ No se encontró el patrón de búsqueda"
}
