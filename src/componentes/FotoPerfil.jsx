import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { fotoPerfil } from "../dados/perfil.js";

export default function FotoPerfil() {
  const prefereReducaoMovimento = useReducedMotion();
  const [falhaImagem, setFalhaImagem] = useState(false);
  const possuiFoto = Boolean(fotoPerfil.src) && !falhaImagem;

  return (
    <motion.figure
      className="foto-perfil"
      initial={prefereReducaoMovimento ? false : { opacity: 0, x: 20 }}
      whileInView={prefereReducaoMovimento ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: prefereReducaoMovimento ? 0 : 0.64,
        delay: prefereReducaoMovimento ? 0 : 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="foto-perfil__moldura">
        <div className="foto-perfil__imagem">
          {possuiFoto ? (
            <img
              src={fotoPerfil.src}
              alt={fotoPerfil.alt}
              loading="lazy"
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
