import type { Project } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectMedia } from "@/components/ui/ProjectMedia";

interface CaseStudyRowProps {
  project: Project;
  index: number;
}

/** Full-width editorial case-study row; media and copy swap sides per index. */
export function CaseStudyRow({ project, index }: CaseStudyRowProps) {
  const flipped = index % 2 === 1;
  const numeral = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-line py-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Media */}
        <Reveal className={`lg:col-span-7 ${flipped ? "lg:order-2 lg:col-start-6" : ""}`}>
          <ProjectMedia name={project.name} image={project.image} video={project.video} />
        </Reveal>

        {/* Copy */}
        <div className={`lg:col-span-5 ${flipped ? "lg:order-1 lg:col-start-1" : ""}`}>
          <Reveal delay={0.1}>
            <span aria-hidden className="index-numeral block">
              {numeral}
            </span>
            <p className="text-label mt-4 text-muted">
              {project.year} · {project.category}
            </p>
            <h3 className="text-display-sm mt-3 text-ink">{project.name}</h3>
            <p className="mt-2 text-lg text-muted">{project.tagline}</p>
            <p className="mt-5 leading-[1.8] text-muted">{project.description}</p>
            {project.metric && (
              <p className="text-label mt-5 text-accent">{project.metric}</p>
            )}
            <p className="mt-5 font-mono text-[13px] leading-relaxed text-muted">
              {project.tech.join(" / ")}
            </p>
            <div className="mt-7 flex items-center gap-7">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline is-drawn text-ink"
                >
                  {project.liveLabel ?? "Live"} ↗
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-muted hover:text-ink"
                >
                  {project.repoUrl2 ? "Frontend" : "Code"} ↗
                </a>
              )}
              {project.repoUrl2 && project.repoUrl2 !== project.repoUrl && (
                <a
                  href={project.repoUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-muted hover:text-ink"
                >
                  Backend ↗
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
