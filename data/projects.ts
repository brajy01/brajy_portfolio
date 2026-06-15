export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  overlayImage?: string;
  tags: string[];
  category: string;
  month: string;
  year: number;
  // Detail page content
  projectName: string;
  role: string;
  heroDescription: string;
  heroImage: string;
  heroOverlayImage?: string;
  overview: string;
  technologies: string[];
  // Portfolio narrative. Answers: What was the problem? How did you solve it?
  // What did you deliver? What impact? (So what?)
  problem: string;
  approach: string[];
  deliverables: string[];
  impact: string[];
  lessonsLearned: string;
  projectImages: string[];
  projectOverlayImages?: string[];
  projectDetails: {
    client: string;
    industry: string;
    work: string[];
    date: string;
    githubUrl?: string;
    liveUrl?: string;
  };
}

export const projects: Project[] = [
  {
    id: "5",
    title: "Dental Practice Website - Barbara Freitas",
    slug: "barbara-freitas",
    description:
      "Professional dental practice website for Dr. Barbara Freitas, a dental therapist on the Isle of Man",
    image: "/projects/barbara-freitas/card.jpg",
    overlayImage: "/mesh/GRADIENT_FULL_2.png",
    tags: ["UI / UX Design", "Frontend Development", "SEO", "Web Design"],
    category: "Development",
    month: "february",
    year: 2025,
    projectName: "Dental Practice Website - Barbara Freitas",
    role: "Designer, Developer & SEO",
    heroDescription:
      "Barbara Freitas is a dental therapist on the Isle of Man who had no website at all. The goal was to give her a clean, trustworthy presence that lets prospective patients understand her work and reach out in a single tap.",
    heroImage: "/projects/barbara-freitas/hero.jpg",
    heroOverlayImage: "/mesh/GRADIENT_FULL_2.png",
    overview:
      "I designed and built the whole site, from the look and feel down to the code and the SEO. The focus was trust and clarity: a calm layout, a before-and-after gallery to show her work, and a one-tap WhatsApp contact. I shipped the first version on Hostinger's site builder to go live quickly, then rebuilt it in Next.js to cut the steep renewal costs and own the codebase.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    problem:
      "With no website, patients on the Isle of Man had no way to find Barbara, see her work, or get in touch. And without a professional presence, the practice didn't have the credibility people look for when they pick a dentist.",
    approach: [
      "I kept the design calm and clean, so the practice feels professional and easy to trust at a glance",
      "I added a one-tap WhatsApp button: it opens a message that's already written, so the patient just hits send",
      "I built a before-and-after gallery of real treatments to let her work speak for itself",
      "I tuned the SEO and the loading speed so people on the island actually find her on Google",
    ],
    deliverables: [
      "A responsive site with the pages she needed: home, services, about and contact",
      "A before-and-after gallery of real dental treatments",
      "A one-tap WhatsApp contact with a ready-to-send message",
      "Local SEO so the practice shows up in Isle of Man searches",
    ],
    impact: [
      "She went from no website at all to a real, findable online presence",
      "Patients now reach her straight from the site, in a single tap",
      "The practice finally looks as professional online as Barbara is in person",
    ],
    lessonsLearned:
      "Shipping on Hostinger first got Barbara online fast, but the renewal pricing made the trade-off obvious: owning the code matters. Rebuilding it in Next.js cut the recurring cost and gave me full control over speed and SEO. It also reminded me how much trust drives every choice in healthcare. If a detail doesn't make a patient feel safe, it doesn't belong.",
    projectImages: [
      "/projects/barbara-freitas/gallery-1.jpg",
      "/projects/barbara-freitas/gallery-2.jpg",
      "/projects/barbara-freitas/gallery-3.jpg",
    ],
    projectOverlayImages: [
      "/mesh/GRADIENT_FULL_3.png",
      "/mesh/GRADIENT_ORANGE-WHITE_1.png",
      "/mesh/GRADIENT_N&B_2.png",
    ],
    projectDetails: {
      client: "Dr. Barbara Freitas",
      industry: "Healthcare / Dentistry",
      work: ["UI / UX Design", "Frontend Development", "SEO"],
      date: "february 2025",
      liveUrl: "https://barbarafreitas.com",
    },
  },
  {
    id: "1",
    title: "E-commerce Platform Redesign",
    slug: "ecommerce-platform-redesign",
    description:
      "Complete overhaul of an online retail platform with improved UX",
    image: "/mesh/GRADIENT_FULL_1.png",
    tags: ["UI / UX Design", "Frontend Development", "E-commerce", "Web App"],
    category: "Design",
    month: "december",
    year: 2024,
    projectName: "ShopHub Platform",
    role: "Full-Stack Developer",
    heroDescription:
      "ShopHub is not just an e-commerce platform. It's a complete shopping experience designed for modern retailers. With cutting-edge technology and intuitive design, it seamlessly integrates into your business, delivering seamless customer journeys and powerful analytics.",
    heroImage: "/mesh/GRADIENT_FULL_1.png",
    overview:
      "ShopHub Platform is a next-generation e-commerce solution designed to transform retail experiences. The challenge was to create a platform that combines powerful merchant tools with an exceptional customer journey, seamlessly blending modern technology, intuitive UX, and conversion-focused design.",
    technologies: ["Next.js", "Node.js", "React", "PostgreSQL", "Stripe API"],
    problem:
      "Retailers struggled with fragmented systems and poor user experiences that hurt conversion.",
    approach: [
      "Built a unified platform integrating merchant tools with the customer-facing experience",
      "Implemented real-time payment processing and inventory management",
      "Designed responsive layouts with dark/light mode support",
    ],
    deliverables: [
      "A unified e-commerce platform with merchant dashboard",
      "Real-time payment and inventory modules",
      "Responsive storefront with dark/light mode",
    ],
    impact: [
      "Deployed to 150+ merchants with 10M+ monthly users",
      "Increased conversion rates by 35% through UX improvements",
      "Reduced checkout abandonment by 42%",
      "Achieved 99.9% uptime with 200ms average response time",
    ],
    lessonsLearned:
      "Gained deep expertise in e-commerce architecture, payment processing, and merchant-focused product design. Learned the importance of scalability from day one and how modern frontend frameworks can significantly improve user experience and business metrics.",
    projectImages: [
      "/mesh/GRADIENT_FULL_2.png",
      "/mesh/GRADIENT_FULL_3.png",
      "/mesh/GRADIENT_LINEAR_FULL.png",
    ],
    projectDetails: {
      client: "ShopHub",
      industry: "E-commerce",
      work: ["Frontend Development", "UI / UX Design", "Backend Integration"],
      date: "december 2024",
      githubUrl: "https://github.com/yourusername/shophub-platform",
    },
  },
  {
    id: "2",
    title: "SaaS Dashboard Development",
    slug: "saas-dashboard-development",
    description:
      "Building a comprehensive analytics dashboard for B2B applications",
    image: "/mesh/GRADIENT_N&B_1.png",
    tags: ["Frontend Development", "Dashboard", "Data Visualisation", "React"],
    category: "Development",
    month: "january",
    year: 2025,
    projectName: "Analytics Pro Dashboard",
    role: "Frontend Developer & Data Visualisation Specialist",
    heroDescription:
      "Analytics Pro is a powerful business intelligence tool on your desktop. It's a personal data analyst designed for enterprises that want to unlock insights from their data effortlessly. With real-time processing and intelligent visualisations, it seamlessly integrates into your workflow, delivering actionable insights at a glance.",
    heroImage: "/mesh/GRADIENT_N&B_1.png",
    overview:
      "Analytics Pro Dashboard is a sophisticated business intelligence platform designed to empower data-driven decision making. The challenge was to create an intuitive interface that transforms complex data into actionable insights, seamlessly blending advanced analytics, beautiful visualisations, and high-performance processing.",
    technologies: [
      "React",
      "D3.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
    ],
    problem:
      "Enterprise clients needed to understand complex datasets but struggled with data overload.",
    approach: [
      "Created an intuitive interface that transforms millions of data points into visual insights",
      "Implemented real-time data processing with sub-second query response times",
      "Built customisable widgets and drag-and-drop dashboard builders for flexibility",
    ],
    deliverables: [
      "A business intelligence dashboard with customisable widgets",
      "Real-time data processing pipeline",
      "Drag-and-drop dashboard builder",
    ],
    impact: [
      "Adopted by 200+ enterprise clients across multiple industries",
      "Processes 5M+ data points daily with 99.95% uptime",
      "Reduced data analysis time by 60% through intelligent visualisations",
      "Generated $2M+ annual recurring revenue within first 18 months",
    ],
    lessonsLearned:
      "Mastered complex data visualisation techniques and real-time processing at scale. Learned how thoughtful UI design can transform technical complexity into accessible insights, and the importance of performance optimisation in data-heavy applications.",
    projectImages: [
      "/mesh/GRADIENT_N&B_2.png",
      "/mesh/GRADIENT_N&B_3.png",
      "/mesh/GRADIENT_LINEAR_TWO.png",
    ],
    projectDetails: {
      client: "Analytics Pro",
      industry: "SaaS",
      work: [
        "Frontend Development",
        "Data Visualisation",
        "Backend Integration",
      ],
      date: "january 2025",
      githubUrl: "https://github.com/yourusername/analytics-pro-dashboard",
    },
  },
  {
    id: "3",
    title: "Luxury Fashion Brand Identity",
    slug: "luxury-fashion-brand-identity",
    description: "Complete branding system for a high-end fashion boutique",
    image: "/mesh/GRADIENT_ORANGE-WHITE_1.png",
    tags: ["Branding", "Brand Strategy", "Visual Design", "Luxury"],
    category: "Branding",
    month: "january",
    year: 2025,
    projectName: "Élégance Haute Couture",
    role: "Brand Strategist & Visual Designer",
    heroDescription:
      "Élégance is more than just a fashion brand. It's a lifestyle statement designed for those who appreciate true craftsmanship and timeless elegance. With heritage roots and contemporary vision, it seamlessly blends tradition with innovation, delivering luxury experiences that transcend trends.",
    heroImage: "/mesh/GRADIENT_ORANGE-WHITE_1.png",
    overview:
      "Élégance Haute Couture is a luxury fashion brand that required a complete visual identity system to reflect its premium positioning. The challenge was to create a cohesive brand experience that communicates sophistication, heritage, and contemporary relevance across all touchpoints.",
    technologies: [
      "Adobe Creative Suite",
      "Figma",
      "Typography Design",
      "Brand Guidelines",
      "Packaging Design",
    ],
    problem:
      "A luxury fashion brand needed a distinctive identity to stand out in a crowded premium market.",
    approach: [
      "Created custom typography and a refined colour palette inspired by haute couture aesthetics",
      "Developed a comprehensive visual language spanning digital and physical experiences",
      "Designed detailed brand guidelines ensuring consistency across all touchpoints",
    ],
    deliverables: [
      "A complete visual identity system and logo suite",
      "Custom typography and colour palette",
      "Brand guidelines documentation",
    ],
    impact: [
      "Brand recognition increased by 250% within first year",
      "Attracted global clientele across 15+ countries",
      "40% increase in retail foot traffic post-rebrand",
      "Won 3 international design awards for brand identity excellence",
    ],
    lessonsLearned:
      "Understood the power of strategic branding in luxury markets and how thoughtful design decisions can elevate a brand's entire perception. Learned to balance heritage with contemporary aesthetics, creating timeless brands that transcend seasonal trends.",
    projectImages: [
      "/mesh/GRADIENT_ORANGE-WHITE_2.png",
      "/mesh/GRADIENT_ORANGE-WHITE_3.png",
      "/mesh/GRADIENT_FULL_1.png",
    ],
    projectDetails: {
      client: "Élégance",
      industry: "Luxury Fashion",
      work: ["Branding", "Brand Strategy", "Visual Design"],
      date: "january 2025",
      githubUrl: "https://github.com/yourusername/elegance-brand-identity",
    },
  },
  {
    id: "4",
    title: "Mobile App for Fitness Tracking",
    slug: "fitness-tracking-app",
    description:
      "Native mobile application with real-time health monitoring features",
    image: "/mesh/GRADIENT_LINEAR_FULL.png",
    tags: ["Mobile Development", "UI / UX Design", "Health Tech", "Backend"],
    category: "Development",
    month: "february",
    year: 2025,
    projectName: "FitFlow Mobile App",
    role: "Full-Stack Mobile Developer",
    heroDescription:
      "FitFlow is more than just a fitness tracker. It's your personal coach in your pocket, designed for athletes who want to maximise their performance. With advanced metrics and AI-powered insights, it seamlessly integrates with your training, delivering real-time feedback and personalised recommendations.",
    heroImage: "/mesh/GRADIENT_LINEAR_FULL.png",
    overview:
      "FitFlow is a next-generation fitness tracking application designed to revolutionise how athletes train and recover. The challenge was to create an intuitive mobile experience that provides comprehensive health metrics while maintaining an engaging and motivational interface.",
    technologies: [
      "React Native",
      "Node.js",
      "TypeScript",
      "Firebase",
      "TensorFlow",
      "Wearables API",
    ],
    problem:
      "Athletes needed comprehensive fitness tracking that works seamlessly across devices.",
    approach: [
      "Built a React Native solution for iOS and Android with a seamless experience",
      "Integrated with popular wearables for automatic data synchronisation",
      "Implemented AI algorithms for personalised training recommendations",
    ],
    deliverables: [
      "Native iOS and Android apps",
      "Wearables integration for automatic sync",
      "AI-powered training recommendation engine",
    ],
    impact: [
      "500K+ downloads with 4.8-star average rating across app stores",
      "50K+ active daily users tracking workouts and health metrics",
      "Reduced injury rates by 35% through predictive insights",
      "Generated $1.2M+ in revenue through premium subscriptions and partnerships",
    ],
    lessonsLearned:
      "Mastered cross-platform mobile development and real-time data synchronisation. Learned the importance of user engagement in fitness apps and how AI-powered insights can drive adoption and retention. Gained expertise in integrating with wearable ecosystems.",
    projectImages: [
      "/mesh/GRADIENT_LINEAR_TWO.png",
      "/mesh/GRADIENT_FULL_2.png",
      "/mesh/GRADIENT_N&B_1.png",
    ],
    projectDetails: {
      client: "FitFlow",
      industry: "Health & Fitness",
      work: ["Mobile Development", "UI / UX Design", "Backend Integration"],
      date: "february 2025",
      githubUrl: "https://github.com/yourusername/fitflow-mobile-app",
    },
  },
];
