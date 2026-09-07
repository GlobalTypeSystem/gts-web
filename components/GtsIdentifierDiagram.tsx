import React, {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

interface Point {
  x: number;
  y: number;
}

interface ArrowGeometry {
  id: string;
  path: string;
  label: string;
  labelX: number;
  labelY: number;
  color: string;
  markerId: 'instance' | 'type';
}

const INSTANCE = '#10b981';
const TYPE = '#2563eb';
const BASE_TYPE = '#60a5fa';

/** Lightweight JSON syntax highlighter -- returns colored <span> elements. */
const JsonSyntax: React.FC<{ children: string }> = ({ children }) => {
  const tokens: { type: string; value: string }[] = [];
  const src = children;
  let i = 0;

  while (i < src.length) {
    const ch = src[i];

    // whitespace / newlines
    if (/\s/.test(ch)) {
      let j = i;
      while (j < src.length && /\s/.test(src[j])) j++;
      tokens.push({ type: 'ws', value: src.slice(i, j) });
      i = j;
      continue;
    }
    // strings (keys or values)
    if (ch === '"') {
      let j = i + 1;
      while (j < src.length && src[j] !== '"') {
        if (src[j] === '\\') j++;
        j++;
      }
      j++; // closing quote
      const str = src.slice(i, j);
      // peek ahead past whitespace to see if followed by ':'
      let k = j;
      while (k < src.length && /\s/.test(src[k])) k++;
      const isKey = src[k] === ':';
      tokens.push({ type: isKey ? 'key' : 'string', value: str });
      i = j;
      continue;
    }
    // numbers
    if (
      /[\d.]/.test(ch) ||
      (ch === '-' && i + 1 < src.length && /\d/.test(src[i + 1]))
    ) {
      let j = i;
      while (j < src.length && /[\d.eE+\-]/.test(src[j])) j++;
      tokens.push({ type: 'number', value: src.slice(i, j) });
      i = j;
      continue;
    }
    // booleans / null
    for (const kw of ['true', 'false', 'null']) {
      if (
        src.startsWith(kw, i) &&
        (i + kw.length >= src.length || /[\s,}\]]/.test(src[i + kw.length]))
      ) {
        tokens.push({ type: 'keyword', value: kw });
        i += kw.length;
        break;
      }
    }
    if (tokens.length > 0 && tokens[tokens.length - 1].type === 'keyword')
      continue;
    // punctuation
    if ('{}[],:'.includes(ch)) {
      tokens.push({ type: 'punct', value: ch });
      i++;
      continue;
    }
    // fallback
    tokens.push({ type: 'other', value: ch });
    i++;
  }

  return (
    <>
      {tokens.map((t, idx) => {
        switch (t.type) {
          case 'key':
            return (
              <span key={idx} className='text-purple-300'>
                {t.value}
              </span>
            );
          case 'string':
            return (
              <span key={idx} className='text-emerald-300'>
                {t.value}
              </span>
            );
          case 'number':
            return (
              <span key={idx} className='text-amber-300'>
                {t.value}
              </span>
            );
          case 'keyword':
            return (
              <span key={idx} className='text-blue-300'>
                {t.value}
              </span>
            );
          case 'punct':
            return (
              <span key={idx} className='text-slate-500'>
                {t.value}
              </span>
            );
          default:
            return <span key={idx}>{t.value}</span>;
        }
      })}
    </>
  );
};

const GtsIdBox = forwardRef<
  HTMLSpanElement,
  { children: React.ReactNode; tone?: 'instance' | 'type' | 'base' }
>(({ children, tone = 'type' }, ref) => {
  const toneClasses =
    tone === 'instance'
      ? 'border-emerald-500/70 text-emerald-300 bg-emerald-950/40'
      : tone === 'base'
        ? 'border-sky-500/70 text-blue-300 bg-sky-950/40'
        : 'border-sky-500/70 text-blue-300 bg-blue-950/40';
  return (
    <span
      ref={ref}
      className={`inline-block rounded-md border px-1.5 py-0.5 font-mono text-[11px] leading-relaxed break-all ${toneClasses}`}
    >
      {children}
    </span>
  );
});
GtsIdBox.displayName = 'GtsIdBox';

