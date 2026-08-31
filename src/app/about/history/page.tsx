import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import { TIMELINE_MILESTONES } from "@/lib/siteData";
import { History, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2 } from "lucide-react";

export const metadata = {
  title: "Company History & Growth Timeline | Jeenweb Vadodara",
  description:
    "Explore the 26-year growth timeline of Jeenweb Technologists, from web services in 2000 to custom software, cloud solutions, and multi-office setups in Vadodara.",
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

      {/* Hero Banner */}
      <section className="bg-[#0B192C] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block pb-1.5 border-b-2 border-[#D32F2F]">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-100">
                26-Year Corporate Journey
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Over Two Decades of Technological Evolution and Strategic B2B Infrastructure Growth
            </h1>

            <p className="text-base sm:text-lg text-amber-300 font-semibold">
              From our first web hosting setup in 2000 to running multiple offices and enterprise software operations across Gujarat today, here is how we got here.
            </p>

            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
              Twenty-six years is a long time in any industry. In technology, it is even longer. The tools change, the platforms shift, the way businesses use software evolves every few years — and staying relevant through all of that takes genuine effort, not just good timing. We have been through all of it. We started small, grew steadily, made deliberate decisions at every stage, and built a company that businesses in Gujarat and across the world actually trust with their IT infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="py-20 lg:py-24 bg-white" id="timeline">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Milestones"
            title="The Historical Timeline of Jeenweb Technologists"
            subtitle="Explore how our service capabilities, leadership, and facilities developed step-by-step from 2000 to 2026."
            centered={true}
          />

          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-32 space-y-12 my-12">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Year Marker Badge */}
                <div className="sm:absolute sm:-left-36 top-0 mb-2 sm:mb-0 text-left sm:text-right w-28">
                  <span className="inline-block px-3 py-1 rounded-lg bg-[#16325B] text-white text-xs font-mono font-bold shadow-2xs">
                    {item.year}
                  </span>
                </div>

                {/* Timeline Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#D32F2F] group-hover:scale-110 transition-transform"></div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm group-hover:shadow-md group-hover:bg-white group-hover:border-slate-300 transition-all">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="text-[11px] font-bold text-[#D32F2F] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Project JE Spotlight */}
          <div className="p-8 rounded-2xl bg-[#0F223D] text-white border border-slate-800 shadow-xl mt-12">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>2026 Strategic Initiative</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Project JE: Dedicated Enterprise Business Email Platform
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-3xl">
              Engineered to eliminate corporate email deliverability bottlenecks and complex multi-vendor licensing, Project JE provides high-reputation dedicated IP routing, strict DMARC enforcement, and localized Gujarat technical support.
            </p>
            <div className="pt-6 flex items-center gap-3">
              <Link
                href="/services/hosting#email-solutions"
                className="px-6 py-3 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
              >
                <span>Learn More About Email Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What 26 Years Actually Means for You */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What 26 Years Actually Means for You"
            title="Why Our History Matters When You Work With Us"
            subtitle="Practical advantages of partnering with an engineering team backed by over a quarter-century of real-world deployments."
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Card 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[11px] font-bold text-[#16325B] bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    Practical Experience
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  We Have Seen What Works and What Does Not
                </h3>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Twenty-six years of real project experience means we have already made mistakes, learned from them, and built better processes because of them. When we recommend a system or an approach, it is not based on what looks good in a sales deck — it is based on what we have seen hold up over time and what we have seen fail. That kind of experience is genuinely difficult to find.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Battle-Tested Engineering Architecture</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D32F2F] bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Vadodara Headquarters
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  We are local, we are accountable, and we are not going anywhere.
                </h3>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Both of our offices are in Vadodara. Our team lives and works here. When something goes wrong with a system we built — and occasionally something will — we are reachable, we respond quickly, and we fix it. We are not a remote vendor you have to chase. We are a local company with a real physical presence and a long track record of standing behind the work we deliver.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-800 font-semibold font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Single-Roof Vadodara Accountability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
