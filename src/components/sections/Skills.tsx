import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** How many skills per group render in ink before the rest fall to muted. */
const HERO_SKILLS = 4;

export function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-[80rem] px-6 py-28 sm:px-10 sm:py-36 lg:py-44">
        <SectionHeading number="02" label="Stack" title="Tools I ship with" />

        <div className="mt-16 lg:mt-20">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={0.05 * i}>
              <div className="grid gap-3 border-t border-line py-8 lg:grid-cols-12 lg:gap-10">
                <h3 className="text-label pt-1 text-muted lg:col-span-3">{group.title}</h3>
                <p className="text-lg leading-[1.9] lg:col-span-9">
                  {group.skills.map((skill, j) => (
                    <span key={skill}>
                      <span
                        className={`whitespace-nowrap ${j < HERO_SKILLS ? "text-ink" : "text-muted"}`}
                      >
                        {skill}
                      </span>
                      {j < group.skills.length - 1 && (
                        <span aria-hidden className="text-line-strong">
                          {" · "}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
