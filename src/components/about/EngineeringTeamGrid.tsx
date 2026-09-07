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
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Vaishnavi Chauhan",
      gender: "female",
      designation: "Full Stack Developer",
      role: "Full Stack Developer",
      department: "software",
      experience: "Full Stack Specialist",
      image: "/images/team/team-VaishnaviChauhan.jpeg",
      bio: "Engineers end-to-end full stack web platforms and cross-platform mobile apps with modern React, Next.js, and Node architectures.",
      technology: [
        "React JS",
        "React Native",
        "Next.js",
        "Node.js",
        "HTML"
      ],
      skills: [
        "React JS",
        "React Native",
        "Next.js",
        "Node.js",
        "HTML"
      ]
    },
    {
      id: 2,
      name: "Tanamay Dasgupta",
      gender: "male",
      designation: "Software Developer Engineer 1",
      role: "Software Development Engineer 1",
      department: "software",
      experience: "Backend & Cloud Engineer",
      image: "/images/team/team-TanmayDasgupta.jpeg",
      bio: "Builds scalable microservices, high-throughput REST APIs, relational and NoSQL database schemas, and automated CI/CD DevOps workflows.",
      technology: [
        "React JS",
        "Node.js",
        "MongoDB",
        "SQL",
        "DevOps",
        "Next.js",
        "Express.js"
      ],
      skills: [
        "React JS",
        "Node.js",
        "MongoDB",
        "SQL",
        "DevOps",
        "Next.js",
        "Express.js"
      ]
    },
    {
      id: 3,
      name: "Tejasvini Kokre",
      gender: "female",
      designation: "SEO Executive",
      role: "SEO Executive",
      department: "marketing",
      experience: "Search & AI Specialist",
      image: "/images/team/team-Tejasvini kokre.jpeg",
      bio: "Specializes in modern Answer Engine Optimization (AEO), Generative Engine (GEO) citation modeling, and comprehensive technical SEO indexation.",
      technology: [
        "AEO",
        "GEO",
        "Technical SEO"
      ],
      skills: [
        "AEO",
        "GEO",
        "Technical SEO"
      ]
    },
    {
      id: 4,
      name: "Nisarg Patel",
      gender: "male",
      designation: "Frontend Developer",
      role: "Frontend Developer",
      department: "frontend",
      experience: "Frontend Specialist",
      image: "/images/avatar-placeholder.png",
      bio: "Develops accessible, responsive CMS and web portal architectures with clean custom theme development and speed optimization.",
      technology: [
        "WordPress"
      ],
      skills: [
        "WordPress"
      ]
    },
    {
      id: 5,
      name: "Sejal Vataliya",
      gender: "female",
      designation: "Frontend Developer",
      role: "Frontend Developer",
      department: "frontend",
      experience: "Frontend Specialist",
      image: "/images/team/team-Sejal.jpeg",
      bio: "Focuses on pixel-perfect frontend layouts, custom CMS implementations, and responsive interactive web experiences.",
      technology: [
        "WordPress"
      ],
      skills: [
        "WordPress"
      ]
    },
    {
      id: 6,
      name: "Nakul Panchal",
      gender: "male",
      designation: "Software Developer Engineer 1",
      role: "Software Development Engineer 1",
      department: "software",
      experience: "Systems Engineer",
      image: "/images/team/team-NakulPanchal.jpeg",
      bio: "Architects resilient full-stack systems, Express/Node backend microservices, and high-concurrency database queries.",
      technology: [
        "Java",
        "React JS",
        "Node.js",
        "MongoDB",
        "SQL",
        "DevOps",
        "Next.js",
        "Express.js"
      ],
      skills: [
        "Java",
        "React JS",
        "Node.js",
        "MongoDB",
        "SQL",
        "DevOps",
        "Next.js",
        "Express.js"
      ]
    },
    {
      id: 7,
      name: "Raj Patel",
      gender: "male",
      designation: "Full Stack Developer",
      role: "Full Stack Developer",
      department: "software",
      experience: "Full Stack Engineer",
      image: "/images/team/team-rajPatel.png",
      bio: "Delivers robust Next.js and Node.js web applications backed by optimized SQL and MongoDB database architectures.",
      technology: [
        "Next.js",
        "React JS",
        "Node.js",
        "SQL",
        "MongoDB"
      ],
      skills: [
        "Next.js",
        "React JS",
        "Node.js",
        "SQL",
        "MongoDB"
      ]
    },
    {
      id: 8,
      name: "Aditya Patel",
      gender: "male",
      designation: "Digital Marketing Manager",
      role: "Digital Marketing Manager",
      department: "marketing",
      experience: "Growth & Media Manager",
      image: "/images/avatar-placeholder.png",
      bio: "Leads multi-channel performance advertising, high-converting Meta and Google campaigns, and B2B LinkedIn sales pipeline growth.",
      technology: [
        "Meta",
        "Google Ads",
        "LinkedIn Sales Navigator",
        "Canva"
      ],
      skills: [
        "Meta",
        "Google Ads",
        "LinkedIn Sales Navigator",
        "Canva"
      ]
    },
    {
      id: 9,
      name: "Malay Modha",
      gender: "male",
      designation: "Video Editor",
      role: "Video Editor",
      department: "marketing",
      experience: "Media & Motion Specialist",
      image: "/images/avatar-placeholder.png",
      bio: "Produces high-retention video creative, commercial motion graphic reels, and brand visual media for multi-platform digital campaigns.",
      technology: [
        "Meta",
        "Google Ads",
        "LinkedIn Sales Navigator",
        "Canva"
      ],
      skills: [
        "Meta",
        "Google Ads",
        "LinkedIn Sales Navigator",
        "Canva"
      ]
    },
    {
      id: 10,
      name: "Exita Shah",
      gender: "female",
      designation: "Head of Digital Marketing",
      role: "Senior leadership",
      department: "marketing",
      experience: "Media & Motion Specialist",
      image: "/images/avatar-placeholder.png",
      bio: "Produces high-retention video creative, commercial motion graphic reels, and brand visual media for multi-platform digital campaigns.",
        technology: [
        "Meta",
        "Google Ads",
        "LinkedIn Sales Navigator",
        "Canva"
      ],
      skills: [
        "Meta",
        "Google Ads",
        "LinkedIn Sales Navigator",
      ]
    }
  ];

  // Triplicate roster array for infinite seamless looping in clockwise rotation
  const loopedMembers = [
    ...teamMembers.map((m) => ({ ...m, uniqueKey: `set1-${m.id}` })),
    ...teamMembers.map((m) => ({ ...m, uniqueKey: `set2-${m.id}` })),
    ...teamMembers.map((m) => ({ ...m, uniqueKey: `set3-${m.id}` }))
  ];

  const isAdjustingRef = useRef<boolean>(false);

  const getCardMetrics = () => {
    const el = scrollRef.current;
    if (!el) return { step: 344, setWidth: 3440 };

    const first = el.children[0] as HTMLElement | null;
    const second = el.children[1] as HTMLElement | null;
    const step = first && second ? second.offsetLeft - first.offsetLeft : 344;
    const setWidth = step * teamMembers.length;
    return { step, setWidth };
  };

  const checkLoopBounds = () => {
    if (!scrollRef.current || isAdjustingRef.current) return;
    const el = scrollRef.current;
    const { setWidth } = getCardMetrics();
    if (setWidth <= 0) return;

    // Scrolled into third set -> seamlessly adjust back to second set
    if (el.scrollLeft >= setWidth * 2) {
      isAdjustingRef.current = true;
      el.style.scrollBehavior = "auto";
      el.scrollLeft -= setWidth;
      requestAnimationFrame(() => {
        el.style.scrollBehavior = "smooth";
        isAdjustingRef.current = false;
      });
    }
    // Scrolled back into first set -> seamlessly adjust forward to second set
    else if (el.scrollLeft <= setWidth * 0.2) {
      isAdjustingRef.current = true;
      el.style.scrollBehavior = "auto";
      el.scrollLeft += setWidth;
      requestAnimationFrame(() => {
        el.style.scrollBehavior = "smooth";
        isAdjustingRef.current = false;
      });
    }
  };

  // Center initial view at the middle set (Set 2)
  useEffect(() => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const { setWidth } = getCardMetrics();
      el.style.scrollBehavior = "auto";
      el.scrollLeft = setWidth;
      requestAnimationFrame(() => {
        el.style.scrollBehavior = "smooth";
      });
    }
  }, []);

  // Listen to scroll to silently adjust bounds for infinite clockwise cycling
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      checkLoopBounds();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate effect (clockwise continuous cycle, pause on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current && !isAdjustingRef.current) {
        const el = scrollRef.current;
        const { step } = getCardMetrics();
        el.style.scrollBehavior = "smooth";
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScrollLeft = () => {
    if (scrollRef.current && !isAdjustingRef.current) {
      const el = scrollRef.current;
      const { step, setWidth } = getCardMetrics();
      if (el.scrollLeft <= setWidth * 0.3) {
        el.style.scrollBehavior = "auto";
        el.scrollLeft += setWidth;
      }
      requestAnimationFrame(() => {
        el.style.scrollBehavior = "smooth";
        el.scrollBy({ left: -step, behavior: "smooth" });
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current && !isAdjustingRef.current) {
      const el = scrollRef.current;
      const { step } = getCardMetrics();
      el.style.scrollBehavior = "smooth";
      el.scrollBy({ left: step, behavior: "smooth" });
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
            className="flex items-stretch gap-6 overflow-x-auto py-4 px-1 scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {loopedMembers.map((member) => {
              const hasRealPhoto = member.image !== "/images/avatar-placeholder.png";

              return (
                <div
                  key={member.uniqueKey}
                  className="w-[85vw] sm:w-[320px] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#073F8A]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 hover:rotate-1 transform-gpu"
                >
                  
                  {/* Top Banner & Photo Section */}
                  <div>
                    {/* Top Solid Blue Banner */}
                    <div className="relative w-full h-28 bg-[#073F8A] overflow-hidden">
                      {/* Subtle Tech Mesh */}
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
                      
                      {/* Top Right: Location Badge */}
                      <div className="absolute top-3 right-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-mono font-semibold text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Vadodara HQ
                      </div>
                    </div>

                    {/* Centered Square Profile Image (Overlapping Banner) */}
                    <div className="-mt-14 relative z-10 flex justify-center">
                      <div className="relative w-28 h-28 aspect-square rounded-2xl p-1 bg-white shadow-xl shadow-slate-900/10 border border-slate-200/80 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                        <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-50 flex items-center justify-center">
                          {hasRealPhoto ? (
                            <Image
                              src={member.image}
                              alt={`${member.name} - ${member.role}`}
                              fill
                              className="object-cover object-top"
                              sizes="112px"
                            />
                          ) : (
                            <Image
                              src={member.image}
                              alt={`${member.name} - ${member.role}`}
                              width={56}
                              height={56}
                              className="object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Member Info (Centered) */}
                    <div className="px-5 pt-3 pb-2 text-center">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#073F8A] transition-colors tracking-tight leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-[#E11D48] mt-1 tracking-wide">
                        {member.designation || member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Technologies Tag Cloud */}
                  <div className="p-5 pt-3 mt-auto border-t border-slate-100">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 text-center">
                      Technologies
                    </div>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {(member.technology || member.skills).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100/90 text-slate-700 text-[10px] font-mono font-medium border border-slate-200/70 hover:bg-[#073F8A]/10 hover:text-[#073F8A] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
