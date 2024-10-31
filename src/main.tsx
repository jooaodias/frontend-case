import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { AppRoutes } from "./app/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
