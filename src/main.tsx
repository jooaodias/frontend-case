import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { AppRoutes } from "./app/router";
import { UserContextProvider } from "./shared/providers/LoginProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  </React.StrictMode>
);
