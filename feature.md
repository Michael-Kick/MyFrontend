# Feature Backlog

Last updated: 2026-01-03

## COMPLETED - Layout Optimization for Large Screens

**Completed:** 2026-01-03

### Changes Made
- **Font sizing:** Reduced base from 20px to 18px (10% reduction) for better content density on 1920x1080 displays
  - Base: 20px → 18px
  - Large: 25px → 22px
  - XL: 30px → 26px
- **Layout constraints:** Added max-w-screen-2xl (1536px) to main layout for consistent content width
- **Padding optimization:** Reduced from lg:px-32 to lg:px-16, added 2xl:px-24 for large screens
- **Resume headings:** Capped at text-5xl (was text-6xl) to prevent oversized headings

### Design System
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Max-width:** 1536px for main content (matches navbar)
- **Padding scale:** 16px (mobile) → 32px (sm) → 64px (md/lg) → 96px (2xl)
- **Target optimization:** 1920x1080 displays (most common desktop resolution)

### Rationale
- Balances readability with information density
- Maintains responsive design from mobile to 4K
- Preserves existing design aesthetic and theme system
- Optimizes for the most common desktop resolution (1920x1080)

### Files Modified
- `tailwind.config.js` - Updated base font sizes
- `src/app/layout.tsx` - Added max-width constraint and optimized padding
- `src/app/_components/ResumeElement.tsx` - Capped heading sizes and added max-width

---

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
