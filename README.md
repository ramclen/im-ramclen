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

## Adding a project

GitHub projects live in [`src/data/projects.json`](src/data/projects.json).
Add an entry and it shows up on the page, no component changes needed. The
file has a JSON schema, so VS Code autocompletes the fields.

```json
{
  "name": "MyProject",
  "category": "Frontend · React",
  "description": "What it does and why it's interesting, in a sentence or two.",
  "tags": ["React", "TypeScript"],
  "repo": "https://github.com/ramclen/MyProject",
  "demo": "https://my-project.example.com",
  "image": "projects/my-project.png",
  "illustration": "code",
  "palette": "cool"
}
```

Only `name`, `category`, `description`, `tags` and `repo` are required.
`image` is a screenshot in `public/`; without one the card uses a drawn
illustration (`phone`, `network` or `code`). A malformed entry is skipped with
a console warning in dev instead of breaking the page.

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
