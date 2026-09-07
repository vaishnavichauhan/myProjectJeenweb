"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaqItem } from "@/lib/siteData";
import { ALL_HOME_FAQ_SECTIONS, FaqCategorySection } from "@/lib/faqData";
import {
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Layout,
  Cpu,
  Server,
  Globe,
  Search,
  Share2,
  Building2,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/MotionPrimitives";

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
  // If customFaqs is provided (e.g. from individual service and about pages), render single-column accordion without filters.
  // Otherwise, render full two-column layout with all website FAQ sections on the left and dynamic content on the right.
  const isCategorizedMode = !customFaqs;

  const [activeSectionId, setActiveSectionId] = useState<string>("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeSection =
    ALL_HOME_FAQ_SECTIONS.find((sec) => sec.id === activeSectionId) ||
    ALL_HOME_FAQ_SECTIONS[0];

  const currentFaqs = isCategorizedMode
    ? activeSection.faqs
    : customFaqs || [];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return ShieldCheck;
      case "Layout":
        return Layout;
      case "Cpu":
        return Cpu;
      case "Server":
        return Server;
      case "Globe":
        return Globe;
      case "Search":
        return Search;
      case "Share2":
        return Share2;
      case "Building2":
        return Building2;
      default:
        return HelpCircle;
    }
  };

  return (
    <section
      className="pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white relative overflow-hidden border-b border-slate-200/80"
      id="faqs"
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${isCategorizedMode ? "max-w-7xl" : "max-w-4xl"}`}>
        
        {/* Section Header with Red Bottom Border Tag */}
        <FadeIn direction="up" distance={20} className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
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
        </FadeIn>

        {isCategorizedMode ? (
          /* ==========================================================
             Home Page & Hub Mode: Left Side Sections + Right Side FAQs
             ========================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Mobile / Tablet Horizontal Category Scroll (Hidden on lg screens) */}
            <div className="lg:hidden col-span-1 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2">
              <div className="flex items-center gap-2.5 min-w-max">
                {ALL_HOME_FAQ_SECTIONS.map((section) => {
                  const isSelected = activeSection.id === section.id;
                  const Icon = getCategoryIcon(section.iconName);

                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSectionId(section.id);
                        setOpenIndex(0);
                      }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        isSelected
                          ? "bg-[#1A3B71] text-white shadow-md shadow-[#1A3B71]/20"
                          : "bg-[#FAF8F5] text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{section.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Left-Side Vertical Sections List (4 columns) */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-4 space-y-2.5 sticky top-24">
              {ALL_HOME_FAQ_SECTIONS.map((section) => {
                const isSelected = activeSection.id === section.id;
                const Icon = getCategoryIcon(section.iconName);

                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSectionId(section.id);
                      setOpenIndex(0);
                    }}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between gap-3 group cursor-pointer ${
                      isSelected
                        ? "bg-[#1A3B71] text-white shadow-lg shadow-[#1A3B71]/20 -translate-y-0.5"
                        : "bg-[#FAF8F5] text-slate-800 hover:bg-slate-100/90 border border-slate-200/70"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected
                            ? "bg-white/15 text-white"
                            : "bg-white text-[#1A3B71] border border-slate-200/80 group-hover:bg-[#1A3B71] group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div
                          className={`text-xs sm:text-sm font-bold truncate ${
                            isSelected ? "text-white" : "text-slate-900 group-hover:text-[#1A3B71]"
                          }`}
                        >
                          {section.title}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${
                        isSelected ? "text-white translate-x-0.5" : "text-slate-400 group-hover:text-slate-700"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right-Side FAQ Accordion Display (8 columns) */}
            <div className="lg:col-span-8 xl:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4"
                >
                  {/* Accordion FAQ Cards List */}
                  {currentFaqs.map((faq, index) => {
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
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                              isOpen
                                ? "bg-[#C11E23] text-white shadow-2xs"
                                : "bg-white text-slate-600 group-hover:bg-slate-200 border border-slate-200/80"
                            }`}
                          >
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="faq-content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans border-t border-slate-200/60">
                                <p className="pl-7 sm:pl-8">{a}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        ) : (
          /* ==========================================================
             Service / About Page Mode: Clean Direct Accordion (Filter Removed)
             ========================================================== */
          <div className="space-y-4">
            {currentFaqs.map((faq, index) => {
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
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#C11E23] text-white shadow-2xs"
                          : "bg-white text-slate-600 group-hover:bg-slate-200 border border-slate-200/80"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="faq-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans border-t border-slate-200/60">
                          <p className="pl-7 sm:pl-8">{a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
