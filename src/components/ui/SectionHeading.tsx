import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
}

export function SectionHeading({ number, label, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {number} <span aria-hidden="true">/</span> {label}
      </p>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
    </Reveal>
  );
}
