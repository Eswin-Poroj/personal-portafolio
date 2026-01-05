/**
 * SocialLink Entity - Domain Layer
 * Represents social media and professional network links
 */

export interface SocialLink {
  id: string;
  platform: 'github' | 'linkedin' | 'X' | 'instagram' | 'facebook' | 'whatsapp' | 'email' | 'other';
  url: string;
  username?: string;
  icon: string;
  ariaLabel: string;
}
