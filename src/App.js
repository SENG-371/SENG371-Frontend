import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import OverviewPage from "./pages/OverviewPage";
import LandingPage from "./pages/LandingPage";
import NewPatient from "./pages/NewPatient";
import Calendar from "./pages/Calendar";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SENG371-Frontend" element={<LandingPage />} />
        <Route path="/singin" element={<SignInPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/newpatient" element={<NewPatient />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
