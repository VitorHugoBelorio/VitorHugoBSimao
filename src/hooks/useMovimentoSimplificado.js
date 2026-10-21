import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const consultaDispositivoToque = "(hover: none), (pointer: coarse)";

export default function useMovimentoSimplificado() {
  const prefereReducaoMovimento = useReducedMotion();
  const [dispositivoToque, setDispositivoToque] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(consultaDispositivoToque).matches,
  );

  useEffect(() => {
    const consulta = window.matchMedia(consultaDispositivoToque);
    const atualizar = () => setDispositivoToque(consulta.matches);

    atualizar();
    consulta.addEventListener("change", atualizar);

    return () => consulta.removeEventListener("change", atualizar);
  }, []);

  return Boolean(prefereReducaoMovimento || dispositivoToque);
}
