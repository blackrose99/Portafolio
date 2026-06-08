import React from 'react';
import { RiDownloadLine, RiExternalLinkLine, RiBookLine, RiGlobalLine } from 'react-icons/ri';
import { useData } from '../context/DataContext';
import fotoPerfil from '../Components/img/luis manuel castaño.png';
import imgUts from './img/about/uts.png';
import imgSena from './img/about/sena.png';
import imgCandelaria from './img/about/colegioNuestraseñoradelacandelaria.png';
import './About.css';

const EDU_LOGOS = {
  'Unidades Tecnológicas de Santander': imgUts,
  'SENA': imgSena,
  'Colegio Nuestra Señora de La Candelaria': imgCandelaria,
};

function LanguageBar({ name, level, percent }) {
  return (
    <div className="lang-bar">
      <div className="lang-bar__header">
        <span className="lang-bar__name">{name}</span>
        <span className="lang-bar__level">{level}</span>
      </div>
      <div className="lang-bar__track">
        <div className="lang-bar__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function About() {
  const { profile, education, softSkills, languages, fictionStory, bibliography } = useData();
  const books     = bibliography.filter((b) => b.type === 'book');
  const resources = bibliography.filter((b) => b.type === 'resource');

  return (
    <>
      {/* ── ENCABEZADO ──────────────────────────── */}
      <section className="page-section page-section--dark about-hero">
        <div className="container about-hero__inner">
          <div className="about-photo-wrap">
            <img src={fotoPerfil} alt={profile.fullName} className="about-photo" />
          </div>
          <div className="about-intro">
            <p className="about-intro__eyebrow">Full Stack Developer</p>
            <h1 className="about-intro__name">{profile.fullName}</h1>
            <p className="about-intro__bio">{profile.bio}</p>
            <div className="about-intro__actions">
              <a href={profile.cv} download className="btn btn--primary">
                <RiDownloadLine /> Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUIÉN SOY + IDIOMAS ─────────────────── */}
      <section className="page-section page-section--white">
        <div className="container about-two-col">
          <div className="about-card card">
            <h2>¿Quién soy?</h2>
            <p>
              Soy un Ingeniero de Sistemas de Bucaramanga, Colombia, apasionado por construir
              software que resuelve problemas reales. Trabajo profesionalmente con PHP y Symfony
              en producción, y combino esa experiencia con React, JavaScript y bases de datos
              relacionales para crear soluciones completas.
            </p>
            <p>
              Me interesa la intersección entre el rendimiento de sistemas, la experiencia de
              usuario y la optimización de procesos. Creo en el código limpio, la mejora continua
              y el impacto tangible del software bien construido.
            </p>
            <blockquote className="about-quote">
              "{profile.tagline}"
            </blockquote>
          </div>

          <div className="about-card card">
            <h2>Idiomas</h2>
            <div className="lang-list">
              {languages.map((l) => (
                <LanguageBar key={l.name} {...l} />
              ))}
            </div>

            <h2 style={{ marginTop: 'var(--sp-8)' }}>Habilidades Blandas</h2>
            <div className="soft-skills-list">
              {softSkills.map((s) => (
                <div className="soft-skill" key={s.name}>
                  <span className="soft-skill__name">{s.name}</span>
                  <span className="soft-skill__desc">{s.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCACIÓN ───────────────────────────── */}
      <section className="page-section page-section--light">
        <div className="container">
          <div className="section-header">
            <h2>Formación Académica</h2>
            <p>Un recorrido construido con constancia desde Cimitarra hasta Bucaramanga.</p>
            <span className="section-divider" />
          </div>

          <div className="edu-grid">
            {education.map((edu) => (
              <div className="edu-card card" key={edu.id}>
                <div className="edu-card__logo-wrap">
                  <img
                    src={EDU_LOGOS[edu.institution] || imgUts}
                    alt={edu.institution}
                    className="edu-card__logo"
                  />
                </div>
                <div className="edu-card__body">
                  <span className={`edu-card__status ${edu.status === 'En Formación' ? 'edu-card__status--active' : ''}`}>
                    {edu.status}
                  </span>
                  <h3 className="edu-card__degree">{edu.degree}</h3>
                  <p className="edu-card__institution">{edu.institution}</p>
                  <p className="edu-card__meta">
                    {edu.period} · {edu.location}
                  </p>
                  {edu.diploma && (
                    <button
                      className="btn btn--ghost edu-card__btn"
                      onClick={() => window.open(edu.diploma, '_blank')}
                    >
                      <RiExternalLinkLine /> Ver diploma
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIBLIOGRAFÍA ────────────────────────── */}
      <section className="page-section page-section--white">
        <div className="container">
          <div className="section-header">
            <h2>Bibliografía & Recursos</h2>
            <p>Lo que leo, lo que estudio, lo que me forma como desarrollador.</p>
            <span className="section-divider" />
          </div>

          <div className="biblio-section">
            <h3 className="biblio-section__label">
              <RiBookLine /> Libros
            </h3>
            <div className="biblio-grid">
              {books.map((b) => (
                <div className="biblio-card card" key={b.id}>
                  <div className="biblio-card__icon"><RiBookLine /></div>
                  <div>
                    <h4>{b.title}</h4>
                    <p className="biblio-card__author">{b.author}</p>
                    <p className="biblio-card__desc">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="biblio-section" style={{ marginTop: 'var(--sp-8)' }}>
            <h3 className="biblio-section__label">
              <RiGlobalLine /> Recursos en línea
            </h3>
            <div className="biblio-grid">
              {resources.map((b) => (
                <a
                  className="biblio-card card biblio-card--link"
                  key={b.id}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="biblio-card__icon"><RiGlobalLine /></div>
                  <div>
                    <h4>{b.title}</h4>
                    <p className="biblio-card__author">{b.author}</p>
                    <p className="biblio-card__desc">{b.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORIA FICTICIA ───────────────────── */}
      <section className="page-section page-section--navy">
        <div className="container">
          <div className="section-header section-header--light">
            <h2>{fictionStory.title}</h2>
            <p>{fictionStory.subtitle}</p>
            <span className="section-divider" />
          </div>

          <div className="story-card">
            {fictionStory.paragraphs.map((p, i) => (
              <p key={i} className="story-paragraph">{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
