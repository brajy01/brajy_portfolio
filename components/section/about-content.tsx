"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
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
        "Building an end-to-end analytics and management tool for the 400+ tonne/year fruit production business I previously ran",
        "Consolidated legacy sources (Excel, Notion, paper) into one structured dataset, cleaning 10 years of inconsistent production records",
        "Built a daily operational dashboard tracking harvests, sales and projected stock",
        "Set up KPI tracking for yield, labour productivity and cost/margin by variety",
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
        "Managed data-driven operations for 50+ international seasonal employees during peak production (400+ tonnes strawberries/year)",
        "Developed comprehensive tracking systems using Google Sheets and Notion for real-time inventory management and KPI dashboards",
        "Reduced manual administrative work through automation tools (AppSheet, Notion) for scheduling, workforce tracking and stock monitoring",
        "Conducted yield analysis, cost modelling, and pricing strategies with major retailers (Système U, Grand Frais)",
        "Realised that operational problems require better data systems, which sparked the transition to Business Intelligence",
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
        "Managed full recruitment lifecycle for technical profiles (data, development roles) across banking, insurance and public institutions",
        "Conducted technical screening and competency assessments for IT positions",
        "Coordinated international recruitment interviews in English and Portuguese",
        "Developed deep understanding of tech skills requirements and what companies actually look for in data/dev roles",
        "Built expertise in identifying talent gaps and technical competencies",
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
        "Delivered customised training programmes using data-driven teaching methodology and performance tracking",
        "Applied cross-cultural communication strategies in international immersion environment (Brazil)",
        "Developed Portuguese language proficiency and deep understanding of Brazilian business culture",
        "Built foundation for multilingual professional positioning (FR/EN/PT/ES)",
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
      <section className="py-20 md:py-28 section-x">
        <div className="section-container">
          <AnimateOnScroll>
            <SectionHeading
              title="About Me"
              subtitle="From operations to building what matters"
              rightText="_hello world"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-4xl text-pretty">
              I transform operational data into actionable business insights.
              With 4+ years managing large-scale operations and 50+ person
              teams, I discovered that data systems solve what processes alone
              cannot. Now combining deep business acumen with Python, SQL, and
              analytics to drive smarter decisions. Multilingual (FR/EN/PT/ES)
              with international experience bridging EU and emerging markets.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative w-full">
        <div className="relative w-full h-48 sm:h-64 md:h-[400px] lg:h-[500px]">
          <Image
            src="/mesh/GRADIENT_N&B_1.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
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
