# Sistema de Tematización por Categoría

## 🎨 Objetivo

Implementar un sistema de **colores temáticos personalizados** para cada categoría destacada, permitiendo que cada tema tenga su propia identidad visual.

## ✨ Características Implementadas

### 1. **Base de Datos**
Se agregaron dos campos a la tabla `categories`:
- `theme_color`: Color primario (hex, ej: `#6f42c1`)
- `theme_color_secondary`: Color secundario para gradientes

### 2. **Colores por Defecto**

| Categoría | Color Primario | Color Secundario | Uso |
|-----------|---------------|------------------|-----|
| **Salud** | `#6f42c1` (Morado) | `#9b59b6` | A Tu Salud, Bienestar |
| **Deportes** | `#10b981` (Verde) | `#34d399` | Sports, Deportes |
| **Arte y Cultura** | `#f59e0b` (Naranja) | `#fbbf24` | Arte, Cultura |
| **Política** | `#dc2626` (Rojo) | `#ef4444` | Política, Nacionales |
| **Economía** | `#0891b2` (Cyan) | `#06b6d4` | Economía, Negocios |
| **Tecnología** | `#7c3aed` (Púrpura) | `#a78bfa` | Tech, Tecnología |
| **Entretenimiento** | `#ec4899` (Rosa) | `#f472b6` | Espectáculos |
| **Internacional** | `#2563eb` (Azul) | `#3b82f6` | Mundo, Internacional |
| **Default** | `#d4af37` (Dorado) | `#f59e0b` | Otras categorías |

### 3. **Sistema de Utilidades**

**Archivo**: `resources/js/utils/categoryTheme.ts`

#### Funciones Disponibles:

```typescript
// Obtiene los colores de una categoría
getCategoryThemeColors(category): { primary: string; secondary: string }

// Genera un gradiente CSS
getCategoryGradient(category, angle = 135): string

// Obtiene un color con opacidad
getCategoryLightColor(category, opacity = 0.1): string

// Genera variables CSS completas
getCategoryCSSVariables(category): Record<string, string>
```

#### Variables CSS Generadas:
- `--category-primary`: Color primario
- `--category-secondary`: Color secundario
- `--category-gradient`: Gradiente completo
- `--category-light`: Color con 10% opacidad
- `--category-medium`: Color con 30% opacidad

### 4. **Aplicación Automática**

Los colores se aplican automáticamente en:

#### **FeaturedCategoryView** (Página de Categoría)
- Badge "Categoría Destacada"
- Bordes al hover en cards
- Spinner de carga
- Iconos de estado vacío

#### **FeaturedArticleDetail** (Detalle de Artículo)
- Badge de categoría en hero
- Botones de acción (compartir, guardar)
- Botón "Ver toda la categoría"
- Cards relacionados al hover
- Spinner de carga

## 🔄 Flujo de Funcionamiento

### Prioridad de Colores:
1. **Base de Datos**: Si la categoría tiene `theme_color` definido, usa ese
2. **Por Slug**: Busca en colores predefinidos por slug (ej: "deportes")
3. **Por Nombre**: Busca coincidencias parciales en el nombre
4. **Default**: Usa dorado si no encuentra coincidencia

### Ejemplo Práctico:

```typescript
// Categoría "A Tu Salud"
const category = { 
  slug: 'a-tu-salud', 
  theme_color: '#6f42c1',
  theme_color_secondary: '#9b59b6'
};

// En el componente:
const cssVars = getCategoryCSSVariables(category);
// Resultado:
{
  '--category-primary': '#6f42c1',
  '--category-secondary': '#9b59b6',
  '--category-gradient': 'linear-gradient(135deg, #6f42c1 0%, #9b59b6 100%)',
  '--category-light': '#6f42c11a',
  '--category-medium': '#6f42c14d'
}
```

## 🎯 Uso en Componentes

### Aplicar Variables CSS:

```tsx
import { getCategoryCSSVariables } from '@/utils/categoryTheme';

export default function MyComponent({ category }) {
    const cssVars = getCategoryCSSVariables(category);
    
    return (
        <div style={cssVars as React.CSSProperties}>
            {/* Los estilos CSS pueden usar var(--category-primary) */}
        </div>
    );
}
```

### Usar en CSS:

```css
.my-badge {
    background: var(--category-gradient);
    box-shadow: 0 4px 15px var(--category-medium);
}

.my-button:hover {
    background: var(--category-primary);
    border-color: var(--category-secondary);
}
```

## 📝 Personalización

### Opción 1: Desde el Admin Panel
(Requiere agregar campos al formulario de categorías)

```php
// En el formulario de categorías
<input type="color" name="theme_color" value="{{ $category->theme_color }}" />
<input type="color" name="theme_color_secondary" value="{{ $category->theme_color_secondary }}" />
```

### Opción 2: Directamente en BD

```sql
UPDATE categories 
SET theme_color = '#6f42c1', 
    theme_color_secondary = '#9b59b6'
WHERE slug = 'a-tu-salud';
```

### Opción 3: Agregar a Colores por Defecto

Editar `resources/js/utils/categoryTheme.ts`:

```typescript
const DEFAULT_CATEGORY_COLORS = {
    'mi-categoria': { primary: '#ff0000', secondary: '#ff6666' },
    // ...
};
```

## 🚀 Ventajas del Sistema

1. **Identidad Visual**: Cada categoría tiene su propia paleta de colores
2. **Consistencia**: Los colores se aplican automáticamente en todos los componentes
3. **Flexibilidad**: Se pueden cambiar desde BD o código
4. **Fallback Inteligente**: Si no hay color definido, usa defaults lógicos
5. **Performance**: Variables CSS se calculan una vez y se reutilizan

## 📋 Checklist de Implementación

- [x] Migración de campos `theme_color` y `theme_color_secondary`
- [x] Actualización del modelo `Category`
- [x] Creación de utilidades en `categoryTheme.ts`
- [x] Actualización de tipos TypeScript
- [x] Aplicación en `FeaturedCategoryView`
- [x] Aplicación en `FeaturedArticleDetail`
- [x] Seeder con colores por defecto
- [x] Documentación completa

## 💡 Ejemplos Visuales

### Categoría "A Tu Salud" (Morado)
- Badge: Gradiente morado `#6f42c1` → `#9b59b6`
- Hover: Borde morado
- Botones: Fondo morado

### Categoría "Deportes" (Verde)
- Badge: Gradiente verde `#10b981` → `#34d399`
- Hover: Borde verde
- Botones: Fondo verde

### Categoría "Arte y Cultura" (Naranja)
- Badge: Gradiente naranja `#f59e0b` → `#fbbf24`
- Hover: Borde naranja
- Botones: Fondo naranja

---
*Sistema de tematización implementado - Febrero 2026*
