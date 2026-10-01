import { COMPANY } from "@/lib/content/company";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Stitch } from "@/components/motion/Stitch";

/**
 * The founding story as a dated sequence. Same facts as the prose above it —
 * this exists because a 30-year history is a real asset against newer
 * competitors, and a paragraph hides it.
 *
 * Rendered as an ordered list so the sequence survives without CSS, with the
 * rule and markers drawn decoratively and hidden from assistive tech.
 */
export function HeritageTimeline() {
  return (
    <AnimatedSection>
      <div className="relative">
        <Stitch axis="y" className="absolute left-0 top-0" />
      <ol className="space-y-10 pl-8">
        {COMPANY.foundingStory.timeline.map((entry) => (
          <li key={entry.year} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-ivory-50 bg-crimson-500"
            />
            <p className="font-display text-2xl leading-none text-crimson-600">
              {entry.year}
            </p>
            <h3 className="font-display mt-2 text-lg text-navy-900">
              {entry.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-ink-700">
              {entry.body}
            </p>
          </li>
        ))}
      </ol>
      </div>
    </AnimatedSection>
  );
}
