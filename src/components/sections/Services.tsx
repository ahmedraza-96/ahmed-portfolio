import { Bot, Cloud, Code2, Workflow } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const ICON_MAP = {
  code: Code2,
  bot: Bot,
  workflow: Workflow,
  cloud: Cloud,
} as const;

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading number="05" label="Services" title="What I can do for you" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = ICON_MAP[service.icon];
          return (
            <Reveal key={service.title} delay={0.1 + index * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-contrast">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
