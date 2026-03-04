'use client';

import Link from 'next/link';
import { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  style?: CSSProperties;
}

export function Button({ href, onClick, variant = 'primary', children, className = '', type = 'button', style }: ButtonProps) {
  const baseClasses = 'px-8 py-3 rounded-lg font-medium transition-all duration-200 text-center inline-block';
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (style?.backgroundColor) return; // Don't override custom styles
    
    if (variant === 'primary') {
      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--btn-primary-hover)';
    } else {
      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--btn-secondary-hover)';
    }
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (style?.backgroundColor) return; // Don't override custom styles
    
    if (variant === 'primary') {
      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--btn-primary-bg)';
    } else {
      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--btn-secondary-bg)';
    }
  };

  const defaultStyle = variant === 'primary' 
    ? { backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }
    : { 
        borderColor: 'var(--btn-secondary-border)', 
        color: 'var(--btn-secondary-text)', 
        backgroundColor: 'var(--btn-secondary-bg)',
        border: '1px solid'
      };

  const finalStyle = { ...defaultStyle, ...style };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`}
        style={finalStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={finalStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
