import { motion, useReducedMotion } from "motion/react";

const curva = [0.22, 1, 0.36, 1];

export default function TransicaoPagina({ children }) {
  const prefereReducaoMovimento = useReducedMotion();

  const estadoInicial = prefereReducaoMovimento
    ? { opacity: 1 }
    : {
        opacity: 0,
        scale: 0.985,
        filter: "blur(10px)",
        clipPath: "inset(2% 0 2% 0)",
      };

  const estadoVisivel = {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    clipPath: "inset(0% 0 0% 0)",
  };

  const estadoSaida = prefereReducaoMovimento
    ? { opacity: 0 }
    : {
        opacity: 0,
        scale: 0.992,
        filter: "blur(8px)",
        clipPath: "inset(1.5% 0 1.5% 0)",
      };

  return (
    <motion.main
      id="conteudo"
      className="pagina"
      initial={estadoInicial}
      animate={estadoVisivel}
      exit={estadoSaida}
      style={{ transformOrigin: "center 42%" }}
      transition={{
        duration: prefereReducaoMovimento ? 0.01 : 0.62,
        ease: curva,
        opacity: { duration: prefereReducaoMovimento ? 0.01 : 0.38 },
      }}
    >
      {children}
    </motion.main>
  );
}
