import { useState } from "react";
import { motion } from "motion/react";
import { fotoPerfil } from "../dados/perfil.js";
import useMovimentoSimplificado from "../hooks/useMovimentoSimplificado.js";

export default function FotoPerfil() {
  const movimentoSimplificado = useMovimentoSimplificado();
  const [falhaImagem, setFalhaImagem] = useState(false);
  const possuiFoto = Boolean(fotoPerfil.src) && !falhaImagem;

  return (
    <motion.figure
      className="foto-perfil"
      initial={movimentoSimplificado ? false : { opacity: 0, x: 20 }}
      whileInView={movimentoSimplificado ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: movimentoSimplificado ? 0 : 0.64,
        delay: movimentoSimplificado ? 0 : 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="foto-perfil__moldura">
        <div className="foto-perfil__imagem">
          {possuiFoto ? (
            <img
              src={fotoPerfil.src}
              alt={fotoPerfil.alt}
              width="1200"
              height="1281"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={() => setFalhaImagem(true)}
            />
          ) : (
            <div className="foto-perfil__placeholder" aria-label="Espaço para foto de perfil">
              <span>{fotoPerfil.orientacao}</span>
            </div>
          )}
        </div>
      </div>
    </motion.figure>
  );
}
