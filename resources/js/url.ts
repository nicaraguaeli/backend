export const asset = (path: string) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const baseUrl = '/radioabc/public/';

    return `${baseUrl}${cleanPath}`;
};
