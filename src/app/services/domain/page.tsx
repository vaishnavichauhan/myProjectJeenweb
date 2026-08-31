"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import DomainSearchBar from "@/components/common/DomainSearchBar";
import ConsultationModal from "@/components/common/ConsultationModal";
import {
  Globe,
  ShieldCheck,
  Zap,
  Lock,
  RefreshCw,
  Server,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Building2,
  Sparkles,
  Award
} from "lucide-react";

export default function DomainServicePage() {
  const [modalOpen, setModalOpen] = useState(false);

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

      {/* Hero Banner */}
      <section className="bg-[#0B192C] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block pb-1.5 border-b-2 border-[#D32F2F]">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-100">
                Enterprise Domain Registration
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Secure Your Digital Address with Enterprise-Grade Domain Registration and DNS Management
            </h1>

            <p className="text-base sm:text-lg text-blue-300 font-semibold">
              Search, register, and lock your brand identity with fast DNS routing and complete control — all managed from our offices in Vadodara.
            </p>

            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
              Your domain name is the first thing your customers type to find you online. If it is not registered properly, managed carefully, or renewed on time—you risk losing it entirely. At Jeenweb, we make it simple. You do a domain name search and pick the right name, and we handle everything from there — registration, DNS setup, WHOIS privacy, and renewal monitoring.
            </p>

            {/* Live Search Tool */}
            <div className="pt-4">
              <DomainSearchBar onOpenModal={() => setModalOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Comprehensive Coverage"
            title="Complete Domain Registration and Protection"
            subtitle="When you register a domain through Jeenweb, you get more than just a name. We build the full infrastructure around it so your website loads correctly, your business email works properly, and your customers can reach you without confusion."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#16325B] text-white w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Instant Domain Search & Registration</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Find available names across .com, .in, .co.in, .org, .net, .tech, and industry-specific TLDs with instant registration and active setup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#16325B] text-white w-fit">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">DNS Setup & Nameserver Management</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A, CNAME, MX, TXT, SPF, DKIM, and DMARC records configured accurately for zero deliverability errors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#16325B] text-white w-fit">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">WHOIS Privacy Protection</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Shield your personal and business contact details from public registries and spammers on all supported extensions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#16325B] text-white w-fit">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Renewal Monitoring & Expiry Protection</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Proactive email and phone alerts from our Vadodara desk ensure your critical business assets never lapse.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#16325B] text-white w-fit">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Domain Transfers & Consolidations</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamless transfer of domains from third-party registrars without DNS disruption or website downtime.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-[#16325B] text-white w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Multi-Domain Brand Defense</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Secure brand name variants and geographic extensions (.in, .co.in, .com) with automated 301 forwarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Businesses in Vadodara Choose Jeenweb for Domain Services */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Businesses in Vadodara Choose Jeenweb for Domain Services"
            title="The Jeenweb Advantage for Domain Management"
            subtitle="Enterprise DNS routing, zero-cost WHOIS privacy defense, and transparent renewal pricing backed by local engineers in Vadodara."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {/* Advantage 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Self-Service & Assisted DNS</span>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Spam & Scraper Defense Included</span>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D32F2F] bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-red-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Anti-Theft Transfer Locks</span>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6 text-amber-400" />
                  </div>
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Hidden Renewal Price Markups</span>
              </div>
            </div>

            {/* Advantage 5 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-purple-700 font-semibold font-mono">
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

          {/* Guidance Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="p-3 rounded-2xl bg-[#0B1E38] text-white flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Not sure which combination suits your business?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  We help you figure that out during the setup process with zero guesswork.
                </p>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-[#16325B] hover:bg-[#0F223D] text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-sm"
            >
              Get Expert Extension Advice
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Clients Who Trust Jeenweb for Domain Management */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clients Who Trust Jeenweb for Domain Management"
            title="Trusted Domain Partner for Brands Across World"
            subtitle="From healthcare institutions and regional recruitment giants to international export corporations, see the brands that rely on our secure DNS infrastructure."
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
                <span>DNS & Web Portal Security</span>
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
                <span>Multi-Domain Routing & DNS</span>
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
                  Google Workspace
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enterprise MX, SPF & DKIM Email Verification
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
                  Microsoft 365
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tenant DNS Routing & Autodiscover Setup
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
                  Wall of Fame Engineering & Innovation Ecosystem
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-amber-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Campus & Portal Deployments</span>
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
                  Multi-Country .com, .in & .co.uk Trade Portals
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>12+ Global Country TLDs</span>
              </div>
            </div>

            {/* Client Card 8: High-Availability AWS DNS */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    DNS Routing
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  High-Availability Cloud DNS
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Anycast Low-Latency Global Name Servers
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-purple-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Bottom Trust Highlight Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0F223D] text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white">Full Domain Ownership Guarantee:</strong> All domains are registered 100% in your corporate legal name with full administrative control.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-2.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
            >
              Consult Our Domain Desk
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Common Questions About Domain Registration and DNS */}
      <FaqSection
        customFaqs={domainFaqs}
        badge="Common Questions About Domain Registration and DNS"
        title="Straightforward Answers to Domain Questions We Hear Often"
        subtitle="Everything you need to know about domain transfers, pricing integrity, expiry recovery, WHOIS privacy, and SPF/DKIM email delivery."
      />

      {/* Section 7: Get Started */}
      <section className="relative z-20 -mb-20 sm:-mb-24 lg:-mb-28" id="get-started">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B192C] via-[#11253E] to-[#0B192C] border border-slate-700/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-950/40 relative overflow-hidden backdrop-blur-sm">
            {/* Subtle ambient glow inside card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
              <div className="text-center lg:text-left space-y-2.5 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-red-400" />
                  <span>Get Started • Vadodara Infrastructure Desk</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Claim Your Brand&apos;s Online Address Before Someone Else Does
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  The domain you want may be available today — but not tomorrow. Whether you need a single domain or bulk domain registration across multiple extensions, we help you search, choose, and lock everything down with full support from Vadodara.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-900/40 hover:shadow-red-900/60 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Register Your Domain</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15 hover:border-white/30 text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3 h-3 text-slate-300" />
                  <span>Talk to Domain Specialist</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService="Domain Registration & Management"
      />
    </main>
  );
}
