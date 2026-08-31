"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CORE_SERVICES_PART1,
  EMAIL_SOLUTIONS_PART2
} from "@/lib/siteData";
import {
  Globe,
  Server,
  Layout,
  Cpu,
  Search,
  TrendingUp,
  Mail,
  ShieldCheck,
  Send,
  Layers,
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import ConsultationModal from "../common/ConsultationModal";

export default function ServicesGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Custom ERP / Software Development");

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Server":
        return Server;
      case "Layout":
        return Layout;
      case "Cpu":
        return Cpu;
      case "Search":
        return Search;
      case "TrendingUp":
        return TrendingUp;
      default:
        return Cpu;
    }
  };

  const getEmailIcon = (iconName: string) => {
    switch (iconName) {
      case "Mail":
        return Mail;
      case "ShieldCheck":
        return ShieldCheck;
      case "Send":
        return Send;
      case "Layers":
        return Layers;
      case "Zap":
        return Zap;
      case "Server":
        return Server;
      default:
        return Mail;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Services Header */}
        <SectionHeader
          badge="What We Do"
          title="Our Core Services"
          subtitle="From enterprise domain management and NVMe hosting to custom ERP builds and AI-driven search dominance—clean, licensed digital systems designed for high-performance business operations."
          centered={true}
        />

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {CORE_SERVICES_PART1.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-100 text-[#16325B] group-hover:bg-[#16325B] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                      {service.tags[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.fullDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16325B] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link & Fast Consult Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16325B] group-hover:text-[#D32F2F] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => {
                      setSelectedService(service.title);
                      setModalOpen(true);
                    }}
                    className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    Consult
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Email Solutions Grid */}
        <div id="business-email" className="pt-10 border-t border-slate-200">
          <SectionHeader
            badge="Enterprise Email Infrastructure"
            title="Business Email Solutions"
            subtitle="Enterprise-grade email setups, cloud tenant migrations, and security authentications configured for absolute reliability."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMAIL_SOLUTIONS_PART2.map((item) => {
              const Icon = getEmailIcon(item.icon);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-[#0F223D] text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#16325B] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {item.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedService(`Business Email: ${item.title}`);
                        setModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16325B] hover:text-[#D32F2F] transition-colors"
                    >
                      <span>Deploy {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </section>
  );
}
