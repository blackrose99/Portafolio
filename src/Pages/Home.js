import React, { useEffect, useMemo, useRef, useState } from 'react';
import { animate, stagger, utils } from 'animejs';
import {
  RiArrowRightLine,
  RiMapPinLine,
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiTelegramLine,
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
  RiSmartphoneLine,
  RiRouterLine,
  RiShieldKeyholeLine,
  RiGraduationCapLine,
} from 'react-icons/ri';
import { useData } from '../context/DataContext';
import { useI18n } from '../i18n/I18nContext';
import { useReveal, useInView } from '../hooks/useReveal';
import { useDynamicFavicon } from '../hooks/useDynamicFavicon';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import imgUts from './img/about/uts.png';
import imgSena from './img/about/sena.png';
import imgCandelaria from './img/about/colegioNuestraseñoradelacandelaria.png';
import './Home.css';

/* ── icon maps (language-agnostic) ─────────────────── */
const SOFT_ICONS = {
  chat: RiChat3Line, team: RiTeamLine, bulb: RiLightbulbLine,
  rocket: RiRocketLine, flow: RiShuffleLine, flag: RiFlag2Line,
};
const SERVICE_ICONS = {
  web: RiGlobalLine, mobile: RiSmartphoneLine, api: RiPlugLine, db: RiDatabase2Line,
  ui: RiLayoutMasonryLine, advisory: RiCustomerService2Line, perf: RiSpeedUpLine,
};
const EDU_LOGOS = { uts: imgUts, sena: imgSena, candelaria: imgCandelaria };
const CERT_ICONS = { network: RiRouterLine, security: RiShieldKeyholeLine };

const SKILL_GROUPS = ['daily', 'experienced', 'learning', 'tool'];
const SECTION_IDS = ['top', 'about', 'story', 'education', 'skills', 'services', 'contact'];

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

