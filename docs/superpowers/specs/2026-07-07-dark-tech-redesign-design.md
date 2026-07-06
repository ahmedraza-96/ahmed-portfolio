# Portfolio v2 — Modern dark-tech redesign

**Approved by Ahmed 2026-07-07** (options chosen: "Modern dark tech" direction, "Rich but tasteful" motion, "Yes, build it").

## Goal
Make the portfolio look current (2026 AI-engineer aesthetic), more polished and more animated, without changing content, section order, screenshots or SEO.

## Theme
- Dark is the default theme (toggle + light theme remain). Near-black `#08080d` bg with blue undertone, elevated surfaces, off-white ink.
- Keep orange accent `#ff7a45`; add orange→amber gradient for hero name / highlights.
- Faint noise texture + drifting glow orbs + dot grid for depth.

## Typography
- Headings: Space Grotesk (replaces Fraunces). Mono: JetBrains Mono (unchanged). Body: Instrument Sans (unchanged).

## Motion (all gated on prefers-reduced-motion)
- Hero: word-by-word blur-to-sharp stagger; gradient shimmer on name; glowing/magnetic CTAs; bouncing scroll hint.
- Navbar: glassy (backdrop blur), border appears on scroll.
- Skills: infinite marquee rows (pause on hover) + grouped chips.
- Projects: animated gradient border glow + cursor spotlight per card.
- Experience: timeline line draws on scroll.
- About: facts become animated stat cards.
- Section reveals: blur + rise with stagger (upgrade existing Reveal).

## Out of scope
Content/data changes, new sections, routing, SEO changes.

## Verification
lint + build; local desktop dark/light + mobile screenshots reviewed; push; Vercel production verified.
