import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite.jsx";
import TransicaoPagina from "./componentes/TransicaoPagina.jsx";
import Inicio from "./pages/Inicio.jsx";
import SobreMim from "./pages/SobreMim.jsx";
import Portifolio from "./pages/Portifolio.jsx";
import Projetos from "./pages/Projetos.jsx";
// REATIVAR ARTIGOS: descomente os imports abaixo quando o primeiro artigo estiver pronto.
// import Artigos from "./pages/Artigos.jsx";
// import ArtigoLeitura from "./pages/artigos/ArtigoLeitura.jsx";

const ordemRotas = [
  "/",
  "/sobre-mim",
  "/portfolio",
  "/projetos",
  // REATIVAR ARTIGOS: descomente a rota abaixo.
  // "/artigos",
];

const transicoesPorRota = {
  "/": "entrada",
  "/sobre-mim": "aproximar",
  "/portfolio": "lateral",
  "/projetos": "preciso",
  // REATIVAR ARTIGOS: descomente a transição abaixo.
  // "/artigos": "editorial",
};

function obterIndiceRota(pathname) {
  // REATIVAR ARTIGOS:
  // if (pathname.startsWith("/artigos/")) {
  //   return ordemRotas.indexOf("/artigos");
  // }

  return Math.max(ordemRotas.indexOf(pathname), 0);
}

function obterTipoTransicao(pathname) {
  // REATIVAR ARTIGOS:
  // if (pathname.startsWith("/artigos/")) {
  //   return "leitura";
  // }

  return transicoesPorRota[pathname] || "lateral";
}

function obterProfundidadeRota(pathname) {
  return pathname.split("/").filter(Boolean).length;
}

function obterDirecaoTransicao(pathnameAtual, pathnameAnterior) {
  const indiceAtual = obterIndiceRota(pathnameAtual);
  const indiceAnterior = obterIndiceRota(pathnameAnterior);

  if (indiceAtual !== indiceAnterior) {
    return indiceAtual > indiceAnterior ? 1 : -1;
  }

  if (pathnameAtual !== pathnameAnterior) {
    const profundidadeAtual = obterProfundidadeRota(pathnameAtual);
    const profundidadeAnterior = obterProfundidadeRota(pathnameAnterior);

    if (profundidadeAtual !== profundidadeAnterior) {
      return profundidadeAtual > profundidadeAnterior ? 1 : -1;
    }
  }

  return 0;
}

function RotasAnimadas() {
  const localizacao = useLocation();
  const [pathnameExibido, setPathnameExibido] = useState(localizacao.pathname);
  const [navegacao, setNavegacao] = useState({ pathname: localizacao.pathname, direcao: 0 });
  const tipoTransicao = obterTipoTransicao(localizacao.pathname);

  // Mantém a direção durante toda a animação, inclusive nos renders de conclusão.
  if (navegacao.pathname !== localizacao.pathname) {
    setNavegacao({
      pathname: localizacao.pathname,
      direcao: obterDirecaoTransicao(localizacao.pathname, pathnameExibido),
    });
  }

  const confirmarEntrada = useCallback(() => {
    setPathnameExibido(localizacao.pathname);
  }, [localizacao.pathname]);

  return (
    <LayoutSite pathname={pathnameExibido}>
      <AnimatePresence mode="wait" custom={{ direcao: navegacao.direcao }}>
        <TransicaoPagina
          key={localizacao.pathname}
          direcao={navegacao.direcao}
          tipo={tipoTransicao}
          aoEntrar={confirmarEntrada}
        >
          <Routes location={localizacao}>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-mim" element={<SobreMim />} />
            <Route path="/portfolio" element={<Portifolio />} />
            <Route path="/projetos" element={<Projetos />} />
            {/* REATIVAR ARTIGOS: descomente as duas rotas abaixo. */}
            {/* <Route path="/artigos" element={<Artigos />} /> */}
            {/* <Route path="/artigos/:slug" element={<ArtigoLeitura />} /> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </TransicaoPagina>
      </AnimatePresence>
    </LayoutSite>
  );
}

export default function App() {
  return <RotasAnimadas />;
}
