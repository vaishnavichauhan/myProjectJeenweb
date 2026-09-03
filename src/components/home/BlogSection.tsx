"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/siteData";
import { Calendar, ArrowRight, Clock, BookOpen } from "lucide-react";

export default function BlogSection() {
  return (
    <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white relative overflow-hidden border-b border-slate-200/80" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Red Bottom Border Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200/80">
          <div className="max-w-3xl space-y-3">
            <div>
              <div className="inline-block border-b-2 border-[#C11E23] pb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1A3B71]">
                  Knowledge Base &amp; Insights
                </span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Recent Technical Briefings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Engineering insights, search engine algorithm shifts, and cloud infrastructure best practices from our Vadodara desk.
            </p>
          </div>

          <Link
            href="/services/seo#insights"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#1A3B71] text-[#1A3B71] hover:text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 shadow-2xs group flex-shrink-0 self-start md:self-auto"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Modern Technical Briefing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[#FAF8F5] rounded-3xl p-0 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Full Width Image Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 group/img">
                  <Image
                    src="/images/hero-light-3d.jpg"
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover/img:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* Top Floating Category Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="font-mono font-bold text-white bg-[#1A3B71]/90 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider text-[10px] shadow-sm border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-6 pb-2">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
                    <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#C11E23]" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span className="text-[11px] text-slate-500 font-medium">Vadodara Desk</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#1A3B71] transition-colors duration-300 mb-3 leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Article Excerpt */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`/services/seo#${post.id}`}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] hover:from-[#134B70] hover:to-[#0A2647] text-white flex items-center justify-between transition-all duration-300 font-bold text-xs uppercase tracking-wider shadow-xs group/btn"
                >
                  <span>Read Full Briefing</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 text-[#00E5FF] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover/btn:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
