"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Terminal, AlertTriangle, ArrowRight } from "lucide-react";

export default function NotFound() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([
    "NEXOVYTE Core Diagnostics Console v1.0",
    "Running environment checks...",
    "",
    "STATUS: ERROR 404 - ENDPOINT UNREGISTERED",
    "Type 'help' to review console operations, or 'verify' to test routing.",
    "",
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response: string[] = [];
    switch (cmd) {
      case "help":
        response = [
          `$ ${inputVal}`,
          "Console Operations Instructions:",
          "  verify    - Tests router endpoints map",
          "  status    - Displays Cognito pool & S3 compliance status",
          "  home      - Redirects console to nexovyte.com homepage",
          "  clear     - Clears the terminal output logs",
          "",
        ];
        break;
      case "verify":
        response = [
          `$ ${inputVal}`,
          "[SCANNING] Scanning App Router folder structures...",
          "  - Verifying root layouts... [OK]",
          "  - Inspecting target path maps... [FAILED] Path unmapped",
          "  - Cognito auth checks... [OK]",
          "[CONCLUSION] Path '/non-existent-page' does not exist in next.config.ts router.",
          "",
        ];
        break;
      case "status":
        response = [
          `$ ${inputVal}`,
          "NEXOVYTE Serverless Status logs:",
          "  - AWS Cognito identity pool: ACTIVE (healthy)",
          "  - S3 Object Lock compliance: LOCKED (WORM active)",
          "  - AWS Lambda compute runners: STANDBY",
          "  - LexFlow contract compiler: ONLINE (healthy)",
          "",
        ];
        break;
      case "home":
        response = [`$ ${inputVal}`, "Redirecting home...", ""];
        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        response = [
          `$ ${inputVal}`,
          `Command '${inputVal}' unrecognized. Type 'help' to review list.`,
          "",
        ];
    }

    setHistory((prev) => [...prev, ...response]);
    setInputVal("");
  };

  return (
    <div className="relative py-12 md:py-24 max-w-3xl mx-auto px-4 min-h-[80vh] flex flex-col justify-center">
      <div className="mesh-glow-indigo top-[20%] left-[-15%]" />
      <div className="mesh-glow-emerald top-[50%] right-[-15%]" />

      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-950/40 border border-rose-500/20 text-rose-450 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white font-display">Diagnostics Exception</h1>
            <p className="text-xs text-slate-405">Routing layer failed to resolve active path mapping.</p>
          </div>
        </div>

        {/* Console Box */}
        <div className="glow-card p-4 md:p-6 bg-black border border-white/5 rounded-2xl">
          <div className="flex items-center gap-1.5 pb-3 border-b border-white/5 text-slate-500 font-mono text-xs">
            <Terminal className="w-4 h-4" />
            <span>nexovyte_diagnostics.sh</span>
          </div>

          <div className="pt-4 h-[280px] overflow-y-auto font-mono text-xs text-slate-350 space-y-1.5 scrollbar-thin">
            {history.map((line, idx) => (
              <div key={idx} className="min-h-[14px]">
                {line}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Console Form */}
          <form onSubmit={handleCommand} className="flex gap-2 pt-3 border-t border-white/5 mt-2">
            <span className="text-emerald-450 font-mono text-xs font-bold pt-1">$</span>
            <input
              type="text"
              autoFocus
              placeholder="type 'help' or 'verify'..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-grow bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-650"
            />
            <button type="submit" className="text-[10px] font-mono text-slate-500 hover:text-white uppercase font-bold tracking-wider">
              Execute
            </button>
          </form>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-450 hover:text-white transition-colors"
          >
            Or return using standard links <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
