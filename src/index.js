import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MainContext, MainStateProvider } from "./Context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainStateProvider>
    <App />
    </MainStateProvider>
  </React.StrictMode>
);
