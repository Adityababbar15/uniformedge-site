import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <Container>
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-crimson-400">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-2xl text-4xl leading-tight text-ivory-50 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory-100/75">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
