import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Hidden while `testimonials` in src/data/portfolio.ts is empty. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="border-y border-line bg-surface-2/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading number="06" label="Testimonials" title="Kind words" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={0.1 + index * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-medium text-ink">{testimonial.author}</p>
                  <p className="font-mono text-xs text-muted">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
