import React from "react";
import ReactDOM from "react-dom";

import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Context from "./context";

import en from "./translations/en/global.json";

import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./scss/main.scss";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: { global: en },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Context>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            preventDuplicates={true}
          />
          {/* Same as */}
          <ToastContainer />
        </Context>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
