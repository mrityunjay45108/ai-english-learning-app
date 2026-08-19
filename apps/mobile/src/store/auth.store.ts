import { create } from 'zustand';
import { apiClient } from '../api/client';

interface AuthState {
  user: any | null;
  token: string | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  login: async (email, password) => {
    try {
      // Backend auth endpoint call
      const response = await apiClient.post('/auth/login', { email, password });
      const { token, user } = response.data;
      
      // Axios headers mein token set karein
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      set({ user, token });
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Invalid credentials or backend offline');
    }
  },
  logout: () => set({ user: null, token: null }),
}));