import React from 'react';
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiTelegramLine,
} from 'react-icons/ri';
import { useData } from '../context/DataContext';
import { useI18n } from '../i18n/I18nContext';

const NAV_IDS = ['about', 'story', 'education', 'skills', 'services', 'contact'];

function Footer() {
  const { profile } = useData();
  const { t } = useI18n();
  const year = new Date().getFullYear();

  // Kept channels only: Email, LinkedIn, GitHub, Telegram.
  const socials = [
    { href: `mailto:${profile.email}`, Icon: RiMailLine,     label: 'Email' },
    { href: profile.linkedin,          Icon: RiLinkedinLine, label: 'LinkedIn' },
    { href: profile.github,            Icon: RiGithubLine,   label: 'GitHub' },
    { href: profile.telegram,          Icon: RiTelegramLine, label: 'Telegram' },
  ];

  return (
    <footer className="foot">
      <div className="container foot__inner">
        <div className="foot__top">
          <a href="#top" className="foot__brand">
            <span className="nav__brand-dot" aria-hidden="true" />
            Luis Castaño
          </a>
          <nav className="foot__nav" aria-label={t.a11y.footerNav}>
            {NAV_IDS.map((id) => (
              <a key={id} href={`#${id}`}>{t.nav[id]}</a>
            ))}
          </nav>
        </div>

        <div className="foot__socials">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="foot__copy">
          © {year} Luis Manuel Castaño Grueso · {t.footer.builtWith} · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
