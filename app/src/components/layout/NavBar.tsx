"use client";

import { NAV_LINKS, type SectionId } from '@/lib/constants';
import { useTheme } from '@/context/ThemeContext';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function NavBar() {
  const { theme } = useTheme();
  const activeSection = useActiveSection();
  const isNight = theme === 'night';

  const isActive = (sectionId: SectionId) => {
    if (sectionId === 'certificates') {
      return activeSection === 'certificates' || activeSection === 'certificate';
    }
    return activeSection === sectionId;
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <style>{`
        .nav-link {
          position: relative;
          font-size: 1.5rem;
          padding: 0.75rem 0.75rem;
          transition: all 0.3s cubic-bezier(0.2, 0.6, 0.3, 0.8);
          text-decoration: none;
          font-weight: 500;
        }

        .nav-link-day {
          color: rgba(120, 80, 200, 0.95);
        }

        .nav-link-day:hover,
        .nav-link-day.active {
          color: rgba(100, 50, 180, 1);
          transform: scale(1.2);
          font-size: 1.7rem;
          text-shadow: 0 0 20px rgba(180, 160, 240, 0.6), 0 0 40px rgba(180, 160, 240, 0.3);
          filter: drop-shadow(0 0 8px rgba(180, 160, 240, 0.5));
        }

        .nav-link-night {
          color: rgba(100, 180, 240, 0.8);
        }

        .nav-link-night:hover,
        .nav-link-night.active {
          color: rgba(100, 180, 240, 1);
          transform: scale(1.2);
          font-size: 1.7rem;
          text-shadow: 0 0 20px rgba(100, 180, 240, 0.6), 0 0 40px rgba(100, 180, 240, 0.3);
          filter: drop-shadow(0 0 8px rgba(100, 180, 240, 0.5));
        }
      `}</style>

      <ul className="flex gap-6 class-display" style={{ color: 'inherit' }}>
        {NAV_LINKS.map(({ label, href, sectionId }) => (
          <li key={sectionId}>
            <a
              href={href}
              className={`nav-link ${isNight ? 'nav-link-night' : 'nav-link-day'} ${isActive(sectionId) ? 'active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
