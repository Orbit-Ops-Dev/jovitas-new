# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript website for Jovita's Cleaning Service (branded as "Liria's"), built with Vite and styled-components. The site showcases cleaning services for residential and commercial clients in Suffolk County.

## Common Commands

- **Development server**: `npm run dev`
- **Build for production**: `npm run build` (runs TypeScript compiler then Vite build)
- **Lint code**: `npm run lint`
- **Format code**: `npm run format`
- **Check formatting**: `npm run format:check`
- **Preview production build**: `npm run preview`

## Architecture

### Component Organization Pattern

Components follow a strict three-file pattern:
1. **`internals.tsx`** - The actual component logic
2. **`styled.ts`** - All styled-components for that component
3. **`types.ts`** - TypeScript interfaces and types (if needed)

This pattern is consistent across all components. When creating new components, always use `internals.tsx` as the filename for the component implementation.

### Directory Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Button, Navbar, Footer, Hero, etc.)
│   └── pages/           # Page-level components (home, services, about, contact)
├── styles/
│   ├── theme.ts         # Centralized theme tokens (colors, spacing, typography, etc.)
│   └── globalStyles.ts  # Global CSS styles
└── App.tsx              # Root component with routing
```

### Routing

- Uses React Router v7 with lazy loading for all page components
- Custom `ScrollToHashElement` component handles smooth scrolling to hash fragments
- Scrolls to top on navigation without hash

### Styling System

- **styled-components** with TypeScript
- Centralized theme in `src/styles/theme.ts` with design tokens:
  - Colors (primary, secondary, semantic, neutrals)
  - Spacing scale (xs to 5xl)
  - Typography (fonts, sizes, weights)
  - Breakpoints (mobile, tablet, desktop, wide)
  - Shadows, transitions, border radius, z-index
- Theme is typed via `styled.d.ts` to extend DefaultTheme
- Transient props (prefixed with `$`) are used to avoid passing styled props to DOM

### Key Dependencies

- **React 19** with react-router-dom for routing
- **styled-components** for CSS-in-JS styling
- **embla-carousel-react** for carousels
- **react-leaflet** + **leaflet** for maps
- **axios** for HTTP requests
- **@material-tailwind/react** for some UI components

## TypeScript Configuration

- Strict mode enabled
- Target: ES2020
- Bundler module resolution
- `noEmit: true` (Vite handles the build)

## Development Notes

- Components are lazily loaded in `App.tsx` for better code splitting
- The project uses Inter and Montserrat fonts from Google Fonts
- Video backgrounds are used in hero sections (see HomePage hero)
- All styled-components use the theme via `${({ theme }) => theme.property}`
