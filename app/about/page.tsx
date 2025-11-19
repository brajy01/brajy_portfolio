"use client";

export default function About() {
  const experiences = [
    {
      id: 1,
      position: "Data Science & Machine Learning Path",
      company: "Kaggle Learn",
      period: "In progress",
      highlights: [
        "Progressing through Python & Pandas for data manipulation, cleaning, and analysis",
        "Mastering SQL from basic queries to advanced optimization techniques",
        "Developing data visualization skills for effective storytelling with charts and plots",
        "Learning machine learning fundamentals: supervised models, feature engineering, handling missing data",
        "Applying time series forecasting and statistical analysis to real-world agricultural data",
      ],
      skills: [
        {
          category: "Data & Analytics",
          items: [
            "Python (Pandas, NumPy)",
            "SQL (Queries, Optimization)",
            "Data Visualization",
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
        "Conducted yield analysis, cost modeling, and pricing strategies with major retailers (Système U, Grand Frais)",
        "Realized that operational problems require better data systems—sparked the transition to Business Intelligence",
      ],
      skills: [
        {
          category: "Data & Analytics",
          items: [
            "Excel (Advanced)",
            "Data Visualization",
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
        "Realized true passion lies at intersection of operations and data rather than pure engineering",
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
        "Delivered customized training programs using data-driven teaching methodology and performance tracking",
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
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-end mb-8 pb-8 border-b border-gray-200 text-primary">
          <h1 className="font-title text-4xl md:text-5xl">About Me_</h1>
          <p className="font-caption text-xs md:text-sm">_hello world</p>
        </div>

        <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-3xl">
          I transform operational data into actionable business insights. With
          4+ years managing €2M operations and 50+ person teams, I discovered
          that data systems solve what processes alone cannot. Now combining
          deep business acumen with Python, SQL, and analytics to drive smarter
          decisions. Multilingual (FR/EN/PT/ES) with international experience
          bridging EU and emerging markets.
        </p>
      </section>

      {/* Experience Section */}
      <section
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
        role="region"
        aria-labelledby="experience-title"
      >
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {experiences.map((exp) => (
            <div key={exp.id} className="max-w-7xl mx-auto w-full">
              {/* Title - Full width */}
              <h2 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight w-full">
                {exp.position}
              </h2>

              {/* Content grid */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
                <div className="md:col-span-4">
                  <p className="font-caption text-xs sm:text-sm md:text-lg text-primary mb-6 sm:mb-8 md:mb-10">
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-foreground flex gap-3"
                      >
                        <span className="text-primary shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills - Mobile */}
                  <div className="md:hidden mt-6 sm:mt-8">
                    {exp.skills &&
                      exp.skills.map((skillGroup, groupIdx) => (
                        <div key={groupIdx} className="mb-6 sm:mb-6">
                          <p className="font-title text-sm mb-2 sm:mb-3">
                            _{skillGroup.category}
                          </p>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {skillGroup.items.map((skill, idx) => (
                              <span
                                key={idx}
                                className="font-caption text-xs px-2 sm:px-3 py-1 border border-primary text-primary rounded-full text-center"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="hidden md:block md:col-span-1" />

                {/* Skills - Desktop */}
                <div className="hidden md:flex md:col-span-1 flex-col justify-end">
                  {exp.skills &&
                    exp.skills.map((skillGroup, groupIdx) => (
                      <div key={groupIdx} className="mb-4 last:mb-0">
                        <p className="font-caption text-xs md:text-sm mb-2 md:mb-3 text-right">
                          _{skillGroup.category}
                        </p>
                        <div className="flex flex-wrap gap-1.5 md:gap-2 items-end justify-end">
                          {skillGroup.items.map((skill, idx) => (
                            <span
                              key={idx}
                              className="font-caption text-xs px-2 sm:px-3 py-1 border border-primary text-primary rounded-full text-center"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
