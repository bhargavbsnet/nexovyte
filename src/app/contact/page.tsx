"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, Loader2, Calendar, Clock, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<"general" | "booking" | "demo">("general");

  // General Contact Form
  const [generalForm, setGeneralForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "AWS Consulting",
    message: "",
  });
  const [generalStatus, setGeneralStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [generalMsg, setGeneralMsg] = useState("");

  // Consultation Booking Form
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    date: "",
    timeSlot: "10:00 AM EST",
  });
  const [bookingStatus, setBookingStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [bookingMsg, setBookingMsg] = useState("");

  // Product Demo Form
  const [demoForm, setDemoForm] = useState({
    clientName: "",
    email: "",
    productType: "LexFlow Pro Team",
    message: "",
  });
  const [demoStatus, setDemoStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [demoMsg, setDemoMsg] = useState("");

  const categories = ["AWS Consulting", "SaaS Development", "Automation Systems", "Compliance Auditing", "Other"];
  const products = ["LexFlow Pro Team", "LexFlow Enterprise Vault"];
  const timeSlots = ["10:00 AM EST", "1:30 PM EST", "4:00 PM EST"];

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!generalForm.name || !generalForm.email || !generalForm.message) return;
    setGeneralStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(generalForm),
      });
      const data = await res.json();
      if (res.ok) {
        setGeneralStatus("success");
        setGeneralForm({ name: "", email: "", company: "", inquiryType: "AWS Consulting", message: "" });
        setGeneralMsg(data.message || "Message submitted successfully!");
      } else {
        setGeneralStatus("error");
        setGeneralMsg(data.error || "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      setGeneralStatus("error");
      setGeneralMsg("Connection error occurred.");
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.fullName || !bookingForm.email || !bookingForm.date) return;
    setBookingStatus("loading");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingForm),
      });
      const data = await res.json();
      if (res.ok) {
        setBookingStatus("success");
        setBookingForm({ fullName: "", email: "", date: "", timeSlot: "10:00 AM EST" });
        setBookingMsg(data.message || "Consultation call request logged!");
      } else {
        setBookingStatus("error");
        setBookingMsg(data.error || "Booking failed.");
      }
    } catch (err) {
      console.error(err);
      setBookingStatus("error");
      setBookingMsg("Connection error occurred.");
    }
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoForm.clientName || !demoForm.email || !demoForm.message) return;
    setDemoStatus("loading");

    try {
      const res = await fetch("/api/product-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(demoForm),
      });
      const data = await res.json();
      if (res.ok) {
        setDemoStatus("success");
        setDemoForm({ clientName: "", email: "", productType: "LexFlow Pro Team", message: "" });
        setDemoMsg(data.message || "Demo request recorded successfully!");
      } else {
        setDemoStatus("error");
        setDemoMsg(data.error || "Inquiry failed.");
      }
    } catch (err) {
      console.error(err);
      setDemoStatus("error");
      setDemoMsg("Connection error occurred.");
    }
  };

  return (
    <div className="relative py-12 md:py-24">
      <div className="mesh-glow-indigo top-[15%] left-[-20%]" />
      <div className="mesh-glow-emerald top-[55%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Contact Center</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Connect With Our Engineering Team
          </h1>
          <p className="text-slate-350 leading-relaxed">
            In compliance with our distributed setup, we do not operate phone queues or support physical office drop-ins. Reach us dynamically below.
          </p>
        </div>

        {/* Form Selector and Forms Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left panel selectors */}
          <div className="lg:col-span-4 space-y-2">
            <button
              onClick={() => setActiveForm("general")}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                activeForm === "general"
                  ? "bg-slate-900 border-emerald-500/20 text-emerald-450 shadow-[0_0_15px_rgba(16,185,129,0.06)]"
                  : "bg-[#0b0d1e]/50 border-white/5 text-slate-400 hover:bg-[#121526] hover:text-white"
              }`}
            >
              <span className="text-sm font-bold block font-display">General Inquiry</span>
              <span className="text-xs text-slate-500 mt-1 block">Ask about custom development services</span>
            </button>
            <button
              onClick={() => setActiveForm("booking")}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                activeForm === "booking"
                  ? "bg-slate-900 border-emerald-500/20 text-emerald-450 shadow-[0_0_15px_rgba(16,185,129,0.06)]"
                  : "bg-[#0b0d1e]/50 border-white/5 text-slate-400 hover:bg-[#121526] hover:text-white"
              }`}
            >
              <span className="text-sm font-bold block font-display">Book Solutions Call</span>
              <span className="text-xs text-slate-500 mt-1 block">Reserve a 30-minute Zoom technical review</span>
            </button>
            <button
              onClick={() => setActiveForm("demo")}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                activeForm === "demo"
                  ? "bg-slate-900 border-emerald-500/20 text-emerald-450 shadow-[0_0_15px_rgba(16,185,129,0.06)]"
                  : "bg-[#0b0d1e]/50 border-white/5 text-slate-400 hover:bg-[#121526] hover:text-white"
              }`}
            >
              <span className="text-sm font-bold block font-display">LexFlow™ Demo Request</span>
              <span className="text-xs text-slate-500 mt-1 block">Inquire about sandbox setups & onboarding</span>
            </button>
          </div>

          {/* Right Forms Panel */}
          <div className="lg:col-span-8 glow-card p-6 md:p-8 bg-[#0a0d1e]/80 border border-white/5 rounded-2xl min-h-[400px]">
            {activeForm === "general" && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white font-display">Submit General Inquiry</h3>

                {generalStatus === "success" ? (
                  <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-4 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-450 mx-auto" />
                    <h4 className="text-lg font-bold text-white font-display">Message Sent</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{generalMsg}</p>
                    <button onClick={() => setGeneralStatus("idle")} className="px-5 py-2.5 bg-slate-900 hover:bg-slate-950 border border-white/10 rounded-xl text-xs font-bold text-white">Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleGeneralSubmit} className="space-y-4">
                    {generalStatus === "error" && (
                      <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl flex items-center gap-2 text-rose-350 text-xs">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" /> <span>{generalMsg}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Name</label>
                        <input type="text" required placeholder="Alex" value={generalForm.name} onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email</label>
                        <input type="email" required placeholder="alex@agency.com" value={generalForm.email} onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Company (Optional)</label>
                        <input type="text" placeholder="Design Hub" value={generalForm.company} onChange={(e) => setGeneralForm({ ...generalForm, company: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Inquiry Type</label>
                        <select value={generalForm.inquiryType} onChange={(e) => setGeneralForm({ ...generalForm, inquiryType: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450">
                          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                      <textarea rows={4} required placeholder="Outline your requirements..." value={generalForm.message} onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450" />
                    </div>
                    <button type="submit" disabled={generalStatus === "loading"} className="w-full py-3.5 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold rounded-xl flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
                      {generalStatus === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send General Message"}
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeForm === "booking" && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white font-display">Book Solutions Call</h3>

                {bookingStatus === "success" ? (
                  <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-4 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-450 mx-auto" />
                    <h4 className="text-lg font-bold text-white font-display">Call Request Sent</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{bookingMsg}</p>
                    <button onClick={() => setBookingStatus("idle")} className="px-5 py-2.5 bg-slate-900 hover:bg-slate-950 border border-white/10 rounded-xl text-xs font-bold text-white">Book Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    {bookingStatus === "error" && (
                      <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl flex items-center gap-2 text-rose-350 text-xs">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" /> <span>{bookingMsg}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                        <input type="text" required placeholder="Rebecca" value={bookingForm.fullName} onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                        <input type="email" required placeholder="rebecca@design.com" value={bookingForm.email} onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-450" /> Target Date
                        </label>
                        <input type="date" required value={bookingForm.date} onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450 font-mono" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-indigo-400" /> Time Slot
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((ts) => (
                            <button key={ts} type="button" onClick={() => setBookingForm({ ...bookingForm, timeSlot: ts })} className={`py-2 px-1 text-[10px] font-bold font-mono rounded border transition-all ${bookingForm.timeSlot === ts ? "bg-slate-900 border-emerald-500/20 text-emerald-450" : "bg-slate-950/40 border-white/5 text-slate-400 hover:text-white"}`}>
                              {ts}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button type="submit" disabled={bookingStatus === "loading" || !bookingForm.date} className="w-full py-3.5 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold rounded-xl flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
                      {bookingStatus === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Confirm Call Invitation"}
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeForm === "demo" && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white font-display">LexFlow™ Demo Request</h3>

                {demoStatus === "success" ? (
                  <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-4 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-450 mx-auto" />
                    <h4 className="text-lg font-bold text-white font-display">Request Logged</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{demoMsg}</p>
                    <button onClick={() => setDemoStatus("idle")} className="px-5 py-2.5 bg-slate-900 hover:bg-slate-950 border border-white/10 rounded-xl text-xs font-bold text-white">Inquire Again</button>
                  </div>
                ) : (
                  <form onSubmit={handleDemoSubmit} className="space-y-4">
                    {demoStatus === "error" && (
                      <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl flex items-center gap-2 text-rose-350 text-xs">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" /> <span>{demoMsg}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Client Name / Org</label>
                        <input type="text" required placeholder="Dev Firm" value={demoForm.clientName} onChange={(e) => setDemoForm({ ...demoForm, clientName: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Work Email</label>
                        <input type="email" required placeholder="dev@firm.com" value={demoForm.email} onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Product Plan Target</label>
                      <select value={demoForm.productType} onChange={(e) => setDemoForm({ ...demoForm, productType: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450">
                        {products.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Inquiry Specifications</label>
                      <textarea rows={4} required placeholder="State your workspace requirements (user seats count, S3 locks configuration)..." value={demoForm.message} onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-450" />
                    </div>
                    <button type="submit" disabled={demoStatus === "loading"} className="w-full py-3.5 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold rounded-xl flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
                      {demoStatus === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Request LexFlow™ Sandbox Demo"}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
