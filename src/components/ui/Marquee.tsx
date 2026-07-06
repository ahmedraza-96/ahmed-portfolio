interface MarqueeProps {
  items: string[];
  /** Reverses scroll direction so stacked rows drift opposite ways. */
  reverse?: boolean;
  /** Seconds for one full loop. */
  duration?: number;
}

/**
 * Infinite horizontal marquee of skill chips. Content is duplicated once and
 * the track translates -50%, so the loop is seamless. Pauses on hover; the
 * animation is disabled entirely under prefers-reduced-motion (globals.css).
 */
export function Marquee({ items, reverse = false, duration = 40 }: MarqueeProps) {
  const chips = [...items, ...items];
  return (
    <div className="marquee overflow-hidden" aria-hidden="true">
      <div
        className={`marquee-track py-1 ${reverse ? "reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {chips.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-[13px] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
