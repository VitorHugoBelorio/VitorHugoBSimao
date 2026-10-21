import { useLayoutEffect, useMemo } from "react";
import { motion, useIsPresent, useReducedMotion } from "motion/react";
import { ContextoTransicao } from "./contextoTransicao.js";

const curvaEntrada = [0.22, 1, 0.36, 1];
const curvaSaida = [0.4, 0, 1, 1];

const transicoes = {
  entrada: {
    origem: "center 50svh",
    inicial: () => ({ opacity: 0 }),
    saida: () => ({ opacity: 0 }),
    duracao: 0.48,
    willChange: "opacity",
  },
  aproximar: {
    origem: "center 36svh",
    inicial: () => ({ opacity: 0, y: 20 }),
    saida: () => ({ opacity: 0, y: -8 }),
    duracao: 0.56,
  },
  lateral: {
    origem: "left top",
    inicial: (direcao) => ({ opacity: 0, x: direcao * 64 }),
    saida: (direcao) => ({ opacity: 0, x: direcao * -32 }),
    duracao: 0.58,
  },
  preciso: {
    origem: "center top",
    inicial: () => ({ opacity: 0, y: 32 }),
    saida: () => ({ opacity: 0, y: -12 }),
    duracao: 0.46,
  },
  editorial: {
    origem: "center top",
    inicial: () => ({ opacity: 0, y: 52 }),
    saida: () => ({ opacity: 0, y: -22 }),
    duracao: 0.66,
  },
  leitura: {
    origem: "left 30svh",
    inicial: (direcao) => ({ opacity: 0, x: direcao * 36 }),
    saida: (direcao) => ({ opacity: 0, x: direcao * -20 }),
    duracao: 0.6,
  },
};

export default function TransicaoPagina({ children, direcao = 0, tipo = "lateral", aoEntrar }) {
  const prefereReducaoMovimento = useReducedMotion();
  const estaPresente = useIsPresent();
  const transicao = transicoes[tipo] || transicoes.lateral;
  const contextoTransicao = useMemo(() => ({ direcao, tipo }), [direcao, tipo]);
  const variantesPagina = useMemo(() => {
    const estadoVisivel = { opacity: 1, x: 0, y: 0, scale: 1 };

    return {
      inicial: prefereReducaoMovimento
        ? estadoVisivel
        : transicao.inicial(direcao || 1),
      visivel: {
        ...estadoVisivel,
        transition: {
          duration: prefereReducaoMovimento ? 0 : transicao.duracao,
          ease: curvaEntrada,
          opacity: { duration: prefereReducaoMovimento ? 0 : 0.3, ease: "easeOut" },
        },
        transitionEnd: { willChange: "auto" },
      },
      saida: (contexto) => ({
        ...(prefereReducaoMovimento
          ? { opacity: 0 }
          : transicao.saida(contexto?.direcao ?? direcao)),
        transition: {
          duration: prefereReducaoMovimento ? 0 : 0.18,
          ease: curvaSaida,
        },
      }),
    };
  }, [direcao, prefereReducaoMovimento, transicao]);

  useLayoutEffect(() => {
    // Troca a estrutura e reposiciona o scroll antes de pintar a nova página.
    aoEntrar?.();
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [aoEntrar]);

  return (
    <ContextoTransicao.Provider value={contextoTransicao}>
      <motion.main
        id="conteudo"
        className="pagina"
        data-transicao={tipo}
        inert={!estaPresente}
        custom={contextoTransicao}
        variants={variantesPagina}
        initial="inicial"
        animate="visivel"
        exit="saida"
        style={{
          transformOrigin: transicao.origem,
          willChange: prefereReducaoMovimento
            ? "auto"
            : transicao.willChange || "opacity, transform",
        }}
      >
        {children}
      </motion.main>
    </ContextoTransicao.Provider>
  );
}
