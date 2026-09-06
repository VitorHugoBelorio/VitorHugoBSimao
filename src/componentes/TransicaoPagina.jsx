import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";

const curvaEntrada = [0.22, 1, 0.36, 1];
const curvaSaida = [0.4, 0, 1, 1];

const transicoes = {
  entrada: {
    origem: "center 48%",
    inicial: () => ({ opacity: 0, y: 18, scale: 0.986 }),
    saida: () => ({ opacity: 0, y: -10, scale: 1.004 }),
    entrada: { duration: 0.42, opacity: 0.26 },
    saidaTempo: { duration: 0.16, opacity: 0.12 },
  },
  aproximar: {
    origem: "center 38%",
    inicial: () => ({
      opacity: 0,
      y: 18,
      scale: 0.974,
    }),
    saida: () => ({
      opacity: 0,
      y: -8,
      scale: 0.988,
    }),
    entrada: { duration: 0.44, opacity: 0.26 },
    saidaTempo: { duration: 0.16, opacity: 0.12 },
  },
  lateral: {
    origem: "center 42%",
    inicial: ({ direcao }) => ({
      opacity: 0,
      x: direcao * 42,
      y: 4,
      scale: 0.994,
    }),
    saida: ({ direcao }) => ({
      opacity: 0,
      x: direcao * -26,
      y: -2,
      scale: 0.998,
    }),
    entrada: { duration: 0.38, opacity: 0.22 },
    saidaTempo: { duration: 0.14, opacity: 0.1 },
  },
  preciso: {
    origem: "center 34%",
    inicial: ({ direcao }) => ({
      opacity: 0,
      x: direcao * 20,
      y: 16,
      scale: 0.99,
    }),
    saida: ({ direcao }) => ({
      opacity: 0,
      x: direcao * -14,
      y: -10,
      scale: 0.996,
    }),
    entrada: { duration: 0.34, opacity: 0.2 },
    saidaTempo: { duration: 0.12, opacity: 0.1 },
  },
  editorial: {
    origem: "center 30%",
    inicial: ({ direcao }) => ({
      opacity: 0,
      x: direcao * 8,
      y: 30,
      scale: 0.996,
    }),
    saida: ({ direcao }) => ({
      opacity: 0,
      x: direcao * -8,
      y: -16,
      scale: 0.998,
    }),
    entrada: { duration: 0.46, opacity: 0.26 },
    saidaTempo: { duration: 0.16, opacity: 0.12 },
  },
};

function normalizarContexto(contexto, tipoPadrao, direcaoPadrao) {
  if (typeof contexto === "number") {
    return {
      direcao: contexto || 1,
      tipo: tipoPadrao,
    };
  }

  return {
    direcao: contexto?.direcao || direcaoPadrao || 1,
    tipo: contexto?.tipo || tipoPadrao,
  };
}

export default function TransicaoPagina({ children, direcao = 0, tipo = "lateral" }) {
  const prefereReducaoMovimento = useReducedMotion();
  const transicao = transicoes[tipo] || transicoes.lateral;

  const variantesPagina = prefereReducaoMovimento
    ? {
        inicial: { opacity: 0 },
        visivel: { opacity: 1 },
        saida: { opacity: 0 },
      }
    : {
        inicial: (contexto) => transicao.inicial(normalizarContexto(contexto, tipo, direcao)),
        visivel: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: transicao.entrada.duration,
            ease: curvaEntrada,
            opacity: { duration: transicao.entrada.opacity },
          },
        },
        saida: (contexto) => ({
          ...transicao.saida(normalizarContexto(contexto, tipo, direcao)),
          transition: {
            duration: transicao.saidaTempo.duration,
            ease: curvaSaida,
            opacity: { duration: transicao.saidaTempo.opacity },
          },
        }),
      };

  const contextoTransicao = { direcao, tipo };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <motion.main
      id="conteudo"
      className="pagina"
      custom={contextoTransicao}
      variants={variantesPagina}
      initial="inicial"
      animate="visivel"
      exit="saida"
      style={{
        backfaceVisibility: "hidden",
        transformOrigin: transicao.origem,
        willChange: prefereReducaoMovimento ? "auto" : "opacity, transform",
      }}
      transition={{
        duration: prefereReducaoMovimento ? 0.01 : transicao.entrada.duration,
        ease: curvaEntrada,
      }}
    >
      {children}
    </motion.main>
  );
}
