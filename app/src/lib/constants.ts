/**
 * Site-wide constants for navigation sections, metadata, and configuration.
 */

export const SECTION_IDS = [
  'home',
  'intro',
  'certificates',
  'projects',
  'resume',
  'contact',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LINKS: { label: string; href: string; sectionId: SectionId }[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'Intro', href: '#intro', sectionId: 'intro' },
  { label: 'Certificates', href: '#certificates', sectionId: 'certificates' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Resume', href: '#resume', sectionId: 'resume' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export const RESUME_FILE = 'LIN_Yichun_DevOps_CV_EN.pdf';
