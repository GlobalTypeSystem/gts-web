import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  title,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1120] shadow-sm group'>
      {title && (
        <div className='flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50'>
          <span className='text-xs font-medium text-slate-500 dark:text-slate-400 font-mono'>
            {title}
          </span>
        </div>
      )}
      <div className='relative'>
        <button
          onClick={handleCopy}
          className='absolute right-2 top-2 p-2 rounded-md bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100'
          aria-label='Copy code'
        >
          {copied ? (
            <Check size={16} className='text-emerald-500' />
          ) : (
            <Copy size={16} />
          )}
        </button>
        <div className='overflow-x-auto p-4 text-sm leading-relaxed font-mono'>
          <pre>
            <code
              className={`language-${language} text-slate-800 dark:text-slate-200`}
            >
              {code.trim()}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
