/**
 * Home Page - One Page Layout
 * Main portfolio page with all sections
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { AwardsSection } from '../components/sections/AwardsSection';
import { CommunitySection } from '../components/sections/CommunitySection';
import { ContactSection } from '../components/sections/ContactSection';

interface LocationState {
  scrollTo?: string;
}

export default function HomePage() {
  const location = useLocation();

  console.log('[HomePage] Component rendered');
  console.log('[HomePage] location:', location);

  useEffect(() => {
    const state = location.state as LocationState | null;
    const hash = location.hash;
    
    console.log('[HomePage] useEffect triggered');
    console.log('[HomePage] state:', state);
    console.log('[HomePage] hash:', hash);

    // Priority: state.scrollTo > hash
    const scrollTarget = state?.scrollTo || (hash ? hash.replace('#', '') : null);
    
    if (scrollTarget) {
      console.log('[HomePage] scrollTarget detected:', scrollTarget);
      // Delay to ensure the page is rendered
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        console.log('[HomePage] Element found:', element);
        
        if (element) {
          console.log('[HomePage] Scrolling to element...');
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the state and hash
        if (state?.scrollTo) {
          window.history.replaceState({}, document.title, location.pathname);
        }
      }, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [location.key, location.state, location.hash, location.pathname]);

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
