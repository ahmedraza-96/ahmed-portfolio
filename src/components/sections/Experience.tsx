import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-[80rem] px-6 py-28 sm:px-10 sm:py-36 lg:py-44">
        <SectionHeading number="03" label="Experience" title="Where I've worked" />

        <ol className="mt-16 lg:mt-20">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.period}`}>
              <Reveal delay={0.05 * i}>
                <div className="grid gap-4 border-t border-line py-10 lg:grid-cols-12 lg:gap-10">
                  <div className="text-label space-y-1.5 text-muted lg:col-span-3 lg:pt-2">
                    <p>{job.period}</p>
                    {job.location && <p>{job.location}</p>}
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="text-display-sm text-ink">
                      {job.role}
                      <span className="text-muted"> — </span>
                      <span className="text-accent">{job.company}</span>
                    </h3>
                    <ul className="mt-5 max-w-[68ch] space-y-2.5">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight.slice(0, 32)}
                          className="border-l border-line-strong pl-4 leading-relaxed text-muted"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="rule" />
      </div>
    </section>
  );
}
