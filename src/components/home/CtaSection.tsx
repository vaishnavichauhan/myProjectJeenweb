"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import ConsultationModal from "../common/ConsultationModal";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative z-20 -mb-20 sm:-mb-24 lg:-mb-28" id="consultation-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B192C] via-[#11253E] to-[#0B192C] border border-slate-700/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-950/40 relative overflow-hidden backdrop-blur-sm">
            {/* Subtle ambient glow inside card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
              <div className="text-center lg:text-left space-y-2.5 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-red-400" />
                  <span>Direct Engineering Advisory • Vadodara</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Secure Your Infrastructure. Optimize Your Growth.
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  You don&apos;t have to figure out your IT gaps alone. Reach out and talk directly with our team — we&apos;ll look at where your current web setup stands, what your application needs are, and whether your cloud and mail tools are actually working the way they should be.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-900/40 hover:shadow-red-900/60 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Talk to Us</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15 hover:border-white/30 text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3 h-3 text-slate-300" />
                  <span>Contact Corporate Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="Infrastructure & Growth Advisory"
      />
    </>
  );
}
