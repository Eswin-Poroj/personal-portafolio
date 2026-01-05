/**
 * Project Detail Page
 * Deep dive into individual project
 */

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Project } from '../../domain/entities/Project';
import { ProjectRepository } from '../../infrastructure/repositories/ProjectRepository';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const repository = new ProjectRepository();
    repository.getById(id).then((data) => {
      setProject(data);
      setLoading(false);
    });
  }, [id]);

  const handleBackClick = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const projectsSection = document.querySelector('#projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (loading) return <LoadingSpinner />;
  if (!project) {
    return (
      <div className="container section">
        <h1>Proyecto no encontrado</h1>
        <button onClick={handleBackClick} className="btn-primary">
          Volver a Proyectos
        </button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container section">
        <button onClick={handleBackClick} className="back-link">
          <ArrowLeft size={20} strokeWidth={2} />
          <span>Volver a Proyectos</span>
        </button>
        
        <article className="project-content">
          <header className="project-header">
            <h1>{project.title}</h1>
            {project.badges && (
              <div className="project-badges">
                {project.badges.map((badge) => (
                  <span key={badge} className="badge">{badge}</span>
                ))}
              </div>
            )}
          </header>

          {project.imageUrl && (
            <img src={project.imageUrl} alt={project.title} className="project-image" />
          )}

          <div className="project-meta">
            <span className="project-date">
              {new Date(project.date).toLocaleDateString('es-GT', {
                year: 'numeric',
                month: 'long',
              })}
            </span>
            <span className="project-status">{project.status}</span>
          </div>

          <section className="project-description">
            <h2>Descripción</h2>
            <p>{project.longDescription || project.description}</p>
          </section>

          <section className="project-technologies">
            <h2>Tecnologías</h2>
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>

          {project.engineeredFor && project.engineeredFor.length > 0 && (
            <section className="project-engineered">
              <h2>Engineered For</h2>
              <ul>
                {project.engineeredFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github size={20} strokeWidth={2} />
                <span>Ver en GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={20} strokeWidth={2} />
                <span>Ver Demo</span>
              </a>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
