/**
 * Hero Section - Portfolio Landing
 */

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Trophy, Mic, Briefcase } from 'lucide-react';
import './HeroSection.css';

export function HeroSection() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="hero" className="hero-section" ref={elementRef}>
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Eswin Poroj</span>
          </h1>

          {/* Value Proposition Tagline */}
          <p className="hero-tagline">
            <span>Full-Stack Developer</span>
            <span className="tagline-divider">|</span>
            <span>AI Enthusiast</span>
            <span className="tagline-divider">|</span>
            <span>React + FastAPI</span>
          </p>

          <p className="hero-subtitle">
            Estudiante de Ingeniería en Sistemas | 6to Semestre
          </p>

          <p className="hero-description">
            Apasionado por el Desarrollo de Software, Inteligencia Artificial, Agentes de IA,
            Automatizaciones, RAG, MCP y Fine Tuning.
          </p>

          <div className="hero-badges">
            <span className="hero-badge">
              <Trophy size={18} strokeWidth={2} /> Campeón Nacional WorldSkills 2024
            </span>
            <span className="hero-badge">
              <Mic size={18} strokeWidth={2} /> Speaker DevFest Xela 2025
            </span>
            <span className="hero-badge">
              <Briefcase size={18} strokeWidth={2} /> Fintech Developer
            </span>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">Ver Proyectos</a>
            <a href="#contact" className="btn-secondary">Contacto</a>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll</span>
      </a>
    </section>
  );
}
