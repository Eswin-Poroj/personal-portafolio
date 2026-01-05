/**
 * Award Entity - Domain Layer
 * Represents awards, participations, and achievements
 */

export interface Award {
  id: string;
  title: string;
  organization: string;
  type: 'award' | 'certification' | 'participation' | 'speaker';
  date: Date;
  description: string;
  imageUrl?: string;
  certificateUrl?: string;
  eventUrl?: string;
  location?: string;
  badge?: string; // e.g., "National Champion", "Speaker"
}
