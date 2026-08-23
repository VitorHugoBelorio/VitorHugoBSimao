import { motion, useReducedMotion } from "motion/react";

const curva = [0.22, 1, 0.36, 1];

export default function TransicaoPagina({ children }) {
  const prefereReducaoMovimento = useReducedMotion();

  return (
    <motion.main
      id="conteudo"
      className="pagina"
      initial={
        prefereReducaoMovimento
          ? { opacity: 1 }
          : { opacity: 0, y: 18, clipPath: "inset(0 0 3% 0)" }
      }
      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      exit={
        prefereReducaoMovimento
          ? { opacity: 0 }
          : { opacity: 0, y: -12, clipPath: "inset(2% 0 0 0)" }
      }
      transition={{
        duration: prefereReducaoMovimento ? 0.01 : 0.55,
        ease: curva,
      }}
    >
      {children}
    </motion.main>
  );
}
