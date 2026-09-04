"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/siteData";
import { Star, MapPin, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";

const AUTO_SWIPE_INTERVAL = 4000;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [filledStars, setFilledStars] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const totalReviews = TESTIMONIALS.length;
  const activeTestimonial = TESTIMONIALS[activeIndex];

  // Progressive one-by-one star filling effect
  useEffect(() => {
    setFilledStars(0);
    const target = activeTestimonial.rating || 5;
    let count = 0;
    
    // Small initial delay before filling starts
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        count += 1;
        setFilledStars(count);
        if (count >= target) {
          clearInterval(interval);
        }
      }, 150);
      return () => clearInterval(interval);
    }, 100);

    return () => clearTimeout(timeout);
  }, [activeIndex, activeTestimonial.rating]);

  // Scroll Triggered Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto swipe timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalReviews);
    }, AUTO_SWIPE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  return (
    <section
      ref={sectionRef}
      className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-[#FAF8F5] relative overflow-hidden border-b border-slate-200/80"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header with Slide-In Animation */}
        <div
          className={`max-w-3xl mx-auto mb-10 space-y-3 text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                Client Experiences
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-slate-900">
            Direct Feedback From Our Long-Term Partners
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Real feedback from enterprise leadership and industrial partners who rely on Jeenweb for continuous digital operations.
          </p>
        </div>

        {/* 3D Perspective Stage Container */}
        <div className="[perspective:1400px]">
          {/* Single Unified Merged Card with Dynamic 3D Entrance Effect */}
          <div
            className={`rounded-3xl bg-[#FAF8F5] shadow-xl shadow-black/[0.06] p-0 relative overflow-hidden group transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl hover:shadow-black/[0.1] ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100 [transform:rotateX(0deg)_rotateY(0deg)_translateZ(0px)]"
                : "opacity-0 translate-y-20 scale-[0.94] [transform:rotateX(14deg)_rotateY(-3deg)_translateZ(-60px)]"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Section of Merged Card (Large Centered Client Avatar on Soft Background Image) */}
              <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full bg-gradient-to-br from-[#0A2647] via-[#134B70] to-[#0A2647] flex items-center justify-center overflow-hidden">
                {/* Background Image with Light Opacity */}
                <div className="absolute inset-0 overflow-hidden group/img">
                  <Image
                    src="/images/corporate-purpose-puzzle.jpg"
                    alt="Strategic Client Partnership"
                    fill
                    className="object-cover object-center opacity-20 group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40" />
                </div>

                {/* Centered Large Client Avatar (Changes dynamically with active testimonial) */}
                <div
                  key={activeTestimonial.id}
                  className="relative z-20 flex flex-col items-center justify-center p-6 text-center animate-fadeIn"
                >
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full p-2 bg-white/95 backdrop-blur-md shadow-2xl shadow-black/30 ring-4 ring-white/60">
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner">
                      <Image
                        src={activeTestimonial.avatar}
                        alt={activeTestimonial.author}
                        fill
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
                      />
                    </div>
                    {/* Active Verified Badge */}
                    <span className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 border-3 sm:border-4 border-white flex items-center justify-center shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section of Merged Card (Active Testimonial & Controls) */}
              <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 lg:p-10 space-y-6">
                
                {/* Top Navigation & Status */}
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 bg-[#EFECE3] px-3 py-1 rounded-full">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      Verified Partner Review
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{activeIndex + 1} / 0{totalReviews}
                    </span>
                  </div>

                  {/* Arrow Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-xl bg-[#EFECE3] hover:bg-[#E5E0D5] text-slate-800 shadow-2xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 rounded-xl bg-[#1A3B71] hover:bg-[#122A52] text-white shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Dynamic Quote */}
                <div className="relative py-2">
                  <Quote className="w-10 h-10 text-[#1A3B71]/15 absolute -top-3 -left-2 pointer-events-none" />
                  <p className="text-base sm:text-lg lg:text-xl text-slate-800 font-medium leading-relaxed italic relative z-10 pl-4 font-sans">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Author Footer with Star Rating on Bottom Right (Avatar Removed on Right) */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      {activeTestimonial.author}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 font-sans">
                      <span className="inline-flex items-center gap-1 text-[#C11E23] font-bold">
                        <MapPin className="w-3.5 h-3.5" />
                        {activeTestimonial.location}
                      </span>
                      <span>•</span>
                      <span>Long-Term Client</span>
                    </div>
                  </div>

                  {/* Bottom Right: Dynamic 5-Star Slot Rating (Progressively Fills One by One) */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {[1, 2, 3, 4, 5].map((starNum) => {
                      const isFilled = starNum <= filledStars;
                      return (
                        <Star
                          key={`star-${starNum}`}
                          className={`w-5 h-5 transition-all duration-300 transform-gpu ${
                            isFilled
                              ? "fill-amber-400 text-amber-400 scale-110 drop-shadow-[0_2px_8px_rgba(251,191,36,0.45)]"
                              : "fill-transparent text-slate-300/80 stroke-[1.75] scale-95"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
