import React from "react";
import { CORE_METRICS } from "@/lib/siteData";
import { Award, CheckCircle2, TrendingUp, Users, Sparkles } from "lucide-react";

export default function MetricsSection() {
  const metricIcons = [Award, TrendingUp, Users, CheckCircle2];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 lg:p-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          {/* Redesigned Modern Executive Header Badge (Replaced Pill Style) */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#D32F2F] to-[#16325B]/40"></span>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0F223D] text-white rounded-lg text-xs font-semibold tracking-wider uppercase shadow-sm border border-slate-700/60">
              <Sparkles className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span className="text-slate-100 font-mono">Proven Performance Since 1999</span>
            </div>
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-[#D32F2F] to-[#16325B]/40"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F223D] mt-2 tracking-tight">
            Measured Success Over Two Decades
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Real enterprise numbers backed by reliable engineering and long-term client relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_METRICS.map((metric, idx) => {
            const Icon = metricIcons[idx];
            return (
              <div
                key={metric.label}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200/70 hover:bg-slate-100/70 hover:border-[#16325B]/30 transition-all duration-200 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-[#16325B]/10 text-[#16325B] group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#16325B] transition-colors">
                    {metric.highlight}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#0F223D] group-hover:text-[#16325B] tracking-tight">
                  {metric.value}
                </div>

                <div className="text-sm font-bold text-slate-800 mt-1">
                  {metric.label}
                </div>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
