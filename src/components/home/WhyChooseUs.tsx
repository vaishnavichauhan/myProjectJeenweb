"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/lib/siteData";
import {
  ShieldCheck,
  Code2,
  Users,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Building
} from "lucide-react";

export default function WhyChooseUs() {
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Randomly highlight a different card every 2.8 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveHighlightIndex((prev) => {
        let nextIndex = prev;
        while (nextIndex === prev) {
          nextIndex = Math.floor(Math.random() * WHY_CHOOSE_US.length);
        }
        return nextIndex;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isHovered]);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return ShieldCheck;
      case "Code2":
        return Code2;
      case "Users":
        return Users;
      case "Sparkles":
        return Sparkles;
      case "BarChart3":
        return BarChart3;
      case "CheckCircle2":
        return Building;
      default:
        return CheckCircle2;
    }
  };

  const leftPillars = WHY_CHOOSE_US.slice(0, 3);
  const rightPillars = WHY_CHOOSE_US.slice(3, 6);

  return (
    <section
      className="pt-10 pb-20 lg:pt-14 lg:pb-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80"
      id="why-choose-us"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#1A3B71]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C11E23]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-block border-b-2 border-[#C11E23] pb-1">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Why Corporate Brands <br className="hidden sm:inline" />
            <span className="text-[#1A3B71]">Choose Jeenweb</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            We do not take shortcuts that look convenient today but create vulnerabilities tomorrow. Built on genuine licensed code, single-roof accountability, and enduring engineering.
          </p>
        </div>

        {/* 3-Column Symmetrical Layout with Center Connected Target Bullseye */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Wing: 3 Pillar Cards with Connection Nodes (4 cols) */}
          <div className="lg:col-span-4 space-y-4 relative">
            {leftPillars.map((pillar, idx) => {
              const Icon = getPillarIcon(pillar.icon);
              const isHighlighted = activeHighlightIndex === idx;

              return (
                <div
                  key={pillar.title}
                  onMouseEnter={() => setActiveHighlightIndex(idx)}
                  className={`rounded-2xl p-5 sm:p-6 transition-all duration-500 group relative cursor-pointer ${
                    isHighlighted
                      ? "bg-white shadow-[0_16px_36px_rgba(26,59,113,0.14)] -translate-y-1 ring-2 ring-[#1A3B71]/20 border-l-4 border-l-[#C11E23]"
                      : "bg-[#FAF8F5] hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(26,59,113,0.10)]"
                  }`}
                >
                  {/* Connected Line & Pulse Node Pointing to Center Target (Desktop) */}
                  <div className="hidden lg:flex items-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pointer-events-none z-10">
                    <div
                      className={`w-4 xl:w-7 h-[2px] transition-all duration-500 ${
                        isHighlighted
                          ? "bg-gradient-to-r from-[#C11E23] to-[#1A3B71]/40"
                          : "bg-gradient-to-r from-slate-200 group-hover:from-[#C11E23] to-transparent"
                      }`}
                    />
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-500 shadow-2xs -ml-1 border-2 border-white ${
                        isHighlighted
                          ? "bg-[#C11E23] scale-125 ring-2 ring-[#C11E23]/30"
                          : "bg-slate-300 group-hover:bg-[#C11E23] group-hover:scale-125"
                      }`}
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-2xs ${
                        isHighlighted
                          ? "bg-[#1A3B71] text-white shadow-md scale-105"
                          : "bg-white text-[#1A3B71] group-hover:bg-[#1A3B71] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h3
                        className={`text-sm sm:text-base font-black uppercase tracking-tight transition-colors leading-snug ${
                          isHighlighted
                            ? "text-[#1A3B71]"
                            : "text-slate-900 group-hover:text-[#1A3B71]"
                        }`}
                      >
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Dynamic Floating 3D Target Bullseye Showcase (No Background, No Border) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-2 relative z-20">
            {/* Ambient Radiating Connection Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-blue-200/50 pointer-events-none animate-ping opacity-20 duration-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-slate-200/60 pointer-events-none" />

            {/* Target Bullseye 3D Vector SVG with Dynamic Floating Animation */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-1.5, 1.5, -1.5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-52 h-52 sm:w-60 sm:h-60 my-2 drop-shadow-2xl cursor-pointer"
            >
              <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Soft 3D Drop Shadow */}
                  <filter id="targetGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.25" />
                  </filter>
                  
                  {/* Gradients */}
                  <radialGradient id="redGrad1" cx="35%" cy="35%" r="70%">
                    <stop offset="0%" stopColor="#FF4D4D" />
                    <stop offset="60%" stopColor="#E11D48" />
                    <stop offset="100%" stopColor="#8A0C0C" />
                  </radialGradient>

                  <radialGradient id="whiteGrad1" cx="35%" cy="35%" r="70%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="85%" stopColor="#F0F2F5" />
                    <stop offset="100%" stopColor="#DDE1E6" />
                  </radialGradient>

                  <linearGradient id="dartShaft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE082" />
                    <stop offset="50%" stopColor="#FFB300" />
                    <stop offset="100%" stopColor="#E65100" />
                  </linearGradient>

                  <linearGradient id="dartFlight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="60%" stopColor="#0091EA" />
                    <stop offset="100%" stopColor="#0D47A1" />
                  </linearGradient>
                </defs>

                {/* Target Base Group with 3D Shadow (Centered at 120, 120) */}
                <g filter="url(#targetGlow)">
                  {/* Outer Red Ring */}
                  <circle cx="120" cy="120" r="95" fill="url(#redGrad1)" />
                  {/* Specular Highlight */}
                  <ellipse cx="120" cy="62" rx="58" ry="16" fill="#FFFFFF" opacity="0.2" />

                  {/* 2nd White Ring */}
                  <circle cx="120" cy="120" r="74" fill="url(#whiteGrad1)" />

                  {/* 3rd Red Ring */}
                  <circle cx="120" cy="120" r="53" fill="url(#redGrad1)" />

                  {/* 4th White Ring */}
                  <circle cx="120" cy="120" r="34" fill="url(#whiteGrad1)" />

                  {/* Center Red Bullseye Core */}
                  <circle cx="120" cy="120" r="17" fill="url(#redGrad1)" />
                  <circle cx="116" cy="116" r="5" fill="#FFFFFF" opacity="0.45" />
                </g>

                {/* 3D Dart Arrow Sticking into Center Bullseye */}
                <g>
                  {/* Dart Cast Shadow */}
                  <ellipse cx="132" cy="132" rx="14" ry="7" fill="#000000" opacity="0.3" transform="rotate(-30 132 132)" />

                  {/* Shaft */}
                  <polygon points="118,122 122,118 188,52 184,56" fill="url(#dartShaft)" />
                  <line x1="120" y1="120" x2="186" y2="54" stroke="#FFF9C4" strokeWidth="2" opacity="0.75" />

                  {/* Feathers / Wings at the Tail */}
                  <g transform="translate(186, 54) rotate(-45)">
                    <path d="M0 0 L-22 -14 L-28 -4 L-12 0 Z" fill="url(#dartFlight)" />
                    <path d="M0 0 L-22 14 L-28 4 L-12 0 Z" fill="url(#dartFlight)" />
                    <path d="M0 -3 L24 -3 L28 0 L24 3 L0 3 Z" fill="url(#dartFlight)" />
                    <circle cx="28" cy="0" r="3.5" fill="#FFD54F" />
                  </g>
                </g>
              </svg>
            </motion.div>

            {/* Bottom Headline & Tag */}
            <div className="mt-2 space-y-1">
              <h4 className="text-base font-black uppercase tracking-tight text-slate-900">
                100% On-Target Engineering
              </h4>
              <p className="text-xs text-slate-600 font-sans max-w-xs mx-auto">
                26+ Years of zero cross-account leaks, licensed codebases, and certified Vadodara stability.
              </p>
            </div>
          </div>

          {/* Right Wing: 3 Pillar Cards with Connection Nodes (4 cols) */}
          <div className="lg:col-span-4 space-y-4 relative">
            {rightPillars.map((pillar, idx) => {
              const Icon = getPillarIcon(pillar.icon);
              const globalIdx = idx + 3;
              const isHighlighted = activeHighlightIndex === globalIdx;

              return (
                <div
                  key={pillar.title}
                  onMouseEnter={() => setActiveHighlightIndex(globalIdx)}
                  className={`rounded-2xl p-5 sm:p-6 transition-all duration-500 group relative cursor-pointer ${
                    isHighlighted
                      ? "bg-white shadow-[0_16px_36px_rgba(26,59,113,0.14)] -translate-y-1 ring-2 ring-[#1A3B71]/20 border-r-4 border-r-[#C11E23]"
                      : "bg-[#FAF8F5] hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(26,59,113,0.10)]"
                  }`}
                >
                  {/* Connected Line & Pulse Node Pointing to Center Target (Desktop) */}
                  <div className="hidden lg:flex items-center flex-row-reverse absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pointer-events-none z-10">
                    <div
                      className={`w-4 xl:w-7 h-[2px] transition-all duration-500 ${
                        isHighlighted
                          ? "bg-gradient-to-l from-[#C11E23] to-[#1A3B71]/40"
                          : "bg-gradient-to-l from-slate-200 group-hover:from-[#C11E23] to-transparent"
                      }`}
                    />
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-500 shadow-2xs -mr-1 border-2 border-white ${
                        isHighlighted
                          ? "bg-[#C11E23] scale-125 ring-2 ring-[#C11E23]/30"
                          : "bg-slate-300 group-hover:bg-[#C11E23] group-hover:scale-125"
                      }`}
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-2xs ${
                        isHighlighted
                          ? "bg-[#1A3B71] text-white shadow-md scale-105"
                          : "bg-white text-[#1A3B71] group-hover:bg-[#1A3B71] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h3
                        className={`text-sm sm:text-base font-black uppercase tracking-tight transition-colors leading-snug ${
                          isHighlighted
                            ? "text-[#1A3B71]"
                            : "text-slate-900 group-hover:text-[#1A3B71]"
                        }`}
                      >
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
