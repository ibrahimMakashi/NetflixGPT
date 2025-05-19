import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/LogIn.jsx";
import Browser from "./components/Browser.jsx";



createRoot(document.getElementById("root")).render(

  // <StrictMode>
    <App />
  // </StrictMode>
);
