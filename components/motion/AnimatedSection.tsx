"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

// The hidden starting state is always rendered — the server cannot know whether
// a visitor prefers reduced motion, so the HTML ships with it. Reduced motion is
// handled by making the reveal instant (duration 0), never by dropping the
// animation: dropping it would leave that starting state in place and the
// content invisible.
export function AnimatedSection({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.3, ease: "easeOut", delay }
      }
    >
      {children}
    </MotionTag>
  );
}
