import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading number="03" label="Experience" title="Where I've worked" />

      <ol className="mt-14 space-y-12 border-l border-line pl-8 sm:pl-10">
        {experience.map((job, index) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[45px]"
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
    </section>
  );
}
