"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HistoryHero() {
  return (
    <section className="bg-gradient-to-br from-[#073F8A] via-[#053270] to-[#042454] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-blue-900/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#E11D48]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* H1 Headline matching reference layout with brand accents */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12]">
              Welcome to Jeenweb: <br />
              <span className="text-[#61DAFB]">
                Where Innovation Meets Excellence
              </span>
            </h1>

            {/* Body Paragraph */}
            <p className="text-white/85 text-sm sm:text-base lg:text-[17px] leading-relaxed font-sans max-w-2xl">
              At Jeenweb, we&apos;re more than just a company—we&apos;re a dedicated team driven by a passion for cutting-edge technology, authentic engineering, and a commitment to excellence. Join us on our journey to shape the future, build resilient IT systems, and make a lasting difference for modern enterprises across Gujarat and beyond.
            </p>

            {/* Quick Actions / Link to Timeline */}
            <div className="pt-2 flex items-center">
              <a
                href="#timeline"
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#1A3B71] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-slate-950/30 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer border border-white/60 active:scale-[0.98]"
              >
                <span>View our full Timeline</span>
                <ArrowRight className="w-4 h-4 text-[#C11E23]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stylized "27 Celebrating Years of Excellence" Graphic with Brand Colors (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-square flex flex-col items-center justify-center select-none">
              
              {/* Background ambient glow behind graphic */}
              <div className="absolute inset-4 bg-gradient-to-tr from-[#00D2FF]/20 via-[#E11D48]/20 to-[#073F8A]/40 rounded-full blur-2xl pointer-events-none" />

              {/* Main SVG Badge with Stylized 27 */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full max-w-[380px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Unified Shared Linear Gradient for entire 27 shape */}
                    <linearGradient id="grad27" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E5FF" />
                      <stop offset="30%" stopColor="#00B4D8" />
                      <stop offset="65%" stopColor="#2B79D8" />
                      <stop offset="100%" stopColor="#073F8A" />
                    </linearGradient>

                    {/* Circular Path for "CELEBRATING" arc text */}
                    <path
                      id="celebratingArc"
                      d="M 280, 80 A 130 130 0 0 1 370, 240"
                      fill="none"
                    />
                  </defs>

                  {/* Stylized Giant "2" with same unified gradient */}
                  <g className="transition-transform duration-500 hover:scale-[1.02] origin-center">
                    <path
                      d="M 60,110 C 60,65 100,45 145,45 C 190,45 220,75 220,115 C 220,150 195,185 140,235 L 75,295 L 225,295 L 225,335 L 60,335 L 60,290 L 140,210 C 175,175 185,150 185,120 C 185,95 168,78 145,78 C 120,78 100,95 98,120 Z"
                      fill="url(#grad27)"
                      fillOpacity="0.92"
                    />
                  </g>

                  {/* Stylized Giant "7" with same unified gradient */}
                  <g className="transition-transform duration-500 hover:scale-[1.02] origin-center">
                    <path
                      d="M 205,45 L 345,45 L 345,85 L 265,335 L 220,335 L 295,85 L 205,85 Z"
                      fill="url(#grad27)"
                      fillOpacity="0.92"
                    />
                  </g>

                  {/* Overlapping intersection highlight effect */}
                  <circle cx="215" cy="85" r="28" fill="#FFFFFF" fillOpacity="0.2" className="blur-sm" />

                  {/* Curved "CELEBRATING" text along top-right arc */}
                  <text
                    fontSize="13"
                    fontWeight="800"
                    fontFamily="monospace"
                    fill="#61DAFB"
                    letterSpacing="5"
                    className="select-none uppercase drop-shadow-[0_2px_8px_rgba(97,218,251,0.6)]"
                  >
                    <textPath href="#celebratingArc" startOffset="5%">
                      CELEBRATING
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Bottom Bold Text: "Years of Excellence" */}
              <div className="relative -mt-2 text-center">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-sans drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                  Years of <span className="text-[#61DAFB]">Excellence</span>
                </span>
                <div className="w-20 h-1 bg-gradient-to-r from-[#00D2FF] via-white to-[#E11D48] mx-auto rounded-full mt-1.5" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

