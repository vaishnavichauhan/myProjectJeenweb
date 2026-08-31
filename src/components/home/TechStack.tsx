"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TECH_STACK } from "@/lib/siteData";
import SectionHeader from "../common/SectionHeader";
import { Terminal, CheckCircle2 } from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "backend", label: "Backend & ERP" },
    { id: "frontend", label: "Frontend & Web" },
    { id: "cloud", label: "Cloud & Infrastructure" },
    { id: "database", label: "Databases & Cache" }
  ];

  const filteredTech = TECH_STACK.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "backend") return item.category.includes("Backend") || item.category.includes("Core") || item.category.includes("Concurrency");
    if (activeCategory === "frontend") return item.category.includes("Frontend") || item.category.includes("Web") || item.category.includes("CMS");
    if (activeCategory === "cloud") return item.category.includes("Cloud") || item.category.includes("Containerization");
    if (activeCategory === "database") return item.category.includes("DB") || item.category.includes("Cache");
    return true;
  });

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technology Stack"
          title="Tools and Technologies We Use"
          subtitle="We engineer solutions with battle-tested enterprise frameworks and high-security cloud architectures—never vulnerable templates or unverified scripts."
          centered={true}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#16325B] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid with Actual Brand Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 text-center flex flex-col items-center justify-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-2 mb-3 group-hover:scale-105 transition-all">
                <Image
                  src={tech.iconPath}
                  alt={`${tech.name} logo`}
                  width={32}
                  height={32}
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                {tech.name}
              </div>
              <span className="text-[10px] font-semibold text-slate-500 mt-0.5 uppercase tracking-wider">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Architecture Guarantee Strip */}
        <div className="mt-12 p-6 rounded-xl bg-[#0F223D] text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-lg bg-red-600/20 border border-red-500/30 text-red-300 flex-shrink-0">
              <Terminal className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Full Stack Custom Architecture & Strict Version Control</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Every line of code is developed in-house by our Vadodara team with Git CI/CD pipelines and zero third-party vendor leaks.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-4 py-2 rounded-lg border border-emerald-500/30 whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Genuine Licenses</span>
          </div>
        </div>
      </div>
    </section>
  );
}
