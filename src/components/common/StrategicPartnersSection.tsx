"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export interface PartnerCardItem {
  name: string;
  type: string;
  description: string;
  takeaway?: string;
  icon?: React.ReactNode;
}

export interface ClientLogoItem {
  name: string;
  logo: string;
  tag: string;
}

const DEFAULT_LOGOS_ROW1: ClientLogoItem[] = [
  { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Healthcare Infrastructure Client Partner" },
  { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Official Recruitment & Placement Partner" },
  { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Enterprise Hospital ERP & Workflow" },
  { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Employment Portal Ecosystem" },
  { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Multi-Specialty Healthcare Network" },
  { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Statewide Recruitment Platform" }
];

const DEFAULT_LOGOS_ROW2: ClientLogoItem[] = [
  { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Career & Candidate Database Engine" },
  { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Clinical Systems & Digital Passes" },
  { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "High-Volume Job Application Platform" },
  { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Patient & Admin Infrastructure" },
  { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Regional Technology Ecosystem" },
  { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "24/7 Enterprise Portal Architecture" }
];

interface StrategicPartnersSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  cards: PartnerCardItem[];
  row1Logos?: ClientLogoItem[];
  row2Logos?: ClientLogoItem[];
  id?: string;
}

export default function StrategicPartnersSection({
  badge,
  title,
  subtitle,
  cards,
  row1Logos = DEFAULT_LOGOS_ROW1,
  row2Logos = DEFAULT_LOGOS_ROW2,
  id = "partners"
}: StrategicPartnersSectionProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardElements = container.children;
    if (cardElements[index]) {
      const card = cardElements[index] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth"
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
      setActiveIndex(Math.min(Math.max(0, index), cards.length - 1));
    }
  };

  return (
    <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/80" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Red Bottom Border Tag */}
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12 space-y-3">
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                {badge}
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-slate-900">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Scrollable Tech Authorization Cards Carousel with 3D Depth */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [perspective:1200px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="w-[85vw] sm:w-[320px] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start p-7 rounded-3xl bg-white hover:bg-gradient-to-br hover:from-white hover:via-[#F8FAFC] hover:to-[#EEF6FF] border border-slate-200 hover:border-[#073F8A]/40 shadow-xs hover:shadow-2xl hover:shadow-blue-950/15 transition-all duration-500 ease-out flex flex-col justify-between group transform relative overflow-hidden [transform-style:preserve-3d] hover:[transform:rotateX(5deg)_rotateY(-5deg)_translateZ(12px)] hover:-translate-y-1.5"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#073F8A] via-[#0B5ED7] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="[transform-style:preserve-3d]">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#0B1E38] text-white group-hover:bg-[#073F8A] transition-all duration-500 shadow-2xs group-hover:shadow-md group-hover:scale-110 group-hover:[transform:translateZ(20px)]">
                    {partner.icon ? partner.icon : <ShieldCheck className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />}
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
                <span>{partner.takeaway || "Authorized Implementation"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Dots Only (No Arrows) */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {cards.map((_, idx) => (
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

      {/* Full-Screen Dual Client Logo Marquee (2-Line Opposing Infinite Scroll) */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-transparent py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Gradient edge masks for smooth fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />

        {/* Line 1: Infinite Marquee (Left Scroll) */}
        <div className="flex animate-marquee items-center gap-5 sm:gap-6">
          {[...row1Logos, ...row1Logos].map((client, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 flex items-center gap-4 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#1A3B71]/40 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className="h-10 sm:h-11 w-32 sm:w-36 relative flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  width={150}
                  height={45}
                  className="h-8 sm:h-9 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div className="hidden sm:block text-left">
                <div className="text-xs font-bold text-slate-900 group-hover:text-[#1A3B71] transition-colors whitespace-nowrap">
                  {client.name}
                </div>
                <div className="text-[10px] font-mono font-medium text-slate-500 whitespace-nowrap">
                  {client.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Line 2: Infinite Marquee Reverse (Right Scroll) */}
        <div className="flex animate-marquee-reverse items-center gap-5 sm:gap-6">
          {[...row2Logos, ...row2Logos].map((client, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 flex items-center gap-4 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#C11E23]/40 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className="h-10 sm:h-11 w-32 sm:w-36 relative flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  width={150}
                  height={45}
                  className="h-8 sm:h-9 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div className="hidden sm:block text-left">
                <div className="text-xs font-bold text-slate-900 group-hover:text-[#C11E23] transition-colors whitespace-nowrap">
                  {client.name}
                </div>
                <div className="text-[10px] font-mono font-medium text-slate-500 whitespace-nowrap">
                  {client.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
