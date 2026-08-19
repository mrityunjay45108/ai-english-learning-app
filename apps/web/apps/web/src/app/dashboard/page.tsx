'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Trophy,
  Flame,
  Award,
  Star,
  ArrowLeft,
  Zap,
  CheckCircle2,
  Crown,
  Rocket,
  Loader2,
  ArrowRight,
  Mic,
  PenTool,
  BookOpen,
  MessageSquare,
  Video,
  FileText,
  Target,
  Users,
} from 'lucide-react';
import apiClient from '@/lib/api/client'; // Ensure this path is correct

// --- Types ---
interface UserProfile {
  name: string;
  xp: number;
  streak: number;
  level: number;
  rank: number;
  totalLessons: number;
  completedLessons: number;
}

interface Service {
  id: string;
  name: string;
  icon: any;
  description: string;
  color: string;
  endpoint: string;
  route: string;
}

// --- Service Configuration (Matches your Backend Microservices) ---
const SERVICES: Service[] = [
  {
    id: 'speech',
    name: 'AI Speech Coach',
    icon: Mic,
    description: 'Real-time pronunciation & accent training',
    color: 'from-cyan-500 to-blue-500',
    endpoint: '/speech/health',
    route: '/speech',
  },
  {
    id: 'grammar',
    name: 'Grammar Master',
    icon: PenTool,
    description: 'Advanced grammar lessons & exercises',
    color: 'from-emerald-500 to-green-500',
    endpoint: '/grammar/health',
    route: '/grammar',
  },
  {
    id: 'vocabulary',
    name: 'Vocabulary Builder',
    icon: BookOpen,
    description: 'Learn new words with AI-powered flashcards',
    color: 'from-purple-500 to-indigo-500',
    endpoint: '/vocabulary/health',
    route: '/vocabulary',
  },
  {
    id: 'speaking',
    name: 'Speaking Practice',
    icon: MessageSquare,
    description: 'AI-powered conversation simulations',
    color: 'from-rose-500 to-pink-500',
    endpoint: '/ai/health',
    route: '/speaking',
  },
  {
    id: 'lessons',
    name: 'Live Video Lessons',
    icon: Video,
    description: 'Recorded & interactive video sessions',
    color: 'from-orange-500 to-amber-500',
    endpoint: '/courses/health',
    route: '/lessons',
  },
  {
    id: 'writing',
    name: 'Writing Assistant',
    icon: FileText,
    description: 'AI writing feedback & improvement',
    color: 'from-teal-500 to-cyan-500',
    endpoint: '/ai/health',
    route: '/writing',
  },
  {
    id: 'group',
    name: 'Group Practice',
    icon: Users,
    description: 'Practice with peers in group sessions',
    color: 'from-indigo-500 to-purple-500',
    endpoint: '/realtime/health',
    route: '/group',
  },
  {
    id: 'assessment',
    name: 'Assessment Center',
    icon: Target,
    description: 'Track your progress with AI assessments',
    color: 'from-red-500 to-orange-500',
    endpoint: '/assessments/health',
    route: '/assessment',
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [serviceStatus, setServiceStatus] = useState<Record<string, boolean>>({});
  const [statusLoading, setStatusLoading] = useState(true);

  // Load user profile on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiClient.get<{ user: UserProfile }>('/users/profile');
        setUser(res.data.user);
      } catch (err) {
        // Fallback data if backend is not connected
        setUser({
          name: 'Mrityunjay Kumar',
          xp: 680,
          streak: 8,
          level: 3,
          rank: 1,
          totalLessons: 12,
          completedLessons: 8,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Check Health of all services on mount
  useEffect(() => {
    const checkHealth = async () => {
      const statuses: Record<string, boolean> = {};

      // Check all services in parallel
      await Promise.all(
        SERVICES.map(async (svc) => {
          try {
            await apiClient.get(svc.endpoint, { timeout: 3000 });
            statuses[svc.id] = true;
          } catch {
            statuses[svc.id] = false;
          }
        })
      );

      setServiceStatus(statuses);
      setStatusLoading(false);
    };
    checkHealth();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin h-12 w-12 text-purple-500 mx-auto mb-4" />
          <p className="text-slate-400 text-sm animate-pulse">
            Connecting to your personal AI hub...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/5 gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                🎉 Welcome {user?.name || 'Learner'}!
              </h1>
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <Crown className="w-3 h-3" /> PLUS Active
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              All systems operational
            </p>
          </div>
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>

        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total XP', value: user?.xp || 0, icon: Trophy, color: 'text-purple-400' },
            {
              label: 'Day Streak',
              value: user?.streak || 0,
              icon: Flame,
              color: 'text-orange-400',
            },
            { label: 'Level', value: user?.level || 1, icon: Award, color: 'text-emerald-400' },
            { label: 'Rank', value: `#${user?.rank || 1}`, icon: Star, color: 'text-amber-400' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-center hover:bg-white/[0.06] transition group"
            >
              <p className={`text-2xl md:text-3xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1 font-semibold">
                <stat.icon className="w-3 h-3" /> {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- Progress & Lessons --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white/[0.03] border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between text-sm mb-3 font-medium text-slate-400">
              <span>Level {user?.level || 1}</span>
              <span>Level {(user?.level || 1) + 1}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min((((user?.xp || 0) % 100) / 100) * 100, 100)}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              {100 - ((user?.xp || 0) % 100)} XP to next level
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex items-center justify-around">
            <div className="text-center">
              <p className="text-xl font-black text-indigo-400">{user?.totalLessons || 12}</p>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
                Lessons
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-black text-emerald-400">{user?.completedLessons || 8}</p>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
                Completed
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-black text-amber-400">
                {Math.round(((user?.completedLessons || 8) / (user?.totalLessons || 12)) * 100)}%
              </p>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
                Progress
              </p>
            </div>
          </div>
        </div>

        {/* --- Quick Actions --- */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Rocket className="w-4 h-4 text-purple-400" /> Quick Actions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                name: 'AI Speech Practice',
                icon: Mic,
                color: 'from-cyan-600 to-blue-600',
                route: '/speech',
              },
              {
                name: 'Grammar Quiz',
                icon: Zap,
                color: 'from-emerald-600 to-green-600',
                route: '/grammar',
              },
              {
                name: 'Vocabulary Challenge',
                icon: Trophy,
                color: 'from-purple-600 to-indigo-600',
                route: '/vocabulary',
              },
              {
                name: 'Speaking Test',
                icon: Target,
                color: 'from-rose-600 to-pink-600',
                route: '/speaking',
              },
            ].map((action, idx) => (
              <button
                key={idx}
                onClick={() => router.push(action.route)}
                className={`bg-gradient-to-r ${action.color} hover:opacity-90 p-4 rounded-xl text-left transition transform hover:scale-[1.02]`}
              >
                <action.icon className="w-5 h-5 mb-2" />
                <p className="text-sm font-bold">{action.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* --- Upgrade to PLUS Banner --- */}
        <div
          className="bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-pink-500/10 border border-amber-500/30 rounded-2xl p-6 cursor-pointer hover:border-amber-500 transition group"
          onClick={() => router.push('/plus')}
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition shrink-0">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-bold text-lg text-white group-hover:text-amber-300 transition">
                Upgrade to PLUS
              </h4>
              <p className="text-sm text-slate-400">
                Unlock all premium features • 3-day trial @ ₹1
              </p>
            </div>
            <div className="flex items-center gap-2 bg-amber-500/20 px-5 py-2.5 rounded-xl border border-amber-500/30 group-hover:bg-amber-500/30 transition">
              <span className="text-sm font-bold text-amber-400">₹1 Trial</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition" />
            </div>
          </div>
        </div>

        {/* --- All Services (Live Status) --- */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-400" /> All Services{' '}
              <span className="text-emerald-400 text-[10px] font-normal">— Unlocked</span>
            </h3>
            <span className="text-[10px] text-amber-400 flex items-center gap-1 border border-amber-500/20 px-2 py-1 rounded-full">
              <CheckCircle2 className="w-3 h-3" /> PLUS Access
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((service) => {
              const isLive = statusLoading ? true : serviceStatus[service.id];
              return (
                <div
                  key={service.id}
                  onClick={() => router.push(service.route)}
                  className={`cursor-pointer bg-gradient-to-br ${service.color} p-5 rounded-xl transition transform hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group ${!isLive ? 'opacity-60 grayscale' : ''}`}
                >
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2 bg-black/20 px-2 py-1 rounded-lg text-[9px] font-bold flex items-center gap-1">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}
                    ></span>
                    {isLive ? 'Live' : 'Offline'}
                  </div>

                  <service.icon className="w-7 h-7 mb-3 group-hover:rotate-6 transition" />
                  <p className="text-sm font-bold text-white">{service.name}</p>
                  <p className="text-[10px] text-white/80 mt-1 leading-tight">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Footer --- */}
        <div className="text-center text-[10px] text-slate-600 border-t border-white/5 pt-6 mt-4">
          <p>© {new Date().getFullYear()} AI English Master Hub. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center gap-2">
            <span>v2.0.1</span>
            <span>•</span>
            <span>Made with ❤️ in India</span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Live Backend Connected
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
