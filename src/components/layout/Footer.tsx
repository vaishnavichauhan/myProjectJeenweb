"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  ShieldCheck,
  Lock,
  ArrowUpRight,
  ArrowRight,
  ArrowUp
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Brand Sapphire Navy & Red Editorial Footer */}
      <footer className="bg-gradient-to-b from-[#0A2647] via-[#091E36] to-[#051120] text-slate-200 text-sm pb-12 relative overflow-hidden">
        {/* Vibrant Ambient Background Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C11E23]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          {/* Main Footer 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/15">
            {/* Col 1: Profile & Trust (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Link 
                href="/" 
                className="inline-flex items-center justify-center group bg-white hover:bg-slate-50 rounded-xl shadow-md px-4 py-2.5 sm:px-5 sm:py-3 mb-4 transition-all duration-200 border border-white/20"
              >
                <Image
                  src="/images/jeenweb-logo.png"
                  alt="Jeenweb Technologists Pvt. Ltd."
                  width={240}
                  height={76}
                  unoptimized
                  className="h-10 sm:h-12 lg:h-13 w-auto max-w-[180px] sm:max-w-[210px] lg:max-w-[230px] object-contain group-hover:scale-105 transition-transform"
                />
              </Link>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-sm font-sans">
                Jeenweb Technologists Pvt. Ltd. delivers authentic IT solutions, enterprise web hosting, custom software engineering, and AI-enabled search optimization across Gujarat and 12+ international markets.
              </p>

              <div className="pt-2 space-y-3 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="font-medium">100% Licensed Software &amp; Authentic Code</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="font-medium">CageFS Containerized Hosting &amp; Backups</span>
                </div>
              </div>
            </div>

            {/* Col 2: Core Services (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-400">
                Core Services
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/services/domain" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>Domain Registration &amp; Management</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/hosting" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>NVMe Web Hosting Services</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-software" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>Custom Software &amp; ERP Development</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>SEO &amp; AI Search Optimization</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/social-media" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>Social Media &amp; Performance Ads</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                  </Link>
                </li>
              </ul>
            <div className="flex items-center gap-3 mt-4">
              <Link
                href="/contact#get-in-touch"
                className="px-7 py-3.5 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/40 hover:scale-[1.02] flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            </div>

            {/* Col 3: Company & Heritage (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-400">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Jeenweb
                  </Link>
                </li>
                <li>
                  <Link href="/about/history" className="hover:text-white transition-colors">
                    26-Year Timeline
                  </Link>
                </li>
                <li>
                  <Link href="/about/team" className="hover:text-white transition-colors">
                    Leadership Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>Careers</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">Hiring</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#partners" className="hover:text-white transition-colors">
                    Strategic Alliances
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Advisory
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Vadodara Corporate Locations (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-400">
                Vadodara Offices
              </h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <strong className="text-white block font-semibold">Corporate Headquarters:</strong>
                  <span className="text-slate-300 text-xs sm:text-sm">Jeenweb Technologists Pvt. Ltd., Vadodara, Gujarat - 390001</span>
                </div>
                <div>
                  <strong className="text-white block font-semibold">Tech Center:</strong>
                  <span className="text-slate-300 text-xs sm:text-sm">Alkapuri / Productivity Road Hub, Vadodara</span>
                </div>
                <div className="pt-3 border-t border-white/15 flex flex-col gap-2 text-white">
                  <div className="flex items-center gap-2.5 font-medium">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span className="text-sm sm:text-base">+91 (0265) 234-5678</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-sm sm:text-base">info@jeenweb.com</span>
                  </div>
                </div>

                {/* Social Media Links (Right Side Last Column) */}
                <div className="pt-3 border-t border-white/15 flex items-center gap-3 text-white">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-full border border-white/40 hover:border-white text-white hover:bg-white/15 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full border border-white/40 hover:border-white text-white hover:bg-white/15 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full border border-white/40 hover:border-white text-white hover:bg-white/15 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs sm:text-sm font-mono">
            <div>
              &copy; 2000&ndash;2026 Jeenweb Technologists Pvt. Ltd. All rights reserved.
            </div>

            
          </div>

        </div>
      </footer>

      {/* Footer Consultation Trigger Modal */}
          </>
  );
}
