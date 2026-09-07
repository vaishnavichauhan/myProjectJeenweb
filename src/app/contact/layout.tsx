import type { Metadata } from "next";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Jeenweb Technologists Vadodara",
  description:
    "Get in touch with Jeenweb Technologists in Vadodara, Gujarat. Consult our engineers for custom software, web hosting, domain registrations, or digital growth.",
  keywords: [
    "Contact Jeenweb",
    "IT Company Vadodara Contact",
    "Software Development Inquiry Gujarat",
    "Hire Web Developers Vadodara"
  ],
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Us | Jeenweb Technologists Vadodara",
    description:
      "Consult our engineers in Vadodara for custom software, web hosting, domain registrations, or digital growth.",
    url: "https://jeenweb.com/contact",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Jeenweb Technologists"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Jeenweb Technologists Vadodara",
    description:
      "Consult our engineers in Vadodara for custom software, web hosting, domain registrations, or digital growth.",
    images: ["/images/og-image.jpg"]
  }
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://jeenweb.com/contact/#contactpage",
      url: "https://jeenweb.com/contact",
      name: "Contact Jeenweb Technologists",
      mainEntity: {
        "@type": "Organization",
        name: "Jeenweb Technologists Pvt. Ltd.",
        telephone: "+91-98250-32216",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          addressCountry: "IN"
        }
      }
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
          name: "Contact Us",
          item: "https://jeenweb.com/contact"
        }
      ]
    }
  ]
};

export default function ContactLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={contactSchema} />
      {children}
    </>
  );
}
