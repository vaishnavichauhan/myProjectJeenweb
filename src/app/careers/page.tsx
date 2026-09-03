import { Metadata } from "next";
import Link from "next/link";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  Laptop, 
  ArrowRight,
  TrendingUp,
  Award,
  Mail,
  Phone
} from "lucide-react";
import HeroDynamicBg from "@/components/home/HeroDynamicBg";

export const metadata: Metadata = {
  title: "Careers at Jeenweb | Join Our Engineering & Digital Team in Vadodara",
  description: "Explore rewarding IT career opportunities at Jeenweb Technologists. 26+ years of technology leadership, cutting-edge projects, and exceptional team culture.",
};

const openPositions = [
  {
    id: "full-stack-engineer",
    title: "Senior Full Stack Engineer (Next.js & Node.js)",
    department: "Software Engineering",
    type: "Full-Time",
    location: "Vadodara, Gujarat (HQ / Hybrid)",
    experience: "3 - 6 Years",
    description: "Architect and build high-performance web applications, enterprise SaaS platforms, and scalable REST/GraphQL APIs.",
    skills: ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL / MongoDB", "Tailwind CSS", "REST APIs"]
  },
  {
    id: "frontend-react-dev",
    title: "Frontend UI/UX Developer",
    department: "Frontend Engineering",
    type: "Full-Time",
    location: "Vadodara, Gujarat",
    experience: "2 - 4 Years",
    description: "Craft pixel-perfect, responsive, and blazing-fast user interfaces with smooth interactive animations.",
    skills: ["React.js", "Next.js", "Modern CSS / Tailwind", "Figma / UI Design", "Responsive Layouts"]
  },
  {
    id: "seo-growth-specialist",
    title: "Technical SEO & Digital Growth Specialist",
    department: "Digital Marketing & SEO",
    type: "Full-Time",
    location: "Vadodara, Gujarat",
    experience: "2 - 5 Years",
    description: "Lead on-page/off-page SEO campaigns, core web vitals optimization, technical audits, and organic SERP growth.",
    skills: ["Technical SEO", "Google Search Console", "Ahrefs / SEMrush", "Core Web Vitals", "Content Strategy"]
  },
  {
    id: "cloud-devops-engineer",
    title: "Cloud Infrastructure & DevOps Engineer",
    department: "Cloud & Security",
    type: "Full-Time",
    location: "Vadodara, Gujarat",
    experience: "3 - 5 Years",
    description: "Manage enterprise cloud server deployments, automated CI/CD pipelines, SSL infrastructure, and 99.9% uptime monitoring.",
    skills: ["AWS / DigitalOcean", "Linux / Nginx", "Docker / CI-CD", "DNS & SSL Setup", "Server Security"]
  }
];

const perks = [
  {
    icon: Award,
    title: "26+ Years of Stability",
    desc: "Established in 2000, offering dependable career growth, mentorship from veterans, and enduring stability."
  },
  {
    icon: Laptop,
    title: "Modern Tech Stack",
    desc: "Work on Next.js 16, TypeScript, Cloud Native systems, and high-impact enterprise digital solutions."
  },
  {
    icon: TrendingUp,
    title: "Accelerated Career Growth",
    desc: "Merit-based appraisals, regular skill upskilling workshops, and rapid leadership opportunities."
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Culture",
    desc: "Inclusive, supportive engineering environment with zero bureaucracy and genuine work-life balance."
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Access to online courses, developer certifications, and hands-on exposure to global client projects."
  },
  {
    icon: Users,
    title: "Team Outings & Celebrations",
    desc: "Festive celebrations, annual milestones, hackathons, and dynamic team-building activities."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Careers Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0A2647] via-[#134B70] to-[#07192F] text-white py-20 lg:py-28">
        <HeroDynamicBg />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#00E5FF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>We are Hiring • Join Jeenweb Technologists</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Build Your Career with <br />
            <span className="text-[#00E5FF]">26+ Years of IT Excellence</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal">
            Join a forward-thinking team of engineers, cloud specialists, and digital marketers delivering world-class software from Vadodara, Gujarat.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="px-8 py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-950/40 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wider border border-white/20 transition-all"
            >
              About Our Culture
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E11D48] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
              Company Culture &amp; Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Why Engineers &amp; Leaders Love Working at Jeenweb
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              We empower every team member to innovate, take ownership, and build impactful software for domestic and international clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#1A3B71]/40 hover:shadow-xl hover:shadow-slate-900/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A3B71]/10 text-[#1A3B71] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1A3B71] group-hover:text-white transition-all shadow-xs">
                  <perk.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {perk.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-20 bg-slate-100/70 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1A3B71] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Current Openings
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Find Your Next Role
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Explore open roles in Vadodara, Gujarat. We are continuously looking for skilled problem solvers to join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#1A3B71]/40 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#1A3B71] px-3 py-1 rounded-full border border-blue-100">
                      {job.department}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {job.title}
                  </h3>

                  <p className="text-slate-600 text-sm max-w-3xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1A3B71]" />
                      Experience: {job.experience}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 pt-4 lg:pt-0">
                  <a
                    href={`mailto:careers@jeenweb.com?subject=Application%20for%20${encodeURIComponent(job.title)}&body=Hi%20Jeenweb%20Team,%0A%0AI%20am%20interested%20in%20applying%20for%20the%20${encodeURIComponent(job.title)}%20position.%20Please%20find%20my%20resume%20attached.%0A%0AThanks,%0A`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1A3B71] hover:bg-[#122A52] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-950/20 hover:scale-[1.02] cursor-pointer w-full sm:w-auto"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Spontaneous Application Banner */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-dashed border-[#1A3B71]/40 text-center">
            <Briefcase className="w-10 h-10 text-[#1A3B71] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-900">
              Don’t see a role that matches your profile?
            </h3>
            <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
              We are always excited to meet talented software engineers, designers, and digital strategists. Send your resume directly to our hiring team.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:careers@jeenweb.com?subject=Spontaneous%20Application%20-%20Jeenweb"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Resume to careers@jeenweb.com</span>
              </a>
              <a
                href="tel:+919824030580"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1A3B71]" />
                <span>Call HR: +91 98240 30580</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
