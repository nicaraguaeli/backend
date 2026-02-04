import axios from 'axios';

declare global {
    interface Window {
        axios: typeof axios;
    }
}

window.axios = axios;

// Set the API base URL from the injected global variable, or fallback to root
window.axios.defaults.baseURL = (window as any).APP_URL || '/';

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
