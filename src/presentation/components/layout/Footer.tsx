/**
 * Footer Component
 * Social links and copyright information
 */

import { useEffect, useState } from 'react';
import type { SocialLink } from '../../../domain/entities/SocialLink';
import { SocialLinkRepository } from '../../../infrastructure/repositories/SocialLinkRepository';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Heart,
  type LucideIcon 
} from 'lucide-react';
import './Footer.css';

export function Footer() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const repository = new SocialLinkRepository();
    repository.getAll().then(setSocialLinks);
  }, []);

  const getSocialIcon = (platform: string): LucideIcon => {
    const icons: Record<string, LucideIcon> = {
      github: Github,
      linkedin: Linkedin,
      twitter: Twitter,
      email: Mail,
      instagram: Instagram,
      facebook: Facebook,
      whatsapp: MessageCircle,
    };
    return icons[platform] || Mail;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Social Links */}
          <div className="social-links">
            {socialLinks.map((link) => {
              const IconComponent = getSocialIcon(link.platform);
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.ariaLabel}
                >
                  <span className="social-icon">
                    <IconComponent size={20} strokeWidth={2} />
                  </span>
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="copyright">
            © {new Date().getFullYear()} Eswin Poroj. Desarrollado con <Heart size={16} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--color-primary)' }} /> usando React + Vite
          </p>

          {/* Quick Info */}
          <p className="footer-note">
            Estudiante de Ingeniería en Sistemas | Apasionado por IA y Desarrollo Web
          </p>
        </div>
      </div>
    </footer>
  );
}
