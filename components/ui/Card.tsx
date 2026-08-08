import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-900/10 bg-white/60 p-6 shadow-sm shadow-navy-900/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
