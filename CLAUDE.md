# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint violations
npm run format       # Format with Prettier
npm run format:check # Check formatting compliance
npm run typecheck    # Type-check without emitting (tsc --noEmit)
```

No test suite is configured.

## Architecture

Single-page portfolio built with **Next.js 16 App Router**. The entire portfolio is rendered on `src/app/page.tsx`, which composes all section components in order.

### Content pattern

Each section in `src/app/(sections)/` follows a consistent pattern:
- `index.tsx` — React component that renders the section
- `items.ts` — Typed data array (projects, skills, work experience, etc.)

To update content (projects, skills, jobs), edit the relevant `items.ts` file. The components are mostly display-only.

### Key components

- **`DarkVeil`** — Fixed WebGL canvas background using GLSL shaders and OGL. Accepts visual props (`hueShift`, `noiseIntensity`, `scanlineIntensity`, `speed`, `warpAmount`). Respects `prefers-reduced-motion`.
- **`Dock`** — Fixed bottom navigation bar. Social links and nav links are defined in `src/components/Dock/items.tsx`.
- **`Header`** — Profile section at the top of the page with name, title, and photo.

### Styling

- TailwindCSS v4 (configured via `@tailwindcss/postcss` — no `tailwind.config.*` file)
- Use the `cn()` utility from `src/lib/utils.ts` to merge classes (`clsx` + `tailwind-merge`)
- Path alias: `@/*` resolves to `src/*`

### UI components

`src/components/ui/` contains Radix UI primitives styled with Tailwind (shadcn/ui pattern). `src/components/magicui/` has animated variants (dock, scroll-progress).

### Theme

Dark/light mode via `next-themes`. The `ThemeProvider` wraps the app in `layout.tsx`.

### SEO

- Metadata defined in `src/app/layout.tsx` (title template, OG image, keywords)
- `src/app/sitemap.ts` and `src/app/robots.ts` for crawlers
- Base URL sourced from `NEXT_PUBLIC_APP_URL` env var (fallback: `https://samuelgomes.com`)
- Language: `pt-BR`
