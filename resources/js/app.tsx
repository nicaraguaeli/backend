import '../sass/app.scss';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import React from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'En las mejores calificaciones';

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        );
        // Apply persistent layout if the page component defines one.
        // Inertia compares layout references: as long as two pages share
        // the same `withMainLayout` function reference, the layout component
        // (and therefore the audio player state) is never destroyed.
        const component = page as any;
        if (!component.default.layout) {
            // Pages without a layout get no wrapper — they render standalone.
        }
        return component;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
