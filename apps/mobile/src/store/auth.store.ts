import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../api/client';

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: async (email, password) => {
    const response: any = await apiClient.post('/api/v1/auth/login', { email, password });
    const { accessToken, user } = response.data;
    apiClient.setToken(accessToken);
    await AsyncStorage.setItem('user', JSON.stringify(user));
    set({ user, token: accessToken, isAuthenticated: true });
  },

  logout: async () => {
    await apiClient.clearToken();
    await AsyncStorage.removeItem('user');
    set({ user: null, token: null, isAuthenticated: false });
  },

  checkAuth: async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        set({ user: JSON.parse(storedUser), isAuthenticated: true });
        return true;
      }
    } catch (e) {}
    return false;
  },
}));