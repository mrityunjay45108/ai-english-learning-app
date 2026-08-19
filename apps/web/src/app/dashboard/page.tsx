// 'use client';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import {
//   Trophy,
//   Flame,
//   BookOpen,
//   Mic,
//   Crown,
//   ArrowLeft,
//   Sparkles,
//   Video,
//   FileText,
//   Award,
//   Zap,
//   CheckCircle2,
//   Lock,
//   Volume2,
//   MessageSquare,
//   BarChart,
//   Target,
//   Globe,
//   PenTool,
//   Headphones,
//   Music,
//   Coffee,
//   Star,
//   Rocket,
//   Heart,
// } from 'lucide-react';
// import axios from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

// // All Services (PLUS Members get everything!)
// const SERVICES = [
//   {
//     id: 1,
//     name: 'AI Speech Coach',
//     icon: Mic,
//     description: 'Real-time pronunciation & accent training',
//     color: 'from-cyan-500 to-blue-500',
//     available: true,
//   },
//   {
//     id: 2,
//     name: 'Grammar Master',
//     icon: PenTool,
//     description: 'Advanced grammar lessons & exercises',
//     color: 'from-emerald-500 to-green-500',
//     available: true,
//   },
//   {
//     id: 3,
//     name: 'Vocabulary Builder',
//     icon: BookOpen,
//     description: 'Learn new words with AI-powered flashcards',
//     color: 'from-purple-500 to-indigo-500',
//     available: true,
//   },
//   {
//     id: 4,
//     name: 'Speaking Practice',
//     icon: MessageSquare,
//     description: 'AI-powered conversation simulations',
//     color: 'from-rose-500 to-pink-500',
//     available: true,
//   },
//   {
//     id: 5,
//     name: 'Live Video Lessons',
//     icon: Video,
//     description: 'Recorded & interactive video sessions',
//     color: 'from-orange-500 to-amber-500',
//     available: true,
//   },
//   {
//     id: 6,
//     name: 'Writing Assistant',
//     icon: FileText,
//     description: 'AI writing feedback & improvement',
//     color: 'from-teal-500 to-cyan-500',
//     available: true,
//   },
//   {
//     id: 7,
//     name: 'Group Practice',
//     icon: Users,
//     description: 'Practice with peers in group sessions',
//     color: 'from-indigo-500 to-purple-500',
//     available: true,
//   },
//   {
//     id: 8,
//     name: 'Assessment Center',
//     icon: Target,
//     description: 'Track your progress with AI assessments',
//     color: 'from-red-500 to-orange-500',
//     available: true,
//   },
// ];

// // Quick Actions
// const QUICK_ACTIONS = [
//   { name: 'AI Speech Practice', icon: Volume2, color: 'from-cyan-600 to-blue-600' },
//   { name: 'Grammar Quiz', icon: Zap, color: 'from-emerald-600 to-green-600' },
//   { name: 'Vocabulary Challenge', icon: Trophy, color: 'from-purple-600 to-indigo-600' },
//   { name: 'Speaking Test', icon: Target, color: 'from-rose-600 to-pink-600' },
// ];

