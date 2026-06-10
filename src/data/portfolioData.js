// ============================================================
//  PORTFOLIO DATA — single source of truth (English content)
//  Browser auto-translation friendly. No PDFs, no exposed
//  sensitive contact info (channels live only as icon links).
// ============================================================

export const profile = {
  fullName: 'Luis Manuel Castaño Grueso',
  displayName: 'Luis Castaño',
  title: 'Full Stack Developer',
  eyebrow: 'Full Stack Developer',
  tagline: 'I build scalable, efficient, high-impact software.',
  bio: `Systems Engineer specialized in full-stack web development and software optimization.
I work with PHP and Symfony in production, craft dynamic interfaces with React and JavaScript,
integrate RESTful APIs and tune relational databases — turning bottlenecks into performance
and ideas into real impact.`,
  location: 'Bucaramanga, Colombia',

  // Contact channels — used ONLY as icon links, never rendered as text.
  email: 'mannuelcast321@gmail.com',
  phone: '573168142027',
  github: 'https://github.com/blackrose99',
  linkedin: 'https://www.linkedin.com/in/luis-manuel-casta%C3%B1o-grueso-167881197/',
  whatsapp: 'https://wa.me/573168142027',
  telegram: 'https://t.me/Lmcastano',
  facebook: 'https://www.facebook.com/LuisManuelCastano14/',
  instagram: 'https://www.instagram.com/luismanuelcastano14/',
  twitter: 'https://twitter.com/Manuel_0914',
};

// Quick interactive figures for the hero / about strip.
export const stats = [
  { value: '6',   label: 'Daily-driver technologies' },
  { value: '14+', label: 'Technologies in my toolbox' },
  { value: '3+',  label: 'Years building software' },
  { value: '∞',   label: 'Curiosity for new tech' },
];

export const skills = [
  { name: 'PHP',            category: 'Daily Professional Use', level: 'daily' },
  { name: 'Symfony',        category: 'Daily Professional Use', level: 'daily' },
  { name: 'JavaScript',     category: 'Daily Professional Use', level: 'daily' },
  { name: 'jQuery',         category: 'Daily Professional Use', level: 'daily' },
  { name: 'MariaDB',        category: 'Daily Professional Use', level: 'daily' },
  { name: 'MySQL',          category: 'Daily Professional Use', level: 'daily' },
  { name: 'React',          category: 'Experienced',            level: 'experienced' },
  { name: 'Laravel',        category: 'Experienced',            level: 'experienced' },
  { name: 'Java',           category: 'Experienced',            level: 'experienced' },
  { name: 'Spring',         category: 'Experienced',            level: 'experienced' },
  { name: 'Python',         category: 'Experienced',            level: 'experienced' },
  { name: 'Node.js',        category: 'Experienced',            level: 'experienced' },
  { name: 'PostgreSQL',     category: 'Experienced',            level: 'experienced' },
  { name: 'MongoDB',        category: 'Experienced',            level: 'experienced' },
  { name: 'HTML5',          category: 'Frontend',               level: 'experienced' },
  { name: 'CSS3',           category: 'Frontend',               level: 'experienced' },
  { name: 'Tailwind',       category: 'Frontend',               level: 'experienced' },
  { name: 'Bootstrap',      category: 'Frontend',               level: 'experienced' },
  { name: 'Docker',         category: 'Actively Learning',      level: 'learning' },
  { name: 'Kubernetes',     category: 'Actively Learning',      level: 'learning' },
  { name: 'React Native',   category: 'Actively Learning',      level: 'learning' },
  { name: 'Flutter',        category: 'Actively Learning',      level: 'learning' },
  { name: 'ML / AI',        category: 'Actively Learning',      level: 'learning' },
  { name: 'Agentic Coding', category: 'Actively Learning',      level: 'learning' },
  { name: 'GitHub',         category: 'Tools',                  level: 'tool' },
  { name: 'GitLab',         category: 'Tools',                  level: 'tool' },
  { name: 'ClickUp',        category: 'Tools',                  level: 'tool' },
  { name: 'Trello',         category: 'Tools',                  level: 'tool' },
  { name: 'Linux',          category: 'Tools',                  level: 'tool' },
];

export const education = [
  {
    id: 1,
    institution: 'Unidades Tecnológicas de Santander',
    degree: 'Systems Engineering',
    period: '2021 – 2026',
    location: 'Bucaramanga, Santander',
    status: 'Graduated',
  },
  {
    id: 2,
    institution: 'Unidades Tecnológicas de Santander',
    degree: 'Technology in Software Systems Development',
    period: '2021 – 2023',
    location: 'Bucaramanga, Santander',
    status: 'Graduated',
  },
  {
    id: 3,
    institution: 'SENA',
    degree: 'Systems Technician',
    period: '2017 – 2018',
    location: 'Cimitarra, Santander',
    status: 'Graduated',
  },
  {
    id: 4,
    institution: 'Colegio Nuestra Señora de La Candelaria',
    degree: 'Academic High School Diploma',
    period: '2018',
    location: 'Cimitarra, Santander',
    status: 'Graduated',
  },
];

export const softSkills = [
  { name: 'Effective Communication', icon: 'chat',   description: 'I translate technical ideas into clear language for teams and clients.' },
  { name: 'Teamwork',                icon: 'team',   description: 'I collaborate actively in agile, multidisciplinary environments.' },
  { name: 'Problem Solving',         icon: 'bulb',   description: 'I spot bottlenecks and design efficient, pragmatic solutions.' },
  { name: 'Fast Learning',           icon: 'rocket', description: 'I pick up new technologies and methodologies quickly.' },
  { name: 'Adaptability',            icon: 'flow',   description: 'I stay effective in changing contexts and under pressure.' },
  { name: 'Leadership',              icon: 'flag',   description: 'I take initiative and steer teams toward concrete results.' },
];

export const languages = [
  { name: 'Spanish', level: 'Native',   percent: 100 },
  { name: 'English', level: 'A2 Basic', percent: 35 },
];

export const services = [
  {
    icon: 'web',
    title: 'Web Applications',
    desc: 'Robust, secure and scalable web apps built with clean architecture.',
    tags: ['PHP', 'Symfony', 'Laravel', 'React'],
  },
  {
    icon: 'api',
    title: 'RESTful APIs',
    desc: 'API design and integration to connect systems, automate flows and sync data.',
    tags: ['REST', 'JSON', 'JWT', 'Node.js'],
  },
  {
    icon: 'db',
    title: 'Databases',
    desc: 'Modeling, optimization and management of relational databases for high performance.',
    tags: ['MySQL', 'MariaDB', 'PostgreSQL'],
  },
  {
    icon: 'ui',
    title: 'Dynamic Interfaces',
    desc: 'Responsive, fluid and accessible UIs that elevate the end-user experience.',
    tags: ['React', 'JavaScript', 'Tailwind'],
  },
  {
    icon: 'advisory',
    title: 'IT Advisory',
    desc: 'Technical guidance to choose the right stack, untangle legacy code and ship with confidence.',
    tags: ['Consulting', 'Architecture', 'Code Review'],
  },
  {
    icon: 'perf',
    title: 'Performance Tuning',
    desc: 'Profiling and optimization to turn slow, heavy systems into fast, efficient ones.',
    tags: ['Profiling', 'Caching', 'Refactoring'],
  },
];

export const fictionStory = {
  title: 'The Bug That Changed Everything',
  subtitle: 'A (mostly) fictional origin story',
  paragraphs: [
    'It was a Tuesday in 2019. I was 17, had 500 pesos to my name, and depended on Mr. Ernesto’s Wi-Fi — the town’s only connection, strategically located in the pharmacy across the street, billed by the hour and switched off without warning at 7:00 p.m. sharp.',
    'That day I was about to push my first project to GitHub: an inventory system for my mom’s shop, written in raw PHP — no framework, no comments, passwords in plain text, and a file proudly named "final_version_THIS_ONE.php". A masterpiece of chaos.',
    'It was 6:58 p.m. The upload began. The progress bar hit 87%. Silence. The cursor blinked three times, like a goodbye. Mr. Ernesto had pulled the plug on the router.',
    'The repo stayed half-uploaded. The system never reached the shop. My mom kept using her paper notebook. Mr. Ernesto never gave back the 500 pesos.',
    'That night I made two promises: to learn how to build real software, and to never again depend on someone else’s Wi-Fi. Today I ship Symfony to production, integrate RESTful APIs, tune relational databases — and I have fiber optic at home.',
    'Mr. Ernesto closed the pharmacy in 2022. Life, sometimes, is fair.',
  ],
};
