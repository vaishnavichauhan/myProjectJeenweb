"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GLOBAL_COUNTRIES } from "@/lib/siteData";
import { Sparkles, MapPin, Building2, CheckCircle2, Globe2 } from "lucide-react";

interface RegionPin {
  id: string;
  label: string;
  coords: { top: string; left: string };
  isIndia?: boolean;
  flag: string;
  country: string;
  description: string;
}

const REGION_PINS: RegionPin[] = [
  {
    id: "canada",
    label: "CANADA",
    coords: { top: "26%", left: "22%" },
    flag: "🇨🇦",
    country: "Canada",
    description: "Cloud ERP & Healthcare Systems Support"
  },
  {
    id: "south-america",
    label: "SOUTH AMERICA",
    coords: { top: "58%", left: "27%" },
    flag: "🌎",
    country: "South America",
    description: "Corporate Web Applications & Hosting Solutions"
  },
  {
    id: "europe",
    label: "EUROPE",
    coords: { top: "23%", left: "49%" },
    flag: "🇬🇧",
    country: "Europe & UK",
    description: "Enterprise Operations & High-Concurrency Systems"
  },
  {
    id: "south-africa",
    label: "SOUTH AFRICA",
    coords: { top: "60%", left: "53%" },
    flag: "🇿🇦",
    country: "South Africa & East Africa",
    description: "Regional IT Infrastructure & Portals"
  },
  {
    id: "uae",
    label: "UAE",
    coords: { top: "35%", left: "59%" },
    flag: "🇦🇪",
    country: "Dubai (UAE)",
    description: "Middle East Corporate IT Infrastructure & Email"
  },
  {
    id: "india",
    label: "INDIA",
    coords: { top: "38%", left: "69%" },
    isIndia: true, // HIGHLIGHTED!
    flag: "🇮🇳",
    country: "India (Vadodara)",
    description: "Global Headquarters & Dual Engineering Centers"
  },
  {
    id: "new-zealand",
    label: "NEW ZEALAND",
    coords: { top: "54%", left: "84%" },
    flag: "🇳🇿",
    country: "New Zealand",
    description: "Cloud Architecture & Remote Engineering"
  },
  {
    id: "australia",
    label: "AUSTRALIA",
    coords: { top: "68%", left: "84%" },
    flag: "🇦🇺",
    country: "Australia",
    description: "Oceania Business Web & Portal Deployments"
  }
];

export default function GlobalFootprint() {
  const [activePin, setActivePin] = useState<string | null>("india");

  return (
    <section className="py-5 sm:py-7 lg:py-8 bg-white relative overflow-hidden border-b border-slate-200/80 w-full" id="global-footprint">
      <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-3 sm:mb-4 space-y-1">
          <div>
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#1A3B71]">
              Our Reach &amp; Clients
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Worked with <span className="font-extrabold text-slate-900">250+ Clients</span>{" "}
            <span className="text-[#1A3B71] font-black">Across The Globe</span>
          </h2>

          <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-xl mx-auto">
            From our dual engineering hubs in Vadodara, Gujarat, we architect and maintain mission-critical IT infrastructure, custom software, and cloud systems for corporate clients worldwide.
          </p>
        </div>

        {/* Dotted World Map Graphic with Locked 1:1 Aspect Ratio */}
        <div className="relative w-full max-w-[1100px] xl:max-w-[1240px] mx-auto select-none">
          
          <div className="relative w-full aspect-[1376/768] flex items-center justify-center">
            {/* The Perspective Dotted World Map Base Image */}
            <Image
              src="/images/dotted-world-map.jpg"
              alt="Dotted Global World Map - Jeenweb Reach"
              fill
              priority
              className="object-fill pointer-events-none"
              sizes="(max-width: 1280px) 100vw, 1240px"
            />

            {/* Render Location Badges on Top of the Map */}
            {REGION_PINS.map((pin) => {
              const isSelected = activePin === pin.id;
              const isIndia = pin.isIndia;

              return (
                <div
                  key={pin.id}
                  style={{ top: pin.coords.top, left: pin.coords.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  onMouseEnter={() => setActivePin(pin.id)}
                >
                  {/* Pin Container */}
                  <div className="relative flex flex-col items-center">
                    
                    {/* Badge Pill */}
                    {isIndia ? (
                      /* Highlighted India Badge with Crimson/White Glow & Pulse */
                      <div className="relative cursor-pointer transition-transform duration-300 transform group-hover:scale-110">
                        {/* Outer Glow & Radar Pulse for India */}
                        <div className="absolute -inset-1 rounded-2xl bg-[#C11E23]/40 blur-sm animate-pulse" />
                        <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 z-30">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C11E23] opacity-80" />
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C11E23] border-2 border-white" />
                        </span>

                        <div className="relative px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#C11E23] via-[#D92228] to-[#991B1B] text-white font-black text-[10px] sm:text-xs tracking-wider uppercase shadow-xl shadow-red-900/30 border-2 border-white ring-4 ring-[#C11E23]/25 flex items-center gap-1.5 whitespace-nowrap">
                          <span className="text-xs sm:text-sm leading-none">🇮🇳</span>
                          <span className="drop-shadow-xs">INDIA</span>
                          <span className="bg-white text-[#C11E23] text-[9px] font-mono font-black px-1.5 py-0.5 rounded shadow-2xs">
                            HQ
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Sapphire Blue Badge */
                      <div className="relative cursor-pointer transition-transform duration-300 transform group-hover:scale-110">
                        <div className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#1A3B71] hover:bg-[#16325B] text-white font-extrabold text-[9px] sm:text-[11px] tracking-wider uppercase shadow-md shadow-blue-950/20 border border-white/30 flex items-center gap-1 whitespace-nowrap">
                          <span>{pin.label}</span>
                        </div>
                      </div>
                    )}

                    {/* Rich Floating Tooltip on Hover/Active */}
                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 sm:w-60 p-3 rounded-xl sm:rounded-2xl bg-slate-900/95 backdrop-blur-md text-white border border-white/15 shadow-2xl z-40 text-left pointer-events-none transition-all duration-200 ${
                        isSelected
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-95 translate-y-1 pointer-events-none hidden group-hover:block"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm">{pin.flag}</span>
                          <span className="text-xs font-bold text-white truncate">{pin.country}</span>
                        </div>
                        {isIndia && (
                          <span className="text-[9px] font-mono uppercase bg-red-600 text-white px-1.5 py-0.5 rounded font-bold">
                            Headquarters
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug font-sans">
                        {pin.description}
                      </p>
                      {isIndia && (
                        <div className="mt-2 pt-1.5 border-t border-white/10 text-[10px] text-cyan-300 font-mono flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-cyan-300" />
                          <span>Vadodara, Gujarat • Since 2000</span>
                        </div>
                      )}
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
