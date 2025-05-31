import { create } from 'zustand';
import Cookies from 'js-cookie';
import { devtools } from 'zustand/middleware';

export interface AuthStore {
    token: string | null;
    user: any | null; // optionally define a User type if available
    setToken: (token: string | null) => void;
    setUser: (user: any | null) => void;
    logout: () => void;
};

const store = (set: any): AuthStore => ({
    token: Cookies.get('token') || null,
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')!) : null,
    setToken: (token) => {
        if (token) {
            Cookies.set('token', token, { expires: 7 });
        } else {
            Cookies.remove('token');
        }
        set({ token });
    },
    setUser: (user) => {
        if (user) {
            Cookies.set('user', JSON.stringify(user), { expires: 7 });
        } else {
            Cookies.remove('user');
        }
        set({ user });
    },
    logout: () => set({ token: null, user: null }),
});

export const useAuthStore = typeof window !== 'undefined' ? create<AuthStore>()(devtools(store, { name: 'AuthStore' })) : create<AuthStore>()(store);