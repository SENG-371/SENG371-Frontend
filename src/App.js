import * as React from "react";
import { HashRouter, Routes, Route, Router } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import OverviewPage from "./pages/OverviewPage";
import LandingPage from "./pages/LandingPage";
import NewPatient from "./pages/NewPatient";
import Calendar from "./pages/Calendar";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { PractitionerContext } from "./PractitionerContext";

function App() {

  const [pracId, setPracId] = React.useState(null);

  const value = React.useMemo(() => ({ pracId, setPracId }), [pracId, setPracId]);

  return (
    <BrowserRouter>
      <PractitionerContext.Provider value={value}>
        <Routes>
          <Route path="/SENG371-Frontend" element={<LandingPage />} />
          <Route path="/singin" element={<SignInPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/newpatient" element={<NewPatient />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </PractitionerContext.Provider>
    </BrowserRouter>

    // <Router>
    //   <Route path="/SENG371-Frontend" component={<LandingPage />} />

    //   <PractitionerContext.Provider value={value}>
    //     <Route path="/singin" component={<SignInPage />} />
    //     <Route path="/overview" component={<OverviewPage />} />
    //     <Route path="/newpatient" component={<NewPatient />} />
    //     <Route path="/calendar" component={<Calendar />} />
    //   </PractitionerContext.Provider>
    // </Router>
  );
}

export default App;
