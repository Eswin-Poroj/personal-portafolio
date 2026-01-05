/**
 * Project Entity - Domain Layer
 * Represents a portfolio project with all its details
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'ai' | 'automation' | 'other';
  imageUrl: string;
  images?: string[]; // Additional images for detail view
  githubUrl?: string;
  liveUrl?: string;
  youtubeUrl?: string;
  featured: boolean;
  engineeredFor?: string[]; // e.g., ["High Performance", "Scalable Architecture"]
  badges?: string[]; // e.g., ["Award Winner", "Open Source"]
  date: Date;
  status: 'completed' | 'in-progress' | 'concept';
}
