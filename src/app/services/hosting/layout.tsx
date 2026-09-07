import type { Metadata } from "next";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "High-Speed NVMe Web Hosting & Server Solutions | Jeenweb Vadodara",
  description:
    "Get ultra-fast, secure web hosting in Vadodara with Jeenweb. Features manual backup facilities, NVMe storage, free SSL, and 99.9% uptime across Gujarat.",
  keywords: [
    "web hosting Vadodara",
    "best hosting company Vadodara",
    "shared hosting India",
    "NVMe SSD hosting",
    "manual backup hosting"
  ],
  alternates: {
    canonical: "/services/hosting"
  },
  openGraph: {
    title: "High-Speed NVMe Web Hosting & Server Solutions | Jeenweb Vadodara",
    description:
      "Get ultra-fast, secure web hosting in Vadodara with Jeenweb. Features manual backup facilities, NVMe storage, free SSL, and 99.9% uptime across Gujarat.",
    url: "https://jeenweb.com/services/hosting",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NVMe Web Hosting"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Speed NVMe Web Hosting & Server Solutions | Jeenweb Vadodara",
    description:
      "Enterprise NVMe web hosting, 99.9% uptime, and reliable data protection managed from Vadodara.",
    images: ["/images/og-image.jpg"]
  }
};

const hostingSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://jeenweb.com/services/hosting/#service",
      name: "High-Speed NVMe Web Hosting & Server Infrastructure",
      serviceType: "Web Hosting & Cloud Servers",
      provider: {
        "@type": "Organization",
        name: "Jeenweb Technologists Pvt. Ltd.",
        url: "https://jeenweb.com"
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gujarat, India and Worldwide"
      },
      description:
        "Fast, secure, and stable NVMe web hosting with on-demand manual backups, multi-layered security, and 99.9% uptime for commercial websites."
    },
    {
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
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Web Hosting",
          item: "https://jeenweb.com/services/hosting"
        }
      ]
    }
  ]
};

export default function HostingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={hostingSchemas} />
      {children}
    </>
  );
}
