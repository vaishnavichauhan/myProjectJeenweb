"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Building,
  Users,
  Layers,
  GraduationCap
} from "lucide-react";

interface SectorCard {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  image: string;
  accentColor: string;
  badgeBg: string;
  locationBadge: string;
  keyStat: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function WhoWeBuildForStackingCards() {  const [selectedSector, setSelectedSector] = useState("");

  const containerRef = useRef<HTMLUListElement>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const stateRef = useRef({
    cardTop: 110,
    cardHeight: 480,
    marginY: 24,
    scrolling: false
  });

  const sectors: SectorCard[] = [
    {
      id: "manufacturing",
      number: "01",
      tag: "SECTOR 01 • INDUSTRIAL CORRIDORS",
      title: "Manufacturing & Plant Operations",
      subtitle: "Heavy & Discrete Engineering",
      desc: "From Makarpura, Savli, and Halol GIDC to Dahej, we engineer plant operations platforms linking shop-floor machinery with central business intelligence. Real-time batch tracking, offline resilience, and automated gate passes without software freezing when factory internet drops.",
      bullets: [
        "Bill of Materials (BOM) & Machine Logs",
        "Shop-Floor Gate Passes & Barcode Dispatch",
        "Offline-Resilient Local Server Synchronization",
        "GST E-Invoicing & Automated E-Way Bills"
      ],
      image: "/images/sector-manufacturing.jpg",
      accentColor: "#C11E23",
      badgeBg: "bg-red-50 text-[#C11E23] border-red-200",
      locationBadge: "Makarpura, Savli & Halol GIDC",
      keyStat: "Zero Production Downtime",
      icon: Building
    },
    {
      id: "sme",
      number: "02",
      tag: "SECTOR 02 • COMMERCIAL TRADE & RETAIL",
      title: "Growing SMEs & Trading Houses",
      subtitle: "Commercial Operations & Trade",
      desc: "Replace fragile spreadsheets and manual registers with custom order management, multi-tier quotation approval chains, and automated client status tracking. Pay once for engineering and add 5 or 500 team members without recurring per-seat SaaS license fees.",
      bullets: [
        "Multi-Tier Quotation & Order Approvals",
        "Automated WhatsApp & Email Notifications",
        "Zero Per-Seat SaaS Taxes (Unlimited Users)",
        "Real-Time Outstanding & Cash Flow Tracking"
      ],
      image: "/images/sector-sme.jpg",
      accentColor: "#1A3B71",
      badgeBg: "bg-blue-50 text-[#1A3B71] border-blue-200",
      locationBadge: "Gujarat SME Network",
      keyStat: "Zero Per-Seat SaaS Taxes",
      icon: Users
    },
    {
      id: "distribution",
      number: "03",
      tag: "SECTOR 03 • LOGISTICS & SUPPLY CHAIN",
      title: "Multi-Branch Distribution & Warehouses",
      subtitle: "Statewide Freight & Inventory",
      desc: "Synchronize multiple warehouses, depots, and regional sales teams across Ahmedabad, Surat, Rajkot, and Vadodara into one single source of truth. Instant stock reconciliation, field staff order booking, and automated credit limit alerts that keep inventory moving.",
      bullets: [
        "Central Warehouse & Branch Stock Sync",
        "Regional Stock Reallocation & Transfers",
        "Field Sales Mobile Order Booking",
        "Automated Credit Limit & Dispatch Alerts"
      ],
      image: "/images/sector-logistics.jpg",
      accentColor: "#C11E23",
      badgeBg: "bg-red-50 text-[#C11E23] border-red-200",
      locationBadge: "Statewide Depot Network",
      keyStat: "Real-Time Stock Reconciliation",
      icon: Layers
    },
    {
      id: "healthcare-education",
      number: "04",
      tag: "SECTOR 04 • CAMPUSES & MEDICAL NETWORKS",
      title: "Educational & Medical Institutions",
      subtitle: "Institutional ERP & Privacy",
      desc: "Integrated administration portals for universities, schools, hospital networks, and diagnostic centers managing massive student and patient records. Custom fee collections, biometric attendance sync, and role-based privacy access compliant with institutional standards.",
      bullets: [
        "Biometric Attendance & Staff Rosters",
        "Online Fee Portals & Patient Billing",
        "Granular Role-Based Access Control",
        "Automated Regulatory & Audit Compliance"
      ],
      image: "/images/sector-healthcare.jpg",
      accentColor: "#1A3B71",
      badgeBg: "bg-blue-50 text-[#1A3B71] border-blue-200",
      locationBadge: "Gujarat Campuses & Clinics",
      keyStat: "High-Security Role Access",
      icon: GraduationCap
    }
  ];

  // Dynamic Scale & Overlap Scroll Physics (Exact Technobits Stacking Math)
  useEffect(() => {
    const listEl = containerRef.current;
    if (!listEl) return;

    const cards = cardsRef.current.filter((el): el is HTMLLIElement => Boolean(el));
    if (cards.length === 0) return;

    const updateTransforms = () => {
      const rectTop = listEl.getBoundingClientRect().top;
      const state = stateRef.current;

      for (let idx = 0; idx < cards.length; idx++) {
        const card = cards[idx];
        const cardStickyTop = state.cardTop + idx * state.marginY;
        // Check how much the following cards have scrolled over this card
        const diff = cardStickyTop - rectTop - idx * (state.cardHeight + 40);

        if (diff > 0) {
          // As card idx + 1 scrolls over card idx, scale card idx down
          const scaleVal =
            idx === cards.length - 1
              ? 1
              : Math.max(0.86, 1 - (diff / state.cardHeight) * 0.14);

          const brightnessVal =
            idx === cards.length - 1
              ? 1
              : Math.max(0.88, 1 - (diff / state.cardHeight) * 0.12);

          card.style.transform = `scale(${scaleVal})`;
          card.style.filter = `brightness(${brightnessVal})`;
        } else {
          card.style.transform = "scale(1)";
          card.style.filter = "none";
        }
      }

      state.scrolling = false;
    };

    const handleScroll = () => {
      if (!stateRef.current.scrolling) {
        stateRef.current.scrolling = true;
        requestAnimationFrame(updateTransforms);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenConsultation = (title: string) => {
    setSelectedSector(title);
    window.location.href = "/contact#get-in-touch";
  };

  return (
    <section
      className="py-24 lg:py-36 bg-white relative border-b border-slate-200/80"
      id="who-we-build-for"
    >
      {/* Background Glows (Contained in dedicated overflow-hidden container so section itself allows sticky) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-red-100/25 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-24 space-y-4">
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                Domain Specialization
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Software Development for Businesses of <br />
            <span className="text-[#1A3B71]">Every Size Across Gujarat</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed pt-1 max-w-2xl mx-auto">
            From large manufacturing corridors in Makarpura and Savli to fast-scaling commercial SMEs across Gujarat — we engineer custom systems that eliminate recurring SaaS seat fees and match your exact daily operations.
          </p>
        </div>

        {/* 3 Core Commercial Pillars Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-slate-50/80 hover:bg-slate-50 transition-all duration-300">
            <h4 className="text-base font-bold text-slate-900">Zero Per-Seat SaaS Taxes</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-sans">
              Off-the-shelf SaaS charges per user. When you hire 50 new workers, your monthly bill explodes. Our custom software has zero per-seat fees forever.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 hover:bg-slate-50 transition-all duration-300">
            <h4 className="text-base font-bold text-slate-900">Fits Your Real Daily Habits</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-sans">
              We study how your shop-floor, sales team, and accounts staff actually do their work, and engineer custom screens that match those physical workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 hover:bg-slate-50 transition-all duration-300">
            <h4 className="text-base font-bold text-slate-900">Vadodara On-Site Engineering</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-sans">
              Direct in-person physical consultation across Gujarat corridors (Makarpura, Savli, Halol, Ankleshwar) with permanent local engineers.
            </p>
          </div>
        </div>

        {/* Sticky Overlapping Stacking Cards Deck */}
        <div className="max-w-5xl mx-auto pb-24">
          <ul ref={containerRef} className="relative list-none m-0 p-0">
            {sectors.map((sector, idx) => {
              const Icon = sector.icon;

              return (
                <li
                  key={sector.id}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  className="sticky will-change-transform group cursor-pointer rounded-[28px] lg:rounded-[34px] overflow-hidden transition-[filter,transform] duration-300"
                  style={{
                    top: `${105 + idx * 26}px`,
                    zIndex: 10 + idx,
                    marginBottom: idx === sectors.length - 1 ? "0px" : "60px",
                    transformOrigin: "center top",
                    background: "#ffffff",
                    boxShadow: "0 25px 90px -20px rgba(0,45,68,0.16), 0 2px 8px rgba(0,0,0,0.04)",
                    borderTop: `5px solid ${sector.accentColor}`
                  }}
                  onClick={() => handleOpenConsultation(sector.title)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
                    
                    {/* Left Column: Content & Features (7 cols) */}
                    <div className="lg:col-span-7 p-7 sm:p-9 lg:p-11 flex flex-col justify-between space-y-5 bg-white">
                      <div className="space-y-4">
                        
                        {/* Sector Tag with Accent Line */}
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs font-mono font-black tracking-[0.3em] uppercase"
                            style={{ color: sector.accentColor }}
                          >
                            {sector.tag}
                          </span>
                          <div className="h-px w-12 bg-slate-200" />
                        </div>

                        {/* Title */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#1A3B71] transition-colors">
                            {sector.title}
                          </h3>
                          <span className="text-xs font-mono text-slate-500 font-semibold mt-1 inline-block">
                            • {sector.subtitle}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                          {sector.desc}
                        </p>

                        {/* 4 Feature Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {sector.bullets.map((bullet, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-50/90 px-3 py-2 rounded-xl border border-slate-200/70"
                            >
                              <CheckCircle2
                                className="w-3.5 h-3.5 flex-shrink-0"
                                style={{ color: sector.accentColor }}
                              />
                              <span className="truncate">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Explore Action Button */}
                      <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-widest text-[#1A3B71]">
                          <span className="relative">
                            Explore Architecture
                            <span
                              className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                              style={{ backgroundColor: sector.accentColor }}
                            />
                          </span>
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 shadow-sm"
                            style={{
                              backgroundColor: `${sector.accentColor}15`,
                              color: sector.accentColor
                            }}
                          >
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                          </div>
                        </div>

                        <span className="text-[11px] font-mono text-slate-400 font-bold hidden sm:inline">
                          {sector.keyStat}
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Visual Image Showcase (5 cols) */}
                    <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[460px] overflow-hidden bg-slate-900">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />

                      {/* Inner Gradient Blend */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none" />

                      {/* Floating Location Tag Pill */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/30 text-slate-900 shadow-lg text-[11px] font-mono font-bold flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: sector.accentColor }}
                          />
                          <span>{sector.locationBadge}</span>
                        </div>
                      </div>

                      {/* Bottom Key Metric Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
                            Enterprise Fit
                          </p>
                          <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                            {sector.keyStat}
                          </p>
                        </div>
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-white shadow-sm"
                          style={{ backgroundColor: sector.accentColor }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                    </div>

                  </div>
                </li>
              );
            })}
          </ul>
        </div>

      </div>

      {/* Interactive Consultation Modal */}
          </section>
  );
}
