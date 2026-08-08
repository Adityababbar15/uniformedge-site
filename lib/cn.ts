import { twMerge } from "tailwind-merge";

// twMerge (not a plain join) so a caller-supplied utility actually overrides the
// component's default — e.g. <Container className="max-w-3xl"> must beat the
// built-in max-w-7xl rather than losing to it on stylesheet order.
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}
