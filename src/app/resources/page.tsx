"use client";

import React, { useState } from "react";
import { Download, FileText, CheckCircle2, Cloud, Terminal } from "lucide-react";

export default function ResourcesPage() {
  const [downloadProgress, setDownloadProgress] = useState<Record<string, number>>({});
  const [activeDlId, setActiveDlId] = useState<string | null>(null);

  const resources = [
    {
      id: "contract-checklist",
      name: "Freelance Service Agreement Checklist.pdf",
      size: "1.4 MB",
      desc: "Complete 15-point review checklist mapping intellectual property limits, payment terms, and scope approvals.",
    },
    {
      id: "aws-compliance-whitepaper",
      name: "LexFlow AWS Cloud Compliance & WORM Storage.pdf",
      size: "2.1 MB",
      desc: "CDK stacks blueprint configuration mapping Cognito secure user pools, KMS envelope locks, and S3 object lock settings.",
    },
    {
      id: "agency-nda-template",
      name: "Standard Mutual NDA Template.docx",
      size: "950 KB",
      desc: "Standard legal wording for agency mutual non-disclosures protecting source repositories, assets, and plans.",
    },
  ];

  const handleDownload = (id: string) => {
    if (activeDlId) return;
    setActiveDlId(id);
    setDownloadProgress((prev) => ({ ...prev, [id]: 0 }));

    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setDownloadProgress((prev) => ({ ...prev, [id]: current }));

      if (current >= 100) {
        clearInterval(interval);
        setActiveDlId(null);
      }
    }, 120);
  };

  return (
    <div className="relative py-12 md:py-24">
      <div className="mesh-glow-indigo top-[15%] left-[-20%]" />
      <div className="mesh-glow-emerald top-[50%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Developer Resources</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            Guides, Templates & Technical Specs
          </h1>
          <p className="text-slate-350 leading-relaxed">
            Download business guides, contract checklists, and audit whitepapers directly from our Cognito-secured S3 storage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res) => {
            const progress = downloadProgress[res.id] ?? 0;
            const isFinished = progress >= 100;
            const isCurrent = activeDlId === res.id;

            return (
              <div
                key={res.id}
                className="glow-card p-6 bg-[#0a0d1e]/50 border border-white/5 rounded-2xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-450 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-900 border border-white/5 px-2 py-0.5 rounded font-bold">
                      {res.size}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-sm font-display leading-tight">{res.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{res.desc}</p>
                </div>

                {/* Progress bar downloads */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  {progress > 0 && !isFinished ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono">
                        <span className="text-slate-500">Downloading S3 object...</span>
                        <span className="text-emerald-450 font-bold">{progress}%</span>
                      </div>
                      <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-emerald-450 h-1.5 rounded-full transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  ) : isFinished ? (
                    <div className="flex items-center gap-2 text-xs text-emerald-450 bg-emerald-950/20 border border-emerald-500/20 px-3 py-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Download Ready!</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDownload(res.id)}
                      disabled={activeDlId !== null}
                      className="w-full py-2.5 bg-slate-900 border border-white/10 hover:border-emerald-500/30 text-slate-200 hover:text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Template
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
