const fs = require('fs');
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirs = [
  path.join(src, 'app', 'auth', 'login'),
  path.join(src, 'app', 'auth', 'register'),
  path.join(src, 'app', 'dashboard'),
  path.join(src, 'components', 'ui'),
  path.join(src, 'components', 'layout'),
  path.join(src, 'lib', 'api'),
  path.join(src, 'lib', 'stores'),
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// 1. package.json
fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
  name: "web",
  version: "0.1.0",
  private: true,
  scripts: {
    dev: "next dev -p 3001",
    build: "next build",
    start: "next start -p 3001",
    lint: "next lint"
  },
  dependencies: {
    "next": "14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "axios": "^1.6.0",
    "zustand": "^4.5.0",
    "react-hook-form": "^7.48.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "@tanstack/react-query": "^5.0.0",
    "react-hot-toast": "^2.4.0",
    "lucide-react": "^0.294.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  devDependencies: {
    "typescript": "^5.3.3",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}, null, 2));

// 2. tsconfig.json
fs.writeFileSync(path.join(root, 'tsconfig.json'), JSON.stringify({
  compilerOptions: {
    target: "es5",
    lib: ["dom", "dom.iterable", "esnext"],
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    noEmit: true,
    esModuleInterop: true,
    module: "esnext",
    moduleResolution: "bundler",
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: "preserve",
    incremental: true,
    plugins: [{ name: "next" }],
    paths: {
      "@/*": ["./src/*"]
    }
  },
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  exclude: ["node_modules"]
}, null, 2));

// 3. tailwind.config.js
fs.writeFileSync(path.join(root, 'tailwind.config.js'), `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        }
      }
    },
  },
  plugins: [],
};`);

// 4. postcss.config.js
fs.writeFileSync(path.join(root, 'postcss.config.js'), `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`);

// 5. .env.local
fs.writeFileSync(path.join(root, '.env.local'), `NEXT_PUBLIC_API_URL=http://localhost:3000\nNEXT_PUBLIC_APP_URL=http://localhost:3001\n`);

// 6. Global CSS
fs.writeFileSync(path.join(src, 'app', 'globals.css'), `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #f9fafb;
  color: #111827;
}`);

// 7. API Client
fs.writeFileSync(path.join(src, 'lib', 'api', 'client.ts'),
`import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

class ApiClient {
  private client = axios.create({
    baseURL: API_URL,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' },
  });

  constructor() {
    this.client.interceptors.request.use(
      (config) => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('accessToken');
          if (token) config.headers.Authorization = \`Bearer \${token}\`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
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

// 8. Auth Store (Zustand)
fs.writeFileSync(path.join(src, 'lib', 'stores', 'auth.store.ts'),
`import { create } from 'zustand';
import apiClient from '../api/client';

interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email, password) => {
    const response: any = await apiClient.post('/api/v1/auth/login', { email, password });
    const { accessToken, user } = response.data;
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessToken', accessToken);
    }
    set({ user, isAuthenticated: true });
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
    }
    set({ user: null, isAuthenticated: false });
  },
}));`);

// 9. Providers
fs.writeFileSync(path.join(src, 'app', 'providers.tsx'),
`'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}`);

// 10. Root Layout
fs.writeFileSync(path.join(src, 'app', 'layout.tsx'),
`import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'English Learning AI - Hindi se English Seekhein',
  description: 'Understand in Hindi. Speak in English.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`);

// 11. Home / Login Page
fs.writeFileSync(path.join(src, 'app', 'page.tsx'),
`'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/auth.store';
import toast from 'react-hot-toast';

export default function HomePage() {
  const [email, setEmail] = useState('student_gateway@englishlearning.com');
  const [password, setPassword] = useState('MySecret@123');
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success('Welcome back!');
      router.push('/dashboard');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-indigo-600">English Learning AI</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Understand in Hindi. Speak in English.</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 font-medium shadow-sm transition-colors"
          >
            Sign In to Start Learning
          </button>
        </form>
      </div>
    </div>
  );
}`);

// 12. Dashboard Page
fs.writeFileSync(path.join(src, 'app', 'dashboard', 'page.tsx'),
`'use client';

import { useAuthStore } from '@/lib/stores/auth.store';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">English Learning AI</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-700">Namaste, {user?.firstName || 'Student'}! 👋</span>
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 text-sm bg-red-50 text-red-600 border border-red-200 rounded-md hover:bg-red-100 font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Learning Hub</h2>
            <p className="text-gray-500 text-sm">Daily Practice Streak: 7 Days 🔥</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700">
            Resume Current Lesson
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            <span className="text-3xl">💬</span>
            <h3 className="mt-2 font-bold text-gray-900">AI Tutor</h3>
            <p className="text-xs text-gray-500 mt-1">Interactive Conversational Practice</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            <span className="text-3xl">🎤</span>
            <h3 className="mt-2 font-bold text-gray-900">Speaking Engine</h3>
            <p className="text-xs text-gray-500 mt-1">Pronunciation & Accent Scoring</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            <span className="text-3xl">📚</span>
            <h3 className="mt-2 font-bold text-gray-900">Vocabulary Flashcards</h3>
            <p className="text-xs text-gray-500 mt-1">Spaced Repetition System</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            <span className="text-3xl">✍️</span>
            <h3 className="mt-2 font-bold text-gray-900">Grammar Exercises</h3>
            <p className="text-xs text-gray-500 mt-1">Hindi-English Rules & Practice</p>
          </div>
        </div>
      </main>
    </div>
  );
}`);

console.log('✅ setup-web-app.js written successfully.');
