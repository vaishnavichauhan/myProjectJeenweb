"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Target, CheckCircle2, HeartHandshake, Sparkles } from "lucide-react";

export default function CorporatePurposeSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80" id="purpose">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#E11D48]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block border-b-2 border-[#C11E23] pb-1">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
              Corporate Purpose & Mandate
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 leading-[1.08]">
            A Trusted IT & Digital Partner <br />
            <span className="text-[#073F8A]">For Businesses Across Gujarat</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed pt-1">
            Genuine code, licensed tools, and single-roof accountability from our dedicated Vadodara engineering offices.
          </p>
        </div>

        {/* 3-Column Layout with Animated Center-Out Emerge / Unfold Effect */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative"
          style={{ perspective: 1200 }}
        >
          
          {/* Left Card: Who We Are (Slides out from behind center card to the Left) */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 22,
              mass: 0.6,
              delay: 0.12
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group flex flex-col justify-between z-10"
          >
            {/* Top Blue Accent Stripe (Changes to Red on Hover) */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#073F8A] group-hover:bg-[#E11D48] transition-colors duration-300" />

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#073F8A] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#073F8A] text-[10px] font-mono font-bold uppercase tracking-wider border border-blue-100">
                  01 / Identity
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Who We Are
                </h3>
                <div className="w-8 h-1 bg-[#073F8A] rounded-full mt-2 mb-3" />
              </div>

              <div className="space-y-3 text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                <p>
                  Jeenweb Technologists Pvt. Ltd. is an IT and digital solutions company based in Vadodara, Gujarat. We build proper, dependable technology systems tailored around the way your business actually runs.
                </p>
                <p>
                  We do not use pirated software, copied code, or unverified third-party tools. Our in-house team has delivered custom software, ERP systems, cloud setups, and SEO for over 200 businesses across Gujarat.
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-[11px] font-mono font-medium border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#073F8A]" />
                26+ Years Track Record
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-[11px] font-mono font-medium border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#073F8A]" />
                Zero Pirated Tools
              </span>
            </div>
          </motion.div>

          {/* Center Card: Puzzle Partnership Visual (Anchor in Center) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 24,
              mass: 0.5
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden group z-20"
          >
            {/* Image Container with Soft Shadow */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-inner mb-5">
              <Image
                src="/images/corporate-purpose-puzzle.jpg"
                alt="Business Partnership and Technical Synergy"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Top Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#073F8A] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm border border-slate-200">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#E11D48]" />
                  Perfect Alignment
                </span>
              </div>
            </div>

            {/* Text Description */}
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                Bridging Physical Operations with Digital Precision
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                We don&apos;t build software in a vacuum. We align directly with your ground-level workflows to ensure zero friction, immediate adoption, and long-term stability.
              </p>
            </div>

            {/* Bottom Quick Trust Stat */}
            <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="text-[#073F8A] font-bold">100% In-House</span>
              <span className="text-slate-400">• Vadodara Desk</span>
            </div>
          </motion.div>

          {/* Right Card: What We Are Here to Do (Slides out from behind center card to the Right) */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 22,
              mass: 0.6,
              delay: 0.12
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group flex flex-col justify-between z-10"
          >
            {/* Top Red Accent Stripe (Changes to Blue on Hover) */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E11D48] group-hover:bg-[#073F8A] transition-colors duration-300" />

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E11D48] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-red-50 text-[#E11D48] text-[10px] font-mono font-bold uppercase tracking-wider border border-red-100">
                  02 / Mission
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  What We Are Here to Do
                </h3>
                <div className="w-8 h-1 bg-[#E11D48] rounded-full mt-2 mb-3" />
              </div>

              <div className="space-y-3 text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                <p>
                  Our goal is simple—build IT systems that businesses count on every single day without worrying about crashes, data loss, or software their team refuses to use.
                </p>
                <p>
                  We close the gap between software development and actual on-the-ground team usage. Every system starts with deep operational understanding, clean code, honest updates, and dedicated lifetime involvement.
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-[11px] font-mono font-medium border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48]" />
                Zero Crash Standards
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-[11px] font-mono font-medium border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48]" />
                Continuous Support
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
