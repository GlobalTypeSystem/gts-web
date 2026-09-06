import React from 'react';
import { FragmentationSVG } from './FragmentationSVG';

export const FragmentationDemo: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md p-4 md:p-8'>
        <FragmentationSVG />
      </div>
    </div>
  );
};
