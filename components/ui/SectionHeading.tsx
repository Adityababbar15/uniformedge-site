import { StitchHeading } from "@/components/ui/StitchHeading";
import { cn } from "@/lib/cn";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <StitchHeading
      title={title}
      description={description}
      className={cn(align === "center" && "mx-auto", className)}
    />
  );
}
