import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyRow } from "@/components/ui/CaseStudyRow";
import { ProjectMedia } from "@/components/ui/ProjectMedia";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-[80rem] px-6 py-28 sm:px-10 sm:py-36 lg:py-44">
        <SectionHeading number="04" label="Selected work" title="Built, tested, shipped" />

        <div className="mt-16 lg:mt-20">
          {featured.map((project, i) => (
            <CaseStudyRow key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* More work — compact ruled index */}
        {more.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <p className="text-label mb-2 text-muted">More work</p>
            </Reveal>
            {more.map((project, i) => (
              <Reveal key={project.name} delay={0.04 * i}>
                <div className="group grid gap-3 border-t border-line py-6 transition-colors hover:bg-surface sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <h3 className="text-display-sm sm:col-span-5">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink transition-colors group-hover:text-accent"
                      >
                        {project.name} <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      <span className="text-ink">{project.name}</span>
                    )}
                  </h3>
                  <p className="text-muted sm:col-span-4">{project.tagline}</p>
                  <div className="flex items-center gap-5 sm:col-span-3 sm:justify-end">
                    <span className="text-label text-muted">{project.year}</span>
                    {project.badge ? (
                      <span className="text-label text-muted">Private</span>
                    ) : (
                      <ProjectMedia
                        name={project.name}
                        image={project.image}
                        video={project.video}
                        variant="compact"
                      />
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-label link-underline text-muted hover:text-ink"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="rule" />
          </div>
        )}
      </div>
    </section>
  );
}
