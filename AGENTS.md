# Repository Guidelines

## Project Structure & Module Organization
- `MyFrontend/` hosts the Next.js + React + TypeScript frontend.
  - `MyFrontend/src/app/` App Router pages/layouts (e.g., `MyFrontend/src/app/page.tsx`, `MyFrontend/src/app/contact/page.tsx`).
  - `MyFrontend/src/app/_components/` shared UI components.
  - `MyFrontend/src/app/_utils/` utilities (date formatting, skill data).
  - `MyFrontend/src/app/_ui/` global styles (`globals.css`).
  - `MyFrontend/src/app/providers.tsx` app-wide providers (themes).
  - `MyFrontend/src/app/api/send-email/route.tsx` contact form API route.
  - `MyFrontend/public/` static assets; `MyFrontend/emails/` React Email templates.
- `MyBackend/` contains the Express + TypeScript backend with entry `MyBackend/src/server.ts`.

## Build, Test, and Development Commands
Frontend (run from `MyFrontend/`):
- `npm install` installs dependencies.
- `npm run dev` starts the Next.js dev server on `http://localhost:3000`.
- `npm run build` creates a production build in `.next/`.
- `npm run start` runs the production server.
- `npm run lint` runs Next.js linting (will prompt for config if not set).
- `npm run email` starts the React Email dev server.
- `npx tsc -p tsconfig.json --noEmit` runs a TypeScript typecheck.

Backend:
- No `package.json` is present under `MyBackend/`; add one and scripts before running.
- Typical local run after installing deps: `npx ts-node src/server.ts`.

## Coding Style & Naming Conventions
- Use TypeScript across the repo; prefer React function components and hooks.
- Name components in `PascalCase`, utilities in `camelCase`, and follow App Router file names (`page.tsx`, `layout.tsx`).
- Keep formatting consistent with the file you are editing; run `npm run lint` before PRs that touch the frontend.

## Theming & Design Tokens
- Theme switching uses `next-themes` with `data-theme` and defaults to `system`.
- Active themes: `system`, `light`, `dark`, `professional`.
- Colors live in `MyFrontend/src/app/_ui/globals.css` and are mapped in `MyFrontend/tailwind.config.js` (use tokens like `text-text`, `bg-contrast`, `border-border`, `text-onPrimary`).

## Testing Guidelines
- No automated test framework is configured in this repo; no coverage requirements exist.
- If you add tests, use `*.test.ts`/`*.test.tsx` near the code and document the new command here.

## Commit & Pull Request Guidelines
- No `.git` history is available in this workspace, so no commit-message convention can be inferred.
- Use clear, imperative subjects (e.g., `Add resume PDF export`) and include context in the PR description.
- For UI changes, include before/after screenshots and note any new environment variables.

## Configuration & Secrets
- Frontend environment vars live in `.env.local` (for example, `RESEND_API_KEY`).
- Backend configuration uses `.env` (for example, `PORT`, `CORS_ORIGIN`).
- Never commit real secrets; add `.env.example` when introducing new variables.
