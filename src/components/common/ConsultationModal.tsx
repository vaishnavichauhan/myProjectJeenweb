"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight, Shield, Phone, Mail, Clock } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialService = "General IT Consultation"
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: initialService,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm transition-all duration-200 animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B192C] text-white p-6 sm:p-7 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="inline-block pb-1 border-b-2 border-[#D32F2F] mb-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-200">
              Vadodara Engineering Consultation
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Schedule a Technical Consultation
          </h3>
          <p className="text-slate-300 text-xs mt-1">
            Connect directly with our senior software architects & infrastructure engineers in Vadodara.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Request Received Successfully!</h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
                Thank you for reaching out. A senior technical advisor from our Vadodara headquarters will contact you shortly.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-600 space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#16325B]" />
                  <span>Direct Advisory Line: <strong>+91 (0265) 234-5678</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#16325B]" />
                  <span>Corporate Desk: <strong>info@jeenweb.com</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#16325B]" />
                  <span>Operating Hours: Mon - Sat | 9:30 AM - 7:00 PM IST</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#16325B] hover:bg-[#0B192C] text-white font-bold rounded-lg transition-colors text-xs uppercase tracking-wider shadow-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Patel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#16325B] focus:bg-white text-xs sm:text-sm bg-slate-50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#16325B] focus:bg-white text-xs sm:text-sm bg-slate-50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#16325B] focus:bg-white text-xs sm:text-sm bg-slate-50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Industries Pvt. Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#16325B] focus:bg-white text-xs sm:text-sm bg-slate-50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Interested Service / Focus Area *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#16325B] focus:bg-white text-xs sm:text-sm bg-slate-50 transition-all"
                >
                  <option value="Domain Registration & Management">Domain Registration & Management</option>
                  <option value="Web Hosting Services">Web Hosting Services</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="SEO and AI Search Optimization">SEO and AI Search Optimization</option>
                  <option value="Social Media and Performance Marketing">Social Media and Performance Marketing</option>
                  <option value="Business Email (M365 / Google Workspace / Zoho)">Business Email (Microsoft 365 / Google / Zoho)</option>
                  <option value="General IT Consultation">General Technical Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Project Requirements / Current Setup
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current operational challenges, goals, or required timelines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#16325B] focus:bg-white text-xs sm:text-sm bg-slate-50 transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Confidential. In-house Vadodara team.</span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
