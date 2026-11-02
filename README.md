# Saleh Abuhussein portfolio

Personal portfolio site built with Angular 22 and prerendered to static HTML.

Live: https://salehabuhussein.github.io/

## Run locally

```sh
npm install
npx ng serve
```

Open http://localhost:4200/.

## Build

```sh
npx ng build
```

Output goes to `dist/saleh-portfolio/browser`.

## Content

All text and data live in `src/app/content.ts`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
