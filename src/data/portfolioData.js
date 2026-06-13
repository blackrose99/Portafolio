// ============================================================
//  PORTFOLIO DATA — STRUCTURAL source of truth
//  Language-independent only: contact links, icon keys, tags,
//  logo keys, percentages, ids. All human-readable copy lives
//  in src/i18n/locales.js and is merged by index/id at render.
//  Channels are exposed ONLY as icon links (no plain-text PII).
// ============================================================

export const profile = {
  fullName: 'Luis Manuel Castaño Grueso',
  displayName: 'Luis Castaño',
  firstName: 'Luis Manuel',
  lastName: 'Castaño Grueso',
  location: 'Bucaramanga, Colombia',

  // Contact channels — used ONLY as icon links, never rendered as text.
  // Kept after the cleanup: Email, GitHub, LinkedIn, Telegram.
  email: 'mannuelcast321@gmail.com',
  github: 'https://github.com/blackrose99',
  linkedin: 'https://www.linkedin.com/in/luis-manuel-casta%C3%B1o-grueso-167881197/',
  telegram: 'https://t.me/Lmcastano',
};

// Quick interactive figures for the hero. `value` is language-agnostic;
// the label comes from the active locale (stats[i].label).
export const stats = [
  { value: '6' },
  { value: '14+' },
  { value: '3+' },
  { value: '∞' },
];

// Tech names are proper nouns → identical across languages.
// Only the group `label` is translated (via locale.skills.groups[level]).
export const skills = [
  { name: 'PHP',            level: 'daily' },
  { name: 'Symfony',        level: 'daily' },
  { name: 'JavaScript',     level: 'daily' },
  { name: 'jQuery',         level: 'daily' },
  { name: 'MariaDB',        level: 'daily' },
  { name: 'MySQL',          level: 'daily' },
  { name: 'React',          level: 'experienced' },
  { name: 'Laravel',        level: 'experienced' },
  { name: 'Java',           level: 'experienced' },
  { name: 'Spring',         level: 'experienced' },
  { name: 'Python',         level: 'experienced' },
  { name: 'Node.js',        level: 'experienced' },
  { name: 'PostgreSQL',     level: 'experienced' },
  { name: 'MongoDB',        level: 'experienced' },
  { name: 'HTML5',          level: 'experienced' },
  { name: 'CSS3',           level: 'experienced' },
  { name: 'Tailwind',       level: 'experienced' },
  { name: 'Bootstrap',      level: 'experienced' },
  { name: 'Docker',         level: 'learning' },
  { name: 'Kubernetes',     level: 'learning' },
  { name: 'React Native',   level: 'learning' },
  { name: 'Flutter',        level: 'learning' },
  { name: 'ML / AI',        level: 'learning' },
  { name: 'Agentic Coding', level: 'learning' },
  { name: 'GitHub',         level: 'tool' },
  { name: 'GitLab',         level: 'tool' },
  { name: 'ClickUp',        level: 'tool' },
  { name: 'Trello',         level: 'tool' },
  { name: 'Linux',          level: 'tool' },
];

// Education / certifications — structure only.
// `logo` → image badge (institutions); `icon` → vector glyph (certs).
// degree / status text come from the locale, matched by `id`.
export const education = [
  { id: 1, kind: 'degree', logo: 'uts',        period: '2021 – 2026', place: 'Bucaramanga, Santander' },
  { id: 2, kind: 'degree', logo: 'uts',        period: '2021 – 2023', place: 'Bucaramanga, Santander' },
  { id: 3, kind: 'degree', logo: 'sena',       period: '2017 – 2018', place: 'Cimitarra, Santander' },
  { id: 4, kind: 'degree', logo: 'candelaria', period: '2018',        place: 'Cimitarra, Santander' },
  { id: 5, kind: 'cert',   icon: 'network',    period: '2023',        place: 'MikroTik' },
  { id: 6, kind: 'cert',   icon: 'security',   period: '2024',        place: 'ISO/IEC' },
];

// Soft skills — icon key only; name/description from locale by index.
export const softSkills = [
  { icon: 'chat' },
  { icon: 'team' },
  { icon: 'bulb' },
  { icon: 'rocket' },
  { icon: 'flow' },
  { icon: 'flag' },
];

// Spoken languages — percentage only; name/level from locale by index.
export const languages = [
  { percent: 100 },
  { percent: 35 },
];

// Services — icon key + tech tags (proper nouns) are language-agnostic;
// title/desc come from the locale by index.
export const services = [
  { icon: 'web',      tags: ['PHP', 'Symfony', 'Laravel', 'React'] },
  { icon: 'mobile',   tags: ['React Native', 'Flutter', 'PWA'] },
  { icon: 'api',      tags: ['REST', 'JSON', 'JWT', 'Node.js'] },
  { icon: 'db',       tags: ['MySQL', 'MariaDB', 'PostgreSQL'] },
  { icon: 'ui',       tags: ['React', 'JavaScript', 'Tailwind'] },
  { icon: 'advisory', tags: ['Consulting', 'Architecture', 'Code Review'] },
  { icon: 'perf',     tags: ['Profiling', 'Caching', 'Refactoring'] },
];
