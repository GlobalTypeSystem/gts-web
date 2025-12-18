import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isDocs = location.pathname.startsWith('/docs');
  const isLanding = location.pathname === '/' || location.pathname === '';

  return (
    <div className='min-h-screen bg-white dark:bg-slate-950 flex flex-col'>
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        showMenuButton={isDocs}
      />

      <div
        className={`flex flex-1 items-start ${isLanding ? '' : 'container max-w-screen-2xl mx-auto'}`}
      >
        {isDocs && (
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        <main
          className={`flex-1 w-full ${isLanding ? '' : 'py-8 px-4 md:px-8'} ${isDocs ? 'lg:pl-8 container max-w-screen-2xl mx-auto' : ''}`}
        >
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};
