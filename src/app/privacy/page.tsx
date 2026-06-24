import React from "react";

export default function PrivacyPage() {
  return (
    <div className="relative py-12 md:py-24 max-w-4xl mx-auto px-4 text-slate-350 leading-relaxed">
      <div className="mesh-glow-indigo top-[10%] left-[-15%]" />
      <div className="space-y-8">
        <div className="border-b border-white/5 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">Last Updated: June 24, 2026</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">1. Information Log Ingestions</h2>
          <p className="text-sm">
            At <strong>NEXOVYTE</strong> (nexovyte.com), we protect the security of your contracts and identity directories. We collect names, emails, and workspace details when you register through our Cognito user pools.
          </p>
          <p className="text-sm">
            Legal documents constructed inside the LexFlow™ platform are stored directly inside isolated storage directories on Amazon S3. We do not inspect, index, or parse contract drafts unless authorized by your user credentials to stream summaries via Bedrock API models.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">2. Cryptographic Security Standards</h2>
          <p className="text-sm">
            E-signature verification records are stamped with unique SHA-256 hashes and encrypted in transit using HTTPS TLS 1.3 protocol standards.
          </p>
          <p className="text-sm">
            Object locks (WORM) are enforced on S3 files, guaranteeing that finalized agreements cannot be altered, overwritten, or modified post-signature, matching standard corporate compliance rules.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white font-display">3. Contact Details</h2>
          <p className="text-sm">
            For security audits or database deletion logs, contact our compliance team directly via our [inquiry form](/contact). We do not provide physical address offices or phone queues.
          </p>
        </section>
      </div>
    </div>
  );
}
