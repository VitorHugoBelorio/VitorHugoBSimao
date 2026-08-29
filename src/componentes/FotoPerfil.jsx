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
      initial={prefereReducaoMovimento ? false : { opacity: 0, y: 24 }}
      animate={prefereReducaoMovimento ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{
        duration: prefereReducaoMovimento ? 0.01 : 0.68,
        delay: 0.42,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="foto-perfil__moldura">
        <div className="foto-perfil__imagem">
          {possuiFoto ? (
            <img
              src={fotoPerfil.src}
              alt={fotoPerfil.alt}
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