/* ── animated tagline (typewriter) — restarts on language change ── */
function Typewriter({ text, speed = 38 }) {
  const [out, setOut] = useState(reduced() ? text : '');
  useEffect(() => {
    if (reduced()) { setOut(text); return undefined; }
    setOut('');
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
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
function Hero({ profile, stats, t }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el || reduced()) return;
    const items = el.querySelectorAll('[data-hero]');
    utils.set(items, { opacity: 0, translateY: 28 });
    animate(items, {
      opacity: 1,
      translateY: 0,
      duration: 900,
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
            <span className="hero__eyebrow-dot" /> {t.hero.eyebrow}
          </span>
          <h1 className="hero__title" data-hero>
            {profile.firstName}
            <span className="hero__title-accent"> {profile.lastName}</span>
          </h1>
          <p className="hero__tagline" data-hero>
            <Typewriter text={t.hero.tagline} />
          </p>
          <p className="hero__meta" data-hero>
            <RiMapPinLine /> {profile.location}
          </p>
          <div className="hero__actions" data-hero>
            <a href="#contact" className="btn btn--primary">
              {t.hero.talk} <RiArrowRightLine />
            </a>
            <a href="#about" className="btn btn--outline">{t.hero.discover}</a>
          </div>
          <div className="hero__socials" data-hero>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><RiGithubLine /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><RiLinkedinLine /></a>
            <a href={profile.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram"><RiTelegramLine /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><RiMailLine /></a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="glass hero__now" data-hero>
            <span className="hero__now-status"><span className="pulse" /> {t.hero.available}</span>
            <p className="hero__now-text">{t.hero.now}</p>
          </div>
          <div className="glass hero__stats" data-hero>
            {stats.map((s, i) => (
              <div className="hero__stat" key={s.value + i}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{t.hero.stats[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label={t.a11y.scroll}>
        <span />
      </a>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   ABOUT
   ════════════════════════════════════════════════════ */
function About({ t }) {
  const ref = useReveal({ y: 30, staggerMs: 110 });
  return (
    <section className="section" id="about">
      <div className="container about">
        <SectionHeader kicker={t.about.kicker} title={t.about.title} />
        <div className="about__grid" ref={ref}>
          <p className="about__lead" data-reveal-child>{t.about.lead}</p>
          <div className="about__cards">
            <div className="glass about__card" data-reveal-child>
              <RiSpeedUpLine className="about__card-icon" />
              <h3>{t.about.cards[0].title}</h3>
              <p>{t.about.cards[0].text}</p>
            </div>
            <div className="glass about__card" data-reveal-child>
              <RiLightbulbLine className="about__card-icon" />
              <h3>{t.about.cards[1].title}</h3>
              <p>{t.about.cards[1].text}</p>
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
function Story({ t }) {
  const ref = useReveal({ y: 28, staggerMs: 120 });
  return (
    <section className="section section--alt" id="story">
      <div className="container">
        <SectionHeader kicker={t.story.kicker} title={t.story.title} />
        <div className="story" ref={ref}>
          {t.story.paragraphs.map((p, i) => (
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
   EDUCATION  (degrees + certifications)
   ════════════════════════════════════════════════════ */
function Education({ education, t }) {
  const ref = useReveal({ y: 30, staggerMs: 90 });
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeader kicker={t.education.kicker} title={t.education.title} sub={t.education.sub} />
        <div className="edu" ref={ref}>
          {education.map((e) => {
            const copy = t.education.items[e.id] || {};
            const isCert = e.kind === 'cert';
            const CertIcon = isCert ? (CERT_ICONS[e.icon] || RiShieldKeyholeLine) : null;
            return (
              <div className="glass edu__card" data-reveal-child key={e.id}>
                <div className={`edu__logo${isCert ? ' edu__logo--cert' : ''}`}>
                  {isCert
                    ? <CertIcon aria-hidden="true" />
                    : <img src={EDU_LOGOS[e.logo] || imgUts} alt={copy.institution} loading="lazy" />}
                </div>
                <div className="edu__body">
                  <span className={`edu__status${isCert ? ' edu__status--cert' : ''}`}>
                    {copy.status}
                  </span>
                  <h3 className="edu__degree">{copy.degree}</h3>
                  <p className="edu__inst"><RiGraduationCapLine /> {copy.institution}</p>
                  <p className="edu__meta">{e.period} · {e.place}</p>
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
   SKILLS  (tech stack + soft skills + languages)
   ════════════════════════════════════════════════════ */
function TechStack({ skills, t }) {
  const ref = useReveal({ y: 20, staggerMs: 26 });
  return (
    <div className="stack" ref={ref}>
      {SKILL_GROUPS.map((key) => {
        const group = skills.filter((s) => s.level === key);
        if (!group.length) return null;
        return (
          <div className="stack__group" key={key}>
            <h3 className="stack__label" data-reveal-child>{t.skills.groups[key]}</h3>
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

function SoftSkills({ softSkills, t }) {
  const ref = useReveal({ y: 28, staggerMs: 80 });
  return (
    <div className="soft" ref={ref}>
      {softSkills.map((s, i) => {
        const Icon = SOFT_ICONS[s.icon] || RiLightbulbLine;
        const copy = t.skills.soft[i] || {};
        return (
          <div className="glass soft__card" data-reveal-child key={s.icon}>
            <span className="soft__icon"><Icon /></span>
            <div>
              <h4>{copy.name}</h4>
              <p>{copy.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Languages({ languages, t }) {
  const ref = useInView((el) => {
    const fills = el.querySelectorAll('[data-bar]');
    fills.forEach((f, i) => {
      const target = `${f.dataset.bar}%`;
      if (reduced()) { f.style.width = target; return; }
      animate(f, { width: ['0%', target], duration: 1200, ease: 'outExpo', delay: 180 + i * 120 });
    });
  });
  return (
    <div className="langs" ref={ref}>
      {languages.map((l, i) => {
        const copy = t.skills.langs[i] || {};
        return (
          <div className="langs__item" key={copy.name || i}>
            <div className="langs__head">
              <span className="langs__name">{copy.name}</span>
              <span className="langs__level">{copy.level}</span>
            </div>
            <div className="langs__track">
              <span className="langs__fill" data-bar={l.percent} style={{ width: 0 }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Skills({ skills, softSkills, languages, t }) {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHeader kicker={t.skills.kicker} title={t.skills.title} sub={t.skills.sub} />
        <TechStack skills={skills} t={t} />

        <div className="skills__split">
          <div className="skills__col">
            <h3 className="skills__subtitle">{t.skills.softTitle}</h3>
            <SoftSkills softSkills={softSkills} t={t} />
          </div>
          <div className="skills__col">
            <h3 className="skills__subtitle">{t.skills.langsTitle}</h3>
            <Languages languages={languages} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   SERVICES
   ════════════════════════════════════════════════════ */
function Services({ services, t }) {
  const ref = useReveal({ y: 32, staggerMs: 80 });
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader kicker={t.services.kicker} title={t.services.title} sub={t.services.sub} />
        <div className="services" ref={ref}>
          {services.map((s, i) => {
            const Icon = SERVICE_ICONS[s.icon] || RiGlobalLine;
            const copy = t.services.items[i] || {};
            return (
              <div className="glass service" data-reveal-child key={s.icon}>
                <span className="service__icon"><Icon /></span>
                <h3 className="service__title">{copy.title}</h3>
                <p className="service__desc">{copy.desc}</p>
                <div className="service__tags">
                  {s.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
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
function Contact({ profile, t }) {
  const ref = useReveal({ y: 30, staggerMs: 90 });
  const channels = [
    { href: `mailto:${profile.email}`, Icon: RiMailLine,     label: t.contact.channels.email },
    { href: profile.linkedin,          Icon: RiLinkedinLine, label: t.contact.channels.linkedin },
    { href: profile.github,            Icon: RiGithubLine,   label: t.contact.channels.github },
    { href: profile.telegram,          Icon: RiTelegramLine, label: t.contact.channels.telegram },
  ];
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <div className="cta glass" ref={ref}>
          <div className="cta__glow" aria-hidden="true" />
          <span className="cta__kicker" data-reveal-child>{t.contact.kicker}</span>
          <h2 className="cta__title" data-reveal-child>
            {t.contact.title} <br /> {t.contact.titleSub}
          </h2>
          <p className="cta__sub" data-reveal-child>{t.contact.sub}</p>
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
  const { profile, stats, skills, education, softSkills, languages, services } = useData();
  const { t } = useI18n();
  const sectionIds = useMemo(() => SECTION_IDS, []);
  useDynamicFavicon(sectionIds);

  return (
    <div className="landing">
      <Navbar />
      <main>
        <Hero profile={profile} stats={stats} t={t} />
        <About t={t} />
        <Story t={t} />
        <Education education={education} t={t} />
        <Skills skills={skills} softSkills={softSkills} languages={languages} t={t} />
        <Services services={services} t={t} />
        <Contact profile={profile} t={t} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
