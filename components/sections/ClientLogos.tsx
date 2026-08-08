import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { SCHOOL_CLIENTS } from "@/lib/content/clients";

export function ClientLogos() {
  const withLogos = SCHOOL_CLIENTS.filter((c) => c.logo);
  const nameOnly = SCHOOL_CLIENTS.filter((c) => !c.logo);

  return (
    <section className="border-y border-navy-900/10 bg-ivory-100/60 py-14">
      <Container>
        <AnimatedSection>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            Trusted by schools across Delhi
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {withLogos.map((client) => (
              <div
                key={client.name}
                className="flex h-16 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
              >
                <div className="relative h-14 w-full">
                  <Image
                    src={client.logo!}
                    alt={`${client.name} crest`}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          {nameOnly.length > 0 && (
            <p className="mt-8 text-center text-sm text-ink-500">
              {nameOnly.map((c) => c.name).join(" · ")}
            </p>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}
