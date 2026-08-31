import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Company Vadodara | Jeenwebinfo",
  description:
    "Build custom ERP, CRM, visitor, and school management software in Vadodara with Jeenweb. Mapped to your actual business workflow across Gujarat.",
  keywords: [
    "custom software development Vadodara",
    "ERP software company Gujarat",
    "custom CRM software Vadodara",
    "school management software Gujarat",
    "enterprise software development"
  ],
  openGraph: {
    title: "Custom Software Development Company Vadodara | Jeenwebinfo",
    description:
      "Build custom ERP, CRM, visitor, and school management software in Vadodara with Jeenweb. Mapped to your actual business workflow across Gujarat.",
    type: "website",
    locale: "en_IN",
    siteName: "Jeenweb Technologists"
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
      {children}
    </>
  );
}
