import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger, utils } from 'animejs';
import {
  RiArrowRightLine,
  RiMapPinLine,
  RiGithubLine,
  RiLinkedinLine,
  RiWhatsappLine,
  RiMailLine,
  RiTelegramLine,
  RiInstagramLine,
  RiChat3Line,
  RiTeamLine,
  RiLightbulbLine,
  RiRocketLine,
  RiShuffleLine,
  RiFlag2Line,
  RiGlobalLine,
  RiPlugLine,
  RiDatabase2Line,
  RiLayoutMasonryLine,
  RiCustomerService2Line,
  RiSpeedUpLine,
  RiGraduationCapLine,
} from 'react-icons/ri';
import { useData } from '../context/DataContext';
import { useReveal, useInView } from '../hooks/useReveal';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import imgUts from './img/about/uts.png';
import imgSena from './img/about/sena.png';
import imgCandelaria from './img/about/colegioNuestraseñoradelacandelaria.png';
import './Home.css';

/* ── icon maps ─────────────────────────────────────── */
const SOFT_ICONS = {
  chat: RiChat3Line, team: RiTeamLine, bulb: RiLightbulbLine,
  rocket: RiRocketLine, flow: RiShuffleLine, flag: RiFlag2Line,
};
const SERVICE_ICONS = {
  web: RiGlobalLine, api: RiPlugLine, db: RiDatabase2Line,
  ui: RiLayoutMasonryLine, advisory: RiCustomerService2Line, perf: RiSpeedUpLine,
};
const EDU_LOGOS = {
  'Unidades Tecnológicas de Santander': imgUts,
  'SENA': imgSena,
  'Colegio Nuestra Señora de La Candelaria': imgCandelaria,
};
const SKILL_GROUPS = [
  { key: 'daily',       label: 'Daily Professional Use' },
  { key: 'experienced', label: 'Experienced' },
  { key: 'learning',    label: 'Actively Learning' },
  { key: 'tool',        label: 'Tools' },
];

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── reusable section heading ─────────────────────── */
function SectionHeader({ kicker, title, sub }) {
  const ref = useReveal({ y: 22, staggerMs: 90 });
  return (
    <div className="sec-head" ref={ref}>
      {kicker && <span className="sec-head__kicker" data-reveal-child>{kicker}</span>}
      <h2 className="sec-head__title" data-reveal-child>{title}</h2>
      {sub && <p className="sec-head__sub" data-reveal-child>{sub}</p>}
    </div>
  );
}

