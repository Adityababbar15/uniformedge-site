import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { cn } from "@/lib/cn";

/**
 * Inner-page title band. Ivory editorial — not a second navy slab.
 * Pattern: marketing index / article / form (callers name the page type).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  /** Optional buttons under the description (e.g. the page's primary action). */
  actions?: React.ReactNode;
}) {
  const withPhoto = Boolean(image && imageAlt);

  return (
    <section className="relative overflow-hidden bg-ivory-50">
      <Container
        className={cn(
          "py-12 sm:py-16 lg:py-20",
          withPhoto &&
            "grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16",
        )}
      >
        <div>
          {eyebrow && (
            <p className="mb-4 text-sm font-medium text-crimson-600">{eyebrow}</p>
          )}
          <h1 className="font-display max-w-2xl text-4xl leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
              {description}
            </p>
          )}
          {actions && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
          )}
        </div>
        {image && imageAlt && (
          <EditorialImage
            src={image}
            alt={imageAlt}
            sizes="(min-width: 1024px) 42vw, 92vw"
            aspect="aspect-[4/3] lg:aspect-[4/5]"
          />
        )}
      </Container>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 opacity-80"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-crimson-500) 0 10px, transparent 10px 18px)",
        }}
      />
    </section>
  );
}
