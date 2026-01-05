/**
 * ProjectCard Component
 * Tarjeta de proyecto con hover effects y navegación
 */

import { Link } from 'react-router-dom';
import type { Project } from '../../../domain/entities/Project';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to={`/projects/${project.id}`} className="project-card-link">
        <div className="project-image-wrapper">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-image"
            loading="lazy"
          />
          {project.featured && (
            <span className="project-featured-badge">⭐ Destacado</span>
          )}
        </div>

        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            {project.badges && project.badges.length > 0 && (
              <div className="project-badges">
                {project.badges.map((badge) => (
                  <span key={badge} className="project-badge">
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>

          <p className="project-description">{project.description}</p>

          <div className="project-technologies">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tech-badge-more">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {project.engineeredFor && project.engineeredFor.length > 0 && (
            <div className="project-engineered">
              <span className="engineered-label">Engineered for:</span>
              <span className="engineered-value">
                {project.engineeredFor[0]}
              </span>
            </div>
          )}

          <div className="project-footer">
            <span className="project-date">
              {new Date(project.date).toLocaleDateString('es-GT', {
                year: 'numeric',
                month: 'short',
              })}
            </span>
            <span className="project-cta">Ver detalles →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
