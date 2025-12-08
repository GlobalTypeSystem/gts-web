import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Search, X, FileText, Hash, Book } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SIDEBAR_NAVIGATION, DOCS_CONTENT } from '../data/docs';

interface SearchResult {
  id: string;
  title: string;
  section: string;
  path: string;
  content: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Build searchable content from the sidebar navigation and docs content
const buildSearchableContent = (): SearchResult[] => {
  const results: SearchResult[] = [];

  SIDEBAR_NAVIGATION.forEach((section) => {
    section.items.forEach((item) => {
      const docId = item.path.replace('/docs/', '');
      const docContent = DOCS_CONTENT[docId];

      results.push({
        id: item.path,
        title: item.title,
        section: section.title,
        path: item.path,
        content:
          docContent?.description || `Navigate to ${item.title} documentation`,
      });
    });
  });

  return results;
};

const searchableContent = buildSearchableContent();

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      // Show all items when no search query
      return searchableContent;
    }

    const query = searchQuery.toLowerCase();
    const results = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query) ||
        item.section.toLowerCase().includes(query)
    );

    // Sort results by relevance (title matches first)
    return results.sort((a, b) => {
      const aInTitle = a.title.toLowerCase().includes(query);
      const bInTitle = b.title.toLowerCase().includes(query);
      if (aInTitle && !bInTitle) return -1;
      if (!aInTitle && bInTitle) return 1;
      return 0;
    });
  }, [searchQuery]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && filteredResults.length > 0) {
        e.preventDefault();
        const selected = filteredResults[selectedIndex];
        if (selected) {
          navigate(selected.path);
          onClose();
        }
      }
    },
    [isOpen, filteredResults, selectedIndex, navigate, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getIcon = (section: string) => {
    switch (section.toLowerCase()) {
      case 'introduction':
        return <Book size={18} className='text-slate-400' />;
      case 'core concepts':
      case 'advanced':
        return <Hash size={18} className='text-slate-400' />;
      default:
        return <FileText size={18} className='text-slate-400' />;
    }
  };

  const modalContent = (
    <>
      <div
        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]'
        onClick={onClose}
      />

      <div className='fixed inset-0 z-[9999] overflow-y-auto pointer-events-none'>
        <div className='min-h-full flex items-start justify-center pt-[10vh] px-4'>
          <div className='relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl pointer-events-auto'>
            <div className='flex items-center border-b border-slate-200 dark:border-slate-800'>
              <Search className='ml-4 text-slate-400' size={20} />
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search documentation...'
                className='flex-1 px-4 py-4 bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400'
                autoFocus
              />
              <button
                onClick={onClose}
                className='mr-4 p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors'
              >
                <X size={20} className='text-slate-400' />
              </button>
            </div>

            <div className='max-h-[60vh] overflow-y-auto'>
              {searchQuery && filteredResults.length === 0 && (
                <div className='px-4 py-8 text-center text-slate-500 dark:text-slate-400'>
                  No results found for "{searchQuery}"
                </div>
              )}

              {filteredResults.length > 0 && (
                <div className='py-2'>
                  {/* Group results by section */}
                  {searchQuery
                    ? // Show flat list when searching
                      filteredResults.map((result, index) => (
                        <button
                          key={result.id}
                          onClick={() => {
                            navigate(result.path);
                            onClose();
                          }}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full flex items-start px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                            index === selectedIndex
                              ? 'bg-slate-100 dark:bg-slate-800'
                              : ''
                          }`}
                        >
                          <div className='mr-3 mt-0.5'>
                            {getIcon(result.section)}
                          </div>
                          <div className='flex-1 text-left'>
                            <div className='text-sm font-medium text-slate-900 dark:text-slate-100'>
                              {result.title}
                            </div>
                            <div className='text-xs text-slate-500 dark:text-slate-400 mt-1'>
                              {result.section} · {result.content}
                            </div>
                          </div>
                        </button>
                      ))
                    : // Show grouped list when browsing
                      SIDEBAR_NAVIGATION.map((section) => {
                        const sectionResults = filteredResults.filter(
                          (r) => r.section === section.title
                        );
                        if (sectionResults.length === 0) return null;

                        return (
                          <div key={section.title}>
                            <div className='px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                              {section.title}
                            </div>
                            {sectionResults.map((result, index) => {
                              const globalIndex =
                                filteredResults.indexOf(result);
                              return (
                                <button
                                  key={result.id}
                                  onClick={() => {
                                    navigate(result.path);
                                    onClose();
                                  }}
                                  onMouseEnter={() =>
                                    setSelectedIndex(globalIndex)
                                  }
                                  className={`w-full flex items-start px-4 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                                    globalIndex === selectedIndex
                                      ? 'bg-slate-100 dark:bg-slate-800'
                                      : ''
                                  }`}
                                >
                                  <div className='mr-3 mt-0.5'>
                                    {getIcon(result.section)}
                                  </div>
                                  <div className='flex-1 text-left'>
                                    <div className='text-sm font-medium text-slate-900 dark:text-slate-100'>
                                      {result.title}
                                    </div>
                                    {result.content && (
                                      <div className='text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1'>
                                        {result.content}
                                      </div>
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        );
                      })}
                </div>
              )}

              {!searchQuery && filteredResults.length === 0 && (
                <div className='px-4 py-8 text-center'>
                  <div className='text-sm text-slate-500 dark:text-slate-400'>
                    No documentation pages available
                  </div>
                </div>
              )}

              <div className='border-t border-slate-200 dark:border-slate-800 px-4 py-3'>
                <div className='flex justify-center gap-4 text-xs'>
                  <div className='flex items-center gap-1'>
                    <kbd className='px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'>
                      ↑↓
                    </kbd>
                    <span className='text-slate-400'>Navigate</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <kbd className='px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'>
                      ↵
                    </kbd>
                    <span className='text-slate-400'>Open</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <kbd className='px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'>
                      Esc
                    </kbd>
                    <span className='text-slate-400'>Close</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};
