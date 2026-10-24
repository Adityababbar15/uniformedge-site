"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS, COMPANY, SHOP_URL } from "@/lib/content/company";
import { cn } from "@/lib/cn";

// Home is the wordmark. Showing it again in the bar crowds eight items
// before 1280px without adding a destination.
const BAR_LINKS = NAV_LINKS.filter((link) => link.href !== "/");

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      const nodes = menuRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-ivory-50">
      <Container className="flex h-16 items-center justify-between sm:h-18">
        <Link href="/" className="shrink-0 py-2" aria-label={`${COMPANY.name} home`}>
          <Logo priority className="h-7 w-auto sm:h-8" />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {BAR_LINKS.map((link) => {
              const active = pathname?.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-11 items-center text-[13px] font-medium tracking-wide text-ink-700 transition-colors hover:text-navy-900",
                      active &&
                        "text-navy-900 underline decoration-crimson-500 decoration-2 underline-offset-8",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button href={SHOP_URL} variant="ghost" external>
            Shop uniforms
          </Button>
          <Button href="/contact" variant="primary">
            Request a quote
          </Button>
        </div>

        <button
          ref={menuButton}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-navy-900 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-haspopup="dialog"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Primary"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: reduceMotion ? 0 : 0.2, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : -8,
              transition: { duration: reduceMotion ? 0 : 0.15, ease: "easeIn" },
            }}
            className="border-b border-navy-900/10 bg-ivory-50 xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {BAR_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-navy-900/5 hover:text-navy-900"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href={SHOP_URL}
                variant="ghost"
                external
                className="mt-3 w-full"
                onClick={closeMenu}
              >
                Shop uniforms
              </Button>
              <Button
                href="/contact"
                variant="primary"
                className="mt-2 w-full"
                onClick={closeMenu}
              >
                Request a quote
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
