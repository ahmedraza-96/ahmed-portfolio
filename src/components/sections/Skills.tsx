import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { GlowCard } from "@/components/ui/GlowCard";

export function Skills() {
  const allSkills = skillGroups.flatMap((g) => g.skills);
  const mid = Math.ceil(allSkills.length / 2);

  return (
    <section id="skills" className="border-y border-line bg-surface-2/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading number="02" label="Skills" title="The toolbox" />

        <Reveal delay={0.1} className="mt-10 space-y-3">
          <Marquee items={allSkills.slice(0, mid)} duration={45} />
          <Marquee items={allSkills.slice(mid)} duration={45} reverse />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={0.1 + groupIndex * 0.08}>
              <GlowCard className="h-full rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/40">
                <h3 className="flex items-baseline gap-3 font-display text-lg font-medium text-ink">
                  <span className="font-mono text-xs text-accent">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[13px] text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
