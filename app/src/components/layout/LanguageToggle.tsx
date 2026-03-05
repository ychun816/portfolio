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

  const activeColor = isNight ? 'rgba(150, 200, 255, 0.95)' : 'rgba(100, 50, 180, 1)';
  const inactiveColor = isNight ? 'rgba(150, 200, 255, 0.35)' : 'rgba(100, 50, 180, 0.3)';

  return (
    <button
      onClick={toggleLang}
      className="fixed top-6 right-[5.5rem] z-50 px-3 py-2 rounded-full transition-colors duration-300 font-semibold text-xs tracking-widest"
      aria-label={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
      style={{
        backgroundColor: isNight ? 'rgba(150, 200, 255, 0.15)' : 'rgba(196, 181, 253, 0.25)',
        border: isNight ? '1px solid rgba(150, 200, 255, 0.3)' : '1px solid rgba(196, 181, 253, 0.4)',
      }}
    >
      <span style={{ color: lang === 'en' ? activeColor : inactiveColor }}>EN</span>
      <span style={{ color: isNight ? 'rgba(150, 200, 255, 0.45)' : 'rgba(100, 50, 180, 0.45)' }}>{' '}|{' '}</span>
      <span style={{ color: lang === 'fr' ? activeColor : inactiveColor }}>FR</span>
    </button>
  );
}
