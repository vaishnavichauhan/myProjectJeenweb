export interface HeroSlide {
  id: string;
  tag: string;
  badge: string;
  h1: string;
  h2: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  statsLabel: string;
  statsValue: string;
  featureBullets: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  href: string;
  tags: string[];
  features: string[];
}

export interface EmailSolutionItem {
  id: string;
  title: string;
  badge: string;
  desc: string;
  features: string[];
  icon: string;
  platform?: string;
}

export interface FaqItem {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
  category?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  highlights: string[];
  specialties: string[];
  imagePlaceholderText: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  badge?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "domain-hosting",
    tag: "Domain & Hosting",
    badge: "Enterprise Infrastructure",
    h1: "Reliable Domain Registration and Hosting Solutions for Businesses in Gujarat",
    h2: "Your Digital Address Starts With the Right Foundation",
    body: "A slow server or an expired domain can quietly kill your business credibility overnight. We help you register the right domain name and pair it with a hosting environment that's built for uptime, speed, and security—not just the lowest price on the shelf. Whether you're starting fresh or moving away from an unreliable provider, we set everything up properly so your online presence never goes dark at the worst possible moment.",
    ctaText: "Schedule a Technical Consultation",
    ctaLink: "/contact?service=domain-hosting",
    secondaryCtaText: "Explore Hosting Tiers",
    secondaryCtaLink: "/services/hosting",
    statsLabel: "Server Uptime SLA",
    statsValue: "99.9%",
    featureBullets: [
      "Pure NVMe SSD Storage & DNS Fast Routing",
      "On-Demand Instant Manual Backup Facilities",
      "Free Let's Encrypt SSL & CageFS Containerization",
      "Direct 24/7 Monitoring & Local Support in Vadodara"
    ]
  },
  {
    id: "software-dev",
    tag: "Customized Software & Web Development",
    badge: "Clean Licensed Architecture",
    h1: "Custom Website and Software Development Services Built for Growing Businesses",
    h2: "Websites and Software Built Around How Your Business Actually Works",
    body: "Generic templates and off-the-shelf software only take you so far. We build custom web platforms and business applications from clean, licensed code—designed specifically around your team's workflows, your industry's demands, and your customers' expectations. No cracked plugins, no compromised themes, no shortcuts that come back to bite you later. Just solid, secure, and functional digital products built to last.",
    ctaText: "Schedule a Technical Consultation",
    ctaLink: "/contact?service=custom-software",
    secondaryCtaText: "View Custom Software Capabilities",
    secondaryCtaLink: "/services/custom-software",
    statsLabel: "Custom Software Systems Delivered",
    statsValue: "1500+",
    featureBullets: [
      "100% Licensed Genuine Code & Tools",
      "Physical Workflow Study Prior to Architecture",
      "Modular Scalability Without Per-Seat SaaS Taxes",
      "Biometric, ERP, CRM & Database Integrations"
    ]
  },
  {
    id: "seo-social",
    tag: "SEO & Social Media",
    badge: "Next-Gen GEO & AEO Frameworks",
    h1: "SEO and Social Media Marketing Services That Help Your Business Get Found Online",
    h2: "Get Found on Search Engines, AI Platforms, and Social Channels That Matter",
    body: "Visibility isn't just about ranking on Google anymore. Your business needs to show up where your customers are actually looking—traditional search, AI answer engines, and the social platforms driving real buying decisions today. We structure your content, build your presence, and run campaigns that put your brand in front of high-intent audiences consistently—not just when the algorithm feels like it.",
    ctaText: "Schedule a Technical Consultation",
    ctaLink: "/contact?service=seo-marketing",
    secondaryCtaText: "Request Free SEO/AI Audit",
    secondaryCtaLink: "/services/seo",
    statsLabel: "Average Organic Lead Growth",
    statsValue: "+180%",
    featureBullets: [
      "Traditional Google SEO + Local Maps Dominance",
      "Answer Engine Optimization (AEO) for AI Overviews",
      "Generative Engine Optimization (GEO) for ChatGPT & Gemini",
      "Data-Driven Performance Ads with Direct ROAS Tracking"
    ]
  },
  {
    id: "email-solutions",
    tag: "Business Email Solutions",
    badge: "Cloud & Tenant Management",
    h1: "Business Email Setup and Migration Services Across Microsoft 365, Google Workspace, and More",
    h2: "Professional Email Infrastructure That Your Entire Organization Can Rely On",
    body: "A business running on free or unreliable email platforms looks unprofessional and creates real security risks. We set up and configure enterprise-grade email environments across Microsoft 365, Google Workspace, Zoho Mail, Rediff Business, Titan Email, and dedicated enterprise mail servers—fully deployed, properly secured, and ready for your team to use from day one. No half-done migrations, no deliverability headaches.",
    ctaText: "Schedule a Technical Consultation",
    ctaLink: "/contact?service=email-infrastructure",
    secondaryCtaText: "Explore Email Platforms",
    secondaryCtaLink: "/services/hosting#email-solutions",
    statsLabel: "Client Email Retention Rate",
    statsValue: "98%",
    featureBullets: [
      "Authorized Google Workspace & Microsoft 365 Setup",
      "Zero-Downtime Mailbox & Historical Data Migration",
      "Strict SPF, DKIM & DMARC Anti-Spam Authentication",
      "Enterprise Mail Dedicated Server Architecture"
    ]
  }
];

