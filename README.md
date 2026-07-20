# Sera Uysal — Personal Portfolio

Personal portfolio and professional profile, built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

**[See it live →](https://sera-uysal.github.io)**

## About

I hold an M.Sc. in Economics from LMU Munich, with a background in operational finance and treasury. This site showcases my professional profile, analytical projects, and experience in financial controlling, economic research, and financial modeling.

## Tech Stack

| Layer          | Choice                          |
| -------------- | ------------------------------- |
| **Framework**  | Next.js 16 (App Router)         |
| **Language**   | TypeScript                      |
| **UI**         | React 19                        |
| **Styling**    | Tailwind CSS v4                 |
| **Tooling**    | Biome (lint/format) · Vitest    |
| **Deployment** | GitHub Pages (GitHub Actions)   |

## Getting Started

```bash
npm install          # Install dependencies
npm run dev          # Start dev server → http://localhost:3000
npm run build        # Production build + static export (output in ./out)
```

Copy `.env.example` → `.env.local` and set your own values for local development.

## Deployment

The site is a fully static export (`output: 'export'`) deployed to **GitHub Pages**. Merging to `main` triggers an automatic build and deploy via GitHub Actions.

## Project Notes

Contributor and architecture notes for this repository live in [AGENTS.md](./AGENTS.md).

## License

See [LICENSE](./LICENSE).