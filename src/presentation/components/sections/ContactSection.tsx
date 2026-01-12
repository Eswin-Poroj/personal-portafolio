/**
 * Contact Section - Contact Form with Honeypot
 * Formulario de contacto con prevención de spam
 */

import { useState, useEffect, type FormEvent } from 'react';
import type { SocialLink } from '../../../domain/entities/SocialLink';
import { SocialLinkRepository } from '../../../infrastructure/repositories/SocialLinkRepository';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Mail,
  CheckCircle2,
  XCircle,
  type LucideIcon
} from 'lucide-react';
import './ContactSection.css';

export function ContactSection() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const repository = new SocialLinkRepository();
    repository.getAll().then(setSocialLinks);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formState.website) {
      console.log('Spam detected');
      return;
    }

    setStatus('loading');

    // Simular envío (reemplazar con API real)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Integrar con backend serverless
    console.log('Form data:', {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    });

    setStatus('success');
    setFormState({ name: '', email: '', message: '', website: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  // Map icon names to Lucide components
  const socialIcons: Record<string, LucideIcon> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    facebook: Facebook,
    whatsapp: MessageCircle,
    email: Mail,
  };

  return (
    <section id="contact" className="section contact-section" ref={elementRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  disabled={status === 'loading'}
                ></textarea>
              </div>

              {/* Honeypot field - hidden from users */}
              <div className="visually-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formState.website}
                  onChange={(e) =>
                    setFormState({ ...formState, website: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {status === 'success' && (
                <div className="form-message success">
                  <CheckCircle2 size={20} strokeWidth={2} /> ¡Mensaje enviado! Te responderé pronto.
                </div>
              )}

              {status === 'error' && (
                <div className="form-message error">
                  <XCircle size={20} strokeWidth={2} /> Error al enviar. Intenta de nuevo.
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="contact-info">
            <h3 className="contact-info-title">O encuéntrame en:</h3>
            <div className="contact-social-links">
              {socialLinks.map((link) => {
                // Use the 'icon' field from mockData, not 'platform'
                const IconComponent = socialIcons[link.icon] || Mail;
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={link.ariaLabel}
                  >
                    <span className="contact-social-icon">
                      <IconComponent size={24} strokeWidth={2} />
                    </span>
                    <span className="contact-social-name">
                      {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                    </span>
                    <span className="contact-social-username">
                      {(link.username ?? '').length >= 15 ? (link.username ?? '').slice(0, 15) + '...' : (link.username ?? '')}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
