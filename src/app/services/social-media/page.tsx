"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeader from "@/components/common/SectionHeader";
import FaqSection from "@/components/home/FaqSection";
import ConsultationModal from "@/components/common/ConsultationModal";
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
  Globe
} from "lucide-react";

export default function SocialMediaServicePage() {
  const [modalOpen, setModalOpen] = useState(false);

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

      {/* Hero Banner */}
      <section className="bg-[#0B192C] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block pb-1.5 border-b-2 border-[#D32F2F]">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-100">
                Performance Growth Engine
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transform Social Channels into Revenue Engines Through Strategic Management and Paid Media
            </h1>

            <p className="text-base sm:text-lg text-rose-300 font-semibold">
              Data-backed content creation, high-conversion performance marketing, and localized influencer campaigns managed from Vadodara.
            </p>

            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
              Most businesses in Gujarat have social media pages. Very few are actually making money from them. Posting regularly is not enough. What moves the needle is a clear strategy, content that speaks directly to buyers, paid campaigns built around conversion data, and strict ROAS accountability.
            </p>

            <div className="pt-4 flex flex-wrap gap-3.5">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
              >
                <span>Launch Your Social Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Do for Your Brand */}
      <section className="py-20 lg:py-24 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What We Do for Your Brand"
            title="Full-Funnel Social Media and Digital Growth Solutions"
            subtitle="Coordinated growth across platform management, visual production, data-driven paid advertising, and targeted influencer campaigns."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* H3 1: Comprehensive Social Media Management */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Share2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200/60">
                    Daily SMM
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Comprehensive Social Media Management
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Your social media profiles are often the first place a potential customer checks before deciding whether to trust your business. If your last post was three months ago or your comments are full of unanswered questions, that trust disappears immediately.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our SMM services in Vadodara cover full daily platform management across LinkedIn, Instagram, Facebook, and YouTube. We handle everything — content scheduling, audience engagement, community moderation, brand tone consistency, and profile optimization — so your pages always look active, professional, and worth following.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We manage social media for businesses across industries in Gujarat — manufacturing, retail, education, logistics, hospitality, and more. Every account is managed by a dedicated team member who understands your industry and your audience — not a generic scheduler posting random content on autopilot.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Platforms we manage:
                </span>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>LinkedIn:</strong> Corporate positioning, thought leadership, B2B lead generation</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Instagram:</strong> Visual brand building, product showcasing, reels and stories</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                  <span><strong>Facebook:</strong> Community building, local audience engagement, paid campaigns</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>YouTube:</strong> Product demonstrations, brand videos, educational content</span>
                </div>
              </div>
            </div>

            {/* H3 2: Strategic Content Creation and Visual Production */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Video className="w-6 h-6 text-rose-400" />
                  </div>
                  <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-3 py-1 rounded-full uppercase tracking-wider border border-rose-200/60">
                    Visual Media
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Strategic Content Creation and Visual Production
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Bad content is worse than no content. A poorly written caption, a blurry graphic, or a video that goes nowhere tells your audience you do not care — and they respond accordingly.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our social media content creation team produces content that is built to perform — not just to fill a posting schedule. We write campaign copy that speaks directly to your target buyer, design custom branded graphics that stand out on a crowded feed, edit short-form video reels that hold attention, and produce infographics that explain complex products and services in a format buyers actually engage with.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Every piece of content we create is mapped to a specific goal — awareness, consideration, or conversion. We do not create content for the sake of creating content. We create it because it moves your potential customer one step closer to buying from you.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  What our content team produces:
                </span>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>Campaign copy and captions written for your specific audience</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>Custom branded graphics and visual assets</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>Short-form video editing and reel production</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>Infographics and educational visual content</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>YouTube video scripting and production support</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>Social media content calendars planned around your business goals</span>
                </div>
              </div>
            </div>

            {/* H3 3: Data-Driven Performance Marketing */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Target className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200/60">
                    Paid Media & ROAS
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Data-Driven Performance Marketing
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Boosting a post and hoping for the best is not performance marketing. Real performance marketing is built on data — audience research, creative testing, conversion tracking, and relentless optimization until every rupee of ad spend is working as hard as it can.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  As a performance marketing agency in Gujarat, we engineer targeted paid ad campaigns on Meta—Facebook and Instagram—LinkedIn and Google. Every campaign is built around a specific conversion goal — lead form submissions, product purchases, phone calls, or website inquiries. We design conversion-focused landing pages, run A/B split tests on creative and copy, and optimize bidding algorithms continuously based on real conversion data.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We track ROAS—Return on Ad Spend—on every campaign. That is the number that matters. Not reach, not impressions—how much revenue your ad spend is generating relative to what you are putting in.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  What our performance marketing covers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Meta Ads (Facebook & IG)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>LinkedIn B2B Lead Gen</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Google Search & Display Ads</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Conversion Landing Pages</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>A/B Split Testing</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>ROAS & Profit Reporting</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Warm Audience Remarketing</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Gujarat B2B Lead Campaigns</span>
                  </div>
                </div>
              </div>
            </div>

            {/* H3 4: Targeted Influencer Marketing Campaigns */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Users2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider border border-purple-200/60">
                    Regional PR
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Targeted Influencer Marketing Campaigns
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  People trust other people more than they trust brands. Influencer marketing in Gujarat taps into that existing trust — putting your product or service in front of an engaged audience through a voice they already follow and respect.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We do not just find someone with a large following and hand them a brief. We research, vet, and select influencers based on audience authenticity; geographic concentration within Gujarat and relevant markets; demographic alignment with your target buyer; and genuine engagement rates—not inflated follower counts built on bots and follow-for-follow tactics.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We manage the full campaign process — influencer identification, contract negotiation, brief creation, content approval, campaign tracking, and performance reporting. You see exactly what the campaign delivered and whether it was worth the investment.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Our influencer marketing process covers:
                </span>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Regional influencer identification and audience auditing</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Fake follower and engagement rate verification</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Contract management and brief development</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Content review and brand approval workflow</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Campaign performance tracking and reporting</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Long-term influencer partnership management for ongoing brand visibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How We Deliver Trackable Social Growth */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Methodology"
            title="How We Deliver Trackable Social Growth"
            subtitle="From granular audience audits to server-side pixel tracking and clear monthly reporting, see how we engineer profitable social campaigns."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1E38] text-white flex items-center justify-center font-extrabold text-lg group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200/60">
                    Market Intel
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Audience and Competitor Audits
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Before we post a single piece of content or run a single ad, we map out exactly who your target buyer is in Gujarat — their demographics, their online behavior, the platforms they use, and the content they engage with.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We also audit your top competitors — what they are doing well, where they are falling short, and where the gaps are that your brand can fill. This research shapes everything that comes after it.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Buyer Demographics • Competitor Gap Analysis</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#16325B] text-white flex items-center justify-center font-extrabold text-lg group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200/60">
                    Server CAPI
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Full Conversion Tracking Setup
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We install Meta Pixels, custom Google Tag Manager tags, and server-side Conversion APIs across your website and landing pages.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  This means every lead, every purchase, and every phone call that comes from a social or paid campaign gets accurately attributed back to the specific ad that generated it. No more guessing which campaigns are working and which ones are wasting money.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Meta Pixel • Server-Side CAPI • GTM Tracking</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#D32F2F] text-white flex items-center justify-center font-extrabold text-lg group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <span className="text-[11px] font-bold text-red-800 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider border border-red-200/60">
                    Honest Metrics
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16325B] transition-colors leading-snug">
                  Honest Monthly Performance Reporting
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Every month you receive a clean, straightforward report showing what actually happened — total leads generated, cost per lead, ROAS by campaign, audience growth, and content performance.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We do not hide underperforming campaigns behind impressive-looking metrics that mean nothing. If something is not working, we tell you directly and show you what we are doing to fix it.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-red-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CPL & ROAS • Actionable Optimizations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Platforms and Tools We Use */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Platforms and Tools We Use"
            title="Tools and Platforms Behind Our Campaigns"
            subtitle="The industry-leading tool stack powering audience intelligence, asset production, server-side attribution, and performance scaling."
            centered={true}
          />

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0B192C] text-white text-xs uppercase tracking-wider font-bold">
                    <th className="py-4 px-6 sm:px-8 w-1/3">Tool / Platform</th>
                    <th className="py-4 px-6 sm:px-8 w-2/3">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>Meta Business Suite</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Facebook and Instagram ad management and page administration</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-blue-700" />
                      <span>LinkedIn Campaign Manager</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">B2B paid campaigns and organic LinkedIn management</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                      <span>Google Ads</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Search, display, YouTube, and remarketing campaigns</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-purple-600" />
                      <span>Meta Pixel and CAPI</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Conversion tracking and server-side event matching</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>Google Tag Manager</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Tag management and custom event tracking</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span>Google Analytics 4</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Website traffic and campaign performance analysis</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-rose-600" />
                      <span>Canva Pro and Adobe Suite</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Graphic design and visual content production</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-red-600" />
                      <span>CapCut and Premiere Pro</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Short-form video editing and reel production</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-600" />
                      <span>SEMrush and Ahrefs</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Competitor research and content gap analysis</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-bold text-slate-900 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-teal-600" />
                      <span>Hootsuite / Buffer</span>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-slate-600">Content scheduling and social calendar management</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Clients Who Trust Jeenweb for Social and Performance Marketing */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clients Who Trust Jeenweb for Social and Performance Marketing"
            title="Brands Across Gujarat Growing With Our Social Media Campaigns"
            subtitle="From healthcare chains and recruitment ecosystems to university campuses and export manufacturers, see who grows with Jeenweb performance campaigns."
            centered={true}
          />

          {/* Client Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Client Card 1: CARE Hospitals */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/partners/care-hospitals.svg"
                    alt="CARE Hospitals Logo"
                    width={180}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  CARE Hospitals
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Healthcare Awareness & Patient Inquiries
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Multi-Specialty Meta Campaigns</span>
              </div>
            </div>

            {/* Client Card 2: JITO JOBS */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/partners/jito-jobs.svg"
                    alt="JITO JOBS Logo"
                    width={180}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  JITO JOBS
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Candidate & Employer Engagement
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pan-India Job Fair Campaigns</span>
              </div>
            </div>

            {/* Client Card 3: Google Ads / Meta Partner */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Paid Ads
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Meta & Google Ads
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Conversion API & Server Tracking
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-blue-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Certified Media Buying</span>
              </div>
            </div>

            {/* Client Card 4: LinkedIn Marketing */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    B2B Outreach
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  LinkedIn B2B Marketing
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Executive Thought Leadership & Leads
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>C-Suite Account Targeting</span>
              </div>
            </div>

            {/* Client Card 5: Parul University */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Campus PR
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Parul University
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Admissions Campaigns & Student Reels
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-amber-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>High-Engagement Student Outreach</span>
              </div>
            </div>

            {/* Client Card 6: Gujarat Industrial Consortium */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    Manufacturing
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Gujarat Industrial Leaders
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Machinery, Chemicals & B2B Distribution
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Buyer Inquiries</span>
              </div>
            </div>

            {/* Client Card 7: Global B2B Export Trade */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#16325B] text-white group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Global Ads
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  International Export Houses
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Global Trade & Product Video Distribution
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>International Buyer Lead Acquisition</span>
              </div>
            </div>

            {/* Client Card 8: Enterprise Performance Brands */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-16 flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1E38] text-white group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    High ROAS
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#16325B] transition-colors">
                  Consumer Brands & Retail
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Direct E-Commerce & WhatsApp Orders
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-purple-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>3.8x+ Average Verified ROAS</span>
              </div>
            </div>
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

      {/* Section 7: Action Call */}
      <section className="relative z-20 -mb-20 sm:-mb-24 lg:-mb-28" id="action-call">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B192C] via-[#11253E] to-[#0B192C] border border-slate-700/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-950/40 relative overflow-hidden backdrop-blur-sm">
            {/* Ambient glows inside card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
              <div className="text-center lg:text-left space-y-2.5 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-red-400" />
                  <span>Action Call • Vadodara Growth Desk</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Command Attention and Drive Conversions Across Social Media
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Stop running social media that looks busy but produces nothing. Talk to our social media and performance marketing team in Vadodara—we will map out your customer acquisition funnel, identify where your current campaigns are falling short, and build a strategy that actually generates leads and sales.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-900/40 hover:shadow-red-900/60 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Schedule Your Growth Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15 hover:border-white/30 text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3 h-3 text-slate-300" />
                  <span>Speak with Performance Specialist</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService="Social Media and Performance Marketing"
      />
    </main>
  );
}
