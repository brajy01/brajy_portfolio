export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  month: string;
  year: number;
  // Detail page content
  projectName: string;
  role: string;
  heroDescription: string;
  heroImage: string;
  overview: string;
  technologies: string[];
  problemApproach: string[];
  impact: string[];
  lessonsLearned: string;
  projectImages: string[];
  projectDetails: {
    client: string;
    industry: string;
    work: string[];
    date: string;
    githubUrl?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform Redesign",
    slug: "ecommerce-platform-redesign",
    description: "Complete overhaul of an online retail platform with improved UX",
    image: "/mesh/GRADIENT_FULL_1.png",
    tags: ["UI / UX Design", "Frontend Development", "E-commerce", "Web App"],
    category: "Design",
    month: "december",
    year: 2024,
    projectName: "ShopHub Platform",
    role: "Full-Stack Developer",
    heroDescription: "ShopHub is not just an e-commerce platform. It's a complete shopping experience designed for modern retailers. With cutting-edge technology and intuitive design, it seamlessly integrates into your business, delivering seamless customer journeys and powerful analytics.",
    heroImage: "/mesh/GRADIENT_FULL_1.png",
    overview: "ShopHub Platform is a next-generation e-commerce solution designed to transform retail experiences. The challenge was to create a platform that combines powerful merchant tools with an exceptional customer journey, seamlessly blending modern technology, intuitive UX, and conversion-focused design.",
    technologies: ["Next.js", "Node.js", "React", "PostgreSQL", "Stripe API"],
    problemApproach: [
      "Retailers struggled with fragmented systems and poor user experiences",
      "Built a unified platform integrating merchant tools with customer-facing experience",
      "Implemented real-time payment processing and inventory management",
      "Designed responsive layouts with dark/light mode support"
    ],
    impact: [
      "Deployed to 150+ merchants with 10M+ monthly users",
      "Increased conversion rates by 35% through UX improvements",
      "Reduced checkout abandonment by 42%",
      "Achieved 99.9% uptime with 200ms average response time"
    ],
    lessonsLearned: "Gained deep expertise in e-commerce architecture, payment processing, and merchant-focused product design. Learned the importance of scalability from day one and how modern frontend frameworks can significantly improve user experience and business metrics.",
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
    description: "Building a comprehensive analytics dashboard for B2B applications",
    image: "/mesh/GRADIENT_N&B_1.png",
    tags: ["Frontend Development", "Dashboard", "Data Visualization", "React"],
    category: "Development",
    month: "january",
    year: 2025,
    projectName: "Analytics Pro Dashboard",
    role: "Frontend Developer & Data Visualization Specialist",
    heroDescription: "Analytics Pro is a powerful business intelligence tool on your desktop. It's a personal data analyst designed for enterprises that want to unlock insights from their data effortlessly. With real-time processing and intelligent visualizations, it seamlessly integrates into your workflow, delivering actionable insights at a glance.",
    heroImage: "/mesh/GRADIENT_N&B_1.png",
    overview: "Analytics Pro Dashboard is a sophisticated business intelligence platform designed to empower data-driven decision making. The challenge was to create an intuitive interface that transforms complex data into actionable insights, seamlessly blending advanced analytics, beautiful visualizations, and high-performance processing.",
    technologies: ["React", "D3.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    problemApproach: [
      "Enterprise clients needed to understand complex datasets but struggled with data overload",
      "Created an intuitive interface that transforms millions of data points into visual insights",
      "Implemented real-time data processing with sub-second query response times",
      "Built customizable widgets and drag-and-drop dashboard builders for flexibility"
    ],
    impact: [
      "Adopted by 200+ enterprise clients across multiple industries",
      "Processes 5M+ data points daily with 99.95% uptime",
      "Reduced data analysis time by 60% through intelligent visualizations",
      "Generated $2M+ annual recurring revenue within first 18 months"
    ],
    lessonsLearned: "Mastered complex data visualization techniques and real-time processing at scale. Learned how thoughtful UI design can transform technical complexity into accessible insights, and the importance of performance optimization in data-heavy applications.",
    projectImages: [
      "/mesh/GRADIENT_N&B_2.png",
      "/mesh/GRADIENT_N&B_3.png",
      "/mesh/GRADIENT_LINEAR_TWO.png",
    ],
    projectDetails: {
      client: "Analytics Pro",
      industry: "SaaS",
      work: ["Frontend Development", "Data Visualization", "Backend Integration"],
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
    heroDescription: "Élégance is more than just a fashion brand. It's a lifestyle statement designed for those who appreciate true craftsmanship and timeless elegance. With heritage roots and contemporary vision, it seamlessly blends tradition with innovation, delivering luxury experiences that transcend trends.",
    heroImage: "/mesh/GRADIENT_ORANGE-WHITE_1.png",
    overview: "Élégance Haute Couture is a luxury fashion brand that required a complete visual identity system to reflect its premium positioning. The challenge was to create a cohesive brand experience that communicates sophistication, heritage, and contemporary relevance across all touchpoints.",
    technologies: ["Adobe Creative Suite", "Figma", "Typography Design", "Brand Guidelines", "Packaging Design"],
    problemApproach: [
      "Luxury fashion market required a distinctive identity that stands out among competitors",
      "Created custom typography and refined color palette inspired by haute couture aesthetics",
      "Developed comprehensive visual language spanning digital and physical experiences",
      "Designed detailed brand guidelines ensuring consistency across all touchpoints"
    ],
    impact: [
      "Brand recognition increased by 250% within first year",
      "Attracted global clientele across 15+ countries",
      "40% increase in retail foot traffic post-rebrand",
      "Won 3 international design awards for brand identity excellence"
    ],
    lessonsLearned: "Understood the power of strategic branding in luxury markets and how thoughtful design decisions can elevate a brand's entire perception. Learned to balance heritage with contemporary aesthetics, creating timeless brands that transcend seasonal trends.",
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
    description: "Native mobile application with real-time health monitoring features",
    image: "/mesh/GRADIENT_LINEAR_FULL.png",
    tags: ["Mobile Development", "UI / UX Design", "Health Tech", "Backend"],
    category: "Development",
    month: "february",
    year: 2025,
    projectName: "FitFlow Mobile App",
    role: "Full-Stack Mobile Developer",
    heroDescription: "FitFlow is more than just a fitness tracker. It's your personal coach in your pocket, designed for athletes who want to maximize their performance. With advanced metrics and AI-powered insights, it seamlessly integrates with your training, delivering real-time feedback and personalized recommendations.",
    heroImage: "/mesh/GRADIENT_LINEAR_FULL.png",
    overview: "FitFlow is a next-generation fitness tracking application designed to revolutionize how athletes train and recover. The challenge was to create an intuitive mobile experience that provides comprehensive health metrics while maintaining an engaging and motivational interface.",
    technologies: ["React Native", "Node.js", "TypeScript", "Firebase", "TensorFlow", "Wearables API"],
    problemApproach: [
      "Athletes needed comprehensive fitness tracking that works across devices",
      "Built React Native solution for iOS and Android with seamless experience",
      "Integrated with popular wearables for automatic data synchronization",
      "Implemented AI algorithms for personalized training recommendations"
    ],
    impact: [
      "500K+ downloads with 4.8-star average rating across app stores",
      "50K+ active daily users tracking workouts and health metrics",
      "Reduced injury rates by 35% through predictive insights",
      "Generated $1.2M+ in revenue through premium subscriptions and partnerships"
    ],
    lessonsLearned: "Mastered cross-platform mobile development and real-time data synchronization. Learned the importance of user engagement in fitness apps and how AI-powered insights can drive adoption and retention. Gained expertise in integrating with wearable ecosystems.",
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
  {
    id: "5",
    title: "Marks Uhren - Reimagining and Relaunching a Luxury Watch Boutique",
    slug: "marks-uhren",
    description: "Complete rebranding and digital transformation of a luxury watch retailer",
    image: "/mesh/GRADIENT_FULL_2.png",
    tags: ["Branding", "Brand Strategy", "Frontend Development", "UI / UX Design"],
    category: "Luxury",
    month: "february",
    year: 2025,
    projectName: "Marks Uhren",
    role: "Full-Stack Designer & Developer",
    heroDescription: "Marks Uhren is more than just a watch retailer. It's a gateway to horological excellence, curated for connoisseurs who understand the craft. With rare timepieces and expert guidance, it seamlessly connects collectors with their next prized possession, delivering exceptional experiences in the world of haute horlogerie.",
    heroImage: "/mesh/GRADIENT_FULL_2.png",
    overview: "Marks Uhren is a prestigious luxury watch boutique that underwent complete digital transformation to establish itself as a leader in fine timepiece retail. The challenge was to reimagine the brand identity and create a digital experience that reflects the sophistication, expertise, and exclusivity of luxury horology.",
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "Shopify", "Adobe Creative Suite"],
    problemApproach: [
      "Legacy brand needed complete repositioning in competitive luxury watch market",
      "Redesigned brand identity to communicate expertise, exclusivity, and craftsmanship",
      "Built luxury e-commerce platform with expert consultation booking system",
      "Integrated inventory management with real-time product availability and pricing"
    ],
    impact: [
      "Increased online sales by 320% within first 6 months post-launch",
      "Attracted collectors from 45+ countries through new digital presence",
      "Average order value increased by 180% through improved product presentation",
      "Ranked #1 in luxury watch retail SEO within competitive market"
    ],
    lessonsLearned: "Gained deep expertise in luxury brand positioning and high-end e-commerce. Learned how to balance aesthetics with functionality and the importance of understanding niche markets. Discovered how strategic branding combined with technical excellence can completely transform a business.",
    projectImages: [
      "/mesh/GRADIENT_FULL_3.png",
      "/mesh/GRADIENT_ORANGE-WHITE_1.png",
      "/mesh/GRADIENT_N&B_2.png",
    ],
    projectDetails: {
      client: "Marks Uhren",
      industry: "Luxury Watches",
      work: ["Branding", "Brand Strategy", "Frontend Development", "UI / UX Design"],
      date: "february 2025",
      githubUrl: "https://github.com/yourusername/marks-uhren-ecommerce",
    },
  },
];
