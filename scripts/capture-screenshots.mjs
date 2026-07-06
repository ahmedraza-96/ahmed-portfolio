/**
 * Capture 1600×900 screenshots of every live project for the portfolio cards
 * (and for LinkedIn posts). Uses the system Chrome via Playwright — no browser
 * download needed.
 *
 * Run from the repo root:  node scripts/capture-screenshots.mjs [slug ...]
 * With no args it captures everything; pass slugs to re-capture selectively.
 */

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve(import.meta.dirname, "..", "public", "projects");

const TARGETS = [
  { slug: "novanet-eval-harness", url: "https://ai-support-eval.vercel.app" },
  { slug: "psx-mcp-server", url: "https://pypi.org/project/psx-mcp-server/" },
  { slug: "psx-mcp-server-github", url: "https://github.com/ahmedraza-96/psx-mcp-server" },
  { slug: "convey-ai", url: "https://www.conveyai.live/" },
  { slug: "cognos", url: "https://cognos-frontend.vercel.app" },
  { slug: "careshare", url: "https://careshare-frontend.vercel.app/" },
  { slug: "it-inventory", url: "https://it-inventory-app-main.vercel.app/" },
];

// Extra settle time so hero animations (Framer Motion etc.) finish first.
const SETTLE_MS = 2500;

const only = process.argv.slice(2);
const targets = only.length ? TARGETS.filter((t) => only.includes(t.slug)) : TARGETS;

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({
  viewport: { width: 1600, height: 900 },
  deviceScaleFactor: 1,
});

for (const { slug, url } of targets) {
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  } catch {
    // networkidle can time out on pages with long-polling — fall back to load.
    await page.goto(url, { waitUntil: "load", timeout: 60_000 }).catch(() => {});
  }
  await page.waitForTimeout(SETTLE_MS);
  const file = path.join(OUT_DIR, `${slug}.png`);
  await page.screenshot({ path: file });
  console.log(`captured ${slug} <- ${url}`);
  await page.close();
}

await browser.close();
console.log(`done -> ${OUT_DIR}`);
