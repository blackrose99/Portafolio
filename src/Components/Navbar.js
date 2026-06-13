import React, { useEffect, useState } from 'react';
import { RiMenuLine, RiCloseLine, RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useTheme } from '../theme/ThemeContext';
import { useI18n } from '../i18n/I18nContext';

const LINK_IDS = ['about', 'story', 'education', 'skills', 'services', 'contact'];

/* Theme toggle — sun ⇄ moon, accessible & label-aware. */
function ThemeToggle({ t }) {
  const { isDark, toggle } = useTheme();
  return (
    <button
      type="button"
      className="ctl ctl--toggle"
      onClick={toggle}
      aria-label={isDark ? t.a11y.themeToLight : t.a11y.themeToDark}
      title={isDark ? t.a11y.themeToLight : t.a11y.themeToDark}
    >
      <span className="ctl__thumb" aria-hidden="true">
        {isDark ? <RiMoonLine /> : <RiSunLine />}
      </span>
    </button>
  );
}

/* Language selector — segmented EN / ES / PT. */
function LangSwitch({ t }) {
  const { lang, setLang, langs } = useI18n();
  return (
    <div className="ctl ctl--lang" role="group" aria-label={t.a11y.language}>
      {langs.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`ctl__lang${lang === l.code ? ' is-active' : ''}`}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          aria-label={l.name}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');

  // Solid/blurred bar after a small scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const sections = LINK_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={go}>
          <span className="nav__brand-dot" aria-hidden="true" />
          Luis Castaño
        </a>

        <nav className="nav__links" aria-label={t.a11y.sectionNav}>
          {LINK_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link${active === id ? ' is-active' : ''}`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="nav__controls">
          <LangSwitch t={t} />
          <ThemeToggle t={t} />
          <a href="#contact" className="btn btn--primary nav__cta">{t.nav.talk}</a>
        </div>

        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
          aria-expanded={open}
        >
          {open ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div className={`nav__mobile${open ? ' is-open' : ''}`}>
        {LINK_IDS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav__mobile-link${active === id ? ' is-active' : ''}`}
            onClick={go}
          >
            {t.nav[id]}
          </a>
        ))}
        <div className="nav__mobile-controls">
          <LangSwitch t={t} />
          <ThemeToggle t={t} />
        </div>
        <a href="#contact" className="btn btn--primary nav__mobile-cta" onClick={go}>
          {t.nav.talk}
        </a>
      </div>
    </header>
  );
}

export default Navbar;
