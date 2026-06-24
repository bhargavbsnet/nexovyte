"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "LexFlow™ Platform", href: "/lexflow" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#070a1a]/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg
              className="w-9 h-9 text-emerald-450 transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Shield/Seal represents Legal & Professionalism */}
              <path
                d="M50 5L85 20V55C85 75 70 90 50 95C30 90 15 75 15 55V20L50 5Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
                className="opacity-40"
              />
              {/* Geometric Monogram 'N' + loop */}
              <path
                d="M32 30V70L50 45L68 70V30"
                stroke="#6366f1"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Automated flow knot */}
              <circle cx="50" cy="45" r="6" fill="#10b981" />
              <circle cx="68" cy="30" r="5" fill="#00f5ff" />
              <circle cx="32" cy="70" r="5" fill="#00f5ff" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider font-display bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                NEXOVYTE
              </span>
              <span className="text-[9px] tracking-[0.25em] text-emerald-450 font-semibold -mt-1">
                LEGAL WORKFLOWS
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1.5 ${
                    isActive ? "text-emerald-450" : "text-slate-350 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-450"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-semibold tracking-wider text-slate-200 hover:text-white transition-colors"
            >
              Inquire Now
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-xs font-bold tracking-wider rounded-xl bg-gradient-to-r from-secondary to-highlight text-[#070a1a] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center gap-1.5"
            >
              LexFlow™ Demo <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile drawer toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-450 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/5 bg-[#070a1a] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3.5">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 px-3 rounded-lg text-base font-semibold ${
                      isActive
                        ? "bg-slate-900 text-emerald-450"
                        : "text-slate-300 hover:bg-slate-950 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-sm font-semibold rounded-lg border border-white/10 text-slate-200"
                >
                  Inquire Now
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-sm font-bold rounded-lg bg-gradient-to-r from-secondary to-highlight text-[#070a1a]"
                >
                  LexFlow™ Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
