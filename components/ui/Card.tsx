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
        "border-t border-navy-900/10 pt-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
