import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO, GEO & AI Search Optimization Company | Jeenweb",
  description:
    "Dominate Google, ChatGPT, and Gemini search results with Jeenweb in Vadodara. Enterprise SEO, GEO, AEO, and AIO services built for brands in Gujarat.",
  keywords: [
    "SEO company Vadodara",
    "GEO search optimization Gujarat",
    "AEO services Vadodara",
    "AI search optimization Gujarat",
    "technical SEO company"
  ],
  openGraph: {
    title: "SEO, GEO & AI Search Optimization Company | Jeenweb",
    description:
      "Dominate Google, ChatGPT, and Gemini search results with Jeenweb in Vadodara. Enterprise SEO, GEO, AEO, and AIO services built for brands in Gujarat.",
    type: "website",
    locale: "en_IN",
    siteName: "Jeenweb Technologists"
  }
};

export default function SeoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const seoAgencySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Jeenweb SEO & AI Search Optimization Agency",
    "alternateName": "Jeenweb Technologists SEO Division",
    "image": "https://jeenweb.com/images/jeenweb-logo.svg",
    "url": "https://jeenweb.com/services/seo",
    "telephone": "+91-98240-30580",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sayajigunj",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.3072,
      "longitude": 73.1812
    },
    "description":
      "Enterprise SEO, GEO (Generative Engine Optimization), AEO, and AI search visibility services in Vadodara, Gujarat."
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO, GEO & AI Search Optimization",
    "serviceType": "Search Engine & AI Optimization Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Jeenweb Technologists Pvt. Ltd.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      }
    },
    "areaServed": ["Vadodara", "Gujarat", "India"],
    "description":
      "Dominate Google, ChatGPT, and Gemini search results with Jeenweb in Vadodara. Enterprise SEO, GEO, AEO, and AIO services built for brands in Gujarat."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoAgencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
