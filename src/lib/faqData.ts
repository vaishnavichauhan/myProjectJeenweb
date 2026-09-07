import { FaqItem } from "./siteData";

export interface FaqCategorySection {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  faqs: FaqItem[];
}

export const ALL_HOME_FAQ_SECTIONS: FaqCategorySection[] = [
  {
    id: "general",
    title: "All General Questions",
    badge: "Enterprise IT",
    description: "Infrastructure transfers, genuine software licenses, and single-roof Vadodara engineering support.",
    iconName: "ShieldCheck",
    faqs: [
      {
        question: "Can we migrate an existing messy IT infrastructure over to Jeenweb without data loss?",
        answer: "Absolutely. We've handled migrations from some genuinely complicated legacy setups—old ERP records, active company email environments, and large databases—and we do it without pulling the plug on your live operations midway. Our engineers build parallel replication protocols and run full testing alongside your active systems before anything goes final. You don't flip a switch and hope for the best; you see proof it works first."
      },
      {
        question: "Why does Jeenweb focus so heavily on avoiding pirated software themes and plugins?",
        answer: "Because the shortcut always costs more in the end. Pirated themes and cracked plugins routinely carry hidden scripts—the kind that quietly hand access to your server over to someone you've never met. We've seen what that does to a business. It's not a theoretical risk. We use authentic, licensed software on every build because your client data and operational continuity aren't things we're willing to gamble with."
      },
      {
        question: "Do you look at what we already have before suggesting anything new?",
        answer: "Yes, always. Before we recommend any new software or system, we look at your current setup — your network, the devices your team uses, and how everything is running right now. We are not here to sell you something that creates new problems or pushes you into buying expensive equipment you do not need. Whatever we suggest is based on what will realistically work well in your actual environment."
      },
      {
        question: "Why do most of your clients stay with you for so long?",
        answer: "Because we do not disappear after a project goes live. We run regular backups, keep an eye on security, respond quickly when something goes wrong, and stay in touch without waiting for clients to chase us. We are upfront when there is a problem and clear about how we are fixing it. Most of our clients have been with us for years — some for much longer — because that kind of consistent, honest support is genuinely hard to find."
      },
      {
        question: "Is all the work done by your own team in Vadodara?",
        answer: "Yes, completely. Every part of the process — planning, design, coding, database work, cloud setup, and testing — is done by our own team inside our Vadodara offices. We do not pass work off to outside contractors or third parties. You always know exactly who is working on your project and where that work is being done."
      }
    ]
  },
  {
    id: "web-dev",
    title: "Website Development",
    badge: "Web Applications",
    description: "Modern Next.js portals, custom eCommerce stores, mobile-first design, and bespoke CMS architecture.",
    iconName: "Layout",
    faqs: [
      {
        question: "Why should we build a custom website instead of using an off-the-shelf theme?",
        answer: "Off-the-shelf commercial themes are packed with thousands of lines of unused code, unverified third-party plugins, and heavy scripts designed to fit every possible use case. This leads to slow page speeds (failing Google Core Web Vitals), frequent security vulnerabilities, and unpredictable plugin conflicts. Custom website development ensures 100% bespoke, clean code built exclusively for your business requirements — resulting in sub-second load times, ironclad security, and higher search rankings."
      },
      {
        question: "What technologies do you use for website development?",
        answer: "Depending on your business requirements, we engineer websites using Next.js 16, React, TypeScript, and Tailwind CSS for modern high-performance web applications, or custom-developed WordPress and WooCommerce environments with bespoke PHP and zero bloated page-builders. All solutions include REST/GraphQL API readiness, mobile-first design, and structured JSON-LD schemas."
      },
      {
        question: "Will our website be fully responsive on mobile phones and tablets?",
        answer: "Yes, every website we deliver is engineered with a strict mobile-first methodology. We test thoroughly across physical iOS and Android smartphones, tablets, laptops, and ultra-wide desktop monitors to ensure flawless layouts, fluid typography, and touch-optimized navigation."
      },
      {
        question: "How long does it take to develop a professional corporate website?",
        answer: "A typical custom corporate website generally takes between 3 to 6 weeks from architecture discovery and Figma prototyping to final QA and deployment. Larger custom eCommerce portals or enterprise web applications with complex integrations typically require 6 to 10 weeks."
      },
      {
        question: "Is SEO included with website development?",
        answer: "Yes. Technical SEO is built directly into the foundational code of every website we develop. This includes semantic HTML5 tags, Open Graph meta tags, XML sitemaps, structured JSON-LD organization schemas, optimized image compression (Next-gen WebP/AVIF), and Core Web Vitals performance tuning."
      },
      {
        question: "Can our team easily edit text, images, and content after launch?",
        answer: "Absolutely. We provide intuitive, user-friendly CMS administrative panels that allow your internal team to publish blogs, update products, modify copy, and add team members without touching code. We also provide thorough on-site or video training for your staff."
      }
    ]
  },
  {
    id: "software",
    title: "Custom Software & ERP",
    badge: "Bespoke Engineering",
    description: "Proprietary ERP/CRM systems, biometric integration, data migrations, and zero-seat-license tools.",
    iconName: "Cpu",
    faqs: [
      {
        question: "Why should we build custom software instead of buying a ready-made SaaS tool?",
        answer: "Off-the-shelf SaaS platforms charge recurring per-user fees that grow every time you hire someone new. They also force your team to work around their fixed layouts rather than your actual processes. Custom software development in Vadodara through Jeenweb means no recurring per-seat fees, no adapting your team to someone else's workflow, and full ownership of the software as your intellectual property. For businesses that plan to grow — especially SMEs across Gujarat — custom software almost always costs less over three to five years than a SaaS subscription that keeps getting more expensive."
      },
      {
        question: "Can you connect your attendance management system to our existing biometric devices?",
        answer: "Yes. We write custom API controllers and database listeners that communicate directly with standard biometric terminals, facial recognition devices, and RFID readers already installed at your facilities across Gujarat. We work with the hardware you have — you do not need to replace equipment just to get a better software system."
      },
      {
        question: "What happens to our historical business data when we move from spreadsheets to a custom ERP or CRM?",
        answer: "We handle the full data migration. Our developers write custom parsing scripts that clean, format, and import your existing data — whether it is in Excel spreadsheets, an old SQL database, or another system — into your new software without losing historical records. You start with your full data history intact, not from a blank slate."
      },
      {
        question: "How long does it take to go from the initial workflow study to a live custom software deployment?",
        answer: "It depends on the complexity of what you need. A focused management platform — like visitor management software or an attendance management system — typically takes 4 to 8 weeks from workflow study to live deployment. A full custom ERP software development project for a manufacturing or commercial enterprise usually takes 12 to 20 weeks, delivered through modular milestone releases so you see progress throughout rather than waiting for a single big launch."
      },
      {
        question: "Do you provide staff training after the software goes live?",
        answer: "Yes. Training is part of every deployment we do. We run hands-on orientation sessions directly at your office in Vadodara—training your administrators, department heads, and regular users on how to use the system properly. We also provide written user manuals for ongoing reference. If your team is spread across multiple locations in Gujarat, we run dedicated video training sessions for remote staff so nobody gets left behind."
      },
      {
        question: "Can we add new features to our software after it is already live?",
        answer: "Yes. We build everything in separate, clean modules specifically so that adding new features later is not a painful process. If your business grows, opens a new branch, or needs a new tool added, we can build that in without having to redo everything from scratch. The system stays stable, and the new additions fit in properly."
      }
    ]
  },
  {
    id: "hosting",
    title: "Web Hosting & Servers",
    badge: "NVMe Infrastructure",
    description: "On-demand manual snapshots, zero-downtime server migrations, NVMe speed, and CageFS isolation.",
    iconName: "Server",
    faqs: [
      {
        question: "How are Jeenweb's manual backup facilities different from regular automated backups?",
        answer: "Automated backups run on a fixed timer — typically once daily. Manual backup facilities let you create a fresh backup at any exact moment you choose — usually right before a major update or code change. That way if something breaks at 2pm, you are not waiting until midnight to restore. It is the most important safety feature for any active business website."
      },
      {
        question: "Does Jeenweb migrate my website from my current hosting provider?",
        answer: "Yes. Our team in Vadodara handles the complete migration — files, databases, SSL configuration, and staging tests — before we update your DNS. Your website and email stay live throughout. We also offer this free of charge for new clients moving to Jeenweb hosting."
      },
      {
        question: "What is the difference between NVMe SSD hosting and regular SATA SSD hosting?",
        answer: "NVMe SSDs read and write data roughly 7 to 10 times faster than standard SATA SSDs. For websites with dynamic pages and active databases, this makes a significant difference in page speed, database response time, and overall visitor experience."
      },
      {
        question: "What stops malware from spreading between accounts on the same server?",
        answer: "We use CageFS containerization—a technology that completely isolates every hosting account from every other one on the same server. Even if one account is compromised, malware cannot cross over to your files or database."
      },
      {
        question: "Can I upgrade my hosting plan as my website traffic grows?",
        answer: "Yes. Storage, RAM, and CPU cores can all be upgraded without downtime or changes to your existing code or configurations. Our team handles the upgrade cleanly in the background."
      }
    ]
  },
  {
    id: "domain",
    title: "Domain Registration & DNS",
    badge: "Brand Identity",
    description: "Transparent pricing, proactive renewal protection, instant DNS routing, and WHOIS privacy standard.",
    iconName: "Globe",
    faqs: [
      {
        question: "How do I transfer my existing domain to Jeenweb?",
        answer: "Domain transfer is simple. You unlock your domain at your current registrar and generate an EPP authorization code — basically a security key. Then you start the transfer through our portal. Our team in Vadodara verifies your MX and A records so your website and email keep working without interruption throughout. Most transfers complete within a few days depending on the registrar."
      },
      {
        question: "Does Jeenweb offer cheap domain registration in India without hidden renewal costs?",
        answer: "Yes. We offer competitive pricing across all major TLDs. The price we show you before registration is what you pay at renewal—no surprise increases, no fine print. We are upfront about costs from day one."
      },
      {
        question: "What happens if I forget to renew my domain?",
        answer: "Your website stops loading, and your business email stops working immediately on expiry. That is why we set up proactive renewal reminders well before the date arrives. We also maintain a grace period for domains registered through Jeenweb—so you can still renew without losing ownership or having it auctioned off."
      },
      {
        question: "Can I do a WHOIS lookup to check domain ownership details?",
        answer: "Yes. You can run a WHOIS lookup on any domain to check current ownership and registration details. For domains registered through Jeenweb with WHOIS privacy enabled, your personal details will be hidden and replaced with our privacy service information."
      },
      {
        question: "Why are SPF and DKIM records important for my business email?",
        answer: "SPF and DKIM act like digital signatures on your outgoing emails. They tell receiving mail servers that emails from your domain are genuinely from you. Without them, your business emails are far more likely to land in spam. We configure these DNS authentication records as standard when we set up your domain."
      }
    ]
  },
  {
    id: "seo",
    title: "AI Search & SEO (AEO / GEO)",
    badge: "Search Authority",
    description: "Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), Schema markup, and Google Maps.",
    iconName: "Search",
    faqs: [
      {
        question: "How is GEO search optimization different from traditional SEO?",
        answer: "Traditional SEO focuses on optimizing your web pages to rank in Google's blue-link results. GEO — Generative Engine Optimization — goes further. It optimizes your entire digital presence so AI platforms like ChatGPT, Gemini, and Claude reference and recommend your business when generating answers for relevant queries. That means brand citations, topic-cluster content, structured data, and authority signals across the full web—not just your own website. If you only do traditional SEO, you will be invisible to a growing number of people who never click a Google link and go straight to an AI platform for their answer."
      },
      {
        question: "How long does it take to see results from an SEO campaign?",
        answer: "Technical fixes — broken links, speed improvements, indexation errors — show improvements in search console data within 3 to 6 weeks. Ranking movement for competitive B2B keywords and consistent AI Overview citations typically take 3 to 6 months of steady work. We do not promise overnight rankings because rankings that appear overnight usually disappear just as fast. We build sustainable organic traffic growth that holds up over time."
      },
      {
        question: "What tools do you use to track SEO performance and AI visibility?",
        answer: "We use Google Search Console, Google Analytics 4, Ahrefs, SEMrush, and custom monitoring setups for tracking AI platform citations and brand mentions. You receive regular reports showing keyword movement, organic traffic growth, backlink health, Core Web Vitals scores, and brand citation data across AI platforms — all explained in plain language without confusing jargon."
      },
      {
        question: "Can you help our Vadodara business rank higher on Google Maps?",
        answer: "Yes. Local SEO is a core part of what we do. We optimize your Google Business Profile, standardize your business name, address, and phone number across local directories, build geo-targeted content pages for Vadodara and surrounding areas in Gujarat, and manage your review strategy. For businesses that depend on local customers finding them, this is often the fastest way to see meaningful results."
      },
      {
        question: "Why does structured JSON-LD schema markup matter for AI optimization?",
        answer: "Schema markup tells AI crawlers and search engines exactly what your business data means — not just what the words say. Without it, a crawler reading your website has to guess whether a number on your page is a phone number, a price, or a product rating. With a properly implemented JSON-LD schema, there is no guessing. The crawler knows your business name, location in Gujarat, services, pricing, team credentials, and operating hours — and that accuracy directly improves how often and how correctly AI platforms cite your business in generated answers."
      }
    ]
  },
  {
    id: "social-media",
    title: "Social Media & Performance Ads",
    badge: "Growth Marketing",
    description: "B2B LinkedIn strategy, verified influencer management, paid media acquisition, and corporate ownership.",
    iconName: "Share2",
    faqs: [
      {
        question: "Which social media platforms work best for B2B industrial businesses in Gujarat?",
        answer: "LinkedIn is the strongest platform for B2B industrial businesses — it is where procurement managers, plant heads, and business owners spend their professional time online. That said, YouTube and Instagram work very well alongside LinkedIn for industrial businesses — YouTube for product demonstrations, facility tours, and technical content, and Instagram for employer branding and visual storytelling. The right platform mix depends on your specific audience and what you are trying to achieve. We audit your target buyer first and recommend platforms based on data — not assumptions."
      },
      {
        question: "How much budget do we need to start performance marketing campaigns?",
        answer: "Our agency management fee is separate from your ad spend. For ad spend, we typically recommend starting with a minimum of ₹500 to ₹1,000 per day per platform — enough for the algorithm to properly test creative assets and identify winning audience segments during the learning phase. Starting with too little slows the learning process and makes it harder to get meaningful data quickly. Once we have data showing which campaigns are performing, we scale the budget on what is working and cut what is not."
      },
      {
        question: "How do you choose influencers for our brand campaign?",
        answer: "We do not choose influencers based on follower count alone — that number is easy to inflate and tells you very little about actual influence. We run audience audits on every influencer we consider—checking follower authenticity, geographic concentration within Gujarat, audience demographics, engagement rate relative to follower count, and content quality. Only after that process do we present options to your team. We also handle contract negotiation, brief development, and content approval so you maintain brand control throughout the campaign."
      },
      {
        question: "How quickly will we see leads after launching paid performance ads?",
        answer: "Approved paid campaigns generate live traffic and lead form submissions within 24 to 48 hours of going live. The first two weeks are a learning phase — our media buyers monitor real-time conversion data, pause underperforming ads, and begin scaling the creative sets that are generating qualified leads. By the end of the first month, you have clear data showing cost per lead, which audiences are converting, and which campaigns are worth scaling further."
      },
      {
        question: "Who owns our social media ad accounts, pixel data, and creative assets?",
        answer: "You do completely. All ad campaigns, pixel data, custom graphics, video assets, and business manager accounts are set up within your own corporate accounts. Jeenweb operates through partner access — meaning we can manage everything on your behalf without ever owning any of it. If you ever decide to bring management in-house or move to another agency, everything stays with you, and nothing gets taken away."
      }
    ]
  },
  {
    id: "company",
    title: "Company History & Leadership",
    badge: "About Jeenweb",
    description: "26+ years foundational heritage, executive involvement, JITO Gujarat advisory, and genuine code ethos.",
    iconName: "Building2",
    faqs: [
      {
        question: "What actually changed after the 2016 merger of Jeen Info Tech and Jeeninfo Soft?",
        answer: "The biggest change was that our clients stopped having to deal with two separate teams for related work. Before the merger, our web infrastructure people and our software developers operated on separate tracks. After merging into Jeenweb Technologists, both teams worked under one management structure with shared processes. It meant faster project delivery, fewer gaps in communication, and a single team accountable for the full scope of what a client needed—from hosting to custom software to digital marketing."
      },
      {
        question: "Why did you wait until 2021 and 2022 to bring in Google Workspace and Microsoft 365?",
        answer: "We were already setting up business email before that—using standard POP and IMAP mail servers that worked well for smaller operations. But as our clients grew, those setups started showing their limits. Security requirements increased, teams needed proper collaboration tools, and cloud access became non-negotiable. We waited until we could offer these services through official partner channels — not just reselling a license but actually deploying, migrating, and supporting the full environment properly. Doing it right mattered more to us than doing it first."
      },
      {
        question: "Are the founders actually involved in day-to-day client projects?",
        answer: "Yes. Tatvam Shah is directly involved in project scoping, technical decisions, and reviewing work before it goes to a client. Exita Shah personally leads the SEO strategy and digital marketing planning for clients. Neither of them operates at a distance from the actual work. When you work with Jeenweb, you are working with people who are genuinely engaged in what is being delivered—not just overseeing it from above."
      },
      {
        question: "What does Tatvam Shah actually do as a JITO Gujarat IT consultant?",
        answer: "He advises businesses and trade organizations across Gujarat on technology decisions that matter — when to move systems to the cloud, how to approach a software upgrade without disrupting operations, how to evaluate digital security risks, and how to plan a digital transformation without overspending or creating new problems. It is a practical advisory role based on real experience, and it keeps him closely connected to what businesses across the region are actually dealing with."
      },
      {
        question: "Does having an engineering background actually make a difference in how you handle digital marketing?",
        answer: "It makes a big difference. When Exita and Tatvam review a client's digital marketing setup, they look at it the way an engineer would — checking the technical structure of the website, the schema implementation, the crawlability, the page speed, and how well the foundation supports visibility on both search engines and AI platforms. Most marketing teams focus on content and ads. Our team starts one level deeper than that, which is why the results tend to be more durable."
      }
    ]
  }
];
