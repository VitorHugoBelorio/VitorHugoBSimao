import { useContext } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ContextoTransicao } from "./contextoTransicao.js";

const elementos = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  li: motion.li,
  p: motion.p,
};

const movimentos = {
  entrada: { inicial: { y: 18 }, duracao: 0.6 },
  aproximar: { inicial: { scale: 0.98 }, duracao: 0.58 },
  lateral: { inicial: { x: 28 }, duracao: 0.52 },
  preciso: { inicial: { y: 24, scale: 0.985 }, duracao: 0.44 },
  editorial: { inicial: { y: 20, clipPath: "inset(0 0 18% 0)" }, duracao: 0.62 },
  leitura: { inicial: { y: 16 }, duracao: 0.54 },
};

export default function Revelar({
  como = "div",
  children,
  className,
  atraso = 0,
  quantidade = 0.24,
  ...props
}) {
  const prefereReducaoMovimento = useReducedMotion();
  const { tipo, direcao } = useContext(ContextoTransicao);
  const Elemento = elementos[como] || motion.div;
  const movimento = movimentos[tipo] || movimentos.entrada;
  const inicial = {
    opacity: 0,
    ...movimento.inicial,
    ...(movimento.inicial.x ? { x: movimento.inicial.x * (direcao || 1) } : {}),
  };
  const visivel = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    ...(movimento.inicial.clipPath ? { clipPath: "inset(0 0 0% 0)" } : {}),
    transitionEnd: { transform: "none", clipPath: "none" },
  };

  return (
    <Elemento
      className={className}
      {...props}
      initial={prefereReducaoMovimento ? false : inicial}
      whileInView={prefereReducaoMovimento ? undefined : visivel}
      viewport={{ once: true, amount: quantidade }}
      transition={{
        duration: prefereReducaoMovimento ? 0 : movimento.duracao,
        delay: prefereReducaoMovimento ? 0 : Math.min(atraso, 0.24),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Elemento>
  );
}
