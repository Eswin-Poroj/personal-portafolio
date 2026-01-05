/**
 * Repository Interfaces - Domain Layer
 * Define contracts for data access without implementation details
 */

import type { Project } from '../entities/Project';
import type { Experience } from '../entities/Experience';
import type { Award } from '../entities/Award';
import type { Event } from '../entities/Event';
import type { Skill } from '../entities/Skill';
import type { SocialLink } from '../entities/SocialLink';

export interface IProjectRepository {
  getAll(): Promise<Project[]>;
  getById(id: string): Promise<Project | null>;
  getFeatured(): Promise<Project[]>;
  getByCategory(category: string): Promise<Project[]>;
  search(query: string): Promise<Project[]>;
}

export interface IExperienceRepository {
  getAll(): Promise<Experience[]>;
  getCurrent(): Promise<Experience[]>;
}

export interface IAwardRepository {
  getAll(): Promise<Award[]>;
}

export interface IEventRepository {
  getAll(): Promise<Event[]>;
}

export interface ISkillRepository {
  getAll(): Promise<Skill[]>;
  getByCategory(category: string): Promise<Skill[]>;
}

export interface ISocialLinkRepository {
  getAll(): Promise<SocialLink[]>;
}
