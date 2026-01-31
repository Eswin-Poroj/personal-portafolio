/**
 * About Section - Personal Information
 * Biografía, educación e intereses
 */

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import {  
  GraduationCap, 
  BookOpen, 
  Trophy, 
  Smartphone, 
  Brain, 
  Laptop, 
  Globe, 
  Bot, 
  Settings, 
  Zap, 
  Target,
  School
} from 'lucide-react';
import './AboutSection.css';

// Agrega la importación de la imagen (ajusta la ruta a tu imagen)
import profileImage from '../../../../public/assets/images/profiles/profile.jpg';

export function AboutSection() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="section about-section" ref={elementRef}>
      <div className="container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          {/* Profile Image */}
          <div className="about-image-wrapper">
             {/* Imagen de perfil: lazy loading, decoding async y alt accesible */}
              <img
              src={profileImage}
              alt="Foto de perfil de Eswin Poroj"
              className="about-image"
              loading="lazy"
              decoding="async"
              width={320}
              height={320}
            />
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Años Programando</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Proyectos</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-text">
            <h2 className="about-title">Sobre Mí</h2>
            
            <div className="about-bio">
              <p>
                Soy estudiante de <strong>6to semestre de Ingeniería en Sistemas de la Información y Ciencias de la Computación</strong>, apasionado por crear soluciones tecnológicas que impacten positivamente en las personas.
              </p>
              <p>
                Mi enfoque principal está en el <strong>desarrollo software</strong>, con especial interés en la <strong>Inteligencia Artificial</strong> y sus aplicaciones prácticas. Me fascina explorar tecnologías emergentes como <strong>RAG (Retrieval-Augmented Generation)</strong>, <strong>MCP (Model Context Protocol)</strong> y <strong>Fine-tuning de modelos</strong>.
              </p>
              <p>
                Actualmente trabajo en una <strong>startup fintech</strong> donde desarrollo soluciones de servicios financieros integradas con WhatsApp y agentes de IA, combinando mi pasión por la tecnología con la innovación en servicios digitales.
              </p>
            </div>

            <div className="about-education">
              <h3 className="subsection-title">
                <GraduationCap size={24} strokeWidth={2} /> Educación
              </h3>

              {/* Universidad Principal */}
              <div className="education-card">
                <div className="education-header">
                  <div className="education-icon">
                    <School size={28} strokeWidth={2} />
                  </div>
                  <div className="education-info">
                    <h4>Ingeniería en Sistemas de la Información y Ciencias de la Computación</h4>
                    <p className="education-institution">Universidad Mariano Gálvez de Guatemala</p>
                    <p className="education-period">
                      <span className="education-badge current">En Curso</span>
                      6to Semestre • 2023 - Presente
                    </p>
                  </div>
                </div>

                {/* Cursos Destacados */}
                <div className="education-courses">
                  <h5>
                    <BookOpen size={20} strokeWidth={2} /> Cursos Destacados
                  </h5>
                  <div className="courses-grid">
                    <span className="course-tag">Estructuras de Datos</span>
                    <span className="course-tag">Algoritmos</span>
                    <span className="course-tag">Base de Datos</span>
                    <span className="course-tag">Programación OOP</span>
                    <span className="course-tag">Desarrollo Web</span>
                    <span className="course-tag">Matemática Discreta</span>
                  </div>
                </div>

                {/* Logros Académicos */}
                <div className="education-achievements">
                  <h5>
                    <Trophy size={20} strokeWidth={2} /> Logros Académicos
                  </h5>
                  <ul className="achievements-list">
                    <li>Representante de Guatemala en WorldSkills 2024</li>
                    <li>Participación en proyectos de investigación de IA</li>
                    <li>Miembro activo del club de programación</li>
                  </ul>
                </div>
              </div>

              {/* Educación Complementaria */}
              <div className="education-extra">
                <h5>
                  <BookOpen size={20} strokeWidth={2} /> Formación Complementaria
                </h5>
                <div className="extra-items">
                  <div className="extra-item">
                    <span className="extra-icon">
                      <Smartphone size={24} strokeWidth={2} />
                    </span>
                    <div>
                      <strong>Desarrollo de Aplicaciones Móviles Multiplataforma</strong>
                      <p>Intecap • 2021 - 2022</p>
                    </div>
                  </div>
                  <div className="extra-item">
                    <span className="extra-icon">
                      <Brain size={24} strokeWidth={2} />
                    </span>
                    <div>
                      <strong>Inteligencia Artificial & ML</strong>
                      <p>Especialización en IA Generativa • 2023 - Presente</p>
                    </div>
                  </div>
                  <div className="extra-item">
                    <span className="extra-icon">
                      <Laptop size={24} strokeWidth={2} />
                    </span>
                    <div>
                      <strong>Desarrollo Full Stack</strong>
                      <p>Autodidacta + Cursos Online • 2021 - Presente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-interests">
              <h3 className="subsection-title">
                <Zap size={24} strokeWidth={2} /> Intereses
              </h3>
              <div className="interests-grid">
                <div className="interest-item">
                  <span className="interest-icon">
                    <Globe size={24} strokeWidth={2} />
                  </span>
                  <span>Desarrollo Web</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">
                    <Bot size={24} strokeWidth={2} />
                  </span>
                  <span>Inteligencia Artificial</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">
                    <Settings size={24} strokeWidth={2} />
                  </span>
                  <span>Agentes de IA</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">
                    <Zap size={24} strokeWidth={2} />
                  </span>
                  <span>Automatizaciones</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">
                    <Brain size={24} strokeWidth={2} />
                  </span>
                  <span>RAG & MCP</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">
                    <Target size={24} strokeWidth={2} />
                  </span>
                  <span>Fine Tuning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
