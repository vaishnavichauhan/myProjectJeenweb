"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HERO_SLIDES,
  HeroSlide
} from "@/lib/siteData";
import {
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeroDynamicBg from "./HeroDynamicBg";

const SLIDE_DURATION = 6000; // ms per slide

export default function HeroSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);  const [isPaused, setIsPaused] = useState(false);

  const activeSlide: HeroSlide = HERO_SLIDES[activeSlideIndex];

  // Auto advance slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, activeSlideIndex]);

  return (
    <section
      className="relative min-h-[580px] lg:min-h-[640px] bg-gradient-to-br from-[#0A2647] via-[#134B70] to-[#07192F] text-white flex flex-col justify-between pt-14 pb-10 lg:pt-20 lg:pb-12 overflow-hidden border-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 60FPS Dynamic Interactive Particle, Data Stream & Aurora Mesh Background */}
      <HeroDynamicBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-between items-center text-center">
        
        {/* Main Content Area (Centered with Dynamic Framer Motion Transitions) */}
        <div className="relative w-full max-w-3xl lg:max-w-4xl min-h-[290px] sm:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlideIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5 sm:space-y-6 py-4 mx-auto flex flex-col items-center text-center relative w-full"
            >
              {/* Subtle Ambient Radial Backlight Flare behind Title */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-36 bg-[#00E5FF]/15 blur-3xl rounded-full pointer-events-none ambient-text-glow -z-10" />

              {/* Main Headline with Dynamic Iridescent Shimmer */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.12] drop-shadow-xl text-center animate-text-shimmer select-none"
              >
                {activeSlide.h1}
              </motion.h1>

              {/* Subtitle in High-Contrast Electric Cyan with Subtle Shimmer */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs sm:text-base lg:text-lg font-bold text-[#00E5FF] text-center drop-shadow-md"
              >
                <span>{activeSlide.h2}</span>
              </motion.h2>

              {/* Body Description */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-slate-100 text-xs sm:text-sm sm:leading-relaxed font-sans max-w-2xl mx-auto text-center drop-shadow-xs"
              >
                {activeSlide.body}
              </motion.p>

              {/* Slide CTA Button (Navigates to Get in Touch section) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 sm:mt-8 flex items-center justify-center w-full sm:w-auto"
              >
                <Link
                  href="/contact#get-in-touch"
                  className="group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-100 text-[#1A3B71] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-slate-950/30 hover:shadow-2xl hover:scale-[1.03] flex items-center justify-center gap-2.5 cursor-pointer border border-white/60 active:scale-[0.98]"
                >
                  <span>{activeSlide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#C11E23] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Clean Slide Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlideIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlideIndex === idx
                  ? "w-8 bg-white shadow-xs"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Consultation Modal */}
          </section>
  );
}
