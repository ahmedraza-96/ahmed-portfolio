import { ArrowUpRight, Github, Lock } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { ProjectMedia } from "@/components/ui/ProjectMedia";

export function Projects() {
  return (
    <section id="projects" className="border-y border-line bg-surface-2/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading number="04" label="Projects" title="Shipped & live" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={0.1 + (index % 2) * 0.08}
              className={project.featured ? "md:col-span-1" : ""}
            >
              <GlowCard className="h-full rounded-2xl">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_48px_-24px_var(--glow)]">
                <ProjectMedia
                  name={project.name}
                  image={project.image}
                  video={project.video}
                />
                <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-mono text-[13px] text-accent">
                      {project.tagline}
                    </p>
                  </div>
                  {project.badge && (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
                      <Lock className="h-3 w-3" />
                      {project.badge}
                    </span>
                  )}
                </div>

                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {(project.liveUrl || project.repoUrl) && (
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-sm font-medium text-accent hover:underline"
                      >
                        {project.liveLabel ?? "Live site"}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-ink"
                      >
                        <Github className="h-3.5 w-3.5" />
                        {project.repoUrl2 ? "Frontend" : "Code"}
                      </a>
                    )}
                    {project.repoUrl2 && project.repoUrl2 !== project.repoUrl && (
                      <a
                        href={project.repoUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-ink"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Backend
                      </a>
                    )}
                  </div>
                )}
                </div>
              </article>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
