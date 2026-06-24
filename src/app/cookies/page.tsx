import React from "react";

export default function CookiesPage() {
  return (
    <div className="relative py-12 md:py-24 max-w-4xl mx-auto px-4 text-slate-350 leading-relaxed">
      <div className="mesh-glow-cyan top-[15%] left-[-15%]" />
      <div className="space-y-8">
        <div className="border-b border-white/5 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Cookie Policy</h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">Last Updated: June 24, 2026</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">1. How Cookies Are Used</h2>
          <p className="text-sm">
            We use essential cookies to manage your secure Cognito login sessions, track dynamic dashboard preferences, and capture telemetry costs details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">2. Essential Caching Cookies</h2>
          <p className="text-sm">
            AWS Cognito directories deploy essential cookies containing encrypted JSON Web Tokens (JWT) to authenticate api requests. If disabled, you cannot enter your LexFlow Pro workspace.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">3. Browser Local Storage</h2>
          <p className="text-sm">
            Draft contract parameter values (e.g. clientName) are stored in local storage cache triggers. Clearing browser cookies will remove active draft histories.
          </p>
        </section>
      </div>
    </div>
  );
}
