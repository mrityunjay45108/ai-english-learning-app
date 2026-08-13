'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/auth.store';
import { LayoutDashboard, Users, ShieldAlert, BarChart3, LogOut } from 'lucide-react';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col justify-between">
        <div>
          <div className="p-5 border-b border-gray-800">
            <h1 className="text-xl font-bold text-indigo-400">Admin Console</h1>
            <p className="text-xs text-gray-400 mt-1">AI English Platform</p>
          </div>
          <nav className="p-4 space-y-2">
            <Link href="/dashboard" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white">
              <LayoutDashboard className="h-5 w-5 text-indigo-400" />
              <span className="font-medium text-sm">Dashboard</span>
            </Link>
            <Link href="/users" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white">
              <Users className="h-5 w-5 text-indigo-400" />
              <span className="font-medium text-sm">User Management</span>
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">{user?.firstName || 'Admin'}</p>
              <p className="text-xs text-gray-400">{user?.email || 'admin@platform.com'}</p>
            </div>
            <button onClick={handleLogout} className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-red-400 transition-colors">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">System Administration</h2>
          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 border border-indigo-200 text-xs font-semibold rounded-full">
            Role: SUPER_ADMIN
          </span>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}