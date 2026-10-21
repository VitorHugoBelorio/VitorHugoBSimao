import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const consultaDispositivoToque = "(hover: none), (pointer: coarse)";

export function useDispositivoToque() {
  const [dispositivoToque, setDispositivoToque] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(consultaDispositivoToque).matches,
  );

  useEffect(() => {
    const consulta = window.matchMedia(consultaDispositivoToque);
    const atualizar = () => setDispositivoToque(consulta.matches);
    const usaEventoModerno = typeof consulta.addEventListener === "function";

    atualizar();
    if (usaEventoModerno) {
      consulta.addEventListener("change", atualizar);
    } else {
      consulta.addListener(atualizar);
    }

    return () => {
      if (usaEventoModerno) {
        consulta.removeEventListener("change", atualizar);
      } else {
        consulta.removeListener(atualizar);
      }
    };
  }, []);

  return dispositivoToque;
}

export default function useMovimentoSimplificado() {
  const prefereReducaoMovimento = useReducedMotion();
  const dispositivoToque = useDispositivoToque();

  return Boolean(prefereReducaoMovimento || dispositivoToque);
}
