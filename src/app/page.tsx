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
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Section 1: Hero Banner (4 Switchable Interactive Banners) */}
      <HeroSlider />

      {/* Section 2: Core Growth Metrics */}
      <MetricsSection />

      {/* Section 3: What We Do (Part 1 Core Services + Part 2 Business Email Solutions) */}
      <ServicesGrid />

      {/* Section 4: About Jeenweb Technologists Overview */}
      <AboutSnippet />

      {/* Section 5: Why Choose Us (6 Corporate Pillars) */}
      <WhyChooseUs />

      {/* Section 6: Tools and Technologies We Use */}
      <TechStack />

      {/* Section 7: Strategic Partnerships & Authorizations */}
      <PartnersMarquee />

      {/* Section 9: Geographic Footprint (12 Countries) */}
      <GlobalFootprint />

      {/* Section 10: Client Experiences */}
      <Testimonials />

      {/* Section 11: Frequently Asked Questions */}
      <FaqSection />

      {/* Section 12: Knowledge Base (Blog) */}
      <BlogSection />

      {/* Section 13: CTA */}
      <CtaSection />
    </main>
  );
}
