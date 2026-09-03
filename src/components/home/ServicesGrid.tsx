"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CORE_SERVICES_PART1,
  EMAIL_SOLUTIONS_PART2,
  ServiceItem,
  EmailSolutionItem
} from "@/lib/siteData";
import {
  Globe,
  Server,
  Cpu,
  Search,
  TrendingUp,
  Layout,
  Mail,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";

function HandPointer({ className = "w-5 h-5 text-[#1A3B71]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Authentic Hand Pointer / Clicking Index Finger */}
      <path d="M12 2a2 2 0 0 0-2 2v8a1 1 0 0 1-1 1H7a3 3 0 0 0-3 3v1a7 7 0 0 0 7 7h3a8 8 0 0 0 8-8V9a2 2 0 0 0-2-2h-1a2 2 0 0 0-2-2h-1a2 2 0 0 0-2-2V2z" />
      <path d="M12 11V6a2 2 0 0 1 4 0v5" />
      <path d="M16 11V8a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

export default function ServicesGrid() {  const [selectedService, setSelectedService] = useState<string>("");

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Server":
        return Server;
      case "Cpu":
        return Cpu;
      case "Search":
        return Search;
      case "TrendingUp":
        return TrendingUp;
      case "Layout":
        return Layout;
      default:
        return Cpu;
    }
  };

  const getServiceBorderColor = (id: string) => {
    switch (id) {
      case "domain":
        return "bg-[#1A3B71]";
      case "hosting":
        return "bg-[#0284C7]";
      case "web-dev":
        return "bg-[#4F46E5]";
      case "custom-software":
        return "bg-[#7C3AED]";
      case "seo":
        return "bg-[#059669]";
      case "social-media":
        return "bg-[#C11E23]";
      default:
        return "bg-[#1A3B71]";
    }
  };

  const getEmailBorderColor = (id: string) => {
    switch (id) {
      case "m365":
        return "bg-[#0078D4]";
      case "gworkspace":
        return "bg-[#4285F4]";
      case "zoho":
        return "bg-[#E42528]";
      case "dedicated-mail":
        return "bg-[#1A3B71]";
      default:
        return "bg-[#1A3B71]";
    }
  };

  const renderOfficialEmailLogo = (id: string) => {
    switch (id) {
      case "gworkspace":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
          </svg>
        );
      case "m365":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <rect x="1" y="1" width="10" height="10" fill="#F25022" />
            <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
            <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
            <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
          </svg>
        );
      case "zoho":
        return (
          <div className="w-5 h-5 rounded bg-[#E42528] text-white font-black text-xs flex items-center justify-center">
            Z
          </div>
        );
      case "dedicated-mail":
        return (
          <svg className="w-5 h-5 text-[#1A3B71]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        );
      default:
        return <Mail className="w-5 h-5 text-[#1A3B71]" />;
    }
  };

  return (
    <section className="pt-10 pb-20 lg:pt-14 lg:pb-24 bg-white text-slate-900 border-b border-slate-200/90 relative overflow-hidden" id="services">
      {/* Background Micro Dot Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Featured Service Overview Hero Banner with Datacenter Image (Pure White Background) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 p-0 bg-white">
          <div className="flex-1 space-y-4 max-w-xl">
            <div>
              <div className="inline-block border-b-2 border-[#C11E23] pb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                  What We Do
                </span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Welcome to Jeenweb Services
            </h3>

            <p className="text-sm text-slate-600 font-sans leading-relaxed">
              Enterprise domain management, ultra-fast NVMe hosting, custom software engineering, corporate email infrastructure, and AI-driven search dominance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#core-services-list"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-95 border border-white/10"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
              </a>

              <button
                onClick={() => {
                  setSelectedService("Enterprise IT & Custom Software Advisory");
                  window.location.href = "/contact#get-in-touch";
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#1A3B71] border-2 border-[#1A3B71] font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <span>Consult Expert</span>
                <ArrowRight className="w-4 h-4 text-[#C11E23]" />
              </button>
            </div>
          </div>

          {/* Featured Service Image */}
          <div className="relative w-full lg:w-[460px] xl:w-[500px] h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200/80 flex-shrink-0">
            <Image
              src="/images/services/datacenter-cloud-service.png"
              alt="Jeenweb Enterprise Cloud & IT Services"
              fill
              priority
              unoptimized
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* 1. Core Engineering & IT Services (Full-Width 3-Column Grid) */}
        <div id="core-services-list" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1A3B71] flex items-center justify-center shadow-xs">
              <HandPointer className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
              Core Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CORE_SERVICES_PART1.map((service) => {
              const IconComponent = getServiceIcon(service.iconName);

              return (
                <div
                  key={service.id}
                  className="group [perspective:1200px] h-[390px] sm:h-[410px] cursor-pointer"
                >
                  {/* 3D Flipping Body */}
                  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform rounded-3xl shadow-xs group-hover:[transform:rotateY(180deg)] group-hover:shadow-2xl">
                    
                    {/* Front Face (0 deg) */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl p-7 bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.07)] flex flex-col justify-between overflow-hidden">
                      {/* Top Accent Line (Slim 2px Depth) */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] ${getServiceBorderColor(service.id)}`} />

                      <div className="space-y-3.5">
                        {/* Header: Icon & Category Tag */}
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1A3B71] flex items-center justify-center shadow-2xs">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A3B71] bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                            {service.tags[0]}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 group-hover:text-[#1A3B71] transition-colors leading-snug pt-1">
                          {service.title}
                        </h4>

                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                          {service.shortDesc}
                        </p>

                        {/* Feature Highlights */}
                        <div className="pt-2.5 space-y-2 border-t border-slate-100">
                          {service.features.slice(0, 3).map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Front Bottom Interactive Flip Prompt */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1A3B71]">
                        <span>Hover to Flip &amp; Deploy</span>
                        <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-3.5 h-3.5 text-[#1A3B71]" />
                        </div>
                      </div>
                    </div>

                    {/* Back Face (180 deg - Revealed on 3D Flip) */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl p-7 bg-gradient-to-br from-[#0A2647] via-[#1A3B71] to-[#07192F] text-white border border-[#134B70] flex flex-col justify-between shadow-2xl overflow-hidden">
                      {/* Ambient Glow */}
                      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#00E5FF]/15 rounded-full blur-2xl pointer-events-none" />

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] font-bold">
                            Enterprise Tier
                          </span>
                          <span className="text-[10px] font-mono text-slate-300">
                            99.9% Uptime SLA
                          </span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white leading-tight">
                          {service.title}
                        </h4>

                        <p className="text-xs text-slate-200 leading-relaxed font-sans line-clamp-3">
                          {service.fullDesc}
                        </p>

                        {/* All Features on Back */}
                        <div className="pt-2 space-y-1.5 border-t border-white/15">
                          {service.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-[11px] text-slate-200">
                              <CheckCircle2 className="w-3 h-3 text-[#00E5FF] flex-shrink-0" />
                              <span className="line-clamp-1">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Back Action */}
                      <div className="relative z-10 pt-4 border-t border-white/15">
                        <Link
                          href={service.href}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#1A3B71] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                        >
                          <span>Explore Details</span>
                          <ArrowUpRight className="w-4 h-4 text-[#C11E23]" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Business Email Solutions (Full-Width 4-Column Grid) */}
        <div id="business-email">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1A3B71] flex items-center justify-center shadow-xs">
              <HandPointer className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
              Business Email Services
            </h3>
          </div>

          {/* 3 Cards Per Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {EMAIL_SOLUTIONS_PART2.map((item) => (
              <div
                key={item.id}
                className="group [perspective:1200px] h-[260px] sm:h-[270px] cursor-pointer"
              >
                {/* 3D Flipping Body */}
                <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform rounded-3xl shadow-xs group-hover:[transform:rotateY(180deg)] group-hover:shadow-2xl">
                  
                  {/* Front Face (0 deg) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl p-6 bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.07)] flex flex-col justify-between overflow-hidden">
                    {/* Top Accent Line (Slim 2px Depth) */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] ${getEmailBorderColor(item.id)}`} />

                    <div className="space-y-3">
                      {/* Platform Icon & Badge */}
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center justify-center">
                          {renderOfficialEmailLogo(item.id)}
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A3B71] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-black tracking-tight text-slate-900 group-hover:text-[#1A3B71] transition-colors leading-tight pt-1">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    {/* Front Bottom Action Prompt */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1A3B71]">
                      <span>Hover to Flip &amp; Deploy</span>
                      <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-3 h-3 text-[#1A3B71]" />
                      </div>
                    </div>
                  </div>

                  {/* Back Face (180 deg) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl p-6 bg-gradient-to-br from-[#0A2647] via-[#1A3B71] to-[#07192F] text-white border border-[#134B70] flex flex-col justify-between shadow-2xl overflow-hidden">
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] font-bold">
                          Cloud Tenant Setup
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                        {item.title}
                      </h4>

                      <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-sans">
                        Authenticated SPF/DKIM/DMARC records, spam filtering, and zero-downtime cloud mail routing.
                      </p>
                    </div>

                    {/* Back Action Button (Navigates to Services) */}
                    <div className="relative z-10 pt-3 border-t border-white/15">
                      <Link
                        href="/services"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-[#1A3B71] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                      >
                        <span>Deploy {item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C11E23]" />
                      </Link>
                    </div>
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
