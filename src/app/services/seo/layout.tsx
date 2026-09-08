import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO, GEO & AI Search Optimization Company Vadodara | Jeenweb",
  description:
    "Dominate Google, ChatGPT, and Gemini search results with Jeenweb in Vadodara. Enterprise SEO, GEO, AEO, and AIO services built for brands in Gujarat.",
  keywords: [
    "SEO company Vadodara",
    "GEO search optimization Gujarat",
    "AEO services Vadodara",
    "AI search optimization Gujarat",
    "technical SEO company"
  ],
  alternates: {
    canonical: "/services/seo"
  },
  openGraph: {
    title: "SEO, GEO & AI Search Optimization Company Vadodara | Jeenweb",
    description:
      "Dominate Google, ChatGPT, and Gemini search results with Jeenweb in Vadodara. Enterprise SEO, GEO, AEO, and AIO services built for brands in Gujarat.",
    url: "https://jeenweb.com/services/seo",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/seoimg.png",
        width: 555,
        height: 550,
        alt: "SEO and AI Search Optimization"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO, GEO & AI Search Optimization Company Vadodara | Jeenweb",
    description:
      "Dominate Google, ChatGPT, and Gemini search results with Jeenweb in Vadodara.",
    images: ["/images/seoimg.png"]
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jeenweb.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://jeenweb.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO & AI Search",
        "item": "https://jeenweb.com/services/seo"
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
