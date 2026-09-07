"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

export interface JobOpening {
  id: number;
  jobRole: string;
  jobRoleSummary: string;
  skillsAndQualification: string;
  experience: string;
  skills: string[];
  location?: string;
}

export const jobOpeningsData: JobOpening[] = [
  {
    id: 1,
    jobRole: "MERN Stack Developer",
    jobRoleSummary:
      "Jeenweb is looking for a Full-Stack (MERN) Developer to build and maintain scalable web applications.\n\nThe role involves developing both front-end and back-end components, ensuring application performance and quality, and collaborating with cross-functional teams.\n\nThe developer will participate in technical decision-making, mentor junior developers, and contribute to project architecture.",
    skillsAndQualification:
      "Candidates should have 2+ years of experience with the MERN stack, including React.js, Node.js, Express.js, and MySQL.\n\nProficiency in RESTful API development, Git, and problem-solving is required.\n\nExperience with cloud services, Agile methodologies, DevOps tools, and front-end build tools is a plus. Strong communication and collaboration skills are essential.",
    experience: "2+ years",
    location: "Vadodara ( On Site )",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "RESTful APIs",
      "Problem Solving",
      "Communication",
      "Team Collaboration"
    ]
  },
  {
    id: 2,
    jobRole: "Frontend Developer",
    jobRoleSummary:
      "Jeenweb is looking for a Frontend Developer to build responsive, high-performance, and user-friendly web interfaces.\n\nThe role involves translating UI designs into functional web applications, integrating APIs, optimizing performance, and collaborating with designers and backend developers.",
    skillsAndQualification:
      "Candidates should have strong experience with modern frontend technologies, including React.js, Next.js, JavaScript, and TypeScript.\n\nKnowledge of responsive design, RESTful API integration, Git, and frontend performance optimization is required.\n\nExperience with UI/UX implementation, Tailwind CSS, and frontend build tools is a plus.",
    experience: "1.5+ years",
    location: "Vadodara ( On Site )",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "Responsive Design",
      "UI/UX Implementation",
      "Problem Solving"
    ]
  },
  {
    id: 3,
    jobRole: "SEO & Digital Growth Specialist",
    jobRoleSummary:
      "Jeenweb is looking for an SEO & Digital Growth Specialist to improve website visibility, organic traffic, search rankings, and overall digital growth.\n\nThe role involves developing SEO strategies, analyzing website performance, conducting keyword research, and implementing on-page, technical, and off-page SEO activities.",
    skillsAndQualification:
      "Candidates should have experience in SEO, keyword research, technical SEO, content optimization, and digital marketing.\n\nProficiency with Google Analytics, Google Search Console, SEO tools, competitor analysis, and performance tracking is required.\n\nStrong analytical, communication, and problem-solving skills are essential.",
    experience: "1+ years",
    location: "Vadodara ( On Site )",
    skills: [
      "Search Engine Optimization",
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
      "Content Strategy",
      "Communication",
      "Problem Solving"
    ]
  }
];

export default function CurrentOpenings() {
  // All cards initially closed as requested
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="openings" className="pt-2 sm:pt-4 lg:pt-6 pb-16 sm:pb-20 bg-white text-slate-900 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-8 sm:mb-9">
          <div className="inline-block border-b-2 border-[#C11E23] pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16325B]">
              Current Openings
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Ready to Join Jeenweb?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            If you&apos;re excited to join a team that&apos;s all about innovation, creativity, and having a good time while doing it, check out our open positions below. We can&apos;t wait to meet you!
          </p>
        </div>

        {/* Accordion Job Cards */}
        <div className="space-y-4 sm:space-y-5">
          {jobOpeningsData.map((job) => {
            const isExpanded = expandedId === job.id;

            return (
              <div
                key={job.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isExpanded
                    ? "border-[#16325B] shadow-xl ring-1 ring-[#16325B]/20 bg-white"
                    : "bg-[#0F1D36] hover:bg-[#142442] border-[#16325B]/30 hover:border-[#16325B]/60 shadow-sm"
                }`}
              >
                {/* Header Bar (Clickable) */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(job.id)}
                  aria-expanded={isExpanded}
                  className={`w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer select-none group transition-colors ${
                    isExpanded ? "bg-[#0F1D36]" : "bg-transparent"
                  }`}
                >
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {job.jobRole}
                  </span>

                  <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-slate-300 group-hover:text-white transition-colors">
                    <span className="text-xs sm:text-sm font-medium">
                      {job.location || "Vadodara ( On Site )"}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isExpanded
                          ? "bg-white text-slate-900"
                          : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {isExpanded ? (
                        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Content Drawer with Clean White Background */}
                {isExpanded && (
                  <div className="bg-white px-6 sm:px-8 py-8 sm:py-10 border-t border-slate-200 animate-in fade-in duration-300">
                    <div className="space-y-6 sm:space-y-8">
                      {/* Job Role Summary */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-6 items-start">
                        <div className="md:col-span-4 lg:col-span-3">
                          <h4 className="text-slate-900 font-bold text-sm sm:text-base tracking-wide">
                            Job Role Summary
                          </h4>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9">
                          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3 font-normal">
                            {job.jobRoleSummary.split("\n\n").map((para, i) => (
                              <p key={i}>{para}</p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px w-full bg-slate-200" />

                      {/* Skills & Qualification */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-6 items-start">
                        <div className="md:col-span-4 lg:col-span-3">
                          <h4 className="text-slate-900 font-bold text-sm sm:text-base tracking-wide">
                            Skills &amp; Qualification
                          </h4>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-4">
                          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3 font-normal">
                            {job.skillsAndQualification.split("\n\n").map((para, i) => (
                              <p key={i}>{para}</p>
                            ))}
                          </div>

                          {/* Skill Tags & Experience */}
                          <div className="pt-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#16325B] border border-blue-200 px-3 py-1 rounded-full">
                                Experience: {job.experience}
                              </span>
                              {job.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Apply Now Button */}
                      <div className="pt-6 sm:pt-8 flex justify-center">
                        <a
                          href={`mailto:careers@jeenweb.com?subject=Application%20for%20${encodeURIComponent(job.jobRole)}%20-%20Jeenweb&body=Hi%20Jeenweb%20HR%20Team,%0A%0AI%20am%20interested%20in%20applying%20for%20the%20${encodeURIComponent(job.jobRole)}%20position%20at%20Jeenweb.%20Please%20find%20my%20resume%20attached.%0A%0AExperience:%20${encodeURIComponent(job.experience)}%0AContact%20Number:%20%0ALinkedIn%20/%20Portfolio:%20%0A%0AThank%20you!`}
                          className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#16325B] hover:bg-[#0D213D] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-blue-950/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
