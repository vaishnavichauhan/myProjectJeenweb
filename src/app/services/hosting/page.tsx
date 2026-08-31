"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import ConsultationModal from "@/components/common/ConsultationModal";
import {
  Server,
  Database,
  ShieldCheck,
  Zap,
  Lock,
  HardDrive,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Mail,
  Send,
  Layers,
  Download,
  RefreshCw,
  Building2,
  Award,
  PhoneCall,
  Globe
} from "lucide-react";
import { EMAIL_SOLUTIONS_PART2 } from "@/lib/siteData";

export default function HostingServicePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Corporate NVMe Hosting");

  const hostingFaqs = [
    {
      q: "How are Jeenweb's manual backup facilities different from regular automated backups?",
      a: "Automated backups run on a fixed timer — typically once daily. Manual backup facilities let you create a fresh backup at any exact moment you choose — usually right before a major update or code change. That way if something breaks at 2pm, you are not waiting until midnight to restore. It is the most important safety feature for any active business website."
    },
    {
      q: "Does Jeenweb migrate my website from my current hosting provider?",
      a: "Yes. Our team in Vadodara handles the complete migration — files, databases, SSL configuration, and staging tests — before we update your DNS. Your website and email stay live throughout. We also offer this free of charge for new clients moving to Jeenweb hosting."
    },
    {
      q: "What is the difference between NVMe SSD hosting and regular SATA SSD hosting?",
      a: "NVMe SSDs read and write data roughly 7 to 10 times faster than standard SATA SSDs. For websites with dynamic pages and active databases, this makes a significant difference in page speed, database response time, and overall visitor experience."
    },
    {
      q: "What stops malware from spreading between accounts on the same server?",
      a: "We use CageFS containerization—a technology that completely isolates every hosting account from every other one on the same server. Even if one account is compromised, malware cannot cross over to your files or database."
    },
    {
      q: "Can I upgrade my hosting plan as my website traffic grows?",
      a: "Yes. Storage, RAM, and CPU cores can all be upgraded without downtime or changes to your existing code or configurations. Our team handles the upgrade cleanly in the background."
    }
  ];

  const hostingTiers = [
    {
      name: "Starter Business",
      desc: "For small business websites and corporate brochure portals.",
      specs: ["10 GB Pure NVMe SSD Storage", "Unmetered Bandwidth", "Free Let's Encrypt SSL", "On-Demand Manual Backups", "10 Corporate Email Accounts", "cPanel Control Dashboard"],
      tag: "Small Business",
      popular: false
    },
    {
      name: "Corporate Growth",
      desc: "For active business websites, ERP portals, and dynamic platforms.",
      specs: ["35 GB Pure NVMe SSD Storage", "CageFS Account Isolation", "Daily & Manual Backups", "Free Let's Encrypt SSL", "Unlimited Corporate Emails", "Redis In-Memory Caching", "Priority Vadodara Desk Support"],
      tag: "Most Popular",
      popular: true
    },
    {
      name: "Dedicated Enterprise",
      desc: "For high-traffic portals, custom software, and multi-tenant applications.",
      specs: ["100+ GB NVMe SSD Storage", "Dedicated Virtual Core & RAM", "Full Root SSH Access", "Hourly Snapshot Backups", "Custom Firewall & ModSecurity", "Guaranteed 99.9% Uptime SLA", "24/7 Direct Tech Escalation"],
      tag: "Maximum Power",
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/#services" },
              { label: "Web Hosting Services" }
            ]}
          />
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-[#0B192C] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block pb-1.5 border-b-2 border-[#D32F2F]">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-100">
                NVMe Server Infrastructure
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              High-Speed, Ultra-Secure Web Hosting Powered by On-Demand Manual Backup Facilities
            </h1>

            <p className="text-base sm:text-lg text-emerald-300 font-semibold">
              Enterprise-grade NVMe server infrastructure, 99.9% uptime, and reliable data protection managed from Vadodara.
            </p>

            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
              A slow website costs you visitors. An unreliable server costs you customers. And a host without proper backup facilities can cost you everything. Jeenweb is a trusted web hosting company in Vadodara providing fast, secure, and stable hosting for business websites, web applications, e-commerce stores, and corporate portals across Gujarat.
            </p>

            <div className="pt-4 flex flex-wrap gap-3.5">
              <a
                href="#plans"
                className="px-6 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
              >
                <span>Explore Hosting Tiers</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15"
              >
                Request Free Migration
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: On-Demand Manual Backup Facilities */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="On-Demand Manual Backup Facilities"
            title="Complete Control with On-Demand Manual Backup Facilities"
            subtitle="Scheduled backups run automatically every day — usually late at night. But what happens when you need to update your website at 2pm and something breaks? You are left waiting hours for the next automatic backup cycle. Our manual backup facilities solve that problem. Before any update, plugin installation, or database change, you take a full snapshot of your website at that exact moment. One click. Done. If something goes wrong, you restore it immediately without waiting for support."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <HardDrive className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200/60">
                    Pre-Update Shield
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Protect Your Website Before an Update
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Create a complete backup of your files, MySQL databases, and configuration settings before pushing any change to your live website.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Files • MySQL DBs • Config Snapshots</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <RefreshCw className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200/60">
                    Instant Recovery
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Restore Your Website Easily
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  If an update causes an error or a plugin creates a conflict, restore from your manual backup immediately. Our Vadodara team can also assist with the restoration when needed.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-blue-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>1-Click Rollback • Vadodara Team Assist</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Download className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider border border-purple-200/60">
                    Local Storage
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Download an Offline Backup Copy
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Download compressed backup archives directly to your own office storage in Vadodara. An offline copy away from the server adds one more layer of protection for compliance and peace of mind.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-purple-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Offline Vault • Compliance Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Hosting Features and Technical Standards */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Hosting Features and Technical Standards"
            title="Built for Speed, Scalability, and Absolute Stability"
            subtitle="From pure PCIe NVMe solid-state storage to CageFS containerized security, discover the enterprise standards that power every hosting account."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {/* Standard 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[11px] font-bold text-[#16325B] bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    High IOPS
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Pure NVMe SSD Storage
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  NVMe SSD hosting is significantly faster than standard SATA SSD storage — up to 10 times faster for read and write operations. This directly reduces database response times, improves page loading, and boosts your Google Core Web Vitals score.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>10x Read/Write • Core Web Vitals</span>
              </div>
            </div>

            {/* Standard 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Auto-Renewed
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Hosting With Free SSL Certificate
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Every domain hosted with Jeenweb gets a free SSL certificate through Let&apos;s Encrypt — installed automatically and renewed without any action needed from you. Full HTTPS security on every plan.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Let&apos;s Encrypt SSL • HTTPS Enforced</span>
              </div>
            </div>

            {/* Standard 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D32F2F] bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    CageFS Guard
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Isolated Server Resources — CageFS
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We use CageFS account containerization on every server. Each hosting account is completely walled off from every other. If another website on the same server gets compromised, your files and databases stay completely safe.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-red-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Cross-Site Infection Risk</span>
              </div>
            </div>

            {/* Standard 4 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Full Dev Stack
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Developer-Ready Environment
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Full support for multiple PHP versions from 7.4 to the latest PHP 8.x, Node.js, SSH access, Git repository integration, and phpMyAdmin. Everything a developer needs without having to ask for it.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>PHP 7.4–8.x • Node.js • SSH • Git • phpMyAdmin</span>
              </div>
            </div>

            {/* Standard 5 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Industry Standard
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  cPanel Hosting — Simple and Familiar
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Every account comes with cPanel hosting access—the most widely used control panel for website and server management. Easy to use for both technical and non-technical teams.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-purple-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Full cPanel Access Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Hosting Plans */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-slate-200/80" id="plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Hosting Plans"
            title="Choose the Right Resource Allocation for Your Business"
            subtitle="Transparent specifications with pure NVMe performance, isolated CageFS containers, and included on-demand manual backup facilities."
            centered={true}
          />

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-14">
            {/* Tier 1: Starter Business */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#16325B] bg-white border border-slate-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    Small Business
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">Starter Business</h3>
                <p className="text-xs text-slate-600 mt-1 mb-6">
                  Best for small businesses, local services, and portfolio websites.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200 mb-8 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Storage:</strong> 10 GB NVMe SSD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>RAM / CPU:</strong> 1 GB RAM / 1 Core</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Backups:</strong> Manual Snapshots Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Security:</strong> Free SSL + Malware Scanner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Support:</strong> 24/7 Monitoring</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedPlan("Starter Business");
                  setModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                Configure Starter Business
              </button>
            </div>

            {/* Tier 2: Professional Corporate */}
            <div className="rounded-3xl p-8 bg-white border-2 border-[#16325B] shadow-xl relative flex flex-col justify-between">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#16325B] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                Most Popular
              </span>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
                    Growth & B2B
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">Professional Corporate</h3>
                <p className="text-xs text-slate-600 mt-1 mb-6">
                  Best for B2B portals, dynamic platforms, and growing e-commerce.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100 mb-8 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Storage:</strong> 50 GB NVMe SSD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>RAM / CPU:</strong> 2 GB RAM / 2 Cores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Backups:</strong> Manual Snapshots Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Security:</strong> Free SSL + WAF Firewall</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Support:</strong> Priority Support Vadodara</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedPlan("Professional Corporate");
                  setModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-900/20"
              >
                Configure Professional Corporate
              </button>
            </div>

            {/* Tier 3: Enterprise High-Traffic */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider border border-purple-200">
                    High Performance
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">Enterprise High-Traffic</h3>
                <p className="text-xs text-slate-600 mt-1 mb-6">
                  Best for large enterprises, ERP systems, and heavy multi-tenant portals.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200 mb-8 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Storage:</strong> Unmetered NVMe SSD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>RAM / CPU:</strong> 4 GB RAM / 4 Cores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Backups:</strong> Included + Dedicated Vault</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Security:</strong> Free SSL + Dedicated IP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Support:</strong> Dedicated Systems Engineer</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedPlan("Enterprise High-Traffic");
                  setModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                Configure Enterprise High-Traffic
              </button>
            </div>
          </div>

          {/* Full Side-by-Side Comparison Matrix */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0B192C] text-white text-xs uppercase tracking-wider font-bold">
                    <th className="py-4 px-6 sm:px-8 w-1/4">Feature</th>
                    <th className="py-4 px-6 sm:px-8 w-1/4">Starter Business</th>
                    <th className="py-4 px-6 sm:px-8 w-1/4">Professional Corporate</th>
                    <th className="py-4 px-6 sm:px-8 w-1/4">Enterprise High-Traffic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">Best For</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Small businesses and portfolios</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-900 font-semibold">B2B portals and e-commerce</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Large enterprises and ERP systems</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">Storage</td>
                    <td className="py-4 px-6 sm:px-8 font-mono font-bold text-slate-800">10 GB NVMe SSD</td>
                    <td className="py-4 px-6 sm:px-8 font-mono font-bold text-blue-700">50 GB NVMe SSD</td>
                    <td className="py-4 px-6 sm:px-8 font-mono font-bold text-purple-700">Unmetered NVMe SSD</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">Manual Backup Facilities</td>
                    <td className="py-4 px-6 sm:px-8 text-emerald-700 font-semibold">Included</td>
                    <td className="py-4 px-6 sm:px-8 text-emerald-700 font-semibold">Included</td>
                    <td className="py-4 px-6 sm:px-8 text-purple-800 font-semibold">Included + Dedicated Vault</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">RAM and CPU</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-700 font-mono">1 GB RAM / 1 Core</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-900 font-mono font-bold">2 GB RAM / 2 Cores</td>
                    <td className="py-4 px-6 sm:px-8 text-purple-800 font-mono font-bold">4 GB RAM / 4 Cores</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">Security</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Free SSL + Malware Scanner</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-900 font-semibold">Free SSL + WAF Firewall</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-900 font-semibold">Free SSL + Dedicated IP</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">Support</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">24/7 Monitoring</td>
                    <td className="py-4 px-6 sm:px-8 text-emerald-700 font-semibold">Priority Support Vadodara</td>
                    <td className="py-4 px-6 sm:px-8 text-[#16325B] font-bold">Dedicated Systems Engineer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Specialty Hosting Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-blue-700" />
                <span>Specialized Hosting Architectures Available</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
                We also offer managed Linux VPS, Windows hosting, dedicated server hosting, unlimited bandwidth hosting, e-commerce hosting, WordPress hosting, and reseller hosting—all configured to match your specific requirements.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedPlan("Specialized Hosting Architecture");
                setModalOpen(true);
              }}
              className="px-6 py-3 rounded-xl bg-[#16325B] hover:bg-[#0F223D] text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-sm"
            >
              Request Custom Server Setup
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Clients on Jeenweb Hosting */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clients on Jeenweb Hosting"
            title="Powering Corporate Websites Across World"
            subtitle="From healthcare institutions and regional manufacturing conglomerates to international export networks, see the brands hosted on our high-speed NVMe servers."
            centered={true}
          />

          {/* Client Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Client Card 1: CARE Hospitals */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/partners/care-hospitals.svg"
                    alt="CARE Hospitals Logo"
                    width={180}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  CARE Hospitals
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Healthcare Network & Multi-Specialty Infrastructure
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>NVMe Production Hosting</span>
              </div>
            </div>

            {/* Client Card 2: JITO JOBS */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/partners/jito-jobs.svg"
                    alt="JITO JOBS Logo"
                    width={180}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  JITO JOBS
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Career & Recruitment Ecosystem Platform
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>High-Concurrency Portal Server</span>
              </div>
            </div>

            {/* Client Card 3: Google Cloud / Workspace */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Cloud Partner
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Google Cloud Infrastructure
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Hybrid Cloud & Container Deployment
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-blue-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Authorized Implementation</span>
              </div>
            </div>

            {/* Client Card 4: Microsoft 365 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Solutions Partner
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Microsoft Azure / 365
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enterprise Windows Server & SQL Stacks
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Enterprise Tenant Security</span>
              </div>
            </div>

            {/* Client Card 5: Parul University */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Academic Partner
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Parul University
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Wall of Fame Engineering & Innovation Portals
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-amber-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Campus & Application Hosting</span>
              </div>
            </div>

            {/* Client Card 6: Gujarat Industrial Consortium */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    Manufacturing
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Gujarat Industrial Leaders
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Manufacturing, Chemical & Supply Chain Brands
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>80+ Industrial Deployments</span>
              </div>
            </div>

            {/* Client Card 7: Global B2B Export Trade */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    International
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  International Export Houses
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Global Trade & High-Speed Dynamic Catalog Sites
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Global Low-Latency CDN</span>
              </div>
            </div>

            {/* Client Card 8: High-Availability Cloud Server */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    NVMe Tier IV
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  High-Availability Cloud Server
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  PCIe Gen4 NVMe Server Clusters with CageFS
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-purple-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Web Hosting FAQs */}
      <FaqSection
        customFaqs={hostingFaqs}
        badge="Web Hosting FAQs"
        title="Clear Answers Regarding Server Management and Backups"
        subtitle="Direct explanations on our manual backup facilities, zero-downtime migrations, NVMe read/write speeds, and CageFS container security."
      />

      {/* Section 7: Action Call */}
      <section className="relative z-20 -mb-20 sm:-mb-24 lg:-mb-28" id="action-call">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B192C] via-[#11253E] to-[#0B192C] border border-slate-700/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-950/40 relative overflow-hidden backdrop-blur-sm">
            {/* Subtle ambient glow inside card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
              <div className="text-center lg:text-left space-y-2.5 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-red-400" />
                  <span>Action Call • Vadodara Infrastructure Desk</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Move Your Website to a Faster, Safer Server
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Stop losing customers to slow load speeds and unreliable uptime. Talk with our hosting team in Vadodara today—we will find the right plan for your website, your traffic, and your budget.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-900/40 hover:shadow-red-900/60 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Migrate to Jeenweb Hosting</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15 hover:border-white/30 text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3 h-3 text-slate-300" />
                  <span>Speak with Server Engineer</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={`Web Hosting: ${selectedPlan}`}
      />
    </main>
  );
}
