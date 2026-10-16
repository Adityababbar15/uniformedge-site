import { COMPANY } from "@/lib/content/company";
import { cn } from "@/lib/cn";

// Simple monochrome brand glyphs (24px grid), coloured by the surrounding text.
const GLYPHS: Record<string, React.ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </>
  ),
  LinkedIn: (
    <path
      fill="currentColor"
      d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm7 0h3.8v1.6h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12v5.33h-4v-4.73c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.82 1.23-1.82 2.5v4.81h-4v-11Z"
    />
  ),
  X: (
    <path
      fill="currentColor"
      d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.32l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z"
    />
  ),
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {COMPANY.social.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`UniformEdge on ${s.name} (opens in a new tab)`}
            title={s.name}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors hover:border-crimson-500 hover:text-crimson-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
              {GLYPHS[s.name]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
