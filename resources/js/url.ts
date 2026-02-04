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
