const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'api'),
  path.join(src, 'components', 'common'),
  path.join(src, 'screens', 'auth'),
  path.join(src, 'screens', 'main'),
  path.join(src, 'navigation'),
  path.join(src, 'store'),
  path.join(src, 'utils'),
  path.join(src, 'types'),
  path.join(src, 'constants'),
  path.join(root, 'assets'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: 'mobile',
  version: '1.0.0',
  main: 'node_modules/expo/AppEntry.js',
  scripts: {
    start: 'expo start',
    android: 'expo start --android',
    ios: 'expo start --ios',
    web: 'expo start --web'
  },
  dependencies: {
    'expo': '~51.0.0',
    'expo-status-bar': '~1.12.0',
    'react': '18.2.0',
    'react-native': '0.74.3',
    'react-native-safe-area-context': '4.10.1',
    'react-native-screens': '3.31.1',
    '@react-navigation/native': '^6.1.9',
    '@react-navigation/native-stack': '^6.9.17',
    '@react-navigation/bottom-tabs': '^6.5.11',
    '@expo/vector-icons': '^14.0.0',
    'expo-secure-store': '~13.0.0',
    'expo-constants': '~16.0.0',
    'zustand': '^4.5.0',
    'axios': '^1.6.0',
    '@react-native-async-storage/async-storage': '1.23.1',
    'expo-splash-screen': '~0.27.0'
  },
  devDependencies: {
    '@babel/core': '^7.20.0',
    '@types/react': '~18.2.45',
    '@types/react-native': '^0.72.0',
    'typescript': '^5.3.0'
  }
}, null, 2));

// 2. tsconfig.json
fs.writeFileSync(path.join(root, 'tsconfig.json'), JSON.stringify({
  extends: "expo/tsconfig.base",
  compilerOptions: {
    strict: true
  }
}, null, 2));

// 3. app.json
fs.writeFileSync(path.join(root, 'app.json'), JSON.stringify({
  expo: {
    name: "English Learning AI",
    slug: "english-learning-ai",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    splash: {
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#ffffff"
      }
    },
    extra: {
      apiUrl: "http://localhost:3000"
    }
  }
}, null, 2));

// 4. .env
fs.writeFileSync(path.join(root, '.env'), `API_URL=http://localhost:3000\nNODE_ENV=development\n`);

// 5. API Client
fs.writeFileSync(path.join(src, 'api', 'client.ts'),
`import axios from 'axios';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

const API_URL = Constants.expoConfig?.extra?.apiUrl || 'http://localhost:3000';

class ApiClient {
  private client = axios.create({
    baseURL: API_URL,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' },
  });
  private token: string | null = null;

  constructor() {
    this.client.interceptors.request.use(
      async (config) => {
        if (!this.token) {
          this.token = await SecureStore.getItemAsync('accessToken');
        }
        if (this.token) {
          config.headers.Authorization = \`Bearer \${this.token}\`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  setToken(token: string) {
    this.token = token;
    SecureStore.setItemAsync('accessToken', token);
  }

  async clearToken() {
    this.token = null;
    await SecureStore.deleteItemAsync('accessToken');
  }

  async get<T>(url: string): Promise<T> {
    const response = await this.client.get<T>(url);
    return response.data;
  }

  async post<T>(url: string, data?: any): Promise<T> {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }
}

export const apiClient = new ApiClient();
export default apiClient;`);

// 6. Zustand Store
fs.writeFileSync(path.join(src, 'store', 'auth.store.ts'),
`import { create } from 'zustand';
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
}));`);

// 7. Navigation Types & Stacks
fs.writeFileSync(path.join(src, 'navigation', 'types.ts'),
`export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Courses: undefined;
  Progress: undefined;
  Profile: undefined;
};`);

fs.writeFileSync(path.join(src, 'navigation', 'AuthStack.tsx'),
`import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);`);

fs.writeFileSync(path.join(src, 'navigation', 'MainTabs.tsx'),
`import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/main/HomeScreen';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#4F46E5',
      tabBarInactiveTintColor: '#9CA3AF',
      headerShown: true,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: any = 'home-outline';
        if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
        else if (route.name === 'Courses') iconName = focused ? 'book' : 'book-outline';
        else if (route.name === 'Progress') iconName = focused ? 'stats-chart' : 'stats-chart-outline';
        else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'AI English App' }} />
  </Tab.Navigator>
);`);

// 8. Screens
fs.writeFileSync(path.join(src, 'screens', 'auth', 'LoginScreen.tsx'),
`import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuthStore } from '../../store/auth.store';

export const LoginScreen = () => {
  const [email, setEmail] = useState('student_gateway@englishlearning.com');
  const [password, setPassword] = useState('MySecret@123');
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (err: any) {
      Alert.alert('Login Failed', err.message || 'Invalid Credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI English Learning</Text>      <Text style={styles.subtitle}>Hindi se English Seekhein Aasani Se</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#FFFFFF' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4F46E5', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 32 },
  input: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 10, padding: 14, marginBottom: 16, backgroundColor: '#F9FAFB' },
  button: { backgroundColor: '#4F46E5', borderRadius: 10, padding: 16, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});`);

fs.writeFileSync(path.join(src, 'screens', 'main', 'HomeScreen.tsx'),
`import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuthStore } from '../../store/auth.store';

export const HomeScreen = () => {
  const { user, logout } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Namaste, {user?.firstName || 'Student'}! 👋</Text>
      <Text style={styles.cardTitle}>Daily Practice Streak: 7 Days 🔥</Text>
      
      <View style={styles.grid}>
        <View style={styles.card}><Text style={styles.cardText}>💬 AI Tutor</Text></View>
        <View style={styles.card}><Text style={styles.cardText}>🎤 Speaking</Text></View>
        <View style={styles.card}><Text style={styles.cardText}>📚 Vocabulary</Text></View>
        <View style={styles.card}><Text style={styles.cardText}>✍️ Grammar</Text></View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F9FAFB' },
  welcome: { fontSize: 22, fontWeight: 'bold', color: '#1F2937', marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#4F46E5', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card: { width: '48%', backgroundColor: '#FFFFFF', padding: 20, borderRadius: 12, elevation: 2, alignItems: 'center' },
  cardText: { fontSize: 16, fontWeight: 'bold', color: '#374151' },
  logoutBtn: { marginTop: 40, backgroundColor: '#EF4444', padding: 14, borderRadius: 10, alignItems: 'center' },
  logoutText: { color: '#FFFFFF', fontWeight: 'bold' },
});`);

// 9. App Entrypoint
fs.writeFileSync(path.join(root, 'App.tsx'),
`import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthStore } from './src/store/auth.store';
import { AuthStack } from './src/navigation/AuthStack';
import { MainTabs } from './src/navigation/MainTabs';

export default function App() {
  const { isAuthenticated, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuthenticated ? <MainTabs /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}`);

console.log('✅ setup-mobile-app.js written successfully.');
