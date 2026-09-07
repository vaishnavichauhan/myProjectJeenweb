import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media & Performance Marketing Agency Vadodara | Jeenweb",
  description:
    "Drive real brand growth and sales with Jeenweb in Vadodara. We deliver social media management, content creation, paid ads, and influencer campaigns in Gujarat.",
  keywords: [
    "social media marketing company Vadodara",
    "performance marketing agency Gujarat",
    "SMM services Vadodara",
    "influencer marketing Gujarat",
    "social media content creation"
  ],
  alternates: {
    canonical: "/services/social-media"
  },
  openGraph: {
    title: "Social Media & Performance Marketing Agency Vadodara | Jeenweb",
    description:
      "Drive real brand growth and sales with Jeenweb in Vadodara. Full-funnel social media management, content creation, and paid performance campaigns.",
    url: "https://jeenweb.com/services/social-media",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/socialHero.png",
        width: 1000,
        height: 616,
        alt: "Social Media Marketing"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media & Performance Marketing Agency Vadodara | Jeenweb",
    description:
      "Drive real brand growth and sales with Jeenweb in Vadodara. Full-funnel social media management and paid campaigns.",
    images: ["/images/socialHero.png"]
  }
};

export default function SocialMediaLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const socialMediaAgencySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Jeenweb Social Media & Performance Marketing Agency",
    "alternateName": "Jeenweb SMM & Paid Media Division",
    "image": "https://jeenweb.com/images/jeenweb-logo.svg",
    "url": "https://jeenweb.com/services/social-media",
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
      "Full-funnel social media management, short-form reel video production, Meta/LinkedIn paid performance advertising, and regional influencer marketing campaigns in Vadodara, Gujarat."
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media and Performance Marketing",
    "serviceType": "Social Media Management & Performance Marketing",
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
      "Drive real brand growth and sales with Jeenweb in Vadodara. We deliver social media management, content creation, paid ads, and influencer campaigns in Gujarat."
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
        "name": "Social Media Marketing",
        "item": "https://jeenweb.com/services/social-media"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialMediaAgencySchema) }}
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
