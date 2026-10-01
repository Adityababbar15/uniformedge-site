"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// The hero photograph drifts down slower than the page as you scroll away from
// it — the one continuous, scroll-linked movement on the site. The image is
// taller than its frame so the drift never exposes a gap.
export function HeroImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div ref={frame} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 -top-[14%] h-[128%]"
        style={reduceMotion ? undefined : { y }}
      >
        <Image src={src} alt={alt} fill priority sizes="100vw" className={className} />
      </motion.div>
    </div>
  );
}
