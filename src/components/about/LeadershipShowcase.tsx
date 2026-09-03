"use client";

import React from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  Award, 
  Code2, 
  Search, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Sparkles 
} from "lucide-react";

export default function LeadershipShowcase() {
  const leaders = [
    {
      id: "utpal-shah",
      name: "Utpal Shah",
      role: "Managing Director and Founder",
      titleLabel: "Founder & Managing Director",
      experience: "26+ Years Industry Experience",
      image: "/images/leader-utpal-shah.jpg",
      accentColor: "#073F8A",
      tagline: "Building IT Infrastructure with Uncompromising Integrity Since 2000",
      bio: "Utpal Shah started this company in 2000 at a time when most businesses in Vadodara were not online at all. Utpal could see that was going to change — and he wanted to be the person helping local businesses make that shift properly. Over 26 years, Utpal has guided Jeenweb through every major technological transformation with a strict refusal to cut corners or use unverified software.",
      competencies: [
        { label: "Governance", icon: ShieldCheck, value: "100%" },
        { label: "Integrity", icon: Award, value: "26 Yrs" },
        { label: "Continuity", icon: Layers, value: "99.9%" },
        { label: "Expertise", icon: Cpu, value: "Enterprise" }
      ],
      highlights: [
        "26 years of real business and technology leadership in Gujarat",
        "Founding culture anchored in honesty, genuine code, and long-term relationships",
        "Prudent strategic judgment on business continuity, security, and client stability"
      ],
      focus: "IT Governance, Enterprise Continuity & Long-Term Client Trust"
    },
    {
      id: "tatvam-shah",
      name: "Tatvam Shah",
      role: "Managing Director and Partner",
      titleLabel: "Managing Director & Technical Architect",
      experience: "11+ Years Hands-on Leadership",
      image: "/images/leader-tatvam-shah.jpg",
      accentColor: "#073F8A",
      tagline: "Engineering-First Architecture, Custom ERPs & State IT Advisory",
      bio: "Tatvam holds a diploma in computer engineering and brought a fresh technical rigor to Jeenweb. Parul University inducted him into their prestigious Wall of Fame for his contributions to technology and entrepreneurship. He serves as the official JITO Gujarat IT Consultant, advising regional enterprises on digital security and cloud modernization.",
      competencies: [
        { label: "Leadership", icon: Award, value: "11+ Yrs" },
        { label: "Architecture", icon: Code2, value: "Custom" },
        { label: "JITO Advisory", icon: ShieldCheck, value: "Official" },
        { label: "QA Systems", icon: Cpu, value: "Zero-Lag" }
      ],
      highlights: [
        "Computer engineering background with 11+ years of architectural leadership",
        "Recognized by Parul University's Wall of Fame for technology & entrepreneurship",
        "Official JITO Gujarat IT Consultant advising regional enterprises on digital security",
        "Direct technical oversight on software engineering, ERP, and WordPress builds"
      ],
      focus: "Custom Software Architecture, Cloud Infrastructure & JITO Advisory"
    },
    {
      id: "exita-shah",
      name: "Exita Shah",
      role: "Co-Founder and Head of Digital Marketing & SEO",
      titleLabel: "Co-Founder & Head of Digital Marketing",
      experience: "Engineering-Backed Digital Strategy",
      image: "/images/leader-exita-shah.jpg",
      accentColor: "#E11D48",
      tagline: "Technical SEO, AEO, and Generative Engine Optimization for Modern Discovery",
      bio: "Exita Shah leads search visibility, content strategy, and digital campaigns with an engineering foundation from Parul University. She treats SEO not as a superficial content exercise, but as a systems problem needing technical precision. Her work spans traditional Technical SEO, Answer Engine Optimization (AEO) for Google AI Overviews, and GEO for ChatGPT and Gemini.",
      competencies: [
        { label: "Technical SEO", icon: Search, value: "Schema+" },
        { label: "AEO / GEO", icon: Sparkles, value: "AI-Ready" },
        { label: "Traction", icon: TrendingUp, value: "+180%" },
        { label: "Conversion", icon: Award, value: "B2B Lead" }
      ],
      highlights: [
        "Engineering-backed approach to technical SEO, AEO, GEO, and AIO",
        "Co-Founder with direct leadership over all client digital marketing operations",
        "Laser-focused on tangible business outcomes: qualified B2B leads & conversions",
        "Deep technical mastery of schema graphs, Core Web Vitals, and AI answer engines"
      ],
      focus: "Technical SEO, Schema Architecture, GEO / AEO & Performance ROAS"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden" id="leadership">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">


          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight font-sans">
            The Minds Behind <br />
            <span className="text-[#073F8A]">Jeenweb Technologists</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl mx-auto">
            Deep domain experience across enterprise engineering, state-level IT advisory, and technical AI search engine optimization.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ALL 3 LEADERS DISPLAYED SEQUENTIALLY (Compact Sizing) */}
        {/* ========================================================================= */}
        <div className="space-y-8 lg:space-y-10">
          {leaders.map((leader, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={leader.id}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch hover:border-[#073F8A]/40 transition-all duration-300"
              >
                
                {/* Content Side (7 Cols) */}
                <div className={`lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between space-y-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  
                  <div className="space-y-4">
                    
                    {/* Header with Title and Step Numerals */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#073F8A] block mb-0.5">
                          Leadership Profile 0{index + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-sans">
                          Meet the {leader.titleLabel}
                        </h3>
                      </div>

                      <span className="text-2xl sm:text-3xl font-mono font-black text-slate-200">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Statement Card with Left Accent Stripe & Icon */}
                    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs relative overflow-hidden flex flex-col sm:flex-row items-start gap-4">
                      {/* Left Accent Stripe */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1.5"
                        style={{ backgroundColor: leader.accentColor }}
                      />

                      {/* Emblem Icon */}
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#073F8A] shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>

                      {/* Bio Description */}
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-900 font-sans">
                          {leader.tagline}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-sans">
                          {leader.bio}
                        </p>
                      </div>
                    </div>

                    {/* 4 Circular Competency Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                      {leader.competencies.map((comp, i) => {
                        const CompIcon = comp.icon;
                        return (
                          <div key={i} className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs group hover:border-[#073F8A]/40 transition-colors">
                            {/* Circular Icon Frame with Arc Gauge */}
                            <div className="w-9 h-9 rounded-full border border-[#073F8A] bg-blue-50/50 flex items-center justify-center text-[#073F8A] mb-1.5 shadow-2xs group-hover:scale-105 transition-transform">
                              <CompIcon className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] font-bold text-slate-900 font-sans">
                              {comp.label}
                            </span>
                            <span className="text-[9px] font-mono font-semibold text-[#073F8A] mt-0.5">
                              {comp.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                  {/* Verified Highlights */}
                  <div className="pt-3 border-t border-slate-200/80 space-y-1.5">
                    {leader.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Standing Portrait Side (5 Cols) with Floating Name Banner */}
                <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-[360px] bg-slate-100 flex items-end justify-center overflow-hidden ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  
                  {/* Background gradient behind leader */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073F8A]/20 via-transparent to-transparent" />

                  {/* Standing Portrait Image */}
                  <div className="relative w-full h-full min-h-[320px] lg:min-h-[360px]">
                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority={index === 0}
                    />
                  </div>

                  {/* Overlay Name & Role Banner (Floating across lower-middle of image) */}
                  <div
                    className="absolute bottom-8 sm:bottom-12 left-0 right-0 py-2.5 px-5 text-white shadow-lg flex items-center justify-between z-10"
                    style={{
                      background: leader.accentColor === "#E11D48"
                        ? "linear-gradient(to right, #E11D48, #BE123C)"
                        : "linear-gradient(to right, #073F8A, #042454)"
                    }}
                  >
                    <div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#00D2FF] block">
                        {leader.role}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-white tracking-tight font-sans">
                        {leader.name}
                      </h4>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono font-semibold text-white/90 bg-white/15 px-2 py-0.5 rounded inline-block">
                        {leader.experience}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
