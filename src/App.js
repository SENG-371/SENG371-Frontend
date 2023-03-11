import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import SignInPage from './components/SignInPage';
import ResponsiveAppBar from './components/ResponsiveAppBar';

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="signIn" element={<SignInPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}