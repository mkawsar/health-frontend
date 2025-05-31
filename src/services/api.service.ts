import api from '@/libs/api';

export const ApiService = {
    get: async <T = any>(url: string, params?: object): Promise<T> => {
        const res = await api.get<T>(url, { params });
        return res.data;
    },

    post: async <T = any>(url: string, data?: object): Promise<T> => {
        const res = await api.post<T>(url, data);
        return res.data;
    },

    put: async <T = any>(url: string, data?: object): Promise<T> => {
        const res = await api.put<T>(url, data);
        return res.data;
    },
    delete: async <T = any>(url: string, params?: object): Promise<T> => {
        const res = await api.delete<T>(url, { params });
        return res.data;
    }
}
