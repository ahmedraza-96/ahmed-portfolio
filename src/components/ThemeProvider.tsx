"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Class-based theming; bright is the default, dark is the option. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      // Fresh key — the pre-redesign site stored "dark" under the default
      // "theme" key, which would override the new bright default for
      // returning visitors.
      storageKey="ar-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
