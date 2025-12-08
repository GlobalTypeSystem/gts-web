import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { DocPage } from './pages/DocPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='docs'>
            <Route index element={<Navigate to='introduction' replace />} />
            <Route path=':id' element={<DocPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
