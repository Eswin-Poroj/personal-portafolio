/**
 * Mock Data - Portfolio Information
 * This will be replaced with API calls in the future
 */

import type { Project } from '../../domain/entities/Project';
import type { Experience } from '../../domain/entities/Experience';
import type { Award } from '../../domain/entities/Award';
import type { Event } from '../../domain/entities/Event';
import type { Skill } from '../../domain/entities/Skill';
import type { SocialLink } from '../../domain/entities/SocialLink';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Fintech WhatsApp IA Platform',
    description: 'Plataforma de servicios financieros integrada con WhatsApp y agentes de IA',
    longDescription: 'Sistema completo de servicios financieros que permite a usuarios gestionar transacciones mediante WhatsApp con asistencia de IA. Incluye procesamiento de lenguaje natural, validación de transacciones y seguridad multi-capa.',
    technologies: ['React', 'Node.js', 'WhatsApp Business API', 'OpenAI', 'PostgreSQL', 'Redis'],
    category: 'ai',
    imageUrl: '/assets/images/projects/fintech-placeholder.jpg',
    featured: true,
    engineeredFor: ['High Performance', 'Scalable Architecture', 'Real-time Processing'],
    badges: ['In Production', 'Enterprise'],
    date: new Date('2024-01-01'),
    status: 'in-progress',
    githubUrl: 'https://github.com/Eswin-Poroj/Proyecto-Final-Estadistica-1',
    liveUrl: 'https://github.com/Eswin-Poroj/Proyecto-Final-Estadistica-1',
  },
  {
    id: '2',
    title: 'WorldSkills Mobile App',
    description: 'Aplicación móvil ganadora del campeonato nacional de WorldSkills Guatemala 2024',
    longDescription: 'Aplicación Flutter con Firebase que me llevó a ganar el campeonato nacional. Incluye autenticación, base de datos en tiempo real, notificaciones push y diseño Material.',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore', 'FCM'],
    category: 'mobile',
    imageUrl: '/assets/images/projects/foto-1.jpg',
    featured: true,
    engineeredFor: ['Mobile-First', 'Real-time Sync', 'Offline Capability'],
    badges: ['National Champion', 'Award Winner'],
    date: new Date('2024-06-01'),
    status: 'completed',
    githubUrl: '',
  },
  {
    id: '3',
    title: 'RAG Agent for AI Systems',
    description: 'Sistema de Retrieval-Augmented Generation para agentes de IA',
    longDescription: 'Implementación de RAG que permite a agentes de IA acceder a conocimiento contextual mediante embeddings y búsqueda vectorial. Presentado en DevFest Xela 2025.',
    technologies: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'FastAPI'],
    category: 'ai',
    imageUrl: '/assets/images/projects/rag-placeholder.jpg',
    featured: true,
    engineeredFor: ['AI Integration', 'Vector Search', 'Low Latency'],
    badges: ['Conference Talk', 'Open Source'],
    date: new Date('2024-11-01'),
    status: 'completed',
    githubUrl: '',
  },
];

export const experienceData: Experience[] = [
  {
    id: '1',
    company: 'Fintech Startup',
    position: 'Full Stack Developer & AI Engineer',
    type: 'full-time',
    startDate: new Date('2024-01-01'),
    endDate: undefined, // Current position
    description: 'Desarrollo de plataforma de servicios financieros con integración de IA',
    responsibilities: [
      'Desarrollo de arquitectura de microservicios con Node.js y React',
      'Integración de agentes de IA con OpenAI y LangChain',
      'Implementación de WhatsApp Business API para interacciones con usuarios',
      'Optimización de base de datos y queries para alto rendimiento',
      'Diseño e implementación de sistemas de seguridad y encriptación',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'OpenAI', 'WhatsApp API', 'Docker'],
    achievements: [
      'Reducción del 40% en tiempo de respuesta del sistema',
      'Implementación exitosa de agentes de IA con 95% de precisión',
      'Escalamiento de plataforma a 10,000+ usuarios activos',
    ],
    location: 'Guatemala',
    remote: true,
  },
  {
    id: '2',
    company: 'Fintech Startup',
    position: 'Intern - Software Development',
    type: 'internship',
    startDate: new Date('2023-06-01'),
    endDate: new Date('2023-12-31'),
    description: 'Internship enfocado en desarrollo web y automatizaciones',
    responsibilities: [
      'Desarrollo de componentes frontend con React',
      'Creación de scripts de automatización con Python',
      'Testing y debugging de aplicaciones',
      'Documentación técnica',
    ],
    technologies: ['React', 'Python', 'JavaScript', 'Git'],
    location: 'Guatemala',
    remote: true,
  },
];

