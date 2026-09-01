import BulletList from "@/components/ui/bullet-list";
import type { ChapterBlock } from "@/data/projects";

/* The blocks of one chapter: prose with an optional bold lead-in, or a
   bulleted list. This is the only place a chapter's content is rendered, so
   every variant shows the same typography. */
export default function ChapterBody({ blocks }: { blocks: ChapterBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) =>
        block.kind === "list" ? (
          <BulletList key={index} items={block.items} />
        ) : (
          <p
            key={index}
            className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-foreground text-pretty"
          >
            {block.lead && (
              <>
                <strong className="font-semibold">{block.lead}</strong>{" "}
              </>
            )}
            {block.text}
          </p>
        ),
      )}
    </div>
  );
}