/* ── animated tagline (typewriter) ────────────────── */
function Typewriter({ text, speed = 38 }) {
  const [out, setOut] = useState(reduced() ? text : '');
  useEffect(() => {
    if (reduced()) return undefined;
    let i = 0;
    const t = setInterval(() => {
      setOut(text.slice(0, i + 1));
      i += 1;
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return (
    <span>{out}<span className="type-caret" aria-hidden="true">|</span></span>
  );
}

/* ════════════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════════════ */
function Hero({ profile, stats }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el || reduced()) return;
    const items = el.querySelectorAll('[data-hero]');
    utils.set(items, { opacity: 0, translateY: 26 });
    animate(items, {
      opacity: 1,
      translateY: 0,
      duration: 850,
      delay: stagger(95, { start: 120 }),
      ease: 'outExpo',
    });
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text">
          <span className="hero__eyebrow" data-hero>
            <span className="hero__eyebrow-dot" /> {profile.eyebrow}
          </span>
          <h1 className="hero__title" data-hero>
            Luis Manuel
            <span className="hero__title-accent"> Castaño Grueso</span>
          </h1>
          <p className="hero__tagline" data-hero>
            <Typewriter text={profile.tagline} />
          </p>
          <p className="hero__meta" data-hero>
            <RiMapPinLine /> {profile.location}
          </p>
          <div className="hero__actions" data-hero>
            <a href="#contact" className="btn btn--primary">
              Let’s talk <RiArrowRightLine />
            </a>
            <a href="#about" className="btn btn--outline">Discover more</a>
          </div>
          <div className="hero__socials" data-hero>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><RiGithubLine /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><RiLinkedinLine /></a>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><RiWhatsappLine /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><RiMailLine /></a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="glass hero__now" data-hero>
            <span className="hero__now-status"><span className="pulse" /> Available for projects</span>
            <p className="hero__now-text">
              Currently shipping <strong>Symfony</strong> to production and crafting
              dynamic interfaces with <strong>React</strong>.
            </p>
          </div>
          <div className="glass hero__stats" data-hero>
            {stats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   ABOUT
   ════════════════════════════════════════════════════ */
function About({ profile }) {
  const ref = useReveal({ y: 30, staggerMs: 110 });
  return (
    <section className="section" id="about">
      <div className="container about">
        <SectionHeader kicker="Who I am" title="A developer who turns problems into performance" />
        <div className="about__grid" ref={ref}>
          <p className="about__lead" data-reveal-child>{profile.bio}</p>
          <div className="about__cards">
            <div className="glass about__card" data-reveal-child>
              <RiSpeedUpLine className="about__card-icon" />
              <h3>Performance-minded</h3>
              <p>I hunt bottlenecks and refactor heavy systems into fast, efficient ones.</p>
            </div>
            <div className="glass about__card" data-reveal-child>
              <RiLightbulbLine className="about__card-icon" />
              <h3>Clean code believer</h3>
              <p>Readable, maintainable software that keeps paying off over time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   STORY  (fiction, fun)
   ════════════════════════════════════════════════════ */
function Story({ story }) {
  const ref = useReveal({ y: 28, staggerMs: 120 });
  return (
    <section className="section section--alt" id="story">
      <div className="container">
        <SectionHeader kicker={story.subtitle} title={story.title} />
        <div className="story" ref={ref}>
          {story.paragraphs.map((p, i) => (
            <div className="story__item" data-reveal-child key={i}>
              <div className="story__marker"><span>{i + 1}</span></div>
              <p className="story__text">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   EDUCATION
   ════════════════════════════════════════════════════ */
function Education({ education }) {
  const ref = useReveal({ y: 30, staggerMs: 90 });
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeader
          kicker="Academic background"
          title="Education"
          sub="A path built with persistence — from Cimitarra to Bucaramanga."
        />
        <div className="edu" ref={ref}>
          {education.map((e) => (
            <div className="glass edu__card" data-reveal-child key={e.id}>
              <div className="edu__logo">
                <img src={EDU_LOGOS[e.institution] || imgUts} alt={e.institution} />
              </div>
              <div className="edu__body">
                <span className={`edu__status${e.status === 'In Progress' ? ' edu__status--active' : ''}`}>
                  {e.status}
                </span>
                <h3 className="edu__degree">{e.degree}</h3>
                <p className="edu__inst"><RiGraduationCapLine /> {e.institution}</p>
                <p className="edu__meta">{e.period} · {e.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   SKILLS  (tech stack + soft skills + languages)
   ════════════════════════════════════════════════════ */
function TechStack({ skills }) {
  const ref = useReveal({ y: 20, staggerMs: 26 });
  return (
    <div className="stack" ref={ref}>
      {SKILL_GROUPS.map(({ key, label }) => {
        const group = skills.filter((s) => s.level === key);
        if (!group.length) return null;
        return (
          <div className="stack__group" key={key}>
            <h3 className="stack__label" data-reveal-child>{label}</h3>
            <div className="stack__chips">
              {group.map((s) => (
                <span className={`chip chip--${key}`} data-reveal-child key={s.name}>{s.name}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SoftSkills({ softSkills }) {
  const ref = useReveal({ y: 28, staggerMs: 80 });
  return (
    <div className="soft" ref={ref}>
      {softSkills.map((s) => {
        const Icon = SOFT_ICONS[s.icon] || RiLightbulbLine;
        return (
          <div className="glass soft__card" data-reveal-child key={s.name}>
            <span className="soft__icon"><Icon /></span>
            <div>
              <h4>{s.name}</h4>
              <p>{s.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Languages({ languages }) {
  const ref = useInView((el) => {
    const fills = el.querySelectorAll('[data-bar]');
    fills.forEach((f) => {
      const target = `${f.dataset.bar}%`;
      if (reduced()) { f.style.width = target; return; }
      animate(f, { width: ['0%', target], duration: 1150, ease: 'outExpo', delay: 150 });
    });
  });
  return (
    <div className="langs" ref={ref}>
      {languages.map((l) => (
        <div className="langs__item" key={l.name}>
          <div className="langs__head">
            <span className="langs__name">{l.name}</span>
            <span className="langs__level">{l.level}</span>
          </div>
          <div className="langs__track">
            <span className="langs__fill" data-bar={l.percent} style={{ width: 0 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills({ skills, softSkills, languages }) {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHeader
          kicker="What I work with"
          title="Skills & Strengths"
          sub="The technologies I use, the way I work, and the languages I speak."
        />
        <TechStack skills={skills} />

        <div className="skills__split">
          <div className="skills__col">
            <h3 className="skills__subtitle">Soft skills</h3>
            <SoftSkills softSkills={softSkills} />
          </div>
          <div className="skills__col">
            <h3 className="skills__subtitle">Languages</h3>
            <Languages languages={languages} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   SERVICES
   ════════════════════════════════════════════════════ */
function Services({ services }) {
  const ref = useReveal({ y: 32, staggerMs: 80 });
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader
          kicker="How I can help"
          title="Services & IT advisory"
          sub="Focused on quality, performance and real impact."
        />
        <div className="services" ref={ref}>
          {services.map((s) => {
            const Icon = SERVICE_ICONS[s.icon] || RiGlobalLine;
            return (
              <div className="glass service" data-reveal-child key={s.title}>
                <span className="service__icon"><Icon /></span>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>
                <div className="service__tags">
                  {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   CONTACT  (icons / channels only — no sensitive text)
   ════════════════════════════════════════════════════ */
function Contact({ profile }) {
  const ref = useReveal({ y: 30, staggerMs: 90 });
  const channels = [
    { href: profile.whatsapp,                 Icon: RiWhatsappLine,  label: 'WhatsApp' },
    { href: `mailto:${profile.email}`,        Icon: RiMailLine,      label: 'Email' },
    { href: profile.linkedin,                 Icon: RiLinkedinLine,  label: 'LinkedIn' },
    { href: profile.github,                   Icon: RiGithubLine,    label: 'GitHub' },
    { href: profile.telegram,                 Icon: RiTelegramLine,  label: 'Telegram' },
    { href: profile.instagram,                Icon: RiInstagramLine, label: 'Instagram' },
  ];
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <div className="cta glass" ref={ref}>
          <div className="cta__glow" aria-hidden="true" />
          <span className="cta__kicker" data-reveal-child>Let’s build something</span>
          <h2 className="cta__title" data-reveal-child>
            Have a project in mind? <br /> Let’s make it real.
          </h2>
          <p className="cta__sub" data-reveal-child>
            Reach out through any channel — I usually reply fast.
          </p>
          <div className="cta__channels" data-reveal-child>
            {channels.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="cta__channel"
                aria-label={label}
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════ */
function Home() {
  const { profile, stats, skills, education, softSkills, languages, services, fictionStory } = useData();

  return (
    <div className="landing">
      <Navbar />
      <main>
        <Hero profile={profile} stats={stats} />
        <About profile={profile} />
        <Story story={fictionStory} />
        <Education education={education} />
        <Skills skills={skills} softSkills={softSkills} languages={languages} />
        <Services services={services} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