const CodeCard: React.FC<{
  title?: string;
  subtitle: string;
  accent?: 'instance' | 'type' | 'base';
  children: React.ReactNode;
}> = ({ title, subtitle, accent = 'type', children }) => {
  const accentClasses =
    accent === 'instance'
      ? 'text-emerald-400'
      : accent === 'base'
        ? 'text-sky-400'
        : 'text-blue-400';

  return (
    <div className='flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-sm'>
      <div className='border-b border-slate-700 bg-slate-800 px-4 py-3'>
        <p
          className={`text-xs font-semibold uppercase tracking-wide ${accentClasses}`}
        >
          {subtitle}
        </p>
        {title ? (
          <p className='text-[10px] font-normal text-slate-400'>{title}</p>
        ) : null}
      </div>
      <pre className='flex-1 overflow-x-auto px-4 py-3 font-mono text-[11px] leading-relaxed text-slate-300'>
        {children}
      </pre>
    </div>
  );
};

const INSTANCE_ID =
  'gts.x.core.events.type.v1~x.commerce.orders.order_placed.v1.0~';
const DERIVED_ID =
  'gts.x.core.events.type.v1~x.commerce.orders.order_placed.v1.0~';
const BASE_ID = 'gts.x.core.events.type.v1~';

export const GtsIdentifierDiagram: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceTypeRef = useRef<HTMLSpanElement>(null);
  const derivedIdRef = useRef<HTMLSpanElement>(null);
  const derivedRefRef = useRef<HTMLSpanElement>(null);
  const baseIdRef = useRef<HTMLSpanElement>(null);

  const [arrows, setArrows] = useState<ArrowGeometry[]>([]);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [isWide, setIsWide] = useState(false);

  const recompute = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const wide = window.matchMedia('(min-width: 768px)').matches;
    setIsWide(wide);

    const cRect = container.getBoundingClientRect();
    setSize({ w: cRect.width, h: cRect.height });

    if (!wide) {
      setArrows([]);
      return;
    }

    const topCenter = (el: HTMLElement | null): Point | null => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x: r.left - cRect.left + r.width / 2,
        y: r.top - cRect.top,
      };
    };

    const instanceType = topCenter(instanceTypeRef.current);
    const derivedId = topCenter(derivedIdRef.current);
    const derivedRef = topCenter(derivedRefRef.current);
    const baseId = topCenter(baseIdRef.current);

    const next: ArrowGeometry[] = [];

    const arch = (
      id: string,
      s: Point,
      t: Point,
      label: string,
      color: string,
      markerId: 'instance' | 'type',
      level: number
    ): ArrowGeometry => {
      const apexY = Math.min(s.y, t.y) - 84 - level * 34;
      return {
        id,
        path: `M ${s.x} ${s.y} C ${s.x} ${apexY}, ${t.x} ${apexY}, ${t.x} ${t.y}`,
        label,
        labelX: s.x + 12,
        labelY: s.y,
        color,
        markerId,
      };
    };

    if (instanceType && derivedId) {
      next.push(
        arch(
          'ref',
          instanceType,
          derivedId,
          'instance conforms to type',
          INSTANCE,
          'instance',
          0
        )
      );
    }
    if (derivedRef && baseId) {
      next.push(
        arch(
          'inherit',
          derivedRef,
          baseId,
          'derived type inherits base',
          TYPE,
          'type',
          1
        )
      );
    }

    setArrows(next);
  }, []);

  useLayoutEffect(() => {
    recompute();
    const raf = requestAnimationFrame(recompute);
    const t = setTimeout(recompute, 300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [recompute]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => recompute());
    ro.observe(container);
    window.addEventListener('resize', recompute);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => recompute()).catch(() => {});
    }
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', recompute);
    };
  }, [recompute]);

  return (
    <div ref={containerRef} className='relative pt-4 md:pt-8'>
      {isWide && arrows.length > 0 && (
        <>
          <svg
            className='pointer-events-none absolute inset-0 z-20 overflow-visible'
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
            fill='none'
            aria-hidden='true'
          >
            <defs>
              <marker
                id='gts-arrow-instance'
                markerWidth='9'
                markerHeight='9'
                refX='6'
                refY='3'
                orient='auto'
                markerUnits='userSpaceOnUse'
              >
                <path d='M0,0 L6,3 L0,6 Z' fill={INSTANCE} />
              </marker>
              <marker
                id='gts-arrow-type'
                markerWidth='9'
                markerHeight='9'
                refX='6'
                refY='3'
                orient='auto'
                markerUnits='userSpaceOnUse'
              >
                <path d='M0,0 L6,3 L0,6 Z' fill={TYPE} />
              </marker>
            </defs>
            {arrows.map((a) => (
              <g key={a.id}>
                <circle
                  cx={a.path.split(' ')[1]}
                  cy={a.path.split(' ')[2]}
                  r='3'
                  fill={a.color}
                />
                <path
                  d={a.path}
                  stroke={a.color}
                  strokeWidth='1.75'
                  strokeDasharray='5 4'
                  markerEnd={`url(#gts-arrow-${a.markerId})`}
                />
              </g>
            ))}
          </svg>
        </>
      )}

      <div className='grid gap-5 md:grid-cols-3'>
        <CodeCard
          subtitle='Event object instance'
          title="Event object instance conforms to it's type schema"
          accent='instance'
        >
          {`{
  "id": "d1f0…-uuid",
  "type": `}
          <GtsIdBox ref={instanceTypeRef} tone='instance'>
            {INSTANCE_ID}
          </GtsIdBox>
          {`,
  "tenantId": "9ab…-uuid",
  "occurredAt": "2026-01-02T10:00:00Z",
  "payload": {
    "orderId": "b72…-uuid",
    "totalAmount": 42.0
  }
}`}
        </CodeCard>

        <CodeCard
          subtitle='order_placed event type schema'
          title='The `order_placed` event schema is derived from base event'
          accent='type'
        >
          {`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://`}
          <GtsIdBox ref={derivedIdRef} tone='type'>
            {DERIVED_ID}
          </GtsIdBox>
          {`",
  "title": "Event: order.placed",
  "allOf": [
    { "$ref": "gts://`}
          <GtsIdBox ref={derivedRefRef} tone='base'>
            {BASE_ID}
          </GtsIdBox>
          {`" },
    { "properties": {
        "payload": {
          "type": "object",
          "properties": {
            "orderId": { "type": "string" },
            "totalAmount": { "type": "number" }
          },
          "required": ["orderId", "totalAmount"]
    } } }
  ],
  "x-gts-traits": {
    "retention": "P90D"
  }
}`}
        </CodeCard>

        <CodeCard
          subtitle='Base event object type'
          title='&nbsp;'
          accent='base'
        >
          {`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://`}
          <GtsIdBox ref={baseIdRef} tone='base'>
            {BASE_ID}
          </GtsIdBox>
          {`",
  "x-gts-abstract": true,
  "title": "Event Envelope",
  "type": "object",
  "x-gts-traits-schema": {
    "properties": {
      "retention": { "type": "string" }
    }
  },
  "required": [
    "id", "type",
    "tenantId", "occurredAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "type": { "x-gts-ref": "/$id" },
    "tenantId": { "type": "string" },
    "occurredAt": { "type": "string" },
    "payload": { "type": "object" }
  }
}`}
        </CodeCard>
      </div>

      <div className='mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400 md:hidden'>
        <span className='inline-flex items-center gap-2'>
          <span className='inline-block h-0.5 w-6 rounded bg-emerald-500' />
          instance conforms to type
        </span>
        <span className='inline-flex items-center gap-2'>
          <span className='inline-block h-0.5 w-6 rounded bg-blue-600' />
          derived type inherits base
        </span>
      </div>
    </div>
  );
};
