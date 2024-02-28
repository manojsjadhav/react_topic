import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contextapi from "./hooks/useContext/Contextapi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contextapi>
      <App />
    </Contextapi>
  </React.StrictMode>
);


