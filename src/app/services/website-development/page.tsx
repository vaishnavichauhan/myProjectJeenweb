"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import FaqSection from "@/components/home/FaqSection";
import CommonCta from "@/components/common/CommonCta";
import TrustedPartnershipsMarquee from "@/components/common/TrustedPartnershipsMarquee";
import {
  Layout,
  Code2,
  Smartphone,
  Search,
  ShieldCheck,
  ArrowRight,
  ShoppingBag,
  Globe2,
  Laptop,
  Check,
  Compass,
  Palette,
  Rocket,
  Wrench,
  Database,
  ArrowUpRight
} from "lucide-react";

export default function WebsiteDevelopmentPage() {
  const [activeLifecycleStep, setActiveLifecycleStep] = useState<number>(0);

  const webClientLogosRow1 = [
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

  const webClientLogosRow2 = [
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

  const webDevelopmentFaqs = [
    {
      q: "Why should we build a custom website instead of using an off-the-shelf theme?",
      a: "Off-the-shelf commercial themes are packed with thousands of lines of unused code, unverified third-party plugins, and heavy scripts designed to fit every possible use case. This leads to slow page speeds (failing Google Core Web Vitals), frequent security vulnerabilities, and unpredictable plugin conflicts. Custom website development ensures 100% bespoke, clean code built exclusively for your business requirements — resulting in sub-second load times, ironclad security, and higher search rankings."
    },
    {
      q: "What technologies do you use for website development?",
      a: "Depending on your business requirements, we engineer websites using Next.js 16, React, TypeScript, and Tailwind CSS for modern high-performance web applications, or custom-developed WordPress and WooCommerce environments with bespoke PHP and zero bloated page-builders. All solutions include REST/GraphQL API readiness, mobile-first design, and structured JSON-LD schemas."
    },
    {
      q: "Will our website be fully responsive on mobile phones and tablets?",
      a: "Yes, every website we deliver is engineered with a strict mobile-first methodology. We test thoroughly across physical iOS and Android smartphones, tablets, laptops, and ultra-wide desktop monitors to ensure flawless layouts, fluid typography, and touch-optimized navigation."
    },
    {
      q: "How long does it take to develop a professional corporate website?",
      a: "A typical custom corporate website generally takes between 3 to 6 weeks from architecture discovery and Figma prototyping to final QA and deployment. Larger custom eCommerce portals or enterprise web applications with complex integrations typically require 6 to 10 weeks."
    },
    {
      q: "Is SEO included with website development?",
      a: "Yes. Technical SEO is built directly into the foundational code of every website we develop. This includes semantic HTML5 tags, Open Graph meta tags, XML sitemaps, structured JSON-LD organization schemas, optimized image compression (Next-gen WebP/AVIF), and Core Web Vitals performance tuning."
    },
    {
      q: "Can our team easily edit text, images, and content after launch?",
      a: "Absolutely. We provide intuitive, user-friendly CMS administrative panels that allow your internal team to publish blogs, update products, modify copy, and add team members without touching code. We also provide thorough on-site or video training for your staff."
    }
  ];

  const typesOfWebDev = [
    {
      id: "responsive",
      title: "Responsive Web Development",
      desc: "With our responsive web development, provide the ultimate and best user experience of your services even when users operate your website on mobile phones, tablets, or laptops. Seamless fluid layouts and touch-friendly navigation.",
      icon: Smartphone,
      accent: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      id: "custom",
      title: "Custom Web Development",
      desc: "We provide high-performance web development services that help you take your business online and gain momentum for growth. These custom web apps are built strictly as per your business needs and proprietary logic.",
      icon: Code2,
      accent: "text-indigo-600 bg-indigo-50 border-indigo-200"
    },
    {
      id: "ecommerce",
      title: "eCommerce Development",
      desc: "Develop end-to-end eCommerce solutions that help you manage your eCommerce business online without any hassle. Multi-currency checkout, Indian payment gateways, GST invoicing, and real-time inventory tracking.",
      icon: ShoppingBag,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      id: "cms",
      title: "CMS Web Development",
      desc: "Whether a small or large business, we provide complete CMS development services. Create fast, reliable, and flexible CMS systems that help your internal team manage your website easily with zero code.",
      icon: Globe2,
      accent: "text-rose-600 bg-rose-50 border-rose-200"
    },
    {
      id: "consulting",
      title: "Software Consulting",
      desc: "Get detailed consulting from our web app experts and build customized web applications. Know the right solution for your business to maximize your investment in digital technology and architecture.",
      icon: Search,
      accent: "text-amber-600 bg-amber-50 border-amber-200"
    },
    {
      id: "erp-crm",
      title: "ERP / CRM Development",
      desc: "Develop ERP solutions that are customized, fast, and reliable for your business. Organize and manage your business easily without facing any limitations using our custom CRM & ERP development.",
      icon: Database,
      accent: "text-cyan-600 bg-cyan-50 border-cyan-200"
    }
  ];

  const webDevLifecycle = [
    {
      step: "Step 01",
      title: "Planning",
      desc: "Analyzing business objectives, defining project scope, mapping technical requirements, timeline forecasting, and architectural blueprinting.",
      icon: Compass
    },
    {
      step: "Step 02",
      title: "Designing",
      desc: "Crafting wireframes, responsive UI prototypes in Figma, establishing typography hierarchy, design systems, and user-centric conversion paths.",
      icon: Palette
    },
    {
      step: "Step 03",
      title: "Development",
      desc: "Writing modular, clean code using modern standards (Next.js, React, Node.js, PHP, SQL), integrating APIs, CMS backends, and responsive styling.",
      icon: Code2
    },
    {
      step: "Step 04",
      title: "Testing",
      desc: "Cross-device responsiveness testing, cross-browser validation, Core Web Vitals speed tuning, API stress testing, and vulnerability security audits.",
      icon: ShieldCheck
    },
    {
      step: "Step 05",
      title: "Deployment",
      desc: "Production server provisioning, SSL certificate installation, CDN edge caching setup, live DNS cutover, and real-time monitoring.",
      icon: Rocket
    },
    {
      step: "Step 06",
      title: "Maintenance",
      desc: "Ongoing security patches, automated manual cloud backups, CMS version upgrades, uptime monitoring, and SLA-backed technical assistance.",
      icon: Wrench
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/services" },
              { label: "Website Development" }
            ]}
          />
        </div>
      </div>

      {/* Hero Header Banner (Matching Custom Software Development Background Image & Full-Bleed Setup) */}
      <section className="bg-gradient-to-br from-[#0A2647] via-[#134B70] to-[#07192F] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center border-b border-slate-700/60">
        
        {/* Right-Side Full-Bleed Background Image with Seamless Left Fade (Matching Custom Software) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] z-0 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/custom-software-hero.jpg"
              alt="High-Performance Website Development Engineering"
              fill
              priority
              className="object-cover object-right lg:object-center opacity-95 lg:opacity-100"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            {/* Smooth Left Fade Gradient to Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647] via-[#0A2647]/80 via-35% to-transparent hidden lg:block" />
            {/* Mobile Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647] via-[#0A2647]/70 to-[#0A2647]/30 lg:hidden" />
            {/* Soft Ambient Contrast Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2647]/40 via-transparent to-[#0A2647]/60" />
          </div>
        </div>

        {/* Subtle Cyber Grid Accent (64px by 64px) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight font-sans">
              High-Performance <br className="hidden sm:inline" />
              <span className="text-[#00E5FF]">Website Development</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-sans max-w-2xl">
              We design and engineer bespoke corporate websites, eCommerce stores, and Next.js web applications that look world-class, load in sub-seconds, and actively generate business opportunities.
            </p>

            <div className="pt-2 flex items-center">
              <a
                href="#about-web-dev"
                className="px-8 py-4 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/40 flex items-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-98"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Detailed Intro Overview (Top-Rated Web Engineering in Vadodara & Bespoke Architecture) */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200/80" id="about-web-dev">
        {/* Subtle Ambient Radial Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#073F8A07_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28 relative z-10">
          
          {/* Row 1: Concept Visual Left + Overview Copy Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Web Development Concept Graphic Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[2rem] p-2 bg-white/80 border border-slate-200/90 shadow-2xl shadow-blue-950/10 backdrop-blur-xs">
                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 group">
                  <Image
                    src="/images/web-dev-tech-stack-1.jpg"
                    alt="Modern Web Development Technologies - React.js, Next.js, Node.js, HTML5, JavaScript"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Overview Copy */}
            <div className="lg:col-span-6 space-y-5">

              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight text-slate-900 leading-[1.2] font-sans">
                Engineering Custom &amp; Scalable <br />
                <span className="text-[#073F8A]">Web Applications for Industry Leaders</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans">
                We are a top-rated web development company in Vadodara, offering custom and scalable web applications built with the latest technologies. Our solutions are designed around your business goals, requirements, and budget. We provide complete web development services, including design, development, testing, support, and maintenance.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans">
                Our experienced developers help you choose the right architecture, technology stack, and tools for your project. We follow a reliable six-stage process—consultation, planning, UI/UX design, development, testing, and deployment—to deliver fast, secure, and scalable web applications that support your business growth.
              </p>


            </div>
          </div>

          {/* Row 2: Text Left + Supporting Visual Right (Bespoke Architecture & Scalability) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Commercial Architecture Copy */}
            <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">

              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight text-slate-900 leading-[1.2] font-sans">
                Customized Solutions Aligned to <br />
                <span className="text-[#073F8A]">Your Exact Commercial Demands</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans">
                We offer different types of customized web application development as per your different needs. Whether you want to develop a custom web application, eCommerce platform, or enterprise web portals, we are the best fit for your requirements.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans">
                To provide the best-in-class web app solutions, we create web apps using modern frameworks, architecture patterns, and user-centric UI/UX pages. As a top web application development company in Gujarat for over 26 years, we will help you take your business digital.
              </p>


            </div>

            {/* Right Column: Web UI/UX Architecture Visual */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-[2rem] p-2 bg-white/80 border border-slate-200/90 shadow-2xl shadow-slate-900/10 backdrop-blur-xs">
                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 group">
                  <Image
                    src="/images/web-dev-tech-stack-2.jpg"
                    alt="Enterprise CMS and eCommerce Web Technologies - WordPress, TypeScript, MySQL, WooCommerce, PHP"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: TYPES OF WEB DEVELOPMENT (Comprehensive Web Capabilities) */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80" id="types-of-web-dev">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16 space-y-3">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                Comprehensive Web Capabilities
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight font-sans">
              TYPES OF <span className="text-[#073F8A]">WEB DEVELOPMENT</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
              We offer diverse types of customized web application development as per your distinct operational needs, user touchpoints, and functional goals.
            </p>
          </div>

          {/* 6 Capabilities Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {typesOfWebDev.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.id}
                  className="relative rounded-3xl bg-white p-8 sm:p-9 border border-slate-200/80 shadow-xs hover:shadow-2xl hover:shadow-red-950/10 hover:border-[#C11E23]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Top Animated Red Accent Line on Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#C11E23] transition-all duration-300 z-20" />

                  {/* Background Watermark of Left-Side Logo/Icon (Highlights Red on Hover) */}
                  <div className="absolute -top-3 -right-3 w-36 h-36 pointer-events-none select-none z-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="w-28 h-28 stroke-[1.2] text-slate-200/40 group-hover:text-[#C11E23]/20 transition-colors duration-500" />
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      {/* Jewel Icon Box (Left-Side Logo - Highlights Red on Hover) */}
                      <div className="w-14 h-14 rounded-2xl bg-[#073F8A]/10 text-[#073F8A] border border-[#073F8A]/15 flex items-center justify-center shadow-xs group-hover:bg-[#C11E23] group-hover:border-[#C11E23] group-hover:text-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-red-950/20 transition-all duration-300">
                        <Icon className="w-7 h-7 stroke-[1.8]" />
                      </div>

                      {/* Action Arrow Indicator (Highlights Red on Hover) */}
                      <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-400 group-hover:bg-[#C11E23] group-hover:text-white group-hover:border-[#C11E23] group-hover:rotate-45 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Capability Title (Highlights Red on Hover) */}
                    <h3 className="text-xl sm:text-[22px] font-black text-slate-900 group-hover:text-[#C11E23] transition-colors leading-snug font-sans mt-5">
                      {type.title}
                    </h3>

                    {/* Capability Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mt-3.5">
                      {type.desc}
                    </p>
                  </div>

                  {/* Clean Bottom Specification Strip (Highlights Red on Hover) */}
                  <div className="pt-6 mt-6 border-t border-slate-100/90 flex items-center justify-between text-xs font-mono relative z-10">
                    <span className="font-bold text-slate-700 group-hover:text-[#C11E23] transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#C11E23] transition-colors" />
                      Enterprise Ready
                    </span>
                    <span className="text-slate-400 font-semibold group-hover:text-slate-600 transition-colors">Custom Architecture</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 3: Web Development Lifecycle (Ref: HOW WE WORK Wavy Curved Path Flow) */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden border-b border-slate-200/80" id="lifecycle">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-100/25 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight font-sans">
              Web Development <span className="text-[#073F8A]">Lifecycle</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
              Our structured six-stage development lifecycle guarantees transparent progress, architectural rigor, and reliable post-launch operations.
            </p>
          </div>

          {/* 6-Step Wavy Process Grid with Connecting Sine Wave */}
          <div className="relative">
            
            {/* Desktop Connecting Curved Wavy Dashed SVG Line */}
            <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-28 pointer-events-none z-0">
              <svg
                viewBox="0 0 1200 120"
                fill="none"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <path
                  d="M 60,60 C 140,20 180,95 250,60 C 330,25 370,95 450,60 C 530,25 570,95 650,60 C 730,25 770,95 850,60 C 930,25 970,95 1050,60 L 1140,60"
                  stroke="#94A3B8"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  className="opacity-60"
                />
                {/* Arrow indicator at the end */}
                <path
                  d="M 1135,53 L 1150,60 L 1135,67"
                  stroke="#94A3B8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-75"
                />
              </svg>
            </div>

            {/* 6 Process Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
              {webDevLifecycle.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeLifecycleStep === idx;

                // Subtle alternating vertical offset for genuine wavy rhythm
                const waveOffsetClass =
                  idx % 2 === 1
                    ? "lg:-translate-y-3"
                    : "lg:translate-y-2";

                return (
                  <div
                    key={step.step}
                    onMouseEnter={() => setActiveLifecycleStep(idx)}
                    onClick={() => setActiveLifecycleStep(idx)}
                    className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-500 ${waveOffsetClass}`}
                  >
                    {/* Circle Node Stage with Faint Watermark Number Behind */}
                    <div className="relative mb-6 flex items-center justify-center">
                      
                      {/* Giant Outline Watermark Number */}
                      <span className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 text-6xl sm:text-7xl font-mono font-black text-slate-200/60 select-none pointer-events-none transition-all duration-300 group-hover:text-slate-300/80 group-hover:scale-105">
                        0{idx + 1}
                      </span>

                      {/* Circular Action Node */}
                      <div
                        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-500 z-10 ${
                          isActive
                            ? "bg-gradient-to-br from-[#073F8A] via-[#0A2647] to-[#134B70] text-white shadow-2xl scale-110 ring-4 ring-[#073F8A] ring-offset-4 ring-offset-white"
                            : "bg-white text-slate-700 shadow-lg border-2 border-slate-200/90 group-hover:border-[#073F8A]/60 group-hover:text-[#073F8A] group-hover:shadow-xl group-hover:scale-105"
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 ${
                            isActive
                              ? "stroke-[2.2] scale-105 text-white"
                              : "stroke-[1.8] text-slate-700 group-hover:text-[#073F8A] group-hover:scale-110"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-lg sm:text-xl font-black tracking-tight transition-colors duration-300 font-sans ${
                        isActive
                          ? "text-[#073F8A]"
                          : "text-slate-900 group-hover:text-[#073F8A]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Description (Exact Content Preserved) */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans mt-3 max-w-xs">
                      {step.desc}
                    </p>

                    {/* Interactive Active Highlight Pill */}
                    <div className="mt-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                          isActive
                            ? "bg-[#073F8A] text-white shadow-xs"
                            : "bg-slate-100 text-slate-500 border border-slate-200 group-hover:bg-blue-50 group-hover:text-[#073F8A]"
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Client Logo Marquee (Trusted Partnerships) */}
      <TrustedPartnershipsMarquee
        id="clients"
        badgeText="Trusted Partnerships"
        title="Websites Delivered for Leading Enterprises"
        row1={webClientLogosRow1}
        row2={webClientLogosRow2}
      />

      {/* Section 5: Website Development FAQs */}
      <FaqSection
        customFaqs={webDevelopmentFaqs}
        badge="Website Development FAQs"
        title="Direct Answers Regarding Custom Website Engineering"
        subtitle="Key insights on custom code vs templates, responsive mobile design, Core Web Vitals, and CMS flexibility."
      />

      {/* Section 6: Consultation Callout Banner */}
      <CommonCta
        title={
          <>
            Ready to Build a Website that <br className="hidden sm:inline" />
            <span className="text-[#00E5FF]">Actively Converts Visitors?</span>
          </>
        }
        subtitle="Speak with our senior website development architects in Vadodara today. We analyze your requirements and provide a clear, transparent project scope."
        buttonText="Schedule Technical Discovery Call"
        buttonHref="/contact#get-in-touch"
      />
    </main>
  );
}