export const CORE_METRICS: MetricItem[] = [
  {
    value: "27+",
    label: "Years of Engineering",
    description: "We've been at this since 1999 — long before most tech firms in Gujarat even had a framework to stand on.",
    highlight: "Since 1999"
  },
  {
    value: "1500+",
    label: "Delivered Projects",
    description: "From mid-size corporate setups to large industrial operations, we've engineered and delivered systems that actually get used.",
    highlight: "Across 12 Countries"
  },
  {
    value: "200+",
    label: "Active Enterprise Clients",
    description: "Businesses across industries trust us to handle the IT and digital marketing infrastructure they can't afford to get wrong.",
    highlight: "Manufacturing & B2B"
  },
  {
    value: "98%",
    label: "Client Retention Rate",
    description: "Most of our clients don't leave because when systems run clean and support shows up when it should, there's no reason to.",
    highlight: "Long-Term Loyalty"
  }
];

export const CORE_SERVICES_PART1: ServiceItem[] = [
  {
    id: "domain",
    title: "Domain Registration & Management",
    shortDesc: "Finding the right domain name matters more than people think. Search, register, and secure your brand with instant DNS.",
    fullDesc: "Finding the right domain name matters more than people think. We help you search for, register, and manage a domain that fits your brand—and we ensure renewals, DNS settings, and transfers are handled properly so you never lose control of your online address.",
    iconName: "Globe",
    href: "/services/domain",
    tags: ["Instant DNS", "WHOIS Privacy", "Multi-TLD", "EPP Transfers"],
    features: [
      "Domain name search & instant availability check",
      "Zero-delay DNS routing & propagation",
      "Free WHOIS privacy protection standard",
      "Registrar-level locking & proactive renewal alerts"
    ]
  },
  {
    id: "hosting",
    title: "Web Hosting",
    shortDesc: "Fast, stable, and secure hosting with on-demand manual backups and isolated CageFS containers.",
    fullDesc: "Your website needs a home that stays up, loads fast, and keeps your data safe. We offer shared, VPS, dedicated, and cloud hosting options—and we configure the one that best fits your traffic, budget, and security needs. No overselling, no hidden limits.",
    iconName: "Server",
    href: "/services/hosting",
    tags: ["NVMe SSD", "Manual Backups", "CageFS", "Free SSL"],
    features: [
      "Up to 10x faster read/write speeds with pure NVMe",
      "One-click On-Demand Manual Backup before updates",
      "Isolated container resources via CageFS",
      "Developer-ready: PHP 7.4-8.x, Node.js, SSH, Git"
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    shortDesc: "Websites coded clean from scratch, responsive, mobile-first, and engineered for high business conversion.",
    fullDesc: "We build websites that actually do something for your business. Every site we deliver is coded clean, mobile-friendly, and secure — no stolen themes, no sketchy plugins. Just a properly built web presence that works the way it should and holds up over time.",
    iconName: "Layout",
    href: "/services/custom-software",
    tags: ["Clean Code", "Next.js/React", "Mobile First", "Zero Bloat"],
    features: [
      "100% licensed code with zero pirated templates",
      "Ultra-fast Core Web Vitals optimization",
      "Dynamic responsive layouts across all screen sizes",
      "Custom CMS and headless architecture options"
    ]
  },
  {
    id: "custom-software",
    title: "Customized Software",
    shortDesc: "Custom ERPs, CRMs, Visitor & School Management platforms built around your physical workplace workflows.",
    fullDesc: "When standard software doesn't fit the way your business runs, we build something that does. From custom CRMs and ERP systems to internal tools your team uses every day, we design and develop software around your actual workflow, not a generic template of what a business is supposed to look like.",
    iconName: "Cpu",
    href: "/services/custom-software",
    tags: ["Custom ERP", "Custom CRM", "Biometric Sync", "No Seat Tax"],
    features: [
      "On-site workflow observation study before coding",
      "Modular scalable backend in Laravel, PHP, Node.js",
      "Biometric attendance & multi-warehouse inventory",
      "Full IP ownership without recurring SaaS subscription hikes"
    ]
  },
  {
    id: "seo",
    title: "SEO",
    shortDesc: "Dominate Google, Google AI Overviews, ChatGPT, Gemini, and Claude with 4-pillar modern search optimization.",
    fullDesc: "We help your business show up where your customers are searching—on Google, on AI platforms like Gemini and ChatGPT, and anywhere else people go to find answers. We handle the technical side, the content structure, and the long-term strategy to keep your rankings moving in the right direction.",
    iconName: "Search",
    href: "/services/seo",
    tags: ["AEO Answer Engine", "GEO Generative Engine", "JSON-LD Schema", "Local Maps"],
    features: [
      "Technical audits & Core Web Vitals remediation",
      "Semantic Q&A structuring for AI Overview position zero",
      "Entity graph mapping & structured JSON-LD schemas",
      "Vadodara & Gujarat local SEO and Google Maps optimization"
    ]
  },
  {
    id: "social-media",
    title: "Social Media & Performance Marketing",
    shortDesc: "Data-driven Meta & LinkedIn campaigns, visual reel production, and vetted regional influencer marketing.",
    fullDesc: "We manage your brand's presence across the platforms that make sense for your business—creating content, running paid campaigns, and building an audience that actually turns into leads and customers over time.",
    iconName: "TrendingUp",
    href: "/services/social-media",
    tags: ["Meta Ads", "LinkedIn B2B", "ROAS Tracking", "Influencer PR"],
    features: [
      "Dedicated multi-platform management (LinkedIn, Instagram, FB, YouTube)",
      "High-converting visual assets, short-form video reels & graphics",
      "Performance paid advertising with strict ROAS attribution",
      "Vetted regional Gujarat influencer campaigns"
    ]
  }
];

export const EMAIL_SOLUTIONS_PART2: EmailSolutionItem[] = [
  {
    id: "m365",
    title: "Microsoft 365",
    badge: "Official Enterprise Setup",
    desc: "Complete enterprise setup with Outlook, Microsoft Teams, OneDrive cloud sync, and seamless Exchange data migration with zero downtime.",
    features: ["Custom Domain Integration", "Teams & SharePoint Provisioning", "Exchange Online Migration", "Admin Security Policies"],
    icon: "Mail"
  },
  {
    id: "gworkspace",
    title: "Google Workspace",
    badge: "Authorized Partner Channel",
    desc: "Official Google business suite deployment featuring custom domain Gmail, Google Meet, Drive storage, and enterprise admin security controls.",
    features: ["Gmail on Custom Domain", "30GB - Unlimited Cloud Storage", "Meet & Docs Real-Time Collab", "Zero-Loss Data Migration"],
    icon: "ShieldCheck"
  },
  {
    id: "zoho",
    title: "Zoho Workplace Mail",
    badge: "Connected Workplace",
    desc: "Secure, ad-free corporate business email with native Zoho CRM sync, encrypted inboxes, multi-device access, and centralized admin panel.",
    features: ["Ad-Free Privacy Guarantee", "Zoho Suite Deep Integration", "Email Retention & eDiscovery", "Dedicated Control Panel"],
    icon: "Layers"
  },
  {
    id: "rediff",
    title: "Rediff Business Mail",
    badge: "Cost-Effective B2B",
    desc: "High-volume corporate email hosting with Indian data residency, enterprise spam/virus filters, and dedicated webmail & IMAP support.",
    features: ["Reliable Webmail & POP/IMAP", "Indian Server Data Residency", "Spam & Virus Filters", "Simple Corporate Management"],
    icon: "Send"
  },
  {
    id: "titan",
    title: "Titan Business Email",
    badge: "Modern & Intuitive",
    desc: "Modern, ultra-fast business email equipped with read receipts, scheduled sending, integrated calendar, and cross-platform mobile apps.",
    features: ["Read Receipts & Send Later", "Integrated Calendar & Contacts", "Rich Web & Mobile Apps", "Smart Follow-Up Reminders"],
    icon: "Zap"
  },
  {
    id: "enterprise-mail",
    title: "Dedicated Mail Server",
    badge: "Full Custom Control",
    desc: "Fully managed private mail infrastructure with dedicated clean IP reputation, customized storage quotas, strict SPF/DKIM, and daily backups.",
    features: ["Dedicated Clean IP Addresses", "Custom Storage Allocation", "Strict SPF / DKIM / DMARC", "Automated Daily Mail Backups"],
    icon: "Server"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Domains and Hosting You Can Actually Trust",
    description: "We don't just sell you a domain and a hosting plan and walk away. We help you choose the right setup from the start, manage everything properly, and make sure your website stays live, fast, and secure—month after month.",
    icon: "ShieldCheck"
  },
  {
    title: "Websites and Software Built the Right Way",
    description: "Every website and software product we build uses only licensed code and genuine tools. No pirated themes, no cracked plugins, no shortcuts that create security risks for your business down the line. Clean builds from day one.",
    icon: "Code2"
  },
  {
    title: "Software That Fits Your Team — Not the Other Way Around",
    description: "Most software problems happen because the tool doesn't match how the team actually works. We study your workflow first and then build software around it—so your team uses it naturally instead of working around it.",
    icon: "Users"
  },
  {
    title: "SEO That Works Beyond Just Google",
    description: "We don't just chase keyword rankings. We structure your content so your business shows up on traditional search engines, AI platforms like Gemini and ChatGPT, and anywhere else your customers are looking for answers.",
    icon: "Sparkles"
  },
  {
    title: "Social Media That Builds Real Business",
    description: "We manage your social presence with a clear goal—turning followers into actual customers. No vanity metrics, no random posting. Just consistent content and targeted campaigns that bring in leads.",
    icon: "BarChart3"
  },
  {
    title: "Email Setup Done Properly the First Time",
    description: "Whether you need Microsoft 365, Google Workspace, Zoho, Rediff, Titan, or a full enterprise mail server, we deploy it correctly, secure it properly, and make sure your team can use it without issues from day one.",
    icon: "CheckCircle2"
  }
];

export const TECH_STACK = [
  { name: "React", category: "Frontend", logoText: "React", color: "#61DAFB", iconPath: "/images/tech/react.svg" },
  { name: "React Native", category: "Mobile Apps", logoText: "React Native", color: "#61DAFB", iconPath: "/images/tech/react-native.svg" },
  { name: "Next.js", category: "SSR & Enterprise Web", logoText: "Next.js", color: "#000000", iconPath: "/images/tech/nextjs.svg" },
  { name: "PHP", category: "Core Engine", logoText: "PHP 8.x", color: "#777BB4", iconPath: "/images/tech/php.svg" },
  { name: "Node.js", category: "High Concurrency", logoText: "Node.js", color: "#339933", iconPath: "/images/tech/nodejs.svg" },
  { name: "Java", category: "Enterprise Backend", logoText: "Java", color: "#E76F00", iconPath: "/images/tech/java.svg" },
  { name: "MySQL", category: "Relational DB", logoText: "MySQL", color: "#4479A1", iconPath: "/images/tech/mysql.svg" },
  { name: "PostgreSQL", category: "Relational DB", logoText: "PostgreSQL", color: "#336791", iconPath: "/images/tech/postgresql.svg" },
  { name: "MongoDB", category: "NoSQL DB", logoText: "MongoDB", color: "#47A248", iconPath: "/images/tech/mongodb.svg" },
  { name: "WordPress", category: "CMS", logoText: "WordPress", color: "#21759B", iconPath: "/images/tech/wordpress.svg" }
];

export const GLOBAL_COUNTRIES = [
  { name: "India", region: "Headquarters (Vadodara)", flag: "🇮🇳" },
  { name: "Dubai (UAE)", region: "Middle East Operations", flag: "🇦🇪" },
  { name: "United Kingdom", region: "European Operations", flag: "🇬🇧" },
  { name: "United States", region: "North America", flag: "🇺🇸" },
  { name: "Canada", region: "North America", flag: "🇨🇦" },
  { name: "Australia", region: "Oceania", flag: "🇦🇺" },
  { name: "New Zealand", region: "Oceania", flag: "🇳🇿" },
  { name: "China", region: "East Asia", flag: "🇨🇳" },
  { name: "Sri Lanka", region: "South Asia", flag: "🇱🇰" },
  { name: "Bangladesh", region: "South Asia", flag: "🇧🇩" },
  { name: "Uganda", region: "East Africa", flag: "🇺🇬" },
  { name: "Libya", region: "North Africa", flag: "🇱🇾" }
];

export const FAQS: FaqItem[] = [
  {
    question: "Can we migrate an existing messy IT infrastructure over to Jeenweb without data loss?",
    answer: "Absolutely. We've handled migrations from some genuinely complicated legacy setups—old ERP records, active company email environments, and large databases—and we do it without pulling the plug on your live operations midway. Our engineers build parallel replication protocols and run full testing alongside your active systems before anything goes final. You don't flip a switch and hope for the best; you see proof it works first.",
    category: "general"
  },
  {
    question: "Why does Jeenweb focus so heavily on avoiding pirated software themes and plugins?",
    answer: "Because the shortcut always costs more in the end. Pirated themes and cracked plugins routinely carry hidden scripts—the kind that quietly hand access to your server over to someone you've never met. We've seen what that does to a business. It's not a theoretical risk. We use authentic, licensed software on every build because your client data and operational continuity aren't things we're willing to gamble with.",
    category: "general"
  },
  {
    question: "What specific optimization strategies do you use to rank websites on AI search engines?",
    answer: "AI platforms don't rank pages the way traditional search engines do. They pull answers from content that's clearly written, logically structured, and semantically organized around real questions people ask. We restructure your site content into direct Q&A formats, configure rich snippet schemas, and build your information architecture so platforms like Gemini and ChatGPT can read, understand, and cite your business when it's relevant.",
    category: "seo"
  },
  {
    question: "How do you verify that custom operational software actually matches our company's workflow?",
    answer: "We use a three-phase process. First, we send analysts into your actual work environment to observe how things get done — not how they're supposed to get done on paper, but how they actually happen. Second, we design the software modules to mirror those behaviors. Third, before anything goes live, we run stress tests on beta builds and watch specifically for friction points where users struggle or work around the system.",
    category: "software"
  },
  {
    question: "Do you provide local technical support for businesses operating inside Gujarat?",
    answer: "Yes. Our core development and server monitoring happens remotely, but our on-ground teams in Vadodara handle direct deployment work, migration support, and in-person IT orientation for staff when needed. If you're based in Gujarat and need someone physically present for a rollout or training session, we've got that covered.",
    category: "general"
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: "Utpal Shah",
    role: "Managing Director and Founder",
    experience: "26+ Years Industry Experience",
    bio: "Utpal Shah started this company in 2000 at a time when most businesses in Vadodara were not online at all. Utpal could see that was going to change—and he wanted to be the person helping local businesses make that shift properly. Over 26 years, Utpal has guided Jeenweb through every major technological transformation—from simple shared hosting to custom enterprise software, cloud systems, and AI-driven marketing with an uncompromising commitment to integrity.",
    highlights: [
      "26 years of real business and technology leadership in Gujarat",
      "Founding culture anchored in honesty, genuine code, and long-term relationships",
      "Prudent strategic judgment on business continuity, security, and client stability"
    ],
    specialties: ["IT Governance", "Business Architecture", "Enterprise Security", "Client Trust"],
    imagePlaceholderText: "Utpal Shah - Founder"
  },
  {
    name: "Tatvam Shah",
    role: "Managing Director and Partner",
    experience: "11+ Years Hands-on Leadership",
    bio: "Tatvam holds a diploma in computer engineering and brought a fresh technical vigor to Jeenweb. Parul University inducted him into their prestigious Wall of Fame for his contributions to technology and entrepreneurship. He serves as the official JITO Gujarat IT Consultant, advising regional enterprises on digital transformation, cloud adoption, and software modernization. Tatvam personally oversees software quality and technical architecture.",
    highlights: [
      "Computer engineering background with 11+ years of architectural leadership",
      "Recognized by Parul University's Wall of Fame for technology & entrepreneurship",
      "Official JITO Gujarat IT Consultant advising regional enterprises on digital security",
      "Direct technical oversight on software engineering, ERP, and WordPress builds"
    ],
    specialties: ["Custom Software Architecture", "Cloud Infrastructure", "JITO IT Advisory", "Quality Assurance"],
    imagePlaceholderText: "Tatvam Shah - Managing Director"
  },
  {
    name: "Exita Shah",
    role: "Co-Founder and Head of Digital Marketing & SEO",
    experience: "Engineering-Backed Digital Strategy",
    bio: "Exita Shah leads search visibility, content strategy, and digital campaigns with an engineering foundation from Parul University. She treats SEO not as a superficial content exercise, but as a systems problem needing technical precision. Her work spans traditional Technical SEO, Answer Engine Optimization (AEO) for Google AI Overviews, and Generative Engine Optimization (GEO) for ChatGPT and Gemini.",
    highlights: [
      "Engineering-backed approach to technical SEO, AEO, GEO, and AIO",
      "Co-Founder with direct leadership over all client digital marketing operations",
      "Laser-focused on tangible business outcomes: qualified B2B leads & conversions",
      "Deep technical mastery of schema graphs, Core Web Vitals, and AI answer engines"
    ],
    specialties: ["Technical SEO", "AEO & GEO Optimization", "Schema Architecture", "Performance Media"],
    imagePlaceholderText: "Exita Shah - Head of Marketing"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2000",
    title: "Where It All Started — Jeen Info Tech",
    description: "Opened our doors in Vadodara as Jeen Info Tech. We helped early businesses get online with domain registration, web hosting, and reliable early websites.",
    badge: "Foundation"
  },
  {
    year: "2006",
    title: "Moving Into Software Development",
    description: "Noticing clients struggled with manual spreadsheets and paper, we expanded into software development—automating repetitive daily tasks for local businesses.",
    badge: "Expansion"
  },
  {
    year: "2012",
    title: "New Leadership and Stronger Systems",
    description: "Tatvam Shah joined the leadership team, overhauling internal development processes into a structured cycle of analysis, design, testing, and deployment.",
    badge: "Process Maturity"
  },
  {
    year: "2013",
    title: "Launching Jeeninfo Soft",
    description: "Created Jeeninfo Soft as a dedicated vertical for custom software engineering, product development, and authorized software reselling.",
    badge: "Vertical Split"
  },
  {
    year: "2016",
    title: "Unified Merger: Jeenweb Technologists Pvt. Ltd.",
    description: "Merged web infrastructure and software units under one unified banner, giving clients a single accountable point of contact for end-to-end IT.",
    badge: "Corporate Merger"
  },
  {
    year: "2017",
    title: "Custom ERP Systems for Gujarat's Industries",
    description: "Engineered tailor-made ERP platforms for manufacturers and distributors across Gujarat, digitizing procurement, inventory, and production workflows.",
    badge: "Industrial ERP"
  },
  {
    year: "2020",
    title: "Engineering Team Expansion",
    description: "Expanded the technical team to over 24 full-time specialists in Vadodara to ensure dedicated attention and zero maintenance lag.",
    badge: "Scale"
  },
  {
    year: "2021",
    title: "Authorized Google Workspace Partner",
    description: "Established official Google Workspace authorization, providing secure cloud migrations, custom tenant administration, and enterprise collaboration.",
    badge: "Cloud Partner"
  },
  {
    year: "2022",
    title: "Microsoft 365 Enterprise Services",
    description: "Integrated full Microsoft 365 deployment, hybrid Exchange configuration, and tenant migration into our core service offerings.",
    badge: "Enterprise Email"
  },
  {
    year: "2023",
    title: "1,000 Sq. Ft. Dedicated Tech Facility",
    description: "Moved into an expanded modern office in Vadodara, facilitating faster cross-team collaboration, client briefings, and hands-on staff training.",
    badge: "Infrastructure"
  },
  {
    year: "2026",
    title: "Second Office & ETS PROP Initiative",
    description: "Opened our 2nd corporate office in Vadodara and launched ETS PROP—a focused initiative delivering high-demand enterprise consulting and infrastructure planning.",
    badge: "Recent Milestone"
  },
  {
    year: "Coming Soon",
    title: "Project JE (Just Email)",
    description: "Our proprietary business email platform engineered specifically for SMBs—eliminating complex setups with bulletproof delivery and zero clutter.",
    badge: "Upcoming Innovation"
  }
];

export const TESTIMONIALS = [
  {
    id: "review-2",
    quote: "Moving our 150+ user mailboxes to Google Workspace and Microsoft 365 with Jeenweb was the smoothest IT transition we've ever experienced. Their DNS and deliverability setup is top tier.",
    author: "Commercial Logistics Director",
    location: "Ahmedabad, Gujarat",
    industry: "Supply Chain & Logistics",
    rating: 5,
    avatar: "/images/testimonials/client-avatar-1.jpg"
  },
  {
    id: "review-3",
    quote: "Exita and the SEO team transformed our search presence. We are now cited directly in Google AI Overviews and ChatGPT queries for our B2B products. Highly recommended!",
    author: "B2B Export Enterprise",
    location: "Surat, Gujarat",
    industry: "Global Exports",
    rating: 4,
    avatar: "/images/testimonials/client-avatar-2.jpg"
  },
  {
    id: "review-5",
    quote: "Jeenweb built a secure visitor management and appointment booking platform tailored specifically to our multi-campus workflow. Clean licensed code and zero ongoing per-user license taxes.",
    author: "Healthcare Network Administrator",
    location: "Vadodara, Gujarat",
    industry: "Healthcare & Clinics",
    rating: 5,
    avatar: "/images/testimonials/client-avatar-3.jpg"
  },
  {
    id: "review-6",
    quote: "From domain renewals to private email servers, having one accountable team right here in Vadodara has simplified our technical operations for over a decade. Reliable and genuine.",
    author: "Higher Education Director",
    location: "Gujarat, India",
    industry: "Education & Academics",
    rating: 4,
    avatar: "/images/testimonials/client-avatar-4.jpg"
  }
];

export const BLOG_POSTS = [
  {
    id: "ai-search-optimization-2026",
    title: "Why Traditional SEO is No Longer Enough: Structuring for AI Search Engines (GEO & AEO)",
    date: "Aug 2026",
    readTime: "5 min read",
    category: "SEO & AI",
    excerpt: "How search behavior has evolved towards ChatGPT, Gemini, and Google AI Overviews, and what technical schema changes your business needs today."
  },
  {
    id: "custom-erp-vs-saas",
    title: "Custom ERP vs. SaaS: Why Growing Manufacturing Companies in Gujarat Choose Proprietary Systems",
    date: "Jul 2026",
    readTime: "7 min read",
    category: "Software Engineering",
    excerpt: "Analyzing the long-term total cost of ownership (TCO) and workflow friction of generic per-seat SaaS versus custom-built modular software."
  },
  {
    id: "manual-backup-hosting-security",
    title: "The Critical Role of On-Demand Manual Backups in Web Infrastructure Security",
    date: "Jun 2026",
    readTime: "4 min read",
    category: "Cloud & Hosting",
    excerpt: "Why scheduled midnight backups leave a 16-hour risk window, and how instant snapshot facilities safeguard your mission-critical web applications."
  }
];

export const PARTNERSHIPS = [
  {
    name: "Authorized Google Workspace Partner",
    type: "Cloud & Email",
    description: "Official implementation partner for Google Workspace migrations, enterprise tenant security, and business productivity suites."
  },
  {
    name: "Microsoft 365 Solutions Partner",
    type: "Enterprise Cloud",
    description: "Certified deployment partner for Microsoft 365, Exchange Online, Azure AD identity, and hybrid cloud architectures."
  },
  {
    name: "JITO Gujarat Regional IT Consultant",
    type: "Advisory & Consulting",
    description: "Official technology advisory partner guiding Gujarat trade bodies, industrial enterprises, and business leadership."
  },
  {
    name: "Parul University Wall of Fame Partner",
    type: "Academic & Tech Innovation",
    description: "Recognized engineering partner for technological excellence and enterprise software innovation in Gujarat."
  }
];

export const CLIENT_SECTORS = [
  { name: "Manufacturing & Engineering", count: "80+ Clients" },
  { name: "Supply Chain & Logistics", count: "40+ Clients" },
  { name: "Education & Universities", count: "25+ Clients" },
  { name: "Chemical & Pharmaceuticals", count: "30+ Clients" },
  { name: "Export & International Trade", count: "50+ Clients" },
  { name: "Retail & Consumer Services", count: "60+ Clients" }
];

