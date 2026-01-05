/**
 * Skill Entity - Domain Layer
 * Represents technical and soft skills
 */

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'ai-ml' | 'devops' | 'tools' | 'soft-skills';
  level: 1 | 2 | 3 | 4 | 5; // 1=beginner, 5=expert
  icon?: string; // Icon identifier or URL
  yearsOfExperience?: number;
}
