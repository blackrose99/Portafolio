import {
  profile,
  skills,
  education,
  softSkills,
  languages,
  projects,
  bibliography,
  fictionStory,
} from '../data/portfolioData';

const PortfolioRepository = {
  getProfile: () => profile,

  getSkillsByLevel: (level) =>
    level ? skills.filter((s) => s.level === level) : skills,

  getSkillsByCategory: (category) =>
    category ? skills.filter((s) => s.category === category) : skills,

  getSkillLevels: () => [...new Set(skills.map((s) => s.level))],

  getEducation: () => education,

  getEducationById: (id) => education.find((e) => e.id === id) || null,

  getSoftSkills: () => softSkills,

  getLanguages: () => languages,

  getProjects: () => projects,

  getHighlightedProjects: () => projects.filter((p) => p.highlight),

  getProjectById: (id) => projects.find((p) => p.id === id) || null,

  getBibliography: () => bibliography,

  getBibliographyByType: (type) =>
    type ? bibliography.filter((b) => b.type === type) : bibliography,

  getFictionStory: () => fictionStory,
};

export default PortfolioRepository;
