import { useState, useEffect, useRef, MutableRefObject } from 'react';

type UseLazyLoadReturn = [MutableRefObject<HTMLDivElement | null>, boolean];

export const useLazyLoad = (options: IntersectionObserverInit = {}): UseLazyLoadReturn => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '200px', // Start loading when within 200px of viewport
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
}
