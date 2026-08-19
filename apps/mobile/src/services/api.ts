// apps/mobile/src/services/api.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Apne NestJS backend ka base URL yahan set karein (Localhost IP for Android Emulator / Physical Device)
const API_BASE_URL = 'http://localhost:3012/api/v1'; 

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor token attach karne ke liye
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('user_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// AI Coach Message API Helper
export const sendAiCoachMessage = async (message: string) => {
  try {
    const response = await apiClient.post('/speech/chat', { message });
    return response.data;
  } catch (error) {
    console.error('AI Coach API Error:', error);
    throw error;
  }
};