import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
}

/** Editorial section opener: ghost numeral + mono label beside a serif title. */
export function SectionHeading({ number, label, title }: SectionHeadingProps) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div className="flex items-baseline gap-4 lg:col-span-3 lg:block">
        <span aria-hidden="true" className="index-numeral block">
          {number}
        </span>
        <span className="text-label mt-2 block text-muted lg:mt-4">{label}</span>
      </div>
      <h2 className="text-display-md self-end text-ink lg:col-span-9">{title}</h2>
    </Reveal>
  );
}
