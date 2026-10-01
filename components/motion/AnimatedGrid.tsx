"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

// As in AnimatedSection: the hidden state is always rendered, and reduced motion
// only removes the delay and the duration, so nothing is ever left invisible.
const containerVariants = (reduce: boolean): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: reduce ? 0 : 0.03 },
  },
});

const itemVariants = (reduce: boolean): Variants => ({
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reduce ? { duration: 0 } : { duration: 0.3, ease: "easeOut" },
  },
});

export function AnimatedGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = !!useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants(reduceMotion)}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedGridItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = !!useReducedMotion();

  return (
    <motion.div className={cn(className)} variants={itemVariants(reduceMotion)}>
      {children}
    </motion.div>
  );
}
