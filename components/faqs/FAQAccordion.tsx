import type { FAQ } from "@/lib/content/faqs";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="divide-y divide-navy-900/10 rounded-2xl border border-navy-900/10 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-navy-900 marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-xl text-crimson-600 transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
