"use client";

import { useRef } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper that feeds the cursor position into --mx/--my so the .glow-card
 * spotlight (globals.css) follows the pointer. Pure CSS on non-hover devices.
 */
export function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`glow-card ${className}`}>
      {children}
    </div>
  );
}
