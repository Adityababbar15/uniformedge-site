"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

// The running stitch is the site's one graphic motif — tailoring's simplest seam.
// It "sews" itself once, the first time it scrolls into view: a transform-only
// scale from its starting end, so nothing reflows and nothing is clipped.
export function Stitch({
  axis = "x",
  className,
}: {
  axis?: "x" | "y";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const horizontal = axis === "x";
  const dashes = horizontal
    ? "repeating-linear-gradient(90deg, var(--color-crimson-500) 0 10px, transparent 10px 18px)"
    : "repeating-linear-gradient(180deg, var(--color-crimson-500) 0 10px, transparent 10px 18px)";

  return (
    <motion.div
      aria-hidden="true"
      className={cn(horizontal ? "h-0.5 w-full" : "h-full w-0.5", className)}
      style={{
        backgroundImage: dashes,
        transformOrigin: horizontal ? "left center" : "center top",
      }}
      initial={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
      whileInView={horizontal ? { scaleX: 1 } : { scaleY: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
    />
  );
}
