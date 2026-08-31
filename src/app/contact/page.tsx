"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Custom ERP / Software Development",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Contact Corporate Desk" }]} />
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-[#0B192C] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-block pb-1.5 border-b-2 border-[#D32F2F]">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-100">
              Corporate Headquarters • Vadodara, Gujarat
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect Directly With Our Engineering Desk
          </h1>
          <p className="text-slate-300 text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, an existing system needing modernization, or questions regarding domain, hosting, software, or AI search? Reach out to our team.
          </p>
        </div>
      </section>

      {/* Main Form & Location Info */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#16325B]" />
                  <span>Corporate Facilities</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Office 1 (Main Development Center):</strong>
                      <span className="text-slate-600">Jeenweb Technologists Pvt. Ltd., 1000 Sq. Ft. Tech Facility, Vadodara, Gujarat - 390001, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-[#16325B] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Office 2 (Enterprise Advisory & ETS PROP):</strong>
                      <span className="text-slate-600">Corporate IT Consulting Wing, Vadodara, Gujarat, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Direct Phone Numbers:</strong>
                      <span className="text-slate-600">+91 98250 00000 / +91 (0265) 234-5678</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Email Inquiries:</strong>
                      <span className="text-slate-600">info@jeenweb.com / support@jeenweb.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Operating Hours:</strong>
                      <span className="text-slate-600">Monday to Saturday | 9:30 AM - 7:00 PM IST</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Zero Outsourcing Guarantee</span>
                    </div>
                    <p>All client communications, engineering scoping, and infrastructure deployments are executed directly by our in-house Vadodara staff.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Dispatched to Advisory Team</h3>
                    <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
                      Thank you for contacting Jeenweb. A senior systems engineer or digital consultant from our Vadodara headquarters will get in touch with you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg bg-[#16325B] text-white text-xs font-bold transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                      Request Technical Consultation or Scope Review
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rajesh Shah"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#16325B] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Corporate Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rajesh@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#16325B] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Direct Contact / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98250 00000"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#16325B] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company / Organization Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Industrial Corp"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#16325B] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Service Focus *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#16325B] focus:bg-white transition-all"
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
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Project Overview or Requirement Details
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your current operational bottleneck, software requirements, or infrastructure goals..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#16325B] focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Processing Dispatch...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry to Vadodara Desk</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
