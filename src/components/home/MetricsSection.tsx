"use client";

import React, { useState, useEffect, useRef } from "react";
import { CORE_METRICS } from "@/lib/siteData";
import { 
  Award, 
  TrendingUp, 
  Users,
  HeartHandshake
} from "lucide-react";

// Helper component for animated number counting
function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const duration = 2200; // 2.2 seconds counting duration

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth cubic bezier easing
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * targetNum));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(targetNum);
      }
    };

    requestAnimationFrame(step);
  }, [inView, targetNum]);

  return (
    <span>
      {inView ? count : 0}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  const metricIcons = [Award, TrendingUp, Users, HeartHandshake];
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/90 relative overflow-hidden"
      id="metrics"
    >
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Soft Ambient Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                Proven Track Record
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Measured Success Over <br className="hidden sm:inline" />
            <span className="text-[#1A3B71]">Two Decades</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Real enterprise numbers backed by reliable software engineering, certified security standards, and enduring 26+ year client partnerships in Gujarat &amp; worldwide.
          </p>
        </div>

        {/* 4-Card Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CORE_METRICS.map((metric, idx) => {
            const Icon = metricIcons[idx];

            return (
              <div
                key={metric.label}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(26,59,113,0.12)] hover:border-[#1A3B71]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1.5"
              >
                {/* Left Half Border Highlight (Logo Red) */}
                <div className="absolute bottom-0 left-0 w-[3px] h-1/2 bg-[#C11E23] transition-all duration-300 group-hover:h-3/4 rounded-bl-3xl" />

                {/* Bottom Half Border Highlight (Logo Red) */}
                <div className="absolute bottom-0 left-0 h-[3px] w-1/2 bg-[#C11E23] transition-all duration-300 group-hover:w-3/4 rounded-bl-3xl" />

                {/* Subtle Background Watermark Icon on Hover */}
                <div className="absolute -right-4 -top-4 w-28 h-28 text-slate-100/70 group-hover:text-[#1A3B71]/5 transition-colors pointer-events-none flex items-center justify-center">
                  <Icon className="w-24 h-24 stroke-[1]" />
                </div>

                <div className="relative z-10">
                  {/* Top Card Header: Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-slate-100 text-[#1A3B71] group-hover:bg-[#1A3B71] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Animated Big Bold Metric Counter */}
                  <div className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 group-hover:text-[#1A3B71] transition-colors leading-none">
                    <AnimatedCounter value={metric.value} inView={inView} />
                  </div>

                  {/* Metric Title Label */}
                  <div className="text-sm sm:text-[15px] font-black uppercase tracking-wide text-slate-800 mt-3.5">
                    {metric.label}
                  </div>
                </div>

                {/* Metric Detailed Description */}
                <div className="relative z-10 mt-6 pt-5 border-t border-slate-100 group-hover:border-slate-200/90 transition-colors">
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
