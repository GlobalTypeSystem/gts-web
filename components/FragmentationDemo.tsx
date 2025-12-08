import React, { useState } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { FragmentationSVG } from './FragmentationSVG';

export const FragmentationDemo: React.FC = () => {
  const [isUnified, setIsUnified] = useState(false);

  return (
    <div className='w-full max-w-2xl mx-auto'>
      <div className='relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-12'>
        <FragmentationSVG isUnified={isUnified} />
      </div>

      {/* Control button */}
      <div className='mt-6 text-center'>
        <button
          onClick={() => setIsUnified(!isUnified)}
          className={`group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium
            transition-all duration-300 shadow-lg
            ${
              isUnified
                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                : 'bg-brand-600 hover:bg-brand-700 text-white hover:scale-105 animate-glow'
            }`}
        >
          <Zap size={18} className={isUnified ? '' : 'animate-pulse'} />
          {isUnified ? 'Show Fragmentation' : 'Unify with GTS'}
          <ArrowRight
            size={18}
            className='group-hover:translate-x-1 transition-transform'
          />
        </button>
      </div>
    </div>
  );
};
