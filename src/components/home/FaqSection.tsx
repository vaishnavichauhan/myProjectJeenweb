"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQS, FaqItem } from "@/lib/siteData";
import { Plus, Minus, Search, MessageSquare, ArrowRight, ShieldQuestion } from "lucide-react";

interface FaqSectionProps {
  customFaqs?: FaqItem[];
  badge?: string;
  title?: string;
  subtitle?: string;
}

export default function FaqSection({
  customFaqs,
  badge = "Frequently Asked Questions",
  title = "Clear Answers to Core Inquiries",
  subtitle = "Direct, transparent answers regarding IT migrations, genuine licensed software, AI search ranking, and our Vadodara engineering processes."
}: FaqSectionProps) {
  const faqsToDisplay = customFaqs || FAQS;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General & IT Migration" },
    { id: "software", label: "Custom Software & ERP" },
    { id: "seo", label: "AI SEO & GEO" }
  ];

  const filteredFaqs = faqsToDisplay.filter((faq) => {
    const qText = faq.question || faq.q || "";
    const aText = faq.answer || faq.a || "";
    const matchesSearch =
      qText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      aText.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white relative overflow-hidden border-b border-slate-200/80" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Red Bottom Border Tag */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                {badge}
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Search Bar & Category Filter Controls */}
        <div className="mb-10 space-y-4 max-w-2xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g. ERP, Migration, Hosting, SEO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#FAF8F5] border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1A3B71] focus:bg-white focus:ring-2 focus:ring-[#1A3B71]/10 transition-all shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#1A3B71] text-white shadow-xs"
                      : "bg-[#FAF8F5] text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion FAQ Cards List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const q = faq.question || faq.q;
            const a = faq.answer || faq.a;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#FAF8F5] border-l-4 border-l-[#C11E23] shadow-md ring-1 ring-slate-200/90"
                    : "bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] border border-transparent hover:border-slate-200/80"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <span
                      className={`text-xs sm:text-sm font-mono font-bold flex-shrink-0 transition-colors ${
                        isOpen ? "text-[#C11E23]" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors leading-snug ${
                        isOpen ? "text-[#1A3B71]" : "text-slate-900 group-hover:text-[#1A3B71]"
                      }`}
                    >
                      {q}
                    </span>
                  </div>

                  {/* Toggle Button Badge */}
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#C11E23] text-white rotate-180 shadow-2xs"
                        : "bg-white text-slate-600 group-hover:bg-slate-200 border border-slate-200/80"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans border-t border-slate-200/60 animate-fadeIn">
                    <p className="pl-7 sm:pl-8">{a}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-10 text-center bg-[#FAF8F5] rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-3">
              <ShieldQuestion className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="font-semibold">
                No matching questions found for &ldquo;{searchQuery}&rdquo;.
              </p>
              <p className="text-slate-500 text-xs">
                Need specific technical clarification? Reach out directly to our engineering desk.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Support Callout Strip */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#0F223D] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#1A3B71] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
              <MessageSquare className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                Have a unique technical inquiry?
              </div>
              <div className="text-xs text-slate-300">
                Speak directly with our Vadodara engineering consultants.
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex-shrink-0"
          >
            <span>Consult Technical Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
