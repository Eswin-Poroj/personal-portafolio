/**
 * Event Repository Implementation - Infrastructure Layer
 */

import type { Event } from '../../domain/entities/Event';
import type { IEventRepository } from '../../domain/interfaces/IRepositories';
import { eventsData } from '../data/mockData';

export class EventRepository implements IEventRepository {
  private events: Event[] = eventsData;

  async getAll(): Promise<Event[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return [...this.events].sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
