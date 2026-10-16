"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

// A line of text that rises into view from behind its own baseline — the
// heading equivalent of a seam closing.
//
// The in-view trigger sits on the mask (which never moves), not on the text. The
// text starts fully below the mask, and a browser treats an element clipped away
// completely as not on screen — so a trigger placed on the text would never fire
// for multi-line headings.
//
// The hidden state is always rendered (the server cannot know the visitor's
// motion preference); reduced motion makes the rise instant instead of removing
// it.
const rise = (reduce: boolean): Variants => ({
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: reduce ? { duration: 0 } : { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
});

export function RevealLine({ children }: { children: React.ReactNode }) {
  const reduceMotion = !!useReducedMotion();
  return (
    <motion.span
      className="block overflow-hidden pb-[0.14em] -mb-[0.14em]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
    >
      <motion.span className="block" variants={rise(reduceMotion)}>
        {children}
      </motion.span>
    </motion.span>
  );
}
