# 🎨 Portfolio Profesional - Eswin Poroj

Portfolio profesional interactivo desarrollado con **React + Vite + TypeScript** siguiendo principios de **Clean Architecture** y diseño **Mobile First**.

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF.svg)](https://vitejs.dev/)

## ✨ Características Principales

### 🏗️ Arquitectura
- ✅ **Clean Architecture**: Separación en capas (Domain, Application, Infrastructure, Presentation)
- ✅ **TypeScript Strict Mode**: Tipado fuerte y seguridad de tipos
- ✅ **Hybrid SPA**: Single Page Application con rutas dinámicas
- ✅ **Lazy Loading**: Carga optimizada de componentes y rutas
- ✅ **CSS Modules**: Estilos con scope local

### 🎨 Diseño y UX
- ✅ **Mobile First**: Diseño completamente responsive (320px - 4K)
- ✅ **Dark/Light Theme**: Cambio de tema con detección de preferencia del sistema
- ✅ **Intersection Observer API**: Animaciones optimizadas sin scroll events
- ✅ **Smooth Animations**: Transiciones suaves con CSS y `prefers-reduced-motion`
- ✅ **Modern UI**: Gradientes, glassmorphism, hover effects

### ♿ Accesibilidad
- ✅ **ARIA Labels**: Etiquetas descriptivas para screen readers
- ✅ **Semantic HTML**: Uso correcto de tags semánticos
- ✅ **Keyboard Navigation**: Navegación completa con teclado
- ✅ **Focus Management**: Manejo adecuado del focus
- ✅ **WCAG Compliant**: Ratios de contraste y best practices

### ⚡ Performance
- ✅ **Lazy Loading**: Imágenes y rutas cargadas on-demand
- ✅ **Code Splitting**: Chunks optimizados
- ✅ **Optimized Bundles**: Build size minimizado
- ✅ **Fast Refresh**: HMR instantáneo con Vite

## 📑 Secciones Implementadas

1. **🎯 Hero Section**: Landing impactante con CTA buttons
2. **👤 About Section**: Biografía, educación, intereses, stats
3. **💼 Experience Section**: Timeline de experiencia con detalles expandibles
4. **🚀 Projects Section**: Grid con filtros, búsqueda fuzzy, y lazy loading
5. **🛠️ Skills Section**: Habilidades organizadas por categoría con niveles
6. **🏆 Awards Section**: Premios, certificaciones, reconocimientos
7. **🎪 Community Section**: Eventos con galería de imágenes y lightbox interactivo
8. **📧 Contact Section**: Formulario con validación y honeypot

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + TypeScript 5
- **Build Tool**: Vite 7 (con SWC)
- **Routing**: React Router v6
- **Search**: Fuse.js (fuzzy search)
- **Styling**: CSS Modules + CSS Variables
- **Icons**: SVG + Emojis

## 🚦 Comenzar

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/eswinporoj/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Desarrollo
npm run dev
# Servidor disponible en http://localhost:5173

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## 📁 Estructura del Proyecto (Clean Architecture)

```
src/
├── domain/                    # 🎯 Capa de Dominio (Reglas de Negocio)
│   └── entities/              # Entidades del negocio
│       ├── Project.ts
│       ├── Experience.ts
│       ├── Award.ts
│       ├── Event.ts
│       ├── Skill.ts
│       └── SocialLink.ts
│
├── application/               # 📊 Capa de Aplicación (Casos de Uso)
│   └── usecases/
│       └── (future use cases)
│
├── infrastructure/            # 🔧 Capa de Infraestructura (Datos & Servicios)
│   ├── data/
│   │   └── mockData.ts        # Mock data (futuro: APIs)
│   └── repositories/
│       ├── ProjectRepository.ts
│       ├── ExperienceRepository.ts
│       └── ...
│
└── presentation/              # 🎨 Capa de Presentación (UI)
    ├── components/
    │   ├── common/            # Componentes reutilizables
    │   │   ├── Button.tsx
    │   │   ├── LoadingSpinner.tsx
    │   │   ├── ProjectCard.tsx
    │   │   └── SearchBar.tsx
    │   ├── layout/            # Layout components
    │   │   ├── Navigation.tsx
    │   │   ├── Footer.tsx
    │   │   └── RootLayout.tsx
    │   └── sections/          # Secciones principales
    │       ├── HeroSection.tsx
    │       ├── AboutSection.tsx
    │       ├── ExperienceSection.tsx
    │       ├── ProjectsSection.tsx
    │       ├── SkillsSection.tsx
    │       ├── AwardsSection.tsx
    │       ├── CommunitySection.tsx
    │       └── ContactSection.tsx
    ├── context/
    │   └── ThemeContext.tsx   # Context API para temas
    ├── hooks/
    │   ├── useIntersectionObserver.ts
    │   └── useTheme.ts
    ├── pages/
    │   ├── HomePage.tsx
    │   ├── ProjectDetailPage.tsx
    │   └── NotFoundPage.tsx
    └── styles/
        ├── globals.css
        └── sections/          # CSS Modules por sección
            ├── HeroSection.module.css
            ├── ProjectsSection.module.css
            └── ...
```

## 🎯 Features Interactivas

### Projects Section
- 🔍 **Búsqueda Fuzzy** con Fuse.js
- 🏷️ **Filtros por categoría** (Web, Mobile, AI, All)
- 📊 **Contador dinámico** de proyectos
- 🖼️ **Lazy loading** de imágenes
- 🔗 **Links** a GitHub, Demo y detalles

### Community Section
- 🖼️ **Galería de imágenes** en grid responsive
- 🔍 **Lightbox modal** interactivo:
  - Navegación con flechas (< >)
  - Keyboard navigation (ESC, Arrow keys)
  - Indicador de posición (1/5, 2/5, etc.)
  - Click fuera para cerrar
- 🎥 **Videos de YouTube** embebidos
- 🏷️ **Badges por rol** (Speaker, Organizador, etc.)

### Awards Section
- 🏆 **Filtros por tipo** (Premios, Certificaciones, Speaker)
- 📊 **Stats summary** con totales
- 🎨 **Badges dinámicos** con colores según tipo
- 📅 **Timeline ordenado** por fecha

### Skills Section
- 📑 **Tabs por categoría** (Frontend, Backend, AI/ML, etc.)
- ⭐ **Niveles con estrellas** (1-5)
- 📈 **Años de experiencia** por skill
- 🎨 **Hover effects** y animaciones

### Contact Section
- 📝 **Formulario con validación**
- 🍯 **Honeypot** para spam prevention
- ✅ **Estados visuales** (loading, success, error)
- 🔗 **Enlaces a redes sociales**

## 📚 Documentación

- 📖 [Próximos Pasos](./NEXT_STEPS.md) - Roadmap y features pendientes
- 🎨 [Best Practices](./BEST_PRACTICES.md) - Guías de desarrollo
- 🏆 [Awards & Community Docs](./docs/AWARDS_COMMUNITY_SECTIONS.md) - Docs de nuevas secciones
- 📝 [Content Guide](./docs/CONTENT_GUIDE.md) - Guía para agregar contenido real
- 📊 [Implementation Summary](./IMPLEMENTATION_SUMMARY.md) - Resumen completo del proyecto

## 🎨 Personalización

### Cambiar Colores
Edita las CSS Variables en `src/presentation/styles/globals.css`:

```css
:root {
  --accent-primary: #6366f1;    /* Color principal */
  --accent-secondary: #8b5cf6;  /* Color secundario */
  /* ... más variables */
}
```

### Agregar Contenido
Edita `src/infrastructure/data/mockData.ts` con tus:
- Proyectos
- Experiencia laboral
- Premios y certificaciones
- Eventos y charlas
- Skills
- Redes sociales

Ver [Content Guide](./docs/CONTENT_GUIDE.md) para instrucciones detalladas.

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Deploy la carpeta /dist
```

## 📊 Performance

- ⚡ Lighthouse Score: 95+ (objetivo)
- 📦 Bundle Size: Optimizado con code splitting
- 🖼️ Lazy Loading: Imágenes y rutas
- 🎨 CSS Modules: Styles con scope local
- 🔥 Hot Module Replacement: Desarrollo rápido

## 🤝 Contribuir

Contribuciones son bienvenidas! Por favor:
1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Eswin Poroj** - Estudiante de Ingeniería en Sistemas
- 🏆 Campeón Nacional WorldSkills 2024
- 🎤 Speaker DevFest Xela 2025

---

Hecho con ❤️ y mucho ☕
