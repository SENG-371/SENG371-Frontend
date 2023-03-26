import { useNavigate } from "react-router-dom";

import "../index.css";
import { EHR } from "../assets";
import ResponsiveAppBar from "../components/layout/ResponsiveAppBar";

function LandingPage() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="Main-Page">
        <header className="Main-Page-header">
          <h1 style={{ fontWeight: "bold", marginTop: 40 }}>
            Modern Health Record System
          </h1>
          <h2 style={{ margin: 30, fontWeight: "lighter", fontSize: 25 }}>
            Dear practitioners, please login to your profile to access the
            health records
          </h2>
          <img src={EHR} width="40%" style={{ margin: 60 }}></img>
        </header>
      </div>
    </>
  );
}

export default LandingPage;
