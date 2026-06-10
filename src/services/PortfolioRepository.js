import {
  profile,
  stats,
  skills,
  education,
  softSkills,
  languages,
  services,
  fictionStory,
} from '../data/portfolioData';

const PortfolioRepository = {
  getProfile: () => profile,

  getStats: () => stats,

  getSkillsByLevel: (level) =>
    level ? skills.filter((s) => s.level === level) : skills,

  getSkillsByCategory: (category) =>
    category ? skills.filter((s) => s.category === category) : skills,

  getSkillLevels: () => [...new Set(skills.map((s) => s.level))],

  getEducation: () => education,

  getEducationById: (id) => education.find((e) => e.id === id) || null,

  getSoftSkills: () => softSkills,

  getLanguages: () => languages,

  getServices: () => services,

  getFictionStory: () => fictionStory,
};

export default PortfolioRepository;
