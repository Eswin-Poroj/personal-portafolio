/**
 * Projects Section - Complete Implementation
 * Grid responsive con filtros, búsqueda fuzzy y animaciones
 */

import { useState, useEffect } from 'react';
import type { Project } from '../../../domain/entities/Project';
import { ProjectRepository } from '../../../infrastructure/repositories/ProjectRepository';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ProjectCard } from '../common/ProjectCard';
import { SearchBar } from '../common/SearchBar';
import './ProjectsSection.css';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'IA' },
  { id: 'automation', label: 'Automatización' },
];

export function ProjectsSection() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const repository = new ProjectRepository();

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [selectedCategory, searchQuery, projects]);

  async function loadProjects() {
    setLoading(true);
    try {
      const data = await repository.getAll();
      setProjects(data);
      setFilteredProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  }

  async function filterProjects() {
    let filtered = projects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const results = await repository.search(searchQuery);
      const resultIds = new Set(results.map((r) => r.id));
      filtered = filtered.filter((p) => resultIds.has(p.id));
    }

    setFilteredProjects(filtered);
  }

  return (
    <section id="projects" className="section projects-section" ref={elementRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Desarrollo web, aplicaciones móviles y soluciones con IA
          </p>
        </div>

        <div className={`projects-controls ${isVisible ? 'visible' : ''}`}>
          <SearchBar
            placeholder="Buscar proyectos o tecnologías..."
            onSearch={setSearchQuery}
            className="projects-search"
          />

          <div className="category-filters" role="tablist">
            {categories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={selectedCategory === category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="projects-loading">
            <div className="loading-spinner"></div>
            <p>Cargando proyectos...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="projects-empty">
            <p>No se encontraron proyectos.</p>
          </div>
        ) : (
          <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {filteredProjects.length > 0 && (
          <div className="projects-footer">
            <p className="projects-count">
              Mostrando {filteredProjects.length} de {projects.length} proyectos
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
