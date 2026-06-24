"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, Loader2 } from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "Lead Cloud Architect",
    resumeUrl: "",
    coverLetter: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const positions = ["Lead Cloud Architect", "Legal Tech UX Designer", "Full-Stack Node/Next Engineer", "SRE Compliance Auditor"];

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          position: "Lead Cloud Architect",
          resumeUrl: "",
          coverLetter: "",
        });
        setMsg(data.message || "Application recorded!");
      } else {
        setStatus("error");
        setMsg(data.error || "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMsg("Connection error occurred.");
    }
  };

  return (
    <div className="relative py-12 md:py-24">
      <div className="mesh-glow-indigo top-[15%] left-[-20%]" />
      <div className="mesh-glow-emerald top-[55%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Join our team</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Scale Your Career with Us
          </h1>
          <p className="text-slate-350 leading-relaxed">
            We build Next.js applications, integrate complex AWS pipelines, and automate corporate legal templates. Work with other senior engineers in a remote-first workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Roles list */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-display">Active Openings</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/60 border border-white/5 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white font-display">Lead Cloud Architect</span>
                  <span className="text-[10px] text-emerald-450 bg-emerald-950/20 border border-emerald-500/20 px-2 py-0.5 rounded">Full-time</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Oversee multi-tenant isolated databases schemas, Cognito SSO user directories setups, and write CDK deployment scripts.</p>
              </div>
              <div className="p-4 bg-slate-900/60 border border-white/5 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white font-display">Legal Tech UX Designer</span>
                  <span className="text-[10px] text-indigo-400 bg-indigo-950/20 border border-indigo-500/20 px-2 py-0.5 rounded">Full-time</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Design clean interface layouts for LexFlow contract builders and dynamic telemetry overview screens, targeting high accessibility.</p>
              </div>
              <div className="p-4 bg-slate-900/60 border border-white/5 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white font-display">Full-Stack Node/Next Engineer</span>
                  <span className="text-[10px] text-emerald-450 bg-emerald-950/20 border border-emerald-500/20 px-2 py-0.5 rounded">Remote</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Implement Next.js App Router route API handlers, model variables compilations, and construct Prisma schema migrations.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 glow-card p-6 md:p-8 bg-[#0a0d1e]/80 border border-white/5 rounded-2xl">
            <h3 className="text-xl font-bold text-white font-display mb-6">Submit Job Application</h3>

            {status === "success" ? (
              <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-450 mx-auto" />
                <h4 className="text-lg font-bold text-white font-display">Application Recorded</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{msg}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-950 border border-white/10 rounded-xl text-xs font-bold text-white"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                {status === "error" && (
                  <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl flex items-center gap-2 text-rose-350 text-xs">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>{msg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Target Role</label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450"
                  >
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Resume Link</label>
                  <input
                    type="url"
                    placeholder="https://drive.google.com/resume.pdf"
                    value={formData.resumeUrl}
                    onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450 font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Cover Letter</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your Next.js app, Prisma ORM, or legal workflow experiences..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold rounded-xl flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Registering candidate application...
                    </>
                  ) : (
                    <>
                      Submit Application <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
