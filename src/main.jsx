import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SidebarModalProvider } from "./context/SidebarModalContext";
import { AuthProvider } from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SidebarModalProvider>
        <App />
      </SidebarModalProvider>
    </AuthProvider>
    <ToastContainer position="top-center" />
  </React.StrictMode>
);
