import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Fade out splash
setTimeout(() => {
  splash.classList.add("opacity-0");
  setTimeout(() => splash.remove(), 500);
}, 800);
