import { cn } from "@/lib/cn";

export function PlaceholderNote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="note"
      className={cn(
        "rounded-xl border border-dashed border-crimson-500/60 bg-crimson-100/50 px-5 py-4 text-sm text-navy-800",
        className,
      )}
    >
      {children}
    </div>
  );
}
