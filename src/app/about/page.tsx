import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import CorporatePurposeSection from "@/components/about/CorporatePurposeSection";
import AboutMetricsStrip from "@/components/about/AboutMetricsStrip";
import HowWeThinkZigzag from "@/components/about/HowWeThinkZigzag";

export const metadata = {
  title: "Company Overview | Jeenweb Technologists Vadodara",
  description:
    "Empowering modern enterprises with reliable IT systems, custom software, and managed cloud infrastructure from Vadodara, Gujarat.",
};

export default function CompanyOverviewPage() {
  const aboutFaqs = [
    {
      q: "Which types of businesses do you work with most?",
      a: "We have worked across many different sectors, but we work especially well with manufacturing companies, logistics businesses, schools and colleges, and supply and distribution companies across Gujarat. These are businesses with large amounts of internal records, busy teams, and a real need for systems that hold up under daily pressure. We do not apply the same approach to every industry — we look at each business individually and build around what that specific operation actually needs."
    },
    {
      q: "Do you look at what we already have before suggesting anything new?",
      a: "Yes, always. Before we recommend any new software or system, we look at your current setup — your network, the devices your team uses, and how everything is running right now. We are not here to sell you something that creates new problems or pushes you into buying expensive equipment you do not need. Whatever we suggest is based on what will realistically work well in your actual environment."
    },
    {
      q: "Why do most of your clients stay with you for so long?",
      a: "Because we do not disappear after a project goes live. We run regular backups, keep an eye on security, respond quickly when something goes wrong, and stay in touch without waiting for clients to chase us. We are upfront when there is a problem and clear about how we are fixing it. Most of our clients have been with us for years — some for much longer — because that kind of consistent, honest support is genuinely hard to find."
    },
    {
      q: "Can we add new features to our software after it is already live?",
      a: "Yes. We build everything in separate, clean modules specifically so that adding new features later is not a painful process. If your business grows, opens a new branch, or needs a new tool added, we can build that in without having to redo everything from scratch. The system stays stable, and the new additions fit in properly."
    },
    {
      q: "Is all the work done by your own team in Vadodara?",
      a: "Yes, completely. Every part of the process — planning, design, coding, database work, cloud setup, and testing — is done by our own team inside our Vadodara offices. We do not pass work off to outside contractors or third parties. You always know exactly who is working on your project and where that work is being done."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "About Us", href: "/about" }, { label: "Company Overview" }]} />
        </div>
      </div>

      {/* Modern Curved Arc Hero Section (Matching Reference Design - Full Height Top-Aligned) */}
      <section className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200/80 min-h-[540px] lg:min-h-[580px] flex items-center">
        
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/[0.02] rounded-full blur-3xl pointer-events-none" />

        {/* Right Full-Height Sweeping Arc & Skyscraper Image (Flush with Top & Right Edges) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[50%] xl:w-[48%] h-full hidden lg:block overflow-hidden pointer-events-none z-0">
          
          {/* Sweeping Blue Arc Ribbon Stroke */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M 20,0 C 24,36 50,76 100,88 L 100,95 C 47,82 20,40 16,0 Z"
                fill="#2B79D8"
              />
            </svg>
          </div>

          {/* Full-Height Skyscraper Image (Starts at absolute top edge) */}
          <div
            className="relative w-full h-full overflow-hidden group pointer-events-auto"
            style={{
              clipPath: "ellipse(112% 100% at 100% 0%)"
            }}
          >
            <Image
              src="/images/company-overview-arch.jpg"
              alt="Company Overview Corporate Skyscraper Architecture"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />

            {/* Soft Specular Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Left Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading, Content & CTA (6 cols on lg) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-7 max-w-xl">
              
              {/* H1 Tag */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073F8A] tracking-tight leading-[1.12]">
                  Empowering Modern Enterprises with Reliable IT Systems
                </h1>
              </div>

              {/* Subheading & Body Content */}
              <div className="space-y-3.5 font-sans">
                <p className="font-bold text-slate-800 text-base sm:text-lg leading-snug">
                  Secure operations, managed databases, and strong digital marketing, all from Vadodara.
                </p>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Building a strong digital foundation is not just about writing code or putting up a website. It is about understanding how your business actually runs — where things slow down, where data gets mishandled, and where your team wastes time on work that could easily be automated. We build custom software and secure IT systems for businesses that want to run smoother, protect their data, and show up properly online. If your current setup is holding your business back, we are the team that fixes that.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  href="#purpose"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#073F8A] hover:bg-[#052C61] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-900/20 hover:scale-[1.02]"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about/team"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 shadow-2xs"
                >
                  <span>Meet Leadership Team</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

            </div>

            {/* Mobile-only responsive image showcase */}
            <div className="lg:hidden relative h-[300px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 mt-4">
              <Image
                src="/images/company-overview-arch.jpg"
                alt="Company Overview Corporate Skyscraper Architecture"
                fill
                className="object-cover object-center"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Purpose (Animated Emerge-from-Center Section) */}
      <CorporatePurposeSection />

      {/* Counting Metrics Strip (Auto-Increment, Linear Gradient, Borderless, Vertical Dividers) */}
      <AboutMetricsStrip />

      {/* Section 4: How We Think and How We Work (Technobits Digital Inspired Zigzag Timeline) */}
      <HowWeThinkZigzag />

      {/* FAQs */}
      <FaqSection
        customFaqs={aboutFaqs}
        badge="Company FAQs"
        title="Frequently Asked Questions About Jeenweb"
        subtitle="Transparent answers regarding our engineering standards, local Vadodara presence, and long-term client engagements."
      />
    </main>
  );
}
