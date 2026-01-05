/**
 * Skill Repository Implementation - Infrastructure Layer
 */

import type { Skill } from '../../domain/entities/Skill';
import type { ISkillRepository } from '../../domain/interfaces/IRepositories';
import { skillsData } from '../data/mockData';

export class SkillRepository implements ISkillRepository {
  private skills: Skill[] = skillsData;

  async getAll(): Promise<Skill[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return [...this.skills];
  }

  async getByCategory(category: string): Promise<Skill[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return this.skills.filter((s) => s.category === category);
  }
}
