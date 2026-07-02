# Ahmed Raza — Portfolio

A modern, responsive personal portfolio built with **Next.js (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **next-themes** (dark/light mode). SEO-ready with OpenGraph metadata, JSON-LD, sitemap and robots.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customizing — one file

**All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).** Edit that file to change any text, link, skill, job, project or service — no component changes needed.

| What | Where |
| --- | --- |
| Name, role, SEO title/description, site URL | `site` |
| Hero headline, tagline, CTAs | `hero` |
| About paragraphs, quick facts, education | `about` |
| Skill groups | `skillGroups` |
| Jobs & bullets | `experience` |
| Project cards (live/repo links optional) | `projects` |
| Service cards | `services` |
| Testimonials (section auto-hides while empty) | `testimonials` |
| Email, phone, form key | `contact` |
| Social links | `socials` |

### Enable the contact form

1. Get a free access key at [web3forms.com](https://web3forms.com) (just your email — takes a minute).
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/data/portfolio.ts` → `contact.web3formsAccessKey`.

Until then the form shows a friendly "email me directly" message instead of sending.

### Replace the resume

Drop your PDF at `public/resume.pdf` (the "Download Resume" button points there).

### Set the production URL

Update `site.url` in `src/data/portfolio.ts` after deploying — it feeds the sitemap, OpenGraph and JSON-LD.

## Structure

```
src/
  data/portfolio.ts        ← ALL content (edit this)
  app/                     ← layout, page, globals.css, SEO files
  components/
    layout/                ← Navbar (scroll-spy, mobile menu), Footer
    sections/              ← Hero, About, Skills, Experience, Projects,
                             Services, Testimonials, Contact
    ui/                    ← Reveal, SectionHeading, ThemeToggle, SocialIcon
```

## Deploy

Works out of the box on [Vercel](https://vercel.com): import the repo, framework preset “Next.js”, deploy.
