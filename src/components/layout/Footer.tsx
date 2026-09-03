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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C11E23]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          {/* Main Footer 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/15">
            {/* Col 1: Profile & Trust (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="block w-full group bg-white/95 hover:bg-white rounded-2xl shadow-md transition-all mb-4 overflow-hidden">
                <div className="w-full h-16 sm:h-20 relative">
                  <Image
                    src="/images/logo.png"
                    alt="Jeenweb Technologists Pvt. Ltd."
                    fill
                    className="object-contain object-center scale-[1.8] transition-transform group-hover:scale-[1.82]"
                  />
                </div>
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
                  <div className="w-7 h-7 rounded-lg bg-cyan-400/20 text-[#00E5FF] flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="font-medium">CageFS Containerized Hosting &amp; Backups</span>
                </div>
              </div>
            </div>

            {/* Col 2: Core Services (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
                Core Services
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/services/domain" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>Domain Registration &amp; Management</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00E5FF]" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/hosting" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>NVMe Web Hosting Services</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00E5FF]" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-software" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>Custom Software &amp; ERP Development</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00E5FF]" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>SEO &amp; AI Search Optimization</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00E5FF]" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/social-media" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>Social Media &amp; Performance Ads</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00E5FF]" />
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
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
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
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
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
                    <Phone className="w-4 h-4 text-[#00E5FF]" />
                    <span className="text-sm sm:text-base">+91 (0265) 234-5678</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium">
                    <Mail className="w-4 h-4 text-[#00E5FF]" />
                    <span className="text-sm sm:text-base">info@jeenweb.com</span>
                  </div>
                </div>

                {/* Social Media Links (Right Side Last Column) */}
                <div className="pt-3 border-t border-white/15 flex items-center gap-4 text-slate-300">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 hover:scale-110 transition-all">
                    <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 hover:scale-110 transition-all">
                    <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 hover:scale-110 transition-all">
                    <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
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
