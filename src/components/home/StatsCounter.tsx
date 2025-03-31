
import { useState, useEffect, useRef } from 'react';

/**
 * Stats counter component that animates number increases
 * @param {string} label - Label for the stat 
 * @param {number} endValue - The final value to count to
 * @param {string} suffix - Optional suffix for the number (like + or %)
 * @param {number} duration - Animation duration in milliseconds
 */
interface StatsCounterProps {
  label: string;
  endValue: number;
  suffix?: string;
  duration?: number;
}

const StatsCounter = ({ 
  label, 
  endValue, 
  suffix = '', 
  duration = 2000 
}: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only animate once and check if element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  // Animation function to increment the counter
  const animateCount = () => {
    const startTime = Date.now();
    const updateCount = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  return (
    <div 
      ref={counterRef} 
      className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-plum-dark-teal mb-2">
        {count}{suffix}
      </div>
      <div className="text-plum-teal font-medium">{label}</div>
    </div>
  );
};

export default StatsCounter;
