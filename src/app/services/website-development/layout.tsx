import type { Metadata } from "next";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Custom Website Development & Next.js Web Apps | Jeenweb Vadodara",
  description:
    "Engineering high-performance Next.js websites, bespoke eCommerce stores, and enterprise web applications in Vadodara. Sub-second speed and Core Web Vitals optimization.",
  keywords: [
    "Website Development Vadodara",
    "Custom Web Applications Gujarat",
    "Next.js Development Company",
    "eCommerce Website Vadodara",
    "Bespoke Web Design India"
  ],
  alternates: {
    canonical: "/services/website-development"
  },
  openGraph: {
    title: "Custom Website Development & Next.js Web Apps | Jeenweb Vadodara",
    description:
      "Engineering bespoke corporate websites, eCommerce stores, and Next.js web applications with sub-second speeds in Vadodara.",
    url: "https://jeenweb.com/services/website-development",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/custom-software-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Website Development"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Development & Next.js Web Apps | Jeenweb Vadodara",
    description:
      "Engineering bespoke corporate websites and Next.js web applications with sub-second speeds in Vadodara.",
    images: ["/images/custom-software-hero.jpg"]
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://jeenweb.com/services/website-development/#service",
      name: "Custom Website Development & Next.js Web Applications",
      serviceType: "Web Development",
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
        "Bespoke corporate websites, scalable eCommerce stores, and Next.js web applications built with sub-second page load times and strict Google Core Web Vitals compliance."
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
          name: "Website Development",
          item: "https://jeenweb.com/services/website-development"
        }
      ]
    }
  ]
};

export default function WebsiteDevelopmentLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
