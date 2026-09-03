"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Code2, 
  Cloud, 
  Search, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  Terminal, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function EngineeringTeamGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      id: "harsh-patel",
      name: "Harsh Patel",
      role: "Lead Full-Stack & ERP Architect",
      department: "software",
      experience: "7+ Years Experience",
      image: "/images/team-harsh-patel.jpg",
      bio: "Leads backend architecture and custom enterprise ERP pipelines. Specializes in multi-tenant business logic, automated database migration, and high-load APIs.",
      skills: ["PHP / Laravel", "Node.js", "PostgreSQL", "ERP Architecture"],
      accentColor: "#073F8A"
    },
    {
      id: "pooja-desai",
      name: "Pooja Desai",
      role: "Senior Frontend & Software Engineer",
      department: "software",
      experience: "5+ Years Experience",
      image: "/images/team-pooja-desai.jpg",
      bio: "Engineers interactive administrative dashboards, client portals, and responsive web platforms with high-performance Core Web Vitals compliance.",
      skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      accentColor: "#00D2FF"
    },
    {
      id: "drashti-shah",
      name: "Drashti Shah",
      role: "Technical SEO & AEO/GEO Strategist",
      department: "marketing",
      experience: "5+ Years Experience",
      image: "/images/team-drashti-shah.jpg",
      bio: "Architects nested JSON-LD schema graphs, Answer Engine Optimization (AEO) for Google AI Overviews, and Generative Engine Optimization for AI citations.",
      skills: ["Technical SEO", "AEO / GEO Schema", "Core Web Vitals", "B2B Lead Funnels"],
      accentColor: "#E11D48"
    },
    {
      id: "bhavin-suthar",
      name: "Bhavin Suthar",
      role: "Senior Backend & Database Engineer",
      department: "software",
      experience: "6+ Years Experience",
      image: "/images/team-harsh-patel.jpg",
      bio: "Designs normalized relational schemas, background cron processing queues, and custom API gateways for industrial enterprise clients.",
      skills: ["Laravel Core", "MySQL Indexing", "Redis Cache", "Webhook Queues"],
      accentColor: "#073F8A"
    },
    {
      id: "jhanvi-trivedi",
      name: "Jhanvi Trivedi",
      role: "Generative AI & Search Performance Specialist",
      department: "marketing",
      experience: "4+ Years Experience",
      image: "/images/team-drashti-shah.jpg",
      bio: "Audits citation footprints across ChatGPT Search, Perplexity, and Gemini, optimizing site entity graph associations.",
      skills: ["Generative Engine", "Entity SEO", "Schema Graphs", "ROAS Audits"],
      accentColor: "#E11D48"
    }
  ];

  const filteredMembers = activeFilter === "all" 
    ? teamMembers 
    : teamMembers.filter(m => m.department === activeFilter);

  // Auto-scroll effect with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const cardStep = el.clientWidth >= 1024 ? (el.clientWidth - 48) / 3 + 24 : (el.clientWidth >= 768 ? (el.clientWidth - 24) / 2 + 24 : 320);

        if (el.scrollLeft >= maxScroll - 15) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: cardStep, behavior: "smooth" });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, filteredMembers]);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const cardStep = el.clientWidth >= 1024 ? (el.clientWidth - 48) / 3 + 24 : (el.clientWidth >= 768 ? (el.clientWidth - 24) / 2 + 24 : 320);
      scrollRef.current.scrollBy({ left: -cardStep, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const cardStep = el.clientWidth >= 1024 ? (el.clientWidth - 48) / 3 + 24 : (el.clientWidth >= 768 ? (el.clientWidth - 24) / 2 + 24 : 320);
      scrollRef.current.scrollBy({ left: cardStep, behavior: "smooth" });
    }
  };

  return (
    <section 
      className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80" 
      id="team-roster"
    >
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-600/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-block border-b-2 border-[#C11E23] pb-1">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
              Developer & Specialist Roster
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight font-sans">
            Engineers & Specialists <br />
            <span className="text-[#073F8A]">Delivering Every System</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto">
            Our full-time developers, systems architects, and technical SEO specialists work under one roof in Vadodara with zero outsourcing.
          </p>
        </div>

        {/* Department Filter Tabs (Centered) */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "all", label: "All Specialists (24+ Bench)" },
            { id: "software", label: "Software & Custom ERP" },
            { id: "marketing", label: "Technical SEO & AEO" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                activeFilter === tab.id
                  ? "bg-[#073F8A] text-white shadow-md shadow-blue-900/20 scale-[1.02]"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* AUTO-SCROLLING HORIZONTAL DEVELOPER ROSTER CAROUSEL (3 CARDS VISIBLE) */}
        {/* ========================================================================= */}
        <div 
          className="relative group/carousel px-2 sm:px-14 lg:px-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Navigation Arrow (Positioned with clear spacing before first card) */}
          <button
            onClick={handleScrollLeft}
            aria-label="Previous Team Members"
            className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl hover:bg-[#073F8A] hover:text-white hover:border-[#073F8A] text-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Navigation Arrow (Positioned with clear spacing after last card) */}
          <button
            onClick={handleScrollRight}
            aria-label="Next Team Members"
            className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl hover:bg-[#073F8A] hover:text-white hover:border-[#073F8A] text-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Scroll Track */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-6 overflow-x-auto py-3 px-1 scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="w-[85vw] sm:w-[320px] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#073F8A]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                
                {/* Top Section: Photo & Header */}
                <div>
                  
                  {/* Photo Frame with Overlay Badge */}
                  <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 280px, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Experience Badge */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono font-bold text-[#073F8A] shadow-xs">
                        {member.experience}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Vadodara HQ
                      </span>
                    </div>
                  </div>

                  {/* Info Container */}
                  <div className="p-5 space-y-2.5">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#073F8A] transition-colors leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#E11D48] mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                </div>

                {/* Bottom Skills Tag Cloud */}
                <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
