"use client";

import React from "react";
import Link from "next/link";
import { Shield, Key, Target, Users, Landmark, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Design & Technical Excellence",
      icon: Target,
      desc: "We believe business tools should be beautiful and intuitive. We design pixel-perfect layouts backed by lightning-fast APIs.",
    },
    {
      title: "Declarative Security",
      icon: Shield,
      desc: "All contract records, e-signatures, and files are encrypted using AWS KMS keys. We follow strict account isolation.",
    },
    {
      title: "Engineering Transparency",
      icon: HeartHandshake,
      desc: "We write clean TypeScript codebases and build modular cloud integrations. We share documentation sprint updates.",
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      {/* Glow ambient filters */}
      <div className="mesh-glow-indigo top-[15%] left-[-20%]" />
      <div className="mesh-glow-emerald top-[60%] right-[-20%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Our Identity</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Architecting the Future of Business Tools
          </h1>
          <p className="text-slate-300 leading-relaxed text-lg">
            NEXOVYTE designs, builds, and maintains custom software and automated workflows. We help consultants, designers, agencies, and digital creators run their business professionally.
          </p>
        </div>

        {/* Story details */}
        <div className="glow-card p-8 md:p-12 bg-[#0a0d1e]/70 border border-white/5 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Our Core Mission</h2>
            <p className="text-slate-350 leading-relaxed text-sm">
              We empower freelancers, solopreneurs, and scaling digital agencies to operationalize their Client Onboarding, Proposal building, and Legal Drafts signature collection.
            </p>
            <p className="text-slate-350 leading-relaxed text-sm">
              By combining state-of-the-art serverless AWS environments with our proprietary <strong>LexFlow™</strong> contract management SaaS platform, we reduce administration overhead by up to 40%.
            </p>
          </div>

          <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 space-y-4">
            <div className="text-slate-500 font-mono text-xs">{"$ cat nexovyte_standards.json"}</div>
            <pre className="text-slate-300 font-mono text-xs leading-relaxed bg-[#070a1a] p-4 rounded border border-white/5 overflow-x-auto">
{`{
  "development": {
    "typeSafety": "TypeScript strict",
    "framework": "Next.js 15 App Router",
    "orm": "Prisma with PostgreSQL"
  },
  "security": {
    "auth": "AWS Cognito User Pools",
    "encryption": "KMS Key Rotation",
    "vaults": "Amazon S3 Object Lock"
  }
}`}
            </pre>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold font-display text-white">Our Engineering Principles</h2>
            <p className="text-sm text-slate-400">Values that guide every line of code we write and system we configure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="glow-card p-8 bg-[#0a0d1e]/50 border border-white/5 rounded-2xl space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-450 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Leadership */}
        <div className="space-y-12 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Meet the Leadership</h2>
            <p className="text-sm text-slate-450">Certified developers, cloud architects, and workflow designers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glow-card p-6 bg-[#0a0d1e]/40 border border-white/5 rounded-2xl text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-emerald-500/20 mx-auto flex items-center justify-center text-emerald-450 text-xl font-bold font-display">
                NB
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Niranjan Basnet</h4>
                <p className="text-xs text-emerald-450 font-semibold tracking-wider uppercase mt-1">Lead Cloud Architect</p>
              </div>
              <p className="text-xs text-slate-450 leading-relaxed">Ex-AWS Architect with extensive credentials in building serverless API gateways, database clusters, and container deployments.</p>
            </div>
            <div className="glow-card p-6 bg-[#0a0d1e]/40 border border-white/5 rounded-2xl text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-indigo-500/20 mx-auto flex items-center justify-center text-indigo-400 text-xl font-bold font-display">
                RS
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Rebecca Stone</h4>
                <p className="text-xs text-indigo-400 font-semibold tracking-wider uppercase mt-1">Head of Product UX</p>
              </div>
              <p className="text-xs text-slate-450 leading-relaxed">Designs user interfaces for SaaS platforms and legal workflows, ensuring clean, pixel-perfect, accessible layouts.</p>
            </div>
            <div className="glow-card p-6 bg-[#0a0d1e]/40 border border-white/5 rounded-2xl text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-700 mx-auto flex items-center justify-center text-slate-300 text-xl font-bold font-display">
                JK
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">James K.</h4>
                <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mt-1">SRE Security Director</p>
              </div>
              <p className="text-xs text-slate-450 leading-relaxed">Audits AWS user pool authorizations, Cognito token signatures, and sets up automated CloudWatch threat alarms.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
          >
            Inquire About Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
