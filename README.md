# Mini Twitter — Dashboard (frontend only)

This is a small frontend-only dashboard with hardcoded posts. It's a Vite + React static site ready to deploy to Vercel.

Quick start

1. Install deps

```powershell
cd d:\mini_twitter\dashboard
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

Deploying to Vercel

- Option A (recommended): Connect this repository to Vercel and deploy — Vercel detects static builds and will run `npm run build`. The `vercel.json` file is included and points to the `dist` directory.
- Option B: Use the Vercel CLI

```powershell
npm i -g vercel
vercel login
vercel --prod
```

Notes

- Posts are hardcoded in `src/App.jsx`.
- This is frontend-only (no backend). The composer UI is non-functional and provided for layout/demo only.
