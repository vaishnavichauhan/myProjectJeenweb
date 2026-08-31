import React from "react";
import { GLOBAL_COUNTRIES } from "@/lib/siteData";
import { Globe, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

export default function GlobalFootprint() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="global-footprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Geographic Reach"
          title="Corporate Operations Across The World"
          subtitle="From our dual engineering hubs in Vadodara, Gujarat, we architect and maintain mission-critical IT infrastructure for corporate clients across 12 countries."
          centered={true}
        />

        {/* Global Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mb-12">
          {GLOBAL_COUNTRIES.map((country) => (
            <div
              key={country.name}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <span className="text-2xl mb-2">{country.flag}</span>
              <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                {country.name}
              </div>
              <span className="text-[10px] text-slate-500 mt-1 font-medium leading-tight">
                {country.region}
              </span>
            </div>
          ))}
        </div>

        {/* Global Operations Commitment Banner */}
        <div className="p-6 rounded-2xl bg-[#0F223D] text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-[#16325B] text-white flex-shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Cross-Timezone SLA & Multi-Regional DNS</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Low-latency edge caching and 24/7 technical monitoring across USA, EMEA, Middle East, and Asia-Pacific.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-4 py-2 rounded-xl border border-emerald-500/30 whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4" />
            <span>99.9% Network Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
