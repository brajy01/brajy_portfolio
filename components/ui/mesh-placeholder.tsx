import { cn } from "@/lib/utils";

export type MeshVariant = "orange" | "full" | "nb";

export const MESH_VARIANT_CLASS: Record<MeshVariant, string> = {
  orange: "mesh-orange",
  full: "mesh-full",
  nb: "mesh-nb",
};

interface MeshPlaceholderProps {
  variant?: MeshVariant;
  /* Honest status caption, e.g. "_screenshots coming soon" */
  caption?: string;
  className?: string;
}

/* CSS stand-in for project imagery that does not exist yet: a static mesh
   gradient in the brand palette (same technique as the hero mesh, no rAF).
   Replaces the multi-MB /mesh/*.png exports. */
export default function MeshPlaceholder({
  variant = "full",
  caption,
  className,
}: MeshPlaceholderProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        MESH_VARIANT_CLASS[variant],
        className,
      )}
    >
      <div className="absolute inset-0 mesh-grain" aria-hidden="true" />
      {caption && (
        <span className="absolute bottom-3 left-4 z-10 font-caption text-xs sm:text-sm text-primary-foreground">
          {caption}
        </span>
      )}
    </div>
  );
}
