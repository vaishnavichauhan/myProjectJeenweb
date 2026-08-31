import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import { LEADERSHIP_TEAM } from "@/lib/siteData";
import { Users, Award, ShieldCheck, CheckCircle2, ArrowRight, Code2, Cloud, Search } from "lucide-react";

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

      {/* Hero Banner */}
      <section className="bg-[#0B192C] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block pb-1.5 border-b-2 border-[#D32F2F]">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-100">
                Executive Leadership
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Guided by Experienced Industry Veterans and Visionary Engineering Leaders
            </h1>

            <p className="text-base sm:text-lg text-emerald-300 font-semibold">
              26 years of business integrity, modern technical education, and hands-on digital execution — all working together from our offices in Vadodara.
            </p>

            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
              Good technology companies are built by good people. At Jeenweb, the people leading the work are the same people who started it, grew it, and kept it honest through 26 years of change. Our leadership team is not sitting behind closed doors managing spreadsheets—they are in the room when projects are being planned, involved when problems come up, and accountable when something needs to be fixed. That is not something every company can say. We can.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-20 lg:py-24 bg-white" id="leadership">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Executive Board"
            title="The Minds Behind Jeenweb Technologists"
            subtitle="Deep domain experience across engineering, infrastructure advisory, and technical search engine optimization."
            centered={true}
          />

          <div className="space-y-10">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-slate-50 rounded-2xl p-7 lg:p-9 border border-slate-200 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Visual Avatar / Credentials */}
                <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="w-24 h-24 rounded-2xl bg-[#0F223D] text-white flex items-center justify-center font-extrabold text-2xl shadow-sm mb-4">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#D32F2F] mt-0.5">{member.role}</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">{member.experience}</p>

                  <div className="mt-4 pt-4 border-t border-slate-100 w-full space-y-2 text-left text-xs">
                    {member.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-slate-200/70 text-slate-700 text-[11px] font-semibold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-3 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <strong className="text-slate-900 block mb-0.5">Focus Area:</strong>
                      {member.role.includes("Digital") ? "AEO / GEO / Technical Schema & ROAS" : "Custom ERP & Infrastructure Architecture"}
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <strong className="text-slate-900 block mb-0.5">Location:</strong>
                      Vadodara Corporate Desk & Labs
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Teams Doing the Work */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Teams Doing the Work"
            title="Skilled People Working Across Every Service We Offer"
            subtitle="Dedicated in-house specialists handling custom software, cloud migrations, and AI search visibility under one roof in Vadodara."
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Team 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[11px] font-bold text-[#16325B] bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    Software & ERP
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Custom Software and ERP Development Team
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our software developers build business applications and ERP systems from scratch — in PHP, Laravel, and Node.js — designed around how each client&apos;s business actually runs. They do not start from a template and adjust it. They start from your workflow and build upward from there. Every system goes through proper testing before it is handed over, and the code is written in a clean, modular way so that adding new features later is straightforward and does not break what is already working.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>PHP • Laravel • Node.js • Custom ERP</span>
              </div>
            </div>

            {/* Team 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Cloud className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Cloud & Email
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Cloud and Business Email Team
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  This team handles the full setup and migration for Google Workspace, Microsoft 365, Zoho Mail, Rediff Business, Titan Email, and dedicated enterprise mail servers. They manage DNS records, security settings, tenant migrations, and everything else that goes into a proper email environment. The goal is always the same — a business email setup that works reliably from day one and does not create ongoing problems for the team using it.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Google • Microsoft 365 • Enterprise Mail</span>
              </div>
            </div>

            {/* Team 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Search className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D32F2F] bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Search & Growth
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  SEO, Digital Marketing, and Social Media Team
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our marketing team handles search visibility across traditional search engines and AI-powered platforms. They set up schema markup, structure content for featured snippets and AI answer engines, run technical SEO audits, and manage paid campaigns on search and social platforms. Everything is built around what will actually bring the right kind of traffic to a client&apos;s business—not just what will make a report look good at the end of the month.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-red-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>AEO • GEO • Technical Schema • ROAS Ads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
