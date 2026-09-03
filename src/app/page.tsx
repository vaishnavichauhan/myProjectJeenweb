import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import MetricsSection from "@/components/home/MetricsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutSnippet from "@/components/home/AboutSnippet";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TechStack from "@/components/home/TechStack";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import GlobalFootprint from "@/components/home/GlobalFootprint";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "Jeenweb Technologists Pvt. Ltd. | Enterprise IT, Custom Software, Hosting & AI SEO Vadodara",
  description:
    "Jeenweb Technologists Pvt. Ltd. provides reliable domain registration, NVMe web hosting, custom software & ERP development, SEO/GEO/AEO, and business email solutions in Vadodara, Gujarat since 2000.",
  keywords: [
    "Jeenweb Vadodara",
    "IT Company Gujarat",
    "Custom Software Development Vadodara",
    "Domain Registration Gujarat",
    "NVMe Web Hosting Vadodara",
    "SEO GEO AEO AI Search Optimization",
    "Microsoft 365 Google Workspace Setup Vadodara"
  ]
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-slate-900 selection:bg-[#E11D48] selection:text-white">
      {/* 1. Hero Banner with Switchable Interactive Banners */}
      <HeroSlider />

      {/* 2. Core Growth Metrics */}
      <MetricsSection />

      {/* 3. What We Do: Core Services (Accordion) + Business Email Solutions */}
      <ServicesGrid />

      {/* 4. About Jeenweb Technologists Overview */}
      <AboutSnippet />

      {/* 5. Why Choose Us (6 Corporate Pillars) */}
      <WhyChooseUs />

      {/* 6. Tools and Technologies We Use */}
      <TechStack />

      {/* 7. Strategic Partnerships & Authorizations */}
      <PartnersMarquee />

      {/* 8. Client Experiences (Direct Feedback From Our Long-Term Partners) */}
      <Testimonials />

      {/* 9. Corporate Operations Across The World (Geographic Footprint) */}
      <GlobalFootprint />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Knowledge Base (Blog) */}
      <BlogSection />

      {/* 12. High-Voltage Acid Yellow Ribbon CTA Banner */}
      <CtaSection />
    </main>
  );
}
