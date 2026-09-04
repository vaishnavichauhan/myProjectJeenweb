"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CampaignToolsGrid() {
  const allTools = [
    {
      id: "meta-suite",
      name: "Meta Business Suite",
      badge: "Ad Manager Pro",
      purpose: "Facebook and Instagram ad management, audience modeling, and dynamic catalog sales scaling."
    },
    {
      id: "linkedin-ads",
      name: "LinkedIn Campaign Manager",
      badge: "InMail & Lead Gen",
      purpose: "B2B targeted advertising, matched audiences, and high-value lead gen form campaigns."
    },
    {
      id: "google-ads",
      name: "Google Ads",
      badge: "Search & Intent",
      purpose: "Search, display, YouTube video ads, and remarketing campaigns capturing peak commercial intent."
    },
    {
      id: "meta-capi",
      name: "Meta Pixel & CAPI",
      badge: "Server-Side Tracking",
      purpose: "Conversion API server-side integration for iOS 14+ proof tracking, accurate data matching, and conversion lift."
    },
    {
      id: "gtm",
      name: "Google Tag Manager",
      badge: "Event Tracking",
      purpose: "Containerized pixel deployment, custom event trigger mapping, and unified cross-channel conversion tags."
    },
    {
      id: "ga4",
      name: "Google Analytics 4",
      badge: "Cross-Platform Analytics",
      purpose: "Multi-touch attribution, user journey pathing, and ROAS performance analytics with BigQuery data export."
    },
    {
      id: "canva",
      name: "Canva Pro",
      badge: "Rapid Creative",
      purpose: "Brand-aligned static post graphics, stories, banners, and rapid-turnaround promotional visual assets."
    },
    {
      id: "video-tools",
      name: "CapCut & Premiere Pro",
      badge: "Viral Video",
      purpose: "Vertical short-form video editing, hook-centric pacing, animated captions, and sound-synced reels."
    },
    {
      id: "semrush",
      name: "SEMrush & Ahrefs",
      badge: "Competitor Intelligence",
      purpose: "Competitive social ad research, trending keyword discovery, and hashtag performance benchmark analysis."
    },
    {
      id: "hootsuite",
      name: "Hootsuite / Buffer",
      badge: "Omnichannel Scheduling",
      purpose: "Multi-channel calendar publishing, unified community inbox management, and automated content queue distribution."
    }
  ];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 font-sans">
          Tools & Technologies Behind Our Campaigns
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
          The 10 enterprise platforms driving audience intelligence, asset production, server-side attribution, and performance scaling.
        </p>
      </div>

      {/* Tools & Technologies Table Format (Elevated Modern Rows & Columns) */}
      <div className="rounded-3xl border border-slate-200/90 bg-white shadow-lg shadow-slate-200/50 overflow-hidden relative">
        {/* Top Decorative Gradient Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0B1E38] via-[#0284C7] to-[#C11E23]" />

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/90 bg-gradient-to-r from-slate-50 via-slate-50/80 to-slate-50">
                <th className="py-4.5 px-6 sm:px-8 text-xs font-mono font-bold tracking-wider text-[#1A3B71] uppercase sm:w-2/5 min-w-[260px]">
                  Platform & Tool
                </th>
                <th className="py-4.5 px-6 sm:px-8 text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
                  Campaign Purpose & Capability
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {allTools.map((tool, index) => (
                <motion.tr
                  key={tool.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="group hover:bg-blue-50/40 transition-all duration-200 relative border-l-4 border-transparent hover:border-[#1A3B71]"
                >
                  {/* Column 1: Platform & Tool */}
                  <td className="py-5 px-6 sm:px-8 align-middle">
                    <div className="flex items-start gap-3.5">
                      {/* Numeric Index Badge */}
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#1A3B71] transition-colors mt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-tight font-sans group-hover:text-[#1A3B71] transition-colors">
                            {tool.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
                        </div>
                        <div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-50 text-[#1A3B71] border border-blue-200/70 group-hover:bg-blue-100/70 transition-colors">
                            {tool.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Column 2: Campaign Purpose & Capability */}
                  <td className="py-5 px-6 sm:px-8 align-middle">
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-sans group-hover:text-slate-900 transition-colors">
                      {tool.purpose}
                    </p>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
