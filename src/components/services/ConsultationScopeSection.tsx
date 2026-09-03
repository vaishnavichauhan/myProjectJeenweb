"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Calendar as CalendarIcon,
  Globe,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building,
  Users,
  Send,
  Sparkles,
  Check,
  ChevronLeft
} from "lucide-react";

export default function ConsultationScopeSection() {
  const [activeTab, setActiveTab] = useState<"send-request" | "schedule-call">("send-request");

  // Send Request Form State
  const [requestForm, setRequestForm] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    acceptance: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Schedule Call State
  const [callStep, setCallStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState<string>("2026-09-04");
  const [selectedTimezone, setSelectedTimezone] = useState("India Standard Time (IST)");
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM - 11:30 AM");
  const [callForm, setCallForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isCallBooked, setIsCallBooked] = useState(false);

  // Dates for Schedule a Call (Next 5 Business Days)
  const availableDates = [
    { label: "Thu, Sep 4", value: "2026-09-04", dayName: "Tomorrow" },
    { label: "Fri, Sep 5", value: "2026-09-05", dayName: "Friday" },
    { label: "Mon, Sep 8", value: "2026-09-08", dayName: "Monday" },
    { label: "Tue, Sep 9", value: "2026-09-09", dayName: "Tuesday" },
    { label: "Wed, Sep 10", value: "2026-09-10", dayName: "Wednesday" }
  ];

  // Time Slots
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

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleCallBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCallBooked(true);
    }, 900);
  };

  return (
    <section
      className="py-16 lg:py-24 bg-[#0B1728] text-white relative overflow-hidden border-t border-slate-800"
      id="scope-review"
    >
      {/* Background Gradients & Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C11E23]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#1A3B71]/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Rishabh Soft Inspired Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Graphic & Trust Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
                <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Vadodara Engineering Desk</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Request Technical Consultation or <br className="hidden sm:inline" />
                <span className="text-[#00E5FF]">Scope Review</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                You don’t have to figure out your software architecture alone. Reach out directly to our senior systems engineers in Vadodara—we’ll assess your current workflows, evaluate bottlenecks, and blueprint a scalable solution.
              </p>
            </div>

            {/* Custom Technical Graphic (Matching Rishabh Get in Touch Graphic) */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 via-[#10223B]/60 to-slate-900/80 border border-slate-700/60 shadow-xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C11E23]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    Live Response Desk
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Gujarat / India</span>
              </div>

              {/* Reference Concentric Circle Image from Ref Website */}
              <div className="relative py-2 flex items-center justify-center overflow-hidden mb-4">
                <Image
                  src="/images/get-in-touch-circles.svg"
                  alt="Get in Touch Circle Graphic"
                  width={380}
                  height={370}
                  className="w-full max-w-[220px] sm:max-w-[260px] h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* 4 Core Commitments */}
              <div className="space-y-3 text-xs sm:text-sm font-sans">
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Direct On-Site Consultation Across Vadodara & Gujarat</span>
                </div>

                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Senior Solutions Architects (Zero Junior Sales Reps)</span>
                </div>

                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>100% IP & Proprietary Source Code Ownership</span>
                </div>

                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Non-Disclosure Agreement (NDA) Protected from Day One</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 flex items-center gap-6 text-xs font-mono text-slate-400">
              <div>
                <span className="block text-slate-500 text-[10px] uppercase">Corporate Desk</span>
                <span className="font-bold text-slate-200">+91 99798 88764</span>
              </div>
              <div className="h-6 w-px bg-slate-700" />
              <div>
                <span className="block text-slate-500 text-[10px] uppercase">Direct Email</span>
                <span className="font-bold text-slate-200">contact@jeenweb.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Rishabh Inspired Tabbed Interface */}
          <div className="lg:col-span-7 bg-[#111E31] border border-slate-700/70 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-950/40">
            
            {/* Dual Tabs Header (Send Request & Schedule a Call) */}
            <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-[#091322] border border-slate-800 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab("send-request")}
                className={`flex-1 py-3.5 sm:py-4 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "send-request"
                    ? "bg-[#C11E23] text-white shadow-lg shadow-red-950/40"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Send Request</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("schedule-call")}
                className={`flex-1 py-3.5 sm:py-4 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "schedule-call"
                    ? "bg-[#1A3B71] text-white shadow-lg shadow-blue-950/40"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <CalendarIcon className="w-4 h-4 text-[#00E5FF]" />
                <span>Schedule a Call</span>
              </button>
            </div>

            {/* TAB 1: SEND REQUEST */}
            {activeTab === "send-request" && (
              <div className="space-y-6">
                
                {/* Reference Quote Headline */}
                <h4 className="text-base sm:text-lg font-semibold text-slate-200 font-sans leading-snug">
                  You&apos;re just a message away from turning &ldquo;what if&rdquo; into &ldquo;let&apos;s do it!&rdquo;
                </h4>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you! A senior systems architect from our Vadodara office will review your requirements and get back to you within 2 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-wider uppercase transition-all"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRequestSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={requestForm.fullName}
                          onChange={(e) => setRequestForm({ ...requestForm, fullName: e.target.value })}
                          placeholder="e.g. Nirav Patel"
                          className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={requestForm.email}
                          onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                          placeholder="nirav@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={requestForm.company}
                          onChange={(e) => setRequestForm({ ...requestForm, company: e.target.value })}
                          placeholder="e.g. Gujarat Synthetics Ltd"
                          className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={requestForm.phone}
                          onChange={(e) => setRequestForm({ ...requestForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all"
                        />
                      </div>
                    </div>

                    {/* Message / Project Scope */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Message / Project Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={requestForm.message}
                        onChange={(e) => setRequestForm({ ...requestForm, message: e.target.value })}
                        placeholder="Tell us about your workplace operations, current pain points, ERP/CRM needs, or timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C11E23] focus:ring-1 focus:ring-[#C11E23] transition-all resize-none"
                      />
                    </div>

                    {/* Acceptance Policy Checkbox (Exact from Rishabh Soft) */}
                    <div className="pt-1">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          required
                          checked={requestForm.acceptance}
                          onChange={(e) => setRequestForm({ ...requestForm, acceptance: e.target.checked })}
                          className="mt-1 w-4 h-4 rounded border-slate-700 text-[#C11E23] focus:ring-[#C11E23] bg-[#091322] accent-[#C11E23]"
                        />
                        <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                          Yes, I am OK to receive technical communication and project blueprint follow-ups over my details shared here.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/50 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Processing Request...</span>
                        ) : (
                          <>
                            <span>Submit Consultation Request</span>
                            <ArrowRight className="w-4 h-4" />
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
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {isCallBooked ? (
                  <div className="p-8 rounded-2xl bg-blue-950/40 border border-blue-500/40 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-blue-500/20 text-[#00E5FF] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      30-Min Call Confirmed!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your consultation is booked for <span className="text-white font-bold">{selectedDate}</span> at <span className="text-[#00E5FF] font-bold">{selectedSlot}</span> ({selectedTimezone}). A calendar invitation has been reserved.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsCallBooked(false);
                        setCallStep(1);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-wider uppercase transition-all"
                    >
                      Book Another Slot
                    </button>
                  </div>
                ) : callStep === 1 ? (
                  <div className="space-y-6">
                    {/* Meeting Duration & Details Indicator */}
                    <div className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-[#091322] border border-slate-800 text-xs font-mono text-slate-300">
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

                    {/* Step 1A: Select Day */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                        1. Select Preferred Date:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {availableDates.map((item) => (
                          <button
                            key={item.value}
                            type="button"
                            onClick={() => setSelectedDate(item.value)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              selectedDate === item.value
                                ? "bg-[#1A3B71] border-[#00E5FF] text-white shadow-md"
                                : "bg-[#091322] border-slate-700/80 text-slate-300 hover:border-slate-500"
                            }`}
                          >
                            <span className="block text-[11px] text-slate-400">{item.dayName}</span>
                            <span className="block text-xs sm:text-sm font-bold mt-0.5">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 1B: Select Timezone */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                        2. Timezone:
                      </label>
                      <select
                        value={selectedTimezone}
                        onChange={(e) => setSelectedTimezone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#1A3B71]"
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

                    {/* Step 1C: Select Time Slot */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                        3. Choose 30-Min Time Slot:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                        {availableSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-3 px-3.5 rounded-xl border text-xs sm:text-sm font-mono transition-all flex items-center justify-between ${
                              selectedSlot === slot
                                ? "bg-red-950/60 border-[#C11E23] text-white font-bold"
                                : "bg-[#091322] border-slate-700/80 text-slate-300 hover:border-slate-500"
                            }`}
                          >
                            <span>{slot}</span>
                            {selectedSlot === slot && <Check className="w-3.5 h-3.5 text-[#C11E23]" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Next Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setCallStep(2)}
                        className="w-full py-4 rounded-xl bg-[#1A3B71] hover:bg-[#132d57] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-blue-950/50 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Continue with {selectedSlot}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Step 2: Confirm Attendee Information */
                  <form onSubmit={handleCallBookSubmit} className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <button
                        type="button"
                        onClick={() => setCallStep(1)}
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Change Time Slot</span>
                      </button>
                      <span className="text-xs font-mono text-[#00E5FF]">
                        {selectedDate} • {selectedSlot}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={callForm.name}
                          onChange={(e) => setCallForm({ ...callForm, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={callForm.phone}
                          onChange={(e) => setCallForm({ ...callForm, phone: e.target.value })}
                          placeholder="+91 Phone number"
                          className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={callForm.email}
                        onChange={(e) => setCallForm({ ...callForm, email: e.target.value })}
                        placeholder="business@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Discussion Topics / Software Goals (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={callForm.notes}
                        onChange={(e) => setCallForm({ ...callForm, notes: e.target.value })}
                        placeholder="Briefly describe what your organization aims to build or automate..."
                        className="w-full px-4 py-3 rounded-xl bg-[#091322] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00E5FF] resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Reserving Calendar Slot...</span>
                        ) : (
                          <>
                            <span>Confirm 30-Min Consultation</span>
                            <ArrowRight className="w-4 h-4" />
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
    </section>
  );
}
