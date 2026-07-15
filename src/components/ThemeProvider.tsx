"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Class-based theming; bright is the default, dark is the option. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
