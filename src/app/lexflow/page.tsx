"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Terminal, Shield, BarChart3, Layers, Settings, HelpCircle, Code, Play, RefreshCw, CheckCircle2, ChevronDown, Cpu, FileText, Lock, Award } from "lucide-react";

interface ContractTemplate {
  id: string;
  name: string;
  category: string;
  text: string;
  variables: string[];
  version: string;
}

export default function LexFlowProductPage() {
  const [activeTemplateId, setActiveTemplateId] = useState<string>("service-agreement");
  const [inputs, setInputs] = useState<Record<string, string>>({
    clientName: "SaaS Ventures Ltd",
    projectBudget: "$12,500 USD",
    deadline: "August 30, 2026",
  });
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [contractOutput, setContractOutput] = useState<string>("");
  const [compilationMetrics, setCompilationMetrics] = useState<any>(null);

  const templates: ContractTemplate[] = [
    {
      id: "service-agreement",
      name: "Independent Service Agreement",
      category: "Freelance",
      text: "This INDEPENDENT SERVICE AGREEMENT is entered into on June 24, 2026, by and between Nexovyte and {clientName}.\n\n1. SCOPE OF SERVICES: Nexovyte agrees to deliver Next.js web development and AWS CDK serverless deployments.\n2. COMPENSATION: The client agrees to pay a fixed fee of {projectBudget} in accordance with milestones defined in SOW.\n3. DEADLINE: All initial deliverables shall be submitted by {deadline}.\n\nIN WITNESS WHEREOF, the parties hereto have executed this Agreement.",
      variables: ["clientName", "projectBudget", "deadline"],
      version: "v1.2",
    },
    {
      id: "mutual-nda",
      name: "Mutual Non-Disclosure Agreement",
      category: "Legal Core",
      text: "This MUTUAL NON-DISCLOSURE AGREEMENT is made between Nexovyte and {clientName} to safeguard intellectual property assets.\n\n1. CONFIDENTIAL INFORMATION: Includes all source code repositories, Cognito credentials lists, and DynamoDB schemas.\n2. EXCLUSIONS: Information publicly known or independently developed.\n3. ENFORCEMENT: Governed by standard AWS security parameters.\n\nSigned securely via LexFlow E-sign.",
      variables: ["clientName"],
      version: "v2.0",
    },
  ];

  const activeTemplate = templates.find((t) => t.id === activeTemplateId) || templates[0];

  useEffect(() => {
    const defaults: Record<string, string> = {};
    if (activeTemplateId === "service-agreement") {
      defaults.clientName = "SaaS Ventures Ltd";
      defaults.projectBudget = "$12,500 USD";
      defaults.deadline = "August 30, 2026";
    } else {
      defaults.clientName = "Design Co Inc";
    }
    setInputs(defaults);
    setContractOutput("");
    setCompilationMetrics(null);
  }, [activeTemplateId]);

  const handleInputChange = (key: string, val: string) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
  };

  const handleCompile = () => {
    setIsRunning(true);
    setContractOutput("");
    setCompilationMetrics(null);

    // Simulate Lambda contract compilation
    let text = activeTemplate.text;
    activeTemplate.variables.forEach((v) => {
      text = text.replace(`{${v}}`, inputs[v] || `[${v}]`);
    });

    let currentText = "";
    let i = 0;
    const words = text.split(" ");

    const interval = setInterval(() => {
      if (i < words.length) {
        currentText += words[i] + " ";
        setContractOutput(currentText);
        i++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setCompilationMetrics({
          hash: `sha256_${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 10)}`,
          s3Url: `https://s3.amazonaws.com/nexovyte-legal-docs/${activeTemplateId}-${Date.now()}.pdf`,
          duration: `${Math.floor(Math.random() * 45) + 30}ms`,
          status: "Verified",
        });
      }
    }, 35);
  };

  const pricing = [
    {
      name: "Freelancer Account",
      price: "$0",
      desc: "Perfect for single operators building client contracts and collecting digital signatures.",
      features: ["1 active user workspace", "Up to 5 signed contracts/mo", "Access to standard legal marketplace", "30-day version storage history", "Basic Cognito session logins"],
      cta: "Activate Free Account",
    },
    {
      name: "Agency Team",
      price: "$79",
      period: "/month",
      desc: "For digital agencies, designers, and software companies managing multiple team sign-offs.",
      features: ["Up to 12 active seats", "Unlimited compiled contracts", "Custom branded signature screens", "AWS S3 secure backup locks", "Dedicated Cognito identity directories", "Priority email SRE support"],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise Vault",
      price: "Custom",
      desc: "For institutions requiring private VPC deployments, custom KMS key locks, and SOC2 audit reports.",
      features: ["Infinite user seats", "Deploys directly on your AWS account", "AWS KMS custom key integrations", "HIPAA & SOC2 audit logs exporter", "API Gateway direct REST hooks", "24/7 dedicated solutions architects"],
      cta: "Schedule Enterprise Call",
    },
  ];

  const faqs = [
    {
      q: "Are digital signatures collected on LexFlow legally binding?",
      a: "Yes. LexFlow complies with the Electronic Signatures in Global and National Commerce Act (ESIGN) and the Uniform Electronic Transactions Act (UETA) in the US, alongside equivalent eIDAS standards in the EU. Each contract runs a SHA-256 validation log saved in S3.",
    },
    {
      q: "How does the AWS S3 Object Lock compliance system secure files?",
      a: "For Pro and Enterprise workspaces, LexFlow deploys Amazon S3 Write-Once-Read-Many (WORM) storage triggers. Once a contract is finalized and signed, Object Lock prevents any modifications or deletions, even by administrative users, providing a tamper-proof audit trail.",
    },
    {
      q: "Can we connect LexFlow to our custom CRM or ticketing systems?",
      a: "Yes. LexFlow exposes clean, Cognito-authorized API Gateway REST endpoints. You can hook custom webhooks to trigger contract compilations automatically from HubSpot, Salesforce, or custom React codebases.",
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      {/* Mesh gradients backgrounds */}
      <div className="mesh-glow-indigo top-[10%] left-[-20%]" />
      <div className="mesh-glow-emerald top-[50%] right-[-15%]" />
      <div className="mesh-glow-indigo top-[85%] left-[20%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Product Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-xs font-bold text-emerald-450">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Introducing LexFlow™ Platform</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-display text-white leading-tight">
            Legal Workflow Automation for <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Freelancers & Digital Agencies</span>
          </h1>
          <p className="text-lg text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Generate onboarding agreements, compile contracts with dynamic variables, collect secure digital signatures, and archive documents in KMS-encrypted S3 vaults.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#sandbox"
              className="px-6 py-3.5 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              Open Contract Builder Sandbox
            </a>
            <a
              href="#pricing"
              className="px-6 py-3.5 border border-white/10 rounded-xl text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            >
              View SaaS Pricing
            </a>
          </div>
        </div>

        {/* Live Playground Sandbox */}
        <div id="sandbox" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Interactive Contract Sandbox</h2>
            <p className="text-sm text-slate-400">Configure contract parameters on the left, click Compile, and verify the legal outputs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left panel */}
            <div className="lg:col-span-5 glow-card p-6 bg-[#0a0d1e]/80 border border-white/5 rounded-2xl space-y-6">
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Select Agreement Template</label>
                <div className="grid grid-cols-2 gap-3">
                  {templates.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTemplateId(t.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        activeTemplateId === t.id
                          ? "bg-slate-900 border-emerald-500/20 text-emerald-450"
                          : "bg-slate-950/40 border-white/5 text-slate-400 hover:bg-slate-950"
                      }`}
                    >
                      <div>{t.name}</div>
                      <div className="text-[9px] text-slate-500 font-semibold mt-1">{t.version} • {t.category}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Variable Inputs */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Define Agreement Parameters</label>
                {activeTemplate.variables.map((v) => (
                  <div key={v} className="space-y-1.5">
                    <span className="text-xs font-mono text-emerald-450">{`{${v}}`}</span>
                    <input
                      type="text"
                      value={inputs[v] || ""}
                      onChange={(e) => handleInputChange(v, e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-emerald-450 font-mono"
                    />
                  </div>
                ))}
              </div>

              {/* Compile CTA */}
              <button
                onClick={handleCompile}
                disabled={isRunning}
                className="w-full py-3.5 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Compiling PDF Draft...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Compile Contract & Generate Signature
                  </>
                )}
              </button>
            </div>

            {/* Right output panel */}
            <div className="lg:col-span-7 flex flex-col justify-between glow-card p-6 bg-[#0a0d1e]/80 border border-white/5 rounded-2xl min-h-[400px]">
              <div className="space-y-4 flex-grow flex flex-col">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold font-mono text-slate-400">Compiled legal payload</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-450 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {activeTemplate.version}
                  </span>
                </div>

                {/* Console display */}
                <div className="flex-grow p-4 bg-slate-950 rounded-xl border border-white/5 font-mono text-xs text-slate-350 leading-relaxed overflow-y-auto min-h-[220px]">
                  {contractOutput ? (
                    <pre className="whitespace-pre-wrap">{contractOutput}</pre>
                  ) : (
                    <span className="text-slate-600 italic">Builder idle. Configure parameters on the left and click "Compile Contract" to execute.</span>
                  )}
                </div>
              </div>

              {/* Compilation Metadata */}
              {compilationMetrics && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 p-3.5 bg-slate-900/60 rounded-xl border border-white/5 text-center">
                  <div className="col-span-2">
                    <span className="block text-[9px] text-slate-500 uppercase font-semibold text-left">Document cryptographic hash</span>
                    <span className="text-[10px] font-bold text-emerald-450 font-mono text-left block truncate">{compilationMetrics.hash}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-500 uppercase font-semibold">Compile Speed</span>
                    <span className="text-xs font-bold text-white font-mono">{compilationMetrics.duration}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-500 uppercase font-semibold">S3 Vault Status</span>
                    <span className="text-xs font-bold text-emerald-450 font-mono flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" /> Secure
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Grids */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 bg-[#0a0d1e]/40 border border-white/5 rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-450 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white font-display">Variable Clauses</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Map variables dynamically. Compile tailored terms, budgets, and milestones into contracts instantly without copywriting errors.</p>
          </div>
          <div className="p-6 bg-[#0a0d1e]/40 border border-white/5 rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white font-display">Tamper-Proof Storage</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Leverage Amazon S3 Object Lock (WORM). Prevent contract deletion or unauthorized editing post-signing, ensuring compliance audits.</p>
          </div>
          <div className="p-6 bg-[#0a0d1e]/40 border border-white/5 rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-450 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white font-display">Verified E-Signatures</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Collect legally binding signatures under ESIGN and eIDAS acts. Log cryptographic signature hashes verified by Cognito User Pools.</p>
          </div>
          <div className="p-6 bg-[#0a0d1e]/40 border border-white/5 rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white font-display">API Gateway Integrations</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Trigger contract compilation jobs automatically via HTTPS webhooks. Integrate with SaaS platforms and agency CRMs.</p>
          </div>
        </div>

        {/* Pricing plans */}
        <div id="pricing" className="space-y-12 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">SaaS Pricing</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Select a Workspace Tier</h2>
            <p className="text-sm text-slate-400">Simple developer setups to isolated AWS enterprise private clouds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((tier, idx) => (
              <div
                key={idx}
                className={`glow-card p-8 bg-[#0a0d1e]/60 border rounded-3xl flex flex-col justify-between relative ${
                  tier.popular ? "border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.06)]" : "border-white/5"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] text-[9px] font-extrabold uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{tier.desc}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-display">{tier.price}</span>
                    {tier.period && <span className="text-xs text-slate-500 font-semibold">{tier.period}</span>}
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {tier.features.map((feat, fidx) => (
                      <li key={fidx} className="flex gap-2 text-xs text-slate-350">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-450 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/contact"
                  className={`mt-8 w-full text-center py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all ${
                    tier.popular
                      ? "bg-gradient-to-r from-secondary to-highlight text-[#070a1a] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      : "border border-white/10 hover:border-white/20 text-slate-300 hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold font-display text-white">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-400">In-depth answers regarding legal binding, encryption compliance, and API integrations.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glow-card p-6 bg-[#0a0d1e]/50 border border-white/5 rounded-xl space-y-2">
                <h4 className="font-bold text-white text-sm font-display flex gap-2 items-center">
                  <HelpCircle className="w-4.5 h-4.5 text-emerald-450 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-350 leading-relaxed pl-6.5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
