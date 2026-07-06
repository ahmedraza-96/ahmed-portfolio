"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { hero, socials } from "@/data/portfolio";
import { SocialIcon } from "@/components/ui/SocialIcon";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = (i: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: EASE },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="orb orb-a -top-40 right-[-10%]" aria-hidden="true" />
      <div className="orb orb-b bottom-[-20%] left-[-8%]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <motion.p
          {...item(0)}
          className="flex items-center gap-2 font-mono text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {hero.status}
          <span aria-hidden="true" className="text-line">
            |
          </span>
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {hero.location}
        </motion.p>

        {/* Transforms live on this wrapper — putting them on descendants of the
            gradient span breaks background-clip:text in Chrome. */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 48, scale: 0.97, filter: "blur(12px)" }
          }
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        >
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl">
            <span className="gradient-text inline-block pb-2">{hero.headline}</span>
          </h1>
        </motion.div>

        <motion.p
          {...item(2)}
          className="mt-4 font-mono text-base text-accent sm:text-lg"
        >
          {"//"} {hero.role}
        </motion.p>

        <motion.p
          {...item(3)}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {hero.tagline}
        </motion.p>

        <motion.div {...item(4)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="btn-glow group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-contrast hover:-translate-y-0.5"
          >
            {hero.primaryCta.label}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={hero.secondaryCta.href}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-6 py-3 font-medium text-ink backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" />
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        <motion.div {...item(5)} className="mt-12 flex items-center gap-3">
          {socials.map((social) => (
            <SocialIcon key={social.label} social={social} />
          ))}
        </motion.div>
      </div>

      {!reduceMotion && (
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.6, duration: 0.6 },
            y: { delay: 1.6, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      )}
    </section>
  );
}
