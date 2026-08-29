import { AnimatePresence } from "motion/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite.jsx";
import RolarParaTopo from "./componentes/RolarParaTopo.jsx";
import TransicaoPagina from "./componentes/TransicaoPagina.jsx";
import Inicio from "./pages/Inicio.jsx";
import SobreMim from "./pages/SobreMim.jsx";
import Portifolio from "./pages/Portifolio.jsx";
import Projetos from "./pages/Projetos.jsx";
import Artigos from "./pages/Artigos.jsx";

function RotasAnimadas() {
  const localizacao = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={localizacao} key={localizacao.pathname}>
        <Route
          path="/"
          element={
            <TransicaoPagina>
              <Inicio />
            </TransicaoPagina>
          }
        />
        <Route
          path="/sobre-mim"
          element={
            <TransicaoPagina>
              <SobreMim />
            </TransicaoPagina>
          }
        />
        <Route
          path="/portfolio"
          element={
            <TransicaoPagina>
              <Portifolio />
            </TransicaoPagina>
          }
        />
        <Route
          path="/projetos"
          element={
            <TransicaoPagina>
              <Projetos />
            </TransicaoPagina>
          }
        />
        <Route
          path="/artigos"
          element={
            <TransicaoPagina>
              <Artigos />
            </TransicaoPagina>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LayoutSite>
      <RolarParaTopo />
      <RotasAnimadas />
    </LayoutSite>
  );
}
