import React, { useState, useEffect } from 'react';
import { Check, X, AlertCircle, Copy, RotateCcw } from 'lucide-react';
import { validateGtsID, parseGtsID } from '@globaltypesystem/gts-ts';

interface SegmentInfo {
  segment: string;
  vendor: string;
  pkg: string;
  namespace: string;
  typeName: string;
  version: string;
  isType: boolean;
  isUuidTail: boolean;
}

interface ValidationResult {
  isValid: boolean;
  message: string;
  segmentInfos?: SegmentInfo[];
  kind?: 'base-type' | 'derived-type' | 'instance' | 'wildcard';
  typeRef?: string;
}

export const GTSValidator: React.FC = () => {
  const [input, setInput] = useState('gts.x.core.events.type.v1~');
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [copied, setCopied] = useState(false);

  const examples = [
    { label: 'Type', value: 'gts.x.core.events.type.v1~' },
    {
      label: 'Derived Type',
      value: 'gts.x.core.events.type.v1~ven.app._.custom_event.v1~',
    },
    {
      label: 'Well-known Instance',
      value: 'gts.x.core.events.topic.v1~x.commerce._.orders.v1.0',
    },
    {
      label: 'Anonymous Instance',
      value: 'gts.x.core.events.type.v1~123e4567-e89b-12d3-a456-426614174000',
    },
  ];

  // Validation is delegated to the official @globaltypesystem/gts-ts library
  // (OP#1 - ID Validation, OP#3 - ID Parsing) so behaviour always tracks the spec.
  const validateGTS = (value: string): ValidationResult => {
    if (!value.trim()) {
      return { isValid: false, message: 'Please enter a GTS identifier' };
    }

    const trimmed = value.trim();
    const validation = validateGtsID(trimmed);

    if (!validation.ok) {
      return {
        isValid: false,
        message: validation.error || 'Invalid GTS identifier',
      };
    }

    if (validation.is_wildcard) {
      return {
        isValid: true,
        message: 'Valid GTS wildcard pattern',
        segmentInfos: [
          {
            segment: trimmed,
            vendor: '',
            pkg: '',
            namespace: '',
            typeName: '',
            version: '',
            isType: false,
            isUuidTail: false,
          },
        ],
        kind: 'wildcard',
      };
    }

    const parsed = parseGtsID(trimmed);
    if (!parsed.ok) {
      return {
        isValid: false,
        message: parsed.error || 'Failed to parse GTS identifier',
      };
    }

    const segmentInfos: SegmentInfo[] = parsed.segments.map((s) => ({
      segment: s.segment,
      vendor: s.vendor,
      pkg: s.package,
      namespace: s.namespace,
      typeName: s.type,
      version:
        s.verMinor != null ? `v${s.verMajor}.${s.verMinor}` : `v${s.verMajor}`,
      isType: s.isType,
      isUuidTail: s.isUuidTail,
    }));

    const isType = parsed.is_type_schema ?? trimmed.endsWith('~');

    let kind: ValidationResult['kind'];
    let message: string;
    let typeRef: string | undefined;

    if (isType) {
      if (segmentInfos.length === 1) {
        kind = 'base-type';
        message = 'Valid GTS Base Type identifier';
      } else {
        kind = 'derived-type';
        const baseParts = segmentInfos
          .slice(0, -1)
          .map((s) => s.segment)
          .join('');
        typeRef = baseParts;
        message = 'Valid GTS Derived Type identifier';
      }
    } else {
      kind = 'instance';
      const typeParts = segmentInfos
        .filter((s) => s.isType)
        .map((s) => s.segment)
        .join('');
      typeRef = typeParts ? `gts.${typeParts}` : undefined;
      message = 'Valid GTS Instance identifier';
    }

    return { isValid: true, message, segmentInfos, kind, typeRef };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(validateGTS(input));
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setInput('gts.x.core.events.type.v1~');
  };

  return (
    <div className='w-full max-w-6xl mx-auto'>
      <div className='bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800'>
        {/* Editor Header */}
        <div className='flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700'>
          <div className='flex items-center gap-2'>
            <div className='flex gap-1.5'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
            <span className='ml-3 text-sm text-slate-400 font-mono'>
              gts-validator.ts
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <button
              onClick={handleReset}
              className='p-1.5 hover:bg-slate-700 rounded text-slate-400 hover:text-slate-200 transition-colors'
              title='Reset'
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={handleCopy}
              className='p-1.5 hover:bg-slate-700 rounded text-slate-400 hover:text-slate-200 transition-colors'
              title='Copy'
            >
              <Copy size={16} />
            </button>
          </div>
        </div>

        {/* Examples Bar */}
        <div className='px-4 py-2 bg-slate-800/50 border-b border-slate-700 flex flex-wrap gap-2'>
          <span className='text-xs text-slate-400 mr-2 self-center'>
            Examples:
          </span>
          {examples.map((example, idx) => (
            <button
              key={idx}
              onClick={() => setInput(example.value)}
              className='px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 rounded transition-colors'
            >
              {example.label}
            </button>
          ))}
        </div>

        {/* Editor Area */}
        <div className='relative'>
          <div className='absolute left-0 top-0 bottom-0 w-12 bg-slate-800 flex flex-col items-center pt-4 border-r border-slate-700'>
            <span className='text-xs text-slate-500 font-mono'>1</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='w-full h-12 bg-slate-900 text-slate-100 font-mono text-sm pl-16 pr-4 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-brand-500/50'
            placeholder='Enter a GTS identifier...'
            spellCheck={false}
          />
        </div>

        {/* Validation Result */}
        {result && (
          <div
            className={`px-4 py-3 border-t border-slate-700 transition-all duration-300 ${
              result.isValid
                ? 'bg-emerald-950/30 border-t-emerald-500/30'
                : 'bg-red-950/30 border-t-red-500/30'
            }`}
          >
            <div className='flex items-start gap-2'>
              {result.isValid ? (
                <Check
                  size={18}
                  className='text-emerald-400 mt-0.5 flex-shrink-0'
                />
              ) : (
                <X size={18} className='text-red-400 mt-0.5 flex-shrink-0' />
              )}
              <div className='flex-1'>
                {/* Summary line */}
                <p
                  className={`text-sm font-medium ${result.isValid ? 'text-emerald-300' : 'text-red-300'}`}
                >
                  {!result.isValid && result.message}
                  {result.isValid &&
                    result.kind === 'wildcard' &&
                    result.message}
                  {result.isValid && result.kind === 'base-type' && (
                    <>
                      Valid GTS{' '}
                      <span className='text-purple-300 font-semibold'>
                        Base Type
                      </span>{' '}
                      identifier
                    </>
                  )}
                  {result.isValid && result.kind === 'derived-type' && (
                    <>
                      Valid GTS{' '}
                      <span className='text-purple-300 font-semibold'>
                        Derived Type
                      </span>{' '}
                      identifier, derived from{' '}
                      <code className='px-1.5 py-0.5 bg-slate-800 text-brand-400 rounded font-mono text-xs'>
                        gts.{result.typeRef}
                      </code>
                    </>
                  )}
                  {result.isValid && result.kind === 'instance' && (
                    <>
                      Valid GTS{' '}
                      <span className='text-blue-300 font-semibold'>
                        Instance
                      </span>{' '}
                      identifier
                      {result.typeRef && (
                        <>
                          . The instance schema is{' '}
                          <code className='px-1.5 py-0.5 bg-slate-800 text-brand-400 rounded font-mono text-xs'>
                            {result.typeRef}
                          </code>
                        </>
                      )}
                    </>
                  )}
                </p>

                {/* Segment details */}
                {result.isValid &&
                  result.segmentInfos &&
                  result.kind !== 'wildcard' && (
                    <div className='mt-3 space-y-3'>
                      {result.segmentInfos.map((seg, idx) => {
                        const total = result.segmentInfos!.length;
                        const isFirst = idx === 0;
                        const isLast = idx === total - 1;
                        let segLabel: string;
                        if (total === 1) {
                          segLabel = seg.isType
                            ? 'Base type'
                            : seg.isUuidTail
                              ? 'Instance ID'
                              : 'Instance';
                        } else if (isFirst) {
                          segLabel = 'Base type';
                        } else if (isLast) {
                          segLabel = seg.isType
                            ? 'Final type'
                            : seg.isUuidTail
                              ? 'Instance ID'
                              : 'Final instance';
                        } else {
                          segLabel = 'Derived type';
                        }
                        return (
                          <div
                            key={idx}
                            className='rounded-lg bg-slate-800/60 border border-slate-700/50 p-3'
                          >
                            <div className='flex items-center gap-2 mb-2'>
                              <span className='text-xs font-semibold text-slate-400'>
                                {segLabel}
                              </span>
                              <code className='px-1.5 py-0.5 bg-slate-900 text-brand-400 rounded font-mono text-xs'>
                                {seg.segment}
                              </code>
                              {seg.isType && (
                                <span className='px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-900/40 text-purple-300'>
                                  Type
                                </span>
                              )}
                              {seg.isUuidTail && (
                                <span className='px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-900/40 text-amber-300'>
                                  UUID
                                </span>
                              )}
                              {!seg.isType && !seg.isUuidTail && (
                                <span className='px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-900/40 text-blue-300'>
                                  Instance
                                </span>
                              )}
                            </div>
                            {!seg.isUuidTail && seg.vendor && (
                              <div className='grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1 text-xs'>
                                <div>
                                  <span className='text-slate-500'>vendor</span>{' '}
                                  <span className='text-slate-300 font-mono'>
                                    {seg.vendor}
                                  </span>
                                </div>
                                <div>
                                  <span className='text-slate-500'>
                                    package
                                  </span>{' '}
                                  <span className='text-slate-300 font-mono'>
                                    {seg.pkg}
                                  </span>
                                </div>
                                <div>
                                  <span className='text-slate-500'>
                                    namespace
                                  </span>{' '}
                                  <span className='text-slate-300 font-mono'>
                                    {seg.namespace}
                                  </span>
                                </div>
                                <div>
                                  <span className='text-slate-500'>type</span>{' '}
                                  <span className='text-slate-300 font-mono'>
                                    {seg.typeName}
                                  </span>
                                  <span className='text-slate-500 ml-1'>
                                    {seg.version}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}

        {/* Info Footer */}
        <div className='px-4 py-2 bg-slate-800/30 border-t border-slate-700 text-xs text-slate-500 space-y-2'>
          <div className='flex items-center gap-2'>
            <AlertCircle size={14} />
            <span>
              Real-time validation powered by the official{' '}
              <code className='text-slate-400'>@globaltypesystem/gts-ts</code>{' '}
              library
            </span>
          </div>
        </div>
      </div>

      {copied && (
        <div className='fixed bottom-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg border border-slate-700 animate-fadeIn'>
          <div className='flex items-center gap-2'>
            <Check size={16} className='text-emerald-400' />
            <span className='text-sm'>Copied to clipboard!</span>
          </div>
        </div>
      )}
    </div>
  );
};
