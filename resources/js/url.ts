export const asset = (path: string) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Ensure the path is prefixed with a slash if it's not empty
    return cleanPath ? `/${cleanPath}` : '';
};
