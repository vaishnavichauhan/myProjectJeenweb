import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import { TIMELINE_MILESTONES } from "@/lib/siteData";
import { History, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2 } from "lucide-react";

import HistoryHero from "@/components/about/HistoryHero";
import TimelineChevronTrack from "@/components/about/TimelineChevronTrack";
import HistoryValueProposition from "@/components/about/HistoryValueProposition";

export const metadata = {
  title: "Company History & Growth Timeline | Jeenweb Vadodara",
  description:
    "Explore the 27-year growth timeline of Jeenweb Technologists, from web services in 2000 to custom software, cloud solutions, and multi-office setups in Vadodara.",
};

export default function HistoryPage() {
  const historyFaqs = [
    {
      q: "What actually changed after the 2016 merger of Jeen Info Tech and Jeeninfo Soft?",
      a: "The biggest change was that our clients stopped having to deal with two separate teams for related work. Before the merger, our web infrastructure people and our software developers operated on separate tracks. After merging into Jeenweb Technologists, both teams worked under one management structure with shared processes. It meant faster project delivery, fewer gaps in communication, and a single team accountable for the full scope of what a client needed—from hosting to custom software to digital marketing."
    },
    {
      q: "Why did you wait until 2021 and 2022 to bring in Google Workspace and Microsoft 365?",
      a: "We were already setting up business email before that—using standard POP and IMAP mail servers that worked well for smaller operations. But as our clients grew, those setups started showing their limits. Security requirements increased, teams needed proper collaboration tools, and cloud access became non-negotiable. We waited until we could offer these services through official partner channels — not just reselling a license but actually deploying, migrating, and supporting the full environment properly. Doing it right mattered more to us than doing it first."
    },
    {
      q: "Where did the idea for Project JE come from?",
      a: "Honestly, it came from years of watching businesses struggle with email setups that were either too complicated, poorly configured, or constantly causing delivery problems. We have handled enough email migrations and troubleshooting sessions to know exactly where the pain points are. Project JE is being built to remove those pain points — a dedicated business email platform that is straightforward to set up, reliable in delivery, and easy for any team to manage without needing a technical person looking over their shoulder."
    },
    {
      q: "How does the 2012 workflow change still affect how you work today?",
      a: "The development process we put in place in 2012—analyze, design, test, and deploy—is still the backbone of how every project runs. It has been refined over the years, but the core discipline has not changed. Every piece of software we build goes through structured testing against real-world use cases before it goes live. That process is a big part of why our clients do not come back to us with major bugs or system failures after launch."
    },
    {
      q: "Are both your offices in Vadodara?",
      a: "Yes. Both offices are based in Vadodara, Gujarat. All planning, development, database work, cloud configuration, and client support runs through our in-house teams here. We do not outsource development work or hand projects off to contractors. Everything stays within our own team — which means you always know who is responsible for what, and we stay fully accountable for every part of the work."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "About Us", href: "/about" }, { label: "Company History & Timeline" }]} />
        </div>
      </div>

      {/* Hero Banner (Reyna Inspired Layout with 27 Celebrating Years of Excellence) */}
      <HistoryHero />

      {/* Interactive Chevron Ribbon Timeline Track (Matching Presentation Layout) */}
      <TimelineChevronTrack />

      {/* Section 3: Why Our History Matters When You Work With Us */}
      <HistoryValueProposition />

      {/* History FAQs */}
      <FaqSection
        customFaqs={historyFaqs}
        badge="History & Evolution FAQs"
        title="Frequently Asked Questions on Our Evolution"
        subtitle="Key insights into our foundational decisions, mergers, and long-term milestones in Vadodara."
      />
    </main>
  );
}
