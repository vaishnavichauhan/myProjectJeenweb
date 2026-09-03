"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Building2, Lock, CheckCircle2, ArrowUpRight, MapPin, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HistoryValueProposition() {
  const [activeCard, setActiveCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Trigger merge effect when cards scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle highlight every 3.5s when user is not hovering
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const valuePillars = [
    {
      icon: ShieldCheck,
      tag: "Battle-Tested Judgment",
      title: "We Have Seen What Works and What Does Not",
      desc: "Twenty-six years of real-world project deployments means we have made mistakes, learned from them, and built better processes because of them. When we recommend a system or architecture, it is not based on what looks good in a sales deck — it is based on what we have seen hold up over years of production load.",
      bullet: "Zero guesswork • Proven architectural stability across 1,500+ systems",
      color: "from-blue-600 via-[#1A3B71] to-cyan-500",
      accentBorder: "border-[#1A3B71]"
    },
    {
      icon: Building2,
      tag: "Local Physical Accountability",
      title: "We Are Local, Reachable, and We Are Not Going Anywhere",
      desc: "Both of our corporate facilities are in Vadodara. Our engineers live and work here. When you need urgent migration support, database failover resolution, or strategic technology orientation, we are reachable within minutes. We are a permanent regional institution standing behind our work.",
      bullet: "2 Dedicated Vadodara offices • Direct in-person engineering access",
      color: "from-[#C11E23] via-[#A3161A] to-amber-500",
      accentBorder: "border-[#C11E23]"
    },
    {
      icon: Lock,
      tag: "Licensed Genuine Integrity",
      title: "Clean Licensed Architecture With Zero Shortcuts",
      desc: "Throughout 26 years, we have never compromised client data or security with cracked themes, pirated plugins, or unverified shortcuts. Every codebase, cloud environment, and mail server is deployed from genuine licensed infrastructure designed to protect your continuity.",
      bullet: "100% Genuine licensed code • Strict SPF/DKIM/DMARC authentication",
      color: "from-[#0041F0] via-[#1A3B71] to-cyan-500",
      accentBorder: "border-[#0041F0]"
    }
  ];

  return (
    <section
      className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden border-t border-slate-200/90"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-red-100/25 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div>
              <div className="inline-block border-b-2 border-[#C11E23] pb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                  What 26 Years Actually Means for You
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Why Our History Matters <br className="hidden sm:inline" />
              <span className="text-[#1A3B71]">When You Work With Us</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed max-w-md">
            Practical advantages of partnering with an engineering team backed by over a quarter-century of continuous real-world deployments across Western India.
          </p>
        </div>

        {/* Common Two Images Section Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Image 1: Vadodara Engineering Hub & Strategy Boardroom */}
          <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 group">
            <Image
              src="/images/history-team-collab.jpg"
              alt="Jeenweb Strategic Engineering Leadership & Modern Workstations"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
            
            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#1A3B71] text-xs font-mono font-bold shadow-md border border-white/40">
                <Building2 className="w-4 h-4 text-[#1A3B71]" />
                <span>Vadodara Corporate Hub</span>
              </span>
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-5 left-5 right-5 z-10 text-white space-y-1">
              <h4 className="text-base sm:text-lg font-black uppercase tracking-tight">
                Direct Engineering Accountability
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed line-clamp-2">
                Our core architects, developers, and infrastructure specialists collaborate under one roof in Vadodara with reachable partner oversight.
              </p>
            </div>
          </div>

          {/* Image 2: Cloud Datacenter & High-Availability Infrastructure */}
          <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 group">
            <Image
              src="/images/history-datacenter.jpg"
              alt="Jeenweb High-Security Enterprise Cloud Datacenter Server Infrastructure"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#1A3B71] text-xs font-mono font-bold shadow-md border border-white/40">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Enterprise Infrastructure</span>
              </span>
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-5 left-5 right-5 z-10 text-white space-y-1">
              <h4 className="text-base sm:text-lg font-black uppercase tracking-tight">
                Proven 99.9% Production Reliability
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed line-clamp-2">
                1,500+ systems deployed with containerized hosting, isolated backups, and genuine licensed code designed to avoid downtime.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Perspective Grid with Dynamic Left/Right Merge Effect & Rectangular Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 [perspective:1400px]">
          {valuePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeCard === idx;

            // Dynamic merge animation: Left card comes from left, right card comes from right, center locks in
            const mergeEntranceClass = !isInView
              ? idx === 0
                ? "opacity-0 -translate-x-20 sm:-translate-x-36 -rotate-2"
                : idx === 1
                ? "opacity-0 translate-y-16 scale-90"
                : "opacity-0 translate-x-20 sm:translate-x-36 rotate-2"
              : "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0";

            const mergeDelay = idx === 0 ? "delay-0" : idx === 1 ? "delay-100" : "delay-200";

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                className={`relative rounded-2xl p-8 sm:p-9 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer [transform-style:preserve-3d] flex flex-col justify-between overflow-hidden group ${mergeEntranceClass} ${mergeDelay} ${
                  isActive
                    ? "bg-white shadow-[0_24px_50px_-12px_rgba(26,59,113,0.18)] -translate-y-3 ring-2 ring-[#1A3B71]/25"
                    : "bg-white/85 hover:bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5"
                }`}
              >
                {/* Card Background Checks Texture (20px by 20px Technical Grid Pattern) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A3B710c_1px,transparent_1px),linear-gradient(to_bottom,#1A3B710c_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />

                {/* Top Multi-Tone Glowing Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r ${pillar.color} transition-all duration-500 z-10 ${
                    isActive ? "opacity-100 h-[4px]" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Corner Ambient Flare when Active */}
                {isActive && (
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-400/15 rounded-full blur-2xl pointer-events-none z-0" />
                )}

                {/* Subtle Background Watermark Icon */}
                <div
                  className={`absolute -right-3 -top-3 w-32 h-32 pointer-events-none transition-all duration-500 flex items-center justify-center select-none z-0 ${
                    isActive
                      ? "text-[#1A3B71]/10 scale-110 -rotate-6"
                      : "text-slate-300/40 group-hover:text-[#1A3B71]/8 group-hover:scale-105 group-hover:-rotate-3"
                  }`}
                >
                  <Icon className="w-28 h-28 stroke-[1.2]" />
                </div>

                <div className="relative z-10 space-y-6 [transform-style:preserve-3d]">
                  {/* Pillar Tag Badge */}
                  <div>
                    <span
                      className={`inline-block px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? "bg-[#1A3B71] text-white shadow-xs"
                          : "bg-slate-100 text-[#1A3B71] border border-slate-200/80 group-hover:bg-slate-200/70"
                      }`}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3
                      className={`text-xl sm:text-[22px] font-black uppercase tracking-tight leading-snug transition-colors duration-300 ${
                        isActive
                          ? "text-[#1A3B71]"
                          : "text-slate-900 group-hover:text-[#1A3B71]"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Verified Metric Badge */}
                <div
                  className={`relative z-10 mt-8 pt-5 border-t transition-colors duration-300 flex items-center gap-2.5 text-xs font-semibold font-mono ${
                    isActive
                      ? "border-slate-200 text-slate-900"
                      : "border-slate-100 text-slate-700 group-hover:border-slate-200"
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="line-clamp-1">{pillar.bullet}</span>
                </div>

                {/* Active Indicator Pulse Bar at Bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#C11E23] transition-all duration-500 z-10 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Local Accountability Bar with 3D Depth & Glowing Highlights */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] p-7 sm:p-9 text-white shadow-2xl border border-slate-700/60 relative overflow-hidden group">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Ambient Corner Lighting */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#C11E23]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20 shadow-md group-hover:scale-105 transition-transform">
                <MapPin className="w-7 h-7 text-[#00E5FF]" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white leading-tight">
                  Two Corporate Offices in Vadodara, Gujarat
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                  Ready for on-site architectural audits, server migration reviews, and direct engineering briefings.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1A3B71] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 flex-shrink-0 active:scale-95 group/btn"
            >
              <span>Visit Our Offices</span>
              <ArrowRight className="w-4 h-4 text-[#C11E23] transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
