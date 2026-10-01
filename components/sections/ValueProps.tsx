import { Container } from "@/components/ui/Container";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { cn } from "@/lib/cn";

const VALUES = [
  {
    title: "In-house manufacturing",
    body: "Our own Delhi facility gives us direct control over cutting, stitching, and quality — not a third party we simply place orders with.",
  },
  {
    title: "Flexible at scale",
    body: "When volumes call for it, we bring in trusted outsourced production partners, so peak-season demand never compromises delivery.",
  },
  {
    title: "A tailoring heritage since 1995",
    body: "Our roots trace back to a small Delhi shop in 1995 — three decades of experience in what school communities actually need.",
  },
];

export function ValueProps() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <StitchHeading title="Manufacturing built around schools, not the other way around" />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
          {VALUES.map((value, i) => (
            <div
              key={value.title}
              className={cn(
                "md:px-8",
                i === 0 && "md:pl-0",
                i > 0 && "md:border-l md:border-navy-900/15",
              )}
            >
              <h3 className="font-display text-xl text-navy-900">{value.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-700">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
