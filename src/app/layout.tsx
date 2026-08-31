import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap"
});

export const metadata: Metadata = {
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
  icons: {
    icon: "/images/logo.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F8FAFC] text-slate-900 selection:bg-[#16325B] selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
