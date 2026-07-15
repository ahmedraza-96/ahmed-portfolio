import Image from "next/image";
import { about, site } from "@/data/portfolio";

/**
 * Profile portrait, 3:4, hairline-framed. Renders the headshot when
 * `about.photo` is set; otherwise a deliberate typographic monogram block.
 */
export function Portrait() {
  return (
    <figure className="w-full">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-line bg-surface-2">
        {about.photo ? (
          <Image
            src={about.photo}
            alt={`${site.name} — portrait`}
            fill
            sizes="(min-width: 1024px) 28vw, 90vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span
              aria-hidden
              className="font-display text-[7rem] font-light leading-none text-line-strong"
            >
              AR
            </span>
          </div>
        )}
      </div>
      <figcaption className="text-label mt-3 flex items-center justify-between text-muted">
        <span>{site.name}</span>
        <span>{about.photoCaption}</span>
      </figcaption>
    </figure>
  );
}
