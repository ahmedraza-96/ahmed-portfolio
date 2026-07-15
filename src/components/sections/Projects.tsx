import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyRow } from "@/components/ui/CaseStudyRow";

export function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-[80rem] px-6 py-28 sm:px-10 sm:py-36 lg:py-44">
        <SectionHeading number="04" label="Selected work" title="Built, tested, shipped" />

        <div className="mt-16 lg:mt-20">
          {projects.map((project, i) => (
            <CaseStudyRow key={project.name} project={project} index={i} />
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
