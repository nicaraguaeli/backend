import '../sass/app.scss';
import './bootstrap';

import axios from 'axios';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

// Configure axios base URL for production subfolder
axios.defaults.baseURL = '/radioabc/public';

// Fix Ziggy URL for subdirectory
if (typeof window !== 'undefined' && (window as any).Ziggy) {
    const subPath = '/radioabc/public';
    const ziggy = (window as any).Ziggy;
    if (ziggy.url && !ziggy.url.endsWith(subPath)) {
        ziggy.url = ziggy.url.replace(/\/$/, '') + subPath;
    }
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
