
import { useEffect, useRef } from 'react';

/**
 * A hook that adds fade-in animation to elements when they are scrolled into view
 * @param options - IntersectionObserver options
 */
const useScrollAnimation = (options = {}) => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once the animation is applied, we don't need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);
  
  return ref;
};

export default useScrollAnimation;
