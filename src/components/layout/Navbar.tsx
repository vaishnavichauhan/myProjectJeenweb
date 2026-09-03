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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);  const pathname = usePathname();

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
      {/* Main Sticky Header (Clean White Background) */}
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
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
                src="/images/logo.png"
                alt="Jeenweb Technologists Pvt. Ltd."
                width={320}
                height={85}
                className="h-14 sm:h-16 lg:h-[72px] w-auto max-w-[300px] sm:max-w-[380px] object-contain object-left block group-hover:opacity-95 transition-opacity"
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

        {/* Mobile Menu Drawer (Clean White) */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn text-slate-900">
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

            {/* Mobile Bottom Contact Actions */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <a
                href="tel:+919824030580"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>Call: +91 98240 30580</span>
              </a>
              <Link
                href="/contact#get-in-touch"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs uppercase tracking-wider shadow-sm text-center flex items-center justify-center gap-2 transition-all"
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
