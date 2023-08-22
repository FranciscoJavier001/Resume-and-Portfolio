import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; //* Importacion para navegar entre rutas */

import ResumeApp from "./ResumeApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResumeApp />
    </BrowserRouter>
  </React.StrictMode>
);
