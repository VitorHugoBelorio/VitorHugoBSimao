import { motion, useReducedMotion } from "motion/react";

const elementos = {
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
};

export default function PalavrasAnimadas({
  como = "h1",
  texto,
  className,
  atraso = 0,
  ...props
}) {
  const prefereReducaoMovimento = useReducedMotion();
  const Elemento = elementos[como] || motion.h1;
  const palavras = texto.split(" ");

  if (prefereReducaoMovimento) {
    return (
      <Elemento className={className} {...props}>
        {texto}
      </Elemento>
    );
  }

  return (
    <Elemento className={className} aria-label={texto} {...props}>
      {palavras.map((palavra, indice) => (
        <span className="mascara-palavra" aria-hidden="true" key={`${palavra}-${indice}`}>
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.72,
              delay: atraso + indice * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {palavra}
          </motion.span>
        </span>
      ))}
    </Elemento>
  );
}
