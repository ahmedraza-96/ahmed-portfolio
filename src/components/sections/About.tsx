import { GraduationCap } from "lucide-react";
import { about } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading number="01" label="About" title="A builder who ships" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[3fr_2fr]">
        <Reveal delay={0.1} className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <dl className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
            {about.facts.map((fact, i) => (
              <Reveal key={fact.label} delay={0.15 + i * 0.08}>
                <div className="group h-full rounded-xl border border-line bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-accent/50">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-accent">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative rounded-2xl border border-line bg-surface p-7">
            <span className="absolute -top-px left-8 h-px w-16 bg-accent" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-accent">
                <GraduationCap className="h-5 w-5" />
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Education
              </p>
            </div>
            <h3 className="mt-5 font-display text-xl font-medium text-ink">
              {about.education.degree}
            </h3>
            <p className="mt-1 text-muted">{about.education.school}</p>
            <p className="mt-1 font-mono text-sm text-accent">
              {about.education.period}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {about.education.detail}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
