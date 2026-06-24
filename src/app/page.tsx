"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles, Terminal, FileText, Clipboard, CheckSquare, Archive, Activity } from "lucide-react";
import AwsArchitecture from "@/components/AwsArchitecture";

export default function HomePage() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to 'Contract'

  const workflowSteps = [
    { id: 0, label: "Lead", icon: Sparkles, desc: "Inquire category and book initial scoping calls." },
    { id: 1, label: "Proposal", icon: Clipboard, desc: "Compile project milestones and terms." },
    { id: 2, label: "Contract", icon: FileText, desc: "Generate legal drafts and collect secure signatures." },
    { id: 3, label: "Project", icon: Terminal, desc: "Execute milestones with continuous Git sync." },
    { id: 4, label: "Completion", icon: CheckSquare, desc: "Obtain formal client completion sign-off logs." },
    { id: 5, label: "Archive", icon: Archive, desc: "Encrypt and audit logs in secure S3 buckets." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="mesh-glow-indigo top-[10%] left-[-15%]" />
      <div className="mesh-glow-emerald top-[45%] right-[-15%]" />

      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            {/* Tagline badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-xs font-bold text-emerald-450">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modern Cloud Engineering & Legal Workflow Automation</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-display leading-[1.05]">
              Scale Your Business on <br />
              <span className="text-gradient-emerald">Predictable Architecture</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              NEXOVYTE builds enterprise-grade SaaS products, integrates serverless AWS pipelines, and automates freelance legal agreements via LexFlow™.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-secondary to-highlight text-[#070a1a] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all flex items-center justify-center gap-2"
              >
                Inquire For Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lexflow"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-emerald-500/30 bg-[#121526]/40 backdrop-blur text-slate-200 hover:text-white transition-all"
              >
                Explore LexFlow™ Platform
              </Link>
            </motion.div>
          </motion.div>

          {/* Product Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 md:mt-24 glow-card p-2 bg-[#121526]/50 rounded-2xl max-w-5xl mx-auto border border-white/5"
          >
            <div className="bg-[#070a1a] rounded-xl overflow-hidden border border-white/5 relative aspect-video flex flex-col">
              {/* Mock Header */}
              <div className="px-4 py-3 bg-[#0d0f22] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs text-slate-400 font-bold font-display">LexFlow™ Contract Manager</div>
                <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 text-[10px] font-bold flex items-center gap-1">
                  <Activity className="w-3 h-3" /> Secure Engine Active
                </div>
              </div>

              {/* Mock Workspace Content */}
              <div className="flex-grow grid grid-cols-12 gap-4 p-4 text-xs font-mono">
                {/* Left Panel: Contract templates list */}
                <div className="col-span-4 border-r border-white/5 pr-4 space-y-3">
                  <div className="text-slate-500 font-bold uppercase text-[9px] tracking-wider">Legal Templates</div>
                  <div className="p-2 rounded bg-slate-900 border border-emerald-500/20 text-emerald-450">
                    <div>Service Contract</div>
                    <div className="text-[10px] text-slate-500 mt-1">v1.2 - S3 Encrypted</div>
                  </div>
                  <div className="p-2 rounded bg-slate-950/40 border border-white/5 text-slate-450">
                    <div>Mutual NDA</div>
                    <div className="text-[10px] text-slate-500 mt-1">v2.0 - Active</div>
                  </div>
                  <div className="p-2 rounded bg-slate-950/40 border border-white/5 text-slate-450">
                    <div>IP Assignment Agreement</div>
                    <div className="text-[10px] text-slate-500 mt-1">v1.0 - Ready</div>
                  </div>
                </div>

                {/* Right Panel: Contract Builder */}
                <div className="col-span-8 space-y-4 flex flex-col">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>active_agreement_contract.md</span>
                    <span className="text-[10px] text-emerald-450">Digital Hash: sha256_x82f...</span>
                  </div>
                  <div className="flex-grow p-3 bg-slate-950/90 rounded border border-white/5 text-slate-350 overflow-y-auto leading-relaxed">
                    {"# Independent Service Agreement"} <br />
                    {"This contract is entered by Nexovyte and Freelance Client."} <br />
                    {"Milestone 1: Setup Cognito User Pool and S3 bucket triggers. Net: 15 days."}
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-grow py-2 px-3 bg-slate-900 rounded border border-white/5 text-slate-500">
                      Enter variables value (e.g. clientName)
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold rounded">
                      Autofill Clauses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Section */}
      <section className="py-16 bg-[#070a1a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block">Trusted by forward-thinking teams</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-white font-display">99.9%</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">AWS Infrastructure SLA</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-emerald-450 font-display">1.2M+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Contracts Compiled</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-indigo-400 font-display">40%</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Average Administration Cost Saved</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-white font-display">SOC2</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Audit Ready Frameworks</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Legal Workflow Visualization Section */}
      <section className="py-20 bg-slate-950/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Workflow Automation</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              The LexFlow™ Legal Document Lifecycle
            </h2>
            <p className="text-slate-405">
              LexFlow automates the transitions from early contact to final contract archival. Click a step to review operational logistics.
            </p>
          </div>

          {/* Interactive workflow visualizer */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Timeline connection line */}
            <div className="flex justify-between items-center relative p-1 bg-slate-950 border border-white/5 rounded-2xl overflow-x-auto gap-2">
              {workflowSteps.map((step) => {
                const StepIcon = step.icon;
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full py-3 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-w-[100px] ${
                      isActive
                        ? "bg-slate-900 text-emerald-450 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.06)]"
                        : "text-slate-450 hover:text-white"
                    }`}
                  >
                    <StepIcon className="w-4 h-4 flex-shrink-0" />
                    <span>{step.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Step detail panel */}
            <div className="glow-card p-6 bg-[#0a0d1e]/80 border border-white/5 rounded-2xl text-center space-y-3 min-h-[120px] flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white font-display">
                Phase 0{workflowSteps[activeStep].id + 1}: {workflowSteps[activeStep].label} Lifecycle
              </h3>
              <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                {workflowSteps[activeStep].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-450">Services Catalog</h2>
            <p className="text-3xl sm:text-4xl font-bold font-display text-white">
              Bespoke Cloud & SaaS Engineering
            </p>
            <p className="text-slate-400">
              We design robust business processes powered by scalable cloud backends and clean frontend components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glow-card p-8 bg-[#0a0d1e]/60 border border-white/5 rounded-2xl flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">SaaS Product Development</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Constructing multi-tenant database architectures, custom payment gateway bindings, and user interface dashboards.
                </p>
              </div>
              <Link href="/services" className="mt-6 text-xs font-bold text-emerald-450 hover:text-white flex items-center gap-1 transition-colors">
                Explore tech stack <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="glow-card p-8 bg-[#0a0d1e]/60 border border-white/5 rounded-2xl flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-emerald-500/20 text-emerald-450 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Legal Workflow Consulting</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integrating automated e-sign triggers, template document compiles, and version histories audits inside active tools.
                </p>
              </div>
              <Link href="/services" className="mt-6 text-xs font-bold text-emerald-450 hover:text-white flex items-center gap-1 transition-colors">
                Explore tech stack <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="glow-card p-8 bg-[#0a0d1e]/60 border border-white/5 rounded-2xl flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/20 text-[#00f5ff] flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">AWS Cloud Integrations</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Setting up isolated API serverless gateways, Cognito secure logs, KMS client authorizations, and S3 file encryption.
                </p>
              </div>
              <Link href="/services" className="mt-6 text-xs font-bold text-emerald-450 hover:text-white flex items-center gap-1 transition-colors">
                Explore tech stack <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AWS Infrastructure Showcase (AwsArchitecture) */}
      <section className="py-20 bg-slate-950/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">AWS Infrastructure</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Cloud Operations Visualized
            </h2>
            <p className="text-slate-400">
              Hover over each node in the interactive architecture layout to audit our Cognito-secured serverless data pipeline.
            </p>
          </div>

          <AwsArchitecture />
        </div>
      </section>

      {/* 6. Call to Action CTA */}
      <section className="py-24 relative bg-gradient-to-b from-transparent to-[#0a0d1e]/50 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Modernize Your Business Workflows Today
          </h2>
          <p className="text-slate-350 max-w-xl mx-auto">
            Book an engineering audit with our solutions architects to inspect your cloud billing parameters or start setting up automated contract sign-offs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              Get Started Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/10 rounded-xl text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
