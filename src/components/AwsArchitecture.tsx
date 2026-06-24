"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Server, Database, ShieldAlert, KeyRound, Cpu, Terminal, Layers, Globe, Radio } from "lucide-react";

interface NodeDetail {
  id: string;
  name: string;
  category: string;
  role: string;
  latency: string;
  sla: string;
  metric: string;
  description: string;
}

export default function AwsArchitecture() {
  const [activeNode, setActiveNode] = useState<string | null>("bedrock");

  const nodes: Record<string, NodeDetail> = {
    route53: {
      id: "route53",
      name: "Amazon Route 53",
      category: "DNS Routing",
      role: "Resolves globally distributed client domain inquiries securely.",
      latency: "<4ms DNS lookup",
      sla: "100% Uptime SLA",
      metric: "Active globally",
      description: "Directs incoming requests to AWS CloudFront CDN Edge locations, matching geolocations for fastest lookups.",
    },
    cloudfront: {
      id: "cloudfront",
      name: "Amazon CloudFront CDN",
      category: "Content Delivery",
      role: "Caches static client contracts, templates, and script assets globally.",
      latency: "10ms edge caching",
      sla: "99.9% SLA",
      metric: "120+ Edge Locations",
      description: "Serves the Next.js SPA dashboard, reducing origin server loads by caching template documents.",
    },
    cognito: {
      id: "cognito",
      name: "Amazon Cognito User Pool",
      category: "Security & Auth",
      role: "Authenticates agency and freelancer users, generating JWT signatures.",
      latency: "15ms check-auth",
      sla: "99.99% SLA",
      metric: "2M users authenticated",
      description: "Authorizes and isolates workspace user pools. Integrates directly into API Gateway routing validations.",
    },
    apigateway: {
      id: "apigateway",
      name: "Amazon API Gateway",
      category: "Security Proxy",
      role: "Proxy router mapping REST endpoints and checking token signatures.",
      latency: "6ms transit speed",
      sla: "99.95% SLA",
      metric: "800M monthly calls",
      description: "Receives user commands, performs rate-limiting checks, and safely channels parameters to compute layers.",
    },
    lambda: {
      id: "lambda",
      name: "AWS Lambda Computes",
      category: "Serverless Execution",
      role: "Processes document variable compiling, version logs, and PDF compiles.",
      latency: "5ms execute",
      sla: "99.999% SLA",
      metric: "Automatic compute scaling",
      description: "Compiles contract templates by filling in variables (clientName, projectPrice) dynamically. Employs Node.js runtimes.",
    },
    ecs: {
      id: "ecs",
      name: "Amazon ECS Fargate",
      category: "Container Execution",
      role: "Maintains document conversions, electronic sign-off validations, and batch reports.",
      latency: "18ms transaction time",
      sla: "99.99% SLA",
      metric: "20-500 auto-scaled tasks",
      description: "Dedicated container tasks handling CPU-intensive digital signature hash calculations and file locking pipelines.",
    },
    dynamodb: {
      id: "dynamodb",
      name: "Amazon DynamoDB Store",
      category: "NoSQL DB",
      role: "Maintains workspace tables, template logs, and active contract version lists.",
      latency: "<2ms read/write",
      sla: "99.999% SLA",
      metric: "450 GB templates tables",
      description: "Highly performant, fully managed NoSQL catalog saving metadata and contract signatures with zero connection leaks.",
    },
    s3: {
      id: "s3",
      name: "Amazon S3 Document Vault",
      category: "Storage Services",
      role: "Hosts PDF contracts and document archives with KMS encryption parameters.",
      latency: "28ms read stream",
      sla: "99.999999999% durability",
      metric: "3.2M legal docs stored",
      description: "Secure bucket storage isolating contract records. Enabled with Object Lock for compliance auditing.",
    },
    bedrock: {
      id: "bedrock",
      name: "Amazon Bedrock AI Engine",
      category: "Foundation Models",
      role: "Generates custom contract summaries and drafts clauses using Claude.",
      latency: "135ms streaming token",
      sla: "99.9% SLA",
      metric: "24M clauses drafted",
      description: "Serverless AI model endpoint authorizing prompt variable fills to review contracts and flag risky clauses.",
    },
  };

  const selectedNode = activeNode ? nodes[activeNode] : null;

  return (
    <div className="glow-card p-6 md:p-8 bg-[#0a0d1e]/80 border border-white/5 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Cloud className="w-48 h-48 text-emerald-450" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive SVG Diagram */}
        <div className="lg:col-span-7 flex justify-center">
          <svg className="w-full max-w-[550px] h-[340px]" viewBox="0 0 550 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Connection Lines with Animated Dash offsets */}
            <motion.path
              d="M 50,170 C 80,120 110,80 140,80"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
            />
            <motion.path
              d="M 50,170 C 80,220 110,260 140,260"
              stroke="#6366f1"
              strokeWidth="1.5"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
            />
            <motion.path
              d="M 200,80 H 260"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
            />
            <motion.path
              d="M 200,260 H 260"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
            />
            <motion.path
              d="M 320,80 C 355,80 370,120 400,140"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
            />
            <motion.path
              d="M 320,260 C 355,260 370,220 400,180"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray="6,4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
            />
            <motion.path
              d="M 460,160 H 500"
              stroke="#00f5ff"
              strokeWidth="2.5"
              strokeDasharray="8,4"
              animate={{ strokeDashoffset: [-30, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
            />

            {/* Route53 */}
            <g className="cursor-pointer" onClick={() => setActiveNode("route53")} onMouseEnter={() => setActiveNode("route53")}>
              <rect x="10" y="140" width="50" height="50" rx="8" fill={activeNode === "route53" ? "rgba(16, 185, 129, 0.15)" : "#0f1225"} stroke={activeNode === "route53" ? "#10b981" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Globe className={`w-5 h-5 absolute ${activeNode === "route53" ? "text-emerald-450" : "text-slate-400"}`} style={{ transform: "translate(25px, 153px)" }} />
              <text x="35" y="200" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">Route 53</text>
            </g>

            {/* CloudFront */}
            <g className="cursor-pointer" onClick={() => setActiveNode("cloudfront")} onMouseEnter={() => setActiveNode("cloudfront")}>
              <rect x="120" y="55" width="50" height="50" rx="8" fill={activeNode === "cloudfront" ? "rgba(16, 185, 129, 0.15)" : "#0f1225"} stroke={activeNode === "cloudfront" ? "#10b981" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Layers className={`w-5 h-5 absolute ${activeNode === "cloudfront" ? "text-emerald-450" : "text-slate-400"}`} style={{ transform: "translate(135px, 68px)" }} />
              <text x="145" y="115" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">CloudFront</text>
            </g>

            {/* Cognito */}
            <g className="cursor-pointer" onClick={() => setActiveNode("cognito")} onMouseEnter={() => setActiveNode("cognito")}>
              <rect x="120" y="235" width="50" height="50" rx="8" fill={activeNode === "cognito" ? "rgba(99, 102, 241, 0.15)" : "#0f1225"} stroke={activeNode === "cognito" ? "#6366f1" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <KeyRound className={`w-5 h-5 absolute ${activeNode === "cognito" ? "text-indigo-450" : "text-slate-400"}`} style={{ transform: "translate(135px, 248px)" }} />
              <text x="145" y="295" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">Cognito</text>
            </g>

            {/* API Gateway */}
            <g className="cursor-pointer" onClick={() => setActiveNode("apigateway")} onMouseEnter={() => setActiveNode("apigateway")}>
              <rect x="240" y="55" width="50" height="50" rx="8" fill={activeNode === "apigateway" ? "rgba(16, 185, 129, 0.15)" : "#0f1225"} stroke={activeNode === "apigateway" ? "#10b981" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Server className={`w-5 h-5 absolute ${activeNode === "apigateway" ? "text-emerald-450" : "text-slate-400"}`} style={{ transform: "translate(255px, 68px)" }} />
              <text x="265" y="115" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">API Gateway</text>
            </g>

            {/* AWS Lambda */}
            <g className="cursor-pointer" onClick={() => setActiveNode("lambda")} onMouseEnter={() => setActiveNode("lambda")}>
              <rect x="240" y="235" width="50" height="50" rx="8" fill={activeNode === "lambda" ? "rgba(99, 102, 241, 0.15)" : "#0f1225"} stroke={activeNode === "lambda" ? "#6366f1" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Cpu className={`w-5 h-5 absolute ${activeNode === "lambda" ? "text-indigo-450" : "text-slate-400"}`} style={{ transform: "translate(255px, 248px)" }} />
              <text x="265" y="295" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">Lambda</text>
            </g>

            {/* DynamoDB */}
            <g className="cursor-pointer" onClick={() => setActiveNode("dynamodb")} onMouseEnter={() => setActiveNode("dynamodb")}>
              <rect x="380" y="90" width="50" height="50" rx="8" fill={activeNode === "dynamodb" ? "rgba(16, 185, 129, 0.15)" : "#0f1225"} stroke={activeNode === "dynamodb" ? "#10b981" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Database className={`w-5 h-5 absolute ${activeNode === "dynamodb" ? "text-emerald-450" : "text-slate-400"}`} style={{ transform: "translate(395px, 103px)" }} />
              <text x="405" y="150" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">DynamoDB</text>
            </g>

            {/* S3 Storage */}
            <g className="cursor-pointer" onClick={() => setActiveNode("s3")} onMouseEnter={() => setActiveNode("s3")}>
              <rect x="380" y="195" width="50" height="50" rx="8" fill={activeNode === "s3" ? "rgba(99, 102, 241, 0.15)" : "#0f1225"} stroke={activeNode === "s3" ? "#6366f1" : "rgba(255,255,255,0.05)"} strokeWidth="1.5" />
              <Radio className={`w-5 h-5 absolute ${activeNode === "s3" ? "text-indigo-450" : "text-slate-400"}`} style={{ transform: "translate(395px, 208px)" }} />
              <text x="405" y="255" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">S3 Bucket</text>
            </g>

            {/* Bedrock AI */}
            <g className="cursor-pointer" onClick={() => setActiveNode("bedrock")} onMouseEnter={() => setActiveNode("bedrock")}>
              <rect x="490" y="140" width="50" height="50" rx="8" fill={activeNode === "bedrock" ? "rgba(16, 185, 129, 0.25)" : "#0f1225"} stroke="#10b981" strokeWidth="2" />
              <circle cx="515" cy="165" r="9" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" className="animate-spin-slow" />
              <text x="515" y="200" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">Bedrock</text>
            </g>
          </svg>
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {selectedNode && (
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-450 bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {selectedNode.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {selectedNode.sla}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {selectedNode.name}
                </h3>
                <p className="text-sm text-slate-350 leading-relaxed">
                  {selectedNode.role}
                </p>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Node Latency:</span>
                    <span className="font-semibold text-emerald-450">{selectedNode.latency}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Load Factor:</span>
                    <span className="font-semibold text-[#00f5ff]">{selectedNode.metric}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-450 italic">
                  {selectedNode.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
