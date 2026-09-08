import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "../components/common/BackToTopButton";
import JsonLd from "@/components/common/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeenweb.com"),
  title: {
    default: "Jeenweb Technologists Pvt. Ltd. | Premier IT & Software Company Vadodara",
    template: "%s | Jeenweb Technologists"
  },
  description:
    "Jeenweb Technologists Pvt. Ltd. delivers custom software development, high-speed NVMe hosting, enterprise domain registration, GEO/AEO search optimization, and cloud email infrastructure across Gujarat and worldwide since 2000.",
  keywords: [
    "Jeenweb Technologists",
    "IT Company Vadodara",
    "Custom ERP Gujarat",
    "NVMe Web Hosting",
    "Domain Registration India",
    "AI Search SEO AEO GEO Vadodara",
    "Google Workspace Microsoft 365 Partner"
  ],
  authors: [{ name: "Jeenweb Technologists Pvt. Ltd." }],
  creator: "Jeenweb Technologists Pvt. Ltd.",
  publisher: "Jeenweb Technologists Pvt. Ltd.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Jeenweb Technologists Pvt. Ltd. | Premier IT & Software Company Vadodara",
    description:
      "Delivering custom software development, high-speed NVMe hosting, enterprise domain registration, and AI search optimization in Vadodara since 2000.",
    url: "https://jeenweb.com",
    siteName: "Jeenweb Technologists",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeenweb Technologists Pvt. Ltd."
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeenweb Technologists Pvt. Ltd. | Premier IT & Software Company Vadodara",
    description:
      "Enterprise IT systems, custom software development, and AI search visibility from Vadodara.",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/images/logo.png"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jeenweb.com/#organization",
      name: "Jeenweb Technologists Pvt. Ltd.",
      url: "https://jeenweb.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://jeenweb.com/#logo",
        url: "https://jeenweb.com/images/jeenweb-logo.png",
        caption: "Jeenweb Technologists Pvt. Ltd."
      },
      image: "https://jeenweb.com/images/jeenweb-logo.png",
      description:
        "Premier IT systems, custom software engineering, NVMe web hosting, enterprise domain registration, and AI search optimization company in Vadodara, Gujarat.",
      foundingDate: "2000",
      founder: {
        "@type": "Person",
        name: "Exita Shah"
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Alkapuri",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390007",
        addressCountry: "IN"
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-98250-32216",
          contactType: "customer support",
          areaServed: ["IN", "US", "GB", "AE", "CA", "AU"],
          availableLanguage: ["English", "Hindi", "Gujarati"]
        }
      ],
      sameAs: [
        "https://www.facebook.com/jeenweb",
        "https://www.linkedin.com/company/jeenweb-technologists",
        "https://twitter.com/jeenweb"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://jeenweb.com/#website",
      url: "https://jeenweb.com",
      name: "Jeenweb Technologists",
      publisher: {
        "@id": "https://jeenweb.com/#organization"
      },
      inLanguage: "en-US"
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} min-h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F8FAFC] text-slate-900 selection:bg-[#16325B] selection:text-white">
        <JsonLd data={organizationSchema} />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
