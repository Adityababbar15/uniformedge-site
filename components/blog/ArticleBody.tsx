import { Button } from "@/components/ui/Button";
import type { Block } from "@/lib/content/blog";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="font-display pt-6 text-2xl leading-snug text-navy-900 sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="font-display pt-2 text-xl leading-snug text-navy-900"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-ink-700">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-ink-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {block.items.map((item, n) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base leading-relaxed text-ink-700"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display shrink-0 text-lg leading-tight text-brass-500"
                    >
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div
                key={i}
                className="overflow-x-auto rounded-2xl border border-navy-900/10 bg-white"
              >
                <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-navy-900/10 bg-ivory-100/70">
                      {block.head.map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="px-5 py-4 font-semibold text-navy-900"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr
                        key={row.join("|")}
                        className="border-b border-navy-900/5 last:border-0"
                      >
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={
                              c === 0
                                ? "px-5 py-3 font-medium text-navy-900"
                                : "px-5 py-3 text-ink-700"
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <p
                key={i}
                className="rounded-xl border-l-4 border-brass-500 bg-ivory-100/70 px-6 py-5 text-base leading-relaxed text-navy-800"
              >
                {block.text}
              </p>
            );
          case "cta":
            return (
              <div
                key={i}
                className="mt-4 rounded-2xl border border-navy-900/10 bg-ivory-100/60 p-8"
              >
                <p className="text-base leading-relaxed text-ink-700">
                  {block.text}
                </p>
                <Button href={block.href} variant="primary" className="mt-6">
                  {block.label}
                </Button>
              </div>
            );
        }
      })}
    </div>
  );
}
