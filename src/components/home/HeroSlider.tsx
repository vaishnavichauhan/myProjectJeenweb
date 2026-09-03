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
        
        {/* Main Content Area (Centered with Dynamic Transitions) */}
        <div
          key={activeSlideIndex}
          className="max-w-3xl lg:max-w-4xl space-y-5 sm:space-y-6 py-6 mx-auto flex flex-col items-center text-center animate-title-reveal relative"
        >
          {/* Subtle Ambient Radial Backlight Flare behind Title */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-36 bg-[#00E5FF]/15 blur-3xl rounded-full pointer-events-none ambient-text-glow -z-10" />

          {/* Main Headline with Dynamic Iridescent Shimmer */}
          <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black uppercase tracking-tight leading-[1.08] drop-shadow-xl text-center animate-text-shimmer select-none">
            {activeSlide.h1}
          </h1>

          {/* Subtitle in High-Contrast Electric Cyan with Subtle Shimmer */}
          <h2 className="text-sm sm:text-base lg:text-lg font-bold text-[#00E5FF] text-center drop-shadow-md">
            <span>{activeSlide.h2}</span>
          </h2>

          {/* Body Description */}
          <p className="text-slate-100 text-xs sm:text-sm sm:leading-relaxed font-sans max-w-2xl mx-auto text-center drop-shadow-xs">
            {activeSlide.body}
          </p>

          {/* Slide CTA Button (Navigates to Get in Touch section) */}
          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/contact#get-in-touch"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#1A3B71] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-slate-950/30 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer border border-white/60 active:scale-[0.98]"
            >
              <span>{activeSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#C11E23]" />
            </Link>
          </div>

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
