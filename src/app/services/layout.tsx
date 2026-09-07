import type { Metadata } from "next";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Enterprise Digital, Cloud & IT Infrastructure Services | Jeenweb",
  description:
    "Explore full-spectrum IT services by Jeenweb in Vadodara: custom software, Next.js web applications, NVMe hosting, licensed domain registration, and AI search optimization.",
  keywords: [
    "IT Services Vadodara",
    "Web Infrastructure Gujarat",
    "Custom Software Engineering",
    "Managed NVMe Hosting",
    "Domain Registry Services",
    "SEO & AI Search Optimization"
  ],
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Enterprise Digital, Cloud & IT Infrastructure Services | Jeenweb",
    description:
      "Full-spectrum IT solutions, custom software engineering, and managed cloud infrastructure in Vadodara.",
    url: "https://jeenweb.com/services",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeenweb Enterprise Services"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Digital, Cloud & IT Infrastructure Services | Jeenweb",
    description:
      "Full-spectrum IT solutions, custom software engineering, and managed cloud infrastructure.",
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
      name: "Services",
      item: "https://jeenweb.com/services"
    }
  ]
};

export default function ServicesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
