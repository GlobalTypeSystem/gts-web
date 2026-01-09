import React, { useEffect, useState, useCallback } from 'react';
import { Menu, Search, Moon, Sun, Github, Linkedin, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SearchModal } from './SearchModal';

interface HeaderProps {
  onMenuClick: () => void;
  showMenuButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  showMenuButton = true,
}) => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize state based on current DOM class to match HTML script
    return document.documentElement.classList.contains('dark');
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/' || location.pathname === '';

  // Sync state with DOM on mount (no DOM manipulation needed, just sync state)
  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains('dark');
    setIsDark(currentTheme);

    // Set localStorage if not set
    if (!localStorage.theme) {
      localStorage.theme = currentTheme ? 'dark' : 'light';
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleSearchKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setIsSearchOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleSearchKeyDown);
    return () => window.removeEventListener('keydown', handleSearchKeyDown);
  }, [handleSearchKeyDown]);

  return (
    <header className='sticky top-0 z-30 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='flex h-16 items-center px-4 md:px-8'>
        {showMenuButton && (
          <button
            className='lg:hidden mr-4 p-2 text-slate-500 hover:text-slate-700'
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </button>
        )}

        {/* Mobile Menu Button for Landing Page */}
        {isLanding && !showMenuButton && (
          <button
            className='lg:hidden mr-4 p-2 text-slate-500 hover:text-slate-700'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        <Link to='/' className='mr-6 flex items-center space-x-2'>
          <div className='h-8 w-auto flex items-center justify-center'>
            <img
              src='/gts_blue.png'
              alt='GTS'
              className='block dark:hidden h-8 w-auto'
            />
            <img
              src='/gts_white.png'
              alt='GTS'
              className='hidden dark:block h-8 w-auto'
            />
          </div>
        </Link>

        <div className='flex-1 flex items-center justify-end md:justify-between space-x-4'>
          <button
            onClick={() => setIsSearchOpen(true)}
            className='hidden md:flex w-full max-w-sm items-center space-x-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer transition-colors'
          >
            <Search size={14} />
            <span className='flex-1 text-left'>Search documentation...</span>
            <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 px-1.5 font-mono text-[10px] font-medium opacity-100'>
              <span className='text-xs'>⌘</span>K
            </kbd>
          </button>

          <nav className='flex items-center space-x-1'>
            {/* Navigation Menu - Desktop */}
            {isLanding && (
              <div className='hidden lg:flex items-center space-x-6 mr-6'>
                <a
                  href='#about'
                  className='text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  About
                </a>
                <a
                  href='#why-gts'
                  className='text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#why-gts');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Why GTS
                </a>
                <a
                  href='#try-gts'
                  className='text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#try-gts');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Try GTS
                </a>
                <a
                  href='#ecosystem'
                  className='text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#ecosystem');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Ecosystem
                </a>
                <Link
                  to='/docs/introduction'
                  className='text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
                >
                  Docs
                </Link>
              </div>
            )}

            <button
              onClick={() => setIsSearchOpen(true)}
              className='sm:hidden h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              title='Search documentation'
            >
              <Search size={20} />
            </button>
            <a
              href='https://discord.gg/jxpt7Ye9YN'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              title='Join Discord'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.8 8.18 1.8 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.106c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.332.956-2.419 2.158-2.419 1.21 0 2.175 1.096 2.157 2.42 0 1.332-.956 2.418-2.158 2.418zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.332.955-2.419 2.157-2.419 1.21 0 2.175 1.096 2.157 2.42 0 1.332-.956 2.418-2.157 2.418z'></path>
              </svg>
            </a>
            <a
              href='https://github.com/GlobalTypeSystem'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              title='View on GitHub'
            >
              <Github size={20} />
            </a>
            <a
              href='https://www.linkedin.com/company/hypernetix/'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              title='Follow on LinkedIn'
            >
              <Linkedin size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className='h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      {isLanding && isMobileMenuOpen && (
        <div className='lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-lg z-40'>
          <nav className='flex flex-col space-y-1 p-4'>
            <a
              href='#about'
              className='block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md transition-colors'
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </a>
            <a
              href='#why-gts'
              className='block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md transition-colors'
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#why-gts');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              Why GTS
            </a>
            <a
              href='#try-gts'
              className='block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md transition-colors'
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#try-gts');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              Try GTS
            </a>
            <a
              href='#ecosystem'
              className='block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md transition-colors'
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#ecosystem');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              Ecosystem
            </a>
            <Link
              to='/docs/introduction'
              className='block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md transition-colors'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Docs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
