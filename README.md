# Portfolio: Abdelrahman El-Sherif

Next.js 15 + Tailwind. Every page is static.

## Edit content
All text lives in `src/data/`:
- `site.ts`: name, links, roles
- `projects.ts`: projects and consulting
- `roadmap.ts`: AI Engineer roadmap
- `founders.ts`: Founders roadmap (books by phase)

To update the resumes, replace the PDFs in `public/`.

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy to Vercel (free)
1. Create a GitHub repo called `portfolio` and push this folder (`.gitignore` already skips `node_modules` and `.next`).
2. On vercel.com, choose **Add New → Project**, import the repo and keep the defaults, then **Deploy**.
3. Under Settings → Domains, rename it, e.g. `abdelrahman-elsherif.vercel.app`.
4. Put that URL in your GitHub profile README, LinkedIn and CV.
