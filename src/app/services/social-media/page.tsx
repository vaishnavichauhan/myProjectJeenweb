"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import CampaignToolsGrid from "@/components/services/CampaignToolsGrid";
import CommonCta from "@/components/common/CommonCta";
import {
  TrendingUp,
  Share2,
  Video,
  Target,
  Users2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Layers,
  Building2,
  Award,
  PhoneCall,
  Globe,
  RotateCw,
  MapPin,
  Mail,
  Phone,
  ThumbsUp,
  Heart,
  MessageCircle
} from "lucide-react";

interface GrowthStepItem {
  number: string;
  title: string;
  tag: string;
  lineColor: string;
  description: string;
  takeaway: string;
}

function GrowthTimelineStep({
  step,
  isEven
}: {
  step: GrowthStepItem;
  isEven: boolean;
}) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const el = rowRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={rowRef}
      className="relative border-t border-slate-200/90 py-12 sm:py-16 lg:py-20 first:border-t overflow-hidden"
    >
      {/* Horizontal Divider Line Blue Circular Dot (Alternating sides, sitting directly on the top border) */}
      <div
        className={`hidden md:block absolute -top-[7px] size-3.5 rounded-full bg-[#0284C7] ring-4 ring-white shadow-xs z-20 ${
          !isEven ? 'left-[26%]' : 'left-[74%]'
        }`}
      />

      {/* Segment Color Spine on the Center Line (Desktop) */}
      <div
        className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1.5 z-10"
        style={{ backgroundColor: step.lineColor }}
      />

      {/* Desktop 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
        
        {/* Left Column: Comes from LEFT when scrolling */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 sm:-translate-x-20 opacity-0"
          }`}
        >
          {!isEven ? (
            /* Step Number & Title (Left Side for Rows 01 & 03) */
            <div className="flex flex-col items-start md:items-end text-left md:text-right md:pr-10 lg:pr-14">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A3B71] font-sans">
                {step.number}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                {step.title}
              </h3>
              <span className="inline-block text-xs font-mono font-semibold text-blue-600 mt-1">
                {step.tag}
              </span>
            </div>
          ) : (
            /* Description Paragraph (Left Side for Rows 02 & 04) */
            <div className="flex flex-col items-start md:items-end text-left md:text-right md:pr-10 lg:pr-14 space-y-3">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-md">
                {step.description}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-semibold text-emerald-800">
                <span className="hidden md:inline">{step.takeaway}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="md:hidden">{step.takeaway}</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Comes from RIGHT when scrolling */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-12 sm:translate-x-20 opacity-0"
          }`}
        >
          {!isEven ? (
            /* Description Paragraph (Right Side for Rows 01 & 03) */
            <div className="flex flex-col items-start text-left md:pl-10 lg:pl-14 space-y-3">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-md">
                {step.description}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{step.takeaway}</span>
              </div>
            </div>
          ) : (
            /* Step Number & Title (Right Side for Rows 02 & 04) */
            <div className="flex flex-col items-start text-left md:pl-10 lg:pl-14">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A3B71] font-sans">
                {step.number}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                {step.title}
              </h3>
              <span className="inline-block text-xs font-mono font-semibold text-blue-600 mt-1">
                {step.tag}
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function SocialMediaServicePage() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const toggleCardFlip = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  const smmFaqs = [
    {
      q: "Which social media platforms work best for B2B industrial businesses in Gujarat?",
      a: "LinkedIn is the strongest platform for B2B industrial businesses — it is where procurement managers, plant heads, and business owners spend their professional time online. That said, YouTube and Instagram work very well alongside LinkedIn for industrial businesses — YouTube for product demonstrations, facility tours, and technical content, and Instagram for employer branding and visual storytelling. The right platform mix depends on your specific audience and what you are trying to achieve. We audit your target buyer first and recommend platforms based on data — not assumptions."
    },
    {
      q: "How much budget do we need to start performance marketing campaigns?",
      a: "Our agency management fee is separate from your ad spend. For ad spend, we typically recommend starting with a minimum of ₹500 to ₹1,000 per day per platform — enough for the algorithm to properly test creative assets and identify winning audience segments during the learning phase. Starting with too little slows the learning process and makes it harder to get meaningful data quickly. Once we have data showing which campaigns are performing, we scale the budget on what is working and cut what is not."
    },
    {
      q: "How do you choose influencers for our brand campaign?",
      a: "We do not choose influencers based on follower count alone — that number is easy to inflate and tells you very little about actual influence. We run audience audits on every influencer we consider—checking follower authenticity, geographic concentration within Gujarat, audience demographics, engagement rate relative to follower count, and content quality. Only after that process do we present options to your team. We also handle contract negotiation, brief development, and content approval so you maintain brand control throughout the campaign."
    },
    {
      q: "How quickly will we see leads after launching paid performance ads?",
      a: "Approved paid campaigns generate live traffic and lead form submissions within 24 to 48 hours of going live. The first two weeks are a learning phase — our media buyers monitor real-time conversion data, pause underperforming ads, and begin scaling the creative sets that are generating qualified leads. By the end of the first month, you have clear data showing cost per lead, which audiences are converting, and which campaigns are worth scaling further."
    },
    {
      q: "Who owns our social media ad accounts, pixel data, and creative assets?",
      a: "You do completely. All ad campaigns, pixel data, custom graphics, video assets, and business manager accounts are set up within your own corporate accounts. Jeenweb operates through partner access — meaning we can manage everything on your behalf without ever owning any of it. If you ever decide to bring management in-house or move to another agency, everything stays with you, and nothing gets taken away."
    }
  ];

  const smmPartnerLogosRow1 = [
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Healthcare Lead Gen & Patient Inquiries" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Statewide Recruitment Campaigns" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Multi-Specialty Meta Ad Scaling" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Pan-India Job Fair Reach" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Doctor Brand Authority Reels" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Candidate Engagement & Funnels" }
  ];

  const smmPartnerLogosRow2 = [
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "LinkedIn B2B Decision-Maker Ads" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "OPD Appointment Conversions" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "High-Volume Application Ads" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Health Awareness Video Pre-Rolls" },
    { name: "JITO JOBS", logo: "/images/partners/jito-jobs.svg", tag: "Youth & Campus SMM Outreach" },
    { name: "CARE Hospitals", logo: "/images/partners/care-hospitals.svg", tag: "Regional Gujarat Meta Scaling" }
  ];

  const growthSolutions = [
    {
      id: "smm",
      tabLabel: "Daily SMM",
      badge: "Full Platform Management",
      icon: Share2,
      accentColor: "blue",
      title: "Comprehensive Social Media Management",
      desc1: "Your social media profiles are often the first place a potential customer checks before deciding whether to trust your business. If your last post was three months ago or your comments are full of unanswered questions, that trust disappears immediately.",
      desc2: "Our SMM services in Vadodara cover full daily platform management across LinkedIn, Instagram, Facebook, and YouTube. We handle everything — content scheduling, audience engagement, community moderation, brand tone consistency, and profile optimization — so your pages always look active, professional, and worth following.",
      desc3: "We manage social media for businesses across industries in Gujarat — manufacturing, retail, education, logistics, hospitality, and more. Every account is managed by a dedicated team member who understands your industry and your audience — not a generic scheduler posting random content on autopilot.",
      featureHeading: "Platforms we manage daily:",
      features: [
        { label: "LinkedIn", detail: "Corporate positioning, thought leadership, B2B lead generation", tagColor: "text-blue-600", dotBg: "bg-blue-600" },
        { label: "Instagram", detail: "Visual brand building, product showcasing, reels and stories", tagColor: "text-pink-600", dotBg: "bg-pink-600" },
        { label: "Facebook", detail: "Community building, local audience engagement, paid campaigns", tagColor: "text-blue-700", dotBg: "bg-blue-700" },
        { label: "YouTube", detail: "Product demonstrations, brand videos, educational content", tagColor: "text-red-600", dotBg: "bg-red-600" }
      ],
      takeaway: "Active, responsive presence across all primary commercial channels"
    },
    {
      id: "content",
      tabLabel: "Visual Media",
      badge: "Creative & Video Production",
      icon: Video,
      accentColor: "rose",
      title: "Strategic Content Creation and Visual Production",
      desc1: "Bad content is worse than no content. A poorly written caption, a blurry graphic, or a video that goes nowhere tells your audience you do not care — and they respond accordingly.",
      desc2: "Our social media content creation team produces content that is built to perform — not just to fill a posting schedule. We write campaign copy that speaks directly to your target buyer, design custom branded graphics that stand out on a crowded feed, edit short-form video reels that hold attention, and produce infographics that explain complex products and services in a format buyers actually engage with.",
      desc3: "Every piece of content we create is mapped to a specific goal — awareness, consideration, or conversion. We do not create content for the sake of creating content. We create it because it moves your potential customer one step closer to buying from you.",
      featureHeading: "What our content team produces:",
      features: [
        { label: "Campaign Copy", detail: "Captions and scripts written for your specific Gujarat audience", tagColor: "text-rose-600", dotBg: "bg-rose-600" },
        { label: "Branded Graphics", detail: "Custom visual identity assets, carousel slides, and banners", tagColor: "text-rose-600", dotBg: "bg-rose-600" },
        { label: "Reel Production", detail: "High-retention short-form video editing and viral hook testing", tagColor: "text-rose-600", dotBg: "bg-rose-600" },
        { label: "Infographics", detail: "Visual breakdowns of complex industrial and corporate services", tagColor: "text-rose-600", dotBg: "bg-rose-600" },
        { label: "YouTube Scripting", detail: "End-to-end video storyboarding, script development, and editing", tagColor: "text-rose-600", dotBg: "bg-rose-600" },
        { label: "Content Calendars", detail: "Monthly strategic schedules aligned directly to sales milestones", tagColor: "text-rose-600", dotBg: "bg-rose-600" }
      ],
      takeaway: "High-retention creative engineered for conversions, not vanity likes"
    },
    {
      id: "performance",
      tabLabel: "Paid Performance",
      badge: "Paid Media & ROAS",
      icon: Target,
      accentColor: "emerald",
      title: "Data-Driven Performance Marketing",
      desc1: "Boosting a post and hoping for the best is not performance marketing. Real performance marketing is built on data — audience research, creative testing, conversion tracking, and relentless optimization until every rupee of ad spend is working as hard as it can.",
      desc2: "As a performance marketing agency in Gujarat, we engineer targeted paid ad campaigns on Meta—Facebook and Instagram—LinkedIn and Google. Every campaign is built around a specific conversion goal — lead form submissions, product purchases, phone calls, or website inquiries. We design conversion-focused landing pages, run A/B split tests on creative and copy, and optimize bidding algorithms continuously based on real conversion data.",
      desc3: "We track ROAS—Return on Ad Spend—on every campaign. That is the number that matters. Not reach, not impressions—how much revenue your ad spend is generating relative to what you are putting in.",
      featureHeading: "What our performance marketing covers:",
      features: [
        { label: "Meta Ads", detail: "Advanced Facebook & Instagram conversion funnels", tagColor: "text-emerald-600", dotBg: "bg-emerald-600" },
        { label: "LinkedIn Lead Gen", detail: "Decision-maker targeting for B2B industrial firms", tagColor: "text-emerald-600", dotBg: "bg-emerald-600" },
        { label: "Google Search & Display", detail: "High-intent keyword capture & retargeting", tagColor: "text-emerald-600", dotBg: "bg-emerald-600" },
        { label: "Landing Pages", detail: "High-speed conversion funnels engineered to convert", tagColor: "text-emerald-600", dotBg: "bg-emerald-600" },
        { label: "A/B Testing", detail: "Continuous creative variant and audience split-testing", tagColor: "text-emerald-600", dotBg: "bg-emerald-600" },
        { label: "ROAS Tracking", detail: "Bi-weekly transparent cost-per-acquisition accounting", tagColor: "text-emerald-600", dotBg: "bg-emerald-600" }
      ],
      takeaway: "Direct focus on ROAS, verified sales pipeline, and cost per lead"
    },
    {
      id: "influencer",
      tabLabel: "Regional PR",
      badge: "Influencer Marketing",
      icon: Users2,
      accentColor: "purple",
      title: "Targeted Influencer Marketing Campaigns",
      desc1: "People trust other people more than they trust brands. Influencer marketing in Gujarat taps into that existing trust — putting your product or service in front of an engaged audience through a voice they already follow and respect.",
      desc2: "We do not just find someone with a large following and hand them a brief. We research, vet, and select influencers based on audience authenticity; geographic concentration within Gujarat and relevant markets; demographic alignment with your target buyer; and genuine engagement rates—not inflated follower counts built on bots and follow-for-follow tactics.",
      desc3: "We manage the full campaign process — influencer identification, contract negotiation, brief creation, content approval, campaign tracking, and performance reporting. You see exactly what the campaign delivered and whether it was worth the investment.",
      featureHeading: "Our influencer marketing process covers:",
      features: [
        { label: "Regional Audits", detail: "Identifying genuine Gujarat voices with authentic local following", tagColor: "text-purple-600", dotBg: "bg-purple-600" },
        { label: "Fraud Verification", detail: "Rigorous fake follower and engagement anomaly detection", tagColor: "text-purple-600", dotBg: "bg-purple-600" },
        { label: "Brief Development", detail: "Precise brand messaging guidelines and contract management", tagColor: "text-purple-600", dotBg: "bg-purple-600" },
        { label: "Approval Workflow", detail: "Pre-release content review protecting brand reputation", tagColor: "text-purple-600", dotBg: "bg-purple-600" },
        { label: "Attribution", detail: "Unique promo codes, UTM tracking, and campaign ROI reports", tagColor: "text-purple-600", dotBg: "bg-purple-600" },
        { label: "Long-term Partnerships", detail: "Ongoing brand ambassador programs for sustainable presence", tagColor: "text-purple-600", dotBg: "bg-purple-600" }
      ],
      takeaway: "Vetted regional influencers with authentic Gujarat audience reach"
    }
  ];

  const growthSteps = [
    {
      number: "01",
      title: "Audience & Competitor Audits",
      tag: "Market Intelligence",
      lineColor: "#F59E0B",
      description: "Before posting content or spending ad budget, we map your target buyer persona across Gujarat — analyzing demographics, platform habits, and content preferences. We also audit your top competitors to identify high-leverage voids your brand can command.",
      takeaway: "Buyer Persona Mapping • Competitor Gap Analysis"
    },
    {
      number: "02",
      title: "Conversion Tracking & Server CAPI",
      tag: "Attribution Setup",
      lineColor: "#06B6D4",
      description: "We deploy Meta Pixels, custom Google Tag Manager containers, and server-side Conversion APIs (CAPI). Every phone call, lead form, and checkout gets accurately attributed back to the exact campaign that generated it — with zero attribution loss from iOS 14+ ad blockers.",
      takeaway: "Server-Side CAPI • GTM Event Triggers • Zero Attribution Loss"
    },
    {
      number: "03",
      title: "Creative Production & Viral Hook Testing",
      tag: "Asset Velocity",
      lineColor: "#2563EB",
      description: "We produce high-recall visual assets: vertical short-form reels, sound-synced video hooks, and high-converting carousel ads. Multi-variant A/B testing identifies winning creative angles, allowing us to scale ad spend with verified cost-per-acquisition efficiency.",
      takeaway: "High-Retention Reels • Multi-Variant A/B Testing • Rapid Iteration"
    },
    {
      number: "04",
      title: "Honest Monthly Performance Reporting",
      tag: "Commercial ROI",
      lineColor: "#EC4899",
      description: "Every month you receive a straightforward, transparent report detailing verifiable commercial outcomes: total qualified leads, cost per lead, return on ad spend (ROAS), and audience velocity. No vanity metrics — only clear data and proactive growth roadmaps.",
      takeaway: "Verified ROAS • Cost-Per-Lead Tracking • Actionable Insights"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/#services" },
              { label: "Social Media and Performance Marketing" }
            ]}
          />
        </div>
      </div>

      {/* Hero Banner: Left Side Image, Right Side Text */}
      <section className="bg-gradient-to-b from-[#06152B] via-[#0B1E38] to-[#0F294D] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-700/60">
        
        {/* Ambient Polygon & Glow Overlays */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: "url('/images/social-media-polygon-bg.jpg')" }}
        />
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side: Transparent Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-full flex justify-center items-center">
                {/* Soft ambient glow */}
                <div className="absolute inset-4 bg-gradient-to-tr from-sky-400/20 via-amber-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />
                
                <Image
                  src="/images/social-media-hero-phone.png"
                  alt="Social Media and Performance Marketing"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-auto object-contain mx-auto drop-shadow-[0_20px_45px_rgba(0,0,0,0.5)] relative z-10"
                />
              </div>
            </div>

            {/* Right Side: Headline, Description & Button */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">

              {/* Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.18] drop-shadow-md">
                Transform Social Channels into Revenue Engines Through Strategic Management and Paid Media
              </h1>

              {/* Description */}
              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans">
                Coordinated growth across platform management, high-converting visual production, data-driven paid advertising, and targeted influencer campaigns engineered to maximize your verified ROAS.
              </p>

              {/* Added Button: Launch Your Social Campaign */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#C11E23] hover:bg-[#a5181c] shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group w-fit cursor-pointer"
                >
                  <span>Launch Your Social Campaign</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section 2: What We Do for Your Brand */}
      <section className="py-20 lg:py-24 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                What We Do for Your Brand
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Full-Funnel <span className="text-[#1A3B71]">Social Media and Digital Growth Solutions</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-sans max-w-2xl mx-auto">
              Coordinated growth across platform management, visual production, data-driven paid advertising, and targeted influencer campaigns.
            </p>
          </div>

          {/* 2-Column Split Layout: All 4 Cards on Left, Portrait Image Showcase on Right (Height Matching Single Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-12 items-start">
            
            {/* Left Column: All 4 Solution Cards in 2-Column Grid with 3D Flip Effect */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {growthSolutions.map((sol, idx) => {
                const Icon = sol.icon;
                const isFlipped = !!flippedCards[idx];

                return (
                  <div
                    key={sol.id}
                    className="group [perspective:1000px] min-h-[360px] sm:min-h-[385px] cursor-pointer"
                    onClick={() => toggleCardFlip(idx)}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                        isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                      }`}
                    >
                      {/* Front Face: Title, Icon, Badge & Overview Narrative */}
                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden">
                        {/* Subtle top ambient accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="space-y-4">
                          {/* Card Header: Icon & Category Badge */}
                          <div className="flex items-center justify-between">
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0B1E38] to-[#1A3B71] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md shadow-blue-950/15">
                              <Icon className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A3B71] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                              {sol.badge}
                            </span>
                          </div>

                          {/* Title & Narrative */}
                          <div className="space-y-2.5">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1A3B71] transition-colors leading-snug">
                              {sol.title}
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                              {sol.desc2}
                            </p>
                          </div>
                        </div>

                        {/* Front Face Bottom: Flip Indicator */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-[#1A3B71]">
                          <span className="inline-flex items-center gap-1.5">
                            <RotateCw className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:rotate-180 duration-500" />
                            <span>Flip for Deliverables</span>
                          </span>
                          <span className="text-[10px] text-slate-400 font-sans">Details ↻</span>
                        </div>
                      </div>

                      {/* Back Face: ONLY BULLET POINTS SHOW */}
                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0B1E38] via-[#102A4C] to-[#0B1E38] text-white border border-slate-700/80 shadow-xl flex flex-col justify-between overflow-hidden">
                        <div className="space-y-3.5">
                          {/* Back Header */}
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 bg-blue-950/70 px-2.5 py-1 rounded-full border border-blue-800/50">
                              {sol.badge} Deliverables
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400">
                              <RotateCw className="w-3 h-3" /> Flip back
                            </span>
                          </div>

                          {/* Deliverables / Platforms Checklist - ONLY BULLET POINTS SHOW */}
                          <div className="space-y-2 pt-1">
                            {sol.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200 font-sans leading-snug">
                                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong className="text-white font-semibold">{feat.label}:</strong> {feat.detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Back Bottom Footer */}
                        <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-mono text-blue-300">
                          <span>Verified Scope</span>
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Active SLA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Prominent Image Showcase with Increased Height */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              
              {/* Image Frame Container with Increased Height */}
              <div className="w-full h-[480px] sm:h-[520px] lg:h-[560px] relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-gradient-to-b from-[#06152B] via-[#0B1E38] to-[#06152B] p-2.5 group">
                
                {/* Ambient Decorative Glow behind Image */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/social-media-growth-showcase.jpg"
                    alt="Full-Funnel Social Media and Digital Growth Solutions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section 3: How We Deliver Trackable Social Growth (Alternating Timeline Layout matching image) */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200/80" id="growth-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                Methodology &amp; Framework
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              How We Deliver <span className="text-[#1A3B71]">Trackable Social Growth</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-sans max-w-2xl mx-auto">
              From granular audience audits to server-side pixel tracking and clear monthly reporting, see how we engineer profitable social campaigns.
            </p>
          </div>

          {/* Alternating Timeline Track matching elitewaresolutions reference image */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Desktop Center Vertical Spine Base Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1.5 bg-slate-100 pointer-events-none" />

            <div className="space-y-0">
              {growthSteps.map((step, idx) => (
                <GrowthTimelineStep
                  key={step.number}
                  step={step}
                  isEven={idx % 2 === 1}
                />
              ))}

              {/* Bottom Closing Divider with Final Accent Dot */}
              <div className="relative border-t border-slate-200/90">
                <div className="hidden md:block absolute -top-[7px] left-[26%] size-3.5 rounded-full bg-[#0284C7] ring-4 ring-white shadow-xs z-20" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Platforms and Tools We Use - Unified Basket & Integrated Tool Stack */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CampaignToolsGrid />
        </div>
      </section>

      {/* Section 5: Client Logo Auto-Marquee Section (2-Line Infinite Scroll) */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200/80" id="client-partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
              Trusted Partnerships
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Brands Across Gujarat Growing With <br className="hidden sm:inline" />
            <span className="text-[#1A3B71]">Our Social Media &amp; Performance Campaigns</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-sans leading-relaxed">
            From healthcare chains and recruitment ecosystems to university campuses and export manufacturers, see who grows with Jeenweb performance campaigns.
          </p>
        </div>

        {/* 2-Line Infinite Auto-Marquee Track */}
        <div className="w-full relative overflow-hidden py-2 space-y-4 sm:space-y-6">
          
          {/* Gradient edge masks for smooth seamless fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />

          {/* Line 1: Infinite Marquee (Left Scroll) */}
          <div className="flex animate-marquee items-center gap-5 sm:gap-6">
            {[...smmPartnerLogosRow1, ...smmPartnerLogosRow1].map((partner, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex-shrink-0 flex items-center gap-4 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#1A3B71]/40 hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="h-10 sm:h-11 w-32 sm:w-36 relative flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    width={150}
                    height={45}
                    className="h-8 sm:h-9 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#1A3B71] transition-colors whitespace-nowrap">
                    {partner.name}
                  </div>
                  <div className="text-[10px] font-mono font-medium text-slate-500 whitespace-nowrap">
                    {partner.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Line 2: Infinite Marquee Reverse (Right Scroll) */}
          <div className="flex animate-marquee-reverse items-center gap-5 sm:gap-6">
            {[...smmPartnerLogosRow2, ...smmPartnerLogosRow2].map((partner, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex-shrink-0 flex items-center gap-4 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#C11E23]/40 hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="h-10 sm:h-11 w-32 sm:w-36 relative flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    width={150}
                    height={45}
                    className="h-8 sm:h-9 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#C11E23] transition-colors whitespace-nowrap">
                    {partner.name}
                  </div>
                  <div className="text-[10px] font-mono font-medium text-slate-500 whitespace-nowrap">
                    {partner.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 6: Social Media and Performance Marketing FAQs */}
      <FaqSection
        customFaqs={smmFaqs}
        badge="Social Media and Performance Marketing FAQs"
        title="Direct Answers Regarding Social and Performance Marketing"
        subtitle="Insights into B2B platform selection, ad spend budgeting, influencer auditing, lead delivery times, and 100% client account ownership."
      />

      {/* Consultation CTA Banner */}
      <CommonCta
        id="consultation-cta"
        title={
          <>
            Command Attention and Drive Conversions <br className="hidden sm:inline" />
            <span className="text-blue-400">Across Social Media.</span>
          </>
        }
        subtitle="Stop running social media that looks busy but produces nothing. Talk to our social media and performance marketing team in Vadodara—we will map out your customer acquisition funnel, identify where your current campaigns are falling short, and build a strategy that actually generates leads and sales."
        buttonText="Speak with Performance Specialist"
        buttonHref="/contact#get-in-touch"
      />

          </main>
  );
}
