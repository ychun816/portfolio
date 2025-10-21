# Yichun LIN - Portfolio Website# portfolio



A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and featuring day/night theme switching.

初始化 Next.js 專案 (TypeScript + TailwindCSS)

## 🚀 Quick Start```bash

# 在 Codespace 內的 repo 資料夾初始化 Next.js 專案

### Developmentnpx create-next-app@latest . --typescript



```bash# 安裝 TailwindCSS 與 Framer Motion（動畫庫）

cd appnpm install tailwindcss framer-motion

npm install

npm run dev# 初始化 TailwindCSS 配置檔

# Open http://localhost:3000npx tailwindcss init -p

``````



### Production Build配置 TailwindCSS

編輯  tailwind.config.js ，設定掃描內容：

```bash```js

cd appmodule.exports = {

npm run build  content: [

npm run start    "./pages/**/*.{js,ts,jsx,tsx}",

```    "./components/**/*.{js,ts,jsx,tsx}"

  ],

## 📁 Project Structure  theme: { extend: {} },

  plugins: []

```};

portfolio/```

├── app/                              # Next.js 15 Application

│   ├── app/編輯  styles/globals.css ，加入 Tailwind 指令：

│   │   ├── layout.tsx               # Root layout (ThemeProvider, BackgroundRenderer)```css

│   │   ├── page.tsx                 # Home page (renders all sections)@tailwind base;

│   │   └── globals.css              # Global styles (SINGLE source)@tailwind components;

│   ├── components/@tailwind utilities;

│   │   ├── sections/```

│   │   │   ├── HomeSection.tsx      # Hero section with title & social links

│   │   │   ├── IntroSection.tsx     # About Me section## Local development

│   │   │   ├── ProjectsSection.tsx  # Projects showcase

│   │   │   ├── ResumeSection.tsx    # Resume with PDF viewer & downloadTo run the scaffolded Next.js app locally (the app lives in the `app/` folder):

│   │   │   ├── ContactSection.tsx   # Contact form

│   │   ├── BackgroundRenderer.tsx   # Day/Night background switcher1. Install dependencies and start the dev server:

│   │   ├── DayBackground.tsx        # Light mode background

│   │   ├── NightBackground.tsx      # Dark mode background```bash

│   │   ├── NavBar.tsx               # Navigation barcd app

│   │   ├── ThemeToggle.tsx          # Theme toggle buttonnpm install

│   │   └── SocialLinks.tsx          # Social media iconsnpm run dev

│   ├── context/# open http://localhost:3000

│   │   └── ThemeContext.tsx         # Global theme state (localStorage)```

│   ├── public/

│   │   ├── resume.pdf               # Resume PDF file2. Tailwind is already configured (`app/tailwind.config.js`, `app/postcss.config.js`, and `app/app/globals.css`). If you change the Tailwind config, restart the dev server.

│   │   └── fonts/

│   │       ├── clash-display/       # Clash Display font files## Automated deploys (Vercel)

│   │       └── recife/              # Recife font files

│   ├── package.jsonThe recommended way to host a Next.js app is Vercel. There are two simple options:

│   ├── tsconfig.json

│   ├── next.config.ts- Connect the GitHub repo to Vercel using the Vercel dashboard (recommended):

│   ├── tailwind.config.js  1. Go to https://vercel.com/new and import your GitHub repository.

│   └── postcss.config.js  2. Vercel will detect the Next.js app inside the `app/` directory — set the Root Directory to `app` if needed.

├── .github/                         # GitHub Actions workflows 3. Every push to `master` will trigger a deployment automatically.

├── .git/                            # Git repository

├── package.json                     # Root package.json- Or use the included GitHub Actions workflow (below) to deploy with the Vercel Action. You must add these repository secrets in GitHub:

├── README.md                        # This file  - `VERCEL_TOKEN` — a personal token from https://vercel.com/account/tokens

└── STRUCTURE.md                     # Detailed documentation  - `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` — available from your Vercel project settings

```

After adding secrets, pushes to `master` will trigger the workflow and deploy to Vercel.

## 🎨 Features

## GitHub Actions (optional)

### Day/Night Theme System

- **Toggle Button**: Located in top-right cornerThere's a ready workflow at `.github/workflows/deploy-to-vercel.yml` which:

- **Persistent**: Saved to localStorage

- **Adaptive Colors**:- Installs dependencies inside `app/`.

  - Day: Light grey text (#d1d5db) on light background- Builds the Next app.

  - Night: Dark grey text (#4b5563) on dark background- Uses the Vercel Action to deploy (requires the secrets above).



### Animated Backgrounds

- **Day Mode**: Pastel purple/blue/pink blobs (50-60% opacity) with grain overlay```npm run dev``` — runs the "dev" script defined in package.json (usually starts a development server with hot reload). Use this while developing.

- **Night Mode**: Soft blue/green blobs with screen blend mode

- Smooth transitions between themes```npm run build``` (or ```npm run build --silent```) — runs the "build" script (usually produces an optimized production build). Use this to compile and check the app before deploying. The --silent flag silences npm's own log noise.



### Responsive Design

- Mobile-first approachdev test commands 

- Desktop breakpoints (`md:`)```

- Optimized PDF viewer for all screen sizes#kill dev container to restart

pkill -f "next dev" || true && sleep 2

### Typography

- **Display**: Clash Display (80px on desktop, 56px on mobile)#restart dev container

- **Body**: Futura with system fallbacksnpm run dev --prefix=./app

- **Adaptive**: Text colors change with theme

```
### Interactive Elements
- Underlined links with hover effects (opacity 70%)
- Social media icons with theme colors
- Scroll indicator animation
- Download button for resume (neon green)

## 🔧 Technology Stack

- **Framework**: Next.js 15.5.6 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **State Management**: React Context API
- **Fonts**: Clash Display, Futura
- **Animations**: CSS keyframes, Tailwind animations

## 📝 Styling Architecture

### CSS Variables (Theme System)
```css
html[data-theme="day"] {
  --foreground: #d1d5db; /* Light grey for day */
}

html[data-theme="night"] {
  --foreground: #4b5563; /* Dark grey for night */
}
```

### Usage in Components
```tsx
// Text automatically adapts to theme
className="text-[color:var(--foreground)]"

// Links with theme-aware underlines
style={{ textDecorationColor: 'var(--foreground)' }}
```

## 📚 Key Components

### HomeSection
- Hero title with accent color on name
- Two-line description with styled links
- Social media icons (LinkedIn, GitHub, Email, Resume)
- Scroll indicator animation

### IntroSection
- "About Me" title
- Professional background narrative
- Links to projects and LinkedIn profile
- Multiple paragraphs with proper spacing

### ProjectsSection
- Projects grid layout
- Responsive 1-2 column design

### ResumeSection
- Embedded PDF viewer (600px height on desktop)
- Neon green download button (#39ff14)
- Call-to-action footer with email and contact form links

### ContactSection
- Contact form with name, email, message fields
- Purple submit button matching theme accent

## 🎯 Workflow Best Practices

### Development
1. Start dev server: `npm run dev`
2. Components auto-refresh on save (Turbopack)
3. Test in both day/night themes

### Styling
- ✅ Use Tailwind utilities first
- ✅ Use CSS variables for theme colors
- ✅ Add inline styles only for dynamic values
- ❌ Avoid global CSS overrides
- ❌ Never use !important flags

### Git Workflow
```bash
# Commit changes
git add .
git commit -m "feat: Describe changes"

# Pull with conflict resolution
git stash
git pull
git stash pop

# Push changes
git push
```

### Dev Commands
```bash
# Kill and restart dev server
pkill -f "next dev" || true && sleep 2
npm run dev --prefix=./app

# Build for production
npm run build --prefix=./app

# Run production build
npm run start --prefix=./app
```

## 📄 Resume PDF Setup

Store your resume PDF in the public directory:
- **Path**: `/app/public/resume.pdf` or `/app/public/LIN-Yichun_Resume_20251021.pdf`
- **Viewer**: Embedded iframe displays PDF in ResumeSection
- **Download**: Visitors can download with "Download PDF" button

## 🌐 Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet/Desktop**: `md:` breakpoint (≥ 768px)

Examples:
- `text-lg md:text-xl` - Small on mobile, larger on desktop
- `h-96 md:h-[600px]` - 384px on mobile, 600px on desktop

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### GitHub Actions
Push to master branch to trigger automatic deployment (if configured).

## 📞 Contact & Links

- **Email**: ychun8lin@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/sophia-lin-profile/
- **GitHub**: https://github.com/ychun816
- **School**: École 42 Paris

## 📜 License

MIT
