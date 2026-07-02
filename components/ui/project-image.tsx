import Image from "next/image";
import { cn } from "@/lib/utils";
import MeshPlaceholder, {
  MESH_VARIANT_CLASS,
  type MeshVariant,
} from "@/components/ui/mesh-placeholder";

interface ProjectImageProps {
  src?: string;
  /* Mesh placeholder rendered when there is no real image yet */
  mesh?: MeshVariant;
  meshCaption?: string;
  /* Mesh gradient tinted over a real image (multiply blend) */
  overlayMesh?: MeshVariant;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
  className?: string;
}

export default function ProjectImage({
  src,
  mesh,
  meshCaption,
  overlayMesh,
  alt,
  fill = true,
  priority = false,
  loading,
  sizes,
  className = "",
}: ProjectImageProps) {
  if (!src) {
    return <MeshPlaceholder variant={mesh} caption={meshCaption} />;
  }
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        loading={loading}
        sizes={sizes}
        className={cn("object-cover", className)}
      />
      {overlayMesh && (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 opacity-60 mix-blend-multiply pointer-events-none",
            MESH_VARIANT_CLASS[overlayMesh],
          )}
        />
      )}
    </>
  );
}
