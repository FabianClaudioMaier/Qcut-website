import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...props }) {
  const ref = useScrollReveal();
  
  return (
    <Tag 
      ref={ref} 
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...props.style }}
      {...props}
    >
      {children}
    </Tag>
  );
}