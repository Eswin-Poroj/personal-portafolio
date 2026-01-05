/**
 * Experience Repository Implementation - Infrastructure Layer
 */

import type { Experience } from '../../domain/entities/Experience';
import type { IExperienceRepository } from '../../domain/interfaces/IRepositories';
import { experienceData } from '../data/mockData';

export class ExperienceRepository implements IExperienceRepository {
  private experiences: Experience[] = experienceData;

  async getAll(): Promise<Experience[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return [...this.experiences].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }

  async getCurrent(): Promise<Experience[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return this.experiences.filter((e) => !e.endDate);
  }
}
