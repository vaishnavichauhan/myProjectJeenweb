import React from "react";
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
  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Strategic Alliances"
          title="Strategic Partnerships & Authorizations"
          subtitle="Backed by official authorizations, enterprise partner certifications, and verified client ecosystem relationships across Gujarat and beyond."
          centered={true}
        />

        {/* 4 Official Tech Authorization Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PARTNERSHIPS.map((partner) => (
            <div
              key={partner.name}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {partner.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#16325B] transition-colors">
                  {partner.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {partner.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Authorized Implementation</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Client Partner Logo Marquee */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-white py-8 border-y border-slate-200 shadow-xs">
        {/* Section title inside marquee bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D32F2F]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-700">
            Verified Client Partners & Strategic Ecosystem
          </span>
        </div>

        {/* Gradient edge masks for smooth fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

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
