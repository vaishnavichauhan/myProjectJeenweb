"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function TimelineChevronTrack() {
  // Phase 1 (2000 - 2017) & Phase 2 (2020 - 2026+)
  const [phase, setPhase] = useState<0 | 1>(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change phase every 6 seconds (pauses when user hovers)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPhase((prev) => (prev === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const phase1Top = [
    { year: "2000", desc: "Incorporated as Jeen Info Tech in Vadodara, offering web hosting, domain setups, and foundational web solutions." },
    { year: "2006", desc: "Expanded service coverage from web hosting into custom business software and workflow automation." },
    { year: "2012", desc: "Tatvam Shah joined leadership, restructuring development cycles into structured analysis, testing & deployment." },
    { year: "2016", desc: "Unified merger into Jeenweb Technologists Pvt. Ltd., consolidating web & enterprise engineering under single roof." }
  ];

  const phase1Bottom = [
    { year: "2003", desc: "Expanded web design & database services to multi-industry commercial clients across Central Gujarat." },
    { year: "2008", desc: "Scaled custom software architecture for manufacturing ERPs, automating manual spreadsheets." },
    { year: "2013", desc: "Launched Jeeninfo Soft as a dedicated vertical for custom enterprise applications and authorized software." },
    { year: "2017", desc: "Delivered next-gen industrial ERPs for Gujarat's leading manufacturing & distribution enterprises." }
  ];

  const phase2Top = [
    { year: "2020", desc: "Expanded in-house engineering team to 24+ full-time specialists in Vadodara for zero-lag maintenance." },
    { year: "2021", desc: "Became Authorized Google Workspace Partner, delivering enterprise cloud migrations & tenant security." },
    { year: "2022", desc: "Integrated full Microsoft 365 enterprise services, hybrid Exchange setups, and cloud administration." },
    { year: "2026", desc: "Opened 2nd corporate office in Vadodara, launched ETS PROP & engineered Project JE email platform." }
  ];

  const phase2Bottom = [
    { year: "2021", desc: "Deployed high-speed NVMe infrastructure and strict DMARC authentication protocols." },
    { year: "2023", desc: "Moved to expanded 1,000 sq.ft. modern tech facility in Vadodara for accelerated client briefings." },
    { year: "2024", desc: "Pioneered Answer Engine Optimization (AEO) and GEO architectures for AI search discovery." },
    { year: "Future", desc: "Rollout of Project JE—proprietary enterprise business email eliminating multi-vendor complexity." }
  ];

  const topItems = phase === 0 ? phase1Top : phase2Top;
  const bottomItems = phase === 0 ? phase1Bottom : phase2Bottom;

  return (
    <section className="py-16 lg:py-24 bg-[#F0F4F8] relative overflow-hidden text-slate-900" id="timeline">
      
      {/* ========================================================================= */}
      {/* TOP-LEFT SWEEPING WORKSPACE PHOTO MASK */}
      {/* ========================================================================= */}
      <div className="hidden lg:block absolute top-0 left-0 w-[34%] h-[44%] z-0 pointer-events-none">
        <div
          className="relative w-full h-full overflow-hidden shadow-md"
          style={{
            clipPath: "ellipse(100% 100% at 0% 0%)",
          }}
        >
          <Image
            src="/images/timeline-ref-workspace.jpg"
            alt="Jeenweb Historical Engineering Office Workspace"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#073F8A]/10 via-transparent to-[#F0F4F8]/80 pointer-events-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* HEADER: Title & Subtitle (Positioned to right of left-corner photo) */}
        {/* ========================================================================= */}
        <div className="max-w-2xl lg:ml-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-slate-900 font-sans leading-tight">
            Company history from 2000 to 2026
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            This timeline illustrates Jeenweb&apos;s growth journey from foundational web hosting to custom software development, corporate mergers, authorized cloud partnerships, and multi-office enterprise operations.
          </p>

          {/* Phase Switcher (Architectural Flat Linear Underline Tabs) */}
          <div className="pt-4 border-b border-slate-300/70">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              
              {/* Tab 01 */}
              <button
                onClick={() => setPhase(0)}
                className={`pb-3.5 flex items-center gap-2.5 text-left relative transition-colors ${
                  phase === 0 ? "text-slate-950 font-bold" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded transition-colors ${
                    phase === 0 ? "bg-[#073F8A] text-white" : "bg-slate-200/80 text-slate-600"
                  }`}
                >
                  01
                </span>
                <div>
                  <div className="text-sm font-bold tracking-tight">Phase 1: Foundation & Growth</div>
                  <div className="text-[11px] font-mono text-slate-500">2000 – 2017</div>
                </div>

                {/* Active Indicator Underline */}
                {phase === 0 && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#073F8A]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Divider */}
              <div className="hidden sm:block w-px h-7 bg-slate-300/80 mb-3" />

              {/* Tab 02 */}
              <button
                onClick={() => setPhase(1)}
                className={`pb-3.5 flex items-center gap-2.5 text-left relative transition-colors ${
                  phase === 1 ? "text-slate-950 font-bold" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded transition-colors ${
                    phase === 1 ? "bg-[#073F8A] text-white" : "bg-slate-200/80 text-slate-600"
                  }`}
                >
                  02
                </span>
                <div>
                  <div className="text-sm font-bold tracking-tight">Phase 2: Enterprise & Cloud</div>
                  <div className="text-[11px] font-mono text-slate-500">2020 – 2026+</div>
                </div>

                {/* Active Indicator Underline */}
                {phase === 1 && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#073F8A]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP CHEVRON TRACK (Exact Slide Layout from Reference Image) */}
        {/* ========================================================================= */}
        <div
          className="hidden lg:block relative mt-8 mb-4 cursor-pointer px-4 py-2"
          style={{ perspective: 1200 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={phase}
              initial={{ 
                opacity: 0, 
                rotateY: phase === 0 ? -90 : 90, 
                scale: 0.94
              }}
              animate={{ 
                opacity: 1, 
                rotateY: 0, 
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                rotateY: phase === 0 ? 90 : -90, 
                scale: 0.94
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 1, 0.5, 1] 
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 1. TOP ROW: Years & Connector Dots */}
              <div className={`grid grid-cols-4 pb-3 ${phase === 0 ? "pl-12 pr-28" : "pl-28 pr-12"}`}>
                {topItems.map((item) => (
                  <div key={item.year} className="flex flex-col items-center text-center">
                    <span className="text-3xl font-bold tracking-tight text-[#00B4D8] font-sans">
                      {item.year}
                    </span>
                    {/* Connector Dot */}
                    <div className="flex flex-col items-center mt-1">
                      <div className="w-3 h-3 rounded-full bg-[#00D2FF] ring-4 ring-[#00D2FF]/25" />
                      <div className="w-0.5 h-3 bg-[#00D2FF]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* 2. MAIN CHEVRON ARROW CONTAINER */}
              <div className="relative">
                {/* Phase 0: Right Blue/Cyan Chevron Accent Tip */}
                {phase === 0 && (
                  <div
                    className="absolute -right-4 top-0 bottom-0 w-28 bg-[#00D2FF] rounded-r-xl pointer-events-none z-0"
                    style={{
                      clipPath: "polygon(calc(100% - 75px) 0%, calc(100% - 75px) 100%, 100% 50%)",
                    }}
                  />
                )}

                {/* Phase 1: Left Blue/Cyan Chevron Accent Tip */}
                {phase === 1 && (
                  <div
                    className="absolute -left-4 top-0 bottom-0 w-28 bg-[#00D2FF] rounded-l-xl pointer-events-none z-0"
                    style={{
                      clipPath: "polygon(75px 0%, 75px 100%, 0% 50%)",
                    }}
                  />
                )}

                {/* Dark Chevron Track Body */}
                <div
                  className={`bg-[#0B1E38] shadow-2xl relative overflow-hidden z-10 ${
                    phase === 0 ? "rounded-l-3xl" : "rounded-r-3xl"
                  }`}
                  style={{
                    clipPath: phase === 0
                      ? "polygon(0% 0%, calc(100% - 65px) 0%, calc(100% - 8px) 50%, calc(100% - 65px) 100%, 0% 100%)"
                      : "polygon(65px 0%, 100% 0%, 100% 100%, 65px 100%, 8px 50%)",
                  }}
                >
                  <div className={`py-7 space-y-7 ${phase === 0 ? "pl-10 pr-24" : "pl-24 pr-10"}`}>
                    {/* Top Half Descriptions */}
                    <div className="grid grid-cols-4 divide-x divide-dashed divide-white/25">
                      {topItems.map((item, idx) => (
                        <div key={idx} className="px-5 text-center flex items-center justify-center min-h-[70px]">
                          <p className="text-white text-[13px] font-sans leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Subtle Horizontal Divider */}
                    <div className="w-full h-px bg-white/10" />

                    {/* Bottom Half Descriptions */}
                    <div className="grid grid-cols-4 divide-x divide-dashed divide-white/25">
                      {bottomItems.map((item, idx) => (
                        <div key={idx} className="px-5 text-center flex items-center justify-center min-h-[70px]">
                          <p className="text-white text-[13px] font-sans leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Accent Corner Line */}
                {phase === 0 ? (
                  <div className="absolute -left-2 bottom-0 w-12 h-6 bg-[#00D2FF] rounded-bl-2xl pointer-events-none -z-10" />
                ) : (
                  <div className="absolute -right-2 bottom-0 w-12 h-6 bg-[#00D2FF] rounded-br-2xl pointer-events-none -z-10" />
                )}
              </div>

              {/* 3. BOTTOM ROW: Connector Dots & Years */}
              <div className={`grid grid-cols-4 pt-3 ${phase === 0 ? "pl-12 pr-28" : "pl-28 pr-12"}`}>
                {bottomItems.map((item) => (
                  <div key={item.year} className="flex flex-col items-center text-center">
                    {/* Connector Dot */}
                    <div className="flex flex-col items-center mb-1">
                      <div className="w-0.5 h-3 bg-[#00D2FF]" />
                      <div className="w-3 h-3 rounded-full bg-[#00D2FF] ring-4 ring-[#00D2FF]/25" />
                    </div>
                    <span className="text-3xl font-bold tracking-tight text-[#00B4D8] font-sans">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE RESPONSIVE CARDS */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-4 my-8">
          {[...topItems, ...bottomItems].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0B1E38] rounded-2xl p-5 text-white border-l-4 border-[#00D2FF] shadow-sm space-y-2"
            >
              <div className="text-2xl font-bold text-[#00D2FF] font-sans">
                {item.year}
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
