# Portfolio Project Structure & Workflow

## 📁 Directory Organization

```
portfolio/
├── app/                              # Next.js 15 Application
│   ├── app/
│   │   ├── layout.tsx               # Root layout (ThemeProvider, BackgroundRenderer)
│   │   ├── page.tsx                 # Home page (renders all sections)
│   │   └── globals.css              # SINGLE global styles file
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HomeSection.tsx      # Hero section with title & social links
│   │   │   ├── IntroSection.tsx     # About Me section
│   │   │   ├── ProjectsSection.tsx  # Projects showcase
│   │   │   ├── ResumeSection.tsx    # Resume with PDF viewer & download
│   │   │   ├── ContactSection.tsx   # Contact form
│   │   ├── BackgroundRenderer.tsx   # Day/Night background switcher
│   │   ├── DayBackground.tsx        # Light mode background
│   │   ├── NightBackground.tsx      # Dark mode background
│   │   ├── NavBar.tsx               # Navigation bar
│   │   ├── ThemeToggle.tsx          # Theme toggle button
│   │   └── SocialLinks.tsx          # Social media icons
│   ├── context/
│   │   └── ThemeContext.tsx         # Global theme state management
│   ├── public/
│   │   ├── resume.pdf               # Resume PDF file
│   │   ├── fonts/
│   │   │   ├── clash-display/       # Clash Display font files
│   │   │   └── recife/              # Recife font files
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── README.md
├── .github/                          # GitHub Actions workflows
├── .git/                             # Git repository
├── package.json                      # Root package.json
├── tailwind.config.js               # Root tailwind config
├── postcss.config.js                # Root postcss config
├── README.md
└── STRUCTURE.md                     # This file
```

## 🎨 Styling Architecture

### Global Styles (`app/app/globals.css`)
- **Tailwind directives**: @tailwind base/components/utilities
- **CSS variables**: Theme colors (day/night modes)
- **@layer base**: H1 sizing (80px desktop / 56px mobile)
- **Font faces**: Futura, Clash Display
- **Utilities**: .glass class for glassmorphism

### Theme System
- **CSS Variables**:
  - `--foreground`: #d1d5db (day) / #4b5563 (night)
  - `--accent`: #8b5cf6 (purple)
  - `--font-display`: Clash Display font stack

- **Data Attributes**: `html[data-theme="day|night"]`
- **Tailwind Utilities**: text-lg, hover:opacity-70, etc.

### Responsive Design
- Mobile-first approach
- `md:` breakpoint for tablet/desktop
- Custom h1 sizing via @layer base

## 🔄 Workflow Best Practices

### 1. Component Development
```bash
# Start dev server
cd /workspaces/portfolio/app
npm run dev

# Components auto-refresh on save
# Open http://localhost:3000
```

### 2. Styling Guidelines
- ✅ Use Tailwind utilities first
- ✅ Use CSS variables for theme colors
- ✅ Add inline styles only for dynamic values
- ❌ Avoid inline CSS classes for static styling
- ❌ Never duplicate styles across sections

### 3. Theme-Aware Components
```tsx
// Always use CSS variables for theme colors
className="text-[color:var(--foreground)]"
style={{ textDecorationColor: 'var(--foreground)' }}
```

### 4. Git Workflow
```bash
# Before pulling
git add .
git commit -m "feat: Describe your changes"

# Pull with stash if needed
git stash
git pull
git stash pop

# Push changes
git push
```

## 🎯 Key Features

### Day/Night Theme
- Toggle button (top-right)
- Persists via localStorage
- Affects: backgrounds, text colors, icons

### Responsive Backgrounds
- DayBackground: Pastel blobs (50-60% opacity)
- NightBackground: Soft blue/green blobs
- Animated grain overlay on day mode

### Typography
- **Display**: Clash Display (80px h1)
- **Body**: Futura (lg/xl text)
- **Font Colors**: Adaptive via CSS variables

### Interactive Elements
- Underlined links with hover effects
- Social media icons with theme colors
- Scroll indicator with bounce animation
- Theme toggle with smooth transitions

## 📝 Common Tasks

### Add New Section
1. Create `app/components/sections/SectionName.tsx`
2. Add id attribute: `<section id="section-name">`
3. Use theme colors: `text-[color:var(--foreground)]`
4. Import in `app/page.tsx`

### Update Global Styles
1. Edit `app/app/globals.css`
2. Use @layer base/components for proper cascade
3. Avoid !important flags
4. Test in both day/night modes

### Change Colors
1. Update CSS variables in `:root`
2. Or override in `html[data-theme="day|night"]`
3. All components automatically inherit changes

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run start

# Deploy to Vercel (recommended for Next.js)
vercel deploy
```

## 📚 Technologies

- **Framework**: Next.js 15.5.6 (Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **State**: React Context API
- **Fonts**: Clash Display, Futura
- **Animations**: CSS keyframes, Tailwind animations
