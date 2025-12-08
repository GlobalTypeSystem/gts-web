import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const AnimatedHero: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-500/5 via-blue-500/5 to-purple-500/5 dark:from-brand-500/10 dark:via-blue-500/10 dark:to-purple-500/10'></div>

      {/* Animated Grid */}
      <div className='absolute inset-0 opacity-20 dark:opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
            linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '4rem 4rem',
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className='absolute rounded-full bg-gradient-to-br from-brand-400 to-blue-500 animate-float'
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            opacity: 0.3,
          }}
        ></div>
      ))}

      {/* Glowing Orbs */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse-slow'></div>
      <div
        className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow'
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Animated Lines */}
      <svg
        className='absolute inset-0 w-full h-full'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='line-gradient'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop offset='0%' stopColor='rgb(20 184 166)' stopOpacity='0' />
            <stop offset='50%' stopColor='rgb(20 184 166)' stopOpacity='0.5' />
            <stop offset='100%' stopColor='rgb(59 130 246)' stopOpacity='0' />
          </linearGradient>
        </defs>
        <path
          d='M 0,300 Q 400,200 800,300 T 1600,300'
          fill='none'
          stroke='url(#line-gradient)'
          strokeWidth='2'
          className='animate-draw-line'
        />
        <path
          d='M 0,400 Q 400,500 800,400 T 1600,400'
          fill='none'
          stroke='url(#line-gradient)'
          strokeWidth='2'
          className='animate-draw-line'
          style={{ animationDelay: '0.5s' }}
        />
      </svg>
    </div>
  );
};
