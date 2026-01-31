/**
 * Intersection Observer Hook - Presentation Layer
 * Optimized scroll animations without scroll events
 */

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  
  const elementRef = useRef<HTMLElement>(null);
  
  // Check for prefers-reduced-motion once
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    } else if (!triggerOnce) {
      setIsVisible(false);
    }
  }, [triggerOnce]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || prefersReducedMotion || isVisible) return;

    const observer = new IntersectionObserver(handleIntersection, { 
      threshold, 
      rootMargin 
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, prefersReducedMotion, isVisible, handleIntersection]);

  return { elementRef, isVisible };
}
