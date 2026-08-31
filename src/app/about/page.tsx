import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import {
  ShieldCheck,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Compass,
  Lock,
  HeartHandshake,
  Sparkles
} from "lucide-react";

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

      {/* Hero Banner */}
      <section className="bg-[#0B192C] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block pb-1.5 border-b-2 border-[#D32F2F]">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-100">
                About Jeenweb Technologists
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Empowering Modern Enterprises with Reliable IT Systems
            </h1>

            <p className="text-base sm:text-lg text-red-300 font-semibold">
              Secure operations, managed databases, and strong digital marketing, all from Vadodara.
            </p>

            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
              Building a strong digital foundation is not just about writing code or putting up a website. It is about understanding how your business actually runs — where things slow down, where data gets mishandled, and where your team wastes time on work that could easily be automated. We build custom software and secure IT systems for businesses that want to run smoother, protect their data, and show up properly online. If your current setup is holding your business back, we are the team that fixes that.
            </p>

            <div className="pt-4 flex flex-wrap gap-3.5">
              <Link
                href="/about/team"
                className="px-6 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
              >
                <span>Meet Leadership Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/history"
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15"
              >
                View 26-Year Timeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Purpose */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Corporate Purpose"
            title="A Trusted IT and Digital Partner for Businesses Across Gujarat"
            subtitle="Genuine code, licensed tools, and single-roof accountability from our Vadodara offices."
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Who We Are Card */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#16325B] text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Who We Are</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Jeenweb Technologists Pvt. Ltd. is an IT and digital solutions company based in Vadodara, Gujarat. We work with businesses that need proper, dependable technology systems—not generic solutions that barely get the job done but systems built specifically around the way their business actually runs day to day.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We do not use pirated software, copied code, or unverified third-party tools. Everything we build is clean, secure, and made to last. Our team of developers and digital experts has worked with over 200 businesses across different industries — handling custom software builds, ERP systems, cloud setups, email platforms, and online marketing. We take every client&apos;s business seriously and treat their systems with the same care we would want for our own.
              </p>
            </div>

            {/* What We Are Here to Do Card */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#D32F2F] text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">What We Are Here to Do</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our goal is simple—build IT systems that businesses can count on every single day without worrying about crashes, data loss, or software their team refuses to use.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We want to close the gap between how software is built and how real teams actually use it on the ground. Every product we deliver starts with us understanding your business first — not guessing. We keep our work clean, our updates honest, and our communication clear. Our clients stay with us because we do what we say we will, and we remain involved long after the project is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counts */}
      <section className="py-16 bg-[#0F223D] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-extrabold text-white">26+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">Years Experience</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-extrabold text-white">1500+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">Projects Delivered</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-extrabold text-white">200+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">Corporate Clients</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-extrabold text-white">98%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What We Believe In */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What We Believe In"
            title="How We Think and How We Work"
            subtitle="Our core philosophy on technology architecture, practical usability, and transparent client partnerships."
            centered={true}
          />

          {/* Where We Want to Go Card */}
          <div className="mb-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#11253E] to-[#0B192C] text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-white flex-shrink-0">
                <Compass className="w-8 h-8 text-red-400" />
              </div>
              <div className="space-y-2">
                <div className="inline-block pb-0.5 border-b border-red-400">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-red-300">
                    Vision & Long-Term Direction
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Where We Want to Go
                </h3>
                <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  We want to be the most trusted technology company for businesses across Western India. That means more than writing good code — it means helping businesses understand that strong security and real growth go hand in hand. When the right systems are in place, both happen naturally. We are working toward a future where every business we support has digital tools that genuinely keep up with them — no matter how fast they grow or how complex their operations get.
                </p>
              </div>
            </div>
          </div>

          {/* What We Stand For Section */}
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D32F2F]" />
                <span>Core Operating Principles</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What We Stand For
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Pillar 1 */}
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white w-fit group-hover:scale-105 transition-transform">
                    <Lock className="w-6 h-6 text-red-400" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                    We put security first—every time.
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Every system we build is checked for security before anything else goes forward. Your business records, staff information, client files, and internal emails all need proper protection. We do not skip that step to save time or cut costs. If a shortcut creates a risk, we do not take it — simple as that.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Zero Security Compromise</span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-[#16325B] text-white w-fit group-hover:scale-105 transition-transform">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                    We Build Software That Your Team Will Actually Use
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    A tool that your team struggles with every day is not a solution — it is just a different kind of problem. Before we build anything, we spend time understanding how your people actually do their work. Every software product we deliver is built to fit naturally into those existing habits—not to force your team to change how they operate just to use the system.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-blue-700 font-semibold font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Natural Workflow Fit</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white w-fit group-hover:scale-105 transition-transform">
                    <HeartHandshake className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                    We Keep Things Clear and Honest Throughout
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    You will always know where your project stands. We give you real updates at each stage — not vague reports full of technical language that says nothing useful. If something is behind schedule or not working the way it should, we tell you straight away and explain exactly what we are doing to sort it out. That kind of honesty is what keeps our client relationships going strong for years.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-slate-700 font-semibold font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Transparent Communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
