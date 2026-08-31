import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Hosting Services & Server Solutions | Jeenweb Vadodara",
  description:
    "Get ultra-fast, secure web hosting in Vadodara with Jeenweb. Features manual backup facilities, NVMe storage, free SSL, and 99.9% uptime across Gujarat.",
  keywords: [
    "web hosting Vadodara",
    "best hosting company Vadodara",
    "shared hosting India",
    "NVMe SSD hosting",
    "manual backup hosting"
  ],
  openGraph: {
    title: "Web Hosting Services & Server Solutions | Jeenweb Vadodara",
    description:
      "Get ultra-fast, secure web hosting in Vadodara with Jeenweb. Features manual backup facilities, NVMe storage, free SSL, and 99.9% uptime across Gujarat.",
    type: "website",
    locale: "en_IN",
    siteName: "Jeenweb Technologists"
  }
};

export default function HostingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
