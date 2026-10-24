import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
  disabled?: boolean;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-navy-900 text-ivory-50 hover:bg-navy-800",
  // crimson-600 not the brand crimson-500: white on #E53935 is only 4.23:1,
  // below the 4.5:1 AA threshold for this text size. -600 gives 4.98:1.
  secondary: "bg-crimson-600 text-white hover:bg-crimson-700",
  ghost: "bg-transparent text-navy-900 border border-navy-900/20 hover:border-navy-900/50",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
  external,
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href && external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
