import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className='border-t border-slate-200 dark:border-slate-800 bg-slate-950 text-white mt-auto'>
      <div className='container max-w-screen-2xl mx-auto px-4 md:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* Brand Section */}
          <div className='col-span-1'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm'>
                GTS
              </div>
              <span className='font-bold'>GlobalTypeSystem</span>
            </div>
            <p className='text-sm text-slate-400'>
              A universal language for data types across all systems.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className='font-semibold mb-4'>Product</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              <li>
                <Link
                  to='/docs/introduction'
                  className='hover:text-brand-400 transition-colors'
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to='/docs/use-cases'
                  className='hover:text-brand-400 transition-colors'
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  to='/docs/roadmap'
                  className='hover:text-brand-400 transition-colors'
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  to='/docs/comparison'
                  className='hover:text-brand-400 transition-colors'
                >
                  Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className='font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              <li>
                <a
                  href='https://github.com/GlobalTypeSystem'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-brand-400 transition-colors'
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  to='/docs/introduction'
                  className='hover:text-brand-400 transition-colors'
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <a
                  href='https://discord.gg/jxpt7Ye9YN'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-brand-400 transition-colors'
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className='font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              <li>
                <a href='#' className='hover:text-brand-400 transition-colors'>
                  Privacy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-brand-400 transition-colors'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='pt-8 border-t border-slate-800 text-center text-sm text-slate-400'>
          <p>&copy; GlobalTypeSystem. Open-source under Apache-2.0 License.</p>
        </div>
      </div>
    </footer>
  );
};
