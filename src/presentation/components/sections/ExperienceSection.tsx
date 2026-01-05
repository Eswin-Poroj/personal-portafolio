/**
 * Experience Section - Professional Timeline
 * Timeline de experiencia laboral con detalles expandibles
 */

import { useState, useEffect } from 'react';
import type { Experience } from '../../../domain/entities/Experience';
import { ExperienceRepository } from '../../../infrastructure/repositories/ExperienceRepository';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import './ExperienceSection.css';

export function ExperienceSection() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repository = new ExperienceRepository();
    repository.getAll().then((data) => {
      setExperiences(data);
      setLoading(false);
    });
  }, []);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-GT', {
      year: 'numeric',
      month: 'short',
    });
  };

  const getDuration = (startDate: Date, endDate?: Date) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    
    if (months < 12) {
      return `${months} ${months === 1 ? 'mes' : 'meses'}`;
    }
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'año' : 'años'}`;
    }
    return `${years} ${years === 1 ? 'año' : 'años'} ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'full-time': 'Tiempo Completo',
      'part-time': 'Medio Tiempo',
      'internship': 'Internship',
      'freelance': 'Freelance',
    };
    return labels[type] || type;
  };

  return (
    <section id="experience" className="section experience-section" ref={elementRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Experiencia Profesional</h2>
          <p className="section-subtitle">
            Mi trayectoria en el mundo del desarrollo
          </p>
        </div>

        {loading ? (
          <div className="experience-loading">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className={`experience-timeline ${isVisible ? 'visible' : ''}`}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < experiences.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>

                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="experience-header">
                      <div className="experience-title-group">
                        <h3 className="experience-position">{exp.position}</h3>
                        <p className="experience-company">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <div className="experience-meta">
                        <span className={`experience-type ${exp.type}`}>
                          {getTypeLabel(exp.type)}
                        </span>
                        {!exp.endDate && (
                          <span className="experience-current">Actual</span>
                        )}
                      </div>
                    </div>

                    <div className="experience-date">
                      {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Presente'} • {getDuration(exp.startDate, exp.endDate)}
                    </div>

                    <p className="experience-description">{exp.description}</p>

                    <div className="experience-technologies">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      className="experience-toggle"
                      onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                      aria-expanded={expandedId === exp.id}
                    >
                      {expandedId === exp.id ? 'Ver menos' : 'Ver más'} 
                      <span className="toggle-icon">
                        {expandedId === exp.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </button>

                    {expandedId === exp.id && (
                      <div className="experience-details">
                        <div className="details-section">
                          <h4>Responsabilidades</h4>
                          <ul>
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="details-section">
                            <h4>Logros</h4>
                            <ul className="achievements-list">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx}>
                                  <Trophy size={16} strokeWidth={2} /> {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
