"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Globe,
  ArrowRight,
  Sparkles,
  Server,
  Lock,
  Heart
} from "lucide-react";
import ConsultationModal from "../common/ConsultationModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Main Corporate Footer */}
      <footer className="bg-[#070F1E] text-slate-400 text-xs pt-28 sm:pt-32 lg:pt-36 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
            {/* Col 1: Brand & Profile */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block group">
                <div className="inline-flex items-center bg-white rounded-xl px-3.5 py-2 shadow-sm border border-white/20 transition-transform group-hover:scale-[1.02]">
                  <Image
                    src="/images/logo.jpg"
                    alt="Jeenweb Technologists Pvt. Ltd."
                    width={200}
                    height={50}
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </div>
              </Link>

              <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed max-w-sm">
                Jeenweb Technologists Pvt. Ltd. delivers authentic IT solutions, enterprise web hosting, custom software engineering, and AI-enabled search optimization across Gujarat and 12+ international markets.
              </p>

              <div className="pt-2 flex flex-col gap-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Licensed Software & Authentic Code Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>CageFS Containerized Hosting & Instant Manual Backups</span>
                </div>
              </div>
            </div>

            {/* Col 2: Core Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Core Services
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/services/domain" className="hover:text-white transition-colors">
                    Domain Registration & Management
                  </Link>
                </li>
                <li>
                  <Link href="/services/hosting" className="hover:text-white transition-colors">
                    Web Hosting Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-software" className="hover:text-white transition-colors">
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="hover:text-white transition-colors">
                    SEO and AI Search Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services/social-media" className="hover:text-white transition-colors">
                    Social Media and Performance Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: About & Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Company & Heritage
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Jeenweb Technologists
                  </Link>
                </li>
                <li>
                  <Link href="/about/history" className="hover:text-white transition-colors">
                    26-Year Timeline (2000–2026)
                  </Link>
                </li>
                <li>
                  <Link href="/about/team" className="hover:text-white transition-colors">
                    Leadership Team & Board
                  </Link>
                </li>
                <li>
                  <Link href="/#partners" className="hover:text-white transition-colors">
                    Strategic Alliances & Authorizations
                  </Link>
                </li>
                <li>
                  <Link href="/#global-footprint" className="hover:text-white transition-colors">
                    Global 12-Country Operations
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Corporate Advisory Desk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Vadodara Corporate Locations */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Vadodara Offices
              </h4>
              <div className="space-y-3 text-slate-400">
                <div>
                  <strong className="text-slate-200 block">Main Corporate Office:</strong>
                  <span>Jeenweb Technologists Pvt. Ltd., Vadodara, Gujarat, India - 390001</span>
                </div>
                <div>
                  <strong className="text-slate-200 block">Engineering & Digital Hub:</strong>
                  <span>Alkapuri / Productivity Road Tech Center, Vadodara</span>
                </div>
                <div className="pt-1 text-slate-300">
                  <div><strong>Phone:</strong> +91 (0265) 234-5678</div>
                  <div><strong>Email:</strong> info@jeenweb.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>
              &copy; 2000&ndash;2026 Jeenweb Technologists Pvt. Ltd. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-slate-300 transition-colors">
                Company Ethics
              </Link>
              <span>•</span>
              <Link href="/services/hosting" className="hover:text-slate-300 transition-colors">
                Uptime SLA
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">
                Security & Data Integrity
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Consultation Trigger Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
