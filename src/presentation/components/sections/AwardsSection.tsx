/**
 * Awards Section Component
 * Displays awards, recognitions, certifications, and speaking engagements
 */

import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { awardsData } from '../../../infrastructure/data/mockData';
import type { Award } from '../../../domain/entities/Award';
import { Trophy, FileCheck, Mic } from 'lucide-react';
import styles from '../../styles/sections/AwardsSection.module.css';

export function AwardsSection() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [selectedType, setSelectedType] = useState<'all' | 'award' | 'certification'>('all');

  // Filter awards by type - use useMemo to avoid cascading renders
  const filteredAwards = selectedType === 'all' 
    ? awardsData 
    : awardsData.filter(award => award.type === selectedType);

  // Sort awards by date (most recent first)
  const sortedAwards = [...filteredAwards].sort((a, b) => b.date.getTime() - a.date.getTime());

  const getTypeIcon = (type: Award['type']) => {
    switch (type) {
      case 'award':
        return <Trophy size={24} strokeWidth={2} />;
      case 'certification':
        return <FileCheck size={24} strokeWidth={2} />;
      case 'speaker':
        return <Mic size={24} strokeWidth={2} />;
      default:
        return <Trophy size={24} strokeWidth={2} />;
    }
  };

  const getBadgeClass = (badge?: string) => {
    if (!badge) return '';
    if (badge.includes('Champion') || badge.includes('First')) return styles.badgeGold;
    if (badge.includes('Speaker')) return styles.badgePurple;
    if (badge.includes('Certificate')) return styles.badgeBlue;
    return styles.badgeDefault;
  };

  return (
    <section
      id="awards"
      ref={elementRef}
      className={`${styles.awards} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Premios y Reconocimientos</h2>
          <p className={styles.subtitle}>
            Logros profesionales, certificaciones y participación en eventos
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${selectedType === 'all' ? styles.active : ''}`}
            onClick={() => setSelectedType('all')}
            aria-pressed={selectedType === 'all'}
          >
            Todos ({awardsData.length})
          </button>
          <button
            className={`${styles.filterBtn} ${selectedType === 'award' ? styles.active : ''}`}
            onClick={() => setSelectedType('award')}
            aria-pressed={selectedType === 'award'}
          >
            <Trophy size={16} strokeWidth={2} /> Premios ({awardsData.filter(a => a.type === 'award').length})
          </button>
          <button
            className={`${styles.filterBtn} ${selectedType === 'certification' ? styles.active : ''}`}
            onClick={() => setSelectedType('certification')}
            aria-pressed={selectedType === 'certification'}
          >
            <FileCheck size={16} strokeWidth={2} /> Certificaciones ({awardsData.filter(a => a.type === 'certification').length})
          </button>
        </div>

        {/* Awards Grid */}
        <div className={styles.grid}>
          {sortedAwards.length > 0 ? (
            sortedAwards.map((award, index) => (
              <article
                key={award.id}
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.typeIcon} aria-label={award.type}>
                    {getTypeIcon(award.type)}
                  </span>
                  {award.badge && (
                    <span className={`${styles.badge} ${getBadgeClass(award.badge)}`}>
                      {award.badge}
                    </span>
                  )}
                </div>

                <h3 className={styles.cardTitle}>{award.title}</h3>
                
                <div className={styles.cardMeta}>
                  <span className={styles.organization}>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {award.organization}
                  </span>
                  
                  <span className={styles.date}>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {award.date.toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'short' 
                    })}
                  </span>
                  
                  {award.location && (
                    <span className={styles.location}>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {award.location}
                    </span>
                  )}
                </div>

                <p className={styles.description}>{award.description}</p>
              </article>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>No hay {selectedType === 'all' ? 'premios' : `${selectedType}s`} disponibles</p>
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {awardsData.length}
            </span>
            <span className={styles.statLabel}>Total</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {awardsData.filter(a => a.type === 'award').length}
            </span>
            <span className={styles.statLabel}>Premios</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {awardsData.filter(a => a.type === 'certification').length}
            </span>
            <span className={styles.statLabel}>Certificaciones</span>
          </div>
        </div>
      </div>
    </section>
  );
}
