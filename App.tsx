import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Protocols from './pages/Protocols';
import ProtocolDetail from './pages/ProtocolDetail';
import Library from './pages/Library';
import Professionals from './pages/Professionals';

// Custom ScrollToTop component
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="protocolos" element={<Protocols />} />
          <Route path="protocolos/:slug" element={<ProtocolDetail />} />
          <Route path="biblioteca-de-ativos" element={<Library />} />
          <Route path="para-profissionais" element={<Professionals />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;