"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { PARTNERSHIPS } from "@/lib/siteData";
import { ShieldCheck, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const CLIENT_PARTNER_LOGOS = [
  {
    id: "care-hospitals-1",
    name: "CARE Hospitals",
    tagline: "Healthcare Infrastructure Client Partner",
    isImage: true,
    logoPath: "/images/partners/care-hospitals.svg",
  },
  {
    id: "jito-jobs-1",
    name: "JITO JOBS",
    tagline: "Official Recruitment & Placement Partner",
    isImage: true,
    logoPath: "/images/partners/jito-jobs.svg",
  },
  {
    id: "google-partner-1",
    name: "Google Workspace",
    tagline: "Authorized Cloud Partner",
    isImage: false,
    badge: "Official Authorization",
  },
  {
    id: "care-hospitals-2",
    name: "CARE Hospitals",
    tagline: "Multi-Specialty Hospital Network",
    isImage: true,
    logoPath: "/images/partners/care-hospitals.svg",
  },
  {
    id: "jito-jobs-2",
    name: "JITO JOBS",
    tagline: "Employment Ecosystem Client Partner",
    isImage: true,
    logoPath: "/images/partners/jito-jobs.svg",
  },
  {
    id: "microsoft-partner-1",
    name: "Microsoft 365",
    tagline: "Certified Solutions Partner",
    isImage: false,
    badge: "Enterprise Partner",
  },
  {
    id: "parul-univ-1",
    name: "Parul University",
    tagline: "Wall of Fame Innovation Partner",
    isImage: false,
    badge: "Academic Tech Partner",
  },
  {
    id: "care-hospitals-3",
    name: "CARE Hospitals",
    tagline: "Enterprise IT & Portal Partner",
    isImage: true,
    logoPath: "/images/partners/care-hospitals.svg",
  },
  {
    id: "jito-jobs-3",
    name: "JITO JOBS",
    tagline: "Regional Technology Consultant",
    isImage: true,
    logoPath: "/images/partners/jito-jobs.svg",
  },
  {
    id: "aws-partner-1",
    name: "AWS Cloud Infrastructure",
    tagline: "Cloud Architect Partner",
    isImage: false,
    badge: "Cloud Deployment",
  }
];

export default function PartnersMarquee() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const card = container.children[0] as HTMLElement | undefined;
    if (card) {
      const cardWidth = card.offsetWidth + 24; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), PARTNERSHIPS.length - 1));
    }
  };

  return (
    <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-slate-50 relative overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Red Bottom Border Tag & Perfect Alignment */}
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12 space-y-3">
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                Strategic Alliances
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-slate-900">
            Strategic Partnerships &amp; Authorizations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Backed by official authorizations, enterprise partner certifications, and verified client ecosystem relationships across Gujarat and beyond.
          </p>
        </div>

        {/* Scrollable Tech Authorization Cards Carousel with 3D Depth */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [perspective:1200px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PARTNERSHIPS.map((partner) => (
            <div
              key={partner.name}
              className="w-[85vw] sm:w-[320px] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start p-7 rounded-3xl bg-white hover:bg-gradient-to-br hover:from-white hover:via-[#F8FAFC] hover:to-[#EEF6FF] border border-slate-200 hover:border-[#073F8A]/40 shadow-xs hover:shadow-2xl hover:shadow-blue-950/15 transition-all duration-500 ease-out flex flex-col justify-between group transform relative overflow-hidden [transform-style:preserve-3d] hover:[transform:rotateX(5deg)_rotateY(-5deg)_translateZ(12px)] hover:-translate-y-1.5"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#073F8A] via-[#0B5ED7] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="[transform-style:preserve-3d]">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#0B1E38] text-white group-hover:bg-[#073F8A] transition-all duration-500 shadow-2xs group-hover:shadow-md group-hover:scale-110 group-hover:[transform:translateZ(20px)]">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#073F8A] bg-slate-100 group-hover:bg-blue-50 px-2.5 py-1 rounded-full border border-slate-200 group-hover:border-blue-100 transition-colors">
                    {partner.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#073F8A] transition-colors">
                  {partner.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mt-2 font-sans">
                  {partner.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono [transform-style:preserve-3d] group-hover:[transform:translateZ(12px)] transition-transform">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Authorized Implementation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Dots Only (No Arrows) */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {PARTNERSHIPS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 bg-emerald-600 shadow-xs shadow-emerald-600/30"
                  : "w-2.5 bg-emerald-200 hover:bg-emerald-300"
              }`}
              aria-label={`Scroll to card ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Full-Screen Client Partner Logo Marquee (Seamless Transparent Floating Track) */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-transparent py-4 sm:py-6">
        {/* Gradient edge masks for smooth fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10" />

        {/* Marquee Track Container (Repeated for continuous loop) */}
        <div className="flex animate-marquee items-center gap-6">
          {[...CLIENT_PARTNER_LOGOS, ...CLIENT_PARTNER_LOGOS].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-200 group cursor-default"
            >
              {item.isImage ? (
                <div className="h-12 w-36 sm:w-40 relative flex items-center justify-center">
                  <Image
                    src={item.logoPath!}
                    alt={`${item.name} Client Partner Logo`}
                    width={160}
                    height={70}
                    className="h-10 w-auto max-w-[150px] object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1E38] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Building2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900 group-hover:text-[#16325B] transition-colors whitespace-nowrap">
                      {item.name}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                      {item.tagline}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
