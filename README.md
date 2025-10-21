# portfolio


初始化 Next.js 專案 (TypeScript + TailwindCSS)
```bash
# 在 Codespace 內的 repo 資料夾初始化 Next.js 專案
npx create-next-app@latest . --typescript

# 安裝 TailwindCSS 與 Framer Motion（動畫庫）
npm install tailwindcss framer-motion

# 初始化 TailwindCSS 配置檔
npx tailwindcss init -p
```

配置 TailwindCSS
編輯  tailwind.config.js ，設定掃描內容：
```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: []
};
```

編輯  styles/globals.css ，加入 Tailwind 指令：
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Local development

To run the scaffolded Next.js app locally (the app lives in the `app/` folder):

1. Install dependencies and start the dev server:

```bash
cd app
npm install
npm run dev
# open http://localhost:3000
```

2. Tailwind is already configured (`app/tailwind.config.js`, `app/postcss.config.js`, and `app/app/globals.css`). If you change the Tailwind config, restart the dev server.

## Automated deploys (Vercel)

The recommended way to host a Next.js app is Vercel. There are two simple options:

- Connect the GitHub repo to Vercel using the Vercel dashboard (recommended):
  1. Go to https://vercel.com/new and import your GitHub repository.
  2. Vercel will detect the Next.js app inside the `app/` directory — set the Root Directory to `app` if needed.
 3. Every push to `master` will trigger a deployment automatically.

- Or use the included GitHub Actions workflow (below) to deploy with the Vercel Action. You must add these repository secrets in GitHub:
  - `VERCEL_TOKEN` — a personal token from https://vercel.com/account/tokens
  - `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` — available from your Vercel project settings

After adding secrets, pushes to `master` will trigger the workflow and deploy to Vercel.

## GitHub Actions (optional)

There's a ready workflow at `.github/workflows/deploy-to-vercel.yml` which:

- Installs dependencies inside `app/`.
- Builds the Next app.
- Uses the Vercel Action to deploy (requires the secrets above).


```npm run dev``` — runs the "dev" script defined in package.json (usually starts a development server with hot reload). Use this while developing.

```npm run build``` (or ```npm run build --silent```) — runs the "build" script (usually produces an optimized production build). Use this to compile and check the app before deploying. The --silent flag silences npm's own log noise.


dev test commands 
```
#kill dev container to restart
pkill -f "next dev" || true && sleep 2

#restart dev container
npm run dev --prefix=./app

```