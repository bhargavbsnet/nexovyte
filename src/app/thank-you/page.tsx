import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="relative py-24 md:py-32 max-w-2xl mx-auto px-4 text-center min-h-[70vh] flex flex-col justify-center">
      <div className="mesh-glow-emerald top-[20%] left-[-15%]" />
      <div className="space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-450 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Action Confirmed</h1>
        <p className="text-slate-350 text-sm max-w-md mx-auto leading-relaxed">
          Thank you! Your submission has been securely logged on our serverless database. A solutions engineer will review the details and connect shortly.
        </p>
        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
          >
            Return to Homepage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
