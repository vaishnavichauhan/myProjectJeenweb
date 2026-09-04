"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import CommonCta from "@/components/common/CommonCta";
import {
  Search,
  Sparkles,
  Bot,
  Layers,
  TrendingUp,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Code2,
  FileCode2,
  Globe,
  Building2,
  Award,
  PhoneCall,
  Zap,
  Lock,
  FileText,
  Smartphone,
  Target,
  Cpu,
  BarChart3,
  Users,
  Check
} from "lucide-react";

export default function SeoServicePage() {
  const seoPartnerLogosRow1 = [
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Top Regional Medical Specialty Rankings" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "High-Volume Career Search Engine Indexing" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Google Maps Local 3-Pack Optimization" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Job Posting Schema & Rich Snippets" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Clinical Authority & Technical SEO" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Statewide Organic Candidate Discovery" }
  ];

  const seoPartnerLogosRow2 = [
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "National Recruitment Keyword Rankings" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Doctor Specialty & OPD Search Authority" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Zero-Position Featured Snippet Capture" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Healthcare GEO & AI Engine Citations" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Core Web Vitals & Fast Indexation" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Gujarat Regional Organic Search Growth" }
  ];

  const seoFaqs = [
    {
      q: "How is GEO search optimization different from traditional SEO?",
      a: "Traditional SEO focuses on optimizing your web pages to rank in Google's blue-link results. GEO — Generative Engine Optimization — goes further. It optimizes your entire digital presence so AI platforms like ChatGPT, Gemini, and Claude reference and recommend your business when generating answers for relevant queries. That means brand citations, topic-cluster content, structured data, and authority signals across the full web—not just your own website. If you only do traditional SEO, you will be invisible to a growing number of people who never click a Google link and go straight to an AI platform for their answer."
    },
    {
      q: "How long does it take to see results from an SEO campaign?",
      a: "Technical fixes — broken links, speed improvements, indexation errors — show improvements in search console data within 3 to 6 weeks. Ranking movement for competitive B2B keywords and consistent AI Overview citations typically take 3 to 6 months of steady work. We do not promise overnight rankings because rankings that appear overnight usually disappear just as fast. We build sustainable organic traffic growth that holds up over time."
    },
    {
      q: "What tools do you use to track SEO performance and AI visibility?",
      a: "We use Google Search Console, Google Analytics 4, Ahrefs, SEMrush, and custom monitoring setups for tracking AI platform citations and brand mentions. You receive regular reports showing keyword movement, organic traffic growth, backlink health, Core Web Vitals scores, and brand citation data across AI platforms — all explained in plain language without confusing jargon."
    },
    {
      q: "Can you help our Vadodara business rank higher on Google Maps?",
      a: "Yes. Local SEO is a core part of what we do. We optimize your Google Business Profile, standardize your business name, address, and phone number across local directories, build geo-targeted content pages for Vadodara and surrounding areas in Gujarat, and manage your review strategy. For businesses that depend on local customers finding them, this is often the fastest way to see meaningful results."
    },
    {
      q: "Why does structured JSON-LD schema markup matter for AI optimization?",
      a: "Schema markup tells AI crawlers and search engines exactly what your business data means — not just what the words say. Without it, a crawler reading your website has to guess whether a number on your page is a phone number, a price, or a product rating. With properly implemented With a JSON-LD schema, there is no guessing. The crawler knows your business name, location in Gujarat, services, pricing, team credentials, and operating hours — and that accuracy directly improves how often and how correctly AI platforms cite your business in generated answers."
    }
  ];

  const pillars = [
    {
      title: "Traditional Search Engine Optimization (SEO)",
      shortTitle: "Traditional SEO",
      badge: "Google #1 Rankings & Maps",
      icon: Search,
      image: "/images/services/seo-pillar-traditional.jpg",
      desc: "Comprehensive on-page, off-page, and technical optimization to rank high-intent keywords across Google and Bing.",
      deliverables: [
        "Keyword research & competitor gap analysis",
        "Technical site speed & Core Web Vitals optimization",
        "Local SEO & Google Business Profile dominance"
      ]
    },
    {
      title: "Answer Engine Optimization (AEO)",
      shortTitle: "Answer Engine (AEO)",
      badge: "Position 0 & AI Overviews",
      icon: Sparkles,
      image: "/images/services/seo-pillar-aeo.jpg",
      desc: "Structuring content into direct, conversational answers designed to trigger featured snippets and Google AI Overview summaries.",
      deliverables: [
        "Q&A content structuring & FAQ schemas",
        "Featured snippet capture strategies",
        "Natural language processing (NLP) keyword tuning"
      ]
    },
    {
      title: "Generative Engine Optimization (GEO)",
      shortTitle: "Generative Engine (GEO)",
      badge: "ChatGPT & Gemini Citations",
      icon: Bot,
      image: "/images/services/seo-pillar-geo.jpg",
      desc: "Optimizing your brand authority and technical documentation so generative AI engines recommend your business in conversational answers.",
      deliverables: [
        "LLM training data citation modeling",
        "Authoritative brand entity establishment",
        "Conversational prompt alignment"
      ]
    },
    {
      title: "Artificial Intelligence Optimization (AIO)",
      shortTitle: "AI Optimization (AIO)",
      badge: "Structured Entity Graphs & Schema",
      icon: Layers,
      image: "/images/services/seo-pillar-aio.jpg",
      desc: "Injecting comprehensive JSON-LD microdata schemas so autonomous AI crawlers parse your business without ambiguity.",
      deliverables: [
        "JSON-LD structured schema deployment",
        "Entity relationship mapping",
        "Core Web Vitals acceleration for AI bots"
      ]
    }
  ];

  const seoImportanceItems = [
    // Left 4 items (Jeenweb Brand Palette: Red, Navy, Sky Blue, Dark Slate)
    {
      id: "cost-effective",
      side: "left",
      borderColor: "border-[#C11E23]",
      dotColor: "#C11E23",
      title: "Cost Effective & Marketing Strategy",
      desc: "Compounding organic return on investment without paying per click.",
      icon: TrendingUp,
      iconColor: "text-[#C11E23]"
    },
    {
      id: "credibility",
      side: "left",
      borderColor: "border-[#16325B]",
      dotColor: "#16325B",
      title: "Credibility & Trust",
      desc: "Top organic ranking validates brand authority and market leadership.",
      icon: ShieldCheck,
      iconColor: "text-[#16325B]"
    },
    {
      id: "algorithms",
      side: "left",
      borderColor: "border-[#0284C7]",
      dotColor: "#0284C7",
      title: "Adaptation to changing Algorithms",
      desc: "Future-proof technical architecture resilient against Google updates.",
      icon: Sparkles,
      iconColor: "text-[#0284C7]"
    },
    {
      id: "ux",
      side: "left",
      borderColor: "border-[#1E293B]",
      dotColor: "#1E293B",
      title: "Improving User Experience",
      desc: "Sub-second speed and clean structure boost engagement and conversions.",
      icon: Users,
      iconColor: "text-[#1E293B]"
    },

    // Right 4 items (Jeenweb Brand Palette: Red, Navy, Sky Blue, Dark Slate)
    {
      id: "visibility",
      side: "right",
      borderColor: "border-[#C11E23]",
      dotColor: "#C11E23",
      title: "Enhancing online visibility",
      desc: "Continuous organic exposure across SERP, Google Maps, and AI overviews.",
      icon: Globe,
      iconColor: "text-[#C11E23]"
    },
    {
      id: "traffic",
      side: "right",
      borderColor: "border-[#16325B]",
      dotColor: "#16325B",
      title: "Quality Traffic Generation",
      desc: "Captures buyers actively searching with intent rather than cold leads.",
      icon: Target,
      iconColor: "text-[#16325B]"
    },
    {
      id: "mobile",
      side: "right",
      borderColor: "border-[#0284C7]",
      dotColor: "#0284C7",
      title: "Mobile optimization",
      desc: "Mobile-first indexing compliance ensuring smooth smartphone conversions.",
      icon: Smartphone,
      iconColor: "text-[#0284C7]"
    },
    {
      id: "data-driven",
      side: "right",
      borderColor: "border-[#1E293B]",
      dotColor: "#1E293B",
      title: "Data-Driven Decision Making",
      desc: "Actionable keyword demand metrics to guide your commercial growth.",
      icon: Cpu,
      iconColor: "text-[#1E293B]"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/#services" },
              { label: "SEO and AI Search Optimization" }
            ]}
          />
        </div>
      </div>

      {/* Hero Banner with User's Uploaded SEO Illustration Background */}
      <section className="text-slate-900 py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200/90 flex items-center justify-center min-h-[580px] lg:min-h-[640px]">
        {/* Background Image with Soft Clean Wash Overlay for High Contrast */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/seo-hero-bg.jpg"
            alt="SEO and AI Search Optimization Framework"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Layered white wash to preserve doodle visibility while ensuring crisp typography */}
          <div className="absolute inset-0 bg-white/80 sm:bg-white/75 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/65 to-white/85" />
        </div>

        {/* Center Hero Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.14]">
            Visibility Is A Choice. <br />
            <span className="font-sans font-black text-slate-950">
              The Top Ranked Brands Already Made Theirs.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-700 font-sans max-w-2xl mx-auto leading-relaxed">
            Dominate traditional search results and generative AI answer engines with technical SEO, Answer Engine Optimization (AEO), and high-authority digital visibility.
          </p>

          {/* Dual Action Buttons Matching Reference UI */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => window.location.href = "/contact#get-in-touch"}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-950/30 hover:shadow-red-950/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Request Free SEO/AI Audit</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#framework"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-800 hover:text-slate-950 font-semibold text-xs uppercase tracking-wider transition-all border border-slate-300 hover:border-slate-400 shadow-xs text-center flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>Explore Technical Standards</span>
            </a>
          </div>

          {/* Bottom Micro Trust Points */}
          <div className="mt-10 pt-6 border-t border-slate-300/60 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-slate-600">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              ChatGPT &amp; Gemini Presence
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              Google AI Overviews Optimization
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C11E23]" />
              Zero-Loss Schema Architecture
            </span>
          </div>

        </div>
      </section>

      {/* Section 2: Our 4-Pillar Search & AI Visibility Matrix (Clean White Background) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" id="framework">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C11E23]">
                Proprietary Visibility Matrix
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Our 4-Pillar Search &amp; AI Visibility Matrix
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
              Engineered by Exita Shah and our technical search team to give your business durable, high-ranking authority across Google and AI answer engines.
            </p>
          </div>

          {/* 4 Pillar Cards Grid matching Image 2 vertical card structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/90 group text-slate-900"
              >
                <div>
                  {/* Top Illustration container matching Image 2 */}
                  <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 relative mb-5 flex items-center justify-center p-2 border border-slate-100 shadow-inner">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#C11E23] transition-colors mb-2.5 leading-snug">
                    {pillar.shortTitle || pillar.title}
                  </h3>

                  {/* Sample description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {pillar.desc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Deliverables:
                    </span>
                    {pillar.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16325B] flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Importance of SEO in Digital Marketing Section (Exact Image 1 Infographic Section) */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200/80" id="importance-of-seo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header matching Image 1 */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C11E23]">
                SEO Growth Framework • Vadodara &amp; Global
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              The Importance of SEO in Digital Marketing
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Why leading enterprises invest in organic visibility to compound long-term brand equity, lower client acquisition costs, and dominate search engines.
            </p>
          </div>

          {/* Desktop Diagram (Image 1 Layout: Left 4 Pills, Center SEO Dial with SVG Connectors, Right 4 Pills) */}
          <div className="relative max-w-6xl mx-auto hidden lg:block">
            <div className="grid grid-cols-12 items-center gap-4">
              {/* Left Column (4 Pills aligned to the right) */}
              <div className="col-span-5 flex flex-col justify-between h-full py-4 space-y-7">
                {seoImportanceItems
                  .filter((item) => item.side === "left")
                  .map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.id} className="flex items-center justify-end">
                        <div className={`flex items-center rounded-full bg-white hover:scale-[1.02] transition-all duration-200 border-2 ${item.borderColor} shadow-sm hover:shadow-md group cursor-default`}>
                          <div className="px-6 py-3.5 bg-transparent font-bold text-sm text-right pr-6 min-w-[280px] text-slate-900">
                            <span>{item.title}</span>
                          </div>
                          <div className={`w-14 h-14 rounded-full bg-white border-2 ${item.borderColor} shadow-sm flex items-center justify-center -ml-3 z-10 shrink-0`}>
                            <Icon className={`w-6 h-6 ${item.iconColor}`} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Center Column: 3D SEO Dial & Circuit SVG Connectors */}
              <div className="col-span-2 relative flex items-center justify-center min-h-[420px]">
                {/* SVG Circuit Lines branching from center to left & right */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 200 420"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  {/* Left 4 Connectors with dot nodes matching brand colors */}
                  <path d="M 0 50 L 40 50 L 75 180" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="40" cy="50" r="3.5" fill="#C11E23" />
                  <circle cx="75" cy="180" r="3" fill="#64748B" />

                  <path d="M 0 145 L 35 145 L 72 195" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="35" cy="145" r="3.5" fill="#16325B" />
                  <circle cx="72" cy="195" r="3" fill="#64748B" />

                  <path d="M 0 275 L 35 275 L 72 225" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="35" cy="275" r="3.5" fill="#0284C7" />
                  <circle cx="72" cy="225" r="3" fill="#64748B" />

                  <path d="M 0 370 L 40 370 L 75 240" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="40" cy="370" r="3.5" fill="#1E293B" />
                  <circle cx="75" cy="240" r="3" fill="#64748B" />

                  {/* Right 4 Connectors with dot nodes matching brand colors */}
                  <path d="M 200 50 L 160 50 L 125 180" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="160" cy="50" r="3.5" fill="#C11E23" />
                  <circle cx="125" cy="180" r="3" fill="#64748B" />

                  <path d="M 200 145 L 165 145 L 128 195" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="165" cy="145" r="3.5" fill="#16325B" />
                  <circle cx="128" cy="195" r="3" fill="#64748B" />

                  <path d="M 200 275 L 165 275 L 128 225" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="165" cy="275" r="3.5" fill="#0284C7" />
                  <circle cx="128" cy="225" r="3" fill="#64748B" />

                  <path d="M 200 370 L 160 370 L 125 240" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="160" cy="370" r="3.5" fill="#1E293B" />
                  <circle cx="125" cy="240" r="3" fill="#64748B" />
                </svg>

                {/* 3D Circular SEO Dial Button (Matching Brand Colors) */}
                <div className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-b from-slate-200 via-white to-slate-300 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.18)] border-4 border-slate-100 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 shadow-inner flex flex-col items-center justify-center p-2 text-center select-none">
                    {/* Stylized SEO Logo in Brand Corporate Colors */}
                    <div className="flex items-center text-3xl font-black tracking-tight leading-none">
                      <span className="text-[#16325B]">S</span>
                      <span className="text-[#C11E23]">E</span>
                      <div className="relative flex items-center justify-center ml-0.5">
                        <span className="text-[#0284C7]">O</span>
                        <TrendingUp className="w-4 h-4 text-[#C11E23] absolute -top-1 -right-2 stroke-[3]" />
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 mt-1.5">
                      Hub
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column (4 Pills aligned to the left) */}
              <div className="col-span-5 flex flex-col justify-between h-full py-4 space-y-7">
                {seoImportanceItems
                  .filter((item) => item.side === "right")
                  .map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.id} className="flex items-center justify-start">
                        <div className={`flex items-center rounded-full bg-white hover:scale-[1.02] transition-all duration-200 border-2 ${item.borderColor} shadow-sm hover:shadow-md group cursor-default`}>
                          <div className={`w-14 h-14 rounded-full bg-white border-2 ${item.borderColor} shadow-sm flex items-center justify-center -mr-3 z-10 shrink-0`}>
                            <Icon className={`w-6 h-6 ${item.iconColor}`} />
                          </div>
                          <div className="px-6 py-3.5 bg-transparent font-bold text-sm text-left pl-6 min-w-[280px] text-slate-900">
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout (Responsive Grid with Center Hub on Top) */}
          <div className="block lg:hidden max-w-2xl mx-auto">
            {/* Center Dial on Mobile */}
            <div className="flex justify-center mb-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-slate-200 via-white to-slate-300 p-2 shadow-xl border-4 border-slate-100 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 shadow-inner flex flex-col items-center justify-center p-2 text-center">
                  <div className="flex items-center text-2xl font-black tracking-tight leading-none">
                    <span className="text-[#16325B]">S</span>
                    <span className="text-[#C11E23]">E</span>
                    <div className="relative flex items-center justify-center ml-0.5">
                      <span className="text-[#0284C7]">O</span>
                      <TrendingUp className="w-3.5 h-3.5 text-[#C11E23] absolute -top-1 -right-2 stroke-[3]" />
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 mt-1">
                    Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Pills Stack for Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {seoImportanceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center shadow-sm rounded-2xl overflow-hidden border-2 ${item.borderColor} bg-white`}
                  >
                    <div className="w-12 h-12 bg-white border-r border-slate-100 flex items-center justify-center shrink-0">
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1 px-4 py-3 bg-transparent font-bold text-xs sm:text-sm text-slate-900">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical SEO Execution Standards */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80" id="standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technical SEO Execution Standards"
            badgeStyle="underline"
            title="Built for Indexation Speed and Authority"
            subtitle="Our developer-led search infrastructure is engineered to satisfy strict Google Core Web Vitals and provide explicit machine-readable schema for autonomous AI bots."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {/* Standard 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-32 h-32 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Zap className="w-24 h-24 stroke-[1.2] text-slate-200/50 group-hover:text-amber-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Core Web Vitals
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Core Web Vitals and Server Speed
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Page speed is a direct ranking factor — and it affects how AI crawlers experience your website too. We optimize database queries, eliminate render-blocking scripts, compress media assets, and configure caching so your pages pass Google Core Web Vitals thresholds on both desktop and mobile. Faster pages rank better and get cited more accurately by AI platforms.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-amber-800 font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>LCP • CLS • INP • Sub-Second TTFB</span>
              </div>
            </div>

            {/* Standard 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-32 h-32 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FileCode2 className="w-24 h-24 stroke-[1.2] text-slate-200/50 group-hover:text-blue-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#16325B] bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    Knowledge Graph
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Schema and Entity Graph Mapping
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We inject custom microdata schemas for every relevant data type on your website—LocalBusiness, Product, Service, FAQ, Organization, and more. This structured data acts as a direct instruction set for search engines and AI crawlers—telling them exactly who your business is, what it does, where it operates in Gujarat, and what makes it credible. Businesses with properly implemented schema consistently appear in more rich results and AI-generated answers.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#16325B] font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>JSON-LD Microdata • Rich Snippets</span>
              </div>
            </div>

            {/* Standard 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-32 h-32 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FileText className="w-24 h-24 stroke-[1.2] text-slate-200/50 group-hover:text-blue-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    E-E-A-T Framework
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Data-Backed Content Strategy
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We write content based on real search intent data — what your actual customers search, what questions they ask, and what kind of content search engines and AI platforms reward. We follow Google&apos;s E-E-A-T guidelines—Experience, Expertise, Authoritativeness, and Trustworthiness—producing content that demonstrates genuine knowledge rather than surface-level keyword coverage. No fluff, no stuffing, no content written for algorithms at the expense of real readers.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-800 font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Search Intent • Zero Fluff Content</span>
              </div>
            </div>

            {/* Standard 4 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-32 h-32 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <TrendingUp className="w-24 h-24 stroke-[1.2] text-slate-200/50 group-hover:text-emerald-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Ranking Recovery
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Google Ranking Improvement Services
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  For businesses in Vadodara and across Gujarat that have seen rankings drop or stagnate, we run targeted Google ranking improvement services—diagnosing exactly what is holding your rankings back and fixing it systematically. Whether the issue is technical, content-related, or authority-based, we identify the root cause and address it properly.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Algorithm Recovery • Toxic Link Audits</span>
              </div>
            </div>

            {/* Standard 5 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden md:col-span-2 lg:col-span-2">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-36 h-36 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Bot className="w-28 h-28 stroke-[1.2] text-slate-200/50 group-hover:text-red-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-red-800 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    AI Answer Engines
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  GEO and AEO Optimization Services
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Beyond traditional search, we build your visibility across AI answer platforms and generative search engines. Our GEO and AEO optimization services are specifically designed for businesses that want to appear in AI-generated recommendations — not just on a search results page but inside the answers that AI platforms give to their users.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-red-700 font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ChatGPT Citations • Gemini Answers • Claude Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Client Logo Auto-Marquee Section (Matching Social Media UI) */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200/80" id="seo-partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
              Trusted Partnerships
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Brands Across Gujarat That Trust <br className="hidden sm:inline" />
            <span className="text-[#1A3B71]">Jeenweb for Search Visibility</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-sans leading-relaxed">
            From multi-specialty healthcare networks and universities to manufacturing exporters, see the organizations ranking with Jeenweb search engineering.
          </p>
        </div>

        {/* 2-Line Infinite Auto-Marquee Track */}
        <div className="w-full relative overflow-hidden py-2 space-y-4 sm:space-y-6">
          
          {/* Gradient edge masks for smooth seamless fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />

          {/* Line 1: Infinite Marquee (Left Scroll) */}
          <div className="flex animate-marquee items-center gap-5 sm:gap-6">
            {[...seoPartnerLogosRow1, ...seoPartnerLogosRow1].map((partner, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex-shrink-0 flex items-center gap-4 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#1A3B71]/40 hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="h-10 sm:h-11 w-32 sm:w-36 relative flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    width={150}
                    height={45}
                    className="h-8 sm:h-9 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#1A3B71] transition-colors whitespace-nowrap">
                    {partner.name}
                  </div>
                  <div className="text-[10px] font-mono font-medium text-slate-500 whitespace-nowrap">
                    {partner.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Line 2: Infinite Marquee Reverse (Right Scroll) */}
          <div className="flex animate-marquee-reverse items-center gap-5 sm:gap-6">
            {[...seoPartnerLogosRow2, ...seoPartnerLogosRow2].map((partner, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex-shrink-0 flex items-center gap-4 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#C11E23]/40 hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="h-10 sm:h-11 w-32 sm:w-36 relative flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    width={150}
                    height={45}
                    className="h-8 sm:h-9 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#C11E23] transition-colors whitespace-nowrap">
                    {partner.name}
                  </div>
                  <div className="text-[10px] font-mono font-medium text-slate-500 whitespace-nowrap">
                    {partner.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 5: SEO and AI Visibility FAQs */}
      <FaqSection
        customFaqs={seoFaqs}
        badge="SEO and AI Visibility FAQs"
        title="Direct Answers Regarding Search and AI Visibility"
        subtitle="Clear explanations regarding Generative Engine Optimization (GEO), indexation timelines, reporting tools, Google Maps local rankings, and JSON-LD schema mapping."
      />

      {/* Section 6: Action Call CTA */}
      <CommonCta
        id="action-call"
        title={
          <>
            Put Your Brand at the Top of <br className="hidden sm:inline" />
            <span className="text-blue-400">Modern Search Results</span>
          </>
        }
        subtitle="Your competitors are already working on their search visibility. Talk to our SEO and AI visibility team in Vadodara — we will audit your current rankings, check your AI platform presence, and show you exactly where the gaps are and how to close them."
        buttonText="Speak with Performance Specialist"
        buttonHref="/contact"
      />

          </main>
  );
}
