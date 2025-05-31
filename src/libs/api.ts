import { useAuthStore } from '@/stores/auth.store';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
});
api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<any>) => {
        if (error.response) {
            const status = error.response.status;
            const message = error.response.data?.message || 'An error occurred';
            toast.error(message);

            if (status === 401 || status === 403) {
                useAuthStore.getState().logout();
            }
        }
    }
);

export default api;
