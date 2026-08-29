import { useCallback, useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "motion/react";

const velocidadeAutomatica = 32;
const impulsoManual = 520;

export default function CarrosselCertificados({ certificados }) {
  const listaRef = useRef(null);
  const ultimoTempoRef = useRef(0);
  const impulsoRef = useRef(0);
  const prefereReducaoMovimento = useReducedMotion();

  const certificadosEmLoop = useMemo(() => {
    if (certificados.length <= 1) {
      return certificados;
    }

    return [...certificados, ...certificados];
  }, [certificados]);

  const ajustarLoop = useCallback(() => {
    const lista = listaRef.current;

    if (!lista || certificados.length <= 1) {
      return;
    }

    const metadeRolagem = lista.scrollWidth / 2;

    if (lista.scrollLeft >= metadeRolagem) {
      lista.scrollLeft -= metadeRolagem;
    }

    if (lista.scrollLeft <= 0) {
      lista.scrollLeft += metadeRolagem;
    }
  }, [certificados.length]);

  const moverCarrossel = useCallback((direcao) => {
    const lista = listaRef.current;

    if (!lista) {
      return;
    }

    if (direcao < 0 && lista.scrollLeft < 24 && certificados.length > 1) {
      lista.scrollLeft = lista.scrollWidth / 2;
    }

    impulsoRef.current += direcao * impulsoManual;
    ajustarLoop();
  }, [ajustarLoop, certificados.length]);

  useEffect(() => {
    if (prefereReducaoMovimento || certificados.length <= 1) {
      return undefined;
    }

    let quadroAnimacao;

    function animar(tempo) {
      const lista = listaRef.current;

      if (!ultimoTempoRef.current) {
        ultimoTempoRef.current = tempo;
      }

      const delta = Math.min(tempo - ultimoTempoRef.current, 80);
      ultimoTempoRef.current = tempo;

      if (lista) {
        const impulsoAtual = impulsoRef.current;

        lista.scrollLeft += ((velocidadeAutomatica + impulsoAtual) * delta) / 1000;
        impulsoRef.current *= Math.exp(-delta / 520);

        if (Math.abs(impulsoRef.current) < 4) {
          impulsoRef.current = 0;
        }

        ajustarLoop();
      }

      quadroAnimacao = requestAnimationFrame(animar);
    }

    quadroAnimacao = requestAnimationFrame(animar);

    return () => cancelAnimationFrame(quadroAnimacao);
  }, [ajustarLoop, certificados.length, prefereReducaoMovimento]);

  return (
    <div className="carrossel-certificados">
      <div className="carrossel-certificados__topo">
        <div className="carrossel-certificados__controles" aria-label="Controle do carrossel">
          <button
            className="botao-carrossel"
            type="button"
            aria-label="Ver certificados anteriores"
            onClick={() => moverCarrossel(-1)}
          >
            <span className="botao-carrossel__icone botao-carrossel__icone--anterior" />
          </button>
          <button
            className="botao-carrossel"
            type="button"
            aria-label="Ver próximos certificados"
            onClick={() => moverCarrossel(1)}
          >
            <span className="botao-carrossel__icone botao-carrossel__icone--proximo" />
          </button>
        </div>
      </div>

      <div className="carrossel-certificados__janela">
        <div
          className="carrossel-certificados__faixa"
          ref={listaRef}
          onScroll={ajustarLoop}
          tabIndex={0}
          aria-label="Lista horizontal de certificados"
        >
          {certificadosEmLoop.map((certificado, indice) => (
            <article className="certificado-card" key={`${certificado.titulo}-${indice}`}>
              <div className="certificado-card__visual" aria-hidden="true">
                {certificado.imagem ? (
                  <img src={certificado.imagem} alt="" />
                ) : (
                  <div className="certificado-card__placeholder">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>

              <div className="certificado-card__conteudo">
                <div className="certificado-card__meta">
                  <span>{certificado.emissor}</span>
                  <span>{certificado.periodo}</span>
                </div>
                <h3>{certificado.titulo}</h3>
                <p>{certificado.descricao}</p>
                <ul className="certificado-card__etiquetas" aria-label="Temas do certificado">
                  {certificado.etiquetas.map((etiqueta) => (
                    <li key={etiqueta}>{etiqueta}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
