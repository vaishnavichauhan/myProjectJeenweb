"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import ConsultationModal from "@/components/common/ConsultationModal";
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
  PhoneCall,
  Sparkles
} from "lucide-react";

export default function CustomSoftwarePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState("Custom Manufacturing ERP");

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

  const solutions = [
    {
      title: "Custom ERP — Enterprise Resource Planning Systems",
      icon: Layers,
      badge: "Manufacturing & Distribution",
      paragraphs: [
        "Running a manufacturing or commercial operation across multiple locations in Gujarat means managing procurement, inventory, accounts, production, and supply chain all at once. When that data lives in spreadsheets and separate tools, things fall through the gaps.",
        "We build custom ERP software from scratch—consolidating procurement, multi-warehouse inventory management, accounting, supply chain tracking, and reporting into one unified system built specifically for how your operation runs. As an experienced ERP software company in Gujarat, we have built ERP platforms for manufacturers, distributors, and commercial enterprises — each one different because each business operates differently.",
        "No per-user monthly fees. No modules you do not need. No adapting your process to fit the software."
      ],
      features: [
        "Consolidated procurement & warehouse inventory",
        "Multi-location production & supply chain tracking",
        "GST-compliant accounting & custom reporting",
        "Zero per-user monthly licensing fees"
      ]
    },
    {
      title: "Custom CRM — Customer Relationship Management Platforms",
      icon: Users,
      badge: "Sales Pipeline & Leads",
      paragraphs: [
        "Your sales team has a specific way they work leads—specific stages, specific follow-up habits, and specific reporting needs. A generic CRM forces them to change all of that. Our custom CRM software in Vadodara is built around how your team actually sells.",
        "We build custom CRM platforms that manage your full lead pipeline, record every interaction, track individual and team performance, and automate follow-up communications—all configured to your exact sales process. No per-seat licensing fees that grow every time you hire someone. You own the software outright."
      ],
      features: [
        "Custom lead stages & pipeline automation",
        "Complete customer interaction logs & history",
        "Sales executive performance tracking",
        "100% full software ownership without per-seat fees"
      ]
    },
    {
      title: "Visitor Management Software",
      icon: Building,
      badge: "Digital Front Desk & Gates",
      paragraphs: [
        "Paper visitor registers at the front desk create security gaps, lost records, and no way to track who is in the building at any given moment.",
        "Our visitor management system software replaces paper with a proper digital system — automated digital gate passes, OTP-based badge generation, instant host phone alerts when a visitor arrives, digital visitor logging, and complete searchable records. Designed for corporate offices, manufacturing plants, and institutional campuses across Gujarat."
      ],
      features: [
        "Automated digital gate pass generation",
        "OTP-based visitor badge printing",
        "Instant host phone & WhatsApp arrival alerts",
        "Digital logging & instant searchable history"
      ]
    },
    {
      title: "School Management Software",
      icon: GraduationCap,
      badge: "Educational Institutions",
      paragraphs: [
        "Managing a school or educational institution involves student records, fee collection, attendance, report cards, staff communication, and parent engagement — all running at the same time across different departments.",
        "Our school management software in Gujarat centralizes everything into one platform — student administrative records, fee collection gateways, digital report cards, timetable management, and staff-parent communication portals. Built specifically for the way your institution operates — not a generic academic template."
      ],
      features: [
        "Centralized student administrative records",
        "Automated online fee collection gateways",
        "Digital report cards & timetable management",
        "Staff-parent communication & notification portal"
      ]
    },
    {
      title: "Attendance Management Systems",
      icon: Clock,
      badge: "Biometric & Payroll Sync",
      paragraphs: [
        "Manual attendance registers and basic punch-card systems create payroll errors, leave disputes, and hours of administrative work every month.",
        "We build attendance management systems that connect directly to your existing biometric devices, RFID readers, and mobile GPS check-in applications—feeding attendance data straight into your payroll processor. Shift tracking, leave approvals, overtime calculations, and monthly reports all run automatically. Your HR team stops doing manual calculations and starts managing people instead."
      ],
      features: [
        "Direct connection to existing biometric & RFID devices",
        "Mobile GPS check-in for field employees",
        "Automated shift, overtime & leave calculations",
        "Direct export & sync with payroll processors"
      ]
    },
    {
      title: "Business Automation Software",
      icon: Zap,
      badge: "Workflow Efficiency",
      paragraphs: [
        "If your team is spending hours every day on repetitive manual tasks—data entry, approval routing, report generation, or notification sending—that time and money are being wasted unnecessarily.",
        "We build business automation software that handles those repetitive tasks automatically. Approvals get routed to the right person, reports get generated on schedule, and notifications go out without anyone pressing a button. Your team focuses on work that actually needs human attention. Particularly valuable for SMEs and growing businesses in Gujarat that need to operate efficiently without adding headcount."
      ],
      features: [
        "Automated multi-level approval routing",
        "Scheduled custom report generation & dispatch",
        "Triggered email & WhatsApp notifications",
        "Eliminates repetitive data entry across departments"
      ]
    },
    {
      title: "Ticket Booking and Event Management Platforms",
      icon: Ticket,
      badge: "Event Portals & Venues",
      paragraphs: [
        "For businesses running corporate events, venues, or ticketed experiences, managing bookings manually creates errors, double-bookings, and a poor experience for customers.",
        "We build secure online ticket booking platforms with real-time seat mapping, payment gateway integration, automated QR code ticket generation, and booking management dashboards. Whether you are running a single event or a regular ticketed venue operation, the system handles the complexity so your team does not have to."
      ],
      features: [
        "Real-time visual seat mapping & selection",
        "Secure payment gateway integrations",
        "Automated QR code e-ticket generation",
        "On-ground QR check-in & box office dashboard"
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
              { label: "Custom Software Development" }
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
                Tailor-Made Enterprise Software
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineering Tailor-Made Software Systems Designed Around Your Physical Business Workflows
            </h1>

            <p className="text-base sm:text-lg text-indigo-300 font-semibold">
              Enterprise software development, custom ERPs, and automated management portals built in Vadodara.
            </p>

            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
              Most businesses in Gujarat buy software and then spend months trying to make their team work around it. Processes get adjusted, workarounds get created, and half the features never get used. At Jeenweb Technologists, we do it the other way around. We come to your workplace, watch how your team operates, and build software that mirrors those exact physical routines.
            </p>

            <div className="pt-4 flex flex-wrap gap-3.5">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
              >
                <span>Consult Our Software Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#solutions"
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15"
              >
                View 7 Software Systems
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Software Solutions We Build */}
      <section className="py-20 lg:py-24 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Solutions Catalog"
            title="Tailored Software Solutions Built for Operational Efficiency"
            subtitle="Explore our battle-tested enterprise architectures deployed across manufacturing, corporate offices, institutions, and service sectors."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              const isWide = index === 0; // Custom ERP card gets double width on desktop for emphasis
              return (
                <div
                  key={sol.title}
                  className={`p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group ${
                    isWide ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-50 via-white to-slate-50 border-slate-300" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-200/60">
                        {sol.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                      {sol.title}
                    </h3>

                    <div className="space-y-3">
                      {sol.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="space-y-2 pt-4 border-t border-slate-200/80">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        System Highlights:
                      </span>
                      {sol.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200">
                    <button
                      onClick={() => {
                        setSelectedSolution(sol.title);
                        setModalOpen(true);
                      }}
                      className="w-full py-3 rounded-xl bg-white border border-slate-300 hover:border-[#16325B] text-slate-800 hover:text-[#16325B] text-xs font-bold transition-all text-center flex items-center justify-center gap-2 group-hover:bg-[#16325B] group-hover:text-white group-hover:border-[#16325B]"
                    >
                      <span>Request Scope & Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: How We Build Software That Actually Gets Used */}
      <section className="py-20 lg:py-24 bg-[#0B192C] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="How We Build Software That Actually Gets Used"
            title="Process-Driven Engineering: How We Build Software That Works"
            subtitle="Most software projects fail not because of bad code but because the software never matched how the team actually worked. Our three-part process fixes that before a single line of code gets written."
            centered={true}
            theme="dark"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Part 1 */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#D32F2F] text-white flex items-center justify-center font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <span className="text-[11px] font-bold text-red-400 bg-red-950/60 border border-red-800/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    On-Site Field Study
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                  Part 1 — Dedicated Expert Allocation and In-Depth Workflow Study
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Before we open a code editor, we assign a dedicated team of software architects to your workplace in Vadodara. We spend time watching how your administrators, field managers, and department heads actually work—not how the process is documented, but how it really happens every day.
                </p>

                <p className="text-slate-400 text-xs leading-relaxed">
                  We map every manual step, every communication gap, every workaround your team has created to deal with missing tools. We identify exactly where the friction is and what the software needs to solve. This field study is what makes the difference between software your team uses naturally and software that collects dust.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs text-red-400 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Assumption • Physical Mapping</span>
              </div>
            </div>

            {/* Part 2 */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#16325B] text-white flex items-center justify-center font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <span className="text-[11px] font-bold text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    Clean Architecture
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  Part 2 — Blueprinted Architecture Design and System Development
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Using everything we learned in the field study, our engineering team designs the database structure and interface layout to match your actual physical routines—not a generic business model.
                </p>

                <p className="text-slate-400 text-xs leading-relaxed">
                  We write clean, modular backend code using proven web and database technologies. We build user roles and administrative permission controls that mirror your actual organizational hierarchy. Every screen, every workflow, and every data field is placed where your team expects it—because we designed it around how they work, not how we assumed they work.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs text-blue-400 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Modular Code • Role-Based Security</span>
              </div>
            </div>

            {/* Part 3 */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    Live User Testing
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  Part 3 — Controlled Implementation and Real-World User Testing
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Handing over software and walking away is not how we operate. We implement the build inside your active work environment and observe how your employees interact with it in real conditions.
                </p>

                <p className="text-slate-400 text-xs leading-relaxed">
                  We run stress tests, track live usage patterns, watch for friction points where users hesitate or work around the system, and fix them before they become habits. We keep refining until the software feels natural to use—not like something the team has to learn to tolerate. Only then do we call the project complete.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>On-Ground Training • Zero Friction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Who We Build Software For */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Who We Build Software For"
            title="Software Development for Businesses of Every Size Across Gujarat"
            subtitle="Scalable, custom-tailored software engineering engineered for fast adoption, lean operational overhead, and long-term expandability."
            centered={true}
          />

          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed mt-10">
            <p className="font-semibold text-slate-900 text-base sm:text-lg">
              We are not just an enterprise software development company. We work with businesses of all sizes — from large industrial corporations needing full ERP implementations to small and medium businesses needing their first proper management system.
            </p>

            <p>
              As a software development company for SMEs across Gujarat and India, we understand that smaller businesses have tighter budgets, leaner teams, and less tolerance for software that does not work properly from day one. We build scalable software solutions that start lean and grow with your business — so you are not paying for complexity you do not need right now, but the system can handle it when you do.
            </p>

            <p>
              Whether you are a manufacturer in Vadodara, a distributor running multiple branches across Gujarat, a school managing hundreds of students, or a growing SME trying to replace manual processes with proper business automation software — we build the right system for where your business is today and where it is going.
            </p>
          </div>

          {/* Sector Archetypes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#0B1E38] text-white w-fit">
                <Building className="w-5 h-5 text-red-400" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Manufacturing & Industry</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bill of materials, shop-floor batch logs, raw materials inventory, gate passes, and GST dispatch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#0B1E38] text-white w-fit">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Growing SMEs & Trading</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom billing, multi-tier approval chains, quotation pipelines, and WhatsApp customer notifications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#0B1E38] text-white w-fit">
                <Layers className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Multi-Branch Distributors</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centralized warehouse inventory synchronization, regional stock routing, and field staff sales tracking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#0B1E38] text-white w-fit">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Educational Institutions</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Online fee collection, student attendance rosters, grade cards, parent portals, and bus fleet GPS tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Clients' Logos */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Section 5: Clients' Logos"
            title="Trusted Software & ERP Partner for Leading Brands"
            subtitle="From healthcare institutions and educational universities to manufacturing leaders, explore the organizations running on Jeenweb software systems."
            centered={true}
          />

          {/* Client Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Client Card 1: CARE Hospitals */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4 group-hover:scale-105 transition-transform">
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
                  Healthcare Network & Multi-Specialty Infrastructure
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Enterprise Portal Systems</span>
              </div>
            </div>

            {/* Client Card 2: JITO JOBS */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4 group-hover:scale-105 transition-transform">
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
                  Career & Recruitment Ecosystem Platform
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Custom Recruitment Engine</span>
              </div>
            </div>

            {/* Client Card 3: Google Cloud / Workspace */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Cloud Partner
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Google Cloud Infrastructure
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Cloud Backend & Database Stacks
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-blue-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Authorized Cloud Partner</span>
              </div>
            </div>

            {/* Client Card 4: Microsoft Azure / 365 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Solutions Partner
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Microsoft Azure / 365
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enterprise .NET & Azure Cloud Integrations
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Official Partner</span>
              </div>
            </div>

            {/* Client Card 5: Parul University */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Academic Partner
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Parul University
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Wall of Fame & Engineering Portal Systems
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-amber-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Custom Portal Deployment</span>
              </div>
            </div>

            {/* Client Card 6: Gujarat Industrial Consortium */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Building className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    Manufacturing
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Gujarat Industrial Leaders
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Manufacturing, Chemical & Supply Chain Brands
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Custom ERP & Gate Passes</span>
              </div>
            </div>

            {/* Client Card 7: Global B2B Export Trade */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    International
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  International Export Houses
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Custom Order Booking & Shipment Tracking
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Global Multi-Currency Engine</span>
              </div>
            </div>

            {/* Client Card 8: High-Availability Cloud Server */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Lock className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    Enterprise Security
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Enterprise Security & Databases
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Encrypted Relational SQL & Redundant Backups
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-purple-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>100% IP & Source Code Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Frequently Asked Questions */}
      <FaqSection
        customFaqs={softwareFaqs}
        badge="Frequently Asked Questions"
        title="Direct Answers Regarding Custom Software Development"
        subtitle="Key explanations on SaaS vs custom builds, biometric hardware integrations, historical spreadsheet migrations, deployment timelines, and on-site staff training."
      />

      {/* Section 7: Action Call */}
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
                  <span>Action Call • Vadodara Engineering Desk</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Build Software That Fits Your Real Workplace Operations
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Stop adjusting your business processes to fit generic software. Talk to our senior software architects in Vadodara—we will assess your current workflows, identify where the gaps are, and blueprint a custom software solution built around how your organization actually operates.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-900/40 hover:shadow-red-900/60 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Schedule Workflow Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15 hover:border-white/30 text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3 h-3 text-slate-300" />
                  <span>Speak with Solutions Architect</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={`Custom Software: ${selectedSolution}`}
      />
    </main>
  );
}
