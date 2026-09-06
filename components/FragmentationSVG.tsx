import React from 'react';

interface Block {
  id: string;
  label: string;
  gradientId: string;
  x: number;
  y: number;
}

// 10 blocks placed on an oval around center (500, 200).
// Horizontal radius is 50% wider than vertical for an oval shape.
// Angles spaced evenly at 36 deg starting from -90 (top).
const cx = 500;
const cy = 200;
const rx = 280; // horizontal radius (wider)
const ry = 165; // vertical radius
const angleOf = (i: number) => (-90 + i * 36) * (Math.PI / 180);
const px = (i: number) => Math.round(cx + rx * Math.cos(angleOf(i)));
const py = (i: number) => Math.round(cy + ry * Math.sin(angleOf(i)));

// Color palette for block gradients - vibrant colors that work in both light and dark modes
const blockGradients = [
  { id: 'block-grad-0', from: '#3b82f6', to: '#1d4ed8' }, // Blue
  { id: 'block-grad-1', from: '#8b5cf6', to: '#6d28d9' }, // Purple
  { id: 'block-grad-2', from: '#ec4899', to: '#be185d' }, // Pink
  { id: 'block-grad-3', from: '#f97316', to: '#c2410c' }, // Orange
  { id: 'block-grad-4', from: '#eab308', to: '#a16207' }, // Yellow
  { id: 'block-grad-5', from: '#22c55e', to: '#15803d' }, // Green
  { id: 'block-grad-6', from: '#06b6d4', to: '#0e7490' }, // Cyan
  { id: 'block-grad-7', from: '#6366f1', to: '#4338ca' }, // Indigo
  { id: 'block-grad-8', from: '#a855f7', to: '#7e22ce' }, // Violet
  { id: 'block-grad-9', from: '#14b8a6', to: '#0f766e' }, // Teal
];

export const FragmentationSVG: React.FC = () => {
  const blocks: Block[] = [
    {
      id: 'api-data-types',
      label: 'API Data Types',
      gradientId: 'block-grad-0',
      x: px(0),
      y: py(0),
    },
    {
      id: 'rpc-contracts',
      label: 'RPC Contracts',
      gradientId: 'block-grad-1',
      x: px(1),
      y: py(1),
    },
    {
      id: 'event-schemas',
      label: 'Event Schemas',
      gradientId: 'block-grad-2',
      x: px(2),
      y: py(2),
    },
    {
      id: 'custom-objects',
      label: 'Custom Objects',
      gradientId: 'block-grad-3',
      x: px(3),
      y: py(3),
    },
    {
      id: 'db-schemas',
      label: 'DB Schemas',
      gradientId: 'block-grad-4',
      x: px(4),
      y: py(4),
    },
    {
      id: 'workflows',
      label: 'Workflows Definitions',
      gradientId: 'block-grad-5',
      x: px(5),
      y: py(5),
    },
    {
      id: 'ui-widget',
      label: 'UI Widget',
      gradientId: 'block-grad-6',
      x: px(6),
      y: py(6),
    },
    {
      id: 'components',
      label: 'Components Metadata',
      gradientId: 'block-grad-7',
      x: px(7),
      y: py(7),
    },
    {
      id: 'ml-ai',
      label: 'ML/AI Artifacts',
      gradientId: 'block-grad-8',
      x: px(8),
      y: py(8),
    },
    {
      id: 'policy-settings',
      label: 'Policy Settings',
      gradientId: 'block-grad-9',
      x: px(9),
      y: py(9),
    },
  ];

  return (
    <svg
      viewBox='0 0 1000 400'
      className='w-full h-full'
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <defs>
        {/* Block gradients */}
        {blockGradients.map((grad) => (
          <linearGradient
            key={grad.id}
            id={grad.id}
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop offset='0%' stopColor={grad.from} />
            <stop offset='100%' stopColor={grad.to} />
          </linearGradient>
        ))}

        {/* GTS center gradient */}
        <linearGradient id='gts-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#14b8a6' />
          <stop offset='100%' stopColor='#0d9488' />
        </linearGradient>

        <radialGradient id='gts-radial'>
          <stop offset='0%' stopColor='#14b8a6' stopOpacity='0.6' />
          <stop offset='50%' stopColor='#0d9488' stopOpacity='0.35' />
          <stop offset='100%' stopColor='#0d9488' stopOpacity='0' />
        </radialGradient>

        {/* Glow filter for GTS hub */}
        <filter id='glow'>
          <feGaussianBlur stdDeviation='3' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>

        {/* Subtle shadow for blocks */}
        <filter id='block-shadow' x='-20%' y='-20%' width='140%' height='140%'>
          <feDropShadow
            dx='0'
            dy='2'
            stdDeviation='3'
            floodColor='#000'
            floodOpacity='0.15'
          />
        </filter>

        {/* Arrow marker for connecting lines */}
        <marker
          id='arrow-marker'
          markerWidth='8'
          markerHeight='8'
          refX='7'
          refY='4'
          orient='auto'
          markerUnits='userSpaceOnUse'
        >
          <path d='M0,1 L7,4 L0,7 Z' fill='#64748b' opacity='0.5' />
        </marker>
      </defs>

      {/* Connecting lines from GTS center to each block */}
      {blocks.map((block, index) => {
        const grad = blockGradients[index];
        return (
          <line
            key={`line-${block.id}`}
            x1={cx}
            y1={cy}
            x2={block.x}
            y2={block.y}
            stroke={grad.from}
            strokeWidth='1.5'
            opacity='0.4'
            strokeDasharray='6,4'
            markerEnd='url(#arrow-marker)'
          />
        );
      })}

      {/* System blocks */}
      {blocks.map((block) => (
        <g
          key={block.id}
          style={{
            transform: `translate(${block.x}px, ${block.y}px)`,
            transformOrigin: 'center',
          }}
        >
          <rect
            x='-72'
            y='-18'
            width='144'
            height='36'
            rx='8'
            fill={`url(#${block.gradientId})`}
            filter='url(#block-shadow)'
          />
          <text
            textAnchor='middle'
            dominantBaseline='central'
            fontSize='10'
            fontWeight='600'
            fill='white'
          >
            {block.label}
          </text>
        </g>
      ))}

      {/* GTS hub */}
      <g>
        <circle cx={cx} cy={cy} r='72' fill='url(#gts-radial)' opacity='0.35' />
        <circle
          cx={cx}
          cy={cy}
          r='48'
          fill='url(#gts-gradient)'
          filter='url(#glow)'
          stroke='#0d9488'
          strokeWidth='2'
        />
        <foreignObject x={cx - 42} y={cy - 22} width='84' height='44'>
          <div className='flex h-full w-full items-center justify-center'>
            <img src='/gts_white.png' alt='GTS' className='block h-auto w-14' />
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};
