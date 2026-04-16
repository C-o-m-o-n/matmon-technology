'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlowSphereProps {
  className?: string;
  color?: 'red' | 'blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
}

export function GlowSphere({
  className,
  color = 'red',
  size = 'md',
  opacity = 0.3,
}: GlowSphereProps) {
  const sizeClasses = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[500px] h-[500px]',
    xl: 'w-[800px] h-[800px]',
  };

  const glowColor = color === 'red' 
    ? 'rgba(255, 30, 30, 0.4)' 
    : 'rgba(0, 112, 255, 0.4)';

  return (
    <div
      className={cn(
        'absolute pointer-events-none blur-[100px] rounded-full animate-float',
        sizeClasses[size],
        className
      )}
      style={{
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        opacity: opacity,
      }}
    />
  );
}
