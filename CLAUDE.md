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

## Architecture

This is a client website for **Jovita's Cleaning Service** (Austin, TX). React 19 + TypeScript + Vite SPA with four pages: Home, Services, About, Contact.

### Routing

Defined in [`src/App.tsx`](src/App.tsx). All pages are lazy-loaded via `React.lazy`. A `ScrollToHashElement` component in the same file handles smooth scroll-to-hash on navigation and scroll-to-top on page change.

### Styling

All styling is done with **styled-components**. Design tokens (colors, spacing, typography, breakpoints, shadows, z-index) live in [`src/styles/theme.ts`](src/styles/theme.ts) and are injected via `ThemeProvider` at the root. `src/styles/globalStyles.ts` applies CSS resets and base styles.

Always pull values from `theme` rather than hardcoding. The theme is typed (`Theme` type exported from `theme.ts`) and available in any styled-component via the `theme` prop.

### Component conventions

Each component lives in its own folder with up to four files:

| File | Purpose |
|------|---------|
| `internals.tsx` | React component |
| `styled.ts` | Styled-components for that component |
| `types.ts` | TypeScript types/interfaces |
| `data.ts` | Static content/data (where applicable) |

Transient styled-component props use the `$` prefix (e.g. `$variant`, `$size`) to avoid forwarding to the DOM.

### Shared components

`src/components/common/` contains layout primitives reused across pages:
- `Navbar`, `Footer` — persistent shell
- `Hero` — page hero banner (accepts `title` and `subtitle` props)
- `Button` — supports `variant`, `size`, `fullWidth`
- `Container` — max-width wrapper
- `Section` — section wrapper with `variant` prop (`primary` / `secondary`)
- `Popup` — first-visit promotional modal

### Page components

`src/components/pages/` holds page-specific subtrees. Each page manages its own SEO (title, meta description, JSON-LD structured data) inside a `useEffect` in `internals.tsx`.

### Static data

Service definitions (descriptions, features, slugs) are in [`src/components/pages/services/data.ts`](src/components/pages/services/data.ts). Gallery images are loaded dynamically using Vite's `import.meta.glob` pointed at `src/assets/services/`.

### Contact form

The form in [`src/components/pages/contact/internals.tsx`](src/components/pages/contact/internals.tsx) currently simulates submission with `setTimeout`. The `handleSubmit` function has a `TODO` comment marking where a real email service or backend API call needs to go. The contact page also reads a `?prefillMessage=` query param to pre-populate the message field (used by deep links from other pages).

### Third-party libraries of note

- **Embla Carousel** — used for image carousels on the home page
- **React Leaflet / Leaflet** — interactive map on the services page
- **React Icons** — icon set used throughout
- **Material Tailwind** — used selectively; styled-components is the primary styling system