export const awardsData: Award[] = [
  {
    id: '1',
    title: 'Campeón Nacional - Desarrollo de Aplicaciones Móviles',
    organization: 'WorldSkills Guatemala',
    type: 'award',
    date: new Date('2024-06-15'),
    description: 'Primer lugar en competencia nacional de desarrollo de aplicaciones móviles con Flutter y Firebase',
    badge: 'National Champion',
    location: 'Guatemala',
    certificateUrl: "/assets/images/events/devfest-1.webp", 
  },
  {
    id: '2',
    title: 'Google Cloud Fundamentals',
    organization: 'Google Cloud',
    type: 'certification',
    date: new Date('2024-03-20'),
    description: 'Certificación en fundamentos de Google Cloud Platform, incluyendo compute, storage y networking',
    badge: 'Certified',
    location: 'Online',
  },
  {
    id: '3',
    title: 'Meta Front-End Developer',
    organization: 'Meta (Coursera)',
    type: 'certification',
    date: new Date('2023-11-10'),
    description: 'Certificación profesional en desarrollo front-end con React, JavaScript y mejores prácticas',
    badge: 'Professional Certificate',
    location: 'Online',
  },
  {
    id: '4',
    title: 'Segundo Lugar - Hackathon IA Guatemala',
    organization: 'Tech Community Guatemala',
    type: 'award',
    date: new Date('2024-09-20'),
    description: 'Segundo lugar por desarrollo de asistente de IA para educación accesible',
    badge: 'Runner Up',
    location: 'Guatemala',
  },
  {
    id: '5',
    title: 'Python for Data Science',
    organization: 'IBM (Coursera)',
    type: 'certification',
    date: new Date('2023-08-15'),
    description: 'Certificación en Python aplicado a ciencia de datos y análisis',
    badge: 'Certificate',
    location: 'Online',
  },
];

export const eventsData: Event[] = [
  {
    id: '1',
    title: 'DevFest Xela 2025',
    type: 'conference',
    date: new Date('2025-01-15'),
    location: 'Quetzaltenango, Guatemala',
    description: 'Charla sobre RAG para Agentes de IA - Implementación práctica de Retrieval-Augmented Generation',
    role: 'speaker',
    images: [
      '/assets/images/events/devfest-1.webp',
      '/assets/images/events/devfest-2.webp',
    ],
  },
  {
    id: '2',
    title: 'WorldSkills Guatemala 2024',
    type: 'competition',
    date: new Date('2024-06-15'),
    location: 'Guatemala City, Guatemala',
    description: 'Competencia nacional de habilidades técnicas - Desarrollo de Aplicaciones Móviles',
    role: 'participant',
    images: [
      '/assets/images/events/foto-1.jpg',
      '/assets/images/events/foto-2.jpg',
    ],
  },
];

