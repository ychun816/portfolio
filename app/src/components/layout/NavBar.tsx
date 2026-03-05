"use client";

import { useState } from 'react';
import { NAV_LINKS, type SectionId } from '@/lib/constants';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useActiveSection } from '@/hooks/useActiveSection';
import { translations } from '@/lib/translations';

export default function NavBar() {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const activeSection = useActiveSection();
  const isNight = theme === 'night';
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  const isActive = (sectionId: SectionId) => {
    if (sectionId === 'certificates') {
      return activeSection === 'certificates' || activeSection === 'certificate';
    }
    return activeSection === sectionId;
  };

  const themeColors = {
    btn: isNight
      ? { bg: 'rgba(150, 200, 255, 0.15)', border: '1px solid rgba(150, 200, 255, 0.3)', icon: 'rgba(150, 200, 255, 0.8)' }
      : { bg: 'rgba(196, 181, 253, 0.25)', border: '1px solid rgba(196, 181, 253, 0.4)', icon: 'rgba(120, 80, 200, 0.95)' },
    overlay: isNight ? 'rgba(10, 15, 30, 0.96)' : 'rgba(240, 235, 255, 0.96)',
  };

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-size: 1.5rem;
          padding: 0.75rem 0.75rem;
          transition: all 0.3s cubic-bezier(0.2, 0.6, 0.3, 0.8);
          text-decoration: none;
          font-weight: 500;
        }
        .nav-link-day  { color: rgba(120, 80, 200, 0.95); }
        .nav-link-day:hover, .nav-link-day.active {
          color: rgba(100, 50, 180, 1); transform: scale(1.2); font-size: 1.7rem;
          text-shadow: 0 0 20px rgba(180, 160, 240, 0.6), 0 0 40px rgba(180, 160, 240, 0.3);
          filter: drop-shadow(0 0 8px rgba(180, 160, 240, 0.5));
        }
        .nav-link-night { color: rgba(100, 180, 240, 0.8); }
        .nav-link-night:hover, .nav-link-night.active {
          color: rgba(100, 180, 240, 1); transform: scale(1.2); font-size: 1.7rem;
          text-shadow: 0 0 20px rgba(100, 180, 240, 0.6), 0 0 40px rgba(100, 180, 240, 0.3);
          filter: drop-shadow(0 0 8px rgba(100, 180, 240, 0.5));
        }
        /* Mobile overlay nav links — no scale effect, just color + italic */
        .nav-link-mobile {
          font-size: 2rem;
          padding: 0.6rem 1.5rem;
          text-decoration: none;
          font-weight: 500;
          display: block;
          transition: all 0.2s ease;
          text-align: center;
        }
        .nav-link-mobile.active { font-style: italic; font-weight: 700; }
      `}</style>

      {/* ── Desktop nav (md and above) ──────────────────────────────────── */}
      <nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex gap-6 class-display" style={{ color: 'inherit' }}>
          {NAV_LINKS.map(({ href, sectionId }) => (
            <li key={sectionId}>
              <a
                href={href}
                className={`nav-link ${isNight ? 'nav-link-night' : 'nav-link-day'} ${isActive(sectionId) ? 'active' : ''}`}
              >
                {t[sectionId as keyof typeof t]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile hamburger button (below md) ─────────────────────────── */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full transition-colors duration-300"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        style={{ backgroundColor: themeColors.btn.bg, border: themeColors.btn.border }}
      >
        {isOpen ? (
          <svg className="w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24"
            style={{ color: themeColors.btn.icon }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24"
            style={{ color: themeColors.btn.icon }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* ── Mobile full-screen overlay menu ────────────────────────────── */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{ backgroundColor: themeColors.overlay, backdropFilter: 'blur(14px)' }}
          onClick={() => setIsOpen(false)}
        >
          <ul className="flex flex-col items-center gap-1 class-display">
            {NAV_LINKS.map(({ href, sectionId }) => (
              <li key={sectionId}>
                <a
                  href={href}
                  className={`nav-link-mobile ${isNight ? 'nav-link-night' : 'nav-link-day'} ${isActive(sectionId) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {t[sectionId as keyof typeof t]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
