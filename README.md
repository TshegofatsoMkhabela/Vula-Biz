# Vula-Biz

The premise of our idea is that most township businesses don't fail because the idea is bad. They fail because founders lacked access to the community-based knowledge needed to take it further.

So we are building **Vula-Biz**,  multi-lingual (Zulu/English) micro-learning app that closes that gap, with bite-sized, bilingual business lessons built for the township context.


![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript)

---

## Setup

```bash
git clone https://github.com/TshegofatsoMkhabela/Vula-Biz.git
cd Vula-Biz
npm install
npm run dev        # http://localhost:5173
```

Node.js ≥ 18 required.

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the app locally for development — changes appear instantly without refreshing |
| `npm run build` | Package the app for production (checks for type errors first) |
| `npm run preview` | Run the production build on your machine before deploying |
| `npm run lint` | Scan the codebase for code quality issues |

---

## Architecture

### Stack decisions

| Choice | Why it matters |
|---|---|
| **Vite + React 19** | Faster builds and a snappier experience on the cheap Android phones our users carry |
| **Tailwind + shadcn/ui** | Consistent, accessible UI components out of the box which is less custom CSS to maintain |
| **Framer Motion** | Smooth transitions that make the app feel polished without heavy engineering effort |
| **React Router v7** | Keeps the app lightweight and no server needed, works as a single HTML file |
| **vite-plugin-pwa + Workbox** | Makes the app installable like a native app and usable offline on weak data connections |

### i18n approach

Strings live in `src/i18n/strings.ts` — a flat key/value map per language. No external library. The active language is held in global state and toggled at runtime. Zulu is the default.

### Source layout

```
src/
├── components/     # Shared UI primitives and composites
├── screens/        # Route-level views
├── data/           # Static module and lesson content (typed)
├── i18n/           # Zulu / English string maps
├── hooks/          # Stateful logic extracted from views
├── types/          # Domain types shared across layers
└── lib/            # Pure utility functions
```

---

## Contributing

Open an issue before starting large work. For everything else:

```bash
git checkout -b feat/your-feature
# make changes
git commit -m "feat: concise description"   # Conventional Commits
git push origin feat/your-feature
# open PR against main
```
