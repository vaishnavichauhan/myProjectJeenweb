import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  badge,
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
        <div className={`inline-block mb-3.5 ${centered ? "mx-auto" : ""}`}>
          <span
            className={`inline-block text-xs font-extrabold tracking-widest uppercase pb-1 border-b-2 ${
              isDark
                ? "text-red-400 border-[#D32F2F]"
                : "text-[#D32F2F] border-[#D32F2F]"
            }`}
          >
            {badge}
          </span>
        </div>
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
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
