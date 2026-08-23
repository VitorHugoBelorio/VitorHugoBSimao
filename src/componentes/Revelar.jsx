import { motion, useReducedMotion } from "motion/react";

const elementos = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  li: motion.li,
  p: motion.p,
};

export default function Revelar({
  como = "div",
  children,
  className,
  atraso = 0,
  quantidade = 0.24,
}) {
  const prefereReducaoMovimento = useReducedMotion();
  const Elemento = elementos[como] || motion.div;

  return (
    <Elemento
      className={className}
      initial={prefereReducaoMovimento ? false : { opacity: 0, y: 32 }}
      whileInView={prefereReducaoMovimento ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: quantidade }}
      transition={{
        duration: 0.65,
        delay: atraso,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Elemento>
  );
}
