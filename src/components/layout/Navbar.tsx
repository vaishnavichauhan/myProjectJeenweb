"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Server,
  Cpu,
  Search,
  TrendingUp,
  Mail,
  ShieldCheck,
  Building2,
  History,
  Users,
  Phone,
  ArrowRight,
  Sparkles,
  MapPin,
  Layout,
  Clock
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
  }, [pathname]);

  const serviceLinks = [
    {
      title: "Domain Registration & Management",
      desc: "Instant name lookup, WHOIS privacy & Anycast DNS",
      href: "/services/domain",
      icon: Globe,
      color: "text-[#16325B] bg-slate-100"
    },
    {
      title: "Web Hosting Services",
      desc: "On-demand manual backups, CageFS security & 99.9% uptime",
      href: "/services/hosting",
      icon: Server,
      color: "text-emerald-700 bg-emerald-50"
    },
    {
      title: "Website Development",
      desc: "High-performance corporate portals, eCommerce & custom React/Next.js",
      href: "/services/website-development",
      icon: Layout,
      color: "text-blue-700 bg-blue-50"
    },
    {
      title: "Custom Software Development",
      desc: "ERP, CRM, Visitor & School systems tailored to physical workflows",
      href: "/services/custom-software",
      icon: Cpu,
      color: "text-indigo-700 bg-indigo-50"
    },
    {
      title: "SEO & AI Search",
      desc: "Dominate Google search, ChatGPT citations & AI answer engines",
      href: "/services/seo",
      icon: Search,
      color: "text-purple-700 bg-purple-50"
    },
    {
      title: "Social Media & Performance Marketing",
      desc: "Meta & LinkedIn ads, content marketing & brand engagement",
      href: "/services/social-media",
      icon: TrendingUp,
      color: "text-rose-700 bg-rose-50"
    }
  ];

  const aboutLinks = [
    {
      title: "Company Overview",
      desc: "26+ years of dependable enterprise IT and software in Gujarat",
      href: "/about",
      icon: Building2,
      color: "text-[#16325B] bg-slate-100"
    },
    {
      title: "Company History & Timeline",
      desc: "From web hosting in 2000 to dual office & ETS PROP in 2026",
      href: "/about/history",
      icon: History,
      color: "text-amber-700 bg-amber-50"
    },
    {
      title: "Leadership Team & Board",
      desc: "Utpal Shah, Tatvam Shah (JITO IT Consultant) & Exita Shah",
      href: "/about/team",
      icon: Users,
      color: "text-emerald-700 bg-emerald-50"
    }
  ];

  return (
    <>
      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 w-full font-navbar">
        {/* Top Header Bar with Company Info */}
        <div className="bg-gradient-to-r from-[#06172d] via-[#0a2342] to-[#06172d] text-slate-300 border-b border-white/10 text-[12px] sm:text-[13px] relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-9 sm:h-10">
              {/* Left: Contact Info (Phone, Email) */}
              <div className="flex items-center gap-3 sm:gap-5">
                {/* Phone Numbers */}
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a
                    href="tel:+919824466017"
                    className="hover:text-white transition-colors font-medium whitespace-nowrap"
                  >
                    +91 98244 66017
                  </a>
                  <span className="hidden xl:inline text-slate-500">/</span>
                  <a
                    href="tel:+919824061620"
                    className="hidden xl:inline hover:text-white transition-colors font-medium whitespace-nowrap"
                  >
                    +91 98240 61620
                  </a>
                </div>

                <span className="text-white/20 hidden sm:inline">|</span>

                {/* Email */}
                <div className="hidden sm:flex items-center gap-1.5 text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a
                    href="mailto:info@jeenweb.com"
                    className="hover:text-white transition-colors font-medium whitespace-nowrap"
                  >
                    info@jeenweb.com
                  </a>
                </div>
              </div>

              {/* Right: Trust Indicator & Location */}
              <div className="flex items-center gap-3 sm:gap-5">
                {/* Trust Badge */}
                <div className="hidden md:flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-slate-300 font-medium text-[11px] uppercase tracking-wider whitespace-nowrap">
                    26+ Years of IT Trust
                  </span>
                </div>

                <span className="text-white/20 hidden md:inline">|</span>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#E11D48] shrink-0" />
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors whitespace-nowrap font-medium"
                  >
                    Vadodara, Gujarat, India
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar (Clean White Background) */}
        <div
          className={`w-full bg-white transition-all duration-300 ${
            isScrolled
              ? "shadow-md border-b border-slate-200"
              : "border-b border-slate-200/90"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 lg:h-[92px]">
            {/* Authentic Company Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 group py-1">
              <Image
                src="/images/jeenweb-logo.png"
                alt="Jeenweb Technologists Pvt. Ltd."
                width={100}
                height={90}
                unoptimized
                className="h-14 sm:h-16 lg:h-[78px] w-auto max-w-[260px] sm:max-w-[320px] lg:max-w-[200px] object-contain object-left block group-hover:opacity-95 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8 h-full">
              <Link
                href="/"
                className={`inline-flex items-center h-full text-[17px] tracking-tight transition-colors ${
                  pathname === "/"
                    ? "text-[#1A3B71] font-extrabold"
                    : "text-slate-700 hover:text-[#1A3B71] font-semibold"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`inline-flex items-center gap-1.5 h-full text-[17px] tracking-tight transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-[#1A3B71] font-extrabold"
                      : "text-slate-700 hover:text-[#1A3B71] font-semibold"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4.5 h-4.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-[#1A3B71]" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Services Mega Dropdown (Clean Direct List) */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-2xl shadow-slate-900/15 border border-slate-200 p-3 grid grid-cols-2 gap-2 animate-fadeIn z-50 text-slate-900">
                    {serviceLinks.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all group border ${
                            isActive
                              ? "bg-slate-100 border-slate-300"
                              : "hover:bg-slate-50 border-transparent hover:border-slate-200"
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${item.color} flex-shrink-0 transition-transform group-hover:scale-105 shadow-xs`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-[#1A3B71] transition-colors flex items-center justify-between flex-1">
                            <span>{item.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#E11D48]" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className={`inline-flex items-center gap-1.5 h-full text-[17px] tracking-tight transition-colors ${
                    pathname.startsWith("/about")
                      ? "text-[#1A3B71] font-extrabold"
                      : "text-slate-700 hover:text-[#1A3B71] font-semibold"
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4.5 h-4.5 transition-transform duration-200 ${
                      aboutDropdownOpen ? "rotate-180 text-[#1A3B71]" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* About Dropdown Menu (Clean Direct List) */}
                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-[280px] bg-white rounded-xl shadow-2xl shadow-slate-900/15 border border-slate-200 p-2 space-y-1 animate-fadeIn z-50 text-slate-900">
                    {aboutLinks.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setAboutDropdownOpen(false)}
                          className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group border ${
                            isActive
                              ? "bg-slate-100 border-slate-300"
                              : "hover:bg-slate-50 border-transparent hover:border-slate-200"
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${item.color} flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-[#1A3B71] transition-colors flex items-center justify-between flex-1">
                            <span>{item.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#E11D48]" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/#tech-stack"
                className="inline-flex items-center h-full text-[17px] font-semibold tracking-tight text-slate-700 hover:text-[#1A3B71] transition-colors"
              >
                Technologies
              </Link>

              <Link
                href="/#faqs"
                className="inline-flex items-center h-full text-[17px] font-semibold tracking-tight text-slate-700 hover:text-[#1A3B71] transition-colors"
              >
                FAQs
              </Link>

              <Link
                href="/careers"
                className={`inline-flex items-center h-full text-[17px] tracking-tight transition-colors ${
                  pathname === "/careers"
                    ? "text-[#1A3B71] font-extrabold"
                    : "text-slate-700 hover:text-[#1A3B71] font-semibold"
                }`}
              >
                Careers
              </Link>

              {/* Contact Us Outline Button */}
              <Link
                href="/contact"
                className={`inline-flex items-center px-5 py-2 rounded-xl text-[15px] font-bold border-2 transition-all duration-200 ${
                  pathname === "/contact"
                    ? "border-[#1A3B71] bg-[#1A3B71] text-white shadow-sm"
                    : "border-[#1A3B71] text-[#1A3B71] hover:bg-[#1A3B71] hover:text-white active:scale-95"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer (Clean White) */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn text-slate-900">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="pt-2">
                <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-[#E11D48] rounded-full" />
                  Our Services
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2 mt-1">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#1A3B71] hover:bg-slate-100"
                    >
                      <item.icon className="w-3.5 h-3.5 text-[#1A3B71]" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile About Accordion */}
              <div className="pt-2">
                <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-[#16325B] rounded-full" />
                  About Us
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2 mt-1">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#1A3B71] hover:bg-slate-100"
                    >
                      <item.icon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/#tech-stack"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
              >
                Technologies
              </Link>

              <Link
                href="/#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
              >
                FAQs
              </Link>

              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
              >
                Careers
              </Link>

              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold border-2 transition-all text-center ${
                    pathname === "/contact"
                      ? "border-[#1A3B71] bg-[#1A3B71] text-white"
                      : "border-[#1A3B71] text-[#1A3B71] hover:bg-[#1A3B71] hover:text-white"
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile Bottom Contact Actions & Company Info */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2 text-xs text-slate-700">
                <div className="font-bold text-slate-900 flex items-center justify-between pb-1 border-b border-slate-200/80">
                  <span>Jeenweb Technologists Pvt. Ltd.</span>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Since 2000</span>
                </div>
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#1A3B71] shrink-0" />
                    <div className="flex items-center gap-2">
                      <a href="tel:+919824466017" className="font-semibold text-slate-900 hover:text-[#1A3B71]">+91 98244 66017</a>
                      <span className="text-slate-300">/</span>
                      <a href="tel:+919824061620" className="font-semibold text-slate-900 hover:text-[#1A3B71]">61620</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#1A3B71] shrink-0" />
                    <a href="mailto:info@jeenweb.com" className="font-semibold text-slate-900 hover:text-[#1A3B71]">info@jeenweb.com</a>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                    <span>Vadodara, Gujarat 390011, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-[#1A3B71] shrink-0" />
                    <span>Mon – Sat: 9:30 AM – 7:00 PM</span>
                  </div>
                </div>

                {/* Mobile Socials */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
                  <a
                    href="https://www.facebook.com/Jeenweb.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#1A3B71]"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/jeenweb.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#E11D48]"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/jeenweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A66C2]"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <Link
                href="/contact#get-in-touch"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-950/20 text-center flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>Schedule a Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
          </>
  );
}
