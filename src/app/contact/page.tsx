"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/common/Breadcrumb";
import GlobalFootprint from "@/components/home/GlobalFootprint";
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  Calendar as CalendarIcon,
  Globe,
  Check,
  ChevronLeft,
  Sparkles,
  MapPin,
  Building2,
  Phone,
  Mail
} from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"send-request" | "schedule-call">("send-request");

  // Send Request Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Custom Software Development",
    message: "",
    acceptance: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Schedule a Call State
  const [callStep, setCallStep] = useState<1 | 2>(1);
  const [minDate, setMinDate] = useState("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const todayFormatted = `${yyyy}-${mm}-${dd}`;
    setMinDate(todayFormatted);
    setSelectedDate(todayFormatted);

    // If navigated with #get-in-touch or #schedule-call hash, scroll smoothly
    const hash = window.location.hash;
    if (hash === "#schedule-call" || hash === "#schedule") {
      setActiveTab("schedule-call");
      setTimeout(() => {
        const el = document.getElementById("get-in-touch");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else if (hash === "#get-in-touch") {
      setTimeout(() => {
        const el = document.getElementById("get-in-touch");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  const [selectedTimezone, setSelectedTimezone] = useState("India Standard Time (IST)");
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM - 11:30 AM");
  const [callForm, setCallForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [callBooked, setCallBooked] = useState(false);

  const availableSlots = [
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "12:00 PM - 12:30 PM",
    "02:30 PM - 03:00 PM",
    "03:30 PM - 04:00 PM",
    "04:30 PM - 05:00 PM",
    "05:30 PM - 06:00 PM",
    "06:30 PM - 07:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCallSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCallBooked(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Contact Corporate Desk" }]} />
        </div>
      </div>

      {/* Hero Banner (Exact Home Page Hero Gradient: from-[#0A2647] via-[#134B70] to-[#07192F] - No Checks) */}
      <section className="bg-gradient-to-br from-[#0A2647] via-[#134B70] to-[#07192F] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Contact Us
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                You&apos;re just a message away from turning &ldquo;<span className="font-bold text-white">what if</span>&rdquo; into &ldquo;<span className="font-bold text-white">let&apos;s do it!</span>&rdquo;
              </p>
            </div>

            {/* Right Column: 3D Contact Cubes SVG Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px]">
                <Image
                  src="/images/contact-cubes-hero.svg"
                  alt="Contact Us - Phone, Web, Mail Cubes"
                  width={620}
                  height={540}
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Quick Info Cards (Rectangle UI: Address, Phone, Email, Working Hours) */}
      <section className="py-8 sm:py-10 bg-[#F8FAFC]" id="contact-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* 1. Address Card */}
            <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-transparent border border-slate-300/80 hover:border-[#0041F0]/50 transition-all duration-300 flex flex-col justify-center group">
              {/* Background Watermark Icon */}
              <div className="absolute -bottom-2 -right-2 text-[#0041F0] opacity-[0.08] group-hover:opacity-[0.16] group-hover:scale-110 transition-all duration-300 pointer-events-none">
                <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="18" />
                  <path d="M6 24h36" />
                  <ellipse cx="24" cy="24" rx="9" ry="18" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight">
                  Address
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Jeenweb Technologists Pvt. Ltd.,<br />
                  Gotri - Sevasi Road, Vadodara, Gujarat - 390001
                </p>
              </div>
            </div>

            {/* 2. Phone Card */}
            <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-transparent border border-slate-300/80 hover:border-[#0041F0]/50 transition-all duration-300 flex flex-col justify-center group">
              {/* Background Watermark Icon */}
              <div className="absolute -bottom-2 -right-2 text-[#0041F0] opacity-[0.08] group-hover:opacity-[0.16] group-hover:scale-110 transition-all duration-300 pointer-events-none">
                <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M28 8h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3l-4 4v-4h-3a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" />
                  <path d="M10 18c0 14 11 25 25 25l4-4a2 2 0 0 0 0-2.8l-5-5a2 2 0 0 0-2.8 0l-2.5 2.5a18 18 0 0 1-9.2-9.2L23 22a2 2 0 0 0 0-2.8l-5-5a2 2 0 0 0-2.8 0L10 18z" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight">
                  Phone
                </h3>
                <div className="space-y-1 text-slate-600 text-xs sm:text-sm font-medium">
                  <a href="tel:+919825000000" className="block hover:text-[#0041F0] transition-colors">
                    +91 98250 00000
                  </a>
                  <a href="tel:+9102652345678" className="block hover:text-[#0041F0] transition-colors">
                    +91 (0265) 234-5678
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Email Card */}
            <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-transparent border border-slate-300/80 hover:border-[#0041F0]/50 transition-all duration-300 flex flex-col justify-center group">
              {/* Background Watermark Icon */}
              <div className="absolute -bottom-2 -right-2 text-[#0041F0] opacity-[0.08] group-hover:opacity-[0.16] group-hover:scale-110 transition-all duration-300 pointer-events-none">
                <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 16a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V16z" />
                  <path d="M8 16l16 12 16-12" />
                  <path d="M14 12V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight">
                  Email
                </h3>
                <div className="space-y-1 text-slate-600 text-xs sm:text-sm font-medium">
                  <a href="mailto:info@jeenweb.com" className="block hover:text-[#0041F0] transition-colors">
                    info@jeenweb.com
                  </a>
                  <a href="mailto:support@jeenweb.com" className="block hover:text-[#0041F0] transition-colors">
                    support@jeenweb.com
                  </a>
                </div>
              </div>
            </div>

            {/* 4. Working Hours Card */}
            <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-transparent border border-slate-300/80 hover:border-[#0041F0]/50 transition-all duration-300 flex flex-col justify-center group">
              {/* Background Watermark Icon */}
              <div className="absolute -bottom-2 -right-2 text-[#0041F0] opacity-[0.08] group-hover:opacity-[0.16] group-hover:scale-110 transition-all duration-300 pointer-events-none">
                <Clock className="w-20 h-20 sm:w-24 sm:h-24" strokeWidth={1.8} />
              </div>

              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight">
                  Working Hours
                </h3>
                <div className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  <p className="font-medium text-slate-800">Monday to Saturday</p>
                  <p className="text-slate-600 font-semibold text-[#0041F0] mt-0.5">9:30 AM - 6:30 PM IST</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Get in Touch Section - Boxed Card Container (Ref Website Architecture - Compact Height) */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#F8FAFC]" id="get-in-touch">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Boxed Container (Executive Midnight Sapphire Gradient with Fine Tech Grid) */}
          <div className="w-full bg-gradient-to-br from-[#0B1728] via-[#0E2038] to-[#071324] border border-[#1E3A5F]/60 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl">
            
            {/* Subtle Ambient Glows & Fine Grid Texture */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C11E23]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              
              {/* Left Column (Ref: footer-section-lt): Tightly sized around circle graphic */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-4 lg:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-tight">
                  Get in Touch
                </h2>

                <div className="relative w-full flex justify-center lg:justify-start">
                  {/* Ambient Pulsing Radar Aura */}
                  <motion.div
                    animate={{
                      scale: [0.95, 1.08, 0.95],
                      opacity: [0.2, 0.45, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-tr from-[#00E5FF]/20 via-[#1A3B71]/30 to-[#C11E23]/20 rounded-full blur-2xl pointer-events-none"
                  />

                  {/* Outer Expanding Radar Pulse Ring */}
                  <motion.div
                    animate={{
                      scale: [0.85, 1.25],
                      opacity: [0.45, 0]
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-cyan-400/35 pointer-events-none"
                  />

                  {/* Dynamic Floating & Subtle Tilting SVG Graphic */}
                  <motion.div
                    animate={{
                      y: [-6, 6, -6],
                      rotate: [-1.2, 1.2, -1.2]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
                  >
                    <Image
                      src="/images/get-in-touch-circles.svg"
                      alt="Get in Touch"
                      width={400}
                      height={390}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </motion.div>
                </div>
              </div>

              {/* Right Column (Ref: footer-section-rt): Starts immediately next to the circle graphic */}
              <div className="lg:col-span-8 w-full text-white space-y-4">
                
                {/* Tabs Wrapper (Ref Website Style) */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => setActiveTab("send-request")}
                    className={`h-[44px] sm:h-[48px] rounded-[10px] font-bold text-sm sm:text-base transition-all flex items-center justify-center cursor-pointer ${
                      activeTab === "send-request"
                        ? "bg-[#C11E23] hover:bg-[#A3161A] text-white shadow-lg shadow-red-950/50"
                        : "bg-[#132238] border border-white/5 text-slate-300 hover:text-white hover:bg-[#182C48]"
                    }`}
                  >
                    Send Request
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("schedule-call")}
                    className={`h-[44px] sm:h-[48px] rounded-[10px] font-bold text-sm sm:text-base transition-all flex items-center justify-center cursor-pointer ${
                      activeTab === "schedule-call"
                        ? "bg-[#C11E23] hover:bg-[#A3161A] text-white shadow-lg shadow-red-950/50"
                        : "bg-[#132238] border border-white/5 text-slate-300 hover:text-white hover:bg-[#182C48]"
                    }`}
                  >
                    Schedule a Call
                  </button>
                </div>

                {/* TAB 1: SEND REQUEST */}
                {activeTab === "send-request" && (
                  <div className="space-y-3.5 animate-in fade-in duration-300">
                    

                    {submitted ? (
                      <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                        <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Consultation Request Dispatched</h4>
                        <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                          Thank you for contacting Jeenweb. A senior systems engineer from our Vadodara headquarters will get in touch with you within 2 business hours.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-wider uppercase transition-all"
                        >
                          Send Another Inquiry
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="Full Name *"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                              Corporate Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="Corporate Email *"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                              Company
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Company"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="Phone number"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                            Primary Service Focus
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white focus:outline-none focus:border-[#C11E23]"
                          >
                            <option value="Custom Software Development">Custom Software Development</option>
                            <option value="Web Hosting Services">Web Hosting Services</option>
                            <option value="Domain Registration & Management">Domain Registration & Management</option>
                            <option value="SEO and AI Search Optimization">SEO and AI Search Optimization</option>
                            <option value="Social Media and Performance Marketing">Social Media and Performance Marketing</option>
                            <option value="Business Email (M365 / Google Workspace / Zoho)">Business Email (M365 / Google Workspace / Zoho)</option>
                            <option value="General Corporate Inquiry / Multiple Services">General Corporate Inquiry / Multiple Services</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                            Message
                          </label>
                          <textarea
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Message"
                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all resize-none"
                          />
                        </div>

                        {/* Acceptance Policy Checkbox (Exact from Rishabh Soft) */}
                        <div>
                          <label className="flex items-start gap-2.5 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={formData.acceptance}
                              onChange={(e) => setFormData({ ...formData, acceptance: e.target.checked })}
                              className="mt-0.5 w-3.5 h-3.5 rounded border-slate-600 text-[#C11E23] focus:ring-[#C11E23] bg-[#0B1524] accent-[#C11E23]"
                            />
                            <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                              Yes, I am OK to receive further communication over my details shared here.
                            </span>
                          </label>
                        </div>

                        {/* Submit Button (White Background) */}
                        <div className="pt-1">
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-lg bg-white hover:bg-slate-100 text-[#0B1728] font-bold text-sm sm:text-base transition-all shadow-xl hover:scale-[1.005] active:scale-[0.995] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                          >
                            {loading ? (
                              <span>Processing Dispatch...</span>
                            ) : (
                              <>
                                <span>Submit</span>
                                <ArrowRight className="w-4 h-4 text-[#C11E23]" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}

                {/* TAB 2: SCHEDULE A CALL */}
                  {activeTab === "schedule-call" && (
                    <div className="space-y-5 animate-in fade-in duration-300">
                      {callBooked ? (
                        <div className="p-8 rounded-2xl bg-blue-950/40 border border-blue-500/40 text-center space-y-4">
                          <div className="w-14 h-14 rounded-full bg-blue-500/20 text-[#00E5FF] flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-8 h-8" />
                          </div>
                          <h4 className="text-xl font-bold text-white">30-Min Call Confirmed!</h4>
                          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                            Your technical consultation is scheduled for <span className="text-white font-bold">{selectedDate}</span> at <span className="text-[#00E5FF] font-bold">{selectedSlot}</span> ({selectedTimezone}). A calendar invitation has been sent to your email.
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setCallBooked(false);
                              setCallStep(1);
                            }}
                            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-wider uppercase transition-all"
                          >
                            Book Another Slot
                          </button>
                        </div>
                      ) : callStep === 1 ? (
                        <div className="space-y-3.5">
                          {/* Duration Badge */}
                          <div className="flex flex-wrap items-center gap-3 p-2 rounded-lg bg-[#252525] text-xs font-mono text-slate-300">
                            <div className="flex items-center gap-1.5 text-emerald-400">
                              <Clock className="w-3.5 h-3.5" />
                              <span>30 Min Discovery</span>
                            </div>
                            <span className="text-slate-600">•</span>
                            <div className="flex items-center gap-1.5 text-slate-300">
                              <Globe className="w-3.5 h-3.5 text-[#00E5FF]" />
                              <span>Google Meet / On-Site Vadodara</span>
                            </div>
                          </div>

                          {/* 1. Date Selection (Calendar Picker - No Previous Dates) */}
                          <div className="space-y-1.5">
                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
                              1. Select Preferred Date:
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#C11E23]">
                                <CalendarIcon className="w-4 h-4" />
                              </div>
                              <input
                                type="date"
                                min={minDate}
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white font-medium focus:outline-none focus:border-[#C11E23] [color-scheme:dark] cursor-pointer"
                              />
                            </div>
                            {selectedDate && (
                              <div className="flex items-center gap-1.5 text-xs text-slate-300 pt-0.5">
                                <span className="text-[11px] text-slate-400 font-mono">Selected:</span>
                                <span className="font-semibold text-white">
                                  {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                  })}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* 2. Timezone */}
                          <div className="space-y-1.5">
                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
                              2. Timezone:
                            </label>
                            <select
                              value={selectedTimezone}
                              onChange={(e) => setSelectedTimezone(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C11E23]"
                            >
                              <option value="India Standard Time (IST)">India Standard Time (IST) — UTC+05:30</option>
                              <option value="Greenwich Mean Time (GMT)">Greenwich Mean Time (GMT) — UTC+00:00</option>
                              <option value="Eastern Standard Time (EST)">Eastern Standard Time (EST) — UTC-05:00</option>
                              <option value="Central Standard Time (CST)">Central Standard Time (CST) — UTC-06:00</option>
                              <option value="Pacific Standard Time (PST)">Pacific Standard Time (PST) — UTC-08:00</option>
                              <option value="Gulf Standard Time (GST)">Gulf Standard Time (Dubai) — UTC+04:00</option>
                              <option value="Singapore Standard Time (SGT)">Singapore Standard Time (SGT) — UTC+08:00</option>
                            </select>
                          </div>

                          {/* 3. Slot Selection */}
                          <div className="space-y-1.5">
                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
                              3. Choose 30-Min Slot:
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                              {availableSlots.map((slot) => (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setSelectedSlot(slot)}
                                  className={`py-2 px-3 rounded-lg border text-xs font-mono transition-all flex items-center justify-between ${
                                    selectedSlot === slot
                                      ? "bg-[#C11E23]/30 border-[#C11E23] text-white font-bold"
                                      : "bg-[#0B1524] border-white/10 text-slate-300 hover:border-slate-500"
                                  }`}
                                >
                                  <span>{slot}</span>
                                  {selectedSlot === slot && <Check className="w-3 h-3 text-[#C11E23]" />}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Continue Button */}
                          <div className="pt-1">
                            <button
                              type="button"
                              onClick={() => setCallStep(2)}
                              className="w-full py-3 rounded-lg bg-white hover:bg-slate-100 text-[#0B1728] font-bold text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-[1.005] active:scale-[0.995] flex items-center justify-center gap-2 cursor-pointer"
                            >
                              <span>Continue with {selectedSlot}</span>
                              <ArrowRight className="w-4 h-4 text-[#C11E23]" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Step 2: Attendee Info */
                        <form onSubmit={handleCallSubmit} className="space-y-3">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                            <button
                              type="button"
                              onClick={() => setCallStep(1)}
                              className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" />
                              <span>Change Time Slot</span>
                            </button>
                            <span className="text-xs font-mono text-[#C11E23] font-bold">
                              {selectedDate} • {selectedSlot}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                                Your Name *
                              </label>
                              <input
                                type="text"
                                required
                                value={callForm.name}
                                onChange={(e) => setCallForm({ ...callForm, name: e.target.value })}
                                placeholder="Your Name"
                                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white focus:outline-none focus:border-[#C11E23]"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                                Phone Number *
                              </label>
                              <input
                                type="tel"
                                required
                                value={callForm.phone}
                                onChange={(e) => setCallForm({ ...callForm, phone: e.target.value })}
                                placeholder="+91 Phone number"
                                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white focus:outline-none focus:border-[#C11E23]"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                              Business Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={callForm.email}
                              onChange={(e) => setCallForm({ ...callForm, email: e.target.value })}
                              placeholder="business@company.com"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white focus:outline-none focus:border-[#C11E23]"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                              Discussion Topics / Project Scope (Optional)
                            </label>
                            <textarea
                              rows={2}
                              value={callForm.notes}
                              onChange={(e) => setCallForm({ ...callForm, notes: e.target.value })}
                              placeholder="Briefly describe what your organization aims to build or automate..."
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1524] border border-white/10 text-sm text-white focus:outline-none focus:border-[#C11E23] resize-none"
                            />
                          </div>

                          <div className="pt-1">
                            <button
                              type="submit"
                              disabled={loading}
                              className="w-full py-3 rounded-lg bg-white hover:bg-slate-100 text-[#0B1728] font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-xl hover:scale-[1.005] active:scale-[0.995] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                              {loading ? (
                                <span>Reserving Calendar Slot...</span>
                              ) : (
                                <>
                                  <span>Confirm 30-Min Consultation</span>
                                  <ArrowRight className="w-4 h-4 text-[#C11E23]" />
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Geographic Reach - Corporate Operations Across The World */}
      <GlobalFootprint />
    </main>
  );
}
