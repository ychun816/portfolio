/**
 * Shared TypeScript types used across the portfolio.
 */

export type Theme = 'day' | 'night';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export interface SVGTextClipProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** Indices of word spans to apply the accent/highlight color */
  highlightSpans?: number[];
}
