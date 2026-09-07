import React from "react";
import Image from "next/image";

export default function CultureShowcase() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white relative overflow-hidden border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-5">
          {/* Top Row: Image 1, Image 2, and Text Block matching user reference UI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-5 items-center">
            {/* Image 1: Career Vacancy Graphic */}
            <div className="lg:col-span-3 h-[180px] sm:h-[210px] lg:h-[230px] rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
              <Image
                src="/images/carrer/carrer1.png"
                alt="JeenWeb Career Vacancy"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>

            {/* Image 2: Team Collaboration Graphic */}
            <div className="lg:col-span-3 h-[180px] sm:h-[210px] lg:h-[230px] rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
              <Image
                src="/images/carrer/carrer2.png"
                alt="JeenWeb Collaborative Workspace"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>

            {/* Text Content Block */}
            <div className="sm:col-span-2 lg:col-span-6 flex flex-col justify-center px-1 sm:px-4 lg:px-6 py-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-[1.18]">
                Work Hard.
                <br />
                <span className="text-[#16325B]">JeenWeb!</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal max-w-lg">
                JeenWeb, where creativity meets technology in the most fun way possible. If you’re looking for a place that values innovation and collaboration, you’ve come to the right spot!
              </p>
            </div>
          </div>

          {/* Bottom Row: Image 3 and Image 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">
            {/* Image 3: Strategy & Engineering Meeting Graphic */}
            <div className="h-[150px] sm:h-[180px] lg:h-[200px] rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
              <Image
                src="/images/carrer/carrer3.jpg"
                alt="JeenWeb Engineering Strategy"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            {/* Image 4: We're Hiring Banner Graphic */}
            <div className="h-[150px] sm:h-[180px] lg:h-[200px] rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
              <Image
                src="/images/carrer/carrer4.jpg"
                alt="We're Hiring at JeenWeb"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
