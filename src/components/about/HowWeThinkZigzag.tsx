"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  Users,
  HeartHandshake,
  CheckCircle2,
  Plus,
  Check
} from "lucide-react";

interface MilestoneItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  bullet1: string;
  bullet2: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
}

export default function HowWeThinkZigzag() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  const milestones: MilestoneItem[] = [
    {
      id: "vision",
      tag: "Our Vision",
      subtitle: "Where We Want to Go",
      title: "Western India's Most Trusted Digital Architecture",
      desc: "We want to be the most trusted technology company for businesses across Western India. That means more than writing good code — it means helping enterprises understand that strong security and real growth go hand in hand. We are working toward a future where every business we support has digital tools that genuinely keep up with them — no matter how fast they scale.",
      bullet1: "Western India Trust Leader",
      bullet2: "Security & Growth Hand-in-Hand",
      icon: Compass,
      accentColor: "#1A3B71",
      badgeBg: "bg-blue-50 text-[#1A3B71] border-blue-200"
    },
    {
      id: "mission",
      tag: "Our Mission",
      subtitle: "Zero Compromise Security",
      title: "Security First — Every Single Time",
      desc: "Every system we build is verified for security before anything else moves forward. Your business records, employee information, client data, and internal emails demand uncompromising protection. We do not skip steps to save time or cut costs. If a shortcut creates a risk, we do not take it — simple as that.",
      bullet1: "Zero Security Compromise",
      bullet2: "100% Genuine Licensed Code",
      icon: ShieldCheck,
      accentColor: "#C11E23",
      badgeBg: "bg-red-50 text-[#C11E23] border-red-200"
    },
    {
      id: "experience",
      tag: "Our Experience",
      subtitle: "Quarter-Century Stability",
      title: "26+ Years of Battle-Tested Production Uptime",
      desc: "A tool that your team struggles with every day is not a solution — it is just a different kind of problem. With over a quarter-century of continuous deployments across 1,500+ systems, we build software that fits your people's natural workflow with high-availability infrastructure that never collapses under load.",
      bullet1: "1,500+ Production Deployments",
      bullet2: "Natural Workflow Fit",
      icon: Users,
      accentColor: "#059669",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "values",
      tag: "Our Values",
      subtitle: "Accountable Partnership",
      title: "Clear, Honest & Locally Grounded Accountability",
      desc: "No hidden fees, no lock-ins, and zero third-party outsourcing. Every line of code, database migration, and cloud audit is executed by our full-time engineers inside our two Vadodara corporate facilities. Direct partner communication and transparent pricing from kickoff through long-term maintenance.",
      bullet1: "Pure Commercial Integrity",
      bullet2: "2 Dedicated Vadodara Facilities",
      icon: HeartHandshake,
      accentColor: "#0284C7",
      badgeBg: "bg-sky-50 text-sky-700 border-sky-200"
    }
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden border-b border-slate-200/80"
      id="philosophy"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                What We Believe In
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            How We Think and <br />
            <span className="text-[#1A3B71]">How We Work</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed pt-1 max-w-2xl mx-auto">
            Our core operating principles across technology architecture, authentic security, and local commercial accountability.
          </p>
        </div>

        {/* Alternating Zigzag Timeline (Inspired by Technobits Digital About Experience) */}
        <div className="relative space-y-20 lg:space-y-28">
          
          {/* Subtle Vertical Connecting SVG Trail (Desktop) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1200"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 750,120 C 750,300 250,220 250,420 C 250,620 750,550 750,780 C 750,1000 250,920 250,1100"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="opacity-75"
              />
            </svg>
          </div>

          {milestones.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0; // idx 0, 2: Text Left, Box Right | idx 1, 3: Box Left, Text Right
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                onViewportEnter={() => setActiveStep(idx)}
                className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Content Block */}
                <div
                  className={`space-y-5 lg:col-span-7 ${
                    isEven
                      ? "order-1 lg:order-1 text-left lg:pr-6"
                      : "order-1 lg:order-2 text-left lg:pl-6"
                  }`}
                >
                  {/* Step Tag Pill & Category */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-black text-[#1A3B71] bg-white px-3 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                      0{idx + 1}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border shadow-2xs ${item.badgeBg}`}>
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.tag}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                      • {item.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Lead Narrative */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                    {item.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white text-slate-800 text-xs font-mono font-semibold border border-slate-200/90 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{item.bullet1}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white text-slate-800 text-xs font-mono font-semibold border border-slate-200/90 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{item.bullet2}</span>
                    </span>
                  </div>
                </div>

                {/* Dashed Waypoint Frame with Dynamic Plus / Check Icon & Border Color */}
                <div
                  className={`lg:col-span-5 flex ${
                    isEven
                      ? "order-2 lg:order-2 justify-center lg:justify-end"
                      : "order-2 lg:order-1 justify-center lg:justify-start"
                  }`}
                >
                  <div
                    onClick={() => setActiveStep(idx)}
                    style={{
                      borderColor: isActive ? item.accentColor : undefined,
                      boxShadow: isActive ? `0 20px 40px -15px ${item.accentColor}30` : undefined
                    }}
                    className={`relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-3xl border-2 border-dashed p-3 transition-all duration-500 cursor-pointer flex items-center justify-center group ${
                      isActive
                        ? "bg-white scale-105"
                        : "border-slate-300/90 bg-white/70 hover:border-slate-400 hover:bg-white"
                    }`}
                  >
                    {/* Inner Ambient Glow on Active */}
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-3xl blur-xl pointer-events-none opacity-20"
                        style={{ backgroundColor: item.accentColor }}
                      />
                    )}

                    {/* Dynamic Plus & Check Icon Box Container */}
                    <div
                      style={{
                        borderColor: isActive ? item.accentColor : undefined,
                        boxShadow: isActive ? `0 10px 25px -5px ${item.accentColor}25` : undefined
                      }}
                      className={`relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl bg-white p-4 border-2 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group/box ${
                        isActive
                          ? "scale-102 ring-2 ring-slate-100"
                          : "border-slate-200/90 group-hover:border-slate-300 group-hover:scale-102"
                      }`}
                    >
                      {/* Central Plus / Check Interactive Icon Stage */}
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm relative border"
                        style={{
                          backgroundColor: isActive ? `${item.accentColor}12` : "#F8FAFC",
                          borderColor: isActive ? item.accentColor : "#E2E8F0"
                        }}
                      >
                        {isActive ? (
                          <Check
                            className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3] transition-all duration-500 scale-110"
                            style={{ color: item.accentColor }}
                          />
                        ) : (
                          <Plus
                            className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5] text-slate-400 group-hover:rotate-90 group-hover:scale-110 transition-all duration-300"
                          />
                        )}

                        {/* Top-Right Mini Floating Plus / Check Tag */}
                        <div
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] shadow-sm font-bold transition-all duration-300"
                          style={{ backgroundColor: item.accentColor }}
                        >
                          {isActive ? (
                            <Check className="w-3 h-3 stroke-[3]" />
                          ) : (
                            <Plus className="w-3 h-3 stroke-[3]" />
                          )}
                        </div>
                      </div>

                      {/* Milestone Status Label */}
                      <div className="mt-3 text-center">
                        <span
                          className="text-[11px] font-mono font-bold uppercase tracking-wider transition-colors duration-300"
                          style={{ color: isActive ? item.accentColor : "#64748B" }}
                        >
                          {item.tag}
                        </span>
                      </div>

                      {/* Active Corner Ping Dot */}
                      {isActive && (
                        <span
                          className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full animate-ping"
                          style={{ backgroundColor: item.accentColor }}
                        />
                      )}
                    </div>

                    {/* Outer Corner Milestone Number Badge */}
                    <div
                      style={{
                        backgroundColor: isActive ? item.accentColor : undefined
                      }}
                      className={`absolute -bottom-3 -right-3 w-8 h-8 rounded-xl font-mono text-xs font-black flex items-center justify-center shadow-md transition-all duration-300 ${
                        isActive ? "text-white scale-110" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      0{idx + 1}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

