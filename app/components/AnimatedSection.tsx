'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from '../lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: Variants;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  animation = fadeInUp 
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animation}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
