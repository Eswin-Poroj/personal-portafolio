/**
 * Community Section Component
 * Displays community events, conferences, talks with image gallery and lightbox
 */

import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { eventsData } from '../../../infrastructure/data/mockData';
import type { Event } from '../../../domain/entities/Event';
import { Trophy, Mic, Wrench, Users, Calendar } from 'lucide-react';
import styles from '../../styles/sections/CommunitySection.module.css';

export function CommunitySection() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Sort events by date (most recent first)
  const sortedEvents = [...eventsData].sort((a, b) => b.date.getTime() - a.date.getTime());

  const openLightbox = (event: Event, imageIndex: number) => {
    setSelectedEvent(event);
    setLightboxImage(event.images?.[imageIndex] || null);
    setLightboxIndex(imageIndex);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setSelectedEvent(null);
  };

  const nextImage = () => {
    if (!selectedEvent?.images) return;
    const nextIndex = (lightboxIndex + 1) % selectedEvent.images.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(selectedEvent.images[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedEvent?.images) return;
    const prevIndex = (lightboxIndex - 1 + selectedEvent.images.length) % selectedEvent.images.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(selectedEvent.images[prevIndex]);
  };

  const getEventTypeIcon = (type: Event['type']) => {
    switch (type) {
      case 'competition':
        return <Trophy size={24} strokeWidth={2} />;
      case 'conference':
        return <Mic size={24} strokeWidth={2} />;
      case 'workshop':
        return <Wrench size={24} strokeWidth={2} />;
      case 'meetup':
        return <Users size={24} strokeWidth={2} />;
      default:
        return <Calendar size={24} strokeWidth={2} />;
    }
  };

  const getRoleBadge = (role: Event['role']) => {
    switch (role) {
      case 'speaker':
        return { text: 'Speaker', class: styles.badgeSpeaker };
      case 'organizer':
        return { text: 'Organizador', class: styles.badgeOrganizer };
      case 'participant':
        return { text: 'Participante', class: styles.badgeParticipant };
      default:
        return { text: 'Asistente', class: styles.badgeDefault };
    }
  };

  // Handle keyboard navigation for lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!lightboxImage) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section
      id="community"
      ref={elementRef}
      className={`${styles.community} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Comunidad y Eventos</h2>
          <p className={styles.subtitle}>
            Participación activa en eventos tecnológicos, conferencias y meetups
          </p>
        </div>

        {/* Events Grid */}
        <div className={styles.grid}>
          {sortedEvents.map((event, index) => {
            const roleBadge = getRoleBadge(event.role);
            return (
              <article
                key={event.id}
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.typeIcon} aria-label={event.type}>
                    {getEventTypeIcon(event.type)}
                  </span>
                  <span className={`${styles.badge} ${roleBadge.class}`}>
                    {roleBadge.text}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{event.title}</h3>

                <div className={styles.cardMeta}>
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
                    {event.date.toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  
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
                    {event.location}
                  </span>
                </div>

                <p className={styles.description}>{event.description}</p>

                {/* Image Gallery */}
                {event.images && event.images.length > 0 && (
                  <div className={styles.gallery}>
                    {event.images.map((image, imgIndex) => (
                      <button
                        key={imgIndex}
                        className={styles.galleryItem}
                        onClick={() => openLightbox(event, imgIndex)}
                        aria-label={`Ver imagen ${imgIndex + 1} de ${event.title}`}
                      >
                        <img
                          src={image}
                          alt={`${event.title} - imagen ${imgIndex + 1}`}
                          loading="lazy"
                        />
                        <div className={styles.galleryOverlay}>
                          <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* YouTube Video */}
                {event.videoUrl && (
                  <div className={styles.videoContainer}>
                    <iframe
                      src={event.videoUrl}
                      title={`Video de ${event.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{eventsData.length}</span>
            <span className={styles.statLabel}>Eventos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {eventsData.filter(e => e.role === 'speaker').length}
            </span>
            <span className={styles.statLabel}>Charlas</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {eventsData.filter(e => e.role === 'organizer').length}
            </span>
            <span className={styles.statLabel}>Organizados</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && selectedEvent && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
          tabIndex={-1}
        >
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Cerrar galería"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Imagen anterior"
            disabled={!selectedEvent.images || selectedEvent.images.length <= 1}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage}
              alt={`${selectedEvent.title} - imagen ${lightboxIndex + 1}`}
            />
            <div className={styles.lightboxInfo}>
              <h3>{selectedEvent.title}</h3>
              <p>
                {lightboxIndex + 1} / {selectedEvent.images?.length || 0}
              </p>
            </div>
          </div>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Siguiente imagen"
            disabled={!selectedEvent.images || selectedEvent.images.length <= 1}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
