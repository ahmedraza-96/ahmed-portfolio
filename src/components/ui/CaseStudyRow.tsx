import type { CSSProperties } from "react";
import type { Project } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectMedia } from "@/components/ui/ProjectMedia";

interface CaseStudyRowProps {
  project: Project;
  index: number;
}

/**
 * Full-width editorial case-study row; media and copy swap sides per index.
 * The project's accent hue tints the numeral, meta line, metric and live link.
 * Projects without media (private work) get an equal-weight typographic panel.
 */
export function CaseStudyRow({ project, index }: CaseStudyRowProps) {
  const flipped = index % 2 === 1;
  const numeral = String(index + 1).padStart(2, "0");
  const accentStyle = { "--row-accent": project.accent } as CSSProperties;

  return (
    <article className="border-t border-line py-14 lg:py-20" style={accentStyle}>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Media — or a typographic panel for private work */}
        <Reveal className={`lg:col-span-7 ${flipped ? "lg:order-2 lg:col-start-6" : ""}`}>
          {project.image ? (
            <ProjectMedia name={project.name} image={project.image} video={project.video} />
          ) : (
            <div className="flex aspect-video w-full flex-col justify-between rounded-sm border border-line bg-surface-2 p-8 sm:p-10">
              <span className="text-label" style={{ color: "var(--row-accent)" }}>
                {project.badge ?? "Private"}
              </span>
              <p className="font-display text-2xl font-light leading-snug text-muted sm:text-3xl">
                {project.tech.join(" · ")}
              </p>
            </div>
          )}
        </Reveal>

        {/* Copy */}
        <div className={`lg:col-span-5 ${flipped ? "lg:order-1 lg:col-start-1" : ""}`}>
          <Reveal delay={0.1}>
            <span
              aria-hidden
              className="index-numeral block"
              style={{ color: "color-mix(in srgb, var(--row-accent) 40%, transparent)" }}
            >
              {numeral}
            </span>
            <p className="text-label mt-4" style={{ color: "var(--row-accent)" }}>
              {project.year} · {project.category}
            </p>
            <h3 className="text-display-sm mt-3 text-ink">{project.name}</h3>
            <p className="mt-2 text-lg text-muted">{project.tagline}</p>
            <p className="mt-5 leading-[1.8] text-muted">{project.description}</p>
            {project.metric && (
              <p className="text-label mt-5" style={{ color: "var(--row-accent)" }}>
                {project.metric}
              </p>
            )}
            <p className="mt-5 font-mono text-[13px] leading-relaxed text-muted">
              {project.tech.join(" / ")}
            </p>
            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-7 flex items-center gap-7">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline is-drawn"
                    style={{ color: "var(--row-accent)" }}
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
            )}
          </Reveal>
        </div>
      </div>
    </article>
  );
}
