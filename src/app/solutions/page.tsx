"use client";

import React, { useState } from "react";
import { Sparkles, Terminal, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

interface SolutionItem {
  id: string;
  tabLabel: string;
  tagline: string;
  focusTitle: string;
  description: string;
  challenges: string[];
  features: string[];
  techStack: string[];
}

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<string>("freelancers");

  const solutions: SolutionItem[] = [
    {
      id: "freelancers",
      tabLabel: "Freelancers & Solopreneurs",
      tagline: "Run your solo practice professionally.",
      focusTitle: "Secure Client Onboarding & Automated Service Agreements",
      description: "Solopreneurs frequently spend up to 10 hours a week on client administration, scoping, and contract drafts. We automate these workflows. LexFlow generates and files secure agreements in a few clicks.",
      challenges: ["Unprotected intellectual property rights", "Chasing signatures and approvals", "Scope creep on milestone deliveries"],
      features: [
        "Dynamic Service Agreements with parameter inputs",
        "Legally binding e-signature triggers on mobile/desktop",
        "Automated PDF archiving inside secure S3 vaults",
        "Milestone progress tracking notifications",
      ],
      techStack: ["Next.js App Router", "LexFlow Sandbox", "AWS Lambda", "Amazon S3"],
    },
    {
      id: "agencies",
      tabLabel: "Digital Agencies",
      tagline: "Unify team workspaces. Track multiple client sign-offs.",
      focusTitle: "Multi-User Workspaces & Automated NDAs",
      description: "Growing agencies manage dozens of active client agreements, contractor NDAs, and project scopes. We establish unified workspaces with role-based access controls managed through Cognito directories.",
      challenges: ["Scattered contract versions across drives", "Compliance tracking audit leaks", "Team account security limits"],
      features: [
        "AWS Cognito User Pool user directories configuration",
        "Granular admin / editor / reader role setups",
        "S3 WORM (Write-Once-Read-Many) tamper-proof locks",
        "Bulk template distribution frameworks",
      ],
      techStack: ["AWS Cognito", "Amazon S3 Object Lock", "Prisma ORM", "AWS CDK"],
    },
    {
      id: "startups",
      tabLabel: "Tech Startup Teams",
      tagline: "Move fast, secure IP, integrate workflows via API.",
      focusTitle: "Programmable Contract Compiles & CRM Integrations",
      description: "For rapid growth startups, speed is critical. We connect LexFlow API endpoints to your active CRMs, enabling dynamic contract compiles from lead triggers automatically.",
      challenges: ["Manual contract drafting slows down sales", "Lack of audit trails for investor diligence", "Unconnected, siloed SaaS tools"],
      features: [
        "HTTPS REST endpoints hosted on AWS API Gateway",
        "Cognito JWT authorization token validation",
        "Centralized Bedrock prompt template controls",
        "Webhook triggers syncing signed contracts back to CRMs",
      ],
      techStack: ["API Gateway", "AWS Lambda", "Amazon Bedrock", "HubSpot API", "KMS"],
    },
  ];

  const activeSolution = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <div className="relative py-12 md:py-24">
      {/* Glow backgrounds */}
      <div className="mesh-glow-indigo top-[20%] left-[-15%]" />
      <div className="mesh-glow-emerald top-[55%] right-[-20%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Solutions Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Our Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Custom Workflows by Role
          </h1>
          <p className="text-slate-350 leading-relaxed">
            NEXOVYTE designs automated document pipelines tailored to solopreneurs, digital agencies, and scaling tech teams.
          </p>
        </div>

        {/* Sliding Tabs */}
        <div className="space-y-8">
          <div className="flex justify-center p-1.5 bg-[#0b0d1e]/80 border border-white/5 rounded-2xl max-w-2xl mx-auto backdrop-blur-md">
            {solutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`w-full text-center py-3.5 px-4 rounded-xl text-xs font-bold transition-all ${
                  activeTab === s.id
                    ? "bg-slate-900 text-emerald-450 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.06)]"
                    : "text-slate-450 hover:text-white"
                }`}
              >
                {s.tabLabel}
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="glow-card p-6 md:p-12 bg-[#0a0d1e]/70 border border-white/5 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-xs font-bold text-emerald-450">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeSolution.tagline}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">{activeSolution.focusTitle}</h2>
              <p className="text-slate-300 leading-relaxed text-sm">{activeSolution.description}</p>

              {/* Challenges list */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Common Obstacles Solved</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeSolution.challenges.map((c, idx) => (
                    <div key={idx} className="p-3.5 bg-rose-950/10 border border-rose-500/10 rounded-xl text-xs text-rose-350 font-semibold leading-relaxed">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Target specifications */}
            <div className="lg:col-span-5 p-6 bg-slate-950/90 rounded-2xl border border-white/5 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">LexFlow Blueprint Features</h4>
                <ul className="space-y-3.5">
                  {activeSolution.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs text-slate-350 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-450 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Applied Cloud Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeSolution.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono bg-slate-900 border border-white/5 px-2.5 py-1 rounded text-slate-450 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/contact"
                className="w-full text-center py-3 bg-[#0a0d1e] border border-white/10 hover:border-emerald-500/30 text-slate-200 hover:text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-all block"
              >
                Inquire About Solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
