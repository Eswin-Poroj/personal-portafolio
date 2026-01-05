# Copilot Instructions - Portfolio Professional

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a professional portfolio website built with React + Vite + TypeScript following Clean Architecture principles.

## Architecture Rules

1. **Clean Architecture Structure**:

   - `domain/`: Business logic, entities, and interfaces (framework-agnostic)
   - `application/`: Use cases and application services
   - `infrastructure/`: External services, API calls, storage
   - `presentation/`: React components, hooks, and UI logic

2. **Design Pattern**: Mobile-First responsive design
3. **Routing**: Hybrid SPA with React Router (History API for dynamic URLs)
4. **Theme**: Dark/Light mode with system preference detection
5. **Performance**: Lazy loading, Intersection Observer API, optimized for Lighthouse scores

## Code Standards

- Use TypeScript strict mode
- Functional components with hooks
- CSS Modules or CSS-in-JS for styling
- Accessibility: ARIA labels, semantic HTML, keyboard navigation
- Performance: `prefers-reduced-motion` support, hardware-accelerated animations
- Security: Honeypot field for spam prevention

## Key Features

- Intersection Observer API for scroll animations (no scroll events)
- Fuzzy Search (Fuse.js) for project filtering
- Lazy loading for images and routes
- Contact form with spam prevention
- Social media integration
- Event gallery with Lightbox
- YouTube video embeds

## Tech Stack Considerations

- React 18+ with SWC for fast builds
- React Router for navigation
- Framer Motion for animations (optional, prefer CSS transitions when possible)
- CSS Grid for project gallery
- Modern CSS features (Container Queries, CSS Variables)
