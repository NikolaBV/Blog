import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { useMsal, MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const pca = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);