export const skillsData: Skill[] = [
  // Frontend
  { id: '1', name: 'React', category: 'frontend', level: 5, icon: 'react', yearsOfExperience: 3 },
  { id: '2', name: 'TypeScript', category: 'frontend', level: 4, icon: 'typescript', yearsOfExperience: 2 },
  { id: '3', name: 'JavaScript', category: 'frontend', level: 5, icon: 'javascript', yearsOfExperience: 4 },
  { id: '4', name: 'HTML/CSS', category: 'frontend', level: 5, icon: 'html', yearsOfExperience: 4 },
  { id: '5', name: 'Vite', category: 'frontend', level: 4, icon: 'vite', yearsOfExperience: 2 },
  
  // Backend
  { id: '6', name: 'Node.js', category: 'backend', level: 4, icon: 'nodejs', yearsOfExperience: 3 },
  { id: '7', name: 'Python', category: 'backend', level: 4, icon: 'python', yearsOfExperience: 3 },
  { id: '8', name: 'PostgreSQL', category: 'backend', level: 4, icon: 'postgresql', yearsOfExperience: 2 },
  { id: '9', name: 'REST APIs', category: 'backend', level: 5, icon: 'api', yearsOfExperience: 3 },
  
  // Mobile
  { id: '10', name: 'Flutter', category: 'mobile', level: 5, icon: 'flutter', yearsOfExperience: 2 },
  { id: '11', name: 'Firebase', category: 'mobile', level: 4, icon: 'firebase', yearsOfExperience: 2 },
  
  // AI/ML
  { id: '12', name: 'OpenAI APIs', category: 'ai-ml', level: 4, icon: 'openai', yearsOfExperience: 1 },
  { id: '13', name: 'LangChain', category: 'ai-ml', level: 4, icon: 'langchain', yearsOfExperience: 1 },
  { id: '14', name: 'RAG Systems', category: 'ai-ml', level: 4, icon: 'ai', yearsOfExperience: 1 },
  { id: '15', name: 'MCP', category: 'ai-ml', level: 3, icon: 'mcp', yearsOfExperience: 1 },
  
  // DevOps & Tools
  { id: '16', name: 'Git', category: 'tools', level: 5, icon: 'git', yearsOfExperience: 4 },
  { id: '17', name: 'Docker', category: 'devops', level: 3, icon: 'docker', yearsOfExperience: 1 },
  { id: '18', name: 'VS Code', category: 'tools', level: 5, icon: 'vscode', yearsOfExperience: 4 },
];

export const socialLinksData: SocialLink[] = [
  {
    id: '1',
    platform: 'github',
    url: 'https://github.com/Eswin-Poroj',
    username: 'Eswin-Poroj',
    icon: 'github',
    ariaLabel: 'Visit my GitHub profile',
  },
  {
    id: '2',
    platform: 'linkedin',
    url: 'https://linkedin.com/in/eswin-poroj',
    username: 'Eswin-Poroj',
    icon: 'linkedin',
    ariaLabel: 'Connect with me on LinkedIn',
  },
  {
    id: '3',
    platform: 'X',
    url: 'https://twitter.com/porojcastro',
    username: '@porojcastro',
    icon: 'twitter',
    ariaLabel: 'Follow me on Twitter/X',
  },
  {
    id: '4',
    platform: 'email',
    url: 'mailto:eswinstuardporojcastro@gmail.com',
    username: 'eswinstuardporojcastro@gmail.com',
    icon: 'email',
    ariaLabel: 'Send me an email',
  },
  {
    id: '5',
    platform: 'instagram',
    url: 'https://instagram.com/eswin_poroj1',
    username: '@eswin_poroj1',
    icon: 'instagram',
    ariaLabel: 'Follow me on Instagram',
  },
  {
    id: '6',
    platform: 'facebook',
    url: 'https://facebook.com/estuardo.poroj.37',
    username: 'Eswin Poroj',
    icon: 'facebook',
    ariaLabel: 'Connect on Facebook',
  },
  {
    id: '7',
    platform: 'whatsapp',
    url: 'https://wa.me/50248676931',
    username: '+502 4867 6931',
    icon: 'whatsapp',
    ariaLabel: 'Contact me on WhatsApp',
  },
];
