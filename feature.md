# Feature Backlog

Last updated: 2026-01-03

## P1 - High Priority
- SEO basics: add `public/robots.txt`, `public/sitemap.xml` (or generator), canonical URLs, structured data, and the missing OG image referenced in metadata.
- Resume performance: lazy-load `@react-pdf/renderer` or switch to a static PDF download.
- Navigation polish: active link styling, skip-to-content link, move Settings out of the main nav, and decide on sticky behavior.
- Contact form accessibility: wrap in a `<form>`, add `aria-invalid`/`aria-describedby`, autofocus the first field, add a message character count, and validate/format the phone input.
- External links: open company links in a new tab with `rel="noopener noreferrer"`.
- Project credibility: add GitHub/live links and strengthen descriptions with measurable outcomes.
- Config hygiene: fix the `package.json` name typo and align Tailwind `darkMode` with `data-theme` (or remove unused `dark:` usage).
- Add a custom 404 page (`src/app/not-found.tsx`).

## P2 - Medium Priority
- Add a skills/tech stack section (home or about).
- Add testimonials/references.
- Add a blog/writing section (MDX or similar).
- Add analytics (Plausible/Fathom/Vercel).
- Add resume print styles.
- Add social proof on the hero (logos/metrics) and optionally a headshot/illustration on About.
- Add privacy/consent notes on the contact form (data use/retention).
- Add semantic color tokens (success/warning/info/link/focus) and migrate SkillTag colors to theme tokens.
- Migrate fonts from CSS `@import` to `next/font`.
- Consider breadcrumbs on subpages and a lightweight search if content grows.
- Design polish: reduce font-size variety, normalize spacing rhythm, and use more of the color palette.
- Add focus-visible styles for interactive elements where missing.

## P3 - Maintenance
- Add tests (Jest/RTL) for the contact flow and core components.
- Add ESLint/Prettier config and run in CI.
- Add a CI workflow (typecheck/lint/build).
- Add `error.tsx`/`global-error.tsx`.
- Add `.env.example`.
- Consolidate shared types in `/types`.
