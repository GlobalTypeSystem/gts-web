import React, { useState, useEffect } from 'react';
import { Check, X, AlertCircle, Copy, RotateCcw } from 'lucide-react';

interface ValidationResult {
  isValid: boolean;
  message: string;
  segments?: string[];
  type?: 'schema' | 'instance';
}

export const GTSValidator: React.FC = () => {
  const [input, setInput] = useState('gts.x.core.events.type.v1~');
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [copied, setCopied] = useState(false);

  const examples = [
    { label: 'Simple Schema', value: 'gts.x.core.events.type.v1~' },
    { label: 'Instance', value: 'gts.vendor.app.user.profile.v2.1' },
    {
      label: 'Chained',
      value: 'gts.x.core.events.type.v1~vendor.app._.custom.v1~',
    },
    {
      label: 'Complex Chain',
      value: 'gts.x.core.acm.user.v1~ven.app._.admin.v1.2',
    },
  ];

  // GTS Validation Regexes from the spec
  const SINGLE_SEGMENT_REGEX =
    /^gts\.([a-z_][a-z0-9_]*)\.([a-z_][a-z0-9_]*)\.([a-z_][a-z0-9_]*)\.([a-z_][a-z0-9_]*)\.v(0|[1-9]\d*)(?:\.(0|[1-9]\d*))?~?$/;
  const CHAINED_REGEX =
    /^\s*gts\.[a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*\.v(0|[1-9]\d*)(?:\.(0|[1-9]\d*))?(?:~[a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*\.v(0|[1-9]\d*)(?:\.(0|[1-9]\d*))?)*~?\s*$/;

  const validateGTS = (value: string): ValidationResult => {
    if (!value.trim()) {
      return { isValid: false, message: 'Please enter a GTS identifier' };
    }

    const trimmed = value.trim();

    // Check if it's a chained identifier
    const isChained =
      trimmed.includes('~') && trimmed.split('~').filter((s) => s).length > 1;

    if (isChained) {
      if (CHAINED_REGEX.test(trimmed)) {
        const segments = trimmed.split('~').filter((s) => s);
        const endsWithTilde = trimmed.endsWith('~');

        return {
          isValid: true,
          message: `Valid chained GTS identifier with ${segments.length} segment(s)`,
          segments,
          type: endsWithTilde ? 'schema' : 'instance',
        };
      } else {
        return {
          isValid: false,
          message:
            'Invalid chained identifier. All segments except the last must be type IDs (ending with ~)',
        };
      }
    } else {
      if (SINGLE_SEGMENT_REGEX.test(trimmed)) {
        const endsWithTilde = trimmed.endsWith('~');
        return {
          isValid: true,
          message: `Valid GTS ${endsWithTilde ? 'schema (type)' : 'instance'} identifier`,
          segments: [trimmed.replace(/~$/, '')],
          type: endsWithTilde ? 'schema' : 'instance',
        };
      } else {
        return {
          isValid: false,
          message:
            'Invalid format. Expected: gts.<vendor>.<package>.<namespace>.<type>.v<MAJOR>[.<MINOR>][~]',
        };
      }
    }
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
    <div className='w-full max-w-4xl mx-auto'>
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
            className='w-full h-32 bg-slate-900 text-slate-100 font-mono text-sm pl-16 pr-4 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-brand-500/50'
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
                <p
                  className={`text-sm font-medium ${result.isValid ? 'text-emerald-300' : 'text-red-300'}`}
                >
                  {result.message}
                </p>
                {result.isValid && result.segments && (
                  <div className='mt-3 space-y-2'>
                    <div className='text-xs text-slate-400'>
                      Parsed Segments:
                    </div>
                    {result.segments.map((segment, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs'
                      >
                        <span className='text-slate-500'>
                          Segment {idx + 1}:
                        </span>
                        <code className='px-2 py-1 bg-slate-800 text-brand-400 rounded font-mono'>
                          {segment}
                        </code>
                      </div>
                    ))}
                    {result.type && (
                      <div className='flex items-center gap-2 text-xs mt-2'>
                        <span className='text-slate-500'>Type:</span>
                        <span
                          className={`px-2 py-1 rounded font-medium ${
                            result.type === 'schema'
                              ? 'bg-purple-900/40 text-purple-300'
                              : 'bg-blue-900/40 text-blue-300'
                          }`}
                        >
                          {result.type === 'schema'
                            ? 'Schema (Type)'
                            : 'Instance (Object)'}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Info Footer */}
        <div className='px-4 py-2 bg-slate-800/30 border-t border-slate-700 flex items-center gap-2 text-xs text-slate-500'>
          <AlertCircle size={14} />
          <span>Real-time validation using official GTS regex patterns</span>
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
