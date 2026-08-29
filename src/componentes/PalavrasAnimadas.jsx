import { motion, useReducedMotion } from "motion/react";

const elementos = {
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
};

export default function PalavrasAnimadas({
  como = "h1",
  texto,
  linhas,
  className,
  atraso = 0,
  ...props
}) {
  const prefereReducaoMovimento = useReducedMotion();
  const Elemento = elementos[como] || motion.h1;
  const linhasTexto = linhas || [texto];
  const textoAcessivel = linhasTexto.join(" ");

  if (prefereReducaoMovimento) {
    return (
      <Elemento className={className} {...props}>
        {linhasTexto.map((linha) => (
          <span className="linha-palavras" key={linha}>
            {linha}
          </span>
        ))}
      </Elemento>
    );
  }

  return (
    <Elemento className={className} aria-label={textoAcessivel} {...props}>
      {linhasTexto.map((linha, indiceLinha) => {
        const palavrasAnteriores = linhasTexto
          .slice(0, indiceLinha)
          .reduce((total, linhaAnterior) => total + linhaAnterior.split(" ").length, 0);

        return (
          <span className="linha-palavras" aria-hidden="true" key={linha}>
            {linha.split(" ").map((palavra, indicePalavra) => {
              const indice = palavrasAnteriores + indicePalavra;

              return (
                <span className="mascara-palavra" key={`${palavra}-${indiceLinha}-${indicePalavra}`}>
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
              );
            })}
          </span>
        );
      })}
    </Elemento>
  );
}
