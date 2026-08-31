import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain Name Registration & Management | Jeenweb Vadodara",
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
  openGraph: {
    title: "Domain Name Registration & Management | Jeenweb Vadodara",
    description:
      "Register business domain names in Vadodara with Jeenweb. Secure fast DNS routing, full TLD options, and complete domain privacy across Gujarat.",
    type: "website",
    locale: "en_IN",
    siteName: "Jeenweb Technologists"
  }
};

export default function DomainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