// export default function DashboardPage() {
//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setMounted(true);
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/users/profile`);
//       setUser(res.data.user);
//     } catch (error) {
//       setUser({
//         name: 'Mrityunjay Kumar',
//         email: 'mrityunjay@example.com',
//         xp: 680,
//         streak: 8,
//         level: 3,
//         subscription: 'PLUS',
//         rank: 1,
//         joinedAt: new Date().toISOString(),
//         totalLessons: 12,
//         completedLessons: 8,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!mounted || loading) {
//     return (
//       <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
//           <p className="text-slate-400 text-sm animate-pulse">Loading Dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-slate-800 gap-3">
//           <div>
//             <div className="flex items-center gap-2">
//               <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                 🎉 Welcome {user?.name || 'Learner'}!
//               </h1>
//               <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
//                 <Crown className="w-3 h-3" /> PLUS
//               </span>
//             </div>
//             <p className="text-sm text-slate-400 mt-1">
//               All services unlocked! 🚀 <span className="text-emerald-400">● Live</span>
//             </p>
//           </div>
//           <button
//             onClick={() => router.push('/')}
//             className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-semibold transition flex items-center gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" /> Back to Home
//           </button>
//         </div>

//         {/* Stats Row */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center hover:border-purple-500/50 transition">
//             <p className="text-2xl font-black text-purple-400">{user?.xp || 0}</p>
//             <p className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
//               <Trophy className="w-3 h-3" /> Total XP
//             </p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center hover:border-orange-500/50 transition">
//             <p className="text-2xl font-black text-orange-400">{user?.streak || 0}</p>
//             <p className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
//               <Zap className="w-3 h-3" /> Day Streak
//             </p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center hover:border-emerald-500/50 transition">
//             <p className="text-2xl font-black text-emerald-400">{user?.level || 1}</p>
//             <p className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
//               <Award className="w-3 h-3" /> Level
//             </p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center hover:border-amber-500/50 transition">
//             <p className="text-2xl font-black text-amber-400">#{user?.rank || 1}</p>
//             <p className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
//               <Star className="w-3 h-3" /> Rank
//             </p>
//           </div>
//         </div>

//         {/* Progress & Quick Stats */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
//           <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
//             <div className="flex justify-between text-sm mb-2">
//               <span className="text-slate-400">Level {user?.level || 1}</span>
//               <span className="text-slate-400">Level {(user?.level || 1) + 1}</span>
//             </div>
//             <div className="w-full bg-slate-800 rounded-full h-3">
//               <div
//                 className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
//                 style={{ width: `${Math.min((((user?.xp || 0) % 100) / 100) * 100, 100)}%` }}
//               />
//             </div>
//             <p className="text-xs text-slate-500 mt-2">
//               {100 - ((user?.xp || 0) % 100)} XP to next level
//             </p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-center justify-around">
//             <div className="text-center">
//               <p className="text-xl font-black text-indigo-400">{user?.totalLessons || 12}</p>
//               <p className="text-[9px] text-slate-400 uppercase">Lessons</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-black text-emerald-400">{user?.completedLessons || 8}</p>
//               <p className="text-[9px] text-slate-400 uppercase">Completed</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-black text-amber-400">
//                 {Math.round(((user?.completedLessons || 8) / (user?.totalLessons || 12)) * 100)}%
//               </p>
//               <p className="text-[9px] text-slate-400 uppercase">Progress</p>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="mb-6">
//           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
//             <Rocket className="w-4 h-4 text-purple-400" /> Quick Actions
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {QUICK_ACTIONS.map((action, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => alert(`🚀 Starting ${action.name}...`)}
//                 className={`bg-gradient-to-r ${action.color} hover:opacity-90 p-3 rounded-xl text-left transition transform active:scale-95`}
//               >
//                 <action.icon className="w-5 h-5 mb-1" />
//                 <p className="text-xs font-bold">{action.name}</p>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* All Services (PLUS Unlocked!) */}
//         <div className="mb-6">
//           <div className="flex items-center justify-between mb-3">
//             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
//               <Crown className="w-4 h-4 text-amber-400" /> All Services —{' '}
//               <span className="text-emerald-400">Unlocked</span>
//             </h3>
//             <span className="text-[10px] text-amber-400 flex items-center gap-1">
//               <CheckCircle2 className="w-3 h-3" /> PLUS Access
//             </span>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {SERVICES.map((service) => (
//               <div
//                 key={service.id}
//                 onClick={() => alert(`🚀 Opening ${service.name}...`)}
//                 className={`cursor-pointer bg-gradient-to-br ${service.color} p-4 rounded-xl transition transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden`}
//               >
//                 <div className="absolute top-0 right-0 bg-black/20 px-2 py-0.5 rounded-bl-lg">
//                   <CheckCircle2 className="w-3 h-3 text-white" />
//                 </div>
//                 <service.icon className="w-6 h-6 mb-2 group-hover:rotate-12 transition" />
//                 <p className="text-xs font-bold text-white">{service.name}</p>
//                 <p className="text-[9px] text-white/70 mt-0.5">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Premium Features */}
//         <div className="bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-cyan-500/10 border border-amber-500/30 rounded-2xl p-4 mb-6">
//           <div className="flex items-center gap-2 mb-3">
//             <Crown className="w-5 h-5 text-amber-400" />
//             <h3 className="text-sm font-bold text-white">PLUS Benefits Active</h3>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {[
//               { icon: Brain, text: 'Unlimited AI Coaching' },
//               { icon: Video, text: 'All Locked Lessons' },
//               { icon: Heart, text: 'Ad-free Experience' },
//               { icon: Rocket, text: 'Priority Support' },
//             ].map((benefit, idx) => (
//               <div key={idx} className="flex items-center gap-2 bg-slate-950/50 p-2 rounded-xl">
//                 <benefit.icon className="w-4 h-4 text-amber-400" />
//                 <p className="text-[10px] text-slate-300 font-semibold">{benefit.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center text-xs text-slate-600 border-t border-slate-900 pt-4">
//           <p>© 2026 AI English Master Hub</p>
//           <p className="mt-1 flex items-center justify-center gap-2">
//             <span>v1.1.33</span>
//             <span>•</span>
//             <span>Made with ❤️ in India</span>
//             <span>•</span>
//             <span className="text-emerald-400 flex items-center gap-1">
//               <CheckCircle2 className="w-3 h-3" /> PLUS Active
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// ('use client');
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import {
//   Trophy,
//   Flame,
//   BookOpen,
//   Mic,
//   Crown,
//   ArrowLeft,
//   Sparkles,
//   Video,
//   FileText,
//   Award,
//   Zap,
//   CheckCircle2,
//   Volume2,
//   MessageSquare,
//   BarChart,
//   Target,
//   Globe,
//   PenTool,
//   Headphones,
//   Music,
//   Coffee,
//   Star,
//   Rocket,
//   Heart,
//   Loader2,
//   ArrowRight,
// } from 'lucide-react';
// import axios from 'axios';

// // ✅ Fix 1: Relative API URL use karein (Gateway rewrites se auto-forward hoga)
// const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api/v1';

// // Axios instance with baseURL
// const axiosInstance = axios.create({
//   baseURL: API_URL,
//   timeout: 10000,
// });

// // Service configuration with API endpoints
// const SERVICES = [
//   {
//     id: 'speech',
//     name: 'AI Speech Coach',
//     icon: Mic,
//     description: 'Real-time pronunciation & accent training',
//     color: 'from-cyan-500 to-blue-500',
//     endpoint: `/speech/health`,
//     route: '/speech',
//     available: true,
//   },
//   {
//     id: 'grammar',
//     name: 'Grammar Master',
//     icon: PenTool,
//     description: 'Advanced grammar lessons & exercises',
//     color: 'from-emerald-500 to-green-500',
//     endpoint: `/grammar/health`,
//     route: '/grammar',
//     available: true,
//   },
//   {
//     id: 'vocabulary',
//     name: 'Vocabulary Builder',
//     icon: BookOpen,
//     description: 'Learn new words with AI-powered flashcards',
//     color: 'from-purple-500 to-indigo-500',
//     endpoint: `/vocabulary/health`,
//     route: '/vocabulary',
//     available: true,
//   },
//   {
//     id: 'speaking',
//     name: 'Speaking Practice',
//     icon: MessageSquare,
//     description: 'AI-powered conversation simulations',
//     color: 'from-rose-500 to-pink-500',
//     endpoint: `/ai/health`,
//     route: '/speaking',
//     available: true,
//   },
//   {
//     id: 'lessons',
//     name: 'Live Video Lessons',
//     icon: Video,
//     description: 'Recorded & interactive video sessions',
//     color: 'from-orange-500 to-amber-500',
//     endpoint: `/courses/health`,
//     route: '/lessons',
//     available: true,
//   },
//   {
//     id: 'writing',
//     name: 'Writing Assistant',
//     icon: FileText,
//     description: 'AI writing feedback & improvement',
//     color: 'from-teal-500 to-cyan-500',
//     endpoint: `/ai/health`,
//     route: '/writing',
//     available: true,
//   },
//   {
//     id: 'group',
//     name: 'Group Practice',
//     icon: Users,
//     description: 'Practice with peers in group sessions',
//     color: 'from-indigo-500 to-purple-500',
//     endpoint: `/realtime/health`,
//     route: '/group',
//     available: true,
//   },
//   {
//     id: 'assessment',
//     name: 'Assessment Center',
//     icon: Target,
//     description: 'Track your progress with AI assessments',
//     color: 'from-red-500 to-orange-500',
//     endpoint: `/assessments/health`,
//     route: '/assessment',
//     available: true,
//   },
// ];

// const QUICK_ACTIONS = [
//   {
//     name: 'AI Speech Practice',
//     icon: Volume2,
//     color: 'from-cyan-600 to-blue-600',
//     endpoint: `/speech/practice`,
//     route: '/speech',
//   },
//   {
//     name: 'Grammar Quiz',
//     icon: Zap,
//     color: 'from-emerald-600 to-green-600',
//     endpoint: `/grammar/quiz`,
//     route: '/grammar',
//   },
//   {
//     name: 'Vocabulary Challenge',
//     icon: Trophy,
//     color: 'from-purple-600 to-indigo-600',
//     endpoint: `/vocabulary/challenge`,
//     route: '/vocabulary',
//   },
//   {
//     name: 'Speaking Test',
//     icon: Target,
//     color: 'from-rose-600 to-pink-600',
//     endpoint: `/ai/test`,
//     route: '/speaking',
//   },
// ];

// export default function DashboardPage() {
//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [servicesStatus, setServicesStatus] = useState<Record<string, boolean>>({});
//   const [actionLoading, setActionLoading] = useState<string | null>(null);

//   useEffect(() => {
//     setMounted(true);
//     fetchUserData();
//     checkAllServices();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const res = await axiosInstance.get(`/users/profile`);
//       setUser(res.data.user);
//     } catch (error) {
//       // Fallback data
//       setUser({
//         name: 'Mrityunjay Kumar',
//         email: 'mrityunjay@example.com',
//         xp: 680,
//         streak: 8,
//         level: 3,
//         subscription: 'PLUS',
//         rank: 1,
//         totalLessons: 12,
//         completedLessons: 8,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const checkAllServices = async () => {
//     const status: Record<string, boolean> = {};
//     for (const service of SERVICES) {
//       try {
//         await axiosInstance.get(service.endpoint, { timeout: 3000 });
//         status[service.id] = true;
//       } catch {
//         status[service.id] = false;
//       }
//     }
//     setServicesStatus(status);
//   };

//   const handleServiceClick = async (service: (typeof SERVICES)[0]) => {
//     setActionLoading(service.id);
//     try {
//       const health = await axiosInstance.get(service.endpoint, { timeout: 3000 });
//       if (health.status === 200) {
//         alert(`🚀 Opening ${service.name}...\nService is healthy!`);
//       }
//     } catch (error) {
//       alert(`⚠️ ${service.name} is currently unavailable. Please try again later.`);
//     } finally {
//       setActionLoading(null);
//     }
//   };

//   const handleQuickAction = async (action: (typeof QUICK_ACTIONS)[0]) => {
//     setActionLoading(action.name);
//     try {
//       const response = await axiosInstance.get(action.endpoint, { timeout: 5000 });
//       alert(
//         `✅ ${action.name} started!\nResponse: ${JSON.stringify(response.data).slice(0, 100)}...`
//       );
//     } catch (error) {
//       alert(`⚠️ ${action.name} is currently unavailable. Please try again later.`);
//     } finally {
//       setActionLoading(null);
//     }
//   };

//   if (!mounted || loading) {
//     return (
//       <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="animate-spin h-12 w-12 text-purple-500 mx-auto mb-4" />
//           <p className="text-slate-400 text-sm animate-pulse">Loading Dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
//       {/* ... Rest of your JSX remains exactly the same ... */}
//       <div className="max-w-6xl mx-auto">
//         {/* (Aapka purana JSX yahan copy kar lein, maine sirf logic change kiya hai) */}

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-slate-800 gap-3">
//           <div>
//             <div className="flex items-center gap-2 flex-wrap">
//               <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                 🎉 Welcome {user?.name || 'Learner'}!
//               </h1>
//               <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
//                 <Crown className="w-3 h-3" /> PLUS
//               </span>
//             </div>
//             <p className="text-sm text-slate-400 mt-1">
//               All services unlocked! 🚀 <span className="text-emerald-400">● Live</span>
//             </p>
//           </div>
//           <button
//             onClick={() => router.push('/')}
//             className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-semibold transition flex items-center gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" /> Back to Home
//           </button>
//         </div>

//         {/* Stats Row */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center hover:border-purple-500/50 transition">
//             <p className="text-2xl font-black text-purple-400">{user?.xp || 0}</p>
//             <p className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
//               <Trophy className="w-3 h-3" /> Total XP
//             </p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center hover:border-orange-500/50 transition">
//             <p className="text-2xl font-black text-orange-400">{user?.streak || 0}</p>
//             <p className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
//               <Zap className="w-3 h-3" /> Day Streak
//             </p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center hover:border-emerald-500/50 transition">
//             <p className="text-2xl font-black text-emerald-400">{user?.level || 1}</p>
//             <p className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
//               <Award className="w-3 h-3" /> Level
//             </p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center hover:border-amber-500/50 transition">
//             <p className="text-2xl font-black text-amber-400">#{user?.rank || 1}</p>
//             <p className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
//               <Star className="w-3 h-3" /> Rank
//             </p>
//           </div>
//         </div>

//         {/* Progress */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
//           <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
//             <div className="flex justify-between text-sm mb-2">
//               <span className="text-slate-400">Level {user?.level || 1}</span>
//               <span className="text-slate-400">Level {(user?.level || 1) + 1}</span>
//             </div>
//             <div className="w-full bg-slate-800 rounded-full h-3">
//               <div
//                 className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
//                 style={{ width: `${Math.min((((user?.xp || 0) % 100) / 100) * 100, 100)}%` }}
//               />
//             </div>
//             <p className="text-xs text-slate-500 mt-2">
//               {100 - ((user?.xp || 0) % 100)} XP to next level
//             </p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-center justify-around">
//             <div className="text-center">
//               <p className="text-xl font-black text-indigo-400">{user?.totalLessons || 12}</p>
//               <p className="text-[9px] text-slate-400 uppercase">Lessons</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-black text-emerald-400">{user?.completedLessons || 8}</p>
//               <p className="text-[9px] text-slate-400 uppercase">Completed</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-black text-amber-400">
//                 {Math.round(((user?.completedLessons || 8) / (user?.totalLessons || 12)) * 100)}%
//               </p>
//               <p className="text-[9px] text-slate-400 uppercase">Progress</p>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="mb-6">
//           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
//             <Rocket className="w-4 h-4 text-purple-400" /> Quick Actions
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {QUICK_ACTIONS.map((action, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleQuickAction(action)}
//                 disabled={actionLoading === action.name}
//                 className={`bg-gradient-to-r ${action.color} hover:opacity-90 p-3 rounded-xl text-left transition transform active:scale-95 disabled:opacity-50`}
//               >
//                 {actionLoading === action.name ? (
//                   <Loader2 className="w-5 h-5 animate-spin mb-1" />
//                 ) : (
//                   <action.icon className="w-5 h-5 mb-1" />
//                 )}
//                 <p className="text-xs font-bold">{action.name}</p>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Upgrade to PLUS Card */}
//         <div
//           onClick={() => router.push('/plus')}
//           className="bg-gradient-to-br from-amber-500/15 via-purple-500/15 to-pink-500/15 border border-amber-500/40 rounded-2xl p-5 mb-6 cursor-pointer hover:border-amber-500 transition group"
//         >
//           <div className="flex items-center gap-4">
//             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
//               <Crown className="w-7 h-7 text-white" />
//             </div>
//             <div className="flex-1">
//               <h4 className="font-bold text-lg text-white group-hover:text-amber-300 transition">
//                 Upgrade to PLUS
//               </h4>
//               <p className="text-[11px] text-slate-400">
//                 Unlock all premium features • 3-day trial @ ₹1
//               </p>
//             </div>
//             <div className="flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-xl border border-amber-500/30">
//               <span className="text-xs font-bold text-amber-400">₹1 Trial</span>
//               <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition" />
//             </div>
//           </div>
//         </div>

//         {/* All Services */}
//         <div className="mb-6">
//           <div className="flex items-center justify-between mb-3">
//             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
//               <Crown className="w-4 h-4 text-amber-400" /> All Services —{' '}
//               <span className="text-emerald-400">Unlocked</span>
//             </h3>
//             <span className="text-[10px] text-amber-400 flex items-center gap-1">
//               <CheckCircle2 className="w-3 h-3" /> PLUS Access
//             </span>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {SERVICES.map((service) => (
//               <div
//                 key={service.id}
//                 onClick={() => handleServiceClick(service)}
//                 className={`cursor-pointer bg-gradient-to-br ${service.color} p-4 rounded-xl transition transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden ${
//                   servicesStatus[service.id] === false ? 'opacity-60' : ''
//                 }`}
//               >
//                 <div className="absolute top-0 right-0 bg-black/20 px-2 py-0.5 rounded-bl-lg">
//                   {actionLoading === service.id ? (
//                     <Loader2 className="w-3 h-3 text-white animate-spin" />
//                   ) : (
//                     <CheckCircle2 className="w-3 h-3 text-white" />
//                   )}
//                 </div>
//                 <service.icon className="w-6 h-6 mb-2 group-hover:rotate-12 transition" />
//                 <p className="text-xs font-bold text-white">{service.name}</p>
//                 <p className="text-[9px] text-white/70 mt-0.5">{service.description}</p>
//                 {servicesStatus[service.id] === false && (
//                   <span className="text-[8px] text-amber-300 font-bold mt-1 block">⚠️ Offline</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Premium Features */}
//         <div className="bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-cyan-500/10 border border-amber-500/30 rounded-2xl p-4 mb-6">
//           <div className="flex items-center gap-2 mb-3">
//             <Crown className="w-5 h-5 text-amber-400" />
//             <h3 className="text-sm font-bold text-white">PLUS Benefits Active</h3>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {[
//               { icon: Brain, text: 'Unlimited AI Coaching' },
//               { icon: Video, text: 'All Locked Lessons' },
//               { icon: Heart, text: 'Ad-free Experience' },
//               { icon: Rocket, text: 'Priority Support' },
//             ].map((benefit, idx) => (
//               <div key={idx} className="flex items-center gap-2 bg-slate-950/50 p-2 rounded-xl">
//                 <benefit.icon className="w-4 h-4 text-amber-400" />
//                 <p className="text-[10px] text-slate-300 font-semibold">{benefit.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center text-xs text-slate-600 border-t border-slate-900 pt-4">
//           <p>© 2026 AI English Master Hub</p>
//           <p className="mt-1 flex items-center justify-center gap-2">
//             <span>v1.1.33</span>
//             <span>•</span>
//             <span>Made with ❤️ in India</span>
//             <span>•</span>
//             <span className="text-emerald-400 flex items-center gap-1">
//               <CheckCircle2 className="w-3 h-3" /> PLUS Active
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// ('use client');

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import {
//   Trophy,
//   Flame,
//   Award,
//   Star,
//   ArrowLeft,
//   Zap,
//   CheckCircle2,
//   Crown,
//   Rocket,
//   Loader2,
//   ArrowRight,
//   Mic,
//   PenTool,
//   BookOpen,
//   MessageSquare,
//   Video,
//   FileText,
//   Target,
//   Users,
// } from 'lucide-react';
// import apiClient from '@/lib/api/client'; // Ensure this path is correct

// // --- Types ---
// interface UserProfile {
//   name: string;
//   xp: number;
//   streak: number;
//   level: number;
//   rank: number;
//   totalLessons: number;
//   completedLessons: number;
// }

// interface Service {
//   id: string;
//   name: string;
//   icon: any;
//   description: string;
//   color: string;
//   endpoint: string;
//   route: string;
// }

// // --- Service Configuration (Matches your Backend Microservices) ---
// const SERVICES: Service[] = [
//   {
//     id: 'speech',
//     name: 'AI Speech Coach',
//     icon: Mic,
//     description: 'Real-time pronunciation & accent training',
//     color: 'from-cyan-500 to-blue-500',
//     endpoint: '/speech/health',
//     route: '/speech',
//   },
//   {
//     id: 'grammar',
//     name: 'Grammar Master',
//     icon: PenTool,
//     description: 'Advanced grammar lessons & exercises',
//     color: 'from-emerald-500 to-green-500',
//     endpoint: '/grammar/health',
//     route: '/grammar',
//   },
//   {
//     id: 'vocabulary',
//     name: 'Vocabulary Builder',
//     icon: BookOpen,
//     description: 'Learn new words with AI-powered flashcards',
//     color: 'from-purple-500 to-indigo-500',
//     endpoint: '/vocabulary/health',
//     route: '/vocabulary',
//   },
//   {
//     id: 'speaking',
//     name: 'Speaking Practice',
//     icon: MessageSquare,
//     description: 'AI-powered conversation simulations',
//     color: 'from-rose-500 to-pink-500',
//     endpoint: '/ai/health',
//     route: '/speaking',
//   },
//   {
//     id: 'lessons',
//     name: 'Live Video Lessons',
//     icon: Video,
//     description: 'Recorded & interactive video sessions',
//     color: 'from-orange-500 to-amber-500',
//     endpoint: '/courses/health',
//     route: '/lessons',
//   },
//   {
//     id: 'writing',
//     name: 'Writing Assistant',
//     icon: FileText,
//     description: 'AI writing feedback & improvement',
//     color: 'from-teal-500 to-cyan-500',
//     endpoint: '/ai/health',
//     route: '/writing',
//   },
//   {
//     id: 'group',
//     name: 'Group Practice',
//     icon: Users,
//     description: 'Practice with peers in group sessions',
//     color: 'from-indigo-500 to-purple-500',
//     endpoint: '/realtime/health',
//     route: '/group',
//   },
//   {
//     id: 'assessment',
//     name: 'Assessment Center',
//     icon: Target,
//     description: 'Track your progress with AI assessments',
//     color: 'from-red-500 to-orange-500',
//     endpoint: '/assessments/health',
//     route: '/assessment',
//   },
// ];

// export default function DashboardPage() {
//   const router = useRouter();
//   const [user, setUser] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [serviceStatus, setServiceStatus] = useState<Record<string, boolean>>({});
//   const [statusLoading, setStatusLoading] = useState(true);

//   // Load user profile on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await apiClient.get<{ user: UserProfile }>('/users/profile');
//         setUser(res.data.user);
//       } catch (err) {
//         // Fallback data if backend is not connected
//         setUser({
//           name: 'Mrityunjay Kumar',
//           xp: 680,
//           streak: 8,
//           level: 3,
//           rank: 1,
//           totalLessons: 12,
//           completedLessons: 8,
//         });
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Check Health of all services on mount
//   useEffect(() => {
//     const checkHealth = async () => {
//       const statuses: Record<string, boolean> = {};

//       // Check all services in parallel
//       await Promise.all(
//         SERVICES.map(async (svc) => {
//           try {
//             await apiClient.get(svc.endpoint, { timeout: 3000 });
//             statuses[svc.id] = true;
//           } catch {
//             statuses[svc.id] = false;
//           }
//         })
//       );

//       setServiceStatus(statuses);
//       setStatusLoading(false);
//     };
//     checkHealth();
//   }, []);

//   // Loading State
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="animate-spin h-12 w-12 text-purple-500 mx-auto mb-4" />
//           <p className="text-slate-400 text-sm animate-pulse">
//             Connecting to your personal AI hub...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6 font-sans">
//       <div className="max-w-7xl mx-auto space-y-8">
//         {/* --- Header --- */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/5 gap-4">
//           <div>
//             <div className="flex items-center gap-3 flex-wrap">
//               <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                 🎉 Welcome {user?.name || 'Learner'}!
//               </h1>
//               <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
//                 <Crown className="w-3 h-3" /> PLUS Active
//               </span>
//             </div>
//             <p className="text-sm text-slate-400 mt-1 flex items-center gap-2">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//               </span>
//               All systems operational
//             </p>
//           </div>
//           <button
//             onClick={() => router.push('/')}
//             className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition flex items-center gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" /> Back to Home
//           </button>
//         </div>

//         {/* --- Stats Grid --- */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[
//             { label: 'Total XP', value: user?.xp || 0, icon: Trophy, color: 'text-purple-400' },
//             {
//               label: 'Day Streak',
//               value: user?.streak || 0,
//               icon: Flame,
//               color: 'text-orange-400',
//             },
//             { label: 'Level', value: user?.level || 1, icon: Award, color: 'text-emerald-400' },
//             { label: 'Rank', value: `#${user?.rank || 1}`, icon: Star, color: 'text-amber-400' },
//           ].map((stat, idx) => (
//             <div
//               key={idx}
//               className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-center hover:bg-white/[0.06] transition group"
//             >
//               <p className={`text-2xl md:text-3xl font-black ${stat.color}`}>{stat.value}</p>
//               <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1 font-semibold">
//                 <stat.icon className="w-3 h-3" /> {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* --- Progress & Lessons --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <div className="lg:col-span-2 bg-white/[0.03] border border-white/5 rounded-2xl p-6">
//             <div className="flex justify-between text-sm mb-3 font-medium text-slate-400">
//               <span>Level {user?.level || 1}</span>
//               <span>Level {(user?.level || 1) + 1}</span>
//             </div>
//             <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
//               <div
//                 className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
//                 style={{ width: `${Math.min((((user?.xp || 0) % 100) / 100) * 100, 100)}%` }}
//               />
//             </div>
//             <p className="text-xs text-slate-500 mt-2 font-medium">
//               {100 - ((user?.xp || 0) % 100)} XP to next level
//             </p>
//           </div>

//           <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex items-center justify-around">
//             <div className="text-center">
//               <p className="text-xl font-black text-indigo-400">{user?.totalLessons || 12}</p>
//               <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
//                 Lessons
//               </p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-black text-emerald-400">{user?.completedLessons || 8}</p>
//               <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
//                 Completed
//               </p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-black text-amber-400">
//                 {Math.round(((user?.completedLessons || 8) / (user?.totalLessons || 12)) * 100)}%
//               </p>
//               <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mt-1">
//                 Progress
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* --- Quick Actions --- */}
//         <div>
//           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
//             <Rocket className="w-4 h-4 text-purple-400" /> Quick Actions
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {[
//               {
//                 name: 'AI Speech Practice',
//                 icon: Mic,
//                 color: 'from-cyan-600 to-blue-600',
//                 route: '/speech',
//               },
//               {
//                 name: 'Grammar Quiz',
//                 icon: Zap,
//                 color: 'from-emerald-600 to-green-600',
//                 route: '/grammar',
//               },
//               {
//                 name: 'Vocabulary Challenge',
//                 icon: Trophy,
//                 color: 'from-purple-600 to-indigo-600',
//                 route: '/vocabulary',
//               },
//               {
//                 name: 'Speaking Test',
//                 icon: Target,
//                 color: 'from-rose-600 to-pink-600',
//                 route: '/speaking',
//               },
//             ].map((action, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => router.push(action.route)}
//                 className={`bg-gradient-to-r ${action.color} hover:opacity-90 p-4 rounded-xl text-left transition transform hover:scale-[1.02]`}
//               >
//                 <action.icon className="w-5 h-5 mb-2" />
//                 <p className="text-sm font-bold">{action.name}</p>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* --- Upgrade to PLUS Banner --- */}
//         <div
//           className="bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-pink-500/10 border border-amber-500/30 rounded-2xl p-6 cursor-pointer hover:border-amber-500 transition group"
//           onClick={() => router.push('/plus')}
//         >
//           <div className="flex flex-col md:flex-row items-center gap-4">
//             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition shrink-0">
//               <Crown className="w-7 h-7 text-white" />
//             </div>
//             <div className="flex-1 text-center md:text-left">
//               <h4 className="font-bold text-lg text-white group-hover:text-amber-300 transition">
//                 Upgrade to PLUS
//               </h4>
//               <p className="text-sm text-slate-400">
//                 Unlock all premium features • 3-day trial @ ₹1
//               </p>
//             </div>
//             <div className="flex items-center gap-2 bg-amber-500/20 px-5 py-2.5 rounded-xl border border-amber-500/30 group-hover:bg-amber-500/30 transition">
//               <span className="text-sm font-bold text-amber-400">₹1 Trial</span>
//               <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition" />
//             </div>
//           </div>
//         </div>

//         {/* --- All Services (Live Status) --- */}
//         <div>
//           <div className="flex items-center justify-between mb-3">
//             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
//               <Crown className="w-4 h-4 text-amber-400" /> All Services{' '}
//               <span className="text-emerald-400 text-[10px] font-normal">— Unlocked</span>
//             </h3>
//             <span className="text-[10px] text-amber-400 flex items-center gap-1 border border-amber-500/20 px-2 py-1 rounded-full">
//               <CheckCircle2 className="w-3 h-3" /> PLUS Access
//             </span>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {SERVICES.map((service) => {
//               const isLive = statusLoading ? true : serviceStatus[service.id];
//               return (
//                 <div
//                   key={service.id}
//                   onClick={() => router.push(service.route)}
//                   className={`cursor-pointer bg-gradient-to-br ${service.color} p-5 rounded-xl transition transform hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group ${!isLive ? 'opacity-60 grayscale' : ''}`}
//                 >
//                   {/* Status Badge */}
//                   <div className="absolute top-2 right-2 bg-black/20 px-2 py-1 rounded-lg text-[9px] font-bold flex items-center gap-1">
//                     <span
//                       className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}
//                     ></span>
//                     {isLive ? 'Live' : 'Offline'}
//                   </div>

//                   <service.icon className="w-7 h-7 mb-3 group-hover:rotate-6 transition" />
//                   <p className="text-sm font-bold text-white">{service.name}</p>
//                   <p className="text-[10px] text-white/80 mt-1 leading-tight">
//                     {service.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* --- Footer --- */}
//         <div className="text-center text-[10px] text-slate-600 border-t border-white/5 pt-6 mt-4">
//           <p>© {new Date().getFullYear()} AI English Master Hub. All rights reserved.</p>
//           <p className="mt-1 flex items-center justify-center gap-2">
//             <span>v2.0.1</span>
//             <span>•</span>
//             <span>Made with ❤️ in India</span>
//             <span>•</span>
//             <span className="text-emerald-400 flex items-center gap-1">
//               <CheckCircle2 className="w-3 h-3" /> Live Backend Connected
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
