"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface DomainSearchBarProps {
  onSearchSubmit?: (domain: string, tld: string) => void;
  className?: string;
  onOpenModal?: () => void;
}

export default function DomainSearchBar({
  onSearchSubmit,
  className = "",
  onOpenModal
}: DomainSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTld, setSelectedTld] = useState(".com");
  const [searchResult, setSearchResult] = useState<{
    searched: boolean;
    domain: string;
    available: boolean;
    price: string;
    renewPrice: string;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const tlds = [
    { ext: ".com", popular: true, price: "₹999/yr", renew: "₹999/yr" },
    { ext: ".in", popular: true, price: "₹699/yr", renew: "₹699/yr" },
    { ext: ".co.in", popular: false, price: "₹499/yr", renew: "₹499/yr" },
    { ext: ".net", popular: false, price: "₹1,199/yr", renew: "₹1,199/yr" },
    { ext: ".org", popular: false, price: "₹1,099/yr", renew: "₹1,099/yr" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    const cleanName = searchTerm.trim().toLowerCase().replace(/\.[a-z.]+$/, "");

    setTimeout(() => {
      setIsSearching(false);
      const isMockAvailable = !cleanName.includes("google") && !cleanName.includes("apple") && !cleanName.includes("microsoft");
      const chosenTldObj = tlds.find((t) => t.ext === selectedTld) || tlds[0];

      setSearchResult({
        searched: true,
        domain: `${cleanName}${selectedTld}`,
        available: isMockAvailable,
        price: chosenTldObj.price,
        renewPrice: chosenTldObj.renew,
      });

      if (onSearchSubmit) {
        onSearchSubmit(cleanName, selectedTld);
      }
    }, 600);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Search Input Box */}
      <form
        onSubmit={handleSearch}
        className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200/80 flex flex-col md:flex-row items-center gap-2"
      >
        <div className="flex-1 flex items-center px-4 py-2 w-full">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search your brand or business domain (e.g. mybusiness)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-none text-slate-800 placeholder-slate-400 focus:outline-none text-base sm:text-lg font-medium"
          />
        </div>

        {/* TLD selector */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl w-full md:w-auto justify-between md:justify-start">
          <span className="text-xs font-semibold text-slate-500 uppercase">Extension:</span>
          <div className="flex items-center gap-1">
            {tlds.slice(0, 3).map((tld) => (
              <button
                key={tld.ext}
                type="button"
                onClick={() => setSelectedTld(tld.ext)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedTld === tld.ext
                    ? "bg-[#16325B] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tld.ext}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={isSearching}
          className="w-full md:w-auto px-7 py-3.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 flex-shrink-0"
        >
          {isSearching ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <>
              <span>Check Availability</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* TLD pricing pills */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 px-2 text-xs text-slate-600">
        <span className="font-semibold text-slate-700">Popular TLDs with No Hidden Hikes:</span>
        {tlds.map((tld) => (
          <span key={tld.ext} className="inline-flex items-center gap-1">
            <strong className="text-[#16325B]">{tld.ext}</strong>
            <span className="text-slate-500">({tld.price})</span>
          </span>
        ))}
      </div>

      {/* Result Card Feedback */}
      {searchResult && (
        <div className="mt-4 p-4 rounded-xl border border-slate-200 bg-white shadow-md animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {searchResult.available ? (
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-slate-900">{searchResult.domain}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      searchResult.available
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {searchResult.available ? "Available Now" : "Taken / In Use"}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {searchResult.available
                    ? `Registration: ${searchResult.price} • Same Renewal Price Guarantee • Free WHOIS Privacy & Instant DNS`
                    : "This name is already registered. Talk to our team for brand transfer assistance or alternate extensions."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {searchResult.available ? (
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg shadow transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Lock & Register Now</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="px-5 py-2.5 bg-[#16325B] hover:bg-[#0F223D] text-white font-semibold text-xs rounded-lg shadow transition-colors"
                >
                  Request Transfer / Inquiry
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
