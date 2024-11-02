import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { AppRoutes } from "./app/router";
import { UserContextProvider } from "./shared/providers/LoginProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
