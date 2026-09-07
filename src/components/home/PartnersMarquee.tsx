"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { PARTNERSHIPS } from "@/lib/siteData";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import TrustedPartnershipsMarquee from "@/components/common/TrustedPartnershipsMarquee";

const CLIENT_LOGOS_ROW1 = [
  { logo: "/images/clientsLogo/home/1.png" },
  { logo: "/images/clientsLogo/home/2.png" },
  { logo: "/images/clientsLogo/home/3.png" },
  { logo: "/images/clientsLogo/home/4.png" },
  { logo: "/images/clientsLogo/home/5.png" },
  { logo: "/images/clientsLogo/home/6.png" },
  { logo: "/images/clientsLogo/home/7.png" },
  { logo: "/images/clientsLogo/home/8.png" },
  { logo: "/images/clientsLogo/home/9.png" },
  { logo: "/images/clientsLogo/home/10.png" },
  { logo: "/images/clientsLogo/home/11.png" },
  { logo: "/images/clientsLogo/home/12.png" },
  { logo: "/images/clientsLogo/home/13.png" },
  { logo: "/images/clientsLogo/home/14.png" },
  { logo: "/images/clientsLogo/home/15.png" },
  { logo: "/images/clientsLogo/home/16.png" },
  { logo: "/images/clientsLogo/home/17.png" },
  { logo: "/images/clientsLogo/home/18.png" },
  { logo: "/images/clientsLogo/home/19.png" },
  { logo: "/images/clientsLogo/home/20.png" },
  { logo: "/images/clientsLogo/home/21.png" },
  { logo: "/images/clientsLogo/home/22.png" },
  { logo: "/images/clientsLogo/home/23.png" },
  { logo: "/images/clientsLogo/home/24.png" },
  { logo: "/images/clientsLogo/home/25.png" },
  { logo: "/images/clientsLogo/home/26.png" },
  { logo: "/images/clientsLogo/home/27.png" },
  { logo: "/images/clientsLogo/home/28.png" },
  { logo: "/images/clientsLogo/home/29.png" },
  { logo: "/images/clientsLogo/home/29.png" },
{ logo: "/images/clientsLogo/home/33.png" },
{ logo: "/images/clientsLogo/home/34.png" },
{ logo: "/images/clientsLogo/home/35.png" },
{ logo: "/images/clientsLogo/home/36.png" },
{ logo: "/images/clientsLogo/home/37.png" },
{ logo: "/images/clientsLogo/home/38.png" },
{ logo: "/images/clientsLogo/home/39.png" },
{ logo: "/images/clientsLogo/home/40.png" },
{ logo: "/images/clientsLogo/home/41.png" },
{ logo: "/images/clientsLogo/home/42.png" },
{ logo: "/images/clientsLogo/home/43.png" },
{ logo: "/images/clientsLogo/home/44.png" },
{ logo: "/images/clientsLogo/home/45.png" },
{ logo: "/images/clientsLogo/home/46.png" },
{ logo: "/images/clientsLogo/home/47.png" },
{ logo: "/images/clientsLogo/home/48.png" },
{ logo: "/images/clientsLogo/home/49.png" },
{ logo: "/images/clientsLogo/home/50.png" },
{ logo: "/images/clientsLogo/home/51.png" },
{ logo: "/images/clientsLogo/home/52.png" },
{ logo: "/images/clientsLogo/home/53.png" },
{ logo: "/images/clientsLogo/home/54.png" },
{ logo: "/images/clientsLogo/home/55.png" },
{ logo: "/images/clientsLogo/home/56.png" },
{ logo: "/images/clientsLogo/home/72.png" },
{ logo: "/images/clientsLogo/home/73.png" },
{ logo: "/images/clientsLogo/home/74.png" },
{ logo: "/images/clientsLogo/home/75.png" },
{ logo: "/images/clientsLogo/home/76.png" },
{ logo: "/images/clientsLogo/home/77.png" },
{ logo: "/images/clientsLogo/home/78.png" },
{ logo: "/images/clientsLogo/home/79.png" },
{ logo: "/images/clientsLogo/home/80.png" },
{ logo: "/images/clientsLogo/home/81.png" },
{ logo: "/images/clientsLogo/home/82.png" },
{ logo: "/images/clientsLogo/home/83.png" },
{ logo: "/images/clientsLogo/home/84.png" },
{ logo: "/images/clientsLogo/home/85.png" },
{ logo: "/images/clientsLogo/home/86.png" },
{ logo: "/images/clientsLogo/home/87.png" },
{ logo: "/images/clientsLogo/home/88.png" },
{ logo: "/images/clientsLogo/home/101.png" },
{ logo: "/images/clientsLogo/home/102.png" },
{ logo: "/images/clientsLogo/home/103.png" },
{ logo: "/images/clientsLogo/home/104.png" },
{ logo: "/images/clientsLogo/home/105.png" },
{ logo: "/images/clientsLogo/home/106.png" },
{ logo: "/images/clientsLogo/home/107.png" },
{ logo: "/images/clientsLogo/home/108.png" },
{ logo: "/images/clientsLogo/home/109.png" },
{ logo: "/images/clientsLogo/home/110.png" },
  
];

