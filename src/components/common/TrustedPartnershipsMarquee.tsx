"use client";

import React from "react";
import Image from "next/image";

export interface PartnerLogoItem {
  logo: string;
  name?: string;
  tag?: string;
}

export interface TrustedPartnershipsMarqueeProps {
  id?: string;
  badgeText?: string;
  title?: React.ReactNode;
  description?: string;
  row1: (PartnerLogoItem | string)[];
  row2?: (PartnerLogoItem | string)[];
  className?: string;
  onlyMarquee?: boolean;
  speed?: number;
}

function prepareMarqueeList(items: (PartnerLogoItem | string)[], minCount = 16) {
  if (!items || items.length === 0) return [];
  let list = [...items];
  while (list.length < minCount) {
    list = [...list, ...items];
  }
  return [...list, ...list];
}

export default function TrustedPartnershipsMarquee({
  id = "trusted-partnerships",
  badgeText = "Trusted Partnerships",
  title,
  description,
  row1,
  row2,
  className = "",
  onlyMarquee = false,
  speed = 80,
}: TrustedPartnershipsMarqueeProps) {
  const effectiveRow2 = row2 && row2.length > 0 ? row2 : [...row1].reverse();

  const listRow1 = prepareMarqueeList(row1);
  const listRow2 = prepareMarqueeList(effectiveRow2);

  const duration1 = `${speed}s`;
  const duration2 = `${speed + 5}s`;

  const marqueeTracks = (
    <div className="w-full relative overflow-hidden py-3 sm:py-4 space-y-4 sm:space-y-6">
      {/* Gradient edge masks for smooth seamless fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 lg:w-44 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 lg:w-44 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />

      {/* Line 1: Left Scroll */}
      <div
        className="flex animate-marquee items-center gap-5 sm:gap-6"
        style={{ animationDuration: duration1 }}
      >
        {listRow1.map((item, idx) => {
          const src = typeof item === "string" ? item : item.logo;
          const name = typeof item === "string" ? "Client Logo" : item.name || "Client Logo";
          return (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#1A3B71]/40 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className="h-10 sm:h-11 w-32 sm:w-36 relative flex items-center justify-center">
                <Image
                  src={src}
                  alt={name}
                  width={150}
                  height={45}
                  className="h-9 sm:h-10 w-auto max-h-full max-w-[125px] sm:max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105 opacity-100"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Line 2: Right Scroll */}
      <div
        className="flex animate-marquee-reverse items-center gap-5 sm:gap-6"
        style={{ animationDuration: duration2 }}
      >
        {listRow2.map((item, idx) => {
          const src = typeof item === "string" ? item : item.logo;
          const name = typeof item === "string" ? "Client Logo" : item.name || "Client Logo";
          return (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#C11E23]/40 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className="h-10 sm:h-11 w-32 sm:w-36 relative flex items-center justify-center">
                <Image
                  src={src}
                  alt={name}
                  width={150}
                  height={45}
                  className="h-9 sm:h-10 w-auto max-h-full max-w-[125px] sm:max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105 opacity-100"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (onlyMarquee) {
    return marqueeTracks;
  }

  return (
    <section
      className={`py-16 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80 ${className}`}
      id={id}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
            {badgeText}
          </span>
        </div>

        {title && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            {title}
          </h2>
        )}

        {description && (
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-sans leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {marqueeTracks}
    </section>
  );
}
