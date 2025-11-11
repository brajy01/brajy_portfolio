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
  },
];
