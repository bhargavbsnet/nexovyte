"use client";

import React from "react";
import { User, Calendar, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      id: "esign-compliance-guide",
      title: "Understanding ESIGN & eIDAS Compliance inside Custom SaaS Apps",
      excerpt: "A technical walkthrough of how we implement cryptographic signature hashes, timestamp logs, and isolated storage parameters that meet audit thresholds.",
      category: "Legal Tech",
      date: "June 18, 2026",
      author: "Rebecca Stone",
      readTime: "7 min read",
    },
    {
      id: "s3-object-lock-setup",
      title: "Configuring Amazon S3 Object Lock for Tamper-Proof Document Archival",
      excerpt: "Step-by-step configurations for setting S3 WORM policies, bucket version configurations, and key overrides prevention using AWS CDK.",
      category: "AWS Cloud",
      date: "May 20, 2026",
      author: "Niranjan Basnet",
      readTime: "10 min read",
    },
    {
      id: "agency-onboarding-automation",
      title: "Reducing Client Onboarding Friction via API Gateway workflows",
      excerpt: "How digital agencies connect HubSpot lead triggers to automated contract generation, shaving hours off transaction overheads.",
      category: "Automation",
      date: "April 05, 2026",
      author: "James K.",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="relative py-12 md:py-24">
      <div className="mesh-glow-indigo top-[15%] left-[-20%]" />
      <div className="mesh-glow-emerald top-[55%] right-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Blog Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-450">Bulletins & Insights</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">
            NEXOVYTE Tech Hub
          </h1>
          <p className="text-slate-350 leading-relaxed">
            Read engineering guides written by our cloud developers covering contract automation, Cognito authorization, and S3 secure storage architectures.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="glow-card p-6 bg-[#0a0d1e]/60 border border-white/5 rounded-2xl flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 font-bold uppercase">
                  <span className="text-emerald-450 border border-emerald-500/20 bg-emerald-950/20 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-450 transition-colors font-display leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                </div>

                <a
                  href="/contact"
                  className="w-full text-center py-2.5 bg-slate-900 border border-white/10 hover:border-emerald-500/30 rounded-xl text-xs font-bold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
