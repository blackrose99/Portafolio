import React, { createContext, useContext } from 'react';
import PortfolioRepository from '../services/PortfolioRepository';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const value = {
    profile: PortfolioRepository.getProfile(),
    stats: PortfolioRepository.getStats(),
    skills: PortfolioRepository.getSkillsByLevel(),
    education: PortfolioRepository.getEducation(),
    softSkills: PortfolioRepository.getSoftSkills(),
    languages: PortfolioRepository.getLanguages(),
    services: PortfolioRepository.getServices(),
    fictionStory: PortfolioRepository.getFictionStory(),
    repository: PortfolioRepository,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
};

export default DataContext;
