"use client";

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isNight = theme === 'night';

  return (
    <button
      onClick={toggleLang}
      className="fixed top-6 right-[5.5rem] z-50 px-3 py-2 rounded-full transition-colors duration-300 font-semibold text-xs tracking-widest"
      aria-label={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
      style={{
        backgroundColor: isNight ? 'rgba(150, 200, 255, 0.15)' : 'rgba(196, 181, 253, 0.25)',
        border: isNight ? '1px solid rgba(150, 200, 255, 0.3)' : '1px solid rgba(196, 181, 253, 0.4)',
        color: isNight ? 'rgba(150, 200, 255, 0.85)' : 'rgba(100, 50, 180, 0.9)',
        minWidth: '2.75rem',
      }}
    >
      {lang === 'en' ? 'FR' : 'EN'}
    </button>
  );
}
