import React from "react";

interface SectionHeaderProps {
  badge?: string;
  badgeStyle?: "icon" | "underline";
  badgeColor?: "blue" | "red";
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  badge,
  badgeStyle = "underline",
  badgeColor = "blue",
  title,
  subtitle,
  centered = false,
  theme = "light",
  className = ""
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const isBlue = badgeColor === "blue";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className} mb-12 sm:mb-14 lg:mb-16`}>
      {badge && (
        <div className={`mb-3 ${centered ? "text-center" : ""}`}>
          <div className="inline-block border-b-2 border-[#C11E23] pb-1">
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider ${
                isBlue
                  ? isDark
                    ? "text-blue-400"
                    : "text-[#16325B]"
                  : isDark
                  ? "text-red-400"
                  : "text-[#C11E23]"
              }`}
            >
              {badge}
            </span>
          </div>
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
