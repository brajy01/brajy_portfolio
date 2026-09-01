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
  // Id of the chapter this step follows. This is the only placement control:
  // the grouped layouts collect every step into one band at the first anchor,
  // the interleaved layout emits one band per anchor between the chapters.
  after?: string;
}

// One block of a case-study chapter. `lead` renders as a bold inline opener
// ("Built:", "The users.", or a one-line design decision). `kind` is optional
// on text blocks so the common case stays a plain { text } literal.
export type ChapterBlock =
  | { kind?: "text"; lead?: string; text: string }
  | { kind: "list"; items: string[] };

// A titled chapter of the case study. Every project is a flat, ordered list of
// these: there is no second narrative model and no section that only some
// projects get. A thin project is simply a short list.
export interface Chapter {
  id: string; // stable anchor slug, also used as the React key
  heading: string;
  blocks: ChapterBlock[];
}

// A headline figure for the "at a glance" block. Only for numbers that are
// genuinely measured: a project without them renders no block at all.
export interface Metric {
  value: string;
  label: string;
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
  technologies: string[];
  // The case study itself: one ordered list of chapters, with the walkthrough
  // steps placed relative to them via ShowcaseItem.after.
  chapters: Chapter[];
  showcase?: ShowcaseItem[];
  metrics?: Metric[];
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
      "A data tool to run the picking operation of a 440-tonne strawberry and raspberry farm, tracking harvest volumes and picker productivity with end-of-season forecasting",
    imageMesh: "orange",
    tags: ["Python", "SQL", "React", "Forecasting"],
    category: "Development",
    month: "february",
    year: 2025,
    projectName: "CROPIA - Harvest Operations Dashboard",
    role: "Business Analysis & Solution Design",
    heroDescription:
      "Cropia runs the daily picking operation of a 440-tonne strawberry and raspberry farm: around 60 plots, 20 varieties, and a product that has to be sold the day it is picked. I designed and built it for the business I had spent four years working in. It is now used every day by four people across four different jobs.",
    heroMesh: "full",
    technologies: ["Python (Pandas, NumPy)", "SQL", "React", "Forecasting"],
    // Figures that come straight from the operation, not from analytics.
    metrics: [
      { value: "440 t", label: "_per year" },
      { value: "~60", label: "_plots" },
      { value: "20", label: "_varieties" },
      { value: "4", label: "_daily users" },
    ],
    chapters: [
      {
        id: "the-business",
        heading: "The business",
        blocks: [
          {
            text: "A fruit farm makes one decision every morning: how much to pick today. Pick too much and the fruit is unsold and gone within two days. Pick too little and you cannot supply the buyer negotiating price and volume at six in the morning.",
          },
          {
            text: "That decision depends on three things: what is already in the cold store, what is committed to sell today, and what each plot is likely to give. Around 60 plots, 20 varieties, 440 tonnes a year, 50+ seasonal pickers at peak. Yield varies from plot to plot, and even between the top and the bottom of the same plot, depending on soil, planting density and the age of the plants.",
          },
        ],
      },
      {
        id: "what-was-happening",
        heading: "What was actually happening",
        blocks: [
          {
            text: "Two systems that did not talk to each other. Picking was entered into a program written in Pascal twenty years ago. Everything else lived in a Google Sheets I had set up four years earlier, which the team used every day.",
          },
          {
            text: "In practice that meant a physical loop. To check the day's figures you drove to the cold store, printed the picking sheets, came back to the house, opened the spreadsheet and checked the two matched. My father did it. I did it. Every day, and again at midday to check sales.",
          },
          {
            text: "The second friction was smaller and constant. To price a sale, the salesperson opened the current week's sheet, then opened last week's in a second tab, to see what that client had paid and where prices were going.",
          },
        ],
      },
      {
        id: "constraints",
        heading: "Constraints",
        blocks: [
          {
            lead: "The users.",
            text: "Four people who are not comfortable with software and who had been using the same spreadsheet daily for four years. Anything that asked them to relearn how they work would not get used, whatever it did.",
          },
          {
            lead: "One developer.",
            text: "Me. No team, no design phase, no budget.",
          },
          {
            lead: "The history.",
            text: "Ten years of production records, all extracted from the same Pascal program but in two different shapes, before and after an update I had asked the original developer for. Neither shape was clean. Before any of it could support a forecast, it had to be reconciled into one consistent history.",
          },
        ],
      },
      {
        id: "built-and-not",
        heading: "What I built, and what I did not",
        blocks: [
          {
            lead: "Built:",
            text: "picking, planting, sales, invoicing, stock, and plot-level forecasting.",
          },
          {
            lead: "Left out:",
            text: "plant protection records, and per-plot tracking of what each employee did. Plant protection would not have been difficult, which is precisely why I had to be deliberate about it. The tool needed to do the core of the business properly, and be trusted doing it, before it did anything else. When I moved abroad we agreed to drop it rather than build it remotely.",
          },
          {
            lead: "Taken further than the immediate need:",
            text: "team invitations and permissions, and the beginnings of a multi-entity structure that would let a cooperative manage several farms. That part is not finished. I built it because the problem is not specific to one farm, and I did not want the data model to rule that out later.",
          },
        ],
      },
      {
        id: "what-i-got-wrong",
        heading: "What I got wrong",
        blocks: [
          {
            text: "Two things, both pointed out by someone else. My uncle works in IT and I asked him to look at what I had built.",
          },
          {
            text: "I had modelled access as broad roles: salesperson, crop manager, picker, data entry. That maps to how the farm is organised, which is why it felt right. It is also wrong, because a role describes a person and what you actually need to control is an action. As soon as one person wears two hats, or another farm organises itself differently, roles break. Access is now set per item, with read, write and edit separated, and the same granularity applied to the admin section.",
          },
          {
            text: "I had also built the navigation hierarchy around data entry, fruit down to variety down to plot, and then found I could not query in the other direction. Weight by variety, weight by plot, and the cascade got in the way. A hierarchy optimised for entering data is not a hierarchy for analysing it, and the tool needed both. Filters now work in both directions.",
          },
          {
            text: "Both are implemented and in production.",
          },
        ],
      },
      {
        id: "where-it-stands",
        heading: "Where it stands",
        blocks: [
          {
            text: "Cropia is used daily by four people covering four jobs: the farm manager, the salesperson, the crop manager and invoicing, plus a separate entry account in the cold store. The Pascal program has been retired.",
          },
          {
            text: "It is in its first full harvest season, and it has run for two months without a change. The yield data is starting to feed planting decisions for next season: which plots and varieties performed, and what gets replanted.",
          },
        ],
      },
      {
        id: "differently",
        heading: "What I would do differently",
        blocks: [
          {
            text: "Both corrections above are things I would now design in from the start: permissions modelled as actions rather than roles, and an analysis hierarchy sitting alongside the entry hierarchy. Neither is a hard idea. I just did not see them until the tool was in real use and someone from outside asked the right question.",
          },
          {
            text: "The wider lesson is the one that moved me out of operations. Most of the problems I had spent four years solving by hand were data problems. Once the data was in one place and could be queried, the operational decisions got easier on their own.",
          },
        ],
      },
    ],
    // The five design decisions carry the visual walkthrough, sitting together
    // after the constraints chapter (add `image` when the anonymised captures
    // exist).
    showcase: [
      {
        label: "the interface",
        title: "I made the new interface look like the old spreadsheet",
        body: "Deliberately. The Google Sheets was not elegant, but it was understood. My earlier attempts at a different layout were worse, and the moment I designed the screens around the sheet the team already knew, adoption stopped being a question. Familiarity was worth more here than a better-looking interface.",
        after: "constraints",
      },
      {
        label: "cascading filters",
        title: "Cascading filters instead of one long list",
        body: "Selecting a plot used to mean scrolling a very long list: every variety, and inside each variety every plot growing it. Now you pick a fruit, strawberry or raspberry, which narrows to its varieties, which narrows to its plantings. The final list is a few lines. It is the single most repeated action in the tool, so it was the first thing to fix.",
        after: "constraints",
      },
      {
        label: "price history",
        title: "Price history where the decision is made",
        body: "When you create a sale and select a client, the price history for that client and product appears below the form as a curve. No second tab, no last week's sheet. The information arrives at the moment the price is being decided.",
        after: "constraints",
      },
      {
        label: "stock",
        title: "Stock as a daily loop",
        body: "Picking minus sales gives a theoretical closing stock. It is checked against the cold room in the evening and carried into the next morning, where it sets how much needs to be picked. That loop is the operation, so the tool is built around it rather than around reporting.",
        after: "constraints",
      },
      {
        label: "forecasting",
        title: "Forecasting at plot level",
        body: "Forecasting by variety would hide what matters, because two plots of the same variety do not yield the same and neither do the two ends of one plot. The forecast combines supplier yield curves with each plot's own history, and rolls up to variety or to the whole farm when a wider view is needed.",
        after: "constraints",
      },
    ],
    // No real screenshots yet: the detail hero shows an honest mesh
    // placeholder and the gallery stays empty until they exist.
    projectImages: [],
    projectDetails: {
      client: "Etablissement Brajon Frères",
      industry: "Agriculture / Food production",
      work: ["Process Mapping", "Data Modelling", "Dashboard Development"],
      date: "February 2025 - Present",
      liveUrl: "https://www.cropia.fr",
    },
  },
  {
    id: "2",
    title: "Dental Practice Website - Barbara Freitas",
    slug: "barbara-freitas",
    description:
      "Website and SEO for Dr. Barbara Freitas, a dental therapist who had no online presence",
    image: "/projects/barbara-freitas/homepage.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Design",
    month: "february",
    year: 2025,
    projectName: "Dental Practice Website - Barbara Freitas",
    role: "Web Designer & SEO",
    heroDescription:
      "Barbara Freitas is a dental therapist. I took her from no online presence at all to a calm, trustworthy website that the right patients actually find on Google.",
    heroImage: "/projects/barbara-freitas/hero.jpg",
    heroOverlayMesh: "full",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    // No metrics: the practice has no measured traffic or conversion data, so
    // the "at a glance" block is omitted rather than filled with guesses.
    chapters: [
      {
        id: "the-challenge",
        heading: "The Challenge",
        blocks: [
          {
            text: "Barbara relied entirely on word of mouth. The brief was a calm, fast site that earns trust at a glance and, above all, gets found by the right patients in search, including the Portuguese-speaking and Brazilian community she serves.",
          },
          {
            text: "Patients had no way to find her, see her work, or get in touch. And without a professional online presence, the practice lacked the credibility people look for when choosing a dentist.",
          },
        ],
      },
      {
        id: "the-impact",
        heading: "The Impact",
        blocks: [
          {
            kind: "list",
            items: [
              "She went from no website at all to a real, findable online presence",
              "The SEO reaches the right audience: she has had enquiries from patients, including Brazilian patients, who found the practice through search",
              "The practice finally looks as professional online as Barbara is in person",
            ],
          },
        ],
      },
      {
        id: "lessons-learned",
        heading: "Lessons Learned",
        blocks: [
          {
            text: "Building it in React gives me full control over performance and structure, and the room to extend the site as the practice grows. The bigger lesson, though, was how much trust drives every choice in healthcare: if a detail doesn't make a patient feel safe, it doesn't belong.",
          },
        ],
      },
    ],
    showcase: [
      {
        label: "homepage",
        title: "A calm first impression",
        body: "Healthcare is about trust. The homepage leads with Barbara herself, one message, and a single call to action.",
        image: "/projects/barbara-freitas/homepage.jpg",
        imageAlt: "Barbara Freitas homepage: portrait, intro and booking call to action",
        url: "barbarafreitas.com",
        after: "the-challenge",
      },
      {
        label: "clinical cases",
        title: "The work speaks for itself",
        body: "A before-and-after gallery of real treatments, each case written up in plain language, so new patients can see outcomes before they book.",
        image: "/projects/barbara-freitas/clinical-cases.jpg",
        imageAlt: "Clinical cases gallery with before-and-after treatment photos",
        url: "barbarafreitas.com",
        after: "the-challenge",
      },
      {
        label: "seo",
        title: "Found by the right patients",
        body: "Local SEO plus Portuguese-language optimisation, so the community she serves actually finds her on Google.",
        after: "the-impact",
      },
      {
        label: "contact",
        title: "One tap to WhatsApp",
        body: "The message is pre-written, the patient just hits send. Enquiries land directly with Barbara.",
        image: "/projects/barbara-freitas/contact.jpg",
        imageAlt: "Contact page with portrait and enquiry form",
        url: "barbarafreitas.com",
        after: "the-impact",
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
