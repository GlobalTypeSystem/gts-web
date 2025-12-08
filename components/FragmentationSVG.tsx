import React, { useState, useEffect } from 'react';

interface FragmentationSVGProps {
  isUnified?: boolean;
}

export const FragmentationSVG: React.FC<FragmentationSVGProps> = ({
  isUnified = false,
}) => {
  const [animationState, setAnimationState] = useState(isUnified);

  useEffect(() => {
    setAnimationState(isUnified);
  }, [isUnified]);

  // Language blocks data
  const blocks = [
    { id: 'python', label: 'Python', color: '#3776ab', x: 120, y: 90 },
    { id: 'go', label: 'Go', color: '#00add8', x: 430, y: 80 },
    { id: 'rust', label: 'Rust', color: '#ce4e1f', x: 130, y: 310 },
    { id: 'typescript', label: 'TypeScript', color: '#3178c6', x: 450, y: 320 },
    { id: 'json', label: 'JSON Schema', color: '#000000', x: 300, y: 200 },
  ];

  // Calculate unified positions (circular orbit around center)
  const getUnifiedPosition = (index: number, total: number) => {
    const centerX = 300;
    const centerY = 200;
    const radius = 120;
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;

    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  // Collision/conflict markers for fragmented state
  const conflicts = [
    { x: 200, y: 150, size: 40 },
    { x: 350, y: 250, size: 35 },
    { x: 400, y: 150, size: 30 },
  ];

  return (
    <svg
      viewBox='0 0 600 400'
      className='w-full h-full'
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <defs>
        {/* Gradient definitions */}
        <linearGradient id='gts-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#14b8a6' />
          <stop offset='100%' stopColor='#0d9488' />
        </linearGradient>

        {/* Glow filters */}
        <filter id='glow'>
          <feGaussianBlur stdDeviation='4' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>

        <filter id='conflict-glow'>
          <feGaussianBlur stdDeviation='8' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>

        {/* Radial gradient for GTS center */}
        <radialGradient id='gts-radial'>
          <stop offset='0%' stopColor='#14b8a6' stopOpacity='0.8' />
          <stop offset='50%' stopColor='#0d9488' stopOpacity='0.6' />
          <stop offset='100%' stopColor='#0d9488' stopOpacity='0' />
        </radialGradient>

        {/* Animated dash pattern for connections */}
        <pattern
          id='dash-pattern'
          patternUnits='userSpaceOnUse'
          width='10'
          height='1'
        >
          <line x1='0' y1='0' x2='5' y2='0' stroke='#14b8a6' strokeWidth='1' />
        </pattern>
      </defs>

      {/* Background grid */}
      <g opacity='0.1'>
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 50}
            y1='0'
            x2={i * 50}
            y2='400'
            stroke='#94a3b8'
            strokeWidth='1'
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1='0'
            y1={i * 50}
            x2='600'
            y2={i * 50}
            stroke='#94a3b8'
            strokeWidth='1'
          />
        ))}
      </g>

      {/* Conflict markers (only in fragmented state) */}
      {!animationState &&
        conflicts.map((conflict, i) => (
          <g key={`conflict-${i}`}>
            <circle
              cx={conflict.x}
              cy={conflict.y}
              r={conflict.size}
              fill='#ef4444'
              opacity='0.15'
              filter='url(#conflict-glow)'
            >
              <animate
                attributeName='r'
                values={`${conflict.size};${conflict.size + 10};${
                  conflict.size
                }`}
                dur='2s'
                repeatCount='indefinite'
              />
              <animate
                attributeName='opacity'
                values='0.15;0.25;0.15'
                dur='2s'
                repeatCount='indefinite'
              />
            </circle>
            <text
              x={conflict.x}
              y={conflict.y + 5}
              textAnchor='middle'
              fontSize='24'
              fill='#ef4444'
              opacity='0.6'
            >
              ⚠
            </text>
          </g>
        ))}

      {/* GTS Central Hub (only in unified state) */}
      {animationState && (
        <g>
          {/* Pulsing glow background */}
          <circle
            cx='300'
            cy='200'
            r='80'
            fill='url(#gts-radial)'
            opacity='0.4'
          >
            <animate
              attributeName='r'
              values='70;90;70'
              dur='3s'
              repeatCount='indefinite'
            />
            <animate
              attributeName='opacity'
              values='0.3;0.5;0.3'
              dur='3s'
              repeatCount='indefinite'
            />
          </circle>

          {/* Main hub circle */}
          <circle
            cx='300'
            cy='200'
            r='50'
            fill='url(#gts-gradient)'
            filter='url(#glow)'
            stroke='#0d9488'
            strokeWidth='3'
          />

          {/* Hub label */}
          <text
            x='300'
            y='200'
            textAnchor='middle'
            dominantBaseline='central'
            fontSize='24'
            fontWeight='bold'
            fill='white'
          >
            GTS
          </text>
          <text
            x='300'
            y='220'
            textAnchor='middle'
            fontSize='10'
            fill='white'
            opacity='0.8'
          >
            Universal
          </text>
        </g>
      )}

      {/* Connection lines from GTS hub to blocks (only in unified state) */}
      {animationState &&
        blocks.map((block, index) => {
          const pos = getUnifiedPosition(index, blocks.length);
          return (
            <g key={`connection-${block.id}`}>
              <line
                x1='300'
                y1='200'
                x2={pos.x}
                y2={pos.y}
                stroke='#14b8a6'
                strokeWidth='2'
                opacity='0.6'
                strokeDasharray='5,5'
              >
                <animate
                  attributeName='stroke-dashoffset'
                  from='0'
                  to='10'
                  dur='1s'
                  repeatCount='indefinite'
                />
              </line>
              {/* Data flow particles */}
              <circle r='3' fill='#14b8a6'>
                <animateMotion
                  dur='2s'
                  repeatCount='indefinite'
                  path={`M 300 200 L ${pos.x} ${pos.y}`}
                />
              </circle>
            </g>
          );
        })}

      {/* Language blocks */}
      {blocks.map((block, index) => {
        const pos = animationState
          ? getUnifiedPosition(index, blocks.length)
          : block;
        const scale = animationState ? 0.8 : 1;

        return (
          <g
            key={block.id}
            style={{
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
              transformOrigin: 'center',
            }}
          >
            {/* Block shadow */}
            <rect
              x='-50'
              y='-20'
              width='100'
              height='40'
              rx='8'
              fill='black'
              opacity='0.1'
              transform='translate(2, 2)'
            />

            {/* Main block */}
            <rect
              x='-50'
              y='-20'
              width='100'
              height='40'
              rx='8'
              fill={block.color}
              stroke={animationState ? '#14b8a6' : '#1e293b'}
              strokeWidth={animationState ? '2' : '1'}
              filter={animationState ? 'url(#glow)' : undefined}
            >
              {!animationState && (
                <>
                  <animate
                    attributeName='y'
                    values='-20;-22;-20'
                    dur={`${2 + index * 0.3}s`}
                    repeatCount='indefinite'
                  />
                  <animate
                    attributeName='x'
                    values='-50;-52;-48;-50'
                    dur={`${3 + index * 0.2}s`}
                    repeatCount='indefinite'
                  />
                </>
              )}
            </rect>

            {/* Label */}
            <text
              textAnchor='middle'
              dominantBaseline='central'
              fontSize='11'
              fontWeight='600'
              fill='white'
            >
              {block.label}
            </text>

            {/* Status indicator */}
            <circle
              cx='42'
              cy='-12'
              r='4'
              fill={animationState ? '#10b981' : '#ef4444'}
            >
              {!animationState && (
                <animate
                  attributeName='opacity'
                  values='1;0.4;1'
                  dur='1s'
                  repeatCount='indefinite'
                />
              )}
            </circle>
          </g>
        );
      })}

      {/* Arrows showing incompatibility (only in fragmented state) */}
      {!animationState && (
        <g opacity='0.5'>
          <defs>
            <marker
              id='arrowhead-red'
              markerWidth='10'
              markerHeight='10'
              refX='9'
              refY='3'
              orient='auto'
            >
              <polygon points='0 0, 10 3, 0 6' fill='#ef4444' />
            </marker>
          </defs>
          <path
            d='M 150 100 Q 200 120 250 180'
            stroke='#ef4444'
            strokeWidth='2'
            fill='none'
            markerEnd='url(#arrowhead-red)'
            strokeDasharray='4,4'
          >
            <animate
              attributeName='stroke-dashoffset'
              from='0'
              to='8'
              dur='0.5s'
              repeatCount='indefinite'
            />
          </path>
          <path
            d='M 450 80 Q 380 140 320 180'
            stroke='#ef4444'
            strokeWidth='2'
            fill='none'
            markerEnd='url(#arrowhead-red)'
            strokeDasharray='4,4'
          >
            <animate
              attributeName='stroke-dashoffset'
              from='0'
              to='8'
              dur='0.5s'
              repeatCount='indefinite'
            />
          </path>
        </g>
      )}

      {/* Status label */}
      <g transform='translate(300, 370)'>
        <rect
          x='-120'
          y='-15'
          width='240'
          height='30'
          rx='15'
          fill={animationState ? '#065f46' : '#7f1d1d'}
          opacity='0.9'
        />
        <text
          textAnchor='middle'
          dominantBaseline='central'
          fontSize='12'
          fontWeight='600'
          fill='white'
        >
          {animationState
            ? '✓ Unified & Interoperable'
            : '⚠ Fragmented & Incompatible'}
        </text>
      </g>
    </svg>
  );
};
