import Image from "next/image";

interface ProjectImageProps {
  src: string;
  overlayImage?: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
  className?: string;
}

export default function ProjectImage({
  src,
  overlayImage,
  alt,
  fill = true,
  priority = false,
  loading,
  sizes,
  className = "",
}: ProjectImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        loading={loading}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
      {overlayImage && (
        <Image
          src={overlayImage}
          alt=""
          aria-hidden="true"
          fill={fill}
          sizes={sizes}
          className="object-cover opacity-60 mix-blend-multiply pointer-events-none"
        />
      )}
    </>
  );
}
