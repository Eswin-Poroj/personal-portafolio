/**
 * Social Link Repository Implementation - Infrastructure Layer
 */

import type { SocialLink } from '../../domain/entities/SocialLink';
import type { ISocialLinkRepository } from '../../domain/interfaces/IRepositories';
import { socialLinksData } from '../data/mockData';

export class SocialLinkRepository implements ISocialLinkRepository {
  private socialLinks: SocialLink[] = socialLinksData;

  async getAll(): Promise<SocialLink[]> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    return [...this.socialLinks];
  }
}
