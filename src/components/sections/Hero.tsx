"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/data/portfolio";
import { TextReveal } from "@/components/ui/TextReveal";
import { EASE } from "@/lib/motion";

/** Hues shared with the first four project rows. */
const METRIC_HUES = ["#ff6d4d", "#ffb347", "#3ecfb2", "#a78bfa"];

/** Renders a statement line, wrapping the accent word in italic serif + accent color. */
function StatementLine({ line, accent }: { line: string; accent: string }) {
  if (!line.includes(accent)) return <>{line}</>;
  const [before, after] = line.split(accent);
  return (
    <>
      {before}
      <em className="italic text-accent">{accent}</em>
      {after}
    </>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section id="hero" className="relative flex min-h-svh flex-col justify-end pt-24">
      <div className="mx-auto w-full max-w-[80rem] px-6 sm:px-10">
        {/* Eyebrow row */}
        <motion.div
          {...fade(0.1)}
          className="text-label flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5 text-muted"
        >
          <span>{hero.eyebrow}</span>
          <span className="flex items-center gap-2 text-accent">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.status}
          </span>
        </motion.div>

        {/* Statement */}
        <TextReveal
          as="h1"
          className="text-display-xl mt-10 text-ink sm:mt-14"
          delay={0.25}
          lines={hero.statement.map((line) => (
            <StatementLine key={line} line={line} accent={hero.statementAccent} />
          ))}
        />

        {/* Tagline + CTAs */}
        <div className="mt-10 flex flex-col gap-8 pb-14 sm:mt-12 sm:flex-row sm:items-end sm:justify-between sm:pb-16">
          <motion.p {...fade(0.55)} className="max-w-[52ch] text-[17px] leading-[1.75] text-muted">
            {hero.tagline}
          </motion.p>
          <motion.div {...fade(0.7)} className="flex shrink-0 items-center gap-8">
            <a href={hero.primaryCta.href} className="link-underline is-drawn text-ink">
              {hero.primaryCta.label} ↓
            </a>
            <a
              href={hero.secondaryCta.href}
              download
              className="link-underline is-drawn text-accent"
            >
              {hero.secondaryCta.label} ↗
            </a>
          </motion.div>
        </div>

        {/* Metrics strip — each value picks up one of the project hues */}
        <motion.dl {...fade(0.85)} className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
          {hero.metrics.map((m, i) => (
            <div
              key={m.label}
              className={`py-6 pr-6 sm:py-8 ${i > 0 ? "sm:border-l sm:border-line sm:pl-8" : ""} ${
                i % 2 === 1 ? "border-l border-line pl-6 sm:pl-8" : ""
              }`}
            >
              <dd
                className="font-display text-3xl font-light sm:text-4xl"
                style={{ color: METRIC_HUES[i % METRIC_HUES.length] }}
              >
                {m.value}
              </dd>
              <dt className="text-label mt-2 text-muted">{m.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
