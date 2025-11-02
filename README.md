# Mini Twitter — Dashboard (frontend only)

This is a small frontend-only dashboard built with Vite + React. It includes a working composer so users can create posts in the browser; all post data is stored locally (in localStorage) and no backend is required.

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

How the local composer works

- Type into the composer textarea and click Post (or press Ctrl/Cmd+Enter) to create a new post. New posts appear at the top of the feed.
- Posts, likes, comments and repost counts are stored in your browser's `localStorage` under the key `mini_twitter_posts_v1` so they persist across reloads on the same browser.
- Action buttons (comment/repost/like/delete) work in-memory and update counts immediately. Deleting a post removes it from local storage.

Notes

- The app is frontend-only and uses localStorage for persistence — there is no server or user authentication.
- If you want posts to be shared across users or devices, the next step is to add a backend API.
