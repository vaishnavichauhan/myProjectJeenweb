"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Layers,
  Users,
  Building,
  GraduationCap,
  Clock,
  Zap,
  Ticket
} from "lucide-react";

interface SolutionCard {
  id: string;
  number: string;
  tag: string;
  name: string;
  title: string;
  badge: string;
  desc: string;
  features: { label: string; desc: string }[];
  image: string;
  accentColor: string;
  badgeBg: string;
  keyStat: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function TailoredSolutionsStackingCards() {

  const containerRef = useRef<HTMLUListElement>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const stateRef = useRef({
    cardTop: 105,
    cardHeight: 380,
    marginY: 24,
    scrolling: false
  });

  const solutions: SolutionCard[] = [
    {
      id: "erp",
      number: "01",
      tag: "ARCHITECTURE 01 • OPERATIONS & RESOURCE PLANNING",
      name: "Custom ERP Systems",
      title: "Custom ERP — Enterprise Resource Planning",
      badge: "Manufacturing & Distribution",
      desc: "Consolidate procurement, multi-warehouse inventory management, accounting, batch tracking, and factory-floor dispatch logs into one unified system engineered specifically for how your Gujarat operations run.",
      features: [
        { label: "Consolidated Procurement", desc: "Real-time stock ledger & multi-warehouse sync." },
        { label: "Production & BOM Tracking", desc: "Machine logs, job-work, and factory-floor visibility." },
        { label: "GST-Compliant Accounting", desc: "Automated tax filings, e-way bills & ledger exports." },
        { label: "Zero SaaS Seat Taxes", desc: "100% proprietary code without per-user penalties." }
      ],
      image: "/images/sector-manufacturing.jpg",
      accentColor: "#C11E23",
      badgeBg: "bg-red-50 text-[#C11E23] border-red-200",
      keyStat: "Zero SaaS License Tax",
      icon: Layers
    },
    {
      id: "crm",
      number: "02",
      tag: "ARCHITECTURE 02 • PIPELINE & CLIENT INTELLIGENCE",
      name: "Custom CRM Platforms",
      title: "Custom CRM — Sales Pipeline Management",
      badge: "Sales Pipeline & Leads",
      desc: "Built around how your team actually sells. Manage your full lead pipeline, record every interaction, track individual sales executive performance, and automate WhatsApp/email follow-up communications.",
      features: [
        { label: "Custom Pipeline Funnels", desc: "Tailored funnel stages matching your exact sales cycles." },
        { label: "Interaction History Logs", desc: "Centralized call records, WhatsApp history & meeting notes." },
        { label: "Performance Dashboards", desc: "Target vs. achievement metrics & conversion projections." },
        { label: "100% Customer Privacy", desc: "Keep proprietary client records private with zero seat fees." }
      ],
      image: "/images/sector-sme.jpg",
      accentColor: "#1A3B71",
      badgeBg: "bg-blue-50 text-[#1A3B71] border-blue-200",
      keyStat: "100% Data Ownership",
      icon: Users
    },
    {
      id: "visitor",
      number: "03",
      tag: "ARCHITECTURE 03 • PHYSICAL SECURITY & DIGITAL GATE",
      name: "Visitor Management Software",
      title: "Visitor Management & Digital Gate Passes",
      badge: "Digital Front Desk & Security",
      desc: "Replace fragile paper registers with verified digital check-in kiosks, OTP-based visitor badge printing, instant WhatsApp host notifications, and searchable visitor audit archives across your commercial plants.",
      features: [
        { label: "Digital Gate Passes", desc: "Instant self-check-in kiosk with webcam photo capture." },
        { label: "OTP Badge Printing", desc: "Verified mobile authentication with thermal QR passes." },
        { label: "Instant Host Alerts", desc: "Automatic alerts sent to employee phones on arrival." },
        { label: "Searchable History", desc: "Complete audit logs of vehicle and frequent visitors." }
      ],
      image: "/images/company-vision-boardroom.jpg",
      accentColor: "#C11E23",
      badgeBg: "bg-red-50 text-[#C11E23] border-red-200",
      keyStat: "Instant OTP Gate Pass",
      icon: Building
    },
    {
      id: "school",
      number: "04",
      tag: "ARCHITECTURE 04 • INSTITUTIONAL CAMPUS ERP",
      name: "School & Campus Software",
      title: "Educational & University Management",
      badge: "Educational Institutions",
      desc: "Centralize student administrative records, automated online fee collection gateways, biometric staff attendance, digital report card generation, and parent-teacher communication portals into one secure platform.",
      features: [
        { label: "Student Archives", desc: "Unified profile directory, document archives & roll numbers." },
        { label: "Fee Collection Gateways", desc: "Custom installments, parent payment links & SMS receipts." },
        { label: "Digital Report Cards", desc: "Automated grade calculations & timetable management." },
        { label: "Parent Portal Sync", desc: "Real-time attendance alerts, notices & homework feeds." }
      ],
      image: "/images/sector-healthcare.jpg",
      accentColor: "#1A3B71",
      badgeBg: "bg-blue-50 text-[#1A3B71] border-blue-200",
      keyStat: "Full Campus Integration",
      icon: GraduationCap
    },
    {
      id: "attendance",
      number: "05",
      tag: "ARCHITECTURE 05 • WORKFORCE & BIOMETRIC SYNC",
      name: "Attendance Management Systems",
      title: "Biometric Attendance & Automated Payroll",
      badge: "Biometric & Payroll Sync",
      desc: "Connect directly to your existing biometric devices, RFID readers, and mobile GPS check-in apps. Feed multi-shift rotations, overtime, and leave approvals straight into your payroll processor with zero manual errors.",
      features: [
        { label: "Biometric Terminal Sync", desc: "Real-time API listeners for fingerprint and face scanners." },
        { label: "Mobile GPS Geofencing", desc: "Field staff and site engineers clock in via verified GPS." },
        { label: "Multi-Shift Automation", desc: "Handles rotational shifts, overtime, and leave balances." },
        { label: "Direct Payroll Export", desc: "Zero-error payroll calculation with direct salary sync." }
      ],
      image: "/images/history-team-collab.jpg",
      accentColor: "#C11E23",
      badgeBg: "bg-red-50 text-[#C11E23] border-red-200",
      keyStat: "Real-Time Biometric API",
      icon: Clock
    },
    {
      id: "automation",
      number: "06",
      tag: "ARCHITECTURE 06 • PROCESS ENGINE & WORKFLOWS",
      name: "Business Automation Software",
      title: "Business Process & Workflow Automation",
      badge: "Workflow Efficiency",
      desc: "Eliminate hours of manual data entry and repetitive tasks. Approvals get routed conditionally to the right authority, reports generate on schedule, and WhatsApp alerts fire automatically without manual intervention.",
      features: [
        { label: "Approval Routing Engine", desc: "Dynamic conditional routing for purchase & expense orders." },
        { label: "Scheduled PDF Reports", desc: "Automated compilation & dispatch of daily factory metrics." },
        { label: "Event-Driven Alerts", desc: "Triggered alerts for low inventory thresholds or dues." },
        { label: "Zero Duplicate Entry", desc: "Synchronizes records without spreadsheet copy-pasting." }
      ],
      image: "/images/history-datacenter.jpg",
      accentColor: "#1A3B71",
      badgeBg: "bg-blue-50 text-[#1A3B71] border-blue-200",
      keyStat: "Zero Manual Repetition",
      icon: Zap
    },
    {
      id: "ticketing",
      number: "07",
      tag: "ARCHITECTURE 07 • EVENT RESERVATIONS & DISPATCH",
      name: "Ticket & Event Booking Platforms",
      title: "Online Ticketing & Reservation Platforms",
      badge: "Event Portals & Venues",
      desc: "Interactive visual seat mapping, payment gateway integration, automated QR code ticket generation, and real-time mobile check-in scanners that streamline guest entry with zero double-booking errors.",
      features: [
        { label: "Interactive Seat Maps", desc: "Visual auditorium selection with dynamic tier pricing." },
        { label: "Payment Gateway Sync", desc: "Instant checkout with UPI, net banking & instant SMS." },
        { label: "Encrypted QR Tickets", desc: "Tamper-proof digital tickets sent via WhatsApp & email." },
        { label: "High-Speed Entry Scans", desc: "Mobile scanner app with live attendee count dashboards." }
      ],
      image: "/images/sector-logistics.jpg",
      accentColor: "#C11E23",
      badgeBg: "bg-red-50 text-[#C11E23] border-red-200",
      keyStat: "Real-Time QR Validation",
      icon: Ticket
    }
  ];

  // Dynamic Scale & Overlap Scroll Physics (Matching Section 4 Stacking Cards)
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
        const diff = cardStickyTop - rectTop - idx * (state.cardHeight + 35);

        if (diff > 0) {
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



  return (
    <section
      className="py-20 lg:py-28 bg-white relative border-b border-slate-200/80"
      id="solutions"
    >
      {/* Background Glows (Contained in dedicated overflow-hidden container) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-red-100/25 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-2xl space-y-3">
            <div>
              <div className="inline-block border-b-2 border-[#C11E23] pb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                  Custom Architecture & Modules
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Tailored Software Solutions Built for <br />
              <span className="text-[#1A3B71]">Operational Efficiency</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed max-w-md">
            Explore our battle-tested enterprise architectures deployed across manufacturing plants, commercial trading offices, educational institutions, and logistics networks across Gujarat.
          </p>
        </div>

        {/* Sticky Overlapping Stacking Cards Deck (Exact UI & Physics matching Section 4) */}
        <div className="max-w-5xl mx-auto pb-24">
          <ul ref={containerRef} className="relative list-none m-0 p-0">
            {solutions.map((sol, idx) => {
              return (
                <li
                  key={sol.id}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  className="sticky will-change-transform group rounded-[28px] lg:rounded-[34px] overflow-hidden transition-[filter,transform] duration-300"
                  style={{
                    top: `${100 + idx * 24}px`,
                    zIndex: 10 + idx,
                    marginBottom: idx === solutions.length - 1 ? "0px" : "60px",
                    transformOrigin: "center top",
                    background: "#ffffff",
                    boxShadow: "0 20px 60px -15px rgba(0,45,68,0.10), 0 2px 8px rgba(0,0,0,0.03)",
                    borderTop: `2px solid ${sol.accentColor}66`
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[350px] lg:min-h-[370px]">
                    
                    {/* Left Column: Content & Features (7 cols) */}
                    <div className="lg:col-span-7 p-6 sm:p-7 lg:p-8 flex flex-col justify-center space-y-4 bg-white">
                      <div className="space-y-3">
                        
                        {/* Sector / Module Tag with Accent Line */}
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs font-mono font-black tracking-[0.3em] uppercase"
                            style={{ color: sol.accentColor }}
                          >
                            {sol.tag}
                          </span>
                          <div className="h-px w-12 bg-slate-200" />
                        </div>

                        {/* Title */}
                        <div>
                          <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#1A3B71] transition-colors">
                            {sol.name}
                          </h3>
                          <span className="text-xs font-mono text-slate-500 font-semibold mt-0.5 inline-block">
                            • {sol.badge}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-2">
                          {sol.desc}
                        </p>

                        {/* 4 Feature Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {sol.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-start gap-2 text-xs font-mono text-slate-700 bg-slate-50/90 p-2 rounded-xl border border-slate-200/70"
                            >
                              <CheckCircle2
                                className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                                style={{ color: sol.accentColor }}
                              />
                              <div className="truncate">
                                <span className="font-bold text-slate-900">{feat.label}: </span>
                                <span className="text-slate-600">{feat.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Visual Image Showcase (5 cols) */}
                    <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-[370px] overflow-hidden bg-slate-900">
                      <Image
                        src={sol.image}
                        alt={sol.name}
                        fill
                        className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />

                      {/* Inner Gradient Blend */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none" />

                      {/* Floating Badge Pill */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/30 text-slate-900 shadow-lg text-[11px] font-mono font-bold flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: sol.accentColor }}
                          />
                          <span>{sol.badge}</span>
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
