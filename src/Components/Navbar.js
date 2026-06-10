import React, { useEffect, useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const LINKS = [
  { id: 'about',     label: 'About' },
  { id: 'story',     label: 'Story' },
  { id: 'education', label: 'Education' },
  { id: 'skills',    label: 'Skills' },
  { id: 'services',  label: 'Services' },
  { id: 'contact',   label: 'Contact' },
];

function Navbar() {
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
    const sections = LINKS
      .map((l) => document.getElementById(l.id))
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

        <nav className="nav__links" aria-label="Section navigation">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link${active === l.id ? ' is-active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary nav__cta">Let’s talk</a>

        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div className={`nav__mobile${open ? ' is-open' : ''}`}>
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nav__mobile-link${active === l.id ? ' is-active' : ''}`}
            onClick={go}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary nav__mobile-cta" onClick={go}>
          Let’s talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;
