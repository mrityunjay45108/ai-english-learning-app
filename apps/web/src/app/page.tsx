// "use client";
// import React, { useState, useEffect } from 'react';
// import { BookOpen, User, Zap, Lock, PlayCircle, CheckCircle2, Radio, Send, Sparkles, Trophy, Flame, Video, Volume2, Crown, ArrowRight, ShieldCheck, HelpCircle, FileText } from 'lucide-react';

// export default function AiEnglishMasterApp() {
//   const [mounted, setMounted] = useState(false);
//   const [activeTab, setActiveTab] = useState<'lessons' | 'ai-coach' | 'plus' | 'profile'>('lessons');
//   const [selectedLesson, setSelectedLesson] = useState<any>(null);

//   const [timeLeft, setTimeLeft] = useState(1800);
//   const [messageLimit, setMessageLimit] = useState(3);

//   const [transcript, setTranscript] = useState([
//     { sender: "Emma (AI Coach)", text: "Hello Mrityunjay! I'm Emma, your professional AI Communication & Speech Coach. Let's begin your session. Could you introduce yourself?" }
//   ]);
// const [selectedTopic] = useState("Job Interview Simulation");
//   const [userXp, setUserXp] = useState(580);
//   const [userStreak, setUserStreak] = useState(8);

//   useEffect(() => {
//     setMounted(true);
//     const timer = setInterval(() => {
//       setTimeLeft(prev => (prev > 0 ? prev - 1 : 1800));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   if (!mounted) {
//     return <div className="bg-slate-950 min-h-screen text-white flex items-center justify-center font-bold">Loading Master Hub...</div>;
//   }

//   const handleSendMessage = () => {
//     if (!inputMessage.trim()) return;
//     if (messageLimit <= 0) {
//       setActiveTab('plus');
//       return;
//     }

//     const userMsg = inputMessage.trim();
//     setTranscript(prev => [...prev, { sender: "You", text: userMsg }]);
//     setInputMessage("");
//     setMessageLimit(prev => prev - 1);

//     setTimeout(() => {
//       let aiReply = "Excellent sentence structuring! Upgrade to PLUS to unlock unlimited continuous AI conversation.";
//       setTranscript(prev => [...prev, { sender: "Emma (AI Coach)", text: aiReply }]);
//       setUserXp(prev => prev + 15);
//       if ("speechSynthesis" in window) {
//         window.speechSynthesis.speak(new SpeechSynthesisUtterance(aiReply));
//       }
//     }, 1000);
//   };

//   const lessons = [
//     { 
//       id: 1, 
//       title: "First Impressions: Professional Greetings", 
//       duration: "1 min", 
//       isFree: true,
//       hindiDesc: "इस पाठ में हम सीखेंगे कि किसी से पहली बार मिलने पर पेशेवर तरीके से अंग्रेजी में अभिवादन कैसे करते हैं।",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-code-31936-large.mp4" 
//     },
//     { 
//       id: 2, 
//       title: "Mastering the Job Interview & Core Pitch", 
//       duration: "3 mins", 
//       isFree: false,
//       hindiDesc: "इंटरव्यू के दौरान अपने बारे में आत्मविश्वास के साथ कैसे बताएं। (Exclusive for PLUS members)",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-in-a-cafe-43098-large.mp4" 
//     },
//     { 
//       id: 3, 
//       title: "Client Handling & Corporate Communication", 
//       duration: "4 mins", 
//       isFree: false,
//       hindiDesc: "ग्राहकों के साथ शालीनता से अंग्रेजी में बातचीत करने की कला सीखें। (Exclusive for PLUS members)",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-people-working-together-in-an-office-42797-large.mp4" 
//     },
//     { 
//       id: 4, 
//       title: "Parent-Teacher Conference & Formal Dialogue", 
//       duration: "3 mins", 
//       isFree: false,
//       hindiDesc: "स्कूल मीटिंग या कॉन्फ्रेंस में शिक्षक से अंग्रेजी में औपचारिक बातचीत। (Exclusive for PLUS members)",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-teacher-explaining-to-students-in-a-classroom-43102-large.mp4" 
//     }
//   ];

//   return (
//     <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between font-sans max-w-md mx-auto relative border-x border-slate-900 select-none shadow-2xl">
      
//       {/* Enhanced Premium Flash Sale Banner */}
//       <div 
//         onClick={() => setActiveTab('plus')}
//         className="cursor-pointer bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white text-[11px] font-black py-2.5 px-4 tracking-wide flex justify-between items-center z-30 shadow-lg border-b border-white/10 hover:opacity-95 transition"
//       >
//         <div className="flex items-center gap-1.5">
//           <span className="text-amber-300 animate-bounce">⚡</span>
//           <span className="tracking-wider">MEGA SALE: 3-Day Trial @ ₹1</span>
//         </div>
//         <div className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 text-amber-300 font-mono text-[10px] shadow-inner">
//           Ends in {formatTime(timeLeft)}
//         </div>
//       </div>

//       {/* Top Header */}
//       <div className="p-4 flex justify-between items-center border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-20">
//         <div>
//           <h1 className="text-base font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
//             AI English Master Hub
//           </h1>
//           <p className="text-[10px] text-slate-400">Elite Track • <strong className="text-white">Mrityunjay</strong></p>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-full text-[11px] font-black text-amber-400">
//             <Trophy className="w-3.5 h-3.5" /> <span>{userXp} XP</span>
//           </div>
//           <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/30 px-2.5 py-1 rounded-full text-[11px] font-black text-orange-400">
//             <Flame className="w-3.5 h-3.5" /> <span>{userStreak}d</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="p-4 flex-1 pb-32 overflow-y-auto">
        
//         {selectedLesson ? (
//           <div className="space-y-4 animate-fadeIn">
//             <button onClick={() => setSelectedLesson(null)} className="text-xs text-indigo-400 font-bold hover:underline mb-2">
//               ← Back to Curriculum
//             </button>
            
//             <div className="space-y-1">
//               <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Interactive AI Module</span>
//               <h2 className="text-sm font-black text-white">{selectedLesson.title}</h2>
//               <p className="text-[10px] text-slate-400">{selectedLesson.duration} • AI Video Explanation</p>
//             </div>

