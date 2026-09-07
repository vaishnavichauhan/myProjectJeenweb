import React from "react";
import { Metadata } from "next";
import { 
  Search, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  Laptop, 
  TrendingUp, 
  Award, 
  Mail, 
  Phone 
} from "lucide-react";
import HeroDynamicBg from "@/components/home/HeroDynamicBg";
import CultureShowcase from "@/components/careers/CultureShowcase";
import CurrentOpenings from "@/components/careers/CurrentOpenings";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Careers at Jeenweb | Join Our Engineering & Digital Team in Vadodara",
  description:
    "Explore rewarding IT career opportunities at Jeenweb Technologists. 26+ years of technology leadership, cutting-edge projects, and exceptional team culture.",
  alternates: {
    canonical: "/careers"
  },
  openGraph: {
    title: "Careers at Jeenweb | Join Our Engineering & Digital Team in Vadodara",
    description:
      "Explore rewarding IT career opportunities at Jeenweb Technologists. 26+ years of technology leadership and exceptional team culture.",
    url: "https://jeenweb.com/careers",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Jeenweb"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Jeenweb | Join Our Engineering & Digital Team in Vadodara",
    description:
      "Explore rewarding IT career opportunities at Jeenweb Technologists in Vadodara.",
    images: ["/images/og-image.jpg"]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jeenweb.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Careers",
      item: "https://jeenweb.com/careers"
    }
  ]
};

const perks = [
  {
    icon: Award,
    title: "26+ Years of Stability",
    desc: "Established in 2000, offering dependable career growth, mentorship from veterans, and enduring stability."
  },
  {
    icon: Laptop,
    title: "Modern Tech Stack",
    desc: "Work on Next.js 16, TypeScript, Cloud Native systems, and high-impact enterprise digital solutions."
  },
  {
    icon: TrendingUp,
    title: "Accelerated Career Growth",
    desc: "Merit-based appraisals, regular skill upskilling workshops, and rapid leadership opportunities."
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Culture",
    desc: "Inclusive, supportive engineering environment with zero bureaucracy and genuine work-life balance."
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Access to online courses, developer certifications, and hands-on exposure to global client projects."
  },
  {
    icon: Users,
    title: "Team Outings & Celebrations",
    desc: "Festive celebrations, annual milestones, hackathons, and dynamic team-building activities."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <JsonLd data={breadcrumbSchema} />
      {/* Careers Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] text-white py-16 lg:py-20">
        <HeroDynamicBg />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Careers
          </h1>
        </div>
      </section>

      {/* Work Hard. JeenWeb! Culture Showcase */}
      <CultureShowcase />

      {/* Why Engineers & Leaders Love Working at Jeenweb (Blue Theme matching reference image) */}
      <section className="pt-12 sm:pt-16 pb-6 sm:pb-8 lg:pb-10 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header (No background color) */}
          <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 text-center">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
                Company Culture &amp; Benefits
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 max-w-3xl mx-auto">
              Why Engineers &amp; Leaders Love Working at Jeenweb
            </h2>
          </div>

          {/* All 6 Circles in One Single Line with Reduced Card Size */}
          <div className="w-full overflow-x-auto pb-6 scrollbar-none">
            <div className="flex items-center justify-start lg:justify-center min-w-max mx-auto px-4 gap-1.5 sm:gap-2 lg:gap-3">
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <React.Fragment key={perk.title}>
                    {/* Reduced Circular Card with Arc Brackets */}
                    <div className="relative flex items-center justify-center shrink-0">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-white border border-slate-300 hover:border-[#C11E23]/40 shadow-sm hover:shadow-md flex flex-col items-center justify-center p-2 sm:p-3 text-center relative hover:scale-105 transition-all duration-300 group z-10">
                        {/* SVG Top & Bottom Arc Brackets in Blue */}
                        <svg
                          className="absolute -inset-2 sm:-inset-2.5 w-[calc(100%+16px)] sm:w-[calc(100%+20px)] h-[calc(100%+16px)] sm:h-[calc(100%+20px)] pointer-events-none"
                          viewBox="0 0 120 120"
                          fill="none"
                        >
                          {/* Top Arc Bracket */}
                          <path
                            d="M 20 42 A 45 45 0 0 1 100 42"
                            stroke="#16325B"
                            strokeWidth="5"
                            strokeLinecap="round"
                            className="group-hover:stroke-[#C11E23] transition-colors duration-300"
                          />
                          {/* Bottom Arc Bracket */}
                          <path
                            d="M 20 78 A 45 45 0 0 0 100 78"
                            stroke="#16325B"
                            strokeWidth="5"
                            strokeLinecap="round"
                            className="group-hover:stroke-[#C11E23] transition-colors duration-300"
                          />
                        </svg>

                        {/* Inner Icon */}
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-[#16325B] flex items-center justify-center mb-1 sm:mb-1.5 group-hover:bg-[#C11E23] group-hover:text-white group-hover:scale-110 transition-all shadow-2xs shrink-0">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>

                        {/* Title */}
                        <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 group-hover:text-[#C11E23] transition-colors leading-tight px-1 max-w-[85px] sm:max-w-[105px]">
                          {perk.title}
                        </h3>
                      </div>
                    </div>

                    {/* Connecting Block Arrow between circles (Renders between all adjacent circles including after Continuous Learning) */}
                    {index < perks.length - 1 && (
                      <div className="flex items-center justify-center shrink-0 w-6 sm:w-8 lg:w-9 -mx-1 sm:-mx-1.5 z-0">
                        <svg
                          className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-blue-200/90 drop-shadow-xs"
                          viewBox="0 0 48 48"
                          fill="none"
                        >
                          <path
                            d="M 2 15 H 22 V 4 L 46 24 L 22 44 V 33 H 2 Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Current Openings Interactive Accordion matching user reference UI */}
      <CurrentOpenings />

      {/* Spontaneous Application Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative overflow-hidden bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm group">
            {/* Background Finding / Search Watermark Icon in Top Right Corner */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 text-[#16325B] opacity-[0.08] pointer-events-none group-hover:scale-110 group-hover:opacity-[0.14] transition-all duration-500">
              <Search className="w-28 h-28 sm:w-36 sm:h-36" strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 relative z-10">
              Don’t see a role that matches your profile?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto relative z-10">
              We are always excited to meet talented software engineers, designers, and digital strategists. Send your resume directly to our hiring team.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 relative z-10">
              <a
                href="mailto:careers@jeenweb.com?subject=Spontaneous%20Application%20-%20Jeenweb"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-[1.02] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Resume to careers@jeenweb.com</span>
              </a>
              <a
                href="tel:+919824466017"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#16325B]" />
                <span>Call HR: +91 98244 66017</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
