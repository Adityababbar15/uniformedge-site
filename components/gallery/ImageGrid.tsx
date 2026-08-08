import Image from "next/image";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { STUDIO_IMAGES, type GalleryImage } from "@/lib/content/gallery";
import { cn } from "@/lib/cn";

export function ImageGrid({
  images = STUDIO_IMAGES,
  columns = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 280px, 45vw",
}: {
  images?: GalleryImage[];
  columns?: string;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <AnimatedGrid className={cn("grid gap-4", columns)}>
      {images.map((image) => (
        <AnimatedGridItem key={image.src}>
          <figure>
            <div
              className={cn(
                "group relative overflow-hidden rounded-xl border border-navy-900/10",
                aspect,
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-navy-950/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brass-300 backdrop-blur">
                AI Placeholder
              </span>
            </div>
            {image.caption && (
              <figcaption className="mt-2.5 text-xs leading-relaxed text-ink-500">
                {image.caption}
              </figcaption>
            )}
          </figure>
        </AnimatedGridItem>
      ))}
    </AnimatedGrid>
  );
}
