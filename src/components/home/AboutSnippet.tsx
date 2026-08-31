import React from "react";
import Link from "next/link";
import { ShieldCheck, Users, Building, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

export default function AboutSnippet() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="about-snippet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="Who We Are"
              title="About Jeenweb Technologists"
              subtitle="Founded in Vadodara and grown across Gujarat, Jeenweb Technologists Pvt. Ltd. has been delivering authentic IT and digital solutions since 2000."
              className="mb-6"
            />

            <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              <p>
                We work with businesses that need a reliable technical partner—someone who actually understands what&apos;s at stake when a system fails, software doesn&apos;t fit, or a website isn&apos;t bringing in results.
              </p>
              <p>
                Our team covers a wide range—software engineers, web developers, search specialists, and cloud and email infrastructure people—all working together under one roof. You don&apos;t get passed around between vendors. You get one team that handles everything and stays accountable for how it performs.
              </p>
              <p>
                We&apos;ve worked across manufacturing, retail, healthcare, logistics, education, and several other sectors. Every project starts with understanding your business first. We look at how your team works, where your current setup is falling short, and what a practical solution actually looks like for you. Then we build it—using only licensed software, clean code, and a process that keeps you informed from start to finish.
              </p>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Single-Roof Accountability in Vadodara</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800">
                <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Pirated Tools or Cracked Code</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800">
                <Users className="w-4 h-4 text-[#16325B] flex-shrink-0" />
                <span>Physical Workflow-First Architecture</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800">
                <Building className="w-4 h-4 text-[#16325B] flex-shrink-0" />
                <span>Dual Offices & ETS PROP Advisory</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#16325B] hover:bg-[#0F223D] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow"
              >
                <span>Read Full Company Overview</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Meet Leadership Team</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Trust Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#0F223D] text-white rounded-2xl p-8 shadow-xl relative border border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-300 text-xs font-bold uppercase tracking-wider mb-6 border border-red-500/30">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                Vadodara Anchor Since 2000
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-extrabold text-white tracking-tight">26+ Years</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
                    Continuous Technology Evolution
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    From basic web hosting at the turn of the millennium to enterprise ERP systems and AI-search ranking models in 2026.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F] mt-1.5 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white block font-bold">Utpal Shah (Founder):</strong>
                      <span className="text-slate-300">26 years of foundational integrity and long-term tech stability in Gujarat.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white block font-bold">Tatvam Shah (Partner):</strong>
                      <span className="text-slate-300">Parul Univ Wall of Fame, official JITO Gujarat IT Consultant.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white block font-bold">Exita Shah (Co-Founder):</strong>
                      <span className="text-slate-300">Engineering-backed search dominance (Technical SEO, GEO, AEO, AIO).</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                    <strong className="text-white block mb-1">Gujarat Manufacturing & SME Focus:</strong>
                    Custom software adapted to real workplace routines without per-seat licensing penalties.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
