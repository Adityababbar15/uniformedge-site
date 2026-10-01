import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { FOOTER_LINKS, COMPANY } from "@/lib/content/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-ivory-100">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="white" className="h-7 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-100/70">
            School, corporate, healthcare, hospitality and industrial uniforms,
            manufactured in Delhi with a tailoring heritage going back to 1995.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
            Navigate
          </p>
          <ul className="mt-3 space-y-0.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block min-w-11 py-3 text-sm text-ivory-100/80 transition-colors hover:text-crimson-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
            Contact
          </p>
          <ul className="mt-3 space-y-0.5 text-sm text-ivory-100/80">
            <li className="py-3">{COMPANY.city}</li>
            <li>
              <a
                href={COMPANY.phoneHref}
                className="inline-block min-w-11 py-3 transition-colors hover:text-crimson-300"
              >
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-block min-w-11 py-3 transition-colors hover:text-crimson-300"
              >
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
            For Schools
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ivory-100/80">
            Outfitting a new school or switching suppliers? Get in touch to
            discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block py-3 text-sm font-medium text-crimson-300 underline underline-offset-4 hover:text-crimson-200"
          >
            Request a quote &rarr;
          </Link>
        </div>
      </Container>

      <div className="border-t border-ivory-50/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-ivory-100/60 sm:flex-row">
          <p>
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>Delhi, India</p>
        </Container>
      </div>
    </footer>
  );
}
