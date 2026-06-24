"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, TrendingDown, Zap } from "lucide-react";

export default function CaseStudiesPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [metricType, setMetricType] = useState<"latency" | "throughput">("latency");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 250);

    const points: { x: number; y: number }[] = [];
    const maxPoints = 12;
    for (let i = 0; i < maxPoints; i++) {
      points.push({
        x: (width / (maxPoints - 1)) * i,
        y: height / 2 + (Math.random() - 0.5) * 50,
      });
    }

    let offset = 0;

    const drawCurve = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = "rgba(255,255,255,0.03)";
      ctx.lineWidth = 1;
      const numLines = 6;
      for (let i = 1; i < numLines; i++) {
        const y = (height / numLines) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      points.forEach((p, idx) => {
        if (idx > 0 && idx < points.length - 1) {
          const targetY =
            metricType === "latency"
              ? height * 0.75 - (idx * 15) + Math.sin(offset + idx) * 12
              : height * 0.25 + (idx * 10) + Math.cos(offset + idx) * 15;
          p.y += (targetY - p.y) * 0.08;
        }
      });

      offset += 0.06;

      // Area fill
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.lineTo(width, height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      if (metricType === "latency") {
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.15)");
        gradient.addColorStop(1, "rgba(99, 102, 241, 0.0)");
      } else {
        gradient.addColorStop(0, "rgba(16, 185, 129, 0.15)");
        gradient.addColorStop(1, "rgba(16, 185, 129, 0.0)");
      }
      ctx.fillStyle = gradient;
      ctx.fill();

      // Bezier Line
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.strokeStyle = metricType === "latency" ? "#6366f1" : "#10b981";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Nodes on peaks
      points.forEach((p, idx) => {
        if (idx % 3 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
          ctx.strokeStyle = metricType === "latency" ? "rgba(99, 102, 241, 0.4)" : "rgba(16, 185, 129, 0.4)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(drawCurve);
    };

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 600;
      points.forEach((p, idx) => {
        p.x = (width / (maxPoints - 1)) * idx;
      });
    };

    window.addEventListener("resize", handleResize);
    drawCurve();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [metricType]);

  const projects = [
    {
      title: "Legal Contract Lifecycle Automation",
      client: "Vortex Digital Agency",
      metric: "99.9% Automation",
      highlight: "Onboarding speeds down to 90s",
      desc: "Vortex Agency was struggling with manual NDA drafting and client scope signatures. We integrated LexFlow's serverless compilation APIs, automating document deliveries via Amazon S3 vaults.",
      achievements: [
        "AWS API Gateway setup routing over 40,000 monthly contracts",
        "Cognito pools securely isolated multi-user team workspaces",
        "KMS envelope keys protecting client signature hashes",
        "S3 WORM locks integrated preventing post-signing edits",
      ],
    },
    {
      title: "SaaS Multi-Tenant Cloud Migration",
      client: "SignCorp Inc",
      metric: "Migration Completed",
      highlight: "Zero record loss in transit",
      desc: "SignCorp needed to migrate their legacy PostgreSQL database and document templates onto AWS. We refactored their codebase, deploying auto-scaled ECS Fargate tasks with Prisma connections.",
      achievements: [
        "AWS DMS migrated over 2 TB of contract metadata safely",
        "VPC subnets isolating database read/write connections",
        "CloudWatch monitors triggering real-time SRE incident alarms",
        "Cognito user pool synchronization completed for SSO",
      ],
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      <div className="mesh-glow-indigo top-[15%] left-[-20%]" />
      <div className="mesh-glow-emerald top-[50%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Our Projects</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Proven Cloud Integrations
          </h1>
          <p className="text-slate-350 leading-relaxed">
            Review detailed case profiles tracking how NEXOVYTE modernizes old database schemas and automates administrative overheads.
          </p>
        </div>

        {/* Telemetry panel */}
        <div className="glow-card p-6 md:p-8 bg-[#0a0d1e]/80 border border-white/5 rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/5">
            <div>
              <h3 className="text-xl font-bold text-white font-display">Live Infrastructure Telemetry</h3>
              <p className="text-xs text-slate-400 mt-0.5">Real-time metrics tracking contract compilation speeds post-migration.</p>
            </div>
            {/* Toggles */}
            <div className="flex gap-2 p-1 bg-slate-950 border border-white/5 rounded-xl">
              <button
                onClick={() => setMetricType("latency")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  metricType === "latency" ? "bg-slate-900 text-indigo-400" : "text-slate-450 hover:text-white"
                }`}
              >
                <TrendingDown className="w-3.5 h-3.5 inline mr-1" /> Latency Reduction (ms)
              </button>
              <button
                onClick={() => setMetricType("throughput")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  metricType === "throughput" ? "bg-slate-900 text-emerald-450" : "text-slate-450 hover:text-white"
                }`}
              >
                <Zap className="w-3.5 h-3.5 inline mr-1" /> Document Throughput (req/m)
              </button>
            </div>
          </div>

          <div className="bg-slate-950/80 rounded-xl p-4 border border-white/5 relative">
            <canvas ref={canvasRef} className="w-full h-[250px] block" />
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-450 font-bold uppercase tracking-wider">Live Metrics Hooked</span>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="glow-card p-6 md:p-8 bg-[#0a0d1e]/60 border border-white/5 rounded-2xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div>
                    <span className="text-[10px] text-emerald-450 uppercase font-extrabold tracking-wider">{proj.client}</span>
                    <h3 className="text-xl font-bold text-white font-display mt-0.5">{proj.title}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-450 hover:text-white transition-colors cursor-pointer flex-shrink-0" />
                </div>

                <div className="flex gap-2">
                  <span className="text-xs font-bold text-emerald-450 bg-emerald-950/30 border border-emerald-500/20 px-2.5 py-1 rounded">
                    {proj.metric}
                  </span>
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-950/30 border border-indigo-500/20 px-2.5 py-1 rounded">
                    {proj.highlight}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {proj.desc}
                </p>

                {/* Achievements list */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-450">Key Deliverables</h4>
                  <ul className="space-y-2">
                    {proj.achievements.map((ac, aidx) => (
                      <li key={aidx} className="flex gap-2 text-xs text-slate-350">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-450 flex-shrink-0 mt-0.5" />
                        <span>{ac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-8 text-center py-3 bg-slate-950 border border-white/5 hover:border-emerald-500/40 text-xs font-bold text-slate-300 hover:text-white rounded-xl transition-all block"
              >
                Inquire About Case Specifications
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
