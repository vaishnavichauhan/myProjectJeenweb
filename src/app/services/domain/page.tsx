"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import DomainSearchBar from "@/components/common/DomainSearchBar";
import CommonCta from "@/components/common/CommonCta";
import TrustedPartnershipsMarquee from "@/components/common/TrustedPartnershipsMarquee";
import {
  Globe,
  ShieldCheck,
  Zap,
  Lock,
  RefreshCw,
  Server,
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from "lucide-react";

export default function DomainServicePage() {
  const domainPartnerLogosRow1 = [
    { logo: "/images/clientsLogo/website/1.png" },
    { logo: "/images/clientsLogo/website/2.png" },
    { logo: "/images/clientsLogo/website/3.png" },
    { logo: "/images/clientsLogo/website/4.png" },
    { logo: "/images/clientsLogo/website/5.png" },
    { logo: "/images/clientsLogo/website/6.png" },
    { logo: "/images/clientsLogo/website/7.png" },
    { logo: "/images/clientsLogo/website/8.png" },
    { logo: "/images/clientsLogo/website/9.png" },
    { logo: "/images/clientsLogo/website/10.png" },
    { logo: "/images/clientsLogo/website/11.png" },
    { logo: "/images/clientsLogo/website/12.png" },
    { logo: "/images/clientsLogo/website/13.png" },
    { logo: "/images/clientsLogo/website/14.png" },
        { logo: "/images/clientsLogo/website/15.png" },
    { logo: "/images/clientsLogo/website/16.png" },
      { logo: "/images/clientsLogo/website/17.png" },
    { logo: "/images/clientsLogo/website/18.png" },
      { logo: "/images/clientsLogo/website/19.png" },
    { logo: "/images/clientsLogo/website/20.png" },
      { logo: "/images/clientsLogo/website/21.png" },
    { logo: "/images/clientsLogo/website/22.png" },
      { logo: "/images/clientsLogo/website/23.png" },
        { logo: "/images/clientsLogo/website/24.png" },
    { logo: "/images/clientsLogo/website/25.png" },
    { logo: "/images/clientsLogo/website/26.png" },
    {logo:"/images/clientsLogo/website/27.png"},
    {logo:"/images/clientsLogo/website/28.png"},
    {logo:"/images/clientsLogo/website/29.png"}
  ];


  const domainPartnerLogosRow2 = [
    { logo: "/images/clientsLogo/website/1.png" },
    { logo: "/images/clientsLogo/website/2.png" },
    { logo: "/images/clientsLogo/website/3.png" },
    { logo: "/images/clientsLogo/website/4.png" },
    { logo: "/images/clientsLogo/website/5.png" },
    { logo: "/images/clientsLogo/website/6.png" },
    { logo: "/images/clientsLogo/website/7.png" },
    { logo: "/images/clientsLogo/website/8.png" },
    { logo: "/images/clientsLogo/website/9.png" },
    { logo: "/images/clientsLogo/website/10.png" },
    { logo: "/images/clientsLogo/website/11.png" },
    { logo: "/images/clientsLogo/website/12.png" },
    { logo: "/images/clientsLogo/website/13.png" },
    { logo: "/images/clientsLogo/website/14.png" },
        { logo: "/images/clientsLogo/website/15.png" },
    { logo: "/images/clientsLogo/website/16.png" },
      { logo: "/images/clientsLogo/website/17.png" },
    { logo: "/images/clientsLogo/website/18.png" },
      { logo: "/images/clientsLogo/website/19.png" },
    { logo: "/images/clientsLogo/website/20.png" },
      { logo: "/images/clientsLogo/website/21.png" },
    { logo: "/images/clientsLogo/website/22.png" },
      { logo: "/images/clientsLogo/website/23.png" },
        { logo: "/images/clientsLogo/website/24.png" },
    { logo: "/images/clientsLogo/website/25.png" },
    { logo: "/images/clientsLogo/website/26.png" },
    {logo:"/images/clientsLogo/website/27.png"},
    {logo:"/images/clientsLogo/website/28.png"},
    {logo:"/images/clientsLogo/website/29.png"}
  ];


  const domainFaqs = [
    {
      q: "How do I transfer my existing domain to Jeenweb?",
      a: "Domain transfer is simple. You unlock your domain at your current registrar and generate an EPP authorization code — basically a security key. Then you start the transfer through our portal. Our team in Vadodara verifies your MX and A records so your website and email keep working without interruption throughout. Most transfers complete within a few days depending on the registrar."
    },
    {
      q: "Does Jeenweb offer cheap domain registration in India without hidden renewal costs?",
      a: "Yes. We offer competitive pricing across all major TLDs. The price we show you before registration is what you pay at renewal—no surprise increases, no fine print. We are upfront about costs from day one."
    },
    {
      q: "What happens if I forget to renew my domain?",
      a: "Your website stops loading, and your business email stops working immediately on expiry. That is why we set up proactive renewal reminders well before the date arrives. We also maintain a grace period for domains registered through Jeenweb—so you can still renew without losing ownership or having it auctioned off."
    },
    {
      q: "Can I do a WHOIS lookup to check domain ownership details?",
      a: "Yes. You can run a WHOIS lookup on any domain to check current ownership and registration details. For domains registered through Jeenweb with WHOIS privacy enabled, your personal details will be hidden and replaced with our privacy service information."
    },
    {
      q: "Why are SPF and DKIM records important for my business email?",
      a: "SPF and DKIM act like digital signatures on your outgoing emails. They tell receiving mail servers that emails from your domain are genuinely from you. Without them, your business emails are far more likely to land in spam. We configure these DNS authentication records as standard when we set up your domain."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/#services" },
              { label: "Domain Registration & Management" }
            ]}
          />
        </div>
      </div>

      {/* Hero Header Banner with Standardized Service Hero UI */}
      <section className="relative min-h-[480px] sm:min-h-[500px] lg:min-h-[560px] bg-gradient-to-br from-[#0A2647] via-[#134B70] to-[#07192F] text-white flex items-center py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-700/60">
        
        {/* Ambient Glows & Cyber Grid Accent */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[400px] bg-[#2563EB]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#C11E23]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        {/* Right-Side 3D Domain Extension Blocks (Transparent cutout, no half-half background) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[48%] xl:w-[50%] pointer-events-none z-0 hidden lg:flex items-center justify-end p-4 lg:p-8 xl:p-12 overflow-hidden">
          <div className="relative w-full h-full max-h-[540px] flex items-center justify-end">
            <Image
              src="/images/domain-tiles-only-transparent.png"
              alt="Domain Extension Boxes: .com, .in, .net, .org, .info"
              fill
              priority
              className="object-contain object-right drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl space-y-5 text-left">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.18] font-sans">
              Secure Your Digital Address with Enterprise Domain Registration &amp; DNS
            </h1>

            <p className="text-base sm:text-lg text-[#00E5FF] font-semibold leading-snug">
              Search, register, and protect your brand identity with lightning-fast DNS routing and complete control — all managed locally in Vadodara.
            </p>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              Your domain is the foundation of your digital authority. We provide instant domain registration, enterprise Anycast DNS, WHOIS privacy protection, and automated renewal monitoring so your brand is always secured.
            </p>

            {/* Live Search Tool */}
            <div className="pt-2">
              <DomainSearchBar onOpenModal={() => window.location.href = '/contact#get-in-touch'} />
            </div>

            {/* Mobile / Tablet View: Inline 3D domain blocks below search tool */}
            <div className="pt-6 lg:hidden flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-[1200/896]">
                <Image
                  src="/images/domain-tiles-only-transparent.png"
                  alt="Domain Extension Boxes: .com, .in, .net, .org, .info"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                  sizes="100vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-20 lg:py-24 bg-white relative">
        {/* Floating Center Transition Badge: Half in Hero Bottom, Half in Next Section */}
        <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 z-20 group">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-slate-200/90 shadow-2xl shadow-slate-950/25 flex items-center justify-center p-3.5 sm:p-4 hover:scale-110 transition-all duration-300 ring-4 ring-slate-100/90">
            <Image
              src="/images/www-globe.png"
              alt="World Wide Web Domain Network"
              width={68}
              height={68}
              className="object-contain animate-[spin_20s_linear_infinite] group-hover:[animation-duration:6s] select-none pointer-events-none"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Comprehensive Coverage"
            badgeStyle="underline"
            title="Complete Domain Registration and Protection"
            subtitle="When you register a domain through Jeenweb, you get more than just a name. We build the full infrastructure around it so your website loads correctly, your business email works properly, and your customers can reach you without confusion."
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
            {/* Left Side: Domain Related Image Showcase */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[#06152B] via-[#0B1E38] to-[#0F294D] border border-slate-200/80 shadow-md p-6 sm:p-7 flex flex-col justify-between relative group">
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/25 text-sky-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Domain Security Core</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  Enterprise Domain &amp; DNS Infrastructure
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  High-availability DNS clusters, WHOIS data redaction, and proactive renewal monitoring to safeguard your corporate brand equity.
                </p>
              </div>

              {/* Domain Related Image */}
              <div className="relative z-10 my-5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4] w-full max-w-sm mx-auto">
                <Image
                  src="/images/domain-coverage-showcase.jpg"
                  alt="Complete Domain Registration, DNS Security and Brand Protection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Bottom Quick Points */}
              <div className="relative z-10 pt-4 border-t border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Legal Ownership in Your Corporate Name</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated Domain Specialists in Vadodara</span>
                </div>
              </div>
            </div>

            {/* Right Side: Vertical Rectangle Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  num: "01",
                  icon: Zap,
                  title: "Instant Domain Search & Registration",
                  desc: "Find available names across .com, .in, .co.in, .org, .net, .tech, and industry TLDs with instant registration and active setup.",
                  tag: "Instant Live Activation"
                },
                {
                  num: "02",
                  icon: Globe,
                  title: "DNS Setup & Nameserver Management",
                  desc: "A, CNAME, MX, TXT, SPF, DKIM, and DMARC records configured accurately for zero deliverability errors.",
                  tag: "Anycast Routing & DNS"
                },
                {
                  num: "03",
                  icon: Lock,
                  title: "WHOIS Privacy Protection",
                  desc: "Shield your personal and business contact details from public registries and spammers on all supported extensions.",
                  tag: "100% Identity Shield"
                },
                {
                  num: "04",
                  icon: RefreshCw,
                  title: "Renewal Monitoring & Expiry Protection",
                  desc: "Proactive email and phone alerts from our Vadodara desk ensure your critical business assets never lapse.",
                  tag: "Automated Expiry Alerts"
                },
                {
                  num: "05",
                  icon: Server,
                  title: "Domain Transfers & Consolidations",
                  desc: "Seamless transfer of domains from third-party registrars without DNS disruption or website downtime.",
                  tag: "Zero-Downtime Migration"
                },
                {
                  num: "06",
                  icon: ShieldCheck,
                  title: "Multi-Domain Brand Defense",
                  desc: "Secure brand name variants and geographic extensions (.in, .co.in, .com) with automated 301 forwarding.",
                  tag: "Brand Hijack Defense"
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-[#16325B]/40 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden min-h-[320px]"
                  >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C11E23] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-4">
                      {/* Top Row: Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-[#0B1E38] text-blue-500 flex items-center justify-center group-hover:bg-[#16325B] group-hover:scale-105 transition-all shadow-md border border-blue-900/40">
                        <Icon className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                      </div>

                      {/* Title & Desc */}
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Feature Pill */}
                    <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-1.5 text-blue-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{item.tag}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Businesses in Vadodara Choose Jeenweb for Domain Services */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Businesses in Vadodara Choose Jeenweb for Domain Services"
            badgeStyle="underline"
            badgeColor="blue"
            title="The Jeenweb Advantage for Domain Management"
            subtitle="Enterprise DNS routing, zero-cost WHOIS privacy defense, and transparent renewal pricing backed by local engineers in Vadodara."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {/* Advantage 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-32 h-32 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Globe className="w-24 h-24 stroke-[1.2] text-slate-200/50 group-hover:text-blue-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#16325B] bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    Full Control
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Full DNS Management Control
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  You get a simple, clean dashboard to manage all your domain technical settings. A Records, MX Records, CNAMEs, TXT entries, SPF, and DKIM authentication rules—all accessible without contacting support every time. If you need help, our Vadodara team walks you through it directly.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Self-Service &amp; Assisted DNS</span>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-32 h-32 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Lock className="w-24 h-24 stroke-[1.2] text-slate-200/50 group-hover:text-emerald-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Free Privacy
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Free WHOIS Privacy Protection
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  When you register a domain, your name, phone number, address, and email show up in public databases by default. Spammers and data scrapers pick that up quickly. We include free WHOIS privacy protection on every domain we register—so your details stay out of public view.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Spam &amp; Scraper Defense Included</span>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-32 h-32 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <ShieldCheck className="w-24 h-24 stroke-[1.2] text-slate-200/50 group-hover:text-red-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#E11D48] bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Asset Protection
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Multi-Layer Security Locks
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Every domain we register gets automated security locks applied immediately. This stops unauthorized transfer attempts and prevents accidental lapses. Combined with renewal alerts sent well before the expiry date, your domain stays where it belongs—under our control.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-red-700 font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Anti-Theft Transfer Locks</span>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden md:col-span-2 lg:col-span-2">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-36 h-36 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Zap className="w-28 h-28 stroke-[1.2] text-slate-200/50 group-hover:text-amber-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Transparent Pricing
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Cheap Domain Registration India — Without Cutting Corners
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We offer competitive domain registration pricing across all major TLDs — .com, .in, .co.in, .net, .org, and more. We are one of the best domain registrars in India for businesses that need transparent pricing, proper setup, and reliable management. The price you see is what you pay at renewal — no surprise hikes.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Hidden Renewal Price Markups</span>
              </div>
            </div>

            {/* Advantage 5 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative overflow-hidden">
              {/* Right side top corner background watermark icon */}
              <div className="absolute -top-3 -right-3 w-32 h-32 pointer-events-none select-none z-0 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Server className="w-24 h-24 stroke-[1.2] text-slate-200/50 group-hover:text-purple-300/30 transition-colors" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Brand Defense
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Bulk Domain Registration
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  If you need to secure multiple domains for your brand, product names, or regional variations, we handle bulk domain registration in one go. We check availability across all extensions and register them together so nothing gets missed.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-purple-700 font-semibold font-mono relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Single-Click Multi-Extension Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Domain Extensions and What Each One Is Used For */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Domain Extension Guide"
            badgeStyle="underline"
            badgeColor="blue"
            title="Domain Extensions and What Each One Is Used For"
            subtitle="Not all domain extensions work the same way. Here is a simple, structured breakdown of global, regional, and architecture extensions."
            centered={true}
          />

          {/* Breakdown Table & Cards */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0B192C] text-white text-xs uppercase tracking-wider font-bold">
                    <th className="py-4 px-6 sm:px-8 w-1/4">Level</th>
                    <th className="py-4 px-6 sm:px-8 w-1/4">Extensions</th>
                    <th className="py-4 px-6 sm:px-8 w-1/2">What They Are For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                  {/* Row 1: TLDs */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-bold text-slate-900 align-top">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>Top-Level Domains (TLDs)</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 align-top">
                      <div className="flex flex-wrap gap-1.5 font-mono font-bold text-xs">
                        <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">.com</span>
                        <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">.net</span>
                        <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">.org</span>
                        <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">.biz</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-slate-600 leading-relaxed align-top">
                      Most widely recognized globally. Best starting point for any business wanting international presence.
                    </td>
                  </tr>

                  {/* Row 2: ccTLDs */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-bold text-slate-900 align-top">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span>Country-Code Domains</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 align-top">
                      <div className="flex flex-wrap gap-1.5 font-mono font-bold text-xs">
                        <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">.in</span>
                        <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">.co.in</span>
                        <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">.us</span>
                        <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">.uk</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-slate-600 leading-relaxed align-top">
                      Shows geographic presence. A <strong className="text-slate-900">.in domain registration</strong> tells search engines your business operates in India — good for local trust.
                    </td>
                  </tr>

                  {/* Row 3: Secondary Extensions */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-bold text-slate-900 align-top">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <span>Secondary Extensions</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 align-top">
                      <div className="flex flex-wrap gap-1.5 font-mono font-bold text-xs">
                        <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200">.com.in</span>
                        <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200">.net.in</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-slate-600 leading-relaxed align-top">
                      Useful for securing regional brand variations and protecting intellectual property.
                    </td>
                  </tr>

                  {/* Row 4: Subdomain Architecture */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-bold text-slate-900 align-top">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 flex-shrink-0" />
                        <span>Subdomain Architecture</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 align-top">
                      <div className="flex flex-col gap-1 font-mono font-bold text-xs">
                        <span className="px-2.5 py-1 rounded bg-purple-50 text-purple-800 border border-purple-200 w-fit">mail.brand.com</span>
                        <span className="px-2.5 py-1 rounded bg-purple-50 text-purple-800 border border-purple-200 w-fit">erp.brand.com</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-slate-600 leading-relaxed align-top">
                      Internal routing for email systems, custom software, and business portals.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </section>

      {/* Section 5: Client Logo Auto-Marquee Section */}
      <TrustedPartnershipsMarquee
        id="domain-partners"
        badgeText="Trusted Partnerships"
        title={
          <>
            Trusted Domain Partner <br className="hidden sm:inline" />
            <span className="text-[#1A3B71]">for Brands Across World</span>
          </>
        }
        description="From healthcare institutions and regional recruitment giants to international export corporations, see the brands that rely on our secure DNS infrastructure."
        row1={domainPartnerLogosRow1}
        row2={domainPartnerLogosRow2}
      />

      {/* Section 6: Common Questions About Domain Registration and DNS */}
      <FaqSection
        customFaqs={domainFaqs}
        badge="Common Questions About Domain Registration and DNS"
        title="Straightforward Answers to Domain Questions We Hear Often"
        subtitle="Everything you need to know about domain transfers, pricing integrity, expiry recovery, WHOIS privacy, and SPF/DKIM email delivery."
      />

      {/* Section 7: Get Started CTA */}
      <CommonCta
        id="get-started"
        title={
          <>
            Claim Your Online Address. <br className="hidden sm:inline" />
            <span className="text-blue-400">Protect Your Brand Identity.</span>
          </>
        }
        subtitle="The domain you want may be available today — but not tomorrow. Whether you need a single domain or bulk domain registration across multiple extensions, we help you search, choose, and lock everything down with full support from Vadodara."
        buttonText="Speak with Performance Specialist"
        buttonHref="/contact"
      />

          </main>
  );
}
