import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { DOCS_CONTENT } from '../data/docs';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const DocPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pageId = id || 'introduction';
  const data = DOCS_CONTENT[pageId];

  if (!data) {
    return <Navigate to='/docs/introduction' replace />;
  }

  return (
    <div className='max-w-4xl mx-auto pb-20'>
      <div className='mb-8 border-b border-slate-200 dark:border-slate-800 pb-6'>
        <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white lg:text-4xl mb-2'>
          {data.title}
        </h1>
        <p className='text-lg text-slate-500 dark:text-slate-400'>
          {data.description}
        </p>
      </div>

      <div className='prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-m-20 prose-headings:font-semibold prose-code:text-brand-600 dark:prose-code:text-brand-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none'>
        {data.content}
      </div>

      <div className='mt-16 flex justify-between border-t border-slate-200 dark:border-slate-800 pt-6'>
        {data.prev ? (
          <Link
            to={data.prev.path}
            className='flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors'
          >
            <ChevronLeft size={16} />
            <div className='flex flex-col items-start'>
              <span className='text-xs text-slate-400 dark:text-slate-500'>
                Previous
              </span>
              <span>{data.prev.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {data.next ? (
          <Link
            to={data.next.path}
            className='flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-right'
          >
            <div className='flex flex-col items-end'>
              <span className='text-xs text-slate-400 dark:text-slate-500'>
                Next
              </span>
              <span>{data.next.title}</span>
            </div>
            <ChevronRight size={16} />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
