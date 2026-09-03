"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import {
  CORE_SERVICES_PART1,
  EMAIL_SOLUTIONS_PART2
} from "@/lib/siteData";
import {
  Globe,
  Server,
  Code2,
  Cpu,
  Search,
  Share2,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowUpRight
} from "lucide-react";

export default function ServicesPage() {  const [selectedService, setSelectedService] = useState("Enterprise Cloud & Software Solutions");

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Server":
        return Server;
      case "Code2":
        return Code2;
      case "Cpu":
        return Cpu;
      case "Search":
        return Search;
      case "Share2":
        return Share2;
      default:
        return Server;
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services" }
            ]}
          />
        </div>
      </div>

      {/* Hero Header Banner with Vibrant Sapphire Gradient */}
      <section className="bg-gradient-to-br from-[#0A2647] via-[#134B70] to-[#07192F] text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-700/60">
        {/* Subtle Checkered Grid Accent (64px by 64px) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#00E5FF] text-xs font-mono font-bold uppercase tracking-wider border border-[#00E5FF]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Full-Spectrum IT &amp; Web Infrastructure</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Enterprise Digital, Cloud &amp; Engineering Services
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              From licensed domain registries &amp; ultra-fast NVMe servers to custom ERP software, business email suites, and AI-driven organic search dominance.
            </p>
          </div>
        </div>

        {/* Ambient Vibrant Glow Flares */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#E11D48]/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Section 1: Core Services Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="core-services">
        <SectionHeader
          badge="01 / Core Capabilities"
          title="Core Infrastructure & Development Services"
          subtitle="Battle-tested architectures engineered with genuine licensed code and robust multi-region SLAs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES_PART1.map((service) => {
            const Icon = getServiceIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-[#073F8A]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#073F8A]/10 text-[#073F8A] group-hover:bg-[#073F8A] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {service.tags[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#073F8A] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="text-xs font-bold text-[#073F8A] group-hover:text-[#E11D48] transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider font-mono"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => {
                      setSelectedService(service.title);
                      window.location.href = "/contact#get-in-touch";
                    }}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-[#073F8A] text-slate-700 hover:text-white transition-colors cursor-pointer"
                    aria-label={`Consult on ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Business Email Solutions */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200" id="business-email">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="02 / Business Email"
            title="Corporate Email & Cloud Collaboration"
            subtitle="Authoritative email migrations, spam filtering, SPF/DKIM/DMARC authentications, and 99.9% uptime guarantees."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {EMAIL_SOLUTIONS_PART2.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-[#073F8A]/40 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E11D48]">
                      {item.platform}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Licensed
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#073F8A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setSelectedService(item.title);
                      window.location.href = "/contact#get-in-touch";
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#073F8A] hover:bg-[#052C61] text-white font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Deploy Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection />

      {/* Consultation Modal */}
          </main>
  );
}