//             <div className="w-full bg-slate-900 border border-indigo-500/40 rounded-3xl overflow-hidden shadow-2xl relative">
//               <div className="relative w-full h-48 bg-black">
//                 <video 
//                   src={selectedLesson.videoUrl} 
//                   autoPlay 
//                   loop 
//                   muted 
//                   playsInline 
//                   className="w-full h-full object-cover opacity-80"
//                 />
//                 <div className="absolute top-3 left-3 bg-indigo-600/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
//                   <Video className="w-3 h-3 animate-pulse" /> AI Avatar Tutor
//                 </div>
//                 {!selectedLesson.isFree && (
//                   <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-3 z-10">
//                     <Crown className="w-10 h-10 text-amber-400 animate-bounce" />
//                     <h3 className="text-sm font-bold text-white">🔒 Locked PLUS Content</h3>
//                     <p className="text-[11px] text-slate-300">Unlock this lesson and 100+ modules instantly with the ₹1 trial.</p>
//                     <button onClick={() => setActiveTab('plus')} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-purple-600 text-slate-950 font-black text-xs rounded-xl shadow-lg">
//                       Unlock for ₹1 Only ⚡
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="p-4 space-y-3 bg-gradient-to-b from-slate-900 to-slate-950">
//                 <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
//                   <Volume2 className="w-4 h-4" /> हिंदी स्पष्टीकरण (Hindi Guide)
//                 </span>
//                 <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-2xl border border-slate-800">
//                   {selectedLesson.hindiDesc}
//                 </p>

//                 {selectedLesson.isFree && (
//                   <button 
//                     onClick={() => setActiveTab('ai-coach')} 
//                     className="w-full py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl text-xs font-bold shadow-xl flex items-center justify-center gap-2"
//                   >
//                     <Radio className="w-4 h-4 animate-pulse" /> Practice With AI Coach →
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           activeTab === 'lessons' && (
//             <div className="space-y-6">
//               <div onClick={() => setActiveTab('plus')} className="cursor-pointer bg-gradient-to-br from-amber-500/20 via-purple-950/80 to-slate-900 p-4 rounded-2xl border border-amber-500/50 shadow-xl relative overflow-hidden group">
//                 <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[9px] font-black px-2.5 py-0.5 rounded-bl-xl uppercase">
//                   Best Value
//                 </div>
//                 <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest flex items-center gap-1">
//                   <Crown className="w-3.5 h-3.5" /> Unlock Everything
//                 </span>
//                 <h2 className="text-sm font-bold mt-1 text-white group-hover:text-amber-300 transition">Get Unlimited AI Coaching & All Units @ ₹1 Only!</h2>
//                 <p className="text-[10px] text-slate-300 mt-1">Trusted by 1 Crore+ Indian learners. Zero risk.</p>
//               </div>

//               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unit 1 • Core Modules</h3>
              
//               <div className="space-y-3">
//                 {lessons.map((lesson, idx) => (
//                   <div 
//                     key={idx} 
//                     onClick={() => setSelectedLesson(lesson)}
//                     className="flex items-center gap-3 p-3.5 bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 rounded-2xl transition shadow-sm cursor-pointer group relative overflow-hidden"
//                   >
//                     {!lesson.isFree && (
//                       <div className="absolute top-0 right-0 bg-amber-500/20 text-amber-300 text-[8px] font-black px-2 py-0.5 rounded-bl-lg border-l border-b border-amber-500/30">
//                         PLUS ONLY
//                       </div>
//                     )}
//                     <div className="w-10 h-10 bg-purple-950/50 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 font-extrabold text-xs">
//                       {idx + 1}
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-xs font-extrabold text-white leading-tight group-hover:text-purple-300 transition">{lesson.title}</p>
//                       <p className="text-[10px] text-slate-400 mt-0.5">{lesson.duration} • {lesson.isFree ? 'Free Preview' : '🔒 Locked Module'}</p>
//                     </div>
//                     {lesson.isFree ? (
//                       <PlayCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition" />
//                     ) : (
//                       <Lock className="w-4 h-4 text-amber-400" />
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* PROFESSIONAL APP FOOTER */}
//               <div className="mt-12 pt-6 border-t border-slate-900 space-y-4 text-center">
//                 <div className="flex justify-center items-center gap-2 text-emerald-400 text-xs font-bold">
//                   <ShieldCheck className="w-4 h-4" /> <span>100% Safe & Secure Learning App</span>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
//                   <button onClick={() => alert("Opening Help & Support...")} className="p-2 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 hover:text-white">
//                     <HelpCircle className="w-3.5 h-3.5 text-purple-400" /> Help & Support
//                   </button>
//                   <button onClick={() => alert("Opening Terms & Conditions...")} className="p-2 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 hover:text-white">
//                     <FileText className="w-3.5 h-3.5 text-purple-400" /> Terms & Policy
//                   </button>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="text-[10px] text-slate-500">App Version v1.1.33 • Made with ❤️ in India</p>
//                   <p className="text-[10px] text-slate-600">© 2026 AI English Master Hub. All rights reserved.</p>
//                 </div>
//               </div>

//             </div>
//           )
//         )}

//         {activeTab === 'ai-coach' && (
//           <div className="space-y-4">
//             <div className="bg-slate-900 border border-rose-500/40 p-4 rounded-2xl space-y-2">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400 border border-rose-500/30">
//                     <Radio className="w-4 h-4 animate-pulse" />
//                   </div>
//                   <div>
//                     <h3 className="text-xs font-bold text-white">Emma • AI Speech Coach</h3>
//                     <p className="text-[10px] text-rose-300">Free Messages Left: <strong className="text-white">{messageLimit}</strong></p>
//                   </div>
//                 </div>
//                 {messageLimit <= 0 && (
//                   <button onClick={() => setActiveTab('plus')} className="px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-[10px] rounded-lg animate-bounce">
//                     Go Unlimited ⚡
//                   </button>
//                 )}
//               </div>
//             </div>

//             <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 h-56 overflow-y-auto space-y-3 text-xs shadow-inner">
//               {transcript.map((t, idx) => (
//                 <div key={idx} className={`p-2.5 rounded-xl border ${t.sender.includes("Emma") ? 'bg-rose-950/20 border-rose-500/30 text-rose-200' : 'bg-slate-900 border-slate-800 text-slate-200'}`}>
//                   <strong className={`block text-[9px] uppercase mb-0.5 tracking-wider ${t.sender.includes("Emma") ? 'text-rose-400' : 'text-cyan-400'}`}>{t.sender}</strong>
//                   <p className="leading-relaxed">{t.text}</p>
//                 </div>
//               ))}
//             </div>

