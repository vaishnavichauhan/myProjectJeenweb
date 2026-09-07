"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import TrustedPartnershipsMarquee from "@/components/common/TrustedPartnershipsMarquee";
import {
  Server,
  Database,
  ShieldCheck,
  Zap,
  Lock,
  HardDrive,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Mail,
  Send,
  Layers,
  Download,
  RefreshCw,
  Search,
  Cpu,
  Terminal,
  Sliders
} from "lucide-react";
import { EMAIL_SOLUTIONS_PART2 } from "@/lib/siteData";

export default function HostingServicePage() {
  // Dynamic typewriter typing effect for search input
  const searchQueries = [
    "best email services provider",
    "google workspace enterprise",
    "microsoft 365 business standard",
    "zoho workplace mail hosting",
    "rediffmail corporate cloud",
    "titan business mail setup"
  ];
  const [displayText, setDisplayText] = useState("");
  const [queryIndex, setQueryIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuery = searchQueries[queryIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentQuery.length) {
        timer = setTimeout(() => {
          setDisplayText(currentQuery.slice(0, displayText.length + 1));
        }, 85);
      } else {
        // Full text reached, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentQuery.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setQueryIndex((prev) => (prev + 1) % searchQueries.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, queryIndex]);



  // Section 3: Interactive Hosting Standards (matching ref image)
  const [activeStandardIndex, setActiveStandardIndex] = useState(0);

  const hostingStandards = [
    {
      id: "01",
      tabName: "1) Pure NVMe SSD Storage",
      title: "Pure NVMe SSD Storage",
      image: "/images/history-datacenter.jpg",
      description:
        "NVMe SSD hosting is significantly faster than standard SATA SSD storage — up to 10 times faster for read and write operations. This directly reduces database response times, improves dynamic page generation, and boosts your Google Core Web Vitals score.",
      points: [
        {
          title: "10x Read/Write Performance",
          desc: "Pure PCIe NVMe architecture eliminates I/O disk bottlenecks during peak customer traffic spikes."
        },
        {
          title: "Google Core Web Vitals",
          desc: "Faster Server Response Time (TTFB) directly improves Google search rankings and customer retention."
        },
        {
          title: "High Concurrent Database Queries",
          desc: "MySQL transactions execute with ultra-low wait state latency for e-commerce and dynamic portals."
        }
      ]
    },
    {
      id: "02",
      tabName: "2) Free SSL Certificate",
      title: "Hosting With Free SSL Certificate",
      image: "/images/company-vision-boardroom.jpg",
      description:
        "Every domain hosted with Jeenweb gets a free SSL certificate through Let's Encrypt — installed automatically and renewed without any manual action needed from you. Full HTTPS security across your entire domain and subdomains.",
      points: [
        {
          title: "Automatic Installation & Renewal",
          desc: "Never suffer expired certificate warnings, broken HTTPS links, or browser security interstitials."
        },
        {
          title: "Full 256-Bit HTTPS Encryption",
          desc: "Secures all customer transactions, login sessions, and contact form submissions from eavesdropping."
        },
        {
          title: "Instant Browser Trust",
          desc: "Guarantees the padlock trust indicator on Google Chrome, Apple Safari, Microsoft Edge, and Firefox."
        }
      ]
    },
    {
      id: "03",
      tabName: "3) Isolated Resources — CageFS",
      title: "Isolated Server Resources — CageFS",
      image: "/images/history-team-collab.jpg",
      description:
        "We use CageFS account containerization on every server. Each hosting account is completely walled off from every other account. If another website on the same server gets compromised, your files and databases remain 100% untouched.",
      points: [
        {
          title: "Containerized File System",
          desc: "Users cannot see each other's files, scripts, or view server configuration files across accounts."
        },
        {
          title: "Zero Cross-Site Infection",
          desc: "Malware or security vulnerabilities on neighboring accounts can never cross into your infrastructure."
        },
        {
          title: "Dedicated Memory & CPU Allocation",
          desc: "Prevents noisy neighbors from consuming your allotted compute resources during load surges."
        }
      ]
    },
    {
      id: "04",
      tabName: "4) Developer-Ready Stack",
      title: "Developer-Ready Environment",
      image: "/images/sector-sme.jpg",
      description:
        "Full support for multiple PHP versions from 7.4 to latest PHP 8.x, Node.js applications, secure SSH shell access, Git repository push-to-deploy, and phpMyAdmin. Everything modern engineering teams need out of the box.",
      points: [
        {
          title: "Multi-PHP Selector (7.4 to 8.x)",
          desc: "Switch PHP versions per domain or subdirectory in one click without server downtime or reboots."
        },
        {
          title: "SSH & Git Integration",
          desc: "Push code directly from GitHub/GitLab repositories with automated post-receive build hooks."
        },
        {
          title: "Native Node.js & phpMyAdmin",
          desc: "Run background services, manage MySQL tables directly, and execute modern full-stack workflows."
        }
      ]
    },
    {
      id: "05",
      tabName: "5) Full cPanel Access",
      title: "cPanel Hosting — Simple and Familiar",
      image: "/images/sector-manufacturing.jpg",
      description:
        "Every account comes standard with full cPanel access—the global industry standard control panel for domain, email, database, and DNS administration. Intuitive for non-technical business owners and powerful for developers.",
      points: [
        {
          title: "Intuitive Management Console",
          desc: "Manage domain DNS records, FTP accounts, redirects, and file directories with complete ease."
        },
        {
          title: "1-Click Softaculous Installer",
          desc: "Deploy WordPress, OpenCart, and Joomla with automated version updates and staging environments."
        },
        {
          title: "Real-Time Resource Monitor",
          desc: "Track live RAM, CPU, IOPS, and disk usage transparently directly from your dashboard."
        }
      ]
    }
  ];
  const hostingClientLogosRow1 = [
  { logo: "/images/clientsLogo/Domain/1.png" },
  ];

  const hostingClientLogosRow2 = [
 { logo: "/images/clientsLogo/Domain/1.png" },
  ];

  const [selectedPlan, setSelectedPlan] = useState("Corporate NVMe Hosting");

  const vpsFeatures = [
    "Dedicated CPU, RAM, and storage resources",
    "Fast and reliable performance",
    "Full server-level control",
    "Scalable resources as your business grows",
    "Secure isolated environment",
    "Linux/Windows server options",
    "Easy deployment and configuration",
    "Regular backups and monitoring"
  ];

  const vpsBestFor = [
    "Business websites",
    "eCommerce platforms",
    "Web applications",
    "APIs",
    "Databases",
    "Growing online businesses"
  ];

  const dedicatedFeatures = [
    "Entire physical server dedicated to your business",
    "High-performance CPU, RAM, and storage",
    "Maximum server resources",
    "Full root/administrator access",
    "Advanced security and server configuration",
    "High availability and reliability",
    "Custom server configurations",
    "Suitable for high-traffic applications"
  ];

  const dedicatedBestFor = [
    "High-traffic websites",
    "Enterprise applications",
    "Large databases",
    "eCommerce platforms",
    "ERP systems",
    "Resource-intensive applications"
  ];

  const hostingFaqs = [
    {
      q: "How are Jeenweb's manual backup facilities different from regular automated backups?",
      a: "Automated backups run on a fixed timer — typically once daily. Manual backup facilities let you create a fresh backup at any exact moment you choose — usually right before a major update or code change. That way if something breaks at 2pm, you are not waiting until midnight to restore. It is the most important safety feature for any active business website."
    },
    {
      q: "Does Jeenweb migrate my website from my current hosting provider?",
      a: "Yes. Our team in Vadodara handles the complete migration — files, databases, SSL configuration, and staging tests — before we update your DNS. Your website and email stay live throughout. We also offer this free of charge for new clients moving to Jeenweb hosting."
    },
    {
      q: "What is the difference between NVMe SSD hosting and regular SATA SSD hosting?",
      a: "NVMe SSDs read and write data roughly 7 to 10 times faster than standard SATA SSDs. For websites with dynamic pages and active databases, this makes a significant difference in page speed, database response time, and overall visitor experience."
    },
    {
      q: "What stops malware from spreading between accounts on the same server?",
      a: "We use CageFS containerization—a technology that completely isolates every hosting account from every other one on the same server. Even if one account is compromised, malware cannot cross over to your files or database."
    },
    {
      q: "Can I upgrade my hosting plan as my website traffic grows?",
      a: "Yes. Storage, RAM, and CPU cores can all be upgraded without downtime or changes to your existing code or configurations. Our team handles the upgrade cleanly in the background."
    }
  ];

  const hostingTiers = [
    {
      name: "Starter Business",
      desc: "For small business websites and corporate brochure portals.",
      specs: ["10 GB Pure NVMe SSD Storage", "Unmetered Bandwidth", "Free Let's Encrypt SSL", "On-Demand Manual Backups", "10 Corporate Email Accounts", "cPanel Control Dashboard"],
      tag: "Small Business",
      popular: false
    },
    {
      name: "Corporate Growth",
      desc: "For active business websites, ERP portals, and dynamic platforms.",
      specs: ["35 GB Pure NVMe SSD Storage", "CageFS Account Isolation", "Daily & Manual Backups", "Free Let's Encrypt SSL", "Unlimited Corporate Emails", "Redis In-Memory Caching", "Priority Vadodara Desk Support"],
      tag: "Most Popular",
      popular: true
    },
    {
      name: "Dedicated Enterprise",
      desc: "For high-traffic portals, custom software, and multi-tenant applications.",
      specs: ["100+ GB NVMe SSD Storage", "Dedicated Virtual Core & RAM", "Full Root SSH Access", "Hourly Snapshot Backups", "Custom Firewall & ModSecurity", "Guaranteed 99.9% Uptime SLA", "24/7 Direct Tech Escalation"],
      tag: "Maximum Power",
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/#services" },
              { label: "Web Hosting Services" }
            ]}
          />
        </div>
      </div>

      {/* Hero Banner: Half Cross-Section Layout with Distinct Color & Live Search Dropdown */}
      <section className="bg-gradient-to-br from-[#06152B] via-[#0B1E38] to-[#040C18] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-700/60">
        
        {/* Ambient Glows & Grid Accent */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Half Cross-Section: Headline & Narrative */}
            <div className="lg:col-span-6 space-y-6">

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                High-Speed, Ultra-Secure Web Hosting Powered by On-Demand Manual Backup Facilities
              </h1>

              <p className="text-base sm:text-lg text-sky-300 font-semibold">
                Enterprise-grade NVMe server infrastructure, 99.9% uptime, and reliable data protection managed from Vadodara.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                A slow website costs you visitors. An unreliable server costs you customers. And a host without proper backup facilities can cost you everything. Jeenweb is a trusted web hosting company in Vadodara providing fast, secure, and stable hosting for business websites, web applications, e-commerce stores, and corporate portals across Gujarat.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#plans"
                  className="px-7 py-3.5 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-950/40 hover:scale-[1.02] active:scale-95 flex items-center gap-2.5"
                >
                  <span>Explore Hosting Tiers</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Half Cross-Section: Contrasting Background + Man Hands Searching Image + Dropdown UI */}
            <div className="lg:col-span-6 relative">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-blue-500/15 rounded-[36px] blur-xl pointer-events-none" />

              {/* Search Engine Input Box & Dropdown Results */}
              <div className="relative z-10 w-full max-w-lg mx-auto lg:ml-auto">
                  
                  {/* Search Bar with Dynamic Typing */}
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-slate-200/90 flex items-center justify-between gap-3 relative z-10">
                      <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <Search className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div className="flex items-center text-xs sm:text-sm font-semibold text-slate-800 truncate min-h-[22px]">
                          <span>{displayText || "best email services provider"}</span>
                          <span className="w-0.5 h-4 bg-blue-600 animate-pulse ml-0.5 inline-block" />
                        </div>
                      </div>
                      
                      {/* Search Action Button */}
                      <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-blue-500/30 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all">
                        <span>Search</span>
                      </button>
                    </div>
                  </div>

                  {/* Dropdown Results Box with 3D Full Flip Rotation on Query Change */}
                  <div className="[perspective:1200px] mt-3">
                    <div
                      key={queryIndex}
                      className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xl shadow-slate-950/20 space-y-1.5 sm:space-y-2 animate-full-flip"
                    >
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        <span>Top Verified Providers</span>
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          Auto-Matching Engine
                        </span>
                      </div>

                      {/* Result 1: Google Workspace */}
                      <div className={`p-2 sm:p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 border group cursor-default ${
                        queryIndex === 1
                          ? "bg-blue-50/90 border-blue-300 ring-2 ring-blue-500/30 shadow-sm"
                          : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                      }`}>
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-8 w-24 relative flex-shrink-0 flex items-center">
                            <Image
                              src="/images/logos/google-workspace.svg"
                              alt="Google Workspace"
                              width={110}
                              height={28}
                              className="h-6 w-auto object-contain"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors block truncate">
                              Google Workspace
                            </span>
                            <span className="text-[10px] text-slate-500 block truncate">
                              Gmail, Drive, Meet & Cloud Admin
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 flex-shrink-0">
                          #1 Collaboration
                        </span>
                      </div>

                      {/* Result 2: Microsoft 365 */}
                      <div className={`p-2 sm:p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 border group cursor-default ${
                        queryIndex === 2
                          ? "bg-sky-50/90 border-sky-300 ring-2 ring-sky-500/30 shadow-sm"
                          : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                      }`}>
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-8 w-24 relative flex-shrink-0 flex items-center">
                            <Image
                              src="/images/logos/microsoft-365.svg"
                              alt="Microsoft 365"
                              width={110}
                              height={28}
                              className="h-6 w-auto object-contain"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors block truncate">
                              Microsoft 365
                            </span>
                            <span className="text-[10px] text-slate-500 block truncate">
                              Exchange, Outlook & Windows Stacks
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200/60 flex-shrink-0">
                          Enterprise Standard
                        </span>
                      </div>

                      {/* Result 3: Zoho Workplace */}
                      <div className={`p-2 sm:p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 border group cursor-default ${
                        queryIndex === 3
                          ? "bg-amber-50/90 border-amber-300 ring-2 ring-amber-500/30 shadow-sm"
                          : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                      }`}>
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-8 w-24 relative flex-shrink-0 flex items-center">
                            <Image
                              src="/images/logos/zoho.svg"
                              alt="Zoho"
                              width={110}
                              height={28}
                              className="h-6 w-auto object-contain"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors block truncate">
                              Zoho Workplace
                            </span>
                            <span className="text-[10px] text-slate-500 block truncate">
                              Ad-Free Mail, Office Suite & Docs
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 flex-shrink-0">
                          Cost Efficiency
                        </span>
                      </div>

                      {/* Result 4: Rediffmail Enterprise */}
                      <div className={`p-2 sm:p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 border group cursor-default ${
                        queryIndex === 4
                          ? "bg-red-50/90 border-red-300 ring-2 ring-red-500/30 shadow-sm"
                          : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                      }`}>
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-8 w-24 relative flex-shrink-0 flex items-center">
                            <Image
                              src="/images/logos/rediff.svg"
                              alt="Rediff"
                              width={110}
                              height={28}
                              className="h-6 w-auto object-contain"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors block truncate">
                              Rediffmail Enterprise
                            </span>
                            <span className="text-[10px] text-slate-500 block truncate">
                              Dedicated Indian Cloud Mail Infrastructure
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200/60 flex-shrink-0">
                          India Cloud
                        </span>
                      </div>

                      {/* Result 5: Titan Mail */}
                      <div className={`p-2 sm:p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 border group cursor-default ${
                        queryIndex === 5
                          ? "bg-indigo-50/90 border-indigo-300 ring-2 ring-indigo-500/30 shadow-sm"
                          : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                      }`}>
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-8 w-24 relative flex-shrink-0 flex items-center">
                            <Image
                              src="/images/logos/titan.svg"
                              alt="Titan"
                              width={110}
                              height={28}
                              className="h-6 w-auto object-contain"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors block truncate">
                              Titan Business Mail
                            </span>
                            <span className="text-[10px] text-slate-500 block truncate">
                              Rich Templates, Follow-Up & Read Receipts
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/60 flex-shrink-0">
                          Modern UI
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Complete Control with On-Demand Manual Backup Facilities */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80" id="manual-backups">
        
        {/* Subtle Ambient Background Grids */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-16">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
                Zero-Risk Production Updates
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Complete Control with On-Demand Manual Backup Facilities
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Scheduled backups run automatically every day—usually late at night. But what happens when you need to update your website at 2:00 PM and something breaks? Our manual backup facilities give you complete control: take an instantaneous snapshot before any update, and roll back in seconds with zero data loss.
            </p>
          </div>

          {/* 2-Column Balanced Showcase: Left Image | Right Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Cloud Backup Feature Image Showcase (Clean, No Overlay Text) */}
            <div className="lg:col-span-5 relative flex flex-col">
              <div className="relative h-[340px] sm:h-[380px] lg:h-full min-h-[320px] w-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-blue-950/10 group/img">
                <Image
                  src="/images/manual-backup-cloud.jpg"
                  alt="On-Demand Manual Cloud Backup Facilities"
                  fill
                  className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Architectural Capability Cards (Icons Removed) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-3.5">
              
              {/* Card 1: Pre-Update Snapshot */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group relative overflow-hidden flex-1 flex flex-col justify-center">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1A3B71] transition-colors leading-snug">
                    Protect Your Website Before an Update
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Create a complete backup of your files, MySQL databases, and configuration settings before pushing any change to your live website.
                  </p>
                </div>
              </div>

              {/* Card 2: Instant 1-Click Rollback */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group relative overflow-hidden flex-1 flex flex-col justify-center">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1A3B71] transition-colors leading-snug">
                    Restore Your Website in Under 60 Seconds
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    If an update throws a critical 500 error or a plugin conflict breaks your checkout, restore from your manual snapshot immediately with 1 click. Local Vadodara team on standby.
                  </p>
                </div>
              </div>

              {/* Card 3: Offline Storage Archive */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group relative overflow-hidden flex-1 flex flex-col justify-center">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1A3B71] transition-colors leading-snug">
                    Download an Offline Backup Archive
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Export high-compression, AES-encrypted backup archives directly to your office storage in Vadodara. Keep an independent, off-server copy for audit and legal compliance.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Section 3: Hosting Features and Technical Standards (Cream Theme) */}
      {/* Section 3: Technical Infrastructure Standards */}
      <section className="py-20 lg:py-24 bg-[#FAF6F0] relative overflow-hidden border-y border-[#EADBCC]" id="technical-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-16">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
                Infrastructure Standards
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Built for Speed, Scalability, and Absolute Stability
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              From pure PCIe NVMe solid-state storage to CageFS containerized security, discover the enterprise standards that power every hosting account.
            </p>
          </div>

          {/* 2-Column Interactive Layout: Left Pills (Reduced Width) | Right Content (Equal Height) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Selectable Pill Navigation Tabs (Reduced Width, Full Height Matching) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-2.5 h-full">
              {hostingStandards.map((std, idx) => {
                const isActive = idx === activeStandardIndex;
                return (
                  <button
                    key={std.id}
                    onClick={() => setActiveStandardIndex(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group cursor-pointer flex-1 ${
                      isActive
                        ? "bg-[#1A3B71] text-white font-bold shadow-md scale-[1.01]"
                        : "bg-white/80 hover:bg-white border border-[#EADBCC] text-slate-700 hover:text-slate-900 font-medium shadow-2xs"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-sans truncate pr-2">
                      {std.tabName}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400 flex-shrink-0 ml-1.5 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Title with ▶ icon, Description, and Bullet Points (Full Height Matching) */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#EADBCC] shadow-xs flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center gap-2.5 text-[#C11E23] mb-3">
                  <span className="text-sm font-black">▶</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {hostingStandards[activeStandardIndex].title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {hostingStandards[activeStandardIndex].description}
                </p>
              </div>

              {/* Bullet Points with Red Dots and Bold Headers */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                {hostingStandards[activeStandardIndex].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="text-[#C11E23] text-base leading-none mt-0.5 flex-shrink-0">•</span>
                    <p className="leading-relaxed font-sans">
                      <strong className="text-slate-900 font-bold">{pt.title}:</strong>{" "}
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Hosting Plans & Resource Allocation */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80" id="plans">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Standardized Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-16">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
                Resource Allocation Tiers
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Choose the Right Resource Allocation for Your Business
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Transparent specifications with pure PCIe NVMe performance, isolated CageFS containers, and included on-demand manual backup facilities managed from Vadodara.
            </p>
          </div>

          {/* 3 Pricing Tier Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
            
            {/* Tier 1: Starter Business */}
            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50 flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all group relative overflow-hidden">
              {/* Checkered Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
                    Small Business & Portfolios
                  </span>
                  <HardDrive className="w-5 h-5 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                  Starter Business
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-6 font-sans">
                  Ideal for local business websites, professional portfolios, and brochure corporate sites.
                </p>

                {/* Main Resource Highlight Block */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 mb-6 space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-slate-900 font-mono">10 GB</span>
                    <span className="text-xs font-bold uppercase text-slate-600 font-mono">NVMe SSD</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold block">
                    1 Core CPU • 1 GB Dedicated RAM
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-3 pt-2 mb-8 text-xs text-slate-700 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Manual Snapshots:</strong> Included pre-update snapshot facility</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Security:</strong> Free Auto-Renewing Let&apos;s Encrypt SSL</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Isolation:</strong> CageFS Containerized File Safety</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>cPanel Console:</strong> Full standard access + phpMyAdmin</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Monitoring:</strong> 24/7 Hardware & Uptime Tracking</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <button
                  onClick={() => {
                    setSelectedPlan("Starter Business");
                    window.location.href = "/contact#get-in-touch";
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer border border-white/10"
                >
                  Configure Starter Business
                </button>
              </div>
            </div>

            {/* Tier 2: Professional Corporate (Featured - Top Border Removed) */}
            <div className="rounded-3xl p-8 bg-white border-2 border-slate-300 shadow-2xl shadow-blue-950/10 flex flex-col justify-between relative transform lg:-translate-y-2 group overflow-hidden">
              {/* Checkered Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              <span className="absolute top-4 right-6 px-3.5 py-1 rounded-full bg-[#1A3B71] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm flex items-center gap-1 z-20">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Most Popular
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
                    High Growth & B2B Portals
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                  Professional Corporate
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-6 font-sans">
                  Built for corporate platforms, multi-page product catalogs, dynamic web apps, and growing e-commerce stores.
                </p>

                {/* Main Resource Highlight Block */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 mb-6 space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-[#1A3B71] font-mono">50 GB</span>
                    <span className="text-xs font-bold uppercase text-blue-900 font-mono">NVMe SSD</span>
                  </div>
                  <span className="text-[11px] font-mono text-blue-700 font-semibold block">
                    2 Cores CPU • 2 GB Dedicated RAM
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-3 pt-2 mb-8 text-xs text-slate-700 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Manual Snapshots:</strong> Included + 1-Click Rollback Facility</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Security:</strong> Free SSL + WAF Web Application Firewall</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Developer Stack:</strong> Multi-PHP (7.4–8.x) + SSH & Git Hooks</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>cPanel Console:</strong> Full cPanel + Automated Softaculous</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Support:</strong> Priority Vadodara Engineering Assistance</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <button
                  onClick={() => {
                    setSelectedPlan("Professional Corporate");
                    window.location.href = "/contact#get-in-touch";
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer border border-white/10"
                >
                  Configure Professional Corporate
                </button>
              </div>
            </div>

            {/* Tier 3: Enterprise High-Traffic (Top Border Removed) */}
            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50 flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all group relative overflow-hidden">
              {/* Checkered Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
                    High Performance Enterprise
                  </span>
                  <Server className="w-5 h-5 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                  Enterprise High-Traffic
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-6 font-sans">
                  Engineered for heavy multi-tenant ERPs, mission-critical databases, and high-concurrency operations.
                </p>

                {/* Main Resource Highlight Block */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 mb-6 space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-slate-900 font-mono">Unmetered</span>
                    <span className="text-xs font-bold uppercase text-slate-600 font-mono">NVMe SSD</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold block">
                    4 Cores CPU • 4 GB Dedicated RAM
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-3 pt-2 mb-8 text-xs text-slate-700 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Manual Snapshots:</strong> Included + Dedicated Air-Gapped Vault</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Security:</strong> Free SSL + Dedicated Static IP Included</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Isolation:</strong> Maximum CageFS Container Priority</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Developer Stack:</strong> Full SSH, Git Hooks, Node.js & Cron</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Support:</strong> Dedicated Systems Engineer Direct Access</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <button
                  onClick={() => {
                    setSelectedPlan("Enterprise High-Traffic");
                    window.location.href = "/contact#get-in-touch";
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer border border-white/10"
                >
                  Configure Enterprise High-Traffic
                </button>
              </div>
            </div>

          </div>

          {/* Full Side-by-Side Comparison Matrix */}
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl bg-white mb-0">
            
            {/* Clean Dashboard Table Header Bar */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1A3B71] text-xs font-mono font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A3B71] animate-pulse" />
                  Technical Matrix
                </div>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
                  Comprehensive Resource Allocation Comparison
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-sans">
                  Side-by-side technical breakdown across all standard Vadodara hosting tiers
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/75 text-slate-700 text-xs uppercase tracking-wider font-mono border-b border-slate-200">
                    <th className="py-4 px-6 sm:px-8 w-1/4 font-extrabold text-slate-900">Feature Standard</th>
                    <th className="py-4 px-6 sm:px-8 w-1/4 font-bold text-slate-800">
                      Starter Business
                    </th>
                    <th className="py-4 px-6 sm:px-8 w-1/4 font-black text-[#1A3B71] bg-blue-50/50 border-x border-blue-100/80 relative">
                      <div className="flex items-center justify-between">
                        <span>Professional Corporate</span>
                        <span className="text-[10px] font-mono font-bold bg-[#1A3B71] text-white px-2 py-0.5 rounded-full uppercase">
                          Popular
                        </span>
                      </div>
                    </th>
                    <th className="py-4 px-6 sm:px-8 w-1/4 font-bold text-slate-800">
                      Enterprise High-Traffic
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm font-sans">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">Recommended Workload</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Brochure sites & portfolios</td>
                    <td className="py-4 px-6 sm:px-8 text-[#1A3B71] font-bold bg-blue-50/30 border-x border-blue-100/60">B2B portals, dynamic apps & e-commerce</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-800 font-semibold">Large enterprises & ERP portals</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">Pure PCIe NVMe Storage</td>
                    <td className="py-4 px-6 sm:px-8 font-mono font-bold text-slate-800">10 GB NVMe</td>
                    <td className="py-4 px-6 sm:px-8 font-mono font-bold text-[#1A3B71] bg-blue-50/30 border-x border-blue-100/60">50 GB NVMe</td>
                    <td className="py-4 px-6 sm:px-8 font-mono font-bold text-[#1A3B71]">Unmetered NVMe</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">Dedicated RAM / CPU Cores</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-700 font-mono">1 GB RAM / 1 Core</td>
                    <td className="py-4 px-6 sm:px-8 text-[#1A3B71] font-mono font-bold bg-blue-50/30 border-x border-blue-100/60">2 GB RAM / 2 Cores</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-800 font-mono font-bold">4 GB RAM / 4 Cores</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">On-Demand Manual Backups</td>
                    <td className="py-4 px-6 sm:px-8 text-emerald-700 font-semibold">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>Included</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-emerald-700 font-bold bg-blue-50/30 border-x border-blue-100/60">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>Included + 1-Click Rollback</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-emerald-700 font-bold">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>Included + Air-Gapped Vault</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">CageFS Account Container</td>
                    <td className="py-4 px-6 sm:px-8 text-emerald-700 font-semibold">Standard Isolation</td>
                    <td className="py-4 px-6 sm:px-8 text-emerald-700 font-bold bg-blue-50/30 border-x border-blue-100/60">Enhanced Container Guard</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-800 font-bold">Dedicated Priority Container</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">SSL & Perimeter Security</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Free SSL + Malware Scanner</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-900 font-semibold bg-blue-50/30 border-x border-blue-100/60">Free SSL + WAF Firewall</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-900 font-semibold">Free SSL + Dedicated Static IP</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900">Technical Support SLA</td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">24/7 Hardware Monitoring</td>
                    <td className="py-4 px-6 sm:px-8 text-emerald-700 font-semibold bg-blue-50/30 border-x border-blue-100/60">Priority Vadodara Team</td>
                    <td className="py-4 px-6 sm:px-8 text-[#1A3B71] font-bold">Dedicated Systems Engineer</td>
                  </tr>
                  {/* Action Selection Row */}
                  <tr className="bg-slate-50/60">
                    <td className="py-5 px-6 sm:px-8 font-bold text-xs uppercase tracking-wider text-slate-500 font-mono">
                      Action
                    </td>
                    <td className="py-5 px-6 sm:px-8">
                      <button
                        onClick={() => {
                          setSelectedPlan("Starter Business");
                          window.location.href = "/contact#get-in-touch";
                        }}
                        className="w-full py-2.5 px-3 rounded-lg border border-slate-300 hover:border-slate-800 text-slate-800 hover:text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Choose Starter
                      </button>
                    </td>
                    <td className="py-5 px-6 sm:px-8 bg-blue-50/40 border-x border-blue-100/60">
                      <button
                        onClick={() => {
                          setSelectedPlan("Professional Corporate");
                          window.location.href = "/contact#get-in-touch";
                        }}
                        className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                      >
                        Choose Professional
                      </button>
                    </td>
                    <td className="py-5 px-6 sm:px-8">
                      <button
                        onClick={() => {
                          setSelectedPlan("Enterprise High-Traffic");
                          window.location.href = "/contact#get-in-touch";
                        }}
                        className="w-full py-2.5 px-3 rounded-lg border border-slate-300 hover:border-slate-800 text-slate-800 hover:text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Choose Enterprise
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4B: VPS Hosting */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/80" id="vps-hosting">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-16">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
                Virtual Private Server Environment
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              VPS Hosting
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Get reliable, scalable hosting with dedicated resources in a virtual private server environment. VPS hosting gives your website or application better performance, security, and control than traditional shared hosting.
            </p>
          </div>

          {/* 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Key Features & Best For */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#073F8A]" />
                  <span>Key Features</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {vpsFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-start gap-3 group"
                    >
                      <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Tag Cloud */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/60 via-slate-50 to-blue-50/40 border border-blue-100">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A3B71] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Best For:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {vpsBestFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-200/80 text-xs font-semibold text-slate-700 shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: High-Spec VPS Control Architecture Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#0A2647] via-[#0F355C] to-[#07192F] text-white border border-slate-700 shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
                {/* Subtle Checkered Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 px-3 py-1 rounded-full uppercase tracking-wider">
                      KVM Virtualization
                    </span>
                    <Cpu className="w-5 h-5 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                    Managed Cloud VPS
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    Guaranteed CPU cores, dedicated memory slices, and high-speed NVMe storage. No resource starvation from neighbor websites.
                  </p>

                  {/* Architecture Specs Breakdown */}
                  <div className="space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 font-mono text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-slate-400">Hypervisor:</span>
                      <span className="text-cyan-300 font-bold">KVM Isolated Kernel</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-slate-400">Control Level:</span>
                      <span className="text-white font-bold">Full Root SSH / RDP</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-slate-400">Storage Array:</span>
                      <span className="text-white font-bold">NVMe RAID-10 Protected</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">OS Platforms:</span>
                      <span className="text-emerald-400 font-bold">Linux / Windows Server</span>
                    </div>
                  </div>

                  {/* Developer Terminal Mock */}
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 mb-6 font-mono text-[11px] text-slate-300 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 pb-1">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>root@jeenweb-vps:~#</span>
                    </div>
                    <div className="text-emerald-400">$ uptime</div>
                    <div className="text-slate-400">load average: 0.12, 0.08, 0.02 (100% Dedicated)</div>
                  </div>
                </div>

                <div className="relative z-10 pt-2">
                  <button
                    onClick={() => {
                      setSelectedPlan("VPS Hosting");
                      window.location.href = "/contact#get-in-touch";
                    }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Configure VPS Hosting</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4C: Dedicated Hosting */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#08182B] via-[#0B1E38] to-[#08182B] text-white relative overflow-hidden border-b border-slate-800" id="dedicated-hosting">
        {/* Subtle Checkered Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Ambient Glow Accents */}
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#C11E23]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-16">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Bare-Metal Enterprise Power
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              Dedicated Hosting
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Get an entire physical server dedicated exclusively to your business. Dedicated hosting delivers maximum performance, complete control, and enhanced security for demanding websites and applications.
            </p>
          </div>

          {/* 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Bare-Metal Architecture Blueprint Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-3xl p-7 sm:p-8 bg-slate-900/90 border border-slate-700 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden group">
                {/* Checkered Grid Accent */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-950/80 border border-amber-800/80 px-3 py-1 rounded-full uppercase tracking-wider">
                      Single-Tenant Hardware
                    </span>
                    <Server className="w-5 h-5 text-amber-400" />
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                    Bare-Metal Server
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    Zero virtualization overhead. 100% of the raw CPU power, memory bandwidth, and disk I/O are committed solely to your applications.
                  </p>

                  {/* Hardware Spec Badges */}
                  <div className="space-y-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6 font-mono text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-slate-400">Processor:</span>
                      <span className="text-amber-300 font-bold">Intel Xeon / AMD EPYC</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-slate-400">Memory:</span>
                      <span className="text-white font-bold">ECC Registered DDR4/DDR5</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-slate-400">Storage Controller:</span>
                      <span className="text-white font-bold">Hardware RAID-10 Controller</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-slate-400">Out-of-Band:</span>
                      <span className="text-cyan-300 font-bold">Dedicated IPMI / iDRAC Console</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Network Port:</span>
                      <span className="text-emerald-400 font-bold">1 Gbps - 10 Gbps Unmetered</span>
                    </div>
                  </div>

                  {/* Security Clearance Callout */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 mb-6 font-sans text-xs text-emerald-300 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                    <span>Physical isolation satisfies HIPAA, PCI-DSS, and ISO 27001 data compliance.</span>
                  </div>
                </div>

                <div className="relative z-10 pt-2">
                  <button
                    onClick={() => {
                      setSelectedPlan("Dedicated Hosting");
                      window.location.href = "/contact#get-in-touch";
                    }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C11E23] via-red-600 to-orange-600 hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Deploy Dedicated Server</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Key Features & Best For */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-amber-400" />
                  <span>Key Features</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {dedicatedFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Tag Cloud */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Best For:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dedicatedBestFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-semibold text-slate-200 shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Auto-Marquee Section (Trusted Partnerships) */}
      <TrustedPartnershipsMarquee
        id="clients"
        badgeText="Trusted Partnerships"
        title={
          <>
            Powering Corporate Websites <br className="hidden sm:inline" />
            <span className="text-[#1A3B71]">Across The World</span>
          </>
        }
        description="From healthcare institutions and regional manufacturing conglomerates to international export networks, see the brands hosted on our high-speed NVMe servers."
        row1={hostingClientLogosRow1}
        row2={hostingClientLogosRow2}
      />

      {/* Section 6: Web Hosting FAQs */}
      <FaqSection
        customFaqs={hostingFaqs}
        badge="Web Hosting FAQs"
        title="Clear Answers Regarding Server Management and Backups"
        subtitle="Direct explanations on our manual backup facilities, zero-downtime migrations, NVMe read/write speeds, and CageFS container security."
      />

      {/* Section 7: Consultation CTA Banner (Matching Home Page Style) */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-200/80" id="consultation-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Executive Sapphire Gradient Container with Checkered Grid */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] text-white border border-slate-700/60 shadow-2xl p-8 sm:p-10 lg:p-14 group">
            
            {/* Subtle Checkered Grid Accent (32px by 32px) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Ambient Background Lighting */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#C11E23]/20 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#00E5FF]/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-14">
              
              {/* Left Column: Headline & Narrative */}
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                  Move Your Website to a <br className="hidden sm:inline" />
                  <span className="text-[#00E5FF]">
                    Faster, Safer Server
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans max-w-xl">
                  Stop losing customers to slow load speeds and unreliable uptime. Talk with our hosting team in Vadodara today—we will find the right plan for your website, your traffic, and your budget.
                </p>
              </div>

              {/* Right Column: High-Impact Action Button */}
              <div className="flex flex-col items-stretch flex-shrink-0 w-full sm:w-auto lg:w-80">
                <Link
                  href="/contact#get-in-touch"
                  className="px-8 py-4 rounded-xl bg-[#C11E23] hover:bg-[#A3161A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/40 hover:scale-[1.02] flex items-center justify-center gap-2.5 group cursor-pointer active:scale-98 text-center"
                >
                  <span>Schedule Your Growth Strategy Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

          </main>
  );
}
