import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'rotate-fast': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-fast-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'rotate-fast': 'rotate-fast 40s linear infinite',
        'rotate-fast-reverse': 'rotate-fast-reverse 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
