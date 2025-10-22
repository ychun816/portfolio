# My Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and featuring **day/night theme switching** with interactive cursor-tracking animations.

# Table of Contents

- [🚀 Quick Start](#-quick-start)
- [🔧 Technology Stack](#-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🎨 Features](#-features)
- [📝 Styling Architecture](#-styling-architecture)
- [📚 Key Components](#-key-components)
- [🎯 Workflow Best Practices](#-workflow-best-practices)
- [🌐 Responsive Breakpoints](#-responsive-breakpoints)
- [🚀 Deployment](#-deployment)
- [📞 Contact & Links](#-contact--links)
- [📜 License](#-license)


## 🚀 Quick Start

### Development

```bash
cd app
npm install
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
cd app
npm run build
npm run start
```

## 🔧 Technology Stack

- **Framework**: Next.js 15.5.6 with Turbopack compiler
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS (globals.css with embedded `@font-face`)
- **State Management**: React Context API (ThemeContext)
- **Fonts**: Self-hosted Clash Display (Regular, Medium, Bold, Variable), Futura
- **Animations**: CSS @keyframes with cubic-bezier easing, JavaScript mousemove events
- **Dev Container**: Docker with Node 20, build tools (build-essential, git, curl, jq)

## 📁 Project Structure

```
portfolio/
├── app/                              # Next.js 15 Application
│   ├── app/
│   │   ├── layout.tsx               # Root layout (ThemeProvider, BackgroundRenderer, CursorGlow)
│   │   ├── page.tsx                 # Home page (renders all sections)
│   │   └── globals.css              # Global styles with embedded @font-face
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HomeSection.tsx      # Hero section with title & social links
│   │   │   ├── IntroSection.tsx     # About Me section
│   │   │   ├── ProjectsSection.tsx  # Projects showcase
│   │   │   ├── ResumeSection.tsx    # Resume with PDF viewer & download
│   │   │   └── ContactSection.tsx   # Contact form
│   │   ├── BackgroundRenderer.tsx   # Day/Night background switcher
│   │   ├── DayBackground.tsx        # Light mode animated background
│   │   ├── NightBackground.tsx      # Dark mode animated background
│   │   ├── CursorGlow.tsx           # Interactive cursor-tracking 4-blob animation
│   │   ├── NavBar.tsx               # Navigation bar with scroll tracking
│   │   ├── ThemeToggle.tsx          # Theme toggle button
│   │   ├── SVGTextClip.tsx          # SVG text clipping for scroll reveal
│   │   ├── FadeInUp.tsx             # Fade-in-up animation component
│   │   └── SocialLinks.tsx          # Social media icons
│   ├── context/
│   │   └── ThemeContext.tsx         # Global theme state (localStorage persistence)
│   ├── hooks/
│   │   ├── useActiveSection.ts      # Track active section during scroll
│   │   └── useScrollReveal.ts       # Scroll-based reveal animations
│   ├── public/
│   │   ├── favicon.ico              # Site favicon
│   │   ├── LIN-Yichun_Resume_20251021.pdf # Resume PDF
│   │   └── fonts/
│   │       ├── clash-display/       # Clash Display font (Regular, Medium, Bold, Variable)
│   │       └── recife/              # Recife font CSS
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── tailwind.config.js
│   └── postcss.config.js
├── .devcontainer/
│   ├── devcontainer.json            # VS Code dev container configuration
│   └── Dockerfile                   # Container image with Node 20 + build tools
├── README.md                        # This file
└── STRUCTURE.md                     # Detailed documentation
```



## 🎨 Features

### ✨ Interactive Cursor Animation

- **Theme-Aware Settings**:
  - **Night Mode**
  - **Day Mode**
- **Performance**: Using `pointer-events-none` and CSS animations for smooth tracking
- **Smart Positioning**: Primary blob at cursor, additional blobs with staggered offsets and delays
- **Responsive**: Scales appropriately with viewport


### 📱 Responsive Design

- Mobile-first approach
- Desktop breakpoints with `md:` utilities
- Optimized layout for all screen sizes
- Proper spacing and typography scaling

### 🔤 Typography

- **Display Font**: self-hosted, embedded via `@font-face`
- **Body Font**: Built-in font with system fallbacks

### 🎯 Interactive Elements

- **Hover Effects**
- **Scroll Animations**
- **Navigation**
- **PDF Viewer**


## 📝 Styling Architecture

### CSS Variables & Theme System

```css
:root {}
html[data-theme="day"] {}
html[data-theme="night"] {}
```

### Utility Classes

- `.class-display`: Applies self-host font with proper letter-spacing and weight
- `.cursor-glow-blob-*`: Animated blob positioning and styling
- Tailwind utilities for responsive spacing, sizing, and layout

## 📚 Key Components

### HomeSection
- Hero title with Clash Display font
- Two-line description with styled links
- Social media icons (LinkedIn, GitHub, Email, Resume)
- Scroll indicator animation

### IntroSection
- "About Me" title
- Professional background narrative
- Links to projects and LinkedIn
- Multiple paragraphs with proper spacing

### ProjectsSection
- Projects grid layout
- Responsive 1-2 column design
- Scroll reveal animations

### ResumeSection
- Embedded PDF viewer (responsive height)
- Download button
- Call-to-action footer

### ContactSection
- Contact form with email, subject, and message fields
- FormBold integration for direct email submission
- Social media links (LinkedIn, GitHub)
- Theme-aware submit button with hover effects

### CursorGlow
- Real-time cursor tracking with mousemove event
- 4 layered blobs with different offsets and delays
- Dynamic gradient colors based on theme
- Multiple animation keyframes for organic motion

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

## 🌐 Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet/Desktop**: `md:` breakpoint (≥ 768px)

Examples:
- `text-lg md:text-xl` - Small on mobile, larger on desktop
- `h-96 md:h-[600px]` - 384px on mobile, 600px on desktop

## 🚀 Deployment

### Vercel (Recommended - Step by Step)

#### Option 1: Using Vercel Dashboard (Easiest)

1. **Open Vercel**: Go to https://vercel.com/new in your browser

2. **Connect GitHub**:
   - Click "Import Project" or "Continue with GitHub"
   - Authorize Vercel to access your GitHub account
   - Select your repository: `ychun816/portfolio`

3. **Configure Project Settings**:
   - **Project Name**: Keep as is or rename (e.g., `portfolio`)
   - **Framework**: Next.js (auto-detected) ✓
   - **Root Directory**: Change from `.` to `app` ⚠️ **Important!**
   - **Build Command**: `npm run build` (auto-detected) ✓
   - **Install Command**: `npm ci` (auto-detected) ✓
   - **Output Directory**: `.next` (auto-detected) ✓

4. **Click "Deploy"**
   - Wait 2-5 minutes for build to complete
   - You'll get a live URL like `https://portfolio-xyz.vercel.app` 🎉

#### Option 2: Using Vercel CLI

```bash
npm install -g vercel
cd app
vercel deploy
```

### Auto-Deployment with GitHub

Once connected to Vercel:
- ✅ Every push to `master` branch automatically deploys
- ✅ No manual steps needed
- ✅ See deployment status in GitHub Actions

### Rollback & History

- Vercel keeps deployment history
- You can rollback to previous versions from Vercel dashboard
- Each push creates a new deployment

### Environment Variables (If Needed)

If you add environment variables later:
1. Go to Vercel Dashboard → Your Project → Settings
2. Add variables under "Environment Variables"
3. Redeploy to apply changes

## 📞 Contact & Links

- **Email**: sophia.lin168@protonmail.com
- **LinkedIn**: https://www.linkedin.com/in/sophia-lin-profile/
- **GitHub**: https://github.com/ychun816
- **School**: École 42 Paris

## 📜 License

MIT

