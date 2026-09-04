import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  badgeStyle?: "icon" | "underline";
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  badge,
  badgeStyle = "icon",
  title,
  subtitle,
  centered = false,
  theme = "light",
  className = ""
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className} mb-12`}>
      {badge && (
        badgeStyle === "underline" ? (
          <div className={`mb-3 ${centered ? "text-center" : ""}`}>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-red-400" : "text-[#C11E23]"}`}>
                {badge}
              </span>
            </div>
          </div>
        ) : (
          <div
            className={`flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E11D48] mb-3 ${
              centered ? "justify-center" : ""
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#E11D48]" />
            <span>{badge}</span>
          </div>
        )
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#0F223D]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed font-sans ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
