"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "cloud" | "database" | "cms" | "ai";
  categoryLabel: string;
  iconSvg?: React.ReactNode;
  iconPath?: string;
}

const TECH_CATALOG: TechItem[] = [
  // Front-End
  {
    name: "React.js",
    category: "frontend",
    categoryLabel: "Front-End",
    iconSvg: (
      <svg viewBox="0 0 115.3 100" className="w-10 h-10">
        <ellipse cx="57.65" cy="50" rx="55.5" ry="21.5" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(30 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="55.5" ry="21.5" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(90 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="55.5" ry="21.5" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(150 57.65 50)" />
        <circle cx="57.65" cy="50" r="9.5" fill="#61DAFB" />
      </svg>
    )
  },
  {
    name: "Next.js",
    category: "frontend",
    categoryLabel: "Front-End",
    iconSvg: (
      <svg viewBox="0 0 180 180" className="w-10 h-10">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path d="M149.5 159.2L68.8 54H54v72h13.2V70.8l70.7 91.5c3.8-1 7.6-2.2 11.6-3.1z" fill="#FFFFFF" />
        <path d="M115 54h13.2v72H115z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "React Native",
    category: "frontend",
    categoryLabel: "Front-End",
    iconSvg: (
      <svg viewBox="0 0 115.3 100" className="w-10 h-10">
        <ellipse cx="57.65" cy="50" rx="55.5" ry="21.5" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(30 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="55.5" ry="21.5" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(90 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="55.5" ry="21.5" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(150 57.65 50)" />
        <circle cx="57.65" cy="50" r="9.5" fill="#61DAFB" />
      </svg>
    )
  },
  {
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Front-End",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#3178C6" d="M1.5 1.5h125v125H1.5z" />
        <path fill="#FFFFFF" d="M30.7 44.5h41v9.2h-15.3v49.8H45.9V53.7H30.7v-9.2zm44.2 45.4c3.4 3 8.3 4.9 14.2 4.9 8.1 0 13.1-4.2 13.1-10.4 0-6.1-4.2-8.7-12.7-12.3-10.8-4.5-16.1-9.2-16.1-18.4 0-9.8 7.9-17 20.3-17 6.6 0 12.3 2 15.8 4.7l-3.6 8.5c-3-2.1-7.2-3.8-12.3-3.8-7.3 0-10.9 4-10.9 8.3 0 5.4 3.7 7.7 12 11.3 11.6 4.9 17 9.8 17 19.3 0 10.8-8.5 18.5-22.6 18.5-7.7 0-14.8-2.6-18.9-6l4.7-7.6z" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    category: "frontend",
    categoryLabel: "Front-End",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
        <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Front-End",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#38BDF8" d="M64 26.5c-20 0-32.5 10-37.5 30 7.5-10 16.25-13.75 26.25-11.25 5.7 1.43 9.77 5.56 14.28 10.13C74.37 62.77 83.2 71.5 101.5 71.5c20 0 32.5-10 37.5-30-7.5 10-16.25 13.75-26.25 11.25-5.7-1.43-9.77-5.56-14.28-10.13C91.13 35.23 82.3 26.5 64 26.5zM26.5 71.5c-20 0-32.5 10-37.5 30 7.5-10 16.25-13.75 26.25-11.25 5.7 1.43 9.77 5.56 14.28 10.13 7.34 7.39 16.17 16.12 34.47 16.12 20 0 32.5-10 37.5-30-7.5 10-16.25 13.75-26.25 11.25-5.7-1.43-9.77-5.56-14.28-10.13C47.37 80.23 38.54 71.5 26.5 71.5z" />
      </svg>
    )
  },
  {
    name: "HTML5 / CSS3",
    category: "frontend",
    categoryLabel: "Front-End",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#E44D26" d="M19.7 11.7l8.9 99.8 35.4 9.8 35.4-9.8 8.9-99.8H19.7z" />
        <path fill="#F16529" d="M64 113.8l28-7.8 7.3-81.5H64v89.3z" />
        <path fill="#EBEBEB" d="M64 50.8H45.2l-1.3-14.6H64V23.7H30.4l3.8 42.6H64V50.8zm0 30.6l-.2.1-15.8-4.3-1-11.4H34.4l2 22.3 27.6 7.7V81.4z" />
        <path fill="#FFFFFF" d="M64 50.8h18.8l-1.8 19.9-17 4.6v12.8l27.6-7.7.3-3.3 3.1-34.8.7-7.9H64v14.4zm0-27.1v12.5h33.6l.8-9.2.3-3.3H64z" />
      </svg>
    )
  },

  // Back-End
  {
    name: "Java",
    category: "backend",
    categoryLabel: "Back-End",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#5382A1" d="M42 102c18 8 44 8 62 0-5-6-20-8-31-8-12 0-26 2-31 8z" />
        <path fill="#5382A1" d="M34 112c27 7 66 7 78 0-9-4-27-6-39-6-13 0-30 2-39 6z" />
        <path fill="#E76F00" d="M78 50c5 4 9 9 9 15 0 12-13 18-25 22-12 4-23 6-23 13 0 1 0 2 1 3 13-3 29-3 42-1 9-5 17-14 17-25 0-12-8-20-21-27z" />
        <path fill="#E76F00" d="M69 13c-8 8-6 17 0 25 5 6 9 11 8 18-4 0-8-3-10-5-5-6-8-14-3-23 4-8 5-12 5-15z" />
        <path fill="#E76F00" d="M86 26c-4 5-6 10-5 17 4 1 8-1 9-4 3-4 3-9-4-13z" />
        <path fill="#5382A1" d="M102 78c4-3 6-6 6-10 0-6-4-10-10-11 3 6 1 13-4 18 3 1 6 2 8 3z" />
      </svg>
    )
  },
  {
    name: "PHP 8.x",
    category: "backend",
    categoryLabel: "Back-End",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4" />
        <path fill="#FFFFFF" d="M37.5 50.5h11.2c5.6 0 9.2 2.7 8.3 8.3-.9 5.8-5.3 8.6-10.9 8.6h-5.2l-3.3 14.1H29l8.5-31zm6.9 12.3h4.1c2.8 0 4.8-1.1 5.3-4 .5-3-1-4.2-3.8-4.2h-3.9l-1.7 8.2zm20.8-12.3h8.6l-2.4 10.3h5.4c5.7 0 9.2 2.7 8.3 8.3-.9 5.8-5.4 8.6-11 8.6h-12.2l3.3-27.2zm7.4 22.7h4.1c2.8 0 4.8-1.1 5.3-4 .5-3-1-4.2-3.8-4.2h-3.9l-1.7 8.2z" />
      </svg>
    )
  },
  {
    name: "Node.js",
    category: "backend",
    categoryLabel: "Back-End",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#339933" d="M64 8.5L12 38.5v60l52 30 52-30v-60L64 8.5zm31.7 68.3c-2.3 8.7-9.4 14.4-19.8 14.4-13.4 0-21.7-9.2-21.7-23.7 0-14.2 8.4-23.7 21.6-23.7 11.2 0 18.2 6.4 19.8 15.7h-9.9c-1.3-4.5-4.8-7.3-9.9-7.3-7.3 0-11.6 5.6-11.6 15.3s4.3 15.3 11.6 15.3c5.3 0 8.9-3 9.9-7.8h10z" />
      </svg>
    )
  },

  // Databases
  {
    name: "MySQL",
    category: "database",
    categoryLabel: "Databases",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#00758F" d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm25.8 74.4H77.6l-9.9-16.5-9.9 16.5H45.6V41.6h12.2v25.2l8.8-14.7h8.8l9.4 15.7V41.6h12.2v44.8z" />
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    category: "database",
    categoryLabel: "Databases",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <circle cx="64" cy="64" r="60" fill="#336791" />
        <path fill="#FFFFFF" d="M85 91c-2.7 2.2-7 3.8-11.4 3.8-4.4 0-9.8-2.2-13.6-4.9l-1.6-1.1c-4.4 4.4-9.3 6-14.8 6-1.6 0-3.3 0-4.9-.5-1.1-.5-1.6-1.1-1.6-2.2 0-1.6 1.1-2.7 2.7-3.3 4.4-1.1 7.7-3.3 9.9-6.6-2.7-3.8-4.4-8.8-4.4-14.3 0-6.6 2.2-12.1 6-16.5 2.7-3.3 6.6-5.5 11-6.6-.5-2.2-1.1-4.4-1.1-6.6 0-9.3 7.1-17 16.5-17 4.4 0 8.2 1.6 11 4.4 2.7-1.1 6-1.6 9.3-1.6 1.1 0 2.2.5 2.2 1.6 0 1.1-.5 2.2-1.6 2.2-3.3 1.1-6 2.7-8.2 4.9 1.6 2.7 2.7 6 2.7 9.9 0 5.5-2.7 10.4-7.1 13.2 2.2 3.8 3.8 8.8 3.8 14.3 0 7.7-2.7 14.3-8.2 19.8z" />
      </svg>
    )
  },
  {
    name: "MongoDB",
    category: "database",
    categoryLabel: "Databases",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#47A248" d="M66.1 11.7c-1-1-2.7-1-3.7 0C56 18.7 32 45.7 32 74.3c0 22.7 16.7 41.1 32.3 44.3V80c-3.2 0-5.9-2.7-5.9-5.9 0-3.2 2.7-5.9 5.9-5.9V11.7zm-4.2 0v56.5c3.2 0 5.9 2.7 5.9 5.9 0 3.2-2.7 5.9-5.9 5.9v38.6c15.6-3.2 32.3-21.6 32.3-44.3 0-28.6-24-55.6-30.4-62.6-.9-.9-1.9-.9-1.9 0z" />
      </svg>
    )
  },

  // CMS & Ecommerce
  {
    name: "WordPress",
    category: "cms",
    categoryLabel: "CMS & Platforms",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <circle cx="64" cy="64" r="54" fill="#21759B" />
        <path fill="#FFFFFF" d="M18.8 64c0 19.3 12.3 35.8 29.6 42L22.6 38.3C20.2 46 18.8 54.8 18.8 64zm72.7-1.8c0-6.1-2.2-10.3-4.1-13.6-2.5-4.1-4.9-7.6-4.9-11.7 0-4.6 3.5-8.8 8.4-8.8.4 0 .7 0 1.1.1-7.8-7.1-18.1-11.4-29.4-11.4-15 0-28.2 7.6-36 19.2 1 .1 2 .1 2.8.1 4.6 0 11.7-.6 11.7-.6 2.4-.1 2.7 3.4.3 3.7 0 0-2.4.3-5.1.4l16.2 48.2 9.7-29.2-6.9-19c-2.4-.1-4.7-.4-4.7-.4-2.4-.1-2.1-3.7.3-3.7 0 0 7.3.6 11.5.6 4.6 0 11.7-.6 11.7-.6 2.4-.1 2.7 3.4.3 3.7 0 0-2.4.3-5.1.4l16 47.7 4.4-14.8c1.9-6.3 3.3-10.9 3.3-14.9z" />
      </svg>
    )
  },
  {
    name: "WooCommerce",
    category: "cms",
    categoryLabel: "CMS & Platforms",
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#7F54B3" d="M116.3 89.1H11.7C5.2 89.1 0 83.9 0 77.4v-40C0 31 5.2 25.8 11.7 25.8h104.7c6.4 0 11.7 5.2 11.7 11.7v40c-.1 6.4-5.3 11.6-11.8 11.6z" />
        <path fill="#FFFFFF" d="M13.8 76.7s2.8 11.8 8.5 3.9 11.2-20.3 11.2-20.3.4-3.1 2 3.7S44 80 44 80s6.3 7.9 8.9-.4c-1-11 2.8-31 6.7-40.6 1.6-8.5-7.3-6.1-8.1-4.1s-6.3 14.8-6.7 28.2c0 0-4.7-12.8-5.1-17.4-.4-4.7-5.3-5.9-8.1-1.4S20.3 66.2 20.3 66.2l-5.5-28.4s-5.5-7.3-8.7 1.6c0 0 5.7 34.9 7.7 37.3zM87 45.7c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1 2.7-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2-2.2-1.3-3.6-4.8-3.6-10.8 2-9.7 6.4-11 8.7-10.8 4.3 2.3 4.1 7.4 3.8 11.4zM118.9 45.7c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1 2.6-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2-2.2-1.3-3.6-4.8-3.6-10.8 2-9.7 6.4-11 8.7-10.8 4.2 2.3 4 7.4 3.8 11.4z" />
        <path fill="#7F54B3" d="M61.3 89.1l22.3 13.1-4.7-13.1-12.8-3.6z" />
      </svg>
    )
  }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Front-End" },
    { id: "backend", label: "Back-End" },
    { id: "database", label: "Databases" },
    { id: "cms", label: "CMS & Platforms" }
  ];

  const filteredCatalog =
    activeCategory === "all"
      ? TECH_CATALOG
      : TECH_CATALOG.filter((item) => item.category === activeCategory);

  return (
    <section className="pt-10 pb-20 lg:pt-14 lg:pb-24 bg-white relative overflow-hidden" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Red Bottom Border Tag */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div>
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
                Technology Stack
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-slate-900">
          Technologies We Use
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            We engineer solutions with battle-tested enterprise frameworks and high-security cloud architectures—never vulnerable templates or unverified scripts.
          </p>
        </div>

        {/* Clean Category Filter Tabs matching Reference Image */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-6 border-b border-slate-200 pb-3 mb-12 px-2 sm:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative py-2 px-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-[#1A3B71]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="absolute bottom-[-13px] left-0 right-0 h-[2.5px] bg-[#C11E23] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Clean Borderless Technology Grid matching Reference Image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 pt-4">
          {filteredCatalog.map((tech) => (
            <div
              key={tech.name}
              className="p-3 text-center flex flex-col items-center justify-center group cursor-default transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Technology Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {tech.iconSvg}
              </div>

              {/* Technology Name */}
              <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
