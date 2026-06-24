import React from "react";

export default function DisclaimerPage() {
  return (
    <div className="relative py-12 md:py-24 max-w-4xl mx-auto px-4 text-slate-350 leading-relaxed">
      <div className="mesh-glow-indigo top-[10%] left-[-15%]" />
      <div className="space-y-8">
        <div className="border-b border-white/5 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Legal Disclaimer</h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">Last Updated: June 24, 2026</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">1. Not Legal Advice</h2>
          <p className="text-sm">
            <strong>NEXOVYTE</strong> and the **LexFlow™** platform provide legal document management, variable compilation, and digital signature workflow tools.
          </p>
          <p className="text-sm">
            NEXOVYTE is not a law firm and does not provide legal advice, representation, or opinions. Using LexFlow's templates does not create an attorney-client relationship.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">2. Template Validation</h2>
          <p className="text-sm">
            Contract templates, NDAs, and onboarding agreements provided on LexFlow are blueprints. We recommend you review compiled contracts with qualified legal professionals in your jurisdiction before executing binding agreements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">3. Limitation of Liability</h2>
          <p className="text-sm">
            NEXOVYTE is not liable for damages or legal disputes arising from contract wording choices or enforcement outcomes. You use compiled templates entirely at your own risk.
          </p>
        </section>
      </div>
    </div>
  );
}
