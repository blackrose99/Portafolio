import React from 'react';
import { Link } from 'react-router-dom';
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

const NAV_LINKS = [
  { to: '/',         label: 'Inicio' },
  { to: '/about',    label: 'Sobre Mí' },
  { to: '/projects', label: 'Proyectos' },
  { to: '/contact',  label: 'Contacto' },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/blackrose99',                                              Icon: RiGithubLine,    label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/luis-manuel-casta%C3%B1o-grueso-167881197/',      Icon: RiLinkedinLine,  label: 'LinkedIn' },
  { href: 'https://wa.me/573168142027',                                                  Icon: RiWhatsappLine,  label: 'WhatsApp' },
  { href: 'mailto:mannuelcast321@gmail.com',                                              Icon: RiMailLine,      label: 'Email' },
  { href: 'https://www.facebook.com/LuisManuelCastano14/',                               Icon: RiFacebookLine,  label: 'Facebook' },
  { href: 'https://www.instagram.com/luismanuelcastano14/',                              Icon: RiInstagramLine, label: 'Instagram' },
  { href: 'https://t.me/Lmcastano',                                                      Icon: RiTelegramLine,  label: 'Telegram' },
  { href: 'https://twitter.com/Manuel_0914',                                             Icon: RiTwitterLine,   label: 'Twitter' },
];

function Footer() {
  const { profile } = useData();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>
            Luis Manuel<br />
            <span style={{ color: 'var(--color-accent)' }}>Castaño Grueso</span>
          </h3>
          <p>
            Desarrollador Full Stack orientado a construir soluciones
            escalables y de alto impacto desde Bucaramanga, Colombia.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">{profile.phone}</a></li>
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/blackrose99</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Luis Manuel Castaño Grueso · Bucaramanga, Colombia</p>
        <div className="footer-social">
          {SOCIAL_LINKS.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
