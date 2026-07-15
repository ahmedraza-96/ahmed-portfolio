import { about, contact } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Portrait } from "@/components/ui/Portrait";

/** First sentence becomes the serif lede; the rest stays body copy. */
function splitLede(paragraph: string): [string, string] {
  const idx = paragraph.indexOf(". ");
  if (idx === -1) return [paragraph, ""];
  return [paragraph.slice(0, idx + 1), paragraph.slice(idx + 2)];
}

export function About() {
  const [lede, rest] = splitLede(about.paragraphs[0]);
  const facts = [
    { label: "Location", value: "Karachi, Pakistan" },
    { label: "Education", value: `${about.education.degree} — FAST-NUCES, ${about.education.period}` },
    { label: "Focus", value: "LLMs & shipping real AI products" },
    { label: "Availability", value: contact.availability },
  ];

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-[80rem] px-6 py-28 sm:px-10 sm:py-36 lg:py-44">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Label column */}
          <Reveal className="lg:col-span-3">
            <div className="flex items-baseline gap-4 lg:sticky lg:top-24 lg:block">
              <span aria-hidden className="index-numeral block">
                01
              </span>
              <span className="text-label mt-2 block text-muted lg:mt-4">Profile</span>
            </div>
          </Reveal>

          {/* Copy column */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-display-sm text-ink">{lede}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-[1.8] text-muted">{rest}</p>
              <p className="mt-4 leading-[1.8] text-muted">{about.paragraphs[1]}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-12">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-4 sm:grid-cols-[9rem_1fr]"
                  >
                    <dt className="text-label pt-0.5 text-muted">{fact.label}</dt>
                    <dd className="text-[15px] leading-relaxed text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Portrait column */}
          <Reveal delay={0.2} className="lg:col-span-3 lg:col-start-10">
            <Portrait />
          </Reveal>
        </div>

        {/* What I do — ruled capability rows */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <p className="text-label mb-2 text-muted">What I do</p>
          </Reveal>
          {about.capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={0.05 * i}>
              <div className="grid gap-2 border-t border-line py-7 lg:grid-cols-12 lg:gap-10">
                <h3 className="text-display-sm text-ink lg:col-span-5">{cap.title}</h3>
                <p className="self-center leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
                  {cap.description}
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
