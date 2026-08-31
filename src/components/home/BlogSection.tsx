import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/siteData";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Knowledge Base & Insights"
            title="Recent Technical Briefings"
            subtitle="Engineering insights, search engine algorithm shifts, and cloud infrastructure best practices from our Vadodara desk."
            className="mb-0"
          />

          <Link
            href="/services/seo#insights"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-[#16325B] hover:text-[#D32F2F] transition-colors"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="font-bold text-[#16325B] bg-slate-100 px-2.5 py-0.5 rounded uppercase tracking-wider text-[10px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#16325B] transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </span>

                <Link
                  href={`/services/seo#${post.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#16325B] group-hover:text-[#D32F2F] transition-colors"
                >
                  <span>Read Briefing</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
