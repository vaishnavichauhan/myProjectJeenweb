import type { Metadata } from "next";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Enterprise Domain Registration & DNS Management | Jeenweb Vadodara",
  description:
    "Register business domain names in Vadodara with Jeenweb. Secure fast DNS routing, full TLD options, and complete domain privacy across Gujarat.",
  keywords: [
    "domain registration Vadodara",
    "buy domain Gujarat",
    "TLD domain search",
    "DNS management Vadodara",
    "domain transfer Gujarat",
    "buy domain name",
    "domain name search"
  ],
  alternates: {
    canonical: "/services/domain"
  },
  openGraph: {
    title: "Enterprise Domain Registration & DNS Management | Jeenweb Vadodara",
    description:
      "Register business domain names in Vadodara with Jeenweb. Secure fast DNS routing, full TLD options, and complete domain privacy across Gujarat.",
    url: "https://jeenweb.com/services/domain",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/domaint.png",
        width: 1280,
        height: 835,
        alt: "Domain Name Registration"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Domain Registration & DNS Management | Jeenweb Vadodara",
    description:
      "Search, register, and protect your brand identity with lightning-fast DNS routing and complete control.",
    images: ["/images/domaint.png"]
  }
};

const domainSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://jeenweb.com/services/domain/#service",
      name: "Enterprise Domain Name Registration & DNS Management",
      serviceType: "Domain Name Registration",
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
        "Official TLD domain registration (.com, .in, .net, .org, .co), high-speed Anycast DNS management, WHOIS identity privacy protection, and renewal safeguards."
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
          name: "Domain Registration",
          item: "https://jeenweb.com/services/domain"
        }
      ]
    }
  ]
};

export default function DomainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={domainSchemas} />
      {children}
    </>
  );
}
