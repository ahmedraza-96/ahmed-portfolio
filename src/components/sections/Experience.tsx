"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading number="03" label="Experience" title="Where I've worked" />

      <div className="relative mt-14">
        {/* Timeline line that draws itself as the section scrolls into view */}
        <motion.span
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-0 w-px origin-top bg-gradient-to-b from-accent via-line to-transparent"
          initial={reduceMotion ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        />

        <ol className="space-y-12 pl-8 sm:pl-10">
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.role}`} className="relative">
              <motion.span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-[0_0_12px_var(--glow)] sm:-left-[45px]"
                initial={reduceMotion ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 300, damping: 18 }}
              />
              <Reveal delay={0.1 + index * 0.1}>
                <p className="font-mono text-sm text-accent">{job.period}</p>
                <h3 className="mt-2 font-display text-2xl font-medium text-ink">
                  {job.role}
                </h3>
                <p className="mt-1 text-muted">
                  {job.company}
                  {job.location ? ` — ${job.location}` : ""}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight.slice(0, 32)}
                      className="flex gap-3 text-[15px] leading-relaxed text-muted"
                    >
                      <span aria-hidden="true" className="mt-[9px] h-1 w-3 shrink-0 bg-accent/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
