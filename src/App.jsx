import { useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite.jsx";
import TransicaoPagina from "./componentes/TransicaoPagina.jsx";
import Inicio from "./pages/Inicio.jsx";
import SobreMim from "./pages/SobreMim.jsx";
import Portifolio from "./pages/Portifolio.jsx";
import Projetos from "./pages/Projetos.jsx";
import Artigos from "./pages/Artigos.jsx";
import ArtigoLeitura from "./pages/artigos/ArtigoLeitura.jsx";

const ordemRotas = ["/", "/sobre-mim", "/portfolio", "/projetos", "/artigos"];

const transicoesPorRota = {
  "/": "entrada",
  "/sobre-mim": "aproximar",
  "/portfolio": "lateral",
  "/projetos": "preciso",
  "/artigos": "editorial",
};

function obterIndiceRota(pathname) {
  if (pathname.startsWith("/artigos/")) {
    return ordemRotas.indexOf("/artigos");
  }

  return Math.max(ordemRotas.indexOf(pathname), 0);
}

function obterTipoTransicao(pathname) {
  if (pathname.startsWith("/artigos/")) {
    return "editorial";
  }

  return transicoesPorRota[pathname] || "lateral";
}

function RotasAnimadas() {
  const localizacao = useLocation();
  const indiceAtual = obterIndiceRota(localizacao.pathname);
  const indiceAnteriorRef = useRef(indiceAtual);
  const tipoTransicao = obterTipoTransicao(localizacao.pathname);
  const direcao =
    indiceAtual === indiceAnteriorRef.current ? 0 : indiceAtual > indiceAnteriorRef.current ? 1 : -1;
  const contextoTransicao = { direcao, tipo: tipoTransicao };

  useEffect(() => {
    indiceAnteriorRef.current = indiceAtual;
  }, [indiceAtual]);

  return (
    <AnimatePresence mode="wait" initial={false} custom={contextoTransicao}>
      <Routes location={localizacao} key={localizacao.pathname}>
        <Route
          path="/"
          element={
            <TransicaoPagina direcao={direcao} tipo={tipoTransicao}>
              <Inicio />
            </TransicaoPagina>
          }
        />
        <Route
          path="/sobre-mim"
          element={
            <TransicaoPagina direcao={direcao} tipo={tipoTransicao}>
              <SobreMim />
            </TransicaoPagina>
          }
        />
        <Route
          path="/portfolio"
          element={
            <TransicaoPagina direcao={direcao} tipo={tipoTransicao}>
              <Portifolio />
            </TransicaoPagina>
          }
        />
        <Route
          path="/projetos"
          element={
            <TransicaoPagina direcao={direcao} tipo={tipoTransicao}>
              <Projetos />
            </TransicaoPagina>
          }
        />
        <Route
          path="/artigos"
          element={
            <TransicaoPagina direcao={direcao} tipo={tipoTransicao}>
              <Artigos />
            </TransicaoPagina>
          }
        />
        <Route
          path="/artigos/:slug"
          element={
            <TransicaoPagina direcao={direcao} tipo={tipoTransicao}>
              <ArtigoLeitura />
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
      <RotasAnimadas />
    </LayoutSite>
  );
}
