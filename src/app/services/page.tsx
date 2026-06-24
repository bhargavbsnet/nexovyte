"use client";

import React, { useState } from "react";
import { Cloud, Cpu, ShieldCheck, Terminal, Lightbulb, Workflow, HardDrive, Code2, RefreshCw, BarChart4, CheckCircle, ArrowRight } from "lucide-react";

interface ServiceProfile {
  id: string;
  title: string;
  icon: any;
  desc: string;
  benefits: string[];
  process: string[];
  tech: string[];
  outcome: string;
}

export default function ServicesPage() {
  const [activeSvc, setActiveSvc] = useState<string>("aws-consulting");

  const services: ServiceProfile[] = [
    {
      id: "aws-consulting",
      title: "AWS Consulting & Architecture",
      icon: Cloud,
      desc: "We analyze your infrastructure footprints and map highly optimized serverless pipelines using AWS CDK stack frameworks.",
      benefits: ["100% IAC-based declarations", "Risk-mitigated resource scaling", "Clear account cost optimizations"],
      process: ["1. Initial Architecture Audit", "2. Blueprint Mapping", "3. Cost Projections Analysis", "4. Stack Handovers"],
      tech: ["AWS CDK", "Terraform", "AWS Organizations", "AWS Pricing Calculator"],
      outcome: "A certified AWS Well-Architected system review report and customized deployment scripts.",
    },
    {
      id: "cloud-migration",
      title: "Cloud Migration",
      icon: RefreshCw,
      desc: "Re-platform or migrate monolithic databases and script applications into containerized, autoscaling clusters.",
      benefits: ["Zero database downtime", "Optimized microservices decoupling", "Reduced server billings"],
      process: ["1. Resource Inventory", "2. Sandbox Migration Testing", "3. Live DB Synchronization", "4. Final DNS Route Changes"],
      tech: ["AWS DMS", "AWS Application Migration Service", "Docker"],
      outcome: "A fully migrated cloud database and container cluster with zero lost records.",
    },
    {
      id: "saas-development",
      title: "SaaS Product Development",
      icon: Code2,
      desc: "We engineer multi-tenant platforms integrated with user pools, subscription billing, and telemetry controls.",
      benefits: ["Granular database partitions", "Built-in Cognito SSO authentications", "Custom telemetry graphs"],
      process: ["1. DB Schema Modeling", "2. Backend API construction", "3. Frontend Dashboard Coding", "4. Live Deployment"],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      outcome: "A production-ready SaaS product fully deployed on Vercel and AWS, complete with user logins.",
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      icon: Code2,
      desc: "Bespoke codebases solving core workflow friction. We build high-throughput microservices and REST APIs.",
      benefits: ["Total code ownership", "Zero legacy dependency overhead", "Optimized runtimes"],
      process: ["1. Workflow Requirements Scoping", "2. Database Mapping", "3. API and Logic Coding", "4. Automated Load Testing"],
      tech: ["Node.js", "Go", "Python", "PostgreSQL", "Redis"],
      outcome: "High-performance software and database pipelines tailored exactly to your business logic.",
    },
    {
      id: "legal-automation",
      title: "Legal Workflow Automation",
      icon: ShieldCheck,
      desc: "Automating contract generation, variable compilers, digital signature handshakes, and version logs audits.",
      benefits: ["Reduce agreement admin by 50%", "Strict KMS document encryptions", "Automated contract status tracking"],
      process: ["1. Map Document Templates", "2. Program Variable Compilers", "3. Integrate E-sign Triggers", "4. Setup S3 Archivals"],
      tech: ["LexFlow™ Engine", "AWS Lambda", "Amazon S3 Object Lock"],
      outcome: "A fully automated contract lifecycle from client onboarding proposal to final legal signature collection.",
    },
    {
      id: "ai-integration",
      title: "AI & Bedrock Integrations",
      icon: Cpu,
      desc: "Hook state-of-the-art foundation models (Claude, Gemini, Llama) directly into your active operational databases.",
      benefits: ["Semantic document searches", "Centralized prompt template parameters", "Private, isolated model runs"],
      process: ["1. Prompt Engineering Reviews", "2. Vector Store Setup", "3. API Tunnelling", "4. Latency Cost Audits"],
      tech: ["Amazon Bedrock", "LangChain", "Pinecone", "ChromaDB"],
      outcome: "Cognito-secured LLM prompt pipelines providing custom summaries, reviews, or classification logs.",
    },
    {
      id: "business-automation",
      title: "Business Process Automation",
      icon: Workflow,
      desc: "Connecting disjointed operational tools via secure API gateways. We automate invoice triggers, lead logs, and reports.",
      benefits: ["No manual double-entry errors", "Accelerated delivery velocities", "Clear activity audit logs"],
      process: ["1. Map API Endpoints", "2. Code Event-Driven Triggers", "3. Standardize Data Payloads", "4. Alert Log Monitors"],
      tech: ["API Gateway", "AWS Lambda", "AWS Step Functions"],
      outcome: "Smooth, automated workflow handshakes between client onboardings, billing, and project setups.",
    },
    {
      id: "devops",
      title: "DevOps & Infrastructure",
      icon: Terminal,
      desc: "Deploy lightning fast with automated CI/CD pipelines, GitOps, Kubernetes/ECS orchestration, and IaC architectures.",
      benefits: ["Consistent deployment speeds", "Declarative stack version controls", "Automated rollbacks"],
      process: ["1. Script CDK/Terraform configs", "2. Connect GitHub Actions CI/CD", "3. Set container networks", "4. Run health audits"],
      tech: ["GitHub Actions", "AWS Fargate", "Terraform", "AWS Secrets Manager"],
      outcome: "Completely automated deployment pipelines executing code tests and container updates within 5 minutes.",
    },
    {
      id: "managed-cloud-services",
      title: "Managed Cloud Services",
      icon: HardDrive,
      desc: "24/7 serverless cluster health monitoring, billing optimization checks, and database backups management.",
      benefits: ["Guaranteed 99.9% uptime", "Proactive cost saving reviews", "SRE incident response"],
      process: ["1. Setup CloudWatch Alerts", "2. Configure Automated Backups", "3. Establish SRE On-call", "4. Monthly Audits Review"],
      tech: ["AWS CloudWatch", "AWS Trusted Advisor", "AWS Systems Manager"],
      outcome: "Stable, securely patched, and cost-optimized cloud environment continuously maintained.",
    },
    {
      id: "enterprise-modernization",
      title: "Enterprise Modernization",
      icon: RefreshCw,
      desc: "Refactor legacy monolithic software structures into microservices architectures with isolated private VPC boundaries.",
      benefits: ["Eliminate technical debt logs", "Improved modular scaling capacity", "SOC2 compliance readiness"],
      process: ["1. Decouple Code Analysis", "2. Configure Private VPC Subnets", "3. Migrate Monolithic DBs", "4. Zero-Downtime Cuts"],
      tech: ["AWS ECS", "AWS Secrets Manager", "AWS Aurora Serverless"],
      outcome: "Modern, secure, and compliance-hardened infrastructure built to support global enterprises.",
    },
  ];

  const selectedSvc = services.find((s) => s.id === activeSvc) || services[0];

  return (
    <div className="relative py-12 md:py-24">
      {/* Background ambient lighting */}
      <div className="mesh-glow-indigo top-[20%] left-[-15%]" />
      <div className="mesh-glow-emerald top-[50%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Services Catalog</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Custom Cloud & Workflow Engineering
          </h1>
          <p className="text-slate-300 leading-relaxed">
            NEXOVYTE designs compliant database schemas, serverless container environments, and automated legal pipelines to scale digital businesses.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Tab selectors */}
          <div className="lg:col-span-4 space-y-2">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveSvc(svc.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3.5 ${
                    activeSvc === svc.id
                      ? "bg-slate-900 border-emerald-500/20 text-emerald-450 shadow-[0_0_15px_rgba(16,185,129,0.06)]"
                      : "bg-[#0b0d1e]/50 border-white/5 text-slate-400 hover:bg-[#121526] hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">{svc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Tab detail panel */}
          <div className="lg:col-span-8 glow-card p-6 md:p-10 bg-[#0a0d1e]/70 border border-white/5 rounded-2xl space-y-8 min-h-[420px]">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">{selectedSvc.title}</h2>
              <p className="text-slate-300 leading-relaxed text-sm">{selectedSvc.desc}</p>
            </div>

            {/* Benefits & Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
              {/* Benefits */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-450">Key Benefits</h4>
                <ul className="space-y-3">
                  {selectedSvc.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-slate-350">
                      <CheckCircle className="w-4 h-4 text-emerald-450 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Process */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Execution Process</h4>
                <ul className="space-y-3">
                  {selectedSvc.process.map((step, idx) => (
                    <li key={idx} className="text-sm text-slate-350">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expected outcomes */}
            <div className="pt-6 border-t border-white/5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Expected Delivery Outcomes</h4>
              <p className="text-xs text-slate-350 italic bg-slate-950/60 p-3.5 rounded-xl border border-white/5 leading-relaxed">
                {selectedSvc.outcome}
              </p>
            </div>

            {/* Tech stack */}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Core Stack Applied</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSvc.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-slate-900 border border-white/5 px-3 py-1.5 rounded-lg text-slate-350"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex justify-end">
              <a
                href="/contact"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-secondary to-highlight text-[#070a1a] font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all flex items-center gap-1.5"
              >
                Inquire About Service <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
