import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import i18n from "./i18n";

import { I18nextProvider } from "react-i18next";
import { Provider as ReduxProvider } from "react-redux";


render(
  <I18nextProvider i18n={i18n}>
    <Router>
      <App />
    </Router>
  </I18nextProvider>,
  document.getElementById("app")
);
