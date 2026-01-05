/**
 * Skills Section - Technical Skills Display
 * Grid de habilidades organizadas por categoría con tabs
 */

import { useState, useEffect } from 'react';
import type { Skill } from '../../../domain/entities/Skill';
import { SkillRepository } from '../../../infrastructure/repositories/SkillRepository';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { 
  Code2,
  FileCode, 
  Database,
  Plug,
  Smartphone,
  Flame,
  Bot,
  Link,
  Brain,
  Target,
  Package,
  Container,
  Terminal,
  Palette,
  Zap,
  Circle,
  Server
} from 'lucide-react';
import './SkillsSection.css';

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai-ml', label: 'IA & ML' },
  { id: 'devops', label: 'DevOps' },
  { id: 'tools', label: 'Tools' },
];

const techIcons: Record<string, React.ReactElement> = {
  'React': <Code2 size={28} strokeWidth={2} />,
  'TypeScript': <FileCode size={28} strokeWidth={2} />,
  'JavaScript': <FileCode size={28} strokeWidth={2} />,
  'HTML/CSS': <Palette size={28} strokeWidth={2} />,
  'Vite': <Zap size={28} strokeWidth={2} />,
  'Node.js': <Circle size={28} strokeWidth={2} />,
  'Python': <Server size={28} strokeWidth={2} />,
  'PostgreSQL': <Database size={28} strokeWidth={2} />,
  'REST APIs': <Plug size={28} strokeWidth={2} />,
  'Flutter': <Smartphone size={28} strokeWidth={2} />,
  'Firebase': <Flame size={28} strokeWidth={2} />,
  'OpenAI APIs': <Bot size={28} strokeWidth={2} />,
  'LangChain': <Link size={28} strokeWidth={2} />,
  'RAG Systems': <Brain size={28} strokeWidth={2} />,
  'MCP': <Target size={28} strokeWidth={2} />,
  'Git': <Package size={28} strokeWidth={2} />,
  'Docker': <Container size={28} strokeWidth={2} />,
  'VS Code': <Terminal size={28} strokeWidth={2} />,
};

export function SkillsSection() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repository = new SkillRepository();
    repository.getAll().then((data) => {
      setSkills(data);
      setFilteredSkills(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter((s) => s.category === selectedCategory));
    }
  }, [selectedCategory, skills]);

  const getStars = (level: number) => {
    const filled = '★'.repeat(level);
    const empty = '☆'.repeat(5 - level);
    return (
      <span style={{ color: 'var(--color-primary)' }}>
        {filled}<span style={{ opacity: 0.3 }}>{empty}</span>
      </span>
    );
  };

  return (
    <section id="skills" className="section skills-section" ref={elementRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que domino
          </p>
        </div>

        <div className={`skills-tabs ${isVisible ? 'visible' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`tab-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="skills-loading">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.id}
                className="skill-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="skill-icon">
                  {techIcons[skill.name] || <Code2 size={28} strokeWidth={2} />}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-level" title={`Nivel ${skill.level}/5`}>
                  {getStars(skill.level)}
                </div>
                {skill.yearsOfExperience && (
                  <p className="skill-experience">
                    {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'año' : 'años'}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
