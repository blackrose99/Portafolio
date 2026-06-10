import React from 'react';
import {
  RiGithubLine,
  RiLinkedinLine,
  RiWhatsappLine,
  RiMailLine,
  RiFacebookLine,
  RiInstagramLine,
  RiTelegramLine,
  RiTwitterLine,
} from 'react-icons/ri';
import { useData } from '../context/DataContext';

const NAV = [
  { id: 'about',     label: 'About' },
  { id: 'story',     label: 'Story' },
  { id: 'education', label: 'Education' },
  { id: 'skills',    label: 'Skills' },
  { id: 'services',  label: 'Services' },
  { id: 'contact',   label: 'Contact' },
];

function Footer() {
  const { profile } = useData();
  const year = new Date().getFullYear();

  const socials = [
    { href: profile.github,    Icon: RiGithubLine,    label: 'GitHub' },
    { href: profile.linkedin,  Icon: RiLinkedinLine,  label: 'LinkedIn' },
    { href: profile.whatsapp,  Icon: RiWhatsappLine,  label: 'WhatsApp' },
    { href: `mailto:${profile.email}`, Icon: RiMailLine, label: 'Email' },
    { href: profile.telegram,  Icon: RiTelegramLine,  label: 'Telegram' },
    { href: profile.instagram, Icon: RiInstagramLine, label: 'Instagram' },
    { href: profile.facebook,  Icon: RiFacebookLine,  label: 'Facebook' },
    { href: profile.twitter,   Icon: RiTwitterLine,   label: 'Twitter' },
  ];

  return (
    <footer className="foot">
      <div className="container foot__inner">
        <div className="foot__top">
          <a href="#top" className="foot__brand">
            <span className="nav__brand-dot" aria-hidden="true" />
            Luis Castaño
          </a>
          <nav className="foot__nav" aria-label="Footer navigation">
            {NAV.map((l) => (
              <a key={l.id} href={`#${l.id}`}>{l.label}</a>
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
          © {year} Luis Manuel Castaño Grueso · Built with React &amp; Anime.js · Bucaramanga, Colombia
        </p>
      </div>
    </footer>
  );
}

export default Footer;
