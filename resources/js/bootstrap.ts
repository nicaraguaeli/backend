import axios from 'axios';
import { route } from 'ziggy-js';

declare global {
    interface Window {
        axios: typeof axios & { route?: (name: string, params?: any, config?: any) => any };
        route?: (...args: any[]) => string;
    }
}

window.axios = axios;

// Expose Ziggy `route` helper on window for convenience in non-module scripts
window.route = (...args: any[]) => route(...args);

// Add helper `axios.route(name, params, config)` to call axios with URL built by Ziggy
window.axios.route = (name: string, params: any = {}, config: any = {}) => {
    const url = window.route ? window.route(name, params) : route(name, params);
    return window.axios({ url, ...config });
};

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
