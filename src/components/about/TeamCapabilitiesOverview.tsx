"use client";

import React from "react";
import { Code2, Cloud, Search, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function TeamCapabilitiesOverview() {
  const pods = [
    {
      icon: Code2,
      badge: "Software & Custom ERP",
      title: "Custom Software and ERP Development Team",
      desc: "Our software developers build business applications and ERP systems from scratch — in PHP, Laravel, and Node.js — designed around how each client's business actually runs. They do not start from a template and adjust it. They start from your workflow and build upward from there. Every system goes through proper testing before it is handed over, and the code is written in a clean, modular way so that adding new features later is straightforward and does not break what is already working.",
      stack: ["PHP", "Laravel", "Node.js", "PostgreSQL", "Custom ERP"],
      accentBorder: "group-hover:border-blue-500",
      topAccent: "from-blue-600 to-cyan-500",
      link: "/services/custom-software"
    },
    {
      icon: Cloud,
      badge: "Cloud & Enterprise Systems",
      title: "Cloud and Business Email Team",
      desc: "This team handles the full setup and migration for Google Workspace, Microsoft 365, Zoho Mail, Rediff Business, Titan Email, and dedicated enterprise mail servers. They manage DNS records, security settings, tenant migrations, and everything else that goes into a proper email environment. The goal is always the same — a business email setup that works reliably from day one and does not create ongoing problems for the team using it.",
      stack: ["Google Workspace", "Microsoft 365", "Titan Mail", "DMARC / DNS"],
      accentBorder: "group-hover:border-emerald-500",
      topAccent: "from-[#073F8A] to-[#2B79D8]",
      link: "/services/hosting#email-solutions"
    },
    {
      icon: Search,
      badge: "Search & Generative AI",
      title: "SEO, Digital Marketing, and Social Media Team",
      desc: "Our marketing team handles search visibility across traditional search engines and AI-powered platforms. They set up schema markup, structure content for featured snippets and AI answer engines, run technical SEO audits, and manage paid campaigns on search and social platforms. Everything is built around what will actually bring the right kind of traffic to a client's business—not just what will make a report look good at the end of the month.",
      stack: ["AEO / GEO Schema", "Google AI Overviews", "Meta Ads", "ROAS Audits"],
      accentBorder: "group-hover:border-red-500",
      topAccent: "from-red-600 to-amber-500",
      link: "/services/seo"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-slate-200" id="team-capabilities">
      
      {/* Background Ambient Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 3 Header (Left Title + Right Description) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                The Teams Doing the Work
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight font-sans">
              Skilled People Working Across <br />
              <span className="text-[#073F8A]">Every Service We Offer</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-md md:text-right">
            Practical engineering rigor and dedicated domain specialists delivering dependable digital tools for businesses across Western India.
          </p>
        </div>

        {/* 3 Main Pod Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pods.map((pod, idx) => {
            const Icon = pod.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-[#F8FAFC] rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden ${pod.accentBorder}`}
              >
                {/* Top Colored Gradient Stripe with Reduced Depth */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pod.topAccent}`} />

                <div className="space-y-6">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-[#073F8A] group-hover:scale-110 group-hover:bg-[#073F8A] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      {pod.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#073F8A] transition-colors leading-snug font-sans">
                      {pod.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans">
                      {pod.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Tech Stack Tags */}
                <div className="mt-8 pt-5 border-t border-slate-200/70 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pod.stack.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-[10px] font-mono font-medium text-slate-700 shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={pod.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#073F8A] group-hover:text-[#E11D48] transition-colors"
                  >
                    <span>Explore Department Services</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
