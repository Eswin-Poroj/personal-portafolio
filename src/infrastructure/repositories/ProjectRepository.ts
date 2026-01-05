/**
 * Project Repository Implementation - Infrastructure Layer
 * Implements the IProjectRepository interface with mock data
 */

import type { Project } from '../../domain/entities/Project';
import type { IProjectRepository } from '../../domain/interfaces/IRepositories';
import { projectsData } from '../data/mockData';
import Fuse from 'fuse.js';

export class ProjectRepository implements IProjectRepository {
  private projects: Project[] = projectsData;
  private fuse: Fuse<Project>;

  constructor() {
    // Configure Fuse.js for fuzzy search
    this.fuse = new Fuse(this.projects, {
      keys: ['title', 'description', 'technologies', 'category'],
      threshold: 0.4,
      includeScore: true,
    });
  }

  async getAll(): Promise<Project[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return [...this.projects].sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async getById(id: string): Promise<Project | null> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    return this.projects.find((p) => p.id === id) || null;
  }

  async getFeatured(): Promise<Project[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return this.projects.filter((p) => p.featured);
  }

  async getByCategory(category: string): Promise<Project[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return this.projects.filter((p) => p.category === category);
  }

  async search(query: string): Promise<Project[]> {
    await new Promise((resolve) => setTimeout(resolve, 150));
    
    if (!query.trim()) {
      return this.getAll();
    }

    const results = this.fuse.search(query);
    return results.map((result) => result.item);
  }
}
