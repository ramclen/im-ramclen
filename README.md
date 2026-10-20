# Cristopher Lopez — Portfolio

My personal site: [im.ramclen.xyz](http://im.ramclen.xyz/)

A single-page portfolio set on Mars. The sky follows your system theme (dusty
daytime or a starry night), a couple of astronauts wander around the surface
doing fieldwork, a rover potters about and the rocket launches as you scroll.
All of the motion is plain CSS; JavaScript only decides _where_ things are.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- Deployed to GitHub Pages with a custom domain
- [Umami](https://umami.is/) for privacy-friendly visitor counts

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5173.

## Scripts

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the dev server                               |
| `npm run build`   | Production build into `dist/`                      |
| `npm run preview` | Serve the production build locally                 |
| `npm run lint`    | Run ESLint                                         |
| `npm run deploy`  | Build and publish `dist/` to the `gh-pages` branch |

## Project layout

```
src/
  components/
    common/     # Navbar, footer and the Mars scene (sky, ground, astronauts, rocket)
    sections/   # One component per page section
  contexts/     # Theme provider (follows prefers-color-scheme)
  hooks/        # useWander: moves the astronauts and rover around
  styles/       # Tailwind theme, keyframes and custom utilities
```

## Deploying

`npm run deploy` publishes to the `gh-pages` branch. The `public/CNAME` file
keeps the custom domain set on every deploy, so the only one-off setup is
pointing a `CNAME` DNS record for `im` at `<your-github-user>.github.io` and
enabling GitHub Pages for the `gh-pages` branch in the repo settings.

## Accessibility

- Respects `prefers-reduced-motion`: animations are switched off and the
  astronauts stay put
- Skip link, visible focus styles and semantic landmarks
- Decorative scenery is hidden from screen readers