const CLIENT_LOGOS_ROW2 = [
 { logo: "/images/clientsLogo/home/1.png" },
  { logo: "/images/clientsLogo/home/2.png" },
  { logo: "/images/clientsLogo/home/3.png" },
  { logo: "/images/clientsLogo/home/4.png" },
  { logo: "/images/clientsLogo/home/5.png" },
  { logo: "/images/clientsLogo/home/6.png" },
  { logo: "/images/clientsLogo/home/7.png" },
  { logo: "/images/clientsLogo/home/8.png" },
  { logo: "/images/clientsLogo/home/9.png" },
  { logo: "/images/clientsLogo/home/10.png" },
  { logo: "/images/clientsLogo/home/11.png" },
  { logo: "/images/clientsLogo/home/12.png" },
  { logo: "/images/clientsLogo/home/13.png" },
  { logo: "/images/clientsLogo/home/14.png" },
  { logo: "/images/clientsLogo/home/15.png" },
  { logo: "/images/clientsLogo/home/16.png" },
  { logo: "/images/clientsLogo/home/17.png" },
  { logo: "/images/clientsLogo/home/18.png" },
  { logo: "/images/clientsLogo/home/19.png" },
  { logo: "/images/clientsLogo/home/20.png" },
  { logo: "/images/clientsLogo/home/21.png" },
  { logo: "/images/clientsLogo/home/22.png" },
  { logo: "/images/clientsLogo/home/23.png" },
  { logo: "/images/clientsLogo/home/24.png" },
  { logo: "/images/clientsLogo/home/25.png" },
  { logo: "/images/clientsLogo/home/26.png" },
  { logo: "/images/clientsLogo/home/27.png" },
  { logo: "/images/clientsLogo/home/28.png" },
  { logo: "/images/clientsLogo/home/29.png" },
  { logo: "/images/clientsLogo/home/29.png" },
{ logo: "/images/clientsLogo/home/33.png" },
{ logo: "/images/clientsLogo/home/34.png" },
{ logo: "/images/clientsLogo/home/35.png" },
{ logo: "/images/clientsLogo/home/36.png" },
{ logo: "/images/clientsLogo/home/37.png" },
{ logo: "/images/clientsLogo/home/38.png" },
{ logo: "/images/clientsLogo/home/39.png" },
{ logo: "/images/clientsLogo/home/40.png" },
{ logo: "/images/clientsLogo/home/41.png" },
{ logo: "/images/clientsLogo/home/42.png" },
{ logo: "/images/clientsLogo/home/43.png" },
{ logo: "/images/clientsLogo/home/44.png" },
{ logo: "/images/clientsLogo/home/45.png" },
{ logo: "/images/clientsLogo/home/46.png" },
{ logo: "/images/clientsLogo/home/47.png" },
{ logo: "/images/clientsLogo/home/48.png" },
{ logo: "/images/clientsLogo/home/49.png" },
{ logo: "/images/clientsLogo/home/50.png" },
{ logo: "/images/clientsLogo/home/51.png" },
{ logo: "/images/clientsLogo/home/52.png" },
{ logo: "/images/clientsLogo/home/53.png" },
{ logo: "/images/clientsLogo/home/54.png" },
{ logo: "/images/clientsLogo/home/55.png" },
{ logo: "/images/clientsLogo/home/56.png" },
{ logo: "/images/clientsLogo/home/72.png" },
{ logo: "/images/clientsLogo/home/73.png" },
{ logo: "/images/clientsLogo/home/74.png" },
{ logo: "/images/clientsLogo/home/75.png" },
{ logo: "/images/clientsLogo/home/76.png" },
{ logo: "/images/clientsLogo/home/77.png" },
{ logo: "/images/clientsLogo/home/78.png" },
{ logo: "/images/clientsLogo/home/79.png" },
{ logo: "/images/clientsLogo/home/80.png" },
{ logo: "/images/clientsLogo/home/81.png" },
{ logo: "/images/clientsLogo/home/82.png" },
{ logo: "/images/clientsLogo/home/83.png" },
{ logo: "/images/clientsLogo/home/84.png" },
{ logo: "/images/clientsLogo/home/85.png" },
{ logo: "/images/clientsLogo/home/86.png" },
{ logo: "/images/clientsLogo/home/87.png" },
{ logo: "/images/clientsLogo/home/88.png" },
{ logo: "/images/clientsLogo/home/101.png" },
{ logo: "/images/clientsLogo/home/102.png" },
{ logo: "/images/clientsLogo/home/103.png" },
{ logo: "/images/clientsLogo/home/104.png" },
{ logo: "/images/clientsLogo/home/105.png" },
{ logo: "/images/clientsLogo/home/106.png" },
{ logo: "/images/clientsLogo/home/107.png" },
{ logo: "/images/clientsLogo/home/108.png" },
{ logo: "/images/clientsLogo/home/109.png" },
{ logo: "/images/clientsLogo/home/110.png" },
  
];

export default function PartnersMarquee() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveIndex(Math.min(index, PARTNERSHIPS.length - 1));
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/80" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#073F8A]"></span>
            </span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#073F8A]" />
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

        {/* Scrollable Tech Authorization Cards Carousel */}
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

        {/* Bottom Navigation Dots */}
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

      {/* Full-Screen Dual Client Logo Marquee */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-transparent py-2">
        <TrustedPartnershipsMarquee
          onlyMarquee
          row1={CLIENT_LOGOS_ROW1}
          row2={CLIENT_LOGOS_ROW2}
        />
      </div>
    </section>
  );
}
