
import React, { ReactNode } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({ 
  children, 
  className = '',
  delay = 0
}) => {
  const ref = useScrollAnimation();
  
  // Apply delay through inline style if needed
  const style = delay ? { transitionDelay: `${delay}ms` } : {};
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`fade-on-scroll ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
