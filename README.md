# jakeoneijk.github.io

Personal website of **Jaekwon Im** — Ph.D. candidate at KAIST (Music and Audio
Computing Lab). Built with Vite, React, TypeScript, and
[`@macaron-css`](https://macarons.dev) for zero-runtime styling.

## Tech stack

- **Vite** — dev server and build
- **React 18 + TypeScript**
- **react-router-dom v7** — data router (`createBrowserRouter`) with a layout
  route and lazily code-split pages
- **vanilla-extract** — zero-runtime, type-safe CSS-in-TS (styles live in
  colocated `*.css.ts` files)
- **Inter** (self-hosted variable font via `@fontsource-variable`)
- **react-pdf** — renders the CV PDF inline
- **Vitest + Testing Library** — unit tests
- **ESLint (flat config) + Prettier** — linting and formatting

## Project structure

```
src/
  main.tsx              Entry point (mounts the router)
  router.tsx            Route tree (createBrowserRouter), lazy-loads pages
  index.css             Global resets
  theme.ts              Design tokens (size, color, font, breakpoints)
  config/
    navigation.ts       Nav items (single source of truth for the menu)
    links.ts            Social links + profile link data
  components/
    Layout.tsx          App shell: Bio + nav + <Outlet/>
    Bio.tsx             Left-column profile + social links
    Text.tsx            Typography primitive (variants + safe links)
    *.css.ts            Colocated vanilla-extract styles per component
  pages/
    Home.tsx            Landing / about
    CV.tsx              PDF viewer with zoom + download
    Projects.tsx        Research & industry list (data: Projects.json)
    *.css.ts            Colocated vanilla-extract styles per page
  test/
    setup.ts            Testing Library / jsdom setup
```

Imports use the `@/` alias for `src/` (e.g. `@/components/Text`). Each component
keeps its styles in a sibling `*.css.ts` file (vanilla-extract). The menu is
driven from `config/navigation.ts` and pages from `router.tsx`, so adding a page
is a small, localized change.

## Scripts

```bash
pnpm dev       # start the dev server (http://localhost:3000)
pnpm build     # type-check + production build (outputs to dist/)
pnpm preview   # preview the production build
pnpm lint      # run ESLint
pnpm format    # format with Prettier
pnpm test      # run unit tests (Vitest)
pnpm deploy    # build + publish dist/ to GitHub Pages
```

## Deployment

Hosted on GitHub Pages. `pnpm deploy` builds the site and pushes `dist/` via
`gh-pages`. The build copies `index.html` to `404.html` so client-side routes
resolve correctly on refresh.
