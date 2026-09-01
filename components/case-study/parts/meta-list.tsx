import type { Project } from "@/data/projects";

/* The project facts: two columns on mobile, a right-aligned stack on desktop.
   Shared by the sidebar layouts. */
export default function MetaList({ project }: { project: Project }) {
  const { client, industry, work, date } = project.projectDetails;

  return (
    <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:space-y-6 md:gap-0 sm:gap-6">
      {/* Client */}
      <div className="md:text-right">
        <p className="font-caption text-xs sm:text-sm text-primary mb-1">
          _client
        </p>
        <p className="font-caption text-sm sm:text-base text-foreground">
          {client}
        </p>
      </div>

      {/* Industry */}
      <div className="md:text-right">
        <p className="font-caption text-xs sm:text-sm text-primary mb-1">
          _industry
        </p>
        <p className="font-caption text-sm sm:text-base text-foreground">
          {industry}
        </p>
      </div>

      {/* Work */}
      <div className="md:text-right">
        <p className="font-caption text-xs sm:text-sm text-primary mb-2">
          _work
        </p>
        <div className="space-y-1">
          {work.map((item) => (
            <p
              key={item}
              className="font-caption text-sm sm:text-base text-foreground"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Date */}
      <div className="md:text-right">
        <p className="font-caption text-xs sm:text-sm text-primary mb-1">
          _date
        </p>
        <p className="font-caption text-sm sm:text-base text-foreground">
          {date}
        </p>
      </div>
    </div>
  );
}
