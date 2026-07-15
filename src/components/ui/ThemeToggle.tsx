"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/** Editorial text toggle — names the theme you'd switch to. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Stable placeholder pre-mount so hydration matches.
  if (!mounted) {
    return <span className="text-label inline-block w-10 text-muted">·</span>;
  }

  const next = resolvedTheme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      className="text-label link-underline text-muted transition-colors hover:text-ink"
    >
      {next === "dark" ? "Dark" : "Light"}
    </button>
  );
}
