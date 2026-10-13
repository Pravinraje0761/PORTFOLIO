# Pravin Raj E: Portfolio

[![Deploy](https://github.com/Pravinraje0761/PORTFOLIO/actions/workflows/deploy.yml/badge.svg)](https://github.com/Pravinraje0761/PORTFOLIO/actions/workflows/deploy.yml)

**Live site: <https://pravinraje0761.github.io/PORTFOLIO/>**

Personal portfolio for AI, computer vision and data science work: projects, skills,
credentials and contact. Built with React, TypeScript, Vite and Tailwind CSS, with a
scroll-driven canvas animation in the background.

## Run locally

```bash
cd pravin-raj-portfolio
npm install
npm run dev        # http://localhost:3000
npm run build      # production build in dist/
```

Content (projects, skills, services) lives in `pravin-raj-portfolio/src/data.ts`.

## Repository layout

| Path | What it is |
|---|---|
| `pravin-raj-portfolio/` | The portfolio site (deployed) |
| `scroll-animation-demo/` | The standalone scroll-animation prototype the background is based on |
| `.github/workflows/deploy.yml` | Builds the portfolio and deploys it to GitHub Pages on every push to `main` |
| `.github/workflows/ci.yml` | Type-checks and builds on pull requests |
