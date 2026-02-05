import { Category } from '@/types';

// Colores por defecto para categorías comunes
const DEFAULT_CATEGORY_COLORS: Record<string, { primary: string; secondary: string }> = {
    // Salud y Bienestar
    'a-tu-salud': { primary: '#6f42c1', secondary: '#9b59b6' },
    'salud': { primary: '#6f42c1', secondary: '#9b59b6' },
    'bienestar': { primary: '#6f42c1', secondary: '#9b59b6' },

    // Deportes
    'deportes': { primary: '#10b981', secondary: '#34d399' },
    'sports': { primary: '#10b981', secondary: '#34d399' },

    // Arte y Cultura
    'arte': { primary: '#f59e0b', secondary: '#fbbf24' },
    'cultura': { primary: '#f59e0b', secondary: '#fbbf24' },
    'arte-y-cultura': { primary: '#f59e0b', secondary: '#fbbf24' },

    // Política
    'politica': { primary: '#dc2626', secondary: '#ef4444' },
    'nacional': { primary: '#dc2626', secondary: '#ef4444' },
    'nacionales': { primary: '#dc2626', secondary: '#ef4444' },

    // Economía
    'economia': { primary: '#0891b2', secondary: '#06b6d4' },
    'negocios': { primary: '#0891b2', secondary: '#06b6d4' },

    // Tecnología
    'tecnologia': { primary: '#7c3aed', secondary: '#a78bfa' },
    'tech': { primary: '#7c3aed', secondary: '#a78bfa' },

    // Entretenimiento
    'entretenimiento': { primary: '#ec4899', secondary: '#f472b6' },
    'espectaculos': { primary: '#ec4899', secondary: '#f472b6' },

    // Internacional
    'internacional': { primary: '#2563eb', secondary: '#3b82f6' },
    'mundo': { primary: '#2563eb', secondary: '#3b82f6' },

    // Default (Dorado)
    'default': { primary: '#d4af37', secondary: '#f59e0b' }
};

/**
 * Obtiene los colores temáticos de una categoría
 * Prioriza: 1) Colores de BD, 2) Colores por slug, 3) Default dorado
 */
export function getCategoryThemeColors(category?: Category | null): { primary: string; secondary: string } {
    if (!category) {
        return DEFAULT_CATEGORY_COLORS.default;
    }

    // Si la categoría tiene colores definidos en BD, usarlos
    if (category.theme_color) {
        return {
            primary: category.theme_color,
            secondary: category.theme_color_secondary || category.theme_color
        };
    }

    // Buscar por slug en los colores predefinidos
    const slug = category.slug.toLowerCase();
    if (DEFAULT_CATEGORY_COLORS[slug]) {
        return DEFAULT_CATEGORY_COLORS[slug];
    }

    // Buscar por nombre parcial
    const name = category.name.toLowerCase();
    for (const [key, colors] of Object.entries(DEFAULT_CATEGORY_COLORS)) {
        if (name.includes(key) || key.includes(name)) {
            return colors;
        }
    }

    // Default
    return DEFAULT_CATEGORY_COLORS.default;
}

/**
 * Genera un gradiente CSS basado en los colores de la categoría
 */
export function getCategoryGradient(category?: Category | null, angle: number = 135): string {
    const colors = getCategoryThemeColors(category);
    return `linear-gradient(${angle}deg, ${colors.primary} 0%, ${colors.secondary} 100%)`;
}

/**
 * Obtiene un color más claro para backgrounds
 */
export function getCategoryLightColor(category?: Category | null, opacity: number = 0.1): string {
    const colors = getCategoryThemeColors(category);
    return `${colors.primary}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
}

/**
 * Genera variables CSS para una categoría
 */
export function getCategoryCSSVariables(category?: Category | null): Record<string, string> {
    const colors = getCategoryThemeColors(category);
    return {
        '--category-primary': colors.primary,
        '--category-secondary': colors.secondary,
        '--category-gradient': getCategoryGradient(category),
        '--category-light': getCategoryLightColor(category, 0.1),
        '--category-medium': getCategoryLightColor(category, 0.3),
    };
}
