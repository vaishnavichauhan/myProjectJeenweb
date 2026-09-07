import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development & Enterprise ERP | Jeenweb Vadodara",
  description:
    "Engineering bespoke ERP, CRM, visitor, and school management software in Vadodara with Jeenweb. Mapped to your actual physical business workflows across Gujarat.",
  keywords: [
    "custom software development Vadodara",
    "ERP software company Gujarat",
    "custom CRM software Vadodara",
    "school management software Gujarat",
    "enterprise software development"
  ],
  alternates: {
    canonical: "/services/custom-software"
  },
  openGraph: {
    title: "Custom Software Development & Enterprise ERP | Jeenweb Vadodara",
    description:
      "Engineering bespoke ERP, CRM, and management software mapped to your actual physical business workflows across Gujarat.",
    url: "https://jeenweb.com/services/custom-software",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/custom-software-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Software Development"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development & Enterprise ERP | Jeenweb Vadodara",
    description:
      "Engineering bespoke ERP, CRM, and management software mapped to your actual physical business workflows across Gujarat.",
    images: ["/images/custom-software-hero.jpg"]
  }
};

export default function CustomSoftwareLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Jeenweb Custom Enterprise Software & ERP",
    "operatingSystem": "Web-based, Cross-platform, Linux, Windows, Cloud",
    "applicationCategory": "BusinessApplication",
    "provider": {
      "@type": "Organization",
      "name": "Jeenweb Technologists Pvt. Ltd.",
      "url": "https://jeenweb.com"
    },
    "description":
      "Build custom ERP, CRM, visitor, and school management software in Vadodara with Jeenweb. Mapped to your actual business workflow across Gujarat."
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Development",
    "serviceType": "Custom Software & ERP Development",
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
      "Build custom ERP, CRM, visitor, and school management software in Vadodara with Jeenweb. Mapped to your actual business workflow across Gujarat."
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
        "name": "Custom Software",
        "item": "https://jeenweb.com/services/custom-software"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
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
