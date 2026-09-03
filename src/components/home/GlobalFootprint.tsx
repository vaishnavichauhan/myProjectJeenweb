import React from "react";
import { GLOBAL_COUNTRIES } from "@/lib/siteData";

export default function GlobalFootprint() {
  return (
    <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80" id="global-footprint">
      
      {/* 1. Subtle Small Checks / Grid Pattern (24px by 24px) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A3B710a_1px,transparent_1px),linear-gradient(to_bottom,#1A3B710a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* 2. Checkered / Dotted World Map Graphic with Highlighted India HQ */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.09] overflow-hidden select-none">
        <svg
          viewBox="0 0 1000 480"
          className="w-[1100px] lg:w-[1300px] h-auto max-w-none text-[#1A3B71]"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Fine Checkered Pattern Fill */}
            <pattern id="mapChecks" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" fill="currentColor" opacity="0.6" />
              <rect x="6" y="6" width="6" height="6" fill="currentColor" opacity="0.6" />
            </pattern>
          </defs>

          {/* Continents with Fine Checkered Texture */}
          {/* North America */}
          <g fill="url(#mapChecks)">
            <path d="M120,60 Q180,40 240,50 Q280,90 260,150 Q220,180 180,190 Q140,160 120,110 Z" />
            <path d="M180,190 Q220,210 200,260 Q170,240 180,190 Z" />
            <circle cx="210" cy="120" r="45" />
            <circle cx="160" cy="100" r="35" />
            <circle cx="250" cy="150" r="30" />
          </g>

          {/* Central & South America */}
          <g fill="url(#mapChecks)">
            <path d="M240,250 Q290,240 330,280 Q320,380 270,440 Q230,370 240,300 Z" />
            <circle cx="290" cy="310" r="40" />
            <circle cx="280" cy="370" r="35" />
            <circle cx="270" cy="420" r="20" />
          </g>

          {/* Europe */}
          <g fill="url(#mapChecks)">
            <path d="M460,70 Q540,60 560,110 Q520,150 450,130 Q440,90 460,70 Z" />
            <circle cx="490" cy="100" r="28" />
            <circle cx="530" cy="95" r="24" />
            <circle cx="440" cy="95" r="14" /> {/* UK */}
          </g>

          {/* Africa */}
          <g fill="url(#mapChecks)">
            <path d="M460,160 Q550,150 570,230 Q540,330 490,360 Q440,290 430,220 Z" />
            <circle cx="490" cy="200" r="42" />
            <circle cx="510" cy="270" r="38" />
            <circle cx="500" cy="330" r="25" />
          </g>

          {/* Middle East */}
          <g fill="url(#mapChecks)">
            <circle cx="580" cy="170" r="24" />
            <circle cx="605" cy="190" r="18" />
          </g>

          {/* Asia / India / China */}
          <g fill="url(#mapChecks)">
            <path d="M570,70 Q750,50 840,110 Q800,220 700,230 Q620,190 570,130 Z" />
            <circle cx="630" cy="100" r="44" />
            <circle cx="710" cy="110" r="50" />
            <circle cx="780" cy="130" r="46" />
            <circle cx="740" cy="180" r="40" /> {/* East Asia */}
            <circle cx="705" cy="230" r="18" /> {/* Sri Lanka */}
            <circle cx="770" cy="230" r="16" />
            <circle cx="800" cy="250" r="18" />
          </g>

          {/* Highlighted India Beacon on World Map */}
          <circle cx="675" cy="180" r="38" fill="#C11E23" opacity="0.4" />
          <circle cx="675" cy="180" r="14" fill="#C11E23" opacity="0.85" />
          <circle cx="675" cy="180" r="5" fill="#FFFFFF" />

          {/* Australia & New Zealand */}
          <g fill="url(#mapChecks)">
            <path d="M780,330 Q870,320 880,380 Q830,420 770,390 Z" />
            <circle cx="820" cy="360" r="38" />
            <circle cx="900" cy="400" r="16" />
          </g>

          {/* Major Meridian and Equator Coordinates */}
          <line x1="40" y1="240" x2="960" y2="240" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" opacity="0.35" />
          <line x1="500" y1="20" x2="500" y2="460" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" opacity="0.35" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto mb-12 space-y-3 text-center">
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                Geographic Reach
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-slate-900">
            Corporate Operations Across The World
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            From our dual engineering hubs in Vadodara, Gujarat, we architect and maintain mission-critical IT infrastructure for corporate clients across 12 countries.
          </p>
        </div>

        {/* Global Countries Grid (Highlighted India HQ + Clean Backgroundless Pin Icons) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-7 items-center">
          {GLOBAL_COUNTRIES.map((country, idx) => {
            const isIndia = country.name === "India";
            const isEven = idx % 2 === 0;

            return (
              <div
                key={country.name}
                className={`flex items-start gap-2.5 transition-all duration-300 hover:translate-x-1 cursor-default group relative rounded-2xl ${
                  isIndia
                    ? "p-2.5 -m-2.5 bg-white shadow-md ring-2 ring-[#C11E23]/30 z-10"
                    : ""
                }`}
              >
                {/* Clean Colorful Pin Icon */}
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform relative">
                  {isIndia && (
                    <span className="absolute -inset-1 rounded-full bg-[#C11E23]/25 animate-ping pointer-events-none" />
                  )}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      fill={isIndia ? "#C11E23" : (isEven ? "#C11E23" : "#1A3B71")}
                    />
                    <circle cx="12" cy="9" r="3" fill="#FFFFFF" />
                    <circle cx="12" cy="9" r="1.6" fill={isIndia ? "#1A3B71" : (isEven ? "#1A3B71" : "#C11E23")} />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-base sm:text-lg leading-none">{country.flag}</span>
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors truncate ${
                        isIndia ? "text-[#C11E23]" : "text-slate-900 group-hover:text-[#1A3B71]"
                      }`}
                    >
                      {country.name}
                    </span>
                    {isIndia && (
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-[#C11E23] px-1.5 py-0.5 rounded-md shadow-2xs">
                        HQ
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-xs sm:text-[13px] mt-1 truncate font-sans ${
                      isIndia ? "text-slate-700 font-semibold" : "text-slate-500"
                    }`}
                  >
                    {country.region}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
