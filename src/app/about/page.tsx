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
import JsonLd from "@/components/common/JsonLd";

export const metadata = {
  title: "Company Overview | Jeenweb Technologists Vadodara",
  description:
    "Empowering modern enterprises with reliable IT systems, custom software, and managed cloud infrastructure from Vadodara, Gujarat since 2000.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "Company Overview | Jeenweb Technologists Vadodara",
    description:
      "Empowering modern enterprises with reliable IT systems, custom software, and managed cloud infrastructure from Vadodara, Gujarat.",
    url: "https://jeenweb.com/about",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/company-overview-arch.jpg",
        width: 1200,
        height: 630,
        alt: "Jeenweb Company Overview"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Overview | Jeenweb Technologists Vadodara",
    description:
      "Empowering modern enterprises with reliable IT systems, custom software, and managed cloud infrastructure from Vadodara.",
    images: ["/images/company-overview-arch.jpg"]
  }
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://jeenweb.com/about/#webpage",
      url: "https://jeenweb.com/about",
      name: "About Jeenweb Technologists Pvt. Ltd.",
      description:
        "Overview of Jeenweb Technologists Pvt. Ltd., an enterprise IT, custom software engineering, and cloud infrastructure company in Vadodara, Gujarat."
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://jeenweb.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://jeenweb.com/about"
        }
      ]
    }
  ]
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
      <JsonLd data={aboutPageSchema} />
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "About Us", href: "/about" }, { label: "Company Overview" }]} />
        </div>
      </div>

      {/* Company Overview Hero Section with Highlighted Skyscraper Architecture Background */}
      <section className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200 min-h-[480px] sm:min-h-[500px] lg:min-h-[560px] flex items-center">
        
        {/* Full Background Image with Highlight Enhancements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/company-overview-arch.jpg"
            alt="Company Overview Corporate Skyscraper Architecture"
            fill
            className="object-cover object-right lg:object-center contrast-[1.08] saturate-[1.2] brightness-[1.03]"
            priority
          />
          {/* Subtle Ambient Sky-Blue Highlights on Architecture */}
          <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-sky-400/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-gradient-to-b from-sky-300/15 via-transparent to-slate-900/10 pointer-events-none" />

          {/* Smooth White Gradient Fade: Keeps Left Text Readable While Leaving 65%+ of Background Image Fully Highlighted & Visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-35% to-transparent" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-7 bg-white/75 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-6 sm:p-0 rounded-2xl">
            
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-950/20 hover:scale-[1.02] active:scale-95"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 shadow-2xs active:scale-95"
              >
                <span>Meet Leadership Team</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
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
