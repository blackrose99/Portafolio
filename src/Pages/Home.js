import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  RiDownloadLine,
  RiArrowRightLine,
  RiMapPinLine,
  RiMailLine,
  RiGithubLine,
  RiLinkedinLine,
} from 'react-icons/ri';
import { useData } from '../context/DataContext';
import fotoPerfil from '../Components/img/luis manuel castaño.png';
import './Home.css';

const SKILL_GROUPS = [
  { key: 'daily',      label: 'Uso Profesional Diario' },
  { key: 'experienced', label: 'Dominio con Experiencia' },
  { key: 'learning',   label: 'Aprendizaje Activo' },
  { key: 'tool',       label: 'Herramientas' },
];

function TypingText({ text, speed = 80 }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const t = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);

  return <span>{displayed}<span className="typing-cursor">|</span></span>;
}

function Home() {
  const { profile, skills } = useData();

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-label">Full Stack Developer</p>
            <h1 className="hero-name">
              Luis Manuel<br />
              <span className="hero-name--accent">Castaño Grueso</span>
            </h1>
            <p className="hero-tagline">
              <TypingText text={profile.tagline} speed={30} />
            </p>
            <div className="hero-meta">
              <span><RiMapPinLine /> {profile.location}</span>
              <span><RiMailLine /> {profile.email}</span>
            </div>
            <div className="hero-actions">
              <a href={profile.cv} download className="btn btn--primary">
                <RiDownloadLine /> Descargar CV
              </a>
              <Link to="/projects" className="btn btn--outline">
                Ver proyectos <RiArrowRightLine />
              </Link>
            </div>
            <div className="hero-socials">
              <a href={profile.github}   target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <RiGithubLine size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <RiLinkedinLine size={20} />
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-ring" aria-hidden="true" />
            <img src={fotoPerfil} alt="Luis Manuel Castaño Grueso — Full Stack Developer" className="hero-photo" />
            <div className="hero-photo-badge">
              <span>Disponible</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── STACK TECNOLÓGICO ─────────────────────── */}
      <section className="page-section page-section--white">
        <div className="container">
          <div className="section-header">
            <h2>Stack Tecnológico</h2>
            <p>Tecnologías que uso a diario, con experiencia y en aprendizaje continuo.</p>
            <span className="section-divider" />
          </div>

          {SKILL_GROUPS.map(({ key, label }) => {
            const group = skills.filter((s) => s.level === key);
            if (!group.length) return null;
            return (
              <div className="skill-group" key={key}>
                <h3 className="skill-group__title">{label}</h3>
                <div className="skill-group__badges">
                  {group.map((s) => (
                    <span key={s.name} className={`badge badge--${key}`}>{s.name}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SERVICIOS ─────────────────────────────── */}
      <section className="page-section page-section--light">
        <div className="container">
          <div className="section-header">
            <h2>¿Qué puedo construir para ti?</h2>
            <p>Servicios enfocados en calidad, rendimiento e impacto real.</p>
            <span className="section-divider" />
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card card" key={s.title}>
                <span className="service-card__icon" aria-hidden="true">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-card__tags">
                  {s.tags.map((t) => (
                    <span key={t} className="badge badge--tool">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const SERVICES = [
  {
    icon: '🌐',
    title: 'Aplicaciones Web',
    desc: 'Desarrollo de aplicativos web robustos, seguros y escalables con arquitectura limpia.',
    tags: ['PHP', 'Symfony', 'Laravel', 'React'],
  },
  {
    icon: '🔌',
    title: 'APIs RESTful',
    desc: 'Diseño e integración de APIs para conectar sistemas, automatizar flujos y sincronizar datos.',
    tags: ['REST', 'JSON', 'JWT', 'Node.js'],
  },
  {
    icon: '🗄️',
    title: 'Bases de Datos',
    desc: 'Modelado, optimización y gestión de bases de datos relacionales para alto rendimiento.',
    tags: ['MySQL', 'MariaDB', 'PostgreSQL'],
  },
  {
    icon: '📱',
    title: 'Interfaces Dinámicas',
    desc: 'UIs responsivas, fluidas y accesibles que mejoran la experiencia del usuario final.',
    tags: ['React', 'JavaScript', 'Tailwind'],
  },
];

export default Home;
