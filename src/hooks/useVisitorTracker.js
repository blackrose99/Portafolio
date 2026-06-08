import { useEffect } from 'react';

const STORAGE_KEY = 'portfolio_visit_count';
const SESSION_KEY = 'portfolio_visited_session';

export function useVisitorTracker() {
  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      sessionStorage.setItem(SESSION_KEY, '1');
      const current = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
      localStorage.setItem(STORAGE_KEY, String(current + 1));
    }
  }, []);
}

export function getVisitCount() {
  return parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
}

export function resetVisitCount() {
  localStorage.removeItem(STORAGE_KEY);
}
