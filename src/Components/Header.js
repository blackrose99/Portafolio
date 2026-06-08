import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiHomeLine,
  RiUser3Line,
  RiFolderLine,
  RiMailLine,
  RiMenuLine,
  RiArrowLeftLine,
} from 'react-icons/ri';
import { useData } from '../context/DataContext';
import fotoPerfil from './img/luis manuel castaño.png';

const NAV_ITEMS = [
  { to: '/',         label: 'Inicio',    Icon: RiHomeLine },
  { to: '/about',    label: 'Sobre Mí',  Icon: RiUser3Line },
  { to: '/projects', label: 'Proyectos', Icon: RiFolderLine },
  { to: '/contact',  label: 'Contacto',  Icon: RiMailLine },
];

function Header({ open, onToggle }) {
  const location = useLocation();
  const { profile } = useData();

  return (
    <aside className={`sidebar${open ? ' open' : ''}`}>
      <button
        className="sidebar-toggle"
        onClick={onToggle}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      >
        {open ? <RiArrowLeftLine size={18} /> : <RiMenuLine size={18} />}
      </button>

      <div className="sidebar-profile">
        <img
          src={fotoPerfil}
          alt={profile.fullName}
          className="sidebar-profile-img"
        />
        <span className="sidebar-profile-name">{profile.displayName}</span>
        <span className="sidebar-profile-role">{profile.title}</span>
      </div>

      <nav className="sidebar-nav" aria-label="Navegación principal">
        {NAV_ITEMS.map(({ to, label, Icon }) => (
          <div className="nav-item" key={to}>
            <Link
              to={to}
              className={`nav-link${location.pathname === to ? ' active' : ''}`}
            >
              <span className="nav-icon">
                <Icon size={20} />
              </span>
              <span className="nav-label">{label}</span>
            </Link>
            <span className="nav-tooltip">{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Header;
