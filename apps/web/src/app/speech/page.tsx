'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Mic,
  MicOff,
  ArrowLeft,
  Play,
  Square,
  Volume2,
  Loader2,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Clock,
  Brain,
  Zap,
  Target,
  Globe,
  Star,
} from 'lucide-react';
import apiClient from '@/lib/api/client';

// --- Types ---
interface SpeechPracticeSession {
  id: string;
  text: string;
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number;
  topic: string;
}

export default function SpeechCoachPage() {
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [sessionData, setSessionData] = useState<SpeechPracticeSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [healthStatus, setHealthStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  // Web Speech API (Browser's native speech recognition)
  const recognitionRef = useRef<any>(null);

  // --- 1. Load Health & Session Data on Mount ---
  useEffect(() => {
    const initialize = async () => {
      try {
        // Check Speech Service Health
        await apiClient.get('/speech/health');
        setHealthStatus('online');

        // Fetch a practice session from backend
        const res = await apiClient.get<SpeechPracticeSession>('/speech/session');
        setSessionData(res.data);
      } catch (err) {
        setHealthStatus('offline');
        // Fallback session data if backend is down
        setSessionData({
          id: 'demo-1',
          text: 'The quick brown fox jumps over the lazy dog.',
          difficulty: 'easy',
          duration: 30,
          topic: 'General Pronunciation',
        });
      } finally {
        setLoading(false);
      }
    };
    initialize();
  }, []);

  // --- 2. Setup Speech Recognition ---
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // ✅ Fixed: Added 'as any' to handle TypeScript error
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: any) => {
          let finalTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            }
          }
          setTranscript((prev) => prev + finalTranscript);
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };
      } else {
        alert('Your browser does not support Speech Recognition. Please use Chrome or Edge.');
      }
    }
  }, []);

  // --- 3. Core Functions ---
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setIsProcessing(true);
      // Simulate AI Analysis (Replace this with actual API call)
      setTimeout(() => {
        setFeedback("Great pronunciation! Try stressing the word 'brown' a bit more.");
        setIsProcessing(false);
      }, 2000);
    } else {
      setTranscript('');
      setFeedback(null);
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const resetSession = () => {
    setTranscript('');
    setFeedback(null);
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }
  };

  // --- Loading State ---
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin h-12 w-12 text-purple-500 mx-auto mb-4" />
          <p className="text-slate-400 text-sm animate-pulse">Loading Speech Coach...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* --- Header --- */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/dashboard')}
              className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI Speech Coach
              </h1>
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${healthStatus === 'online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}
                ></span>
                {healthStatus === 'online' ? 'Connected to AI' : 'Offline Mode (Demo)'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium">0 XP Earned</span>
          </div>
        </div>

        {/* --- Session Info --- */}
        {sessionData && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Topic</p>
              <p className="text-sm font-semibold mt-1">{sessionData.topic}</p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Difficulty</p>
              <p
                className={`text-sm font-semibold mt-1 capitalize ${
                  sessionData.difficulty === 'easy'
                    ? 'text-green-400'
                    : sessionData.difficulty === 'medium'
                      ? 'text-yellow-400'
                      : 'text-red-400'
                }`}
              >
                {sessionData.difficulty}
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Duration</p>
              <p className="text-sm font-semibold mt-1 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" /> {sessionData.duration}s
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Status</p>
              <p
                className={`text-sm font-semibold mt-1 flex items-center justify-center gap-1 ${isListening ? 'text-green-400' : 'text-slate-400'}`}
              >
                {isListening ? (
                  <>
                    <Volume2 className="w-3 h-3 animate-pulse" /> Live
                  </>
                ) : (
                  'Ready'
                )}
              </p>
            </div>
          </div>
        )}

        {/* --- Main Practice Area --- */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          {/* Target Text to Speak */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Practice Text
            </h3>
            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
              <p className="text-lg md:text-xl font-medium text-slate-200 leading-relaxed">
                {sessionData?.text || 'No text available'}
              </p>
              <button className="mt-3 text-xs text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1">
                <Volume2 className="w-3 h-3" /> Listen to example
              </button>
            </div>
          </div>

          {/* Live Transcript Area */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Your Speech
              </h3>
              {isListening && (
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-4 bg-green-500 rounded-full animate-[pulse_0.5s_ease-in-out_infinite]"></span>
                  <span className="w-1.5 h-6 bg-green-500 rounded-full animate-[pulse_0.7s_ease-in-out_infinite]"></span>
                  <span className="w-1.5 h-3 bg-green-500 rounded-full animate-[pulse_0.4s_ease-in-out_infinite]"></span>
                  <span className="text-[10px] text-green-400 ml-1">Listening...</span>
                </div>
              )}
            </div>
            <div className="min-h-[100px] p-4 bg-black/40 rounded-xl border border-white/5">
              {transcript ? (
                <p className="text-slate-200">{transcript}</p>
              ) : (
                <p className="text-slate-600 text-sm italic">
                  {isListening ? 'Speak now...' : 'Press the microphone button to start practicing'}
                </p>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={toggleListening}
              disabled={isProcessing}
              className={`relative flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition transform active:scale-95 shadow-lg ${
                isListening
                  ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-cyan-500/25'
              } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : isListening ? (
                <MicOff className="w-6 h-6" />
              ) : (
                <Mic className="w-6 h-6" />
              )}
              <span>
                {isProcessing ? 'Analyzing...' : isListening ? 'Stop Recording' : 'Start Practice'}
              </span>
            </button>

            <button
              onClick={resetSession}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 transition"
            >
              <Square className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- AI Feedback Area --- */}
        {feedback && (
          <div className="bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-sm mb-1">AI Pronunciation Coach</h4>
                <p className="text-slate-300 text-sm">{feedback}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 85% Accuracy
                  </span>
                  <span className="text-[10px] text-amber-400 flex items-center gap-1">
                    <Target className="w-3 h-3" /> Stress: Good
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- Footer --- */}
        <div className="text-center text-[10px] text-slate-600 border-t border-white/5 pt-4">
          <p>Powered by AI Speech Service</p>
        </div>
      </div>
    </div>
  );
}
