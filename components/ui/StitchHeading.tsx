import { Stitch } from "@/components/motion/Stitch";
import { cn } from "@/lib/cn";

// A section heading marked by a vertical running stitch instead of a small
// all-caps label. The rule is structure: it ties the heading to the site's one
// motif and shows where the section begins.
export function StitchHeading({
  title,
  description,
  tone = "light",
  className,
}: {
  title: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("relative max-w-2xl pl-6", className)}>
      <Stitch axis="y" className="absolute left-0 top-1 h-[calc(100%-0.5rem)]" />
      <h2
        className={cn(
          "font-display text-3xl leading-tight sm:text-4xl",
          dark ? "text-ivory-50" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            dark ? "text-ivory-100/75" : "text-ink-700",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
