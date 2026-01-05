/**
 * Experience Entity - Domain Layer
 * Represents professional work experience
 */

export interface Experience {
  id: string;
  company: string;
  position: string;
  type: 'full-time' | 'part-time' | 'internship' | 'freelance';
  startDate: Date;
  endDate?: Date; // undefined means current position
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  location: string;
  remote: boolean;
}
