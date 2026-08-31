"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import ConsultationModal from "@/components/common/ConsultationModal";
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
  FileText
} from "lucide-react";

export default function SeoServicePage() {
  const [modalOpen, setModalOpen] = useState(false);

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
      title: "1. Traditional Search Engine Optimization (SEO)",
      badge: "Google #1 Rankings & Maps",
      icon: Search,
      desc: "Comprehensive on-page, off-page, and technical optimization to rank high-intent keywords across Google and Bing.",
      deliverables: [
        "Keyword research & competitor gap analysis",
        "Technical site speed & Core Web Vitals optimization",
        "On-page meta tags, heading hierarchies, & internal links",
        "Local SEO & Google Business Profile dominance"
      ]
    },
    {
      title: "2. Answer Engine Optimization (AEO)",
      badge: "Position 0 & AI Overviews",
      icon: Sparkles,
      desc: "Structuring content into direct, conversational answers designed to trigger featured snippets and Google AI Overview summaries.",
      deliverables: [
        "Q&A content structuring & FAQ schemas",
        "Featured snippet capture strategies",
        "Natural language processing (NLP) keyword tuning",
        "Voice search optimization"
      ]
    },
    {
      title: "3. Generative Engine Optimization (GEO)",
      badge: "ChatGPT & Gemini Citations",
      icon: Bot,
      desc: "Optimizing your brand authority and technical documentation so generative AI engines recommend your business in conversational answers.",
      deliverables: [
        "LLM training data citation modeling",
        "Authoritative brand entity establishment",
        "Multi-channel sentiment & footprint management",
        "Conversational prompt alignment"
      ]
    },
    {
      title: "4. Artificial Intelligence Optimization (AIO)",
      badge: "Structured Entity Graphs & Schema",
      icon: Layers,
      desc: "Injecting comprehensive JSON-LD microdata schemas (LocalBusiness, Service, Organization, FAQ) so autonomous AI crawlers parse your business without ambiguity.",
      deliverables: [
        "JSON-LD structured schema deployment",
        "Entity relationship mapping",
        "Core Web Vitals acceleration for AI bots",
        "Bot indexation protocol configuration"
      ]
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

      {/* Hero Banner */}
      <section className="bg-[#0B192C] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block pb-1.5 border-b-2 border-[#D32F2F]">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-100">
                Next-Gen Search Architecture
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Dominate Traditional Search and Generative AI Answer Engines with Next-Generation SEO
            </h1>

            <p className="text-base sm:text-lg text-purple-300 font-semibold">
              Technical SEO, AEO, GEO, and AIO frameworks engineered out of Vadodara to capture high-intent digital traffic.
            </p>

            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
              The way people search for businesses has changed significantly. A growing number of your potential customers are asking questions directly to ChatGPT, Google Gemini, Perplexity, and Google AI Overviews. If your business is not showing up in those synthesized answers, you are losing buyers to competitors who are. We combine proven traditional SEO with next-generation GEO/AEO optimization to keep you visible across all search surfaces.
            </p>

            <div className="pt-4 flex flex-wrap gap-3.5">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
              >
                <span>Request Free SEO/AI Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#standards"
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15"
              >
                Explore Technical Standards
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Pillar Search Framework */}
      <section className="py-20 lg:py-24 bg-white" id="framework">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Search Intelligence"
            title="Our 4-Pillar Search & AI Visibility Matrix"
            subtitle="Engineered by Exita Shah and our technical search team to give your business durable, high-ranking authority."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-200/80 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Key Deliverables:
                      </span>
                      {pillar.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#16325B] text-slate-800 hover:text-[#16325B] text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Deploy {pillar.title.split(" ")[1]} for Your Business</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Technical SEO Execution Standards */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80" id="standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technical SEO Execution Standards"
            title="Built for Indexation Speed and Authority"
            subtitle="Our developer-led search infrastructure is engineered to satisfy strict Google Core Web Vitals and provide explicit machine-readable schema for autonomous AI bots."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {/* Standard 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200/60">
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-amber-800 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>LCP • CLS • INP • Sub-Second TTFB</span>
              </div>
            </div>

            {/* Standard 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <FileCode2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider border border-purple-200/60">
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-purple-800 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>JSON-LD Microdata • Rich Snippets</span>
              </div>
            </div>

            {/* Standard 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200/60">
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-800 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Search Intent • Zero Fluff Content</span>
              </div>
            </div>

            {/* Standard 4 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200/60">
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Algorithm Recovery • Toxic Link Audits</span>
              </div>
            </div>

            {/* Standard 5 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Bot className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[11px] font-bold text-red-800 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider border border-red-200/60">
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-red-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ChatGPT Citations • Gemini Answers • Claude Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Clients Who Trust Jeenweb for SEO and AI Visibility */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clients Who Trust Jeenweb for SEO and AI Visibility"
            title="Brands Across Gujarat That Trust Jeenweb for Search Visibility"
            subtitle="From multi-specialty healthcare networks and universities to manufacturing exporters, see the organizations ranking with Jeenweb search engineering."
            centered={true}
          />

          {/* Client Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Client Card 1: CARE Hospitals */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-center p-3 bg-white rounded-2xl border border-slate-100 mb-4 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/partners/care-hospitals.svg"
                    alt="CARE Hospitals Logo"
                    width={180}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  CARE Hospitals
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Healthcare & Medical Search Authority
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Top Regional Medical Keywords</span>
              </div>
            </div>

            {/* Client Card 2: JITO JOBS */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-center p-3 bg-white rounded-2xl border border-slate-100 mb-4 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/partners/jito-jobs.svg"
                    alt="JITO JOBS Logo"
                    width={180}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  JITO JOBS
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Recruitment & Career Platform SEO
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>High-Volume Job Searches</span>
              </div>
            </div>

            {/* Client Card 3: Google Cloud / Workspace */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Search Engine
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Google AI Overviews (SGE)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Structured Data & Position 0 Snippets
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-blue-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Featured Snippet Capture</span>
              </div>
            </div>

            {/* Client Card 4: Microsoft Azure / 365 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Bing & Copilot
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Microsoft Copilot Engine
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  B2B Entity Graph Synchronization
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copilot Answer Citations</span>
              </div>
            </div>

            {/* Client Card 5: Parul University */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Academic SEO
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Parul University
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Higher Education & Admissions Search Visibility
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-amber-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Pan-India Course Rankings</span>
              </div>
            </div>

            {/* Client Card 6: Gujarat Industrial Consortium */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    Industrial B2B
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Gujarat Industrial Leaders
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Chemical, Engineering & Manufacturing Search
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Industrial B2B Lead Acquisition</span>
              </div>
            </div>

            {/* Client Card 7: Global B2B Export Trade */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    International SEO
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  International Export Houses
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Global Multi-Region Export Search Rankings
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>USA, Europe & Middle East Markets</span>
              </div>
            </div>

            {/* Client Card 8: AI-Driven Answer Systems */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Bot className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    GEO & AEO
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  AI Answer Engine Matrix
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  ChatGPT, Gemini & Perplexity Brand Citations
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-purple-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Continuous LLM Citation Tracking</span>
              </div>
            </div>
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

      {/* Section 6: Action Call */}
      <section className="relative z-20 -mb-20 sm:-mb-24 lg:-mb-28" id="action-call">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B192C] via-[#11253E] to-[#0B192C] border border-slate-700/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-950/40 relative overflow-hidden backdrop-blur-sm">
            {/* Ambient glows inside card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
              <div className="text-center lg:text-left space-y-2.5 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-red-400" />
                  <span>Action Call • Vadodara Search Engine Desk</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Put Your Brand at the Top of Modern Search Results
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Your competitors are already working on their search visibility. Talk to our SEO and AI visibility team in Vadodara — we will audit your current rankings, check your AI platform presence, and show you exactly where the gaps are and how to close them.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-900/40 hover:shadow-red-900/60 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Request SEO and AI Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15 hover:border-white/30 text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3 h-3 text-slate-300" />
                  <span>Speak with Search Strategist</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService="SEO and AI Search Optimization"
      />
    </main>
  );
}
