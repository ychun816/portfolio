"use client";

import { useTheme } from '@/context/ThemeContext';
import NightBackground from './NightBackground';
import DayBackground from './DayBackground';
import { useState, useEffect } from 'react';

export default function BackgroundRenderer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <NightBackground />;
  }

  return theme === 'day' ? <DayBackground /> : <NightBackground />;
}
