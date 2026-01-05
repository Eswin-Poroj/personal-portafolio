/**
 * Navigation Component - Mobile First
 * Responsive navigation with hamburger menu and theme toggle
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import {
  Home,
  User,
  Briefcase,
  Rocket,
  Zap,
  Trophy,
  Calendar,
  Mail,
  Moon,
  Sun,
  type LucideIcon,
} from 'lucide-react';
import './Navigation.css';

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#hero', icon: Home },
  { label: 'Sobre Mí', href: '#about', icon: User },
  { label: 'Experiencia', href: '#experience', icon: Briefcase },
  { label: 'Proyectos', href: '#projects', icon: Rocket },
  { label: 'Skills', href: '#skills', icon: Zap },
  { label: 'Logros', href: '#awards', icon: Trophy },
  { label: 'Eventos', href: '#community', icon: Calendar },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/' && href.startsWith('#')) {
      return; // Let the Link handle navigation to home
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`} role="navigation">
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="nav-logo" aria-label="Ir al inicio">
            <span className="logo-text">Eswin Poroj</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu desktop-only">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    to={location.pathname === '/' ? item.href : `/${item.href}`}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span className="nav-icon">
                      <IconComponent size={18} strokeWidth={2.5} />
                    </span>
                    <span className="nav-label">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact CTA Button */}
          <a href="#contact" className="nav-cta desktop-only">
            <Mail size={16} strokeWidth={2.5} />
            <span>Contacto</span>
          </a>

          {/* Theme Toggle & Hamburger */}
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              className="hamburger"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    to={location.pathname === '/' ? item.href : `/${item.href}`}
                    className="mobile-nav-link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span className="mobile-nav-icon">
                      <IconComponent size={20} strokeWidth={2} />
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <a href="#contact" className="mobile-nav-link mobile-nav-cta" onClick={() => setIsOpen(false)}>
                <span className="mobile-nav-icon">
                  <Mail size={20} strokeWidth={2} />
                </span>
                <span>Contacto</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
