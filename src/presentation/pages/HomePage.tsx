/**
 * Home Page - One Page Layout
 * Main portfolio page with all sections
 */

import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { AwardsSection } from '../components/sections/AwardsSection';
import { CommunitySection } from '../components/sections/CommunitySection';
import { ContactSection } from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AwardsSection />
      <CommunitySection />
      <ContactSection />
    </>
  );
}
