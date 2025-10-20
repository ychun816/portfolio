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