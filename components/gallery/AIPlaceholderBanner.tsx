import { AI_PLACEHOLDER_NOTE } from "@/lib/content/gallery";

export function AIPlaceholderBanner() {
  return (
    <div
      role="note"
      className="flex items-start gap-3 rounded-xl border border-dashed border-crimson-500/60 bg-crimson-100/50 px-5 py-4 text-sm text-navy-800"
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson-600 text-[11px] font-bold text-white"
      >
        !
      </span>
      <p>{AI_PLACEHOLDER_NOTE}</p>
    </div>
  );
}
