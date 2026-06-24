"use client";

import React from "react";
import { User, Users, Briefcase, Megaphone, Laptop, PenTool, Flame, Target, ShieldAlert, CheckCircle } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Freelancers",
      icon: User,
      desc: "Fast service agreements with variable templates. Collect legal e-signatures instantly on mobile or desktop.",
      compliance: "ESIGN & UETA Compliant",
    },
    {
      title: "Digital Agencies",
      icon: Users,
      desc: "Role-based user permissions directories (Cognito). Organize client contracts, scopes, and NDAs in unified dashboards.",
      compliance: "Cognito Auth Isolated",
    },
    {
      title: "Independent Consultants",
      icon: Briefcase,
      desc: "Compile detailed retainer contracts, IP assignments, and liability disclosures in a few clicks.",
      compliance: "KMS Envelope Encrypted",
    },
    {
      title: "Marketing Firms",
      icon: Megaphone,
      desc: "Issue immediate mutual NDAs and project scope templates. Track change order sign-offs dynamically.",
      compliance: "Audit Trail Tracked",
    },
    {
      title: "Software Companies",
      icon: Laptop,
      desc: "Secure software IP ownership transfers and contractor coding scopes. Hook APIs directly to developer systems.",
      compliance: "REST Webhook Triggers",
    },
    {
      title: "Designers & Creators",
      icon: PenTool,
      desc: "Deliver final project completion sign-offs to trigger invoice terms, protecting designs from payment leaks.",
      compliance: "PDF Sign-off Archives",
    },
    {
      title: "Coaches & Advisors",
      icon: Target,
      desc: "Automate new student onboarding waivers, liability checklists, and sync schedule calendars.",
      compliance: "Cognito User Checkpoint",
    },
    {
      title: "Independent Contractors",
      icon: Flame,
      desc: "Program standard independent contractor templates and invoicing terms. Store audit logs inside S3 folders.",
      compliance: "S3 Object Lock WORM",
    },
    {
      title: "Startups & Scaleups",
      icon: ShieldAlert,
      desc: "Generate early IP transfers, advisors options pool documents, and secure contracts histories for due diligence.",
      compliance: "SOC2 Audit Ready",
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      <div className="mesh-glow-indigo top-[15%] left-[-20%]" />
      <div className="mesh-glow-emerald top-[50%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Industries Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Who We Support</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Tailored Legal Workflow Solutions
          </h1>
          <p className="text-slate-350 leading-relaxed">
            LexFlow provides secure, specialized document lifecycles optimized for solo operators, scaling firms, and software companies.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="glow-card p-6 bg-[#0a0d1e]/60 border border-white/5 rounded-2xl flex flex-col justify-between group transition-all"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase bg-slate-900 px-2 py-1 rounded border border-white/5 text-slate-400">
                      {ind.compliance}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-450 transition-colors font-display">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <a
                  href="/contact"
                  className="mt-6 text-center py-2.5 bg-slate-950 border border-white/5 hover:border-emerald-500/30 text-xs font-bold text-slate-350 hover:text-white rounded-xl transition-all block"
                >
                  Configure Workspace
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
