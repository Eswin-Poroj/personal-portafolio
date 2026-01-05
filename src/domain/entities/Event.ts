/**
 * Event Entity - Domain Layer
 * Represents community events, conferences, workshops
 */

export interface Event {
  id: string;
  title: string;
  type: 'conference' | 'workshop' | 'competition' | 'meetup';
  date: Date;
  location: string;
  description: string;
  role: 'attendee' | 'speaker' | 'organizer' | 'participant';
  images: string[];
  videoUrl?: string; // YouTube embed URL
  links?: {
    event?: string;
    presentation?: string;
    photos?: string;
  };
}
