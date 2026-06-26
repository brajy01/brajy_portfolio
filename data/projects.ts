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
    id: "1",
    title: "Harvest Operations Dashboard",
    slug: "harvest-operations-dashboard",
    description:
      "A data tool to run the picking operation of a 400+ tonne strawberry farm, tracking harvest volumes and picker productivity with end-of-season forecasting",
    image: "/mesh/GRADIENT_ORANGE-WHITE_1.png",
    tags: ["Python", "SQL", "React", "Forecasting"],
    category: "Development",
    month: "march",
    year: 2026,
    projectName: "Harvest Operations Dashboard",
    role: "Data Analyst & Full-Stack Developer",
    heroDescription:
      "A data tool I built to run the picking operation of a 400+ tonne strawberry farm: tracking harvest volumes and picker productivity across a 50+ person seasonal team, with forecasting to project end-of-season output and feed planting decisions for the following year.",
    heroImage: "/mesh/GRADIENT_FULL_1.png",
    overview:
      "I was managing the operation, and the existing tracking (spreadsheets and Notion) could not keep up with the volume of daily harvest and labour data. I built an end-to-end tool to centralise that data, make it queryable, and forecast where the season was heading, so planning stopped relying on manual tallies.",
    technologies: ["Python (Pandas, NumPy)", "SQL", "React"],
    problem:
      "Daily picking produced a lot of data (volumes per picker, per plot, per day, plus labour) spread across disconnected spreadsheets. There was no quick way to see who was productive, how each plot was yielding, or where the season would land.",
    approach: [
      "Built a Python pipeline (Pandas, NumPy) to ingest and clean daily harvest and labour records",
      "Modelled and stored the data in SQL so it could be queried instead of re-entered",
      "Built a React interface to visualise picker productivity and per-plot yields across the season",
      "Added forecasting to project end-of-season volumes from in-season picking data",
    ],
    deliverables: [
      "A central data model for harvest, labour and yield data",
      "Dashboards tracking picker productivity and per-plot yield across the season",
      "Forecasts of end-of-season volume",
    ],
    impact: [
      "Replaced manual spreadsheet tracking with a single queryable system",
      "Gives in-season visibility into picker productivity and per-plot yields that was not available before",
      "In its first season, the yield data is starting to inform planting decisions for the next year: identifying which plots and varieties performed well to guide what gets replanted",
    ],
    lessonsLearned:
      "Building this is what convinced me that operational problems are often data problems. It moved me from running operations to wanting to build the systems behind them, which is the direction I am taking now.",
    projectImages: [
      "/mesh/GRADIENT_ORANGE-WHITE_2.png",
      "/mesh/GRADIENT_ORANGE-WHITE_3.png",
      "/mesh/GRADIENT_FULL_3.png",
    ],
    projectDetails: {
      client: "Self-initiated (Ets Brajon)",
      industry: "Agriculture / Food production",
      work: [
        "Data Pipeline",
        "Data Modelling",
        "Forecasting",
        "Dashboard Development",
      ],
      date: "March 2026 - Present",
    },
  },
  {
    id: "2",
    title: "Dental Practice Website - Barbara Freitas",
    slug: "barbara-freitas",
    description:
      "Website and SEO for Dr. Barbara Freitas, a dental therapist on the Isle of Man who had no online presence",
    image: "/projects/barbara-freitas/card.jpg",
    overlayImage: "/mesh/GRADIENT_FULL_2.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Design",
    month: "february",
    year: 2025,
    projectName: "Dental Practice Website - Barbara Freitas",
    role: "Web Designer & SEO",
    heroDescription:
      "Barbara Freitas is a dental therapist on the Isle of Man who had no website at all. I built her a clean, trustworthy presence that puts the practice on the map, with SEO that reaches the right patients in search, including the Portuguese-speaking and Brazilian community she serves.",
    heroImage: "/projects/barbara-freitas/hero.jpg",
    heroOverlayImage: "/mesh/GRADIENT_FULL_2.png",
    overview:
      "Barbara had no website and relied on word of mouth. The goal was a clean, fast site that presents her practice clearly and, above all, gets found by the right patients in search, including the Portuguese-speaking community she serves. I kept the design calm and trustworthy, added a before-and-after gallery so her work speaks for itself, and a one-tap WhatsApp contact so enquiries land directly with her.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    problem:
      "With no website, patients on the Isle of Man had no way to find Barbara, see her work, or get in touch. And without a professional presence, the practice didn't have the credibility people look for when they pick a dentist.",
    approach: [
      "I kept the design calm and clean, so the practice feels professional and easy to trust at a glance",
      "I added a one-tap WhatsApp button: it opens a message that's already written, so the patient just hits send",
      "I built a before-and-after gallery of real treatments to let her work speak for itself",
      "I tuned the SEO, including Portuguese-language optimisation, so the right patients on the island actually find her on Google",
    ],
    deliverables: [
      "A responsive site with the pages she needed: home, services, about and contact",
      "A before-and-after gallery of real dental treatments",
      "A one-tap WhatsApp contact with a ready-to-send message",
      "Local and Portuguese-language SEO so the right patients find the practice in search",
    ],
    impact: [
      "She went from no website at all to a real, findable online presence",
      "Patients now reach her straight from the site, in a single tap",
      "The SEO reaches the right audience: she has had enquiries from patients, including Brazilian patients, who found the practice through search",
      "The practice finally looks as professional online as Barbara is in person",
    ],
    lessonsLearned:
      "Building it in React gives me full control over performance and structure, and the room to extend the site as the practice grows. The bigger lesson, though, was how much trust drives every choice in healthcare: if a detail doesn't make a patient feel safe, it doesn't belong.",
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
      work: ["Web Design", "Local SEO", "Portuguese SEO"],
      date: "February 2025",
      liveUrl: "https://barbarafreitas.com",
    },
  },
];
