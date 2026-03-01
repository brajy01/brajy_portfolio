"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import Typewriter from "@/components/ui/typewriter";

export default function AboutContent() {
  const experiences = [
    {
      id: 1,
      position: "Data Science & Machine Learning Path",
      company: "Kaggle Learn",
      period: "In progress",
      highlights: [
        "Progressing through Python & Pandas for data manipulation, cleaning, and analysis",
        "Mastering SQL from basic queries to advanced optimisation techniques",
        "Developing data visualisation skills for effective storytelling with charts and plots",
        "Learning machine learning fundamentals: supervised models, feature engineering, handling missing data",
        "Applying time series forecasting and statistical analysis to real-world agricultural data",
      ],
      skills: [
        {
          category: "Data & Analytics",
          items: [
            "Python (Pandas, NumPy)",
            "SQL (Queries, Optimisation)",
            "Data Visualisation",
            "Statistical Analysis",
            "Time Series Forecasting",
          ],
        },
      ],
    },
    {
      id: 2,
      position: "Sales Operations Manager",
      company: "Ets Brajon",
      period: "Jan. 2021 - Jan. 2025",
      highlights: [
        "Managed data-driven operations for 50+ international seasonal employees during peak production (400+ tons strawberries/year)",
        "Developed comprehensive tracking systems using Google Sheets and Notion for real-time inventory management and KPI dashboards",
        "Implemented automation tools reducing manual administrative work by 60%",
        "Conducted yield analysis, cost modelling, and pricing strategies with major retailers (Système U, Grand Frais)",
        "Realised that operational problems require better data systems—sparked the transition to Business Intelligence",
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
      position: "Web Development Bootcamp - Full Stack JavaScript",
      company: "O'CLOCK School",
      period: "6 months",
      highlights: [
        "Mastered full-stack JavaScript development with focus on Frontend (React, Tailwind CSS) and Backend (Node.js, Express, PostgreSQL)",
        "Learned Git, Agile methodology, CI/CD basics, and unit testing through real project work",
        "Completed multiple full-stack applications with team collaboration and code reviews",
        "Realised true passion lies at intersection of operations and data rather than pure engineering",
      ],
      skills: [
        {
          category: "Web Development",
          items: [
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "REST APIs",
            "TypeScript",
            "Git & GitHub",
          ],
        },
      ],
    },
    {
      id: 4,
      position: "IT Talent Acquisition Consultant",
      company: "Maltem Consulting Group",
      period: "Dec. 2019 - Dec. 2020",
      highlights: [
        "Managed full recruitment lifecycle for technical profiles (data, development roles) across tech, banking, and insurance sectors",
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
      id: 5,
      position: "English Language Instructor",
      company: "Uptime - Language School",
      period: "Apr. 2019 - Nov. 2019",
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
            "Portuguese (C1)",
            "Cross-Cultural Management",
            "Presentation",
          ],
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <AnimateOnScroll>
            <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground">
              About Me_
            </h1>
            <div className="flex justify-between items-end mt-1 mb-8 pb-8 border-b border-border">
              <p className="font-caption text-xs sm:text-sm md:text-2xl text-primary">
                From operations to building what matters
              </p>
              <Typewriter
                text="_hello world"
                speed={60}
                delay={300}
                as="p"
                className="font-caption text-xs md:text-sm text-primary"
                showCursorAfter={false}
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-4xl text-justify">
              I transform operational data into actionable business insights.
              With 4+ years managing &euro;2M operations and 50+ person teams, I
              discovered that data systems solve what processes alone cannot.
              Now combining deep business acumen with Python, SQL, and analytics
              to drive smarter decisions. Multilingual (FR/EN/PT/ES) with
              international experience bridging EU and emerging markets.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative w-full">
        <div className="relative w-full h-48 sm:h-64 md:h-[400px] lg:h-[500px]">
          <Image
            src="/mesh/GRADIENT_N&B_1.png"
            alt="Abstract gradient visual break"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section
        className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        role="region"
        aria-labelledby="experience-title"
      >
        <div className="max-w-[1400px] mx-auto">
          <AnimateOnScroll>
            <div className="flex justify-between items-end mb-8 sm:mb-10 md:mb-12 pb-8 border-b border-border text-primary">
              <h2
                id="experience-title"
                className="font-title text-3xl md:text-4xl"
              >
                Experience_
              </h2>
              <Typewriter
                text="_path"
                speed={60}
                delay={300}
                as="p"
                className="font-caption text-xs md:text-sm"
                showCursorAfter={false}
              />
            </div>
          </AnimateOnScroll>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <AnimateOnScroll key={exp.id} delay={index * 50}>
                {index > 0 && (
                  <div className="border-t border-border mb-8 sm:mb-10 md:mb-12" />
                )}

                {/* Index + Title + Caption */}
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="font-caption text-sm sm:text-base md:text-lg text-primary shrink-0">
                    {String(index + 1).padStart(2, "0")} &raquo;
                  </span>
                  <div>
                    <h3 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                      {exp.position}
                    </h3>
                    <p className="font-caption text-xs sm:text-sm md:text-lg text-primary mt-1 mb-6 sm:mb-8">
                      {exp.company} | {exp.period}
                    </p>
                  </div>
                </div>

                {/* Content grid: highlights left, skills right */}
                <div className="flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8">
                  <div className="md:max-w-[65%] md:pl-12 lg:pl-16">
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-foreground flex gap-3 text-justify"
                        >
                          <span className="text-primary shrink-0">&bull;</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:w-[320px] lg:w-[380px] shrink-0">
                    {exp.skills.map((skillGroup, groupIdx) => (
                      <div key={groupIdx} className="mb-6">
                        <p className="font-caption text-xs sm:text-sm text-foreground mb-2 sm:mb-3 md:text-right">
                          _{skillGroup.category.toLowerCase()}
                        </p>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {skillGroup.items.map((skill, idx) => (
                            <span
                              key={idx}
                              className="font-caption text-xs px-2 sm:px-3 py-1 border border-primary text-primary rounded-full text-center transition-colors duration-200 hover:bg-primary hover:text-primary-foreground cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
