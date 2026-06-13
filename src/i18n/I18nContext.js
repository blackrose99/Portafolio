import React, { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react';
import { locales, LANGS, DEFAULT_LANG } from './locales';

const STORAGE_KEY = 'portfolio.lang';
const I18nContext = createContext(null);

const isValid = (code) => Object.prototype.hasOwnProperty.call(locales, code);

function resolveInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isValid(stored)) return stored;
  // Fall back to the browser language only among supported locales.
  const nav = (window.navigator.language || '').slice(0, 2).toLowerCase();
  return isValid(nav) ? nav : DEFAULT_LANG;
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(resolveInitialLang);

  const setLang = useCallback((code) => {
    if (!isValid(code)) return;
    setLangState(code);
    try { window.localStorage.setItem(STORAGE_KEY, code); } catch { /* ignore */ }
  }, []);

  // Keep <html lang>/<html dir> in sync for a11y, SEO and assistive tech.
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', locales[lang].dir || 'ltr');
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, langs: LANGS, t: locales[lang] }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export default I18nContext;
