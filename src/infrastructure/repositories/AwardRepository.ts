/**
 * Award Repository Implementation - Infrastructure Layer
 */

import type { Award } from '../../domain/entities/Award';
import type { IAwardRepository } from '../../domain/interfaces/IRepositories';
import { awardsData } from '../data/mockData';

export class AwardRepository implements IAwardRepository {
  private awards: Award[] = awardsData;

  async getAll(): Promise<Award[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return [...this.awards].sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
