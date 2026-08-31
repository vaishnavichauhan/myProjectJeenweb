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
  MapPin
} from "lucide-react";
import ConsultationModal from "../common/ConsultationModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      title: "Custom Software Development",
      desc: "ERP, CRM, Visitor & School systems tailored to physical workflows",
      href: "/services/custom-software",
      icon: Cpu,
      color: "text-indigo-700 bg-indigo-50"
    },
    {
      title: "SEO and AI Search Optimization",
      desc: "Dominate Google search, ChatGPT citations & AI answer engines",
      href: "/services/seo",
      icon: Search,
      color: "text-purple-700 bg-purple-50"
    },
    {
      title: "Social Media and Performance Marketing",
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
      desc: "From web hosting in 2000 to dual offices & ETS PROP in 2026",
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
      {/* Top Notification / Corporate Desk Bar */}
      <div className="bg-[#0B192C] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 font-medium">Headquartered in Vadodara, Gujarat</span>
            </div>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-300">26+ Years of Proven IT Reliability</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+919824030580"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-[#D32F2F] group-hover:scale-110 transition-transform" />
              <span>Desk: <strong className="text-white">+91 98240 30580</strong></span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="mailto:info@jeenweb.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-[#D32F2F] group-hover:scale-110 transition-transform" />
              <span>info@jeenweb.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80"
            : "bg-white border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo.jpg"
                alt="Jeenweb Technologists Pvt. Ltd."
                width={220}
                height={55}
                className="h-11 sm:h-12 w-auto object-contain object-left group-hover:opacity-95 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  pathname === "/"
                    ? "text-[#16325B] bg-slate-100 font-bold"
                    : "text-slate-700 hover:text-[#16325B] hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    pathname.startsWith("/services")
                      ? "text-[#16325B] bg-slate-100 font-bold"
                      : "text-slate-700 hover:text-[#16325B] hover:bg-slate-50"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-[#D32F2F]" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Services Mega Dropdown */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white rounded-2xl shadow-2xl shadow-slate-950/15 border border-slate-200 p-4 mt-2 grid grid-cols-2 gap-2 animate-fadeIn z-50">
                    <div className="col-span-2 pb-2.5 px-1 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-3.5 bg-[#D32F2F] rounded-full" />
                        Core Engineering Services
                      </span>
                      <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        Vadodara, Gujarat
                      </span>
                    </div>

                    {serviceLinks.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all group border ${
                            isActive
                              ? "bg-slate-100 border-slate-300"
                              : "hover:bg-slate-50 border-transparent hover:border-slate-200"
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl ${item.color} flex-shrink-0 transition-transform group-hover:scale-105 shadow-sm`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-[#16325B] transition-colors flex items-center justify-between flex-1">
                            <span>{item.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D32F2F]" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    pathname.startsWith("/about")
                      ? "text-[#16325B] bg-slate-100 font-bold"
                      : "text-slate-700 hover:text-[#16325B] hover:bg-slate-50"
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      aboutDropdownOpen ? "rotate-180 text-[#D32F2F]" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* About Dropdown Menu */}
                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-[300px] bg-white rounded-2xl shadow-2xl shadow-slate-950/15 border border-slate-200 p-3 mt-2 space-y-1 animate-fadeIn z-50">
                    <div className="pb-2 px-1 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-3.5 bg-[#16325B] rounded-full" />
                        About Jeenweb
                      </span>
                      <span className="text-xs text-slate-700 font-bold bg-slate-100 px-2 py-0.5 rounded-md">26+ Years</span>
                    </div>

                    {aboutLinks.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setAboutDropdownOpen(false)}
                          className={`flex items-center gap-3 p-2.5 rounded-xl transition-all group border ${
                            isActive
                              ? "bg-slate-100 border-slate-300"
                              : "hover:bg-slate-50 border-transparent hover:border-slate-200"
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${item.color} flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-[#16325B] transition-colors flex items-center justify-between flex-1">
                            <span>{item.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D32F2F]" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/#tech-stack"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#16325B] hover:bg-slate-50 transition-colors"
              >
                Technologies
              </Link>

              <Link
                href="/#faqs"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#16325B] hover:bg-slate-50 transition-colors"
              >
                FAQs
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  pathname === "/contact"
                    ? "text-[#16325B] bg-slate-100 font-bold"
                    : "text-slate-700 hover:text-[#16325B] hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-900/20 hover:shadow-red-900/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="px-3.5 py-2 rounded-lg bg-[#D32F2F] text-white text-xs font-bold shadow-sm"
              >
                Consult
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto animate-fadeIn">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="pt-2">
                <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-[#D32F2F] rounded-full" />
                  Our Services
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2 mt-1">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#16325B] hover:bg-slate-100 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-[#16325B]" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile About Accordion */}
              <div className="pt-2">
                <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-[#16325B] rounded-full" />
                  About Jeenweb
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2 mt-1">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#16325B] hover:bg-slate-100 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-[#16325B]" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/#tech-stack"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100"
              >
                Technologies
              </Link>

              <Link
                href="/#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100"
              >
                FAQs
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Bottom Contact Actions */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <a
                href="tel:+919824030580"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D32F2F]" />
                <span>Call: +91 98240 30580</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConsultationModalOpen(true);
                }}
                className="w-full py-3 rounded-lg bg-[#D32F2F] text-white font-bold text-xs uppercase tracking-wider shadow-sm text-center flex items-center justify-center gap-2"
              >
                <span>Schedule a Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
}
