import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import { LEADERSHIP_TEAM } from "@/lib/siteData";
import { Users, Award, ShieldCheck, CheckCircle2, ArrowRight, Code2, Cloud, Search } from "lucide-react";

import LeadershipShowcase from "@/components/about/LeadershipShowcase";
import TeamCapabilitiesOverview from "@/components/about/TeamCapabilitiesOverview";
import EngineeringTeamGrid from "@/components/about/EngineeringTeamGrid";

export const metadata = {
  title: "Leadership Team & Executive Board | Jeenweb Vadodara",
  description:
    "Meet the leadership behind Jeenweb Technologists in Vadodara: Utpal Shah, Tatvam Shah, and Exita Shah driving custom software and B2B growth.",
};

export default function LeadershipTeamPage() {
  const teamFaqs = [
    {
      q: "Are the founders actually involved in day-to-day client projects?",
      a: "Yes. Tatvam Shah is directly involved in project scoping, technical decisions, and reviewing work before it goes to a client. Exita Shah personally leads the SEO strategy and digital marketing planning for clients. Neither of them operates at a distance from the actual work. When you work with Jeenweb, you are working with people who are genuinely engaged in what is being delivered—not just overseeing it from above."
    },
    {
      q: "What does Tatvam Shah actually do as a JITO Gujarat IT consultant?",
      a: "He advises businesses and trade organizations across Gujarat on technology decisions that matter — when to move systems to the cloud, how to approach a software upgrade without disrupting operations, how to evaluate digital security risks, and how to plan a digital transformation without overspending or creating new problems. It is a practical advisory role based on real experience, and it keeps him closely connected to what businesses across the region are actually dealing with."
    },
    {
      q: "Does having an engineering background actually make a difference in how you handle digital marketing?",
      a: "It makes a big difference. When Exita and Tatvam review a client's digital marketing setup, they look at it the way an engineer would — checking the technical structure of the website, the schema implementation, the crawlability, the page speed, and how well the foundation supports visibility on both search engines and AI platforms. Most marketing teams focus on content and ads. Our team starts one level deeper than that, which is why the results tend to be more durable."
    },
    {
      q: "Is the whole team based in Vadodara, or is work outsourced?",
      a: "The entire team — developers, cloud specialists, SEO strategists, and marketing managers — works out of our offices in Vadodara. We do not outsource development work or pass projects to outside contractors. The people you meet when you come to us are the people actually doing the work. That keeps things simple, clear, and accountable."
    },
    {
      q: "How does Utpal Shah's original approach from 2000 still show up in how the company runs today?",
      a: "The clearest example is our policy on software. We use only genuine, licensed code and tools on every project — no pirated themes, no cracked plugins, no shortcuts that save money today and create security problems next year. That standard came directly from how Utpal built the company from the start. He believed that a technology company either works with integrity or it does not deserve the trust its clients place in it. That belief has not changed in 26 years, and it will not change going forward."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "About Us", href: "/about" }, { label: "Leadership & Team" }]} />
        </div>
      </div>

      {/* Hero Banner (Centered Content, Light Solid Theme Background) */}
      <section className="bg-[#F0F4F8] py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-sans">
            Guided by Experienced Industry Veterans <br className="hidden sm:inline" />
            <span className="text-[#073F8A]">and Visionary Engineering Leaders</span>
          </h1>

          <p className="text-base sm:text-lg text-[#073F8A] font-bold font-sans max-w-2xl mx-auto">
            26 years of business integrity, modern technical education, and hands-on digital execution — all working together from our offices in Vadodara.
          </p>

          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans max-w-3xl mx-auto">
            Good technology companies are built by good people. At Jeenweb, the leaders shaping the work are the same leaders who built and sustained it through 26 years of change. Our leadership is in the room when projects are planned, active when complex challenges arise, and accountable when systems need to be deployed with precision.
          </p>
        </div>
      </section>

      {/* Leadership Profiles Showcase (Slide UI with Standing Portraits) */}
      <LeadershipShowcase />

      {/* Section 3: The Teams Doing the Work (Overview & Capabilities) */}
      <TeamCapabilitiesOverview />

      {/* Engineering & Specialist Team Developer Roster */}
      <EngineeringTeamGrid />

      {/* FAQs */}
      <FaqSection
        customFaqs={teamFaqs}
        badge="Leadership & Strategy FAQs"
        title="Frequently Asked Questions About Our Leadership"
        subtitle="Insights into executive involvement, technical advisory credentials, and single-roof operations."
      />
    </main>
  );
}
