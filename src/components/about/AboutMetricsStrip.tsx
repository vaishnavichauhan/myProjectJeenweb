"use client";

import React, { useState, useEffect, useRef } from "react";

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const duration = 1800; // 1.8 seconds counting duration

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
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

const METRICS = [
  { value: "26+", label: "Years Experience", subtext: "Anchored in Vadodara since 2000" },
  { value: "1500+", label: "Projects Delivered", subtext: "Web, ERP & Cloud systems" },
  { value: "200+", label: "Corporate Clients", subtext: "Across Gujarat & Globally" },
  { value: "98%", label: "Retention Rate", subtext: "Long-term client partnerships" },
];

export default function AboutMetricsStrip() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-16 bg-gradient-to-r from-[#073F8A] via-[#053270] to-[#042454] text-white relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E11D48]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {METRICS.map((metric, index) => (
            <React.Fragment key={metric.label}>
              {/* Metric Item */}
              <div className="flex-1 text-center md:px-4 space-y-1">
                <div className="text-4xl sm:text-5xl lg:text-[46px] font-black tracking-tight text-white leading-none font-sans">
                  <AnimatedCounter value={metric.value} inView={inView} />
                </div>
                <div className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#61DAFB] pt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-white/70 font-sans">
                  {metric.subtext}
                </div>
              </div>

              {/* Vertical Divider Separator `|` between items */}
              {index < METRICS.length - 1 && (
                <div
                  className="hidden md:block w-px h-14 bg-gradient-to-b from-transparent via-white/25 to-transparent flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
