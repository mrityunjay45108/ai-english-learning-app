'use client';

import { useRouter } from 'next/navigation';
import { LogOut, BookOpen, Mic, Sparkles, GraduationCap, Settings, Home } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-indigo-600">English Learning AI</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Your Learning Hub</h2>
            <p className="text-gray-600 mt-1">Daily Practice Streak: 7 Days 🎉</p>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Sparkles, title: 'AI Tutor', desc: 'Interactive Conversational Practice', color: 'bg-purple-100 text-purple-600' },
              { icon: Mic, title: 'Speaking Engine', desc: 'Pronunciation & Accent Scoring', color: 'bg-blue-100 text-blue-600' },
              { icon: BookOpen, title: 'Vocabulary Flashcards', desc: 'Spaced Repetition System', color: 'bg-green-100 text-green-600' },
              { icon: GraduationCap, title: 'Grammar Exercises', desc: 'Hindi-English Rules & Practice', color: 'bg-orange-100 text-orange-600' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Resume Lesson Button */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Resume Current Lesson</h3>
                <p className="text-sm text-gray-600 mt-1">Continue where you left off</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Resume Lesson
              </button>
            </div>
          </div>

          {/* Courses Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Your Courses</h3>
            <p className="text-gray-600 text-sm">No courses enrolled yet. Start learning now!</p>
            <button className="mt-4 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
              Browse Courses
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
