"use client";

import React, { useState } from "react";
import { FAQS, FaqItem } from "@/lib/siteData";
import SectionHeader from "../common/SectionHeader";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

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

  const filteredFaqs = faqsToDisplay.filter((faq) => {
    const qText = faq.question || faq.q || "";
    const aText = faq.answer || faq.a || "";
    return (
      qText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      aText.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle}
          centered={true}
        />

        {/* FAQ Search Filter */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. ERP, Hosting, Backups, SEO)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#16325B] focus:bg-white transition-all shadow-2xs"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const q = faq.question || faq.q;
            const a = faq.answer || faq.a;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#16325B] flex-shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#D32F2F]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-500">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Contact our engineering desk directly for immediate answers.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
