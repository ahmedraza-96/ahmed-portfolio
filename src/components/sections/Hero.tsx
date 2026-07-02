"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { hero, socials } from "@/data/portfolio";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = (i: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay: 0.1 + i * 0.12,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />

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

        <motion.h1
          {...item(1)}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-7xl md:text-8xl"
        >
          {hero.headline}
        </motion.h1>

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
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-contrast transition-transform hover:-translate-y-0.5"
          >
            {hero.primaryCta.label}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={hero.secondaryCta.href}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
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
    </section>
  );
}
