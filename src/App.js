import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import OverviewPage from './pages/OverviewPage';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/SENG371-Frontend" element={<LandingPage />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Routes>
    </Layout>
  );
}

export default App;