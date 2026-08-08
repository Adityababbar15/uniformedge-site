import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "brass",
  className,
}: {
  children: React.ReactNode;
  tone?: "brass" | "navy" | "warning";
  className?: string;
}) {
  const tones = {
    brass: "bg-brass-100 text-brass-600",
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
