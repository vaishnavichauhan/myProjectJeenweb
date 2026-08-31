"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HERO_SLIDES,
  HeroSlide
} from "@/lib/siteData";
import {
  Globe,
  Cpu,
  Search,
  Mail,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import ConsultationModal from "../common/ConsultationModal";

const SLIDE_DURATION = 5000; // ms per slide

export default function HeroSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide: HeroSlide = HERO_SLIDES[activeSlideIndex];

  // Auto advance slide every 5 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, activeSlideIndex]);

  // Reset progress bar animation on slide change or resume
  useEffect(() => {
    setProgressKey((k) => k + 1);
  }, [activeSlideIndex, isPaused]);

  const slideIcons = [Globe, Cpu, Search, Mail];

  return (
    <section
      className="relative bg-gradient-to-b from-[#0B192C] via-[#16325B] to-[#070F1E] text-white pt-10 pb-20 lg:pt-14 lg:pb-24 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Tech Background Image — full hero coverage */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-3d-bg.jpg')" }}
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 pointer-events-none bg-[#0B192C]/55" />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#16325B]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#D32F2F]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Hero Content Block */}
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
            {activeSlide.h1}
          </h1>

          {/* H2 Subtitle */}
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-red-300 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span>{activeSlide.h2}</span>
          </h2>

          {/* Body Content */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {activeSlide.body}
          </p>

          {/* Centered CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>{activeSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href={activeSlide.secondaryCtaLink}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15 text-center flex items-center justify-center gap-2"
            >
              <span>{activeSlide.secondaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Bottom Tab Nav + Arrows */}
        <div className="flex items-center justify-between gap-4 mt-12 pt-4 border-t border-white/[0.08]">
          {/* Tabs with | separators */}
          <div className="flex items-center overflow-x-auto no-scrollbar">
            {HERO_SLIDES.map((slide, idx) => {
              const Icon = slideIcons[idx];
              const isCurrent = activeSlideIndex === idx;
              return (
                <div key={slide.id} className="flex items-center">
                  <button
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`relative flex items-center gap-1.5 px-3 py-2.5 text-[11px] sm:text-xs font-semibold transition-all whitespace-nowrap group ${
                      isCurrent
                        ? "text-white"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    <Icon className={`w-3 h-3 flex-shrink-0 transition-colors ${isCurrent ? "text-[#D32F2F]" : "text-slate-500 group-hover:text-slate-300"}`} />
                    <span>{slide.tag}</span>
                    {/* Base underline track */}
                    <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      isCurrent ? "bg-white/10" : "bg-transparent"
                    }`} />
                    {/* Animated progress fill */}
                    {isCurrent && !isPaused && (
                      <span
                        key={progressKey}
                        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-[#D32F2F]"
                        style={{
                          animation: `slideProgress ${SLIDE_DURATION}ms linear forwards`
                        }}
                      />
                    )}
                    {/* Static red line when paused */}
                    {isCurrent && isPaused && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#D32F2F]" />
                    )}
                  </button>
                  {/* Separator */}
                  {idx < HERO_SLIDES.length - 1 && (
                    <span className="text-white/15 text-sm select-none">|</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Prev/Next arrows */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={() =>
                setActiveSlideIndex(
                  (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
                )
              }
              className="w-7 h-7 rounded-md bg-white/[0.06] hover:bg-white/12 text-slate-400 hover:text-white border border-white/[0.08] transition-all flex items-center justify-center cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() =>
                setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)
              }
              className="w-7 h-7 rounded-md bg-white/[0.06] hover:bg-white/12 text-slate-400 hover:text-white border border-white/[0.08] transition-all flex items-center justify-center cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={
          activeSlideIndex === 0
            ? "Domain & DNS Management"
            : activeSlideIndex === 1
            ? "Custom ERP / Software Development"
            : activeSlideIndex === 2
            ? "SEO and AI Search Optimization"
            : "Business Email (M365 / Google Workspace / Zoho)"
        }
      />
    </section>
  );
}
