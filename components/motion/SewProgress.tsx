"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

// A thread sewn along the top of the window as you read down the page. Scroll
// linked, transform only, and hidden entirely for people who ask for less motion.
export function SewProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  if (reduceMotion) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: scrollYProgress,
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-crimson-500) 0 10px, transparent 10px 15px)",
        }}
      />
    </div>
  );
}
