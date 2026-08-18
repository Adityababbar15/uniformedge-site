import {
  COMPARISON_ROWS,
  COMPARISON_FAIRNESS_NOTE,
} from "@/lib/content/stakeholders";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

/**
 * "What changes" rather than "why they are bad". The left column describes the
 * arrangement a school usually has now; the fairness note under the table says
 * plainly that many local suppliers do parts of it well.
 *
 * Rendered as a real <table> with scoped headers so it is navigable by screen
 * reader, and it scrolls inside its own container rather than pushing the page
 * sideways on a phone.
 */
export function ComparisonTable() {
  return (
    <AnimatedSection>
      <div className="overflow-x-auto rounded-2xl border border-navy-900/10 bg-white">
        <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
          <caption className="sr-only">
            How a typical uniform arrangement compares with a managed UniformEdge
            program, across eight operational factors
          </caption>
          <thead>
            <tr className="border-b border-navy-900/10 bg-ivory-100/70">
              <th scope="col" className="px-5 py-4 font-semibold text-navy-900">
                Factor
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-ink-700">
                The usual arrangement
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-navy-900">
                With UniformEdge
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr
                key={row.factor}
                className="border-b border-navy-900/5 last:border-0"
              >
                <th
                  scope="row"
                  className="px-5 py-4 text-left align-top font-medium text-navy-900"
                >
                  {row.factor}
                </th>
                <td className="px-5 py-4 align-top leading-relaxed text-ink-500">
                  {row.typical}
                </td>
                <td className="bg-crimson-100/25 px-5 py-4 align-top leading-relaxed text-ink-900">
                  {row.ours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-500">
        {COMPARISON_FAIRNESS_NOTE}
      </p>
    </AnimatedSection>
  );
}
