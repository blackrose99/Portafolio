import React from 'react';
import {
  RiWhatsappLine,
  RiMailLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTelegramLine,
  RiMapPinLine,
  RiArrowRightLine,
} from 'react-icons/ri';
import { useData } from '../context/DataContext';
import './Contact.css';

const WHATSAPP_SERVICES = [
  { label: 'Aplicación Web',        service: 'desarrollo de una aplicación web' },
  { label: 'API / Backend',         service: 'integración de una API o servicio backend' },
  { label: 'Optimización de BD',    service: 'optimización de bases de datos' },
  { label: 'Consultoría técnica',   service: 'consultoría técnica' },
];

function WhatsAppButton({ label, service, phone }) {
  const msg = `Hola Luis, estoy interesado en ${service}. ¿Podemos hablar?`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn card"
    >
      <div className="wa-btn__icon"><RiWhatsappLine /></div>
      <span className="wa-btn__label">{label}</span>
      <RiArrowRightLine className="wa-btn__arrow" />
    </a>
  );
}

function Contact() {
  const { profile } = useData();
  const rawPhone = profile.phone.replace(/[^0-9]/g, '');

  return (
    <>
      <section className="page-section page-section--dark contact-hero">
        <div className="container">
          <div className="section-header section-header--light">
            <h1>Hablemos</h1>
            <p>
              ¿Tienes un proyecto en mente? Escríbeme y construimos algo juntos.
            </p>
            <span className="section-divider" />
          </div>
        </div>
      </section>

      <section className="page-section page-section--light">
        <div className="container contact-grid">

          {/* Columna izquierda — WhatsApp por servicio */}
          <div className="contact-main">
            <h2 className="contact-section-title">¿En qué puedo ayudarte?</h2>
            <p className="contact-section-sub">
              Selecciona el tipo de proyecto y te abro WhatsApp con un mensaje listo.
            </p>
            <div className="wa-list">
              {WHATSAPP_SERVICES.map((s) => (
                <WhatsAppButton key={s.label} {...s} phone={rawPhone} />
              ))}
            </div>
          </div>

          {/* Columna derecha — datos de contacto */}
          <div className="contact-sidebar">
            <div className="contact-info-card card">
              <h3>Información de Contacto</h3>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-item__icon"><RiMapPinLine /></span>
                  <div>
                    <span className="contact-info-item__label">Ubicación</span>
                    <span className="contact-info-item__value">{profile.location}</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-item__icon"><RiMailLine /></span>
                  <div>
                    <span className="contact-info-item__label">Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="contact-info-item__value contact-info-item__value--link"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-item__icon"><RiWhatsappLine /></span>
                  <div>
                    <span className="contact-info-item__label">WhatsApp</span>
                    <a
                      href={profile.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-item__value contact-info-item__value--link"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social__btn" aria-label="LinkedIn">
                  <RiLinkedinLine />
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-social__btn" aria-label="GitHub">
                  <RiGithubLine />
                </a>
                <a href={profile.telegram} target="_blank" rel="noopener noreferrer" className="contact-social__btn" aria-label="Telegram">
                  <RiTelegramLine />
                </a>
                <a href={`mailto:${profile.email}`} className="contact-social__btn" aria-label="Email">
                  <RiMailLine />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
