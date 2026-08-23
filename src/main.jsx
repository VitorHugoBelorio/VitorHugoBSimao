import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

const caminhoBase = import.meta.env.BASE_URL.replace(/\/$/, "");
const baseRoteador = caminhoBase === "" ? undefined : caminhoBase;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={baseRoteador}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