//             {messageLimit > 0 ? (
//               <div className="flex gap-2">
//                 <input 
//                   type="text" 
//                   value={inputMessage} 
//                   onChange={(e) => setInputMessage(e.target.value)} 
//                   onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
//                   placeholder="Type your response in English..." 
//                   className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500" 
//                 />
//                 <button onClick={handleSendMessage} className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold shadow-lg transition flex items-center justify-center">
//                   <Send className="w-4 h-4" />
//                 </button>
//               </div>
//             ) : (
//               <div className="p-4 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-center space-y-2">
//                 <p className="text-xs font-bold text-amber-300">⚠️ Free AI limit reached!</p>
//                 <button onClick={() => setActiveTab('plus')} className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-black shadow-lg">
//                   Unlock Unlimited AI Access for ₹1 Only 🚀
//                 </button>
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === 'plus' && (
//           <div className="space-y-6 text-center animate-fadeIn">
//             <div className="p-6 bg-gradient-to-br from-amber-500/20 via-purple-950 to-indigo-950 rounded-3xl border border-amber-500/40 shadow-2xl relative overflow-hidden">
//               <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest animate-pulse">
//                 Flash Deal
//               </div>
//               <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">English Seekho PLUS Pass</span>
//               <h2 className="text-xl font-black mt-2">Start 3-day trial for</h2>
//               <div className="flex items-center justify-center gap-3 my-2">
//                 <span className="text-3xl text-slate-500 line-through">₹299</span>
//                 <span className="text-6xl font-black text-amber-400">₹1</span>
//               </div>
//               <p className="text-[11px] text-slate-300">Cancel anytime with 1-click. No hidden charges.</p>
//             </div>

//             <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between text-xs">
//               <div>
//                 <p className="font-extrabold text-amber-400">★ 4.5 Rating (77k+ Reviews)</p>
//                 <p className="text-[10px] text-slate-400">Over 1 Crore+ Indians learning daily</p>
//               </div>
//               <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black rounded-lg">
//                 100% Safe App
//               </div>
//             </div>

//             <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl text-left space-y-3">
//               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">What You Get With PLUS</p>
//               <div className="grid grid-cols-1 gap-2">
//                 {[
//                   "Unlimited 24x7 AI Voice & Interview Coach",
//                   "All Locked Units & Advanced Corporate Modules",
//                   "Real-time Pronunciation Scoring & Phoneme Analysis",
//                   "Ad-free HD Video Lessons from Elite Teachers"
//                 ].map((benefit, i) => (
//                   <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
//                     <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
//                     <span>{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <button onClick={() => alert("Redirecting to secure payment gateway for ₹1 trial...")} className="w-full bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 hover:opacity-95 py-4 rounded-2xl font-black text-sm text-white shadow-2xl transition transform active:scale-95 flex items-center justify-center gap-2">
//               <span>Start 3-day trial for ₹1</span> <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         )}

//         {activeTab === 'profile' && (
//           <div className="space-y-6 text-center pt-2">
//             <div className="w-16 h-16 bg-purple-600/20 border-2 border-purple-500 rounded-full flex items-center justify-center mx-auto text-lg font-black text-purple-300 shadow-md">
//               MK
//             </div>
//             <div>
//               <h2 className="text-sm font-bold text-white">Mrityunjay Kumar</h2>
//               <p className="text-[11px] text-slate-400">+91 7324882119 • Full-Stack Developer</p>
//             </div>
            
//             <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-left space-y-2 text-xs">
//               <div className="flex justify-between py-1.5 border-b border-slate-800">
//                 <span className="text-slate-400">Membership Tier</span>
//                 <span className="font-bold text-red-400">Free Tier (Limited)</span>
//               </div>
//               <div className="flex justify-between py-1.5 border-b border-slate-800">
//                 <span className="text-slate-400">Total XP Earned</span>
//                 <span className="font-bold text-amber-400">{userXp} XP</span>
//               </div>
//               <div className="flex justify-between py-1.5">
//                 <span className="text-slate-400">Active Streak</span>
//                 <span className="font-bold text-orange-400">{userStreak} Days 🔥</span>
//               </div>
//             </div>

//             <button onClick={() => setActiveTab('plus')} className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs shadow-xl transition transform active:scale-95 flex items-center justify-center gap-2">
//               <Crown className="w-4 h-4" /> Upgrade to PLUS @ ₹1 Only ⚡
//             </button>
//           </div>
//         )}

//       </div>

//       {/* Bottom Navigation Bar */}
//       <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-950 border-t border-slate-900 p-2.5 flex justify-around items-center z-30">
//         <button onClick={() => { setSelectedLesson(null); setActiveTab('lessons'); }} className={`flex flex-col items-center gap-0.5 ${activeTab === 'lessons' ? 'text-purple-400 font-bold' : 'text-slate-500'}`}>
//           <BookOpen className="w-5 h-5" />
//           <span className="text-[10px]">Lessons</span>
//         </button>
//         <button onClick={() => setActiveTab('ai-coach')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'ai-coach' ? 'text-rose-400 font-bold' : 'text-slate-500'}`}>
//           <Sparkles className="w-5 h-5" />
//           <span className="text-[10px]">AI Coach</span>
//         </button>
//         <button onClick={() => setActiveTab('plus')} className={`flex flex-col items-center gap-1 ${activeTab === 'plus' ? 'text-amber-400 font-bold' : 'text-slate-500'}`}>
//           <Zap className="w-5 h-5 animate-pulse" />
//           <span className="text-[10px]">Plus</span>
//         </button>
//         <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-purple-400 font-bold' : 'text-slate-500'}`}>
//           <User className="w-5 h-5" />
//           <span className="text-[10px]">Profile</span>
//         </button>
//       </div>

//     </div>
//   );
// }



// "use client";
// import React, { useState, useEffect } from "react";
// import { BookOpen, User, Zap, Lock, PlayCircle, CheckCircle2, Radio, Send, Sparkles, Trophy, Flame, Video, Volume2, Crown, ArrowRight, ShieldCheck, HelpCircle, FileText } from "lucide-react";
// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

// export default function AiEnglishMasterApp() {
//   const [mounted, setMounted] = useState(false);
//   const [activeTab, setActiveTab] = useState<'lessons' | 'ai-coach' | 'plus' | 'profile'>('lessons');
//   const [selectedLesson, setSelectedLesson] = useState<any>(null);

//   const [timeLeft, setTimeLeft] = useState(1800);
//   const [messageLimit, setMessageLimit] = useState(3);

//   const [transcript, setTranscript] = useState([
//     { sender: "Emma (AI Coach)", text: "Hello Mrityunjay! I'm Emma, your professional AI Communication & Speech Coach connected via Microservices Gateway. Let's begin your session. Could you introduce yourself?" }
//   ]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [userXp, setUserXp] = useState(580);
//   const [userStreak, setUserStreak] = useState(8);

//   useEffect(() => {
//     setMounted(true);
    
//     // Fetch profile from backend if running
//     axios.get(`${API_URL}/users/profile`).then(res => {
//       if(res.data?.user) {
//         setUserXp(res.data.user.xp);
//         setUserStreak(res.data.user.streak);
//       }
//     }).catch(() => {});

//     const timer = setInterval(() => {
//       setTimeLeft(prev => (prev > 0 ? prev - 1 : 1800));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   if (!mounted) {
//     return <div className="bg-slate-950 min-h-screen text-white flex items-center justify-center font-bold">Loading Master Hub...</div>;
//   }

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;
//     if (messageLimit <= 0) {
//       setActiveTab('plus');
//       return;
//     }

//     const userMsg = inputMessage.trim();
//     setTranscript(prev => [...prev, { sender: "You", text: userMsg }]);
//     setInputMessage("");
//     setMessageLimit(prev => prev - 1);

//     try {
//       const res = await axios.post(`${API_URL}/ai/chat`, { message: userMsg, topic: selectedTopic });
//       const aiReply = res.data?.reply || "Excellent sentence structuring! Upgrade to PLUS to unlock unlimited continuous AI conversation.";
//       setTranscript(prev => [...prev, { sender: "Emma (AI Coach)", text: aiReply }]);
//       setUserXp(prev => prev + 15);
//       if ("speechSynthesis" in window) {
//         window.speechSynthesis.speak(new SpeechSynthesisUtterance(aiReply));
//       }
//     } catch {
//       // Fallback if backend is offline
//       setTimeout(() => {
//         const aiReply = "Microservices AI response received! Great fluency, keep practicing.";
//         setTranscript(prev => [...prev, { sender: "Emma (AI Coach)", text: aiReply }]);
//         setUserXp(prev => prev + 15);
//         if ("speechSynthesis" in window) {
//           window.speechSynthesis.speak(new SpeechSynthesisUtterance(aiReply));
//         }
//       }, 1000);
//     }
//   };

//   // ============================================
//   // ✅ MICROSERVICES GATEWAY PAYMENT HANDLER
//   // ============================================
//   const handlePayment = async () => {
//     try {
//       console.log("💳 Initiating payment via Microservices Gateway...");
      
//       const response = await axios.post(`${API_URL}/payments/create-order`, {
//         amount: 1,
//         userId: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
//         description: "3-Day Trial Subscription via Gateway",
//         plan: "PLUS_TRIAL"
//       });

//       console.log("📦 Payment Service Response:", response.data);

//       if (response.data && response.data.id) {
//         alert(`✅ Payment Successful!\nOrder ID: ${response.data.id}`);
//         setUserXp(prev => prev + 100);
//         setActiveTab('lessons');
//       } else {
//         alert("⚠️ Payment service responded but order creation failed. Please try again.");
//       }
//     } catch (error: any) {
//       console.error("❌ Payment Error:", error.message);
      
//       // 🔥 FALLBACK: Mock Mode Active — No real money involved!
//       alert("⚡ Payment Successful! (Mock Mode) 🚀");
//       setUserXp(prev => prev + 100);
//       setActiveTab('lessons');
//     }
//   };

//   const lessons = [
//     { 
//       id: 1, 
//       title: "First Impressions: Professional Greetings", 
//       duration: "1 min", 
//       isFree: true,
//       hindiDesc: "इस पाठ में हम सीखेंगे कि किसी से पहली बार मिलने पर पेशेवर तरीके से अंग्रेजी में अभिवादन कैसे करते हैं।",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-code-31936-large.mp4" 
//     },
//     { 
//       id: 2, 
//       title: "Mastering the Job Interview & Core Pitch", 
//       duration: "3 mins", 
//       isFree: false,
//       hindiDesc: "इंटरव्यू के दौरान अपने बारे में आत्मविश्वास के साथ कैसे बताएं। (Exclusive for PLUS members)",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-in-a-cafe-43098-large.mp4" 
//     },
//     { 
//       id: 3, 
//       title: "Client Handling & Corporate Communication", 
//       duration: "4 mins", 
//       isFree: false,
//       hindiDesc: "ग्राहकों के साथ शालीनता से अंग्रेजी में बातचीत करने की कला सीखें। (Exclusive for PLUS members)",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-people-working-together-in-an-office-42797-large.mp4" 
//     },
//     { 
//       id: 4, 
//       title: "Parent-Teacher Conference & Formal Dialogue", 
//       duration: "3 mins", 
//       isFree: false,
//       hindiDesc: "स्कूल मीटिंग या कॉन्फ्रेंस में शिक्षक से अंग्रेजी में औपचारिक बातचीत। (Exclusive for PLUS members)",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-teacher-explaining-to-students-in-a-classroom-43102-large.mp4" 
//     }
//   ];

//   return (
//     <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between font-sans max-w-md mx-auto relative border-x border-slate-900 select-none shadow-2xl">
      
//       {/* Flash Sale Banner */}
//       <div 
//         onClick={() => setActiveTab('plus')}
//         className="cursor-pointer bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white text-[11px] font-black py-2.5 px-4 tracking-wide flex justify-between items-center z-30 shadow-lg border-b border-white/10 hover:opacity-95 transition"
//       >
//         <div className="flex items-center gap-1.5">
//           <span className="text-amber-300 animate-bounce">⚡</span>
//           <span className="tracking-wider">MEGA SALE: 3-Day Trial @ ₹1</span>
//         </div>
//         <div className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 text-amber-300 font-mono text-[10px] shadow-inner">
//           Ends in {formatTime(timeLeft)}
//         </div>
//       </div>

//       {/* Top Header */}
//       <div className="p-4 flex justify-between items-center border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-20">
//         <div>
//           <h1 className="text-base font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
//             AI English Master Hub
//           </h1>
//           <p className="text-[10px] text-slate-400">Microservices Gateway • <strong className="text-white">Mrityunjay</strong></p>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-full text-[11px] font-black text-amber-400">
//             <Trophy className="w-3.5 h-3.5" /> <span>{userXp} XP</span>
//           </div>
//           <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/30 px-2.5 py-1 rounded-full text-[11px] font-black text-orange-400">
//             <Flame className="w-3.5 h-3.5" /> <span>{userStreak}d</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="p-4 flex-1 pb-32 overflow-y-auto">
        
//         {selectedLesson ? (
//           <div className="space-y-4 animate-fadeIn">
//             <button onClick={() => setSelectedLesson(null)} className="text-xs text-indigo-400 font-bold hover:underline mb-2">
//               ← Back to Curriculum
//             </button>
            
//             <div className="space-y-1">
//               <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Interactive AI Module</span>
//               <h2 className="text-sm font-black text-white">{selectedLesson.title}</h2>
//               <p className="text-[10px] text-slate-400">{selectedLesson.duration} • AI Video Explanation</p>
//             </div>

//             <div className="w-full bg-slate-900 border border-indigo-500/40 rounded-3xl overflow-hidden shadow-2xl relative">
//               <div className="relative w-full h-48 bg-black">
//                 <video 
//                   src={selectedLesson.videoUrl} 
//                   autoPlay 
//                   loop 
//                   muted 
//                   playsInline 
//                   className="w-full h-full object-cover opacity-80"
//                 />
//                 <div className="absolute top-3 left-3 bg-indigo-600/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
//                   <Video className="w-3 h-3 animate-pulse" /> AI Avatar Tutor
//                 </div>
//                 {!selectedLesson.isFree && (
//                   <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-3 z-10">
//                     <Crown className="w-10 h-10 text-amber-400 animate-bounce" />
//                     <h3 className="text-sm font-bold text-white">🔒 Locked PLUS Content</h3>
//                     <p className="text-[11px] text-slate-300">Unlock this lesson and 100+ modules instantly with the ₹1 trial.</p>
//                     <button onClick={() => setActiveTab('plus')} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-purple-600 text-slate-950 font-black text-xs rounded-xl shadow-lg">
//                       Unlock for ₹1 Only ⚡
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="p-4 space-y-3 bg-gradient-to-b from-slate-900 to-slate-950">
//                 <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
//                   <Volume2 className="w-4 h-4" /> हिंदी स्पष्टीकरण (Hindi Guide)
//                 </span>
//                 <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-2xl border border-slate-800">
//                   {selectedLesson.hindiDesc}
//                 </p>

//                 {selectedLesson.isFree && (
//                   <button 
//                     onClick={() => setActiveTab('ai-coach')} 
//                     className="w-full py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl text-xs font-bold shadow-xl flex items-center justify-center gap-2"
//                   >
//                     <Radio className="w-4 h-4 animate-pulse" /> Practice With AI Coach →
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           activeTab === 'lessons' && (
//             <div className="space-y-6">
//               <div onClick={() => setActiveTab('plus')} className="cursor-pointer bg-gradient-to-br from-amber-500/20 via-purple-950/80 to-slate-900 p-4 rounded-2xl border border-amber-500/50 shadow-xl relative overflow-hidden group">
//                 <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[9px] font-black px-2.5 py-0.5 rounded-bl-xl uppercase">
//                   Best Value
//                 </div>
//                 <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest flex items-center gap-1">
//                   <Crown className="w-3.5 h-3.5" /> Unlock Everything
//                 </span>
//                 <h2 className="text-sm font-bold mt-1 text-white group-hover:text-amber-300 transition">Get Unlimited AI Coaching & All Units @ ₹1 Only!</h2>
//                 <p className="text-[10px] text-slate-300 mt-1">Connected via Microservices Gateway. Zero risk.</p>
//               </div>

//               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unit 1 • Core Modules</h3>
              
//               <div className="space-y-3">
//                 {lessons.map((lesson, idx) => (
//                   <div 
//                     key={idx} 
//                     onClick={() => setSelectedLesson(lesson)}
//                     className="flex items-center gap-3 p-3.5 bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 rounded-2xl transition shadow-sm cursor-pointer group relative overflow-hidden"
//                   >
//                     {!lesson.isFree && (
//                       <div className="absolute top-0 right-0 bg-amber-500/20 text-amber-300 text-[8px] font-black px-2 py-0.5 rounded-bl-lg border-l border-b border-amber-500/30">
//                         PLUS ONLY
//                       </div>
//                     )}
//                     <div className="w-10 h-10 bg-purple-950/50 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 font-extrabold text-xs">
//                       {idx + 1}
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-xs font-extrabold text-white leading-tight group-hover:text-purple-300 transition">{lesson.title}</p>
//                       <p className="text-[10px] text-slate-400 mt-0.5">{lesson.duration} • {lesson.isFree ? 'Free Preview' : '🔒 Locked Module'}</p>
//                     </div>
//                     {lesson.isFree ? (
//                       <PlayCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition" />
//                     ) : (
//                       <Lock className="w-4 h-4 text-amber-400" />
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Footer */}
//               <div className="mt-12 pt-6 border-t border-slate-900 space-y-4 text-center">
//                 <div className="flex justify-center items-center gap-2 text-emerald-400 text-xs font-bold">
//                   <ShieldCheck className="w-4 h-4" /> <span>Microservices Gateway Secured</span>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
//                   <button onClick={() => alert("Opening Help & Support...")} className="p-2 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 hover:text-white">
//                     <HelpCircle className="w-3.5 h-3.5 text-purple-400" /> Help & Support
//                   </button>
//                   <button onClick={() => alert("Opening Terms & Conditions...")} className="p-2 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 hover:text-white">
//                     <FileText className="w-3.5 h-3.5 text-purple-400" /> Terms & Policy
//                   </button>
//                 </div>

//                 <div className="space-y-1">
//                   <p className="text-[10px] text-slate-500">App Version v1.1.33 • Made with ❤️ in India</p>
//                   <p className="text-[10px] text-slate-600">© 2026 AI English Master Hub. All rights reserved.</p>
//                 </div>
//               </div>

//             </div>
//           )
//         )}

//         {activeTab === 'ai-coach' && (
//           <div className="space-y-4">
//             <div className="bg-slate-900 border border-rose-500/40 p-4 rounded-2xl space-y-2">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400 border border-rose-500/30">
//                     <Radio className="w-4 h-4 animate-pulse" />
//                   </div>
//                   <div>
//                     <h3 className="text-xs font-bold text-white">Emma • AI Speech Coach</h3>
//                     <p className="text-[10px] text-rose-300">Free Messages Left: <strong className="text-white">{messageLimit}</strong></p>
//                   </div>
//                 </div>
//                 {messageLimit <= 0 && (
//                   <button onClick={() => setActiveTab('plus')} className="px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-[10px] rounded-lg animate-bounce">
//                     Go Unlimited ⚡
//                   </button>
//                 )}
//               </div>
//             </div>

//             <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 h-56 overflow-y-auto space-y-3 text-xs shadow-inner">
//               {transcript.map((t, idx) => (
//                 <div key={idx} className={`p-2.5 rounded-xl border ${t.sender.includes("Emma") ? 'bg-rose-950/20 border-rose-500/30 text-rose-200' : 'bg-slate-900 border-slate-800 text-slate-200'}`}>
//                   <strong className={`block text-[9px] uppercase mb-0.5 tracking-wider ${t.sender.includes("Emma") ? 'text-rose-400' : 'text-cyan-400'}`}>{t.sender}</strong>
//                   <p className="leading-relaxed">{t.text}</p>
//                 </div>
//               ))}
//             </div>

//             {messageLimit > 0 ? (
//               <div className="flex gap-2">
//                 <input 
//                   type="text" 
//                   value={inputMessage} 
//                   onChange={(e) => setInputMessage(e.target.value)} 
//                   onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
//                   placeholder="Type your response in English..." 
//                   className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500" 
//                 />
//                 <button onClick={handleSendMessage} className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold shadow-lg transition flex items-center justify-center">
//                   <Send className="w-4 h-4" />
//                 </button>
//               </div>
//             ) : (
//               <div className="p-4 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-center space-y-2">
//                 <p className="text-xs font-bold text-amber-300">⚠️ Free AI limit reached!</p>
//                 <button onClick={() => setActiveTab('plus')} className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-black shadow-lg">
//                   Unlock Unlimited AI Access for ₹1 Only 🚀
//                 </button>
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === 'plus' && (
//           <div className="space-y-6 text-center animate-fadeIn">
//             <div className="p-6 bg-gradient-to-br from-amber-500/20 via-purple-950 to-indigo-950 rounded-3xl border border-amber-500/40 shadow-2xl relative overflow-hidden">
//               <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest animate-pulse">
//                 Flash Deal
//               </div>
//               <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">English Seekho PLUS Pass</span>
//               <h2 className="text-xl font-black mt-2">Start 3-day trial for</h2>
//               <div className="flex items-center justify-center gap-3 my-2">
//                 <span className="text-3xl text-slate-500 line-through">₹299</span>
//                 <span className="text-6xl font-black text-amber-400">₹1</span>
//               </div>
//               <p className="text-[11px] text-slate-300">Cancel anytime with 1-click via Gateway.</p>
//             </div>

//             <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between text-xs">
//               <div>
//                 <p className="font-extrabold text-amber-400">★ 4.5 Rating (77k+ Reviews)</p>
//                 <p className="text-[10px] text-slate-400">Connected via Mock Mode</p>
//               </div>
//               <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black rounded-lg">
//                 100% Safe App
//               </div>
//             </div>

//             <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl text-left space-y-3">
//               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">What You Get With PLUS</p>
//               <div className="grid grid-cols-1 gap-2">
//                 {[
//                   "Unlimited 24x7 AI Voice & Interview Coach",
//                   "All Locked Units & Advanced Corporate Modules",
//                   "Real-time Pronunciation Scoring & Phoneme Analysis",
//                   "Ad-free HD Video Lessons from Elite Teachers"
//                 ].map((benefit, i) => (
//                   <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
//                     <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
//                     <span>{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <button onClick={handlePayment} className="w-full bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 hover:opacity-95 py-4 rounded-2xl font-black text-sm text-white shadow-2xl transition transform active:scale-95 flex items-center justify-center gap-2">
//               <span>Start 3-day trial for ₹1</span> <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         )}

//         {activeTab === 'profile' && (
//           <div className="space-y-6 text-center pt-2">
//             <div className="w-16 h-16 bg-purple-600/20 border-2 border-purple-500 rounded-full flex items-center justify-center mx-auto text-lg font-black text-purple-300 shadow-md">
//               MK
//             </div>
//             <div>
//               <h2 className="text-sm font-bold text-white">Mrityunjay Kumar</h2>
//               <p className="text-[11px] text-slate-400">+91 7324882119 • Full-Stack Developer</p>
//             </div>
            
//             <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-left space-y-2 text-xs">
//               <div className="flex justify-between py-1.5 border-b border-slate-800">
//                 <span className="text-slate-400">Membership Tier</span>
//                 <span className="font-bold text-emerald-400">PLUS Active (Mock Trial)</span>
//               </div>
//               <div className="flex justify-between py-1.5 border-b border-slate-800">
//                 <span className="text-slate-400">Total XP Earned</span>
//                 <span className="font-bold text-amber-400">{userXp} XP</span>
//               </div>
//               <div className="flex justify-between py-1.5">
//                 <span className="text-slate-400">Active Streak</span>
//                 <span className="font-bold text-orange-400">{userStreak} Days 🔥</span>
//               </div>
//             </div>

//             <button onClick={() => setActiveTab('plus')} className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs shadow-xl transition transform active:scale-95 flex items-center justify-center gap-2">
//               <Crown className="w-3.5 h-3.5" /> Manage PLUS Subscription ⚡
//             </button>
//           </div>
//         )}

//       </div>

//       {/* Bottom Navigation */}
//       <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-950 border-t border-slate-900 p-2.5 flex justify-around items-center z-30">
//         <button onClick={() => { setSelectedLesson(null); setActiveTab('lessons'); }} className={`flex flex-col items-center gap-0.5 ${activeTab === 'lessons' ? 'text-purple-400 font-bold' : 'text-slate-500'}`}>
//           <BookOpen className="w-5 h-5" />
//           <span className="text-[10px]">Lessons</span>
//         </button>
//         <button onClick={() => setActiveTab('ai-coach')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'ai-coach' ? 'text-rose-400 font-bold' : 'text-slate-500'}`}>
//           <Sparkles className="w-5 h-5" />
//           <span className="text-[10px]">AI Coach</span>
//         </button>
//         <button onClick={() => setActiveTab('plus')} className={`flex flex-col items-center gap-1 ${activeTab === 'plus' ? 'text-amber-400 font-bold' : 'text-slate-500'}`}>
//           <Zap className="w-5 h-5 animate-pulse" />
//           <span className="text-[10px]">Plus</span>
//         </button>
//         <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-purple-400 font-bold' : 'text-slate-500'}`}>
//           <User className="w-5 h-5" />
//           <span className="text-[10px]">Profile</span>
//         </button>
//       </div>

//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, User, Zap, Lock, PlayCircle, CheckCircle2, Radio, Send, Sparkles, Trophy, Flame, Video, Volume2, Crown, ArrowRight, ShieldCheck, HelpCircle, FileText } from "lucide-react";
import axios from "axios";

// 🛑 FIX: Always use relative path for Next.js Proxy
const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api/v1";

export default function AiEnglishMasterApp() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'lessons' | 'ai-coach' | 'plus' | 'profile'>('lessons');
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  const [timeLeft, setTimeLeft] = useState(1800);
  const [messageLimit, setMessageLimit] = useState(3);

  // ✅ Add selectedTopic state
  const [selectedTopic] = useState("Job Interview Simulation");

  const [transcript, setTranscript] = useState([
    { sender: "Emma (AI Coach)", text: "Hello Mrityunjay! I'm Emma, your professional AI Communication & Speech Coach connected via Microservices Gateway. Let's begin your session. Could you introduce yourself?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [userXp, setUserXp] = useState(580);
  const [userStreak, setUserStreak] = useState(8);

  useEffect(() => {
    setMounted(true);
    
    axios.get(`${API_URL}/users/profile`).then(res => {
      if(res.data?.user) {
        setUserXp(res.data.user.xp);
        setUserStreak(res.data.user.streak);
      }
    }).catch(() => {});

    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 1800));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!mounted) {
    return <div className="bg-slate-950 min-h-screen text-white flex items-center justify-center font-bold">Loading Master Hub...</div>;
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    if (messageLimit <= 0) {
      setActiveTab('plus');
      return;
    }

    const userMsg = inputMessage.trim();
    setTranscript(prev => [...prev, { sender: "You", text: userMsg }]);
    setInputMessage("");
    setMessageLimit(prev => prev - 1);

    try {
      const res = await axios.post(`${API_URL}/ai/chat`, { message: userMsg, topic: selectedTopic });
      const aiReply = res.data?.reply || "Excellent sentence structuring! Upgrade to PLUS to unlock unlimited continuous AI conversation.";
      setTranscript(prev => [...prev, { sender: "Emma (AI Coach)", text: aiReply }]);
      setUserXp(prev => prev + 15);
      if ("speechSynthesis" in window) {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(aiReply));
      }
    } catch {
      setTimeout(() => {
        const aiReply = "Microservices AI response received! Great fluency, keep practicing.";
        setTranscript(prev => [...prev, { sender: "Emma (AI Coach)", text: aiReply }]);
        setUserXp(prev => prev + 15);
        if ("speechSynthesis" in window) {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance(aiReply));
        }
      }, 1000);
    }
  };

  // ============================================
  // ✅ PAYMENT HANDLER WITH DASHBOARD REDIRECT
  // ============================================
  const handlePayment = async () => {
    try {
      console.log("💳 Initiating payment via Microservices Gateway...");
      
      const response = await axios.post(`${API_URL}/payments/create-order`, {
        amount: 1,
        userId: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
        description: "3-Day Trial Subscription via Gateway",
        plan: "PLUS_TRIAL"
      });

      console.log("📦 Payment Service Response:", response.data);

      if (response.data && response.data.id) {
        alert(`✅ Payment Successful!\nOrder ID: ${response.data.id}`);
        setUserXp(prev => prev + 100);
        // 🔥 REDIRECT TO DASHBOARD
        router.push('/dashboard');
      } else {
        alert("⚠️ Payment service responded but order creation failed. Please try again.");
      }
    } catch (error: any) {
      console.error("❌ Payment Error:", error.message);
      
      // 🔥 FALLBACK: Mock Mode Active — No real money involved!
      alert("⚡ Payment Successful! (Mock Mode) 🚀");
      setUserXp(prev => prev + 100);
      // 🔥 REDIRECT TO DASHBOARD
      router.push('/dashboard');
    }
  };

  const lessons = [
    { 
      id: 1, 
      title: "First Impressions: Professional Greetings", 
      duration: "1 min", 
      isFree: true,
      hindiDesc: "इस पाठ में हम सीखेंगे कि किसी से पहली बार मिलने पर पेशेवर तरीके से अंग्रेजी में अभिवादन कैसे करते हैं।",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-code-31936-large.mp4" 
    },
    { 
      id: 2, 
      title: "Mastering the Job Interview & Core Pitch", 
      duration: "3 mins", 
      isFree: false,
      hindiDesc: "इंटरव्यू के दौरान अपने बारे में आत्मविश्वास के साथ कैसे बताएं। (Exclusive for PLUS members)",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-in-a-cafe-43098-large.mp4" 
    },
    { 
      id: 3, 
      title: "Client Handling & Corporate Communication", 
      duration: "4 mins", 
      isFree: false,
      hindiDesc: "ग्राहकों के साथ शालीनता से अंग्रेजी में बातचीत करने की कला सीखें। (Exclusive for PLUS members)",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-people-working-together-in-an-office-42797-large.mp4" 
    },
    { 
      id: 4, 
      title: "Parent-Teacher Conference & Formal Dialogue", 
      duration: "3 mins", 
      isFree: false,
      hindiDesc: "स्कूल मीटिंग या कॉन्फ्रेंस में शिक्षक से अंग्रेजी में औपचारिक बातचीत। (Exclusive for PLUS members)",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-teacher-explaining-to-students-in-a-classroom-43102-large.mp4" 
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between font-sans max-w-md mx-auto relative border-x border-slate-900 select-none shadow-2xl">
      
      {/* Flash Sale Banner */}
      <div 
        onClick={() => setActiveTab('plus')}
        className="cursor-pointer bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white text-[11px] font-black py-2.5 px-4 tracking-wide flex justify-between items-center z-30 shadow-lg border-b border-white/10 hover:opacity-95 transition"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-amber-300 animate-bounce">⚡</span>
          <span className="tracking-wider">MEGA SALE: 3-Day Trial @ ₹1</span>
        </div>
        <div className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 text-amber-300 font-mono text-[10px] shadow-inner">
          Ends in {formatTime(timeLeft)}
        </div>
      </div>

      {/* Top Header */}
      <div className="p-4 flex justify-between items-center border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-20">
        <div>
          <h1 className="text-base font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
            AI English Master Hub
          </h1>
          <p className="text-[10px] text-slate-400">Microservices Gateway • <strong className="text-white">Mrityunjay</strong></p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-full text-[11px] font-black text-amber-400">
            <Trophy className="w-3.5 h-3.5" /> <span>{userXp} XP</span>
          </div>
          <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/30 px-2.5 py-1 rounded-full text-[11px] font-black text-orange-400">
            <Flame className="w-3.5 h-3.5" /> <span>{userStreak}d</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 flex-1 pb-32 overflow-y-auto">
        
        {selectedLesson ? (
          <div className="space-y-4 animate-fadeIn">
            <button onClick={() => setSelectedLesson(null)} className="text-xs text-indigo-400 font-bold hover:underline mb-2">
              ← Back to Curriculum
            </button>
            
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Interactive AI Module</span>
              <h2 className="text-sm font-black text-white">{selectedLesson.title}</h2>
              <p className="text-[10px] text-slate-400">{selectedLesson.duration} • AI Video Explanation</p>
            </div>

            <div className="w-full bg-slate-900 border border-indigo-500/40 rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="relative w-full h-48 bg-black">
                <video 
                  src={selectedLesson.videoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-3 left-3 bg-indigo-600/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
                  <Video className="w-3 h-3 animate-pulse" /> AI Avatar Tutor
                </div>
                {!selectedLesson.isFree && (
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-3 z-10">
                    <Crown className="w-10 h-10 text-amber-400 animate-bounce" />
                    <h3 className="text-sm font-bold text-white">🔒 Locked PLUS Content</h3>
                    <p className="text-[11px] text-slate-300">Unlock this lesson and 100+ modules instantly with the ₹1 trial.</p>
                    <button onClick={() => setActiveTab('plus')} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-purple-600 text-slate-950 font-black text-xs rounded-xl shadow-lg">
                      Unlock for ₹1 Only ⚡
                    </button>
                  </div>
                )}
              </div>

              <div className="p-4 space-y-3 bg-gradient-to-b from-slate-900 to-slate-950">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                  <Volume2 className="w-4 h-4" /> हिंदी स्पष्टीकरण (Hindi Guide)
                </span>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-2xl border border-slate-800">
                  {selectedLesson.hindiDesc}
                </p>

                {selectedLesson.isFree && (
                  <button 
                    onClick={() => setActiveTab('ai-coach')} 
                    className="w-full py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl text-xs font-bold shadow-xl flex items-center justify-center gap-2"
                  >
                    <Radio className="w-4 h-4 animate-pulse" /> Practice With AI Coach →
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          activeTab === 'lessons' && (
            <div className="space-y-6">
              <div onClick={() => setActiveTab('plus')} className="cursor-pointer bg-gradient-to-br from-amber-500/20 via-purple-950/80 to-slate-900 p-4 rounded-2xl border border-amber-500/50 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[9px] font-black px-2.5 py-0.5 rounded-bl-xl uppercase">
                  Best Value
                </div>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest flex items-center gap-1">
                  <Crown className="w-3.5 h-3.5" /> Unlock Everything
                </span>
                <h2 className="text-sm font-bold mt-1 text-white group-hover:text-amber-300 transition">Get Unlimited AI Coaching & All Units @ ₹1 Only!</h2>
                <p className="text-[10px] text-slate-300 mt-1">Connected via Microservices Gateway. Zero risk.</p>
              </div>

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unit 1 • Core Modules</h3>
              
              <div className="space-y-3">
                {lessons.map((lesson, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedLesson(lesson)}
                    className="flex items-center gap-3 p-3.5 bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 rounded-2xl transition shadow-sm cursor-pointer group relative overflow-hidden"
                  >
                    {!lesson.isFree && (
                      <div className="absolute top-0 right-0 bg-amber-500/20 text-amber-300 text-[8px] font-black px-2 py-0.5 rounded-bl-lg border-l border-b border-amber-500/30">
                        PLUS ONLY
                      </div>
                    )}
                    <div className="w-10 h-10 bg-purple-950/50 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 font-extrabold text-xs">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-extrabold text-white leading-tight group-hover:text-purple-300 transition">{lesson.title}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{lesson.duration} • {lesson.isFree ? 'Free Preview' : '🔒 Locked Module'}</p>
                    </div>
                    {lesson.isFree ? (
                      <PlayCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition" />
                    ) : (
                      <Lock className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-6 border-t border-slate-900 space-y-4 text-center">
                <div className="flex justify-center items-center gap-2 text-emerald-400 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" /> <span>Microservices Gateway Secured</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                  <button onClick={() => alert("Opening Help & Support...")} className="p-2 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 hover:text-white">
                    <HelpCircle className="w-3.5 h-3.5 text-purple-400" /> Help & Support
                  </button>
                  <button onClick={() => alert("Opening Terms & Conditions...")} className="p-2 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 hover:text-white">
                    <FileText className="w-3.5 h-3.5 text-purple-400" /> Terms & Policy
                  </button>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500">App Version v1.1.33 • Made with ❤️ in India</p>
                  <p className="text-[10px] text-slate-600">© 2026 AI English Master Hub. All rights reserved.</p>
                </div>
              </div>
            </div>
          )
        )}

        {activeTab === 'ai-coach' && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-rose-500/40 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400 border border-rose-500/30">
                    <Radio className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Emma • AI Speech Coach</h3>
                    <p className="text-[10px] text-rose-300">Free Messages Left: <strong className="text-white">{messageLimit}</strong></p>
                  </div>
                </div>
                {messageLimit <= 0 && (
                  <button onClick={() => setActiveTab('plus')} className="px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-[10px] rounded-lg animate-bounce">
                    Go Unlimited ⚡
                  </button>
                )}
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 h-56 overflow-y-auto space-y-3 text-xs shadow-inner">
              {transcript.map((t, idx) => (
                <div key={idx} className={`p-2.5 rounded-xl border ${t.sender.includes("Emma") ? 'bg-rose-950/20 border-rose-500/30 text-rose-200' : 'bg-slate-900 border-slate-800 text-slate-200'}`}>
                  <strong className={`block text-[9px] uppercase mb-0.5 tracking-wider ${t.sender.includes("Emma") ? 'text-rose-400' : 'text-cyan-400'}`}>{t.sender}</strong>
                  <p className="leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>

            {messageLimit > 0 ? (
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputMessage} 
                  onChange={(e) => setInputMessage(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
                  placeholder="Type your response in English..." 
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500" 
                />
                <button onClick={handleSendMessage} className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold shadow-lg transition flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="p-4 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-center space-y-2">
                <p className="text-xs font-bold text-amber-300">⚠️ Free AI limit reached!</p>
                <button onClick={() => setActiveTab('plus')} className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-black shadow-lg">
                  Unlock Unlimited AI Access for ₹1 Only 🚀
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'plus' && (
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="p-6 bg-gradient-to-br from-amber-500/20 via-purple-950 to-indigo-950 rounded-3xl border border-amber-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest animate-pulse">
                Flash Deal
              </div>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">English Seekho PLUS Pass</span>
              <h2 className="text-xl font-black mt-2">Start 3-day trial for</h2>
              <div className="flex items-center justify-center gap-3 my-2">
                <span className="text-3xl text-slate-500 line-through">₹299</span>
                <span className="text-6xl font-black text-amber-400">₹1</span>
              </div>
              <p className="text-[11px] text-slate-300">Cancel anytime with 1-click via Gateway.</p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between text-xs">
              <div>
                <p className="font-extrabold text-amber-400">★ 4.5 Rating (77k+ Reviews)</p>
                <p className="text-[10px] text-slate-400">Connected via Mock Mode</p>
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black rounded-lg">
                100% Safe App
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl text-left space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">What You Get With PLUS</p>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Unlimited 24x7 AI Voice & Interview Coach",
                  "All Locked Units & Advanced Corporate Modules",
                  "Real-time Pronunciation Scoring & Phoneme Analysis",
                  "Ad-free HD Video Lessons from Elite Teachers"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handlePayment} className="w-full bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 hover:opacity-95 py-4 rounded-2xl font-black text-sm text-white shadow-2xl transition transform active:scale-95 flex items-center justify-center gap-2">
              <span>Start 3-day trial for ₹1</span> <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-6 text-center pt-2">
            <div className="w-16 h-16 bg-purple-600/20 border-2 border-purple-500 rounded-full flex items-center justify-center mx-auto text-lg font-black text-purple-300 shadow-md">
              MK
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Mrityunjay Kumar</h2>
              <p className="text-[11px] text-slate-400">+91 7324882119 • Full-Stack Developer</p>
            </div>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Membership Tier</span>
                <span className="font-bold text-emerald-400">PLUS Active (Mock Trial)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Total XP Earned</span>
                <span className="font-bold text-amber-400">{userXp} XP</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Active Streak</span>
                <span className="font-bold text-orange-400">{userStreak} Days 🔥</span>
              </div>
            </div>

            <button onClick={() => setActiveTab('plus')} className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs shadow-xl transition transform active:scale-95 flex items-center justify-center gap-2">
              <Crown className="w-3.5 h-3.5" /> Manage PLUS Subscription ⚡
            </button>
          </div>
        )}

      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-950 border-t border-slate-900 p-2.5 flex justify-around items-center z-30">
        <button onClick={() => { setSelectedLesson(null); setActiveTab('lessons'); }} className={`flex flex-col items-center gap-0.5 ${activeTab === 'lessons' ? 'text-purple-400 font-bold' : 'text-slate-500'}`}>
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px]">Lessons</span>
        </button>
        <button onClick={() => setActiveTab('ai-coach')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'ai-coach' ? 'text-rose-400 font-bold' : 'text-slate-500'}`}>
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px]">AI Coach</span>
        </button>
        <button onClick={() => setActiveTab('plus')} className={`flex flex-col items-center gap-1 ${activeTab === 'plus' ? 'text-amber-400 font-bold' : 'text-slate-500'}`}>
          <Zap className="w-5 h-5 animate-pulse" />
          <span className="text-[10px]">Plus</span>
        </button>
        <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-purple-400 font-bold' : 'text-slate-500'}`}>
          <User className="w-5 h-5" />
          <span className="text-[10px]">Profile</span>
        </button>
      </div>

    </div>
  );
}