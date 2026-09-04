"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export interface CommonCtaProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  id?: string;
  className?: string;
  showPhoneIcon?: boolean;
}

export default function CommonCta({
  title,
  subtitle,
  buttonText = "Speak with Performance Specialist",
  buttonHref = "/contact",
  id = "consultation-cta",
  className = "",
  showPhoneIcon = true,
}: CommonCtaProps) {
  return (
    <section
      className={`py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-200/80 ${className}`}
      id={id}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Sapphire Gradient Container with Checkered Grid */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] text-white border border-slate-700/60 shadow-2xl p-8 sm:p-10 lg:p-12 group">
          {/* Subtle Checkered Grid Accent (32px by 32px) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Ambient Background Lighting */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#C11E23]/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#00E5FF]/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-14">
            {/* Left Column: Headline & Narrative (Reduced Heading Size) */}
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-snug sm:leading-tight">
                {title}
              </h2>

              {subtitle && (
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans max-w-xl">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Right Column: High-Impact Action Button */}
            <div className="flex items-center flex-shrink-0 w-full sm:w-auto">
              <Link
                href={buttonHref}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/40 hover:scale-[1.02] flex items-center justify-center gap-2.5 group cursor-pointer active:scale-98"
              >
                {showPhoneIcon && <PhoneCall className="w-4 h-4 text-white" />}
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
