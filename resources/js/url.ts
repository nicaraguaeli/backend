export const asset = (path: string) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Determine base path
    // 1. Prefer runtime configuration from Laravel (injected in app.blade.php)
    let basePath = (window as any).APP_URL || '';

    // 2. Fallback to Vite build-time config if runtime is missing
    if (!basePath && import.meta.env.PROD) {
        const viteBase = import.meta.env.BASE_URL;
        basePath = viteBase.replace(/\/build\/?$/, '');
    }

    // Remove trailing slash from base path if present
    if (basePath.endsWith('/')) {
        basePath = basePath.slice(0, -1);
    }

    // Ensure the path is prefixed with a slash if it's not empty and we have a base path or just root
    return cleanPath ? `${basePath}/${cleanPath}` : '';
};

/**
 * Generate an absolute URL for the application
 * Similar to Laravel's url() helper
 */
export const url = (path: string = '') => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Get base URL from window or environment
    let baseUrl = (window as any).APP_URL || '';

    // Fallback to current origin if no APP_URL is set
    if (!baseUrl && typeof window !== 'undefined') {
        baseUrl = window.location.origin;
    }

    // Remove trailing slash from base URL if present
    if (baseUrl.endsWith('/')) {
        baseUrl = baseUrl.slice(0, -1);
    }

    // Return the full URL
    return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
};
