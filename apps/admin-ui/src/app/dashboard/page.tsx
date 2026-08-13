'use client';

import { AdminLayout } from '@/components/layout/AdminLayout';
import { Users, BookOpen, CreditCard, Activity } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Registered Users', value: '12,847', icon: Users, color: 'text-blue-600' },
    { label: 'Active Microservices', value: '19 / 19', icon: Activity, color: 'text-emerald-600' },
    { label: 'Published Courses', value: '156', icon: BookOpen, color: 'text-purple-600' },
    { label: 'Monthly Subscriptions', value: '₹1,45,290', icon: CreditCard, color: 'text-amber-600' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Platform Metric Overview</h1>
          <p className="text-sm text-gray-500">Real-time health status across 19 backend services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
              <div className={`p-3 bg-gray-50 rounded-lg ${s.color}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                <p className="text-xl font-bold text-gray-900 mt-1">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">System Service Map</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {['API Gateway (3000)', 'Auth (3001)', 'User (3002)', 'Course (3003)', 'Content (3004)', 'Assessment (3005)', 'Vocabulary (3006)', 'Grammar (3007)', 'Progress (3008)', 'Gamification (3009)', 'AI Gateway (3010)', 'AI Tutor (3011)', 'Speech (3012)', 'Recommendation (3013)', 'Notification (3014)', 'Subscription (3015)', 'Payment (3016)', 'Analytics (3017)', 'Admin Service (3018)'].map((svc, idx) => (
              <div key={idx} className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-800">{svc}</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}