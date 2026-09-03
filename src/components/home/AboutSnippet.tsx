"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Users, Building, ArrowRight, Lock, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function AboutSnippet() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="pt-10 pb-20 lg:pt-14 lg:pb-24 bg-[#FAF8F5] relative overflow-hidden border-b border-slate-200/80"
      id="about-snippet"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#1A3B71]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C11E23]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header (Fades in from Top) */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 lg:mb-12 space-y-3.5 transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-block border-b-2 border-[#C11E23] pb-1">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
              Who We Are
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            About <span className="text-[#1A3B71]">Jeenweb</span> Technologists
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Founded in Vadodara and trusted across Gujarat &amp; worldwide, Jeenweb Technologists Pvt. Ltd. has delivered engineering-backed IT, custom software, and digital solutions since 2000.
          </p>
        </div>

        {/* 2-Column Main Layout: Left Side Slides in from Left, Right Side Slides in from Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center overflow-hidden">
          
          {/* Left Column: Team & Enterprise Image Showcase (Slides in from LEFT) */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ease-out transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
              
              {/* Integrated Image Showcase */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/about-team.jpg"
                  alt="Jeenweb Engineering & Digital Strategy Team"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                {/* Floating Badges on Image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#C11E23] text-white text-[11px] font-mono font-bold shadow-md">
                    EST. 2000
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                    <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                    <span>Single-Roof Tech Team</span>
                  </div>
                  <span className="text-white text-xs font-mono font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    26+ Years
                  </span>
                </div>
              </div>

              {/* Leadership & Integrity Highlights */}
              <div className="p-6 sm:p-7 space-y-4 bg-[#F8FAFC]">
                <div className="pb-3 border-b border-slate-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1A3B71]">
                    Continuous Technology Evolution
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                    From foundational web hosting in 2000 to bespoke ERP systems, high-speed NVMe cloud infrastructure, and modern AI-search models today.
                  </p>
                </div>

                {/* 3 Leadership Profiles */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1A3B71] text-white font-black text-xs flex items-center justify-center font-mono">
                        US
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Utpal Shah</div>
                        <div className="text-[11px] text-slate-500">Founder • 26+ Yrs Foundational Integrity</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0284C7] text-white font-black text-xs flex items-center justify-center font-mono">
                        TS
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Tatvam Shah</div>
                        <div className="text-[11px] text-slate-500">Partner • Parul Univ Wall of Fame, JITO IT</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#C11E23] text-white font-black text-xs flex items-center justify-center font-mono">
                        ES
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Exita Shah</div>
                        <div className="text-[11px] text-slate-500">Co-Founder • Organic Search &amp; AI Architect</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Philosophy & Checklist (Slides in from RIGHT) */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-1000 ease-out delay-150 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            
            {/* Executive Lead Statement */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border-l-4 border-[#1A3B71] border-y border-r border-slate-200/80 shadow-xs">
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug font-sans">
                &ldquo;We work with businesses that need an accountable technical partner—someone who understands what&apos;s at stake when critical systems fail, software doesn&apos;t fit workflows, or digital platforms don&apos;t convert.&rdquo;
              </p>
            </div>

            {/* 3 Value Pillar Cards */}
            <div className="space-y-3 pt-1">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#1A3B71]/40 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A3B71] group-hover:bg-[#1A3B71] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-2xs">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-black uppercase tracking-tight text-slate-900 group-hover:text-[#1A3B71] transition-colors">
                      Single-Roof Accountability in Vadodara
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                      Software engineers, cloud hosting architects, and organic search specialists collaborating under one roof with direct partner access.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-600/40 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-2xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-black uppercase tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                      100% Licensed Code &amp; Zero Piracy
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                      Zero cracked plugins, zero stolen templates. Genuine software licenses, clean codebases, and 100% intellectual property ownership.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#C11E23]/40 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#C11E23] group-hover:bg-[#C11E23] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-2xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-black uppercase tracking-tight text-slate-900 group-hover:text-[#C11E23] transition-colors">
                      Physical Workflow-First Architecture
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                      On-site process study before coding. We build software around how your physical workplace operates, avoiding recurring SaaS seat taxes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-95 border border-white/10"
              >
                <span>Read Full Company Overview</span>
                <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
              </Link>
              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1A3B71] font-bold text-xs uppercase tracking-wider transition-all border-2 border-[#1A3B71] shadow-xs active:scale-95"
              >
                <span>Meet Leadership Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
