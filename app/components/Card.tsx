import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'secondary';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const bgColor = variant === 'default' ? 'var(--card-bg)' : 'var(--secondary)';
  
  return (
    <div 
      className={`p-8 rounded-xl transition-colors duration-300 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
}
