import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import SignInPage from './components/SignInPage';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import OverviewPage from './components/OverviewPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="signIn" element={<SignInPage />} />
        <Route path="overview" element={<OverviewPage />} />
      </Routes>
    </div>
  );
}