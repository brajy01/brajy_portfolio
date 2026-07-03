import type { MeshVariant } from "@/components/ui/mesh-placeholder";

// One step of the project walkthrough: alternating sticky text + framed
// screenshot rows. `image` is optional on purpose — only add one when a
// screenshot genuinely helps explain the step.
export interface ShowcaseItem {
  label: string; // rendered as "_01 » label"
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  url?: string; // mono URL in the browser-frame bar
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  // Real screenshot when it exists; otherwise imageMesh renders a CSS mesh
  // placeholder (honest stand-in until real screenshots are shot).
  image?: string;
  imageMesh?: MeshVariant;
  overlayMesh?: MeshVariant;
  tags: string[];
  category: string;
  month: string;
  year: number;
  // Detail page content
  projectName: string;
  role: string;
  heroDescription: string;
  heroImage?: string;
  heroMesh?: MeshVariant;
  heroOverlayMesh?: MeshVariant;
  overview: string;
  technologies: string[];
  // Portfolio narrative. Answers: What was the problem? How did you solve it?
  // What did you deliver? What impact? (So what?)
  problem: string;
  approach: string[];
  deliverables: string[];
  impact: string[];
  lessonsLearned: string;
  showcase?: ShowcaseItem[];
  projectImages: string[];
  projectOverlayMeshes?: MeshVariant[];
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
    title: "CROPIA - Harvest Operations Dashboard",
    slug: "harvest-operations-dashboard",
    description:
      "A data tool to run the picking operation of a 400+ tonne strawberry farm, tracking harvest volumes and picker productivity with end-of-season forecasting",
    imageMesh: "orange",
    tags: ["Python", "SQL", "React", "Forecasting"],
    category: "Development",
    month: "march",
    year: 2026,
    projectName: "CROPIA - Harvest Operations Dashboard",
    role: "Data Analyst & Full-Stack Developer",
    heroDescription:
      "CROPIA is a data tool I built to run the picking operation of a 400+ tonne strawberry farm: tracking harvest volumes and picker productivity across a 50+ person seasonal team, with forecasting to project end-of-season output and feed planting decisions for the following year.",
    heroMesh: "full",
    overview:
      "I was managing the operation, and the existing tracking (spreadsheets and Notion) could not keep up with the volume of daily harvest and labour data. I built CROPIA, an end-to-end tool to centralise that data, make it queryable, and forecast where the season was heading, so planning stopped relying on manual tallies.",
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
    // No real screenshots yet: the detail hero shows an honest mesh
    // placeholder and the gallery stays empty until they exist.
    projectImages: [],
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
      liveUrl: "https://www.cropia.fr",
    },
  },
  {
    id: "2",
    title: "Dental Practice Website - Barbara Freitas",
    slug: "barbara-freitas",
    description:
      "Website and SEO for Dr. Barbara Freitas, a dental therapist on the Isle of Man who had no online presence",
    image: "/projects/barbara-freitas/homepage.jpg",
    overlayMesh: "full",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Design",
    month: "february",
    year: 2025,
    projectName: "Dental Practice Website - Barbara Freitas",
    role: "Web Designer & SEO",
    heroDescription:
      "Barbara Freitas is a dental therapist on the Isle of Man who had no website at all. I built her a clean, trustworthy presence that puts the practice on the map, with SEO that reaches the right patients in search, including the Portuguese-speaking and Brazilian community she serves.",
    heroImage: "/projects/barbara-freitas/hero.jpg",
    heroOverlayMesh: "full",
    overview:
      "Barbara had no website and relied on word of mouth. The goal was a calm, fast site that puts her practice on the map and, above all, gets found by the right patients in search, including the Portuguese-speaking community she serves.",
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
      "The SEO reaches the right audience: she has had enquiries from patients, including Brazilian patients, who found the practice through search",
      "The practice finally looks as professional online as Barbara is in person",
    ],
    lessonsLearned:
      "Building it in React gives me full control over performance and structure, and the room to extend the site as the practice grows. The bigger lesson, though, was how much trust drives every choice in healthcare: if a detail doesn't make a patient feel safe, it doesn't belong.",
    showcase: [
      {
        label: "homepage",
        title: "A calm first impression",
        body: "Healthcare is about trust. The homepage leads with Barbara herself, one message, and a single call to action.",
        image: "/projects/barbara-freitas/homepage.jpg",
        imageAlt: "Barbara Freitas homepage: portrait, intro and booking call to action",
        url: "barbarafreitas.com",
      },
      {
        label: "clinical cases",
        title: "The work speaks for itself",
        body: "A before-and-after gallery of real treatments, each case written up in plain language, so new patients can see outcomes before they book.",
        image: "/projects/barbara-freitas/clinical-cases.jpg",
        imageAlt: "Clinical cases gallery with before-and-after treatment photos",
        url: "barbarafreitas.com",
      },
      {
        label: "seo",
        title: "Found by the right patients",
        body: "Local SEO plus Portuguese-language optimisation, so the community she serves actually finds her on Google.",
      },
      {
        label: "contact",
        title: "One tap to WhatsApp",
        body: "The message is pre-written, the patient just hits send. Enquiries land directly with Barbara.",
        image: "/projects/barbara-freitas/contact.jpg",
        imageAlt: "Contact page with portrait and enquiry form",
        url: "barbarafreitas.com",
      },
    ],
    projectImages: [],
    projectDetails: {
      client: "Dr. Barbara Freitas",
      industry: "Healthcare / Dentistry",
      work: ["Web Design", "Local SEO", "Portuguese SEO"],
      date: "February 2025",
      liveUrl: "https://barbarafreitas.com",
    },
  },
];
