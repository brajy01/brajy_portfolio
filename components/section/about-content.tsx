"use client";

import { ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import MeshPlaceholder from "@/components/ui/mesh-placeholder";
import BulletList from "@/components/ui/bullet-list";
import SectionHeading from "@/components/ui/section-heading";

interface SkillGroup {
  category: string;
  items: string[];
}

interface ExperienceEntry {
  id: number;
  position: string;
  company: string;
  period: string;
  highlights: string[];
  skills: SkillGroup[];
}

interface EducationEntry {
  id: number;
  program: string;
  institution: string;
  period: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceEntry[] = [
  {
    id: 1,
    position: "Operations Analytics — Independent Project",
    company: "Brajy (self-directed)",
    period: "Feb. 2025 - Present",
    highlights: [
      "Building an end-to-end analytics and management tool for the fruit production business I previously ran",
      "Consolidated legacy sources (Excel, Notion, paper) into one structured dataset, cleaning 10 years of inconsistent production records",
      "Built a daily operational dashboard tracking harvests, sales and projected stock",
      "Set up KPI tracking for yield and labour productivity",
      "Developed a harvest forecast model combining theoretical yield curves from plant suppliers with historical field performance",
    ],
    skills: [
      {
        category: "Data & Analytics",
        items: [
          "Python (Pandas, NumPy)",
          "SQL (PostgreSQL)",
          "Time Series Forecasting",
          "KPI Development",
          "Power BI (in progress)",
        ],
      },
      {
        category: "Web Development",
        items: ["React", "Next.js", "TypeScript"],
      },
    ],
  },
  {
    id: 2,
    position: "Sales & Operations Manager",
    company: "Etablissement Brajon Frères — Cendrieux, France",
    period: "Jan. 2021 - Jan. 2025",
    highlights: [
      "Managed operations and a 50-person international seasonal team through peak production (400+ tonnes strawberries, 40+ tonnes raspberries a year)",
      "Set up shared tracking in Google Sheets and Notion, updated twice daily, so the whole team worked from the same live stock and harvest figures instead of paper",
      "Automated scheduling, workforce tracking and stock monitoring with connected Google tools (AppSheet)",
      "Negotiated daily prices and volumes with retail buyers (Système U, Grand Frais)",
      "Saw operational problems come down to better data systems, which sparked my move into data and BI",
    ],
    skills: [
      {
        category: "Data & Analytics",
        items: [
          "Excel (Advanced)",
          "Data Visualisation",
          "KPI Development",
          "Exploratory Data Analysis",
        ],
      },
      {
        category: "Business & Operations",
        items: [
          "Data-Driven Operations",
          "Cost Modeling",
          "Supply Chain Analytics",
          "Process Automation",
          "Performance Metrics",
        ],
      },
    ],
  },
  {
    id: 3,
    position: "Technical Recruiter",
    company: "Maltem Consulting Group — Brussels, Belgium",
    period: "Dec. 2019 - Dec. 2020",
    highlights: [
      "Ran full-cycle recruitment for technical profiles (data and dev) across banking, insurance and public sectors in Brussels",
      "Screened candidates on soft skills and whether they could explain their technical work simply enough for a client to follow",
      "Ran international interviews in English and Portuguese",
      "Came in with no technical background, so I started learning Python on my own to understand the roles I was hiring for",
    ],
    skills: [
      {
        category: "Business & Operations",
        items: [
          "Stakeholder Management",
          "Problem Framing",
          "International Business",
        ],
      },
      {
        category: "Languages & Communication",
        items: [
          "English (C1)",
          "Portuguese (C1)",
          "Multilingual Business Communication",
        ],
      },
    ],
  },
  {
    id: 4,
    position: "English Language Instructor",
    company: "Uptime — Uberlândia, Brazil",
    period: "Apr. 2019 - Oct. 2019",
    highlights: [
      "Taught English to adult learners, adapting to each student's level and goals",
      "Six months living and working in Brazil, becoming fluent in Portuguese",
    ],
    skills: [
      {
        category: "Languages & Communication",
        items: [
          "French (Native)",
          "Spanish (B2)",
          "Cross-Cultural Management",
          "Presentation",
        ],
      },
    ],
  },
];

const education: EducationEntry[] = [
  {
    id: 1,
    program: "Microsoft Certification - Power BI Data Analyst Associate",
    institution: "Microsoft",
    period: "Started June 2026",
    highlights: [
      "Data preparation and modelling, DAX and Power Query",
      "Report and dashboard design",
    ],
    skills: ["Power BI", "DAX", "Power Query", "Data Modelling"],
  },
  {
    id: 2,
    program: "Data Science & Machine Learning Path",
    institution: "Kaggle Learn",
    period: "2025",
    highlights: [
      "Python & Pandas for data manipulation, cleaning and analysis",
      "SQL from basic queries to advanced optimisation (BigQuery)",
      "Data visualisation for clear, impactful charts and plots",
      "Machine learning: supervised models, feature engineering, handling missing data and leakage",
    ],
    skills: [
      "Python (Pandas, NumPy)",
      "SQL",
      "Data Visualisation",
      "Machine Learning",
    ],
  },
  {
    id: 3,
    program: "Full-Stack JavaScript — Web Development Bootcamp",
    institution: "O'CLOCK School",
    period: "2024",
    highlights: [
      "Frontend: JavaScript (ES6+), React, Tailwind CSS",
      "Backend: Node.js, Express.js, PostgreSQL, REST APIs",
      "Git, Agile methodology, CI/CD basics and unit testing",
      "Full-stack applications with team collaboration and code reviews",
    ],
    skills: [
      "JavaScript (ES6+)",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: 4,
    program:
      "Bachelor's Degree — Applied Foreign Languages for International Trade",
    institution: "Université de Limoges",
    period: "2012 - 2015",
    highlights: [
      "International trade: import/export operations, trade regulations, negotiation",
      "Business & economics: marketing, management, international economics",
      "Languages, intercultural communication and professional translation",
    ],
    skills: [
      "International Trade",
      "Negotiation",
      "Cross-Cultural Communication",
      "Translation",
    ],
  },
];

/** One entry in the experience/education timeline: title, caption, highlights and skill groups. */
function TimelineEntry({
  index,
  title,
  caption,
  highlights,
  skills,
}: {
  index: number;
  title: string;
  caption: string;
  highlights: string[];
  skills: SkillGroup[];
}) {
  return (
    <AnimateOnScroll delay={index * 50}>
      {index > 0 && (
        <div className="border-t border-border mb-8 sm:mb-10 md:mb-12" />
      )}

      {/* Title + Caption */}
      <div>
        <h3 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          {title}
        </h3>
        <p className="font-caption text-xs sm:text-sm md:text-lg text-primary mt-1 mb-6 sm:mb-8">
          {caption}
        </p>
      </div>

      {/* Content grid: highlights left, skills right */}
      <div className="flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8">
        <div className="md:max-w-[65%] md:pl-12 lg:pl-16">
          <BulletList items={highlights} />
        </div>

        <div className="md:w-[320px] lg:w-[380px] shrink-0">
          {skills.map((skillGroup, groupIdx) => (
            <div key={groupIdx} className="mb-6">
              <p className="font-caption text-xs sm:text-sm text-foreground mb-2 sm:mb-3 md:text-right">
                _{skillGroup.category.toLowerCase()}
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="tag-pill text-center">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-auto sm:min-h-[calc(100dvh-var(--header-height))] flex flex-col justify-start sm:justify-center section-x py-12 sm:py-16 md:py-20">
        <div className="section-container">
          <AnimateOnScroll>
            <SectionHeading
              title="About Me"
              subtitle="From running the operation to building the systems behind it"
              rightText="_hello world"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-4xl text-pretty">
              For four years I was part of the team running my family&apos;s 400+
              tonne fruit business, managing a 50-person seasonal crew through
              peak season.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-4xl text-pretty mt-6 sm:mt-8">
              The same problem kept coming up: data scattered across tools that
              didn&apos;t talk to each other. So I learned Python, SQL and Power
              BI, and built a full analytics tool for that same business.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-4xl text-pretty mt-6 sm:mt-8">
              Having run operations for years and learned to build, I make the
              tools operations actually needs, and speak the language of the
              people who use them.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={250}>
            <a
              href="/cv/jeremy-brajon-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-underline-orange font-caption text-sm sm:text-base inline-flex items-center gap-1.5 text-foreground mt-6 sm:mt-8"
            >
              download my cv
              <ArrowUpRight
                aria-hidden="true"
                className="arrow-lift size-4 text-primary shrink-0"
              />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Full-width visual break: static B&W mesh gradient (CSS, no asset) */}
      <section className="relative w-full" aria-hidden="true">
        <div className="relative w-full h-48 sm:h-64 md:h-[400px] lg:h-[500px]">
          <MeshPlaceholder variant="nb" />
        </div>
      </section>

      {/* Experience Section */}
      <section
        className="py-12 sm:py-16 md:py-20 section-x"
        role="region"
        aria-labelledby="experience-title"
      >
        <div className="section-container">
          <AnimateOnScroll>
            <SectionHeading
              title="Experience"
              rightText="_path"
              headingId="experience-title"
              className="mb-8 sm:mb-10 md:mb-12"
              headingClassName="text-3xl md:text-4xl"
            />
          </AnimateOnScroll>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <TimelineEntry
                key={exp.id}
                index={index}
                title={exp.position}
                caption={`${exp.company} | ${exp.period}`}
                highlights={exp.highlights}
                skills={exp.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        className="py-12 sm:py-16 md:py-20 section-x"
        role="region"
        aria-labelledby="education-title"
      >
        <div className="section-container">
          <AnimateOnScroll>
            <SectionHeading
              title="Education"
              rightText="_learning"
              headingId="education-title"
              className="mb-8 sm:mb-10 md:mb-12"
              headingClassName="text-3xl md:text-4xl"
            />
          </AnimateOnScroll>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {education.map((edu, index) => (
              <TimelineEntry
                key={edu.id}
                index={index}
                title={edu.program}
                caption={`${edu.institution} | ${edu.period}`}
                highlights={edu.highlights}
                skills={[{ category: "skills", items: edu.skills }]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
