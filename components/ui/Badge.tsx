import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "crimson",
  className,
}: {
  children: React.ReactNode;
  tone?: "crimson" | "navy" | "warning";
  className?: string;
}) {
  const tones = {
    crimson: "bg-crimson-100 text-crimson-600",
    navy: "bg-navy-900 text-ivory-50",
    warning: "bg-amber-100 text-amber-900",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
