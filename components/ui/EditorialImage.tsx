import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Framed photograph for the editorial layout. Hairline border, no extra motif.
 * Uses next/image with unoptimized export; pass width via `sizes`.
 */
export function EditorialImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  aspect = "aspect-[4/5]",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  aspect?: string;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl border border-navy-900/10 bg-ivory-100",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </figure>
  );
}
