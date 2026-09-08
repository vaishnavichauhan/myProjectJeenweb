"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  ShieldCheck,
  Cpu,
  Layers,
  Building2,
  GraduationCap,
  Truck,
  ShoppingBag,
  Activity,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Users
} from "lucide-react";
import { FadeIn } from "@/components/animations/MotionPrimitives";

interface SubModuleCase {
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ElementType;
}

interface ArchitectureModule {
  id: string;
  number: string;
  name: string;
  title: string;
  verticalLabel: string;
  badge: string;
  tag: string;
  desc: string;
  image: string;
  href: string;
  subModules: SubModuleCase[];
}

const ARCHITECTURE_MODULES: ArchitectureModule[] = [
  {
    id: "erp",
    number: "01",
    name: "Custom ERP Systems",
    title: "Custom ERP — Enterprise Resource Planning",
    verticalLabel: "Custom ERP Systems",
    badge: "Manufacturing & Distribution",
    tag: "ARCHITECTURE 01 • OPERATIONS & RESOURCE PLANNING",
    desc: "Consolidate procurement, multi-warehouse inventory management, accounting, batch tracking, and factory-floor dispatch logs into one unified system engineered specifically for how your Gujarat operations run.",
    image: "/images/sector-manufacturing.jpg",
    href: "/services/custom-software",
    subModules: [
      {
        title: "Consolidated Procurement",
        subtitle: "Real-time stock ledger & multi-warehouse sync",
        tag: "Inventory",
        icon: Layers
      },
      {
        title: "Production & BOM Tracking",
        subtitle: "Machine logs, job-work, and factory-floor visibility",
        tag: "Production",
        icon: Cpu
      }
    ]
  },
  {
    id: "crm",
    number: "02",
    name: "Custom CRM Platforms",
    title: "Custom CRM — Sales Pipeline Management",
    verticalLabel: "Custom CRM Platforms",
    badge: "Sales Pipeline & Leads",
    tag: "ARCHITECTURE 02 • PIPELINE & CLIENT INTELLIGENCE",
    desc: "Built around how your team actually sells. Manage your full lead pipeline, record every interaction, track individual sales executive performance, and automate WhatsApp/email follow-up communications.",
    image: "/images/sector-sme.jpg",
    href: "/services/custom-software",
    subModules: [
      {
        title: "Custom Pipeline Funnels",
        subtitle: "Tailored funnel stages matching your exact sales cycles",
        tag: "Pipeline",
        icon: Users
      },
      {
        title: "Interaction History Logs",
        subtitle: "Centralized call records, WhatsApp history & meeting notes",
        tag: "Client Intel",
        icon: Activity
      }
    ]
  },
  {
    id: "visitor",
    number: "03",
    name: "Visitor Management Software",
    title: "Visitor Management & Digital Gate Passes",
    verticalLabel: "Visitor Management",
    badge: "Digital Front Desk & Security",
    tag: "ARCHITECTURE 03 • PHYSICAL SECURITY & DIGITAL GATE",
    desc: "Replace fragile paper registers with verified digital check-in kiosks, OTP-based visitor badge printing, instant WhatsApp host notifications, and searchable visitor audit archives across your commercial plants.",
    image: "/images/company-vision-boardroom.jpg",
    href: "/services/custom-software",
    subModules: [
      {
        title: "Digital Gate Passes",
        subtitle: "Instant self-check-in kiosk with webcam photo capture",
        tag: "Gate Pass",
        icon: Building2
      },
      {
        title: "OTP Badge Printing",
        subtitle: "Verified mobile authentication with thermal QR passes",
        tag: "Security",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "school",
    number: "04",
    name: "School & Campus Software",
    title: "Educational & University Management",
    verticalLabel: "School & Campus ERP",
    badge: "Educational Institutions",
    tag: "ARCHITECTURE 04 • INSTITUTIONAL CAMPUS ERP",
    desc: "Centralize student administrative records, automated online fee collection gateways, biometric staff attendance, digital report card generation, and parent-teacher communication portals into one secure platform.",
    image: "/images/sector-healthcare.jpg",
    href: "/services/custom-software",
    subModules: [
      {
        title: "Student Archives & Admissions",
        subtitle: "Unified profile directory, document archives & roll numbers",
        tag: "Profiles",
        icon: GraduationCap
      },
      {
        title: "Fee Collection Gateways",
        subtitle: "Custom installments, parent payment links & SMS receipts",
        tag: "Finance",
        icon: CheckCircle2
      }
    ]
  },
  {
    id: "attendance",
    number: "05",
    name: "Attendance Management Systems",
    title: "Biometric Attendance & Automated Payroll",
    verticalLabel: "Biometric Attendance",
    badge: "Biometric & Payroll Sync",
    tag: "ARCHITECTURE 05 • WORKFORCE & BIOMETRIC SYNC",
    desc: "Connect directly to your existing biometric devices, RFID readers, and mobile GPS check-in apps. Feed multi-shift rotations, overtime, and leave approvals straight into your payroll processor with zero manual errors.",
    image: "/images/history-team-collab.jpg",
    href: "/services/custom-software",
    subModules: [
      {
        title: "Biometric Terminal Sync",
        subtitle: "Real-time API listeners for fingerprint and face scanners",
        tag: "Hardware API",
        icon: Layers
      },
      {
        title: "Direct Payroll Export",
        subtitle: "Zero-error payroll calculation with direct salary sync",
        tag: "Payroll Sync",
        icon: CheckCircle2
      }
    ]
  },
  {
    id: "automation",
    number: "06",
    name: "Business Automation Software",
    title: "Business Process & Workflow Automation",
    verticalLabel: "Business Automation",
    badge: "Workflow Efficiency",
    tag: "ARCHITECTURE 06 • PROCESS ENGINE & WORKFLOWS",
    desc: "Eliminate hours of manual data entry and repetitive tasks. Approvals get routed conditionally to the right authority, reports generate on schedule, and WhatsApp alerts fire automatically without manual intervention.",
    image: "/images/history-datacenter.jpg",
    href: "/services/custom-software",
    subModules: [
      {
        title: "Approval Routing Engine",
        subtitle: "Dynamic conditional routing for purchase & expense orders",
        tag: "Rules Engine",
        icon: Cpu
      },
      {
        title: "Scheduled PDF Reports",
        subtitle: "Automated compilation & dispatch of daily factory metrics",
        tag: "Dispatches",
        icon: Activity
      }
    ]
  },
  {
    id: "ticketing",
    number: "07",
    name: "Ticket & Event Booking Platforms",
    title: "Online Ticketing & Reservation Platforms",
    verticalLabel: "Ticket & Event Booking",
    badge: "Event Portals & Venues",
    tag: "ARCHITECTURE 07 • EVENT RESERVATIONS & DISPATCH",
    desc: "Interactive visual seat mapping, payment gateway integration, automated QR code ticket generation, and real-time mobile check-in scanners that streamline guest entry with zero double-booking errors.",
    image: "/images/sector-logistics.jpg",
    href: "/services/custom-software",
    subModules: [
      {
        title: "Interactive Seat Maps",
        subtitle: "Visual auditorium selection with dynamic tier pricing",
        tag: "Seating",
        icon: ShoppingBag
      },
      {
        title: "Encrypted QR Tickets",
        subtitle: "Tamper-proof digital tickets sent via WhatsApp & email",
        tag: "QR Passes",
        icon: ShieldCheck
      }
    ]
  }
];

export default function CustomArchitectureModules() {
  const [activeId, setActiveId] = useState<string>("erp");

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] relative overflow-hidden border-b border-slate-200/80"
      id="architecture-modules"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#C11E23]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Left Title and Right Subtitle */}
        <FadeIn direction="up" distance={20} className="mb-12 sm:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-12">
            <div className="max-w-2xl space-y-3">
              <div>
                <div className="inline-block border-b-2 border-[#C11E23] pb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
                    Custom Architecture &amp; Modules
                  </span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight text-slate-900">
                Tailored Software Solutions Built for <br className="hidden sm:inline" />
                <span className="text-[#1A3B71]">Operational Efficiency</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-md pb-1">
              Explore our battle-tested enterprise architectures deployed across manufacturing plants, commercial trading offices, educational institutions, and logistics networks across Gujarat.
            </p>
          </div>
        </FadeIn>

        {/* ============================================================
            DESKTOP: Horizontal Expanding Accordion (TatvaSoft UI Pattern)
           ============================================================ */}
        <div className="hidden lg:flex w-full min-h-[440px] xl:min-h-[460px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          {ARCHITECTURE_MODULES.map((module) => {
            const isActive = activeId === module.id;

            return (
              <div
                key={module.id}
                onClick={() => setActiveId(module.id)}
                className={`relative flex transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer ${
                  isActive
                    ? "flex-1 bg-white cursor-default"
                    : "w-14 xl:w-16 bg-slate-50 hover:bg-slate-100/90 border-r border-slate-200 flex-shrink-0"
                }`}
              >
                {/* Collapsed Vertical Bar */}
                {!isActive && (
                  <div className="w-full h-full flex flex-col items-center justify-between py-8 select-none group">
                    {/* Plus Icon Button */}
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-slate-600 group-hover:text-[#C11E23] group-hover:border-[#C11E23]/40 group-hover:scale-110 transition-all">
                      <Plus className="w-3.5 h-3.5 transition-transform group-hover:rotate-90 duration-300" />
                    </div>

                    {/* Vertical Module Title Label */}
                    <div className="flex-1 flex items-center justify-center my-6">
                      <span className="[writing-mode:vertical-rl] rotate-180 text-xs xl:text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900 transition-colors whitespace-nowrap">
                        {module.verticalLabel}
                      </span>
                    </div>

                    {/* Module Number Index */}
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                      {module.number}
                    </span>
                  </div>
                )}

                {/* Expanded Horizontal Content Panel */}
                {isActive && (
                  <div className="w-full h-full flex flex-row items-stretch p-6 xl:p-8 animate-fadeIn gap-6 xl:gap-8">
                    {/* Left: Sector Showcase Image (Clean without overlay text) */}
                    <div className="relative w-[360px] xl:w-[420px] flex-shrink-0 rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-900 group">
                      <Image
                        src={module.image}
                        alt={module.title}
                        fill
                        priority
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1280px) 360px, 420px"
                      />
                    </div>

                    {/* Right: Body Content & Description */}
                    <div className="flex-1 flex flex-col justify-center py-4 px-2 xl:px-4 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C11E23]" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C11E23]">
                            {module.tag}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-2xl xl:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                            {module.title}
                          </h3>
                          <span className="text-xs font-mono text-slate-500 font-semibold mt-1 inline-block">
                            • {module.badge}
                          </span>
                        </div>

                        <p className="text-sm xl:text-base text-slate-600 leading-relaxed font-sans max-w-2xl">
                          {module.desc}
                        </p>
                      </div>

                      {/* Action Link */}
                      <div className="pt-2">
                        <Link
                          href={module.href}
                          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0A2647] hover:bg-[#C11E23] text-white text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md group hover:scale-[1.02] active:scale-95"
                        >
                          <span>Explore Architecture Scope</span>
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                            <ArrowRight className="w-3 h-3 text-white" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ============================================================
            MOBILE & TABLET: Vertical Responsive Accordion
           ============================================================ */}
        <div className="lg:hidden space-y-3">
          {ARCHITECTURE_MODULES.map((module) => {
            const isOpen = activeId === module.id;

            return (
              <div
                key={module.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? "" : module.id)}
                  className="w-full p-4 flex items-center justify-between text-left gap-3 bg-white hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-mono font-bold text-[#C11E23] bg-red-50 border border-red-200/60 px-2 py-0.5 rounded">
                      {module.number}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 truncate">
                      {module.name}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-45 bg-red-100 text-[#C11E23]" : ""
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-4 pb-5 pt-2 border-t border-slate-100 space-y-4 animate-fadeIn">
                    {/* Image */}
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                      <Image
                        src={module.image}
                        alt={module.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>

                    {/* Copy */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {module.desc}
                    </p>

                    {/* CTA */}
                    <div className="pt-2">
                      <Link
                        href={module.href}
                        className="w-full py-3 rounded-xl bg-[#0A2647] hover:bg-[#C11E23] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
                      >
                        <span>Explore Architecture Scope</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
