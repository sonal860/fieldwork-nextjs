# Fieldwork — Project Management Landing Page

A landing page for a fictional agency project-management SaaS, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## What this demonstrates
- Next.js App Router structure (`app/layout.tsx`, `app/page.tsx`)
- A working interactive component (`KanbanHero.tsx`) — a drag-and-drop mini kanban board built with React state, not a static mockup
- Custom Tailwind design tokens (colors, fonts) instead of default theme
- next/font for optimized Google Font loading
- Fully responsive layout, semantic HTML, visible focus states, reduced-motion support

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Build for production
```bash
npm run build
npm start
```

## Project structure
```
fieldwork-nextjs/
├─ app/
│  ├─ components/
│  │  └─ KanbanHero.tsx   # interactive drag-and-drop board
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ tailwind.config.ts
├─ postcss.config.js
├─ next.config.js
├─ tsconfig.json
└─ package.json
```
