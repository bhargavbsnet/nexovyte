"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMsg(data.message || "Subscribed successfully!");
      } else {
        setStatus("error");
        setMsg(data.error || "Subscription failed.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMsg("Connection error occurred.");
    }
  };

  const footerCols = [
    {
      title: "Services",
      links: [
        { name: "AWS Consulting", href: "/services" },
        { name: "SaaS Development", href: "/services" },
        { name: "Legal Automation", href: "/services" },
        { name: "DevOps & Cloud Ops", href: "/services" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "For Freelancers", href: "/solutions" },
        { name: "For Digital Agencies", href: "/solutions" },
        { name: "For Startup Teams", href: "/solutions" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Contract Templates", href: "/resources" },
        { name: "Integration Guides", href: "/resources" },
        { name: "SaaS Bulletins", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Meet the Team", href: "/about" },
        { name: "Project Audits", href: "/case-studies" },
        { name: "Hiring Openings", href: "/careers" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#070a1a] z-10 pt-20 pb-10">
      {/* Top ambient lights */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-highlight/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <svg
                className="w-8 h-8 text-emerald-450"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 5L85 20V55C85 75 70 90 50 95C30 90 15 75 15 55V20L50 5Z"
                  stroke="#10b981"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  className="opacity-40"
                />
                <path
                  d="M32 30V70L50 45L68 70V30"
                  stroke="#6366f1"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="45" r="6" fill="#10b981" />
              </svg>
              <span className="text-lg font-bold tracking-wider font-display text-white">
                NEXOVYTE
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Powering independent developers, digital agencies, and consultants with enterprise cloud integration and LexFlow™ legal workflow automation.
            </p>

            {/* Newsletter */}
            <div className="space-y-3 pt-2">
              <span className="block text-xs font-bold uppercase tracking-widest text-slate-350">
                Join our Dispatch
              </span>
              {status === "success" ? (
                <div className="flex items-center gap-2 text-sm text-emerald-450 bg-emerald-950/20 border border-emerald-500/20 px-4 py-3 rounded-xl max-w-xs">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{msg}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-xs relative group">
                  <input
                    type="email"
                    required
                    placeholder="you@agency.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-[#0d0f22] border border-white/10 focus:border-emerald-450 focus:ring-1 focus:ring-emerald-450 rounded-xl py-2.5 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || !email}
                    className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-secondary to-highlight text-[#070a1a] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
              {status === "error" && (
                <span className="block text-xs text-rose-450">{msg}</span>
              )}
            </div>
          </div>

          {/* Links columns */}
          {footerCols.map((col) => (
            <div key={col.title} className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-400 hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal & copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-xs text-slate-400">
          <span>
            &copy; {new Date().getFullYear()} NEXOVYTE. All rights reserved. nexovyte.com
          </span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
