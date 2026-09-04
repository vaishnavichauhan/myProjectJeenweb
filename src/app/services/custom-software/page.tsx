"use client";

import React, { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import TailoredSolutionsStackingCards from "@/components/services/TailoredSolutionsStackingCards";
import {
  Cpu,
  Layers,
  Users,
  Building,
  GraduationCap,
  Clock,
  Zap,
  Ticket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Code2,
  Lock,
  Workflow,
  Sparkles,
  Search,
  PenTool,
  ThumbsUp,
  RotateCw
} from "lucide-react";

export default function CustomSoftwarePage() {  const [selectedSolution, setSelectedSolution] = useState("Custom ERP");
  const [activeProcessStep, setActiveProcessStep] = useState(1);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCardFlip = (idx: number) => {
    setFlippedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const softwareFaqs = [
    {
      q: "Why should we build custom software instead of buying a ready-made SaaS tool?",
      a: "Off-the-shelf SaaS platforms charge recurring per-user fees that grow every time you hire someone new. They also force your team to work around their fixed layouts rather than your actual processes. Custom software development in Vadodara through Jeenweb means no recurring per-seat fees, no adapting your team to someone else's workflow, and full ownership of the software as your intellectual property. For businesses that plan to grow — especially SMEs across Gujarat — custom software almost always costs less over three to five years than a SaaS subscription that keeps getting more expensive."
    },
    {
      q: "Can you connect your attendance management system to our existing biometric devices?",
      a: "Yes. We write custom API controllers and database listeners that communicate directly with standard biometric terminals, facial recognition devices, and RFID readers already installed at your facilities across Gujarat. We work with the hardware you have — you do not need to replace equipment just to get a better software system."
    },
    {
      q: "What happens to our historical business data when we move from spreadsheets to a custom ERP or CRM?",
      a: "We handle the full data migration. Our developers write custom parsing scripts that clean, format, and import your existing data — whether it is in Excel spreadsheets, an old SQL database, or another system — into your new software without losing historical records. You start with your full data history intact, not from a blank slate."
    },
    {
      q: "How long does it take to go from the initial workflow study to a live custom software deployment?",
      a: "It depends on the complexity of what you need. A focused management platform — like visitor management software or an attendance management system — typically takes 4 to 8 weeks from workflow study to live deployment. A full custom ERP software development project for a manufacturing or commercial enterprise usually takes 12 to 20 weeks, delivered through modular milestone releases so you see progress throughout rather than waiting for a single big launch."
    },
    {
      q: "Do you provide staff training after the software goes live?",
      a: "Yes. Training is part of every deployment we do. We run hands-on orientation sessions directly at your offices in Vadodara—training your administrators, department heads, and regular users on how to use the system properly. We also provide written user manuals for ongoing reference. If your team is spread across multiple locations in Gujarat, we run dedicated video training sessions for remote staff so nobody gets left behind."
    }
  ];

  const partnerLogosRow1 = [
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Healthcare Infrastructure" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Employment Portal Ecosystem" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Enterprise Hospital ERP" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Statewide Recruitment Platform" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Clinical Workflow Systems" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Enterprise Cloud Engine" }
  ];

  const partnerLogosRow2 = [
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Career & Candidate Database" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Multi-Specialty Network" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "High-Volume Job Platform" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Patient & Admin Infrastructure" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Custom Recruitment Engine" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "OPD & Digital Gate Passes" }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/#services" },
              { label: "Custom Software Development" }
            ]}
          />
        </div>
      </div>

      {/* Hero Banner (Full-Bleed Gradient Blended Image like Reference with Vibrant Sapphire Gradient) */}
      <section className="bg-gradient-to-br from-[#0A2647] via-[#134B70] to-[#07192F] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center border-b border-slate-700/60">
        
        {/* Right-Side Full-Bleed Background Image with Seamless Left Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] z-0 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/custom-software-hero.jpg"
              alt="Custom Software Development Engineering"
              fill
              priority
              className="object-cover object-right lg:object-center opacity-95 lg:opacity-100"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            {/* Smooth Left Fade Gradient to Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647] via-[#0A2647]/80 via-35% to-transparent hidden lg:block" />
            {/* Mobile Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647] via-[#0A2647]/70 to-[#0A2647]/30 lg:hidden" />
            {/* Soft Ambient Contrast Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2647]/40 via-transparent to-[#0A2647]/60" />
          </div>
        </div>

        {/* Subtle Cyber Grid Accent (64px by 64px) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5">
            
            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Engineering Tailor-Made Software Systems Designed Around Your Physical Business Workflows
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-indigo-200 font-semibold leading-snug">
              Enterprise software development, custom ERPs, and automated management portals built in Vadodara.
            </p>

            {/* Body Paragraph */}
            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
              Most businesses in Gujarat buy software and then spend months trying to make their team work around it. Processes get adjusted, workarounds get created, and half the features never get used. At Jeenweb Technologists, we do it the other way around. We come to your workplace, watch how your team operates, and build software that mirrors those exact physical routines.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => window.location.href = "/contact#get-in-touch"}
                className="px-6 py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:scale-[1.02] active:scale-95 flex items-center gap-2.5"
              >
                <span>Consult Our Software Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Who We Build Software For */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200/80" id="who-we-build-for">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-100/25 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-left max-w-4xl mb-12 lg:mb-16 space-y-3">
            <div>
              <div className="inline-block border-b-2 border-[#C11E23] pb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                  Who We Build Software For
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Software Development for Businesses of <br className="hidden sm:inline" />
              <span className="text-[#1A3B71]">Every Size Across Gujarat</span>
            </h2>
          </div>

          {/* 2-Column Editorial & Commercial Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Left Column: Authoritative Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed font-sans">
                We are not just an enterprise software development company. We work with businesses of all sizes — from large industrial corporations needing full ERP implementations to small and medium businesses needing their first proper management system.
              </p>

              {/* SME Focus Highlight Box */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border-l-4 border-[#C11E23] shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C11E23]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C11E23]">
                    Built for Gujarat SMEs
                  </span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
                  As a software development company for SMEs across Gujarat and India, we understand that smaller businesses have tighter budgets, leaner teams, and less tolerance for software that does not work properly from day one. We build scalable software solutions that start lean and grow with your business — so you are not paying for complexity you do not need right now, but the system can handle it when you do.
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                Whether you are a manufacturer in Vadodara, a distributor running multiple branches across Gujarat, a school managing hundreds of students, or a growing SME trying to replace manual processes with proper business automation software — we build the right system for where your business is today and where it is going.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSelectedSolution("Custom Software for Gujarat Businesses");
                    window.location.href = "/contact#get-in-touch";
                  }}
                  className="px-7 py-4 rounded-xl bg-[#1A3B71] hover:bg-[#132c54] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-950/20 hover:shadow-lg hover:scale-[1.02] flex items-center gap-3"
                >
                  <span>Consult Our Vadodara Engineering Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 4 Archetype Business Cards with 3D Flip Effect */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Card 1: Industrial Manufacturers */}
              <div
                className="group [perspective:1000px] min-h-[310px] cursor-pointer"
                onClick={() => toggleCardFlip(0)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedCards[0] ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C11E23] flex items-center justify-center font-bold">
                          <Building className="w-5 h-5" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 group-hover:text-[#C11E23] transition-colors">
                          <RotateCw className="w-3 h-3" /> Flip
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C11E23] bg-red-50 px-2 py-0.5 rounded">
                          Industrial Corridors
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-2 group-hover:text-[#1A3B71] transition-colors">
                          Vadodara Manufacturers
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Makarpura, Savli, Halol GIDC plants needing full production ERP, automated gate passes, machine logs, and offline-resilient local sync.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C11E23]" />
                        <span>Shop-Floor Automation</span>
                      </div>
                      <span className="text-[10px] text-slate-400">↻ Details</span>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-2xl bg-gradient-to-br from-[#0B1E38] via-[#102A4C] to-[#0B1E38] text-white border border-slate-700/80 shadow-xl flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/40">
                          Core Deliverables
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400">
                          <RotateCw className="w-3 h-3" /> Back
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        Factory Operations Scope:
                      </h4>
                      <div className="space-y-2 pt-1 text-xs text-slate-300 font-sans">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>BOM batch tracking & machine logs</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>Local offline DB (zero factory freeze)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>GST E-Way bill & barcode gate pass</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-red-300 font-bold">Makarpura / Savli</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSolution("Vadodara Manufacturers");
                          window.location.href = "/contact#get-in-touch";
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#C11E23] hover:bg-red-700 text-white text-[11px] font-bold tracking-wider uppercase transition-colors"
                      >
                        Scope →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Growing SMEs & Trading */}
              <div
                className="group [perspective:1000px] min-h-[310px] cursor-pointer"
                onClick={() => toggleCardFlip(1)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedCards[1] ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A3B71] flex items-center justify-center font-bold">
                          <Users className="w-5 h-5" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 group-hover:text-[#1A3B71] transition-colors">
                          <RotateCw className="w-3 h-3" /> Flip
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A3B71] bg-blue-50 px-2 py-0.5 rounded">
                          Commercial Trading
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-2 group-hover:text-[#1A3B71] transition-colors">
                          Growing SMEs & Trading
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Businesses replacing spreadsheets with automated order management, multi-tier approvals, and zero recurring per-seat SaaS taxes.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3B71]" />
                        <span>Zero Per-Seat Taxes</span>
                      </div>
                      <span className="text-[10px] text-slate-400">↻ Details</span>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border border-slate-700/80 shadow-xl flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                          SME Deliverables
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400">
                          <RotateCw className="w-3 h-3" /> Back
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        Commercial Workflow Scope:
                      </h4>
                      <div className="space-y-2 pt-1 text-xs text-slate-300 font-sans">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Multi-tier quotation approval chains</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Automated WhatsApp payment alerts</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Unlimited team users with zero SaaS tax</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-300 font-bold">100% Code Ownership</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSolution("Growing SMEs & Trading");
                          window.location.href = "/contact#get-in-touch";
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#1A3B71] hover:bg-blue-800 text-white text-[11px] font-bold tracking-wider uppercase transition-colors"
                      >
                        Scope →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Multi-Branch Distributors */}
              <div
                className="group [perspective:1000px] min-h-[310px] cursor-pointer"
                onClick={() => toggleCardFlip(2)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedCards[2] ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C11E23] flex items-center justify-center font-bold">
                          <Layers className="w-5 h-5" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 group-hover:text-[#C11E23] transition-colors">
                          <RotateCw className="w-3 h-3" /> Flip
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C11E23] bg-red-50 px-2 py-0.5 rounded">
                          Statewide Distribution
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-2 group-hover:text-[#1A3B71] transition-colors">
                          Multi-Branch Distributors
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Synchronize depots and field sales across Ahmedabad, Surat, Rajkot, and Vadodara into one single real-time stock ledger.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C11E23]" />
                        <span>Multi-Depot Stock Sync</span>
                      </div>
                      <span className="text-[10px] text-slate-400">↻ Details</span>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-2xl bg-gradient-to-br from-[#0B1E38] via-[#102A4C] to-[#0B1E38] text-white border border-slate-700/80 shadow-xl flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/40">
                          Logistics Scope
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400">
                          <RotateCw className="w-3 h-3" /> Back
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        Supply Chain Deliverables:
                      </h4>
                      <div className="space-y-2 pt-1 text-xs text-slate-300 font-sans">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>Central warehouse & depot stock sync</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>Field sales mobile order booking app</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>Real-time credit limit & dispatch holds</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-red-300 font-bold">Statewide Network</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSolution("Multi-Branch Distributors");
                          window.location.href = "/contact#get-in-touch";
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#C11E23] hover:bg-red-700 text-white text-[11px] font-bold tracking-wider uppercase transition-colors"
                      >
                        Scope →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Schools & Institutions */}
              <div
                className="group [perspective:1000px] min-h-[310px] cursor-pointer"
                onClick={() => toggleCardFlip(3)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedCards[3] ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A3B71] flex items-center justify-center font-bold">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 group-hover:text-[#1A3B71] transition-colors">
                          <RotateCw className="w-3 h-3" /> Flip
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A3B71] bg-blue-50 px-2 py-0.5 rounded">
                          Educational Campuses
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-2 group-hover:text-[#1A3B71] transition-colors">
                          Schools & Institutions
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Managing student administrative archives, biometric staff rosters, online payment gateways, and staff-parent communication feeds.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3B71]" />
                        <span>Institutional Portals</span>
                      </div>
                      <span className="text-[10px] text-slate-400">↻ Details</span>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border border-slate-700/80 shadow-xl flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                          Campus Scope
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400">
                          <RotateCw className="w-3 h-3" /> Back
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        Institutional Systems Scope:
                      </h4>
                      <div className="space-y-2 pt-1 text-xs text-slate-300 font-sans">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Online fee collection & instant SMS receipts</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Biometric terminal sync & staff payroll</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Granular role permissions & audit compliance</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-300 font-bold">Campus ERP</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSolution("Schools & Institutions");
                          window.location.href = "/contact#get-in-touch";
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#1A3B71] hover:bg-blue-800 text-white text-[11px] font-bold tracking-wider uppercase transition-colors"
                      >
                        Scope →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Section 3: STEPS - HOW WE WORK (Wavy Curved Path Flow Matching Reference) */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden border-b border-slate-200/80" id="how-we-work">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-100/25 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-3">
            <div>
              <div className="inline-block border-b-2 border-[#C11E23] pb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                  Steps & Methodology
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              HOW WE <span className="text-[#1A3B71]">WORK</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
              Most software projects fail not because of bad code but because the software never matched how the team actually worked. Our five-stage process fixes that before a single line of code gets written.
            </p>
          </div>

          {/* 5-Step Wavy Process Grid with Connecting Sine Wave */}
          <div className="relative">
            
            {/* Desktop Connecting Curved Wavy Dashed SVG Line */}
            <div className="hidden md:block absolute top-[50px] left-0 right-0 h-28 pointer-events-none z-0">
              <svg
                viewBox="0 0 1200 120"
                fill="none"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <path
                  d="M 60,60 C 180,20 220,95 300,60 C 380,25 420,95 540,60 C 660,25 700,95 840,60 C 960,25 1020,95 1120,60 L 1155,60"
                  stroke="#94A3B8"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  className="opacity-60"
                />
                {/* Arrow indicator at the end */}
                <path
                  d="M 1150,53 L 1165,60 L 1150,67"
                  stroke="#94A3B8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-75"
                />
              </svg>
            </div>

            {/* 5 Process Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-6 relative z-10">
              {[
                {
                  number: "01",
                  title: "Research",
                  tag: "Requirement Mapping",
                  desc: "We work with you to identify the project details and determine the features, functions, content categories, aesthetic requirements, technical implications, timeline and other specifications.",
                  icon: Search,
                  accent: "#00A8FF"
                },
                {
                  number: "02",
                  title: "Strategy",
                  tag: "Workflow Architecture",
                  desc: "This includes client goals, target audience, detailed feature requests and as much relevant information as you can possibly gather.",
                  icon: Workflow,
                  accent: "#1A3B71"
                },
                {
                  number: "03",
                  title: "Design",
                  tag: "Wireframing & UX",
                  desc: "This is where the visual layout of the website begins to take shape. Using information gathered from the you in the planning phase, begin designing the layout using a wireframe.",
                  icon: PenTool,
                  accent: "#00A8FF"
                },
                {
                  number: "04",
                  title: "Development",
                  tag: "Modular Clean Code",
                  desc: "Upon approval of the design, we move on to the meat and potatoes of your website. We write code using the best industry practices to produce a clean, search engine...",
                  icon: Code2,
                  accent: "#1A3B71"
                },
                {
                  number: "05",
                  title: "Final Result",
                  tag: "Launch & Support",
                  desc: "Once everything's working beautifully, it's time to plan and execute your site launch! This should include planning both launch timing and communication strategies...",
                  icon: ThumbsUp,
                  accent: "#00A8FF"
                }
              ].map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeProcessStep === idx;

                // Subtle alternating vertical offset for genuine wavy rhythm
                const waveOffsetClass =
                  idx % 2 === 1
                    ? "md:-translate-y-3"
                    : "md:translate-y-2";

                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setActiveProcessStep(idx)}
                    onClick={() => setActiveProcessStep(idx)}
                    className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-500 ${waveOffsetClass}`}
                  >
                    {/* Circle Node Stage with Faint Watermark Number Behind */}
                    <div className="relative mb-6 flex items-center justify-center">
                      
                      {/* Giant Outline Watermark Number */}
                      <span className="absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl font-mono font-black text-slate-200/60 select-none pointer-events-none transition-all duration-300 group-hover:text-slate-300/80 group-hover:scale-105">
                        {step.number}
                      </span>

                      {/* Circular Action Node */}
                      <div
                        className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-500 z-10 ${
                          isActive
                            ? "bg-gradient-to-br from-[#C11E23] via-[#991B1B] to-[#DC2626] text-white shadow-2xl scale-110 ring-4 ring-[#C11E23] ring-offset-4 ring-offset-white"
                            : "bg-white text-slate-700 shadow-lg border-2 border-slate-200/90 group-hover:border-[#C11E23]/60 group-hover:text-[#C11E23] group-hover:shadow-xl group-hover:scale-105"
                        }`}
                      >
                        <Icon
                          className={`w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-500 ${
                            isActive
                              ? "stroke-[2.2] scale-105 text-white"
                              : "stroke-[1.8] text-slate-700 group-hover:text-[#C11E23] group-hover:scale-110"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-xl sm:text-[22px] font-black tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "text-[#C11E23]"
                          : "text-slate-900 group-hover:text-[#C11E23]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Description (Exact Content From Screenshot) */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans mt-3 max-w-xs">
                      {step.desc}
                    </p>

                    {/* Interactive Active Highlight Pill */}
                    <div className="mt-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                          isActive
                            ? "bg-[#C11E23] text-white shadow-xs"
                            : "bg-slate-100 text-slate-500 border border-slate-200 group-hover:bg-red-50 group-hover:text-[#C11E23]"
                        }`}
                      >
                        {step.tag}
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      
      {/* Section 2: Tailored Software Solutions Built for Operational Efficiency (Stacking Cards UI) */}
      <TailoredSolutionsStackingCards />

      {/* Client Logo Auto-Marquee Section (2-Line Infinite Scroll) */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200/80" id="client-partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
              Trusted Partnerships
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Trusted Software & ERP Partner for <br className="hidden sm:inline" />
            <span className="text-[#1A3B71]">Leading Healthcare & Enterprise Brands</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-sans leading-relaxed">
            Powering mission-critical hospital networks, job portals, and enterprise workflow infrastructure across Gujarat and India.
          </p>
        </div>

        {/* 2-Line Infinite Auto-Marquee Track */}
        <div className="w-full relative overflow-hidden py-2 space-y-4 sm:space-y-6">
          
          {/* Gradient edge masks for smooth seamless fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />

          {/* Line 1: Infinite Marquee (Left Scroll) */}
          <div className="flex animate-marquee items-center gap-5 sm:gap-6">
            {[...partnerLogosRow1, ...partnerLogosRow1].map((partner, idx) => (
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
            {[...partnerLogosRow2, ...partnerLogosRow2].map((partner, idx) => (
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

      {/* Frequently Asked Questions */}
      <FaqSection
        customFaqs={softwareFaqs}
        badge="Frequently Asked Questions"
        title="Direct Answers Regarding Custom Software Development"
        subtitle="Key explanations on SaaS vs custom builds, biometric hardware integrations, historical spreadsheet migrations, deployment timelines, and on-site staff training."
      />

      {/* Consultation CTA Banner (Matching Home Page Style) */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-200/80" id="consultation-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Executive Sapphire Gradient Container with Checkered Grid */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] text-white border border-slate-700/60 shadow-2xl p-8 sm:p-10 lg:p-14 group">
            
            {/* Subtle Checkered Grid Accent (32px by 32px) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Ambient Background Lighting */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#C11E23]/20 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-14">
              
              {/* Left Column: Headline & Narrative */}
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                  Build Software That Fits Your <br />
                  <span className="text-blue-400">
                    Real Workplace Operations.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans max-w-xl">
                  You don&apos;t have to figure out your software architecture alone. Reach out and talk directly with our engineering desk—we&apos;ll evaluate your current workflows, identify where the gaps are, and blueprint a custom software solution built around how your organization actually operates.
                </p>
              </div>

              {/* Right Column: High-Impact Action Button */}
              <div className="flex flex-col items-stretch flex-shrink-0 w-full sm:w-auto lg:w-80">
                <button
                  onClick={() => window.location.href = "/contact#get-in-touch"}
                  className="px-8 py-4 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/40 hover:scale-[1.02] flex items-center justify-center gap-2.5 group cursor-pointer active:scale-98"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

          </main>
  );
}
