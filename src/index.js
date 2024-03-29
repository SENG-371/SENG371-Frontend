import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch } from "react-router-dom";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
