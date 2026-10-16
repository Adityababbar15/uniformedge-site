import { STAKEHOLDERS } from "@/lib/content/stakeholders";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";

/**
 * One card per person who evaluates us. A principal who forwards this page to
 * the accounts office should find a section written for the accounts office.
 *
 * Each card ends with what we do NOT claim. That is deliberate: naming our own
 * limit is what makes the rest of the card believable to a buyer who is reading
 * two other vendors' pages the same afternoon.
 */
export function StakeholderSections() {
  return (
    <AnimatedGrid className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {STAKEHOLDERS.map((s) => (
        <AnimatedGridItem key={s.role}>
          <article className="flex h-full flex-col border-t border-navy-900/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-crimson-600">
              {s.eyebrow}
            </p>
            <h3 className="font-display mt-3 text-xl text-navy-900">{s.role}</h3>

            <p className="mt-4 border-l-2 border-navy-900/15 pl-4 text-sm italic leading-relaxed text-ink-500">
              {s.concern}
            </p>

            <p className="mt-5 text-base leading-relaxed text-ink-700">
              {s.response}
            </p>

            <ul className="mt-5 flex-1 space-y-3">
              {s.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-500"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {s.notClaimed && (
              <p className="mt-6 rounded-xl bg-ivory-100/70 px-4 py-3 text-xs leading-relaxed text-ink-500">
                <span className="font-semibold text-navy-900">What we don&apos;t claim: </span>
                {s.notClaimed}
              </p>
            )}
          </article>
        </AnimatedGridItem>
      ))}
    </AnimatedGrid>
  );
}
