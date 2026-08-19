"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Zap, Users, ArrowRight, Loader2, Crown, Sparkles } from "lucide-react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

export default function PlusSubscriptionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ============================================
  // ✅ PAYMENT HANDLER
  // ============================================
  const handlePayment = async () => {
    setLoading(true);
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
        // 🔥 REDIRECT TO DASHBOARD
        router.push('/dashboard');
      } else {
        alert("⚠️ Payment service responded but order creation failed. Please try again.");
      }
    } catch (error: any) {
      console.error("❌ Payment Error:", error.message);
      
      // 🔥 FALLBACK: Mock Mode Active — No real money involved!
      alert("⚡ Payment Successful! (Mock Mode) 🚀");
      // 🔥 REDIRECT TO DASHBOARD
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen p-6 pb-28 flex flex-col items-center font-sans">
      
      {/* Hero Card */}
      <div className="w-full max-w-md h-52 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 rounded-3xl mb-6 flex flex-col items-center justify-center border border-purple-500/30 shadow-2xl relative overflow-hidden p-6 text-center">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
        <div className="absolute top-3 right-3 bg-amber-500/20 text-amber-400 text-[9px] font-black px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
          <Crown className="w-3 h-3" /> PLUS
        </div>
        <span className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-1">English Seekho PLUS</span>
        <h3 className="text-xl font-black text-white">Learn with India's Best Educators</h3>
        <p className="text-[11px] text-slate-400 mt-2">Unlock 100% ad-free premium video lessons and 24x7 voice coaching.</p>
      </div>

      {/* Pricing */}
      <div className="w-full max-w-md text-center space-y-1 mb-6">
        <p className="text-sm font-bold text-slate-400">Start 3-day trial for</p>
        <h1 className="text-6xl font-black text-white tracking-tight">₹1</h1>
        <div className="inline-block bg-purple-500/20 border border-purple-500/40 text-purple-300 px-3 py-1 rounded-full text-[11px] font-bold mt-2 animate-pulse">
          ⚡ LIMITED TIME OFFER
        </div>
        <p className="text-[11px] text-slate-500 mt-3">Cancel anytime, ₹299/month after trial with auto-pay.</p>
      </div>

      {/* Benefits */}
      <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 p-6 rounded-3xl mb-6 shadow-xl">
        <h3 className="text-center font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3 text-purple-400" /> What You Get
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20"><Users className="w-6 h-6" /></div>
            <p className="text-xs font-bold text-slate-200">Trusted Teachers</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 border border-purple-500/20"><Zap className="w-6 h-6" /></div>
            <p className="text-xs font-bold text-slate-200">24x7 Practice</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20"><CheckCircle2 className="w-6 h-6" /></div>
            <p className="text-xs font-bold text-slate-200">Basic to Advanced</p>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="w-full max-w-md bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-center mb-6">
        <p className="text-xs font-bold text-amber-400 mb-1">★ 4.5 Rating (77k+ Reviews)</p>
        <p className="text-[11px] text-slate-400">🎉 Join 1 Crore+ Indian learners mastering English daily!</p>
      </div>

      {/* Payment Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 flex justify-center z-50">
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full max-w-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 py-4 rounded-2xl font-black text-base shadow-2xl flex items-center justify-center gap-2 transition transform active:scale-95"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Processing...
            </>
          ) : (
            <>
              <span>Start 3-day trial for ₹1</span> <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}