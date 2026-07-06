/**
 * Re-capture Cognos and IT Inventory AFTER logging in with their public demo
 * accounts, so the cards show the real app instead of a login wall.
 * Run: node scripts/capture-authed.mjs
 */

import { chromium } from "playwright";
import path from "node:path";

const OUT_DIR = path.resolve(import.meta.dirname, "..", "public", "projects");

const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({ viewport: { width: 1600, height: 900 } });

// ── Cognos: demo login exposed on the page ─────────────────────────────────
{
  const page = await context.newPage();
  await page.goto("https://cognos-frontend.vercel.app", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /use demo credentials/i }).click();
  await page.getByRole("button", { name: /^log in$/i }).click();
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.waitForTimeout(4000);
  await page.screenshot({ path: path.join(OUT_DIR, "cognos.png") });
  console.log("captured cognos (logged in)");
  await page.close();
}

// ── IT Inventory: click the Admin demo-role chip to fill credentials ───────
{
  const page = await context.newPage();
  await page.goto("https://it-inventory-app-main.vercel.app/", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /^admin$/i }).click();
  await page.getByRole("button", { name: /^sign in$/i }).click();
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.waitForTimeout(4000);
  await page.screenshot({ path: path.join(OUT_DIR, "it-inventory.png") });
  console.log("captured it-inventory (logged in)");
  await page.close();
}

await browser.close();
console.log("done");
