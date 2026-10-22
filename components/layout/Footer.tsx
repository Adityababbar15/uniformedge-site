import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { FOOTER_LINKS, COMPANY } from "@/lib/content/company";

const WORK_HREFS = [
  "/sectors",
  "/products",
  "/manufacturing",
  "/school-programs",
  "/custom-t-shirts",
] as const;

const COMPANY_HREFS = [
  "/about",
  "/parents",
  "/gallery",
  "/downloads",
  "/blog",
  "/faqs",
] as const;

function linksFor(hrefs: readonly string[]) {
  return FOOTER_LINKS.filter((link) =>
    (hrefs as readonly string[]).includes(link.href),
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const work = linksFor(WORK_HREFS);
  const company = linksFor(COMPANY_HREFS);
  const placed = new Set<string>(["/", ...WORK_HREFS, ...COMPANY_HREFS, "/contact"]);
  const leftover = FOOTER_LINKS.filter((link) => !placed.has(link.href));

  return (
    <footer className="border-t border-navy-900/10 bg-ivory-50 text-ink-700">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">
        <div>
          <Logo className="h-7 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-700">
            School, corporate, healthcare, hospitality and industrial uniforms,
            manufactured in Delhi with a tailoring heritage going back to 1995.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-600">
            Collections
          </p>
          <ul className="mt-4">
            {work.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 min-w-11 items-center text-sm text-ink-700 transition-colors hover:text-navy-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-600">
            Company
          </p>
          <ul className="mt-4">
            {[...company, ...leftover].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 min-w-11 items-center text-sm text-ink-700 transition-colors hover:text-navy-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-600">
            Enquire
          </p>
          <ul className="mt-4 text-sm text-ink-700">
            <li className="flex min-h-11 items-center">{COMPANY.address.oneLine}</li>
            <li>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex min-h-11 items-center transition-colors hover:text-navy-900"
              >
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex min-h-11 items-center transition-colors hover:text-navy-900"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="flex min-h-11 items-center">GSTIN {COMPANY.gstin}</li>
          </ul>
          <Link
            href="/contact"
            className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-crimson-600 underline underline-offset-4 hover:text-crimson-700"
          >
            Request a quote
          </Link>
        </div>
      </Container>

      <div className="border-t border-navy-900/10 py-6">
        <Container className="flex flex-col items-start justify-between gap-2 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>{COMPANY.city}</p>
        </Container>
      </div>
    </footer>
  );
}
