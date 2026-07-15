"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE, STAGGER } from "@/lib/motion";

interface TextRevealProps {
  /** Pre-split lines — each renders inside its own overflow mask. */
  lines: React.ReactNode[];
  className?: string;
  /** Element rendered around all lines (h1, h2, p, a…). */
  as?: React.ElementType;
  delay?: number;
}

const lineVariants = {
  hidden: { y: "112%" },
  visible: { y: 0, transition: { duration: DURATION, ease: EASE } },
};

/**
 * Editorial masked line reveal: each line rises out of an overflow-hidden band.
 * The in-view observer lives on an untranslated wrapper — observing the masked
 * line itself never fires, because a fully clipped element never intersects.
 */
export function TextReveal({ lines, className, as: Tag = "div", delay = 0 }: TextRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: STAGGER, delayChildren: delay }}
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span variants={lineVariants} className="block will-change-transform">
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
