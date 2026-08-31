import React from "react";
import { WHY_CHOOSE_US } from "@/lib/siteData";
import {
  ShieldCheck,
  Code2,
  Users,
  Sparkles,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";

export default function WhyChooseUs() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return ShieldCheck;
      case "Code2":
        return Code2;
      case "Users":
        return Users;
      case "Sparkles":
        return Sparkles;
      case "BarChart3":
        return BarChart3;
      case "CheckCircle2":
        return CheckCircle2;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#0B192C] text-white relative overflow-hidden" id="why-choose-us">
      {/* Background Subtle Tech Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Why Choose Us"
          title="Why Corporate Brands Anchored in Vadodara Choose Us"
          subtitle="We don't take shortcuts that look convenient today but create vulnerabilities tomorrow. Here is why enterprise clients have trusted us for 26+ years."
          centered={true}
          theme="dark"
        />

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const Icon = getPillarIcon(pillar.icon);
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#0F223D] border border-slate-800 hover:border-slate-700 hover:bg-[#132845] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:bg-[#D32F2F] group-hover:border-[#D32F2F] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-red-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
