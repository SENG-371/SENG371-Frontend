import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import SignInPage from './components/SignInPage';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import OverviewPage from './components/overviewpage/OverviewPage';

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="mainpage" element={<MainPage />} />
        <Route path="overview" element={<OverviewPage />} />
      </Routes>
    </div>
  );
}