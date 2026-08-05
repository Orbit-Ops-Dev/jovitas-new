# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Type-check then bundle for production
npm run lint         # ESLint
npm run format       # Prettier write
npm run format:check # Prettier check (CI)
npm run preview      # Preview production build locally
```

There are no tests. `npm run build` is the main correctness gate — it runs `tsc` before bundling.

Prettier is configured with `printWidth: 120`, single quotes, and `arrowParens: "avoid"`. Run `npm run format` before committing; several existing files predate the config and will reflow on first touch.

## Environment

The contact form needs EmailJS credentials. Copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

New `VITE_` vars must also be declared in the `ImportMetaEnv` interface in [`src/vite-env.d.ts`](src/vite-env.d.ts) or `tsc` will fail the build.

## Architecture

Client website for **Jovita's Cleaning Service** (Austin, TX). React 19 + TypeScript + Vite SPA. Four content pages — Home, Services, About, Contact — plus a catch-all 404.

### Routing

Defined in [`src/App.tsx`](src/App.tsx). All pages are lazy-loaded via `React.lazy`. A `ScrollToHashElement` component in the same file handles smooth scroll-to-hash on navigation and instant scroll-to-top on page change.

### Styling

All styling is done with **styled-components**. Design tokens (colors, spacing, typography, breakpoints, shadows, transitions, container widths) live in [`src/styles/theme.ts`](src/styles/theme.ts) and are injected via `ThemeProvider` at the root. `src/styles/globalStyles.ts` applies CSS resets and base styles.

Always pull values from `theme` rather than hardcoding. The theme is typed (`Theme` type exported from `theme.ts`) and available in any styled-component via the `theme` prop.

### Component conventions

Each component lives in its own folder with up to four files:

| File | Purpose |
|------|---------|
| `internals.tsx` | React component |
| `styled.ts` | Styled-components for that component |
| `types.ts` | TypeScript types/interfaces |
| `data.ts` | Static content/data (where applicable) |

One exception exists: `common/section/` uses `Section.tsx` / `SectionTitle.tsx`. Match the folder you're in rather than renaming.

Transient styled-component props use the `$` prefix (e.g. `$variant`, `$size`) to avoid forwarding to the DOM.

### Shared components

`src/components/common/` contains layout primitives reused across pages:
- `Navbar`, `Footer` — persistent shell
- `Hero` — page hero banner (accepts `title` and `subtitle` props)
- `Button` — supports `variant`, `size`, `fullWidth`
- `Container` — max-width wrapper
- `Section` — section wrapper with `variant` prop (`primary` / `secondary`)
- `NotFound` — 404 page

### SEO

SEO is hand-rolled, with no helmet-style library. Baseline meta tags, Open Graph, Twitter cards, and canonical URL live in [`index.html`](index.html). Each page then overrides `document.title` and the description meta, and injects page-specific JSON-LD structured data, inside a `useEffect` in its `internals.tsx`.

Two things to know before touching this:
- The cleanup function on those effects removes **every** `script[type="application/ld+json"]` in the document, not just the one it added. It works today only because `index.html` ships no JSON-LD and one page is mounted at a time. Adding global structured data to `index.html` would break it.
- `public/sitemap.xml` lists routes explicitly. Adding a route means updating the sitemap (and `public/robots.txt` / `manifest.json` if relevant).

### Static data

Service definitions (descriptions, features, slugs) are in [`src/components/pages/services/data.ts`](src/components/pages/services/data.ts). Gallery images are loaded with Vite's `import.meta.glob` (`eager: true`) against `src/assets/services/<category>/`, then sorted by filename — so **filenames determine gallery order**. Dropping an image into one of those folders adds it to the gallery with no code change; renaming reorders it.

### Contact form

[`src/components/pages/contact/internals.tsx`](src/components/pages/contact/internals.tsx) submits via `@emailjs/browser` directly from the client — there is no backend. `formStatus` drives the UI through `idle → submitting → success | error`. Form fields map to EmailJS template variables (`from_name`, `from_email`, `phone`, `services`, `other_service`, `cleaning_frequency`, `message`); renaming a field here requires updating the EmailJS template to match.

The page also reads a `?prefillMessage=` query param to pre-populate the message field (used by deep links from other pages).

### Third-party libraries of note

- **Embla Carousel** — image carousels on the home page
- **React Leaflet / Leaflet** — interactive map on the services page
- **React Icons** — icon set used throughout
- **EmailJS** — contact form delivery

`@material-tailwind/react` and `axios` are in `package.json` but are not imported anywhere in `src/`. Prefer styled-components and `fetch` over reaching for them.
