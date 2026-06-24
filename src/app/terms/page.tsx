import React from "react";

export default function TermsPage() {
  return (
    <div className="relative py-12 md:py-24 max-w-4xl mx-auto px-4 text-slate-350 leading-relaxed">
      <div className="mesh-glow-violet top-[15%] right-[-15%]" />
      <div className="space-y-8">
        <div className="border-b border-white/5 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Terms of Service</h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">Last Updated: June 24, 2026</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">1. Acceptance of Terms</h2>
          <p className="text-sm">
            By registering a workspace on <strong>NEXOVYTE</strong> (nexovyte.com) and utilizing LexFlow™, you agree to comply with our rate limits, AWS Cognito user parameters, and legal document generation regulations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">2. SaaS Account Integrity</h2>
          <p className="text-sm">
            You must secure your Cognito authorization tokens and account secrets. Attempts to execute unauthorized API requests against our Lambda compute scripts or S3 storage buckets will trigger instant account termination.
          </p>
          <p className="text-sm">
            Contracts compiled inside LexFlow are templates. You remain responsible for validating terms and legal compliance specific to your operating regions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">3. Pricing and Payments</h2>
          <p className="text-sm">
            Pro and Enterprise subscription rates are billed monthly. Unpaid balances will trigger Cognito user workspace suspension within 7 days.
          </p>
        </section>
      </div>
    </div>
  );
}
