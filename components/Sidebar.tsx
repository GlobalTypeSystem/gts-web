import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SIDEBAR_NAVIGATION } from '../data/docs';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside
        className={`
        fixed top-0 left-0 bottom-0 z-50 w-72 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800
        transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}
      >
        <div className='h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 lg:hidden'>
          <span className='font-bold text-lg'>Navigation</span>
          <button
            onClick={onClose}
            className='p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md'
          >
            <X size={20} />
          </button>
        </div>

        <div className='flex-1 overflow-y-auto py-6 px-4'>
          {SIDEBAR_NAVIGATION.map((section) => (
            <div key={section.title} className='mb-8'>
              <h5 className='mb-3 px-2 text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider'>
                {section.title}
              </h5>
              <ul className='space-y-1'>
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className={`
                          block px-2 py-1.5 text-sm rounded-md transition-colors
                          ${
                            isActive
                              ? 'bg-brand-50 text-brand-600 dark:bg-brand-950/30 dark:text-brand-400 font-medium'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-900'
                          }
                        `}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};
