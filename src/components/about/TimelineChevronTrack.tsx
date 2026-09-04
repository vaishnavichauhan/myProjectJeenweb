"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function TimelineChevronTrack() {
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

  return (
    <section className="py-16 lg:py-24 bg-[#F0F4F8] relative overflow-hidden text-slate-900" id="timeline">
      
      {/* ========================================================================= */}
      {/* TOP-LEFT WORKSPACE PHOTO (Clean Architectural Frame - Not Cut) */}
      {/* ========================================================================= */}
      <div className="hidden lg:block absolute top-0 left-0 w-[360px] xl:w-[440px] h-[300px] xl:h-[340px] z-0 pointer-events-none">
        <div className="relative w-full h-full overflow-hidden rounded-br-[80px] shadow-lg border-b-2 border-r-2 border-[#00D2FF]/40 bg-slate-900">
          <Image
            src="/images/timeline-ref-workspace.jpg"
            alt="Jeenweb Historical Engineering Office Workspace"
            fill
            className="object-cover object-left-top"
            priority
          />
          {/* Subtle gradient overlays so the image blends smoothly into the section */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F0F4F8]/20 pointer-events-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* HEADER: Title & Subtitle (Positioned to the right of the corner photo) */}
        {/* ========================================================================= */}
        <div className="max-w-2xl lg:ml-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#073F8A]/10 text-[#073F8A] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete 26-Year Corporate Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-slate-900 font-sans leading-tight">
            Company history from 2000 to 2026
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            This timeline illustrates Jeenweb&apos;s growth across both pivotal phases—from foundational web hosting and custom software development to authorized enterprise cloud partnerships and multi-office operations.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PHASE 1 CARD: 2000 – 2017 (REVERSED TRACK: FLOWS RIGHT-TO-LEFT) */}
        {/* ========================================================================= */}
        <div className="mb-20">
          
          {/* Phase 1 Header Badge in Center */}
          <div className="flex flex-col items-center text-center justify-center gap-2 mb-10">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#073F8A] text-white shadow-xs">
                01
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-slate-950 font-sans">
                Phase 1: Foundation & Growth
              </h3>
              <span className="text-xs sm:text-sm font-mono font-semibold px-3 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                2000 – 2017
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-xl">
              Web Hosting, Custom Software Mergers & Industrial ERPs
            </p>
          </div>

          {/* Desktop Chevron Track for Phase 1 (Pointing Left ←) with 3D Flip on Scroll & Hover */}
          <motion.div
            initial={{ opacity: 0, rotateY: -85, scale: 0.92 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              rotateY: -16,
              rotateX: 4,
              scale: 1.02,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1600, transformStyle: "preserve-3d" }}
            className="hidden lg:block relative px-2 py-2 cursor-pointer group"
          >
            {/* 1. TOP ROW: Years & Connector Dots (Reversed padding pl-28 pr-12) */}
            <div className="grid grid-cols-4 pb-3 pl-28 pr-12">
              {[...phase1Top].reverse().map((item) => (
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

            {/* 2. MAIN CHEVRON ARROW CONTAINER (Pointing Left) */}
            <div className="relative">
              {/* Left Blue/Cyan Chevron Accent Tip */}
              <div
                className="absolute -left-4 top-0 bottom-0 w-28 bg-[#00D2FF] rounded-l-xl pointer-events-none z-0"
                style={{
                  clipPath: "polygon(75px 0%, 75px 100%, 0% 50%)",
                }}
              />

              {/* Dark Chevron Track Body */}
              <div
                className="bg-[#0B1E38] shadow-2xl relative overflow-hidden z-10 rounded-r-3xl group-hover:shadow-[0_20px_50px_rgba(0,210,255,0.25)] transition-shadow duration-500"
                style={{
                  clipPath: "polygon(65px 0%, 100% 0%, 100% 100%, 65px 100%, 8px 50%)",
                }}
              >
                <div className="py-7 space-y-7 pl-24 pr-10">
                  {/* Top Half Descriptions */}
                  <div className="grid grid-cols-4 divide-x divide-dashed divide-white/25">
                    {[...phase1Top].reverse().map((item, idx) => (
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
                    {[...phase1Bottom].reverse().map((item, idx) => (
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
              <div className="absolute -right-2 bottom-0 w-12 h-6 bg-[#00D2FF] rounded-br-2xl pointer-events-none -z-10" />
            </div>

            {/* 3. BOTTOM ROW: Connector Dots & Years (Reversed padding pl-28 pr-12) */}
            <div className="grid grid-cols-4 pt-3 pl-28 pr-12">
              {[...phase1Bottom].reverse().map((item) => (
                <div key={item.year} className="flex flex-col items-center text-center">
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

          {/* Mobile Cards for Phase 1 with 3D Flip Effect */}
          <motion.div
            initial={{ opacity: 0, rotateY: -75, scale: 0.94 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            className="lg:hidden space-y-4"
          >
            {[...phase1Top, ...phase1Bottom].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ rotateY: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0B1E38] rounded-2xl p-5 text-white border-l-4 border-[#00D2FF] shadow-sm space-y-2 cursor-pointer"
              >
                <div className="text-2xl font-bold text-[#00D2FF] font-sans">
                  {item.year}
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* PHASE 2 CARD: 2020 – 2026+ */}
        {/* ========================================================================= */}
        <div className="mt-8">
          
          {/* Phase 2 Header Badge in Center */}
          <div className="flex flex-col items-center text-center justify-center gap-2 mb-10">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#073F8A] text-white shadow-xs">
                02
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-slate-950 font-sans">
                Phase 2: Enterprise & Cloud Innovation
              </h3>
              <span className="text-xs sm:text-sm font-mono font-semibold px-3 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                2020 – 2026+
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-xl">
              Google Workspace & M365 Deployments, AI Search AEO & Dual Offices
            </p>
          </div>

          {/* Desktop Chevron Track for Phase 2 with 3D Flip on Scroll & Hover */}
          <motion.div
            initial={{ opacity: 0, rotateY: 85, scale: 0.92 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              rotateY: 16,
              rotateX: 4,
              scale: 1.02,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1600, transformStyle: "preserve-3d" }}
            className="hidden lg:block relative px-2 py-2 cursor-pointer group"
          >
            {/* 1. TOP ROW: Years & Connector Dots */}
            <div className="grid grid-cols-4 pb-3 pl-12 pr-28">
              {phase2Top.map((item) => (
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
              {/* Right Blue/Cyan Chevron Accent Tip */}
              <div
                className="absolute -right-4 top-0 bottom-0 w-28 bg-[#00D2FF] rounded-r-xl pointer-events-none z-0"
                style={{
                  clipPath: "polygon(calc(100% - 75px) 0%, calc(100% - 75px) 100%, 100% 50%)",
                }}
              />

              {/* Dark Chevron Track Body */}
              <div
                className="bg-[#0B1E38] shadow-2xl relative overflow-hidden z-10 rounded-l-3xl group-hover:shadow-[0_20px_50px_rgba(0,210,255,0.25)] transition-shadow duration-500"
                style={{
                  clipPath: "polygon(0% 0%, calc(100% - 65px) 0%, calc(100% - 8px) 50%, calc(100% - 65px) 100%, 0% 100%)",
                }}
              >
                <div className="py-7 space-y-7 pl-10 pr-24">
                  {/* Top Half Descriptions */}
                  <div className="grid grid-cols-4 divide-x divide-dashed divide-white/25">
                    {phase2Top.map((item, idx) => (
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
                    {phase2Bottom.map((item, idx) => (
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
              <div className="absolute -left-2 bottom-0 w-12 h-6 bg-[#00D2FF] rounded-bl-2xl pointer-events-none -z-10" />
            </div>

            {/* 3. BOTTOM ROW: Connector Dots & Years */}
            <div className="grid grid-cols-4 pt-3 pl-12 pr-28">
              {phase2Bottom.map((item) => (
                <div key={item.year} className="flex flex-col items-center text-center">
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

          {/* Mobile Cards for Phase 2 with 3D Flip Effect */}
          <motion.div
            initial={{ opacity: 0, rotateY: 75, scale: 0.94 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            className="lg:hidden space-y-4"
          >
            {[...phase2Top, ...phase2Bottom].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ rotateY: 8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0B1E38] rounded-2xl p-5 text-white border-l-4 border-[#00D2FF] shadow-sm space-y-2 cursor-pointer"
              >
                <div className="text-2xl font-bold text-[#00D2FF] font-sans">
                  {item.year}
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
