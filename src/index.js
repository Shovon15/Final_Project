import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Context/AuthProvider";
import { DashboardContextProvider } from "./Context/DashboardContext";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DashboardContextProvider>
          <App />
        </DashboardContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
