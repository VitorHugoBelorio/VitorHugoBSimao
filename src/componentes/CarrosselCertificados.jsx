import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "motion/react";

const velocidadeAutomatica = 32;
const impulsoManual = 520;
const atrasoAnimacaoAutomatica = 700;

export default function CarrosselCertificados({ certificados }) {
  const listaRef = useRef(null);
  const botaoFecharRef = useRef(null);
  const elementoOrigemRef = useRef(null);
  const ultimoTempoRef = useRef(0);
  const impulsoRef = useRef(0);
  const prefereReducaoMovimento = useReducedMotion();
  const [certificadoAberto, setCertificadoAberto] = useState(null);

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

  const moverCarrossel = useCallback(
    (direcao) => {
      const lista = listaRef.current;

      if (!lista) {
        return;
      }

      if (direcao < 0 && lista.scrollLeft < 24 && certificados.length > 1) {
        lista.scrollLeft = lista.scrollWidth / 2;
      }

      if (prefereReducaoMovimento) {
        lista.scrollLeft += direcao * impulsoManual;
        ajustarLoop();
        return;
      }

      impulsoRef.current += direcao * impulsoManual;
      ajustarLoop();
    },
    [ajustarLoop, certificados.length, prefereReducaoMovimento],
  );

  const abrirCertificado = useCallback((certificado, elementoOrigem) => {
    if (certificado.imagem) {
      elementoOrigemRef.current = elementoOrigem;
      setCertificadoAberto(certificado);
    }
  }, []);

  const fecharCertificado = useCallback(() => {
    setCertificadoAberto(null);
  }, []);

  const controlarTeclaCard = useCallback(
    (evento, certificado) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        abrirCertificado(certificado, evento.currentTarget);
      }
    },
    [abrirCertificado],
  );

  useEffect(() => {
    if (prefereReducaoMovimento || certificadoAberto || certificados.length <= 1) {
      return undefined;
    }

    let quadroAnimacao;
    let temporizadorInicio;

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

    temporizadorInicio = window.setTimeout(() => {
      ultimoTempoRef.current = 0;
      quadroAnimacao = requestAnimationFrame(animar);
    }, atrasoAnimacaoAutomatica);

    return () => {
      window.clearTimeout(temporizadorInicio);
      cancelAnimationFrame(quadroAnimacao);
    };
  }, [ajustarLoop, certificadoAberto, certificados.length, prefereReducaoMovimento]);

  useEffect(() => {
    if (!certificadoAberto) {
      return undefined;
    }

    function fecharComEsc(evento) {
      if (evento.key === "Escape") {
        fecharCertificado();
      }
    }

    document.addEventListener("keydown", fecharComEsc);
    document.body.classList.add("lightbox-certificado-aberto");
    const raizAplicacao = document.getElementById("root");
    raizAplicacao?.setAttribute("inert", "");
    const quadroFoco = requestAnimationFrame(() => botaoFecharRef.current?.focus());

    return () => {
      cancelAnimationFrame(quadroFoco);
      document.removeEventListener("keydown", fecharComEsc);
      document.body.classList.remove("lightbox-certificado-aberto");
      raizAplicacao?.removeAttribute("inert");
      requestAnimationFrame(() => elementoOrigemRef.current?.focus());
    };
  }, [certificadoAberto, fecharCertificado]);

  const lightboxCertificado =
    certificadoAberto &&
    createPortal(
      <div
        className="certificado-lightbox"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificado-lightbox-titulo"
      >
        <button
          className="certificado-lightbox__fundo"
          type="button"
          aria-label="Fechar visualização do certificado"
          onClick={fecharCertificado}
        />
        <div className="certificado-lightbox__conteudo">
          <div className="certificado-lightbox__topo">
            <div>
              <span>{certificadoAberto.emissor}</span>
              <h2 id="certificado-lightbox-titulo">{certificadoAberto.titulo}</h2>
            </div>
            <button
              ref={botaoFecharRef}
              className="certificado-lightbox__fechar"
              type="button"
              aria-label="Fechar visualização do certificado"
              onClick={fecharCertificado}
            >
              Fechar
            </button>
          </div>
          <img
            src={certificadoAberto.imagem}
            alt={`${certificadoAberto.titulo} - ${certificadoAberto.emissor}`}
            decoding="async"
          />
        </div>
      </div>,
      document.body,
    );

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
          {certificadosEmLoop.map((certificado, indice) => {
            const deveExibirPeriodo = Boolean(certificado.periodo);
            const ehDuplicado = certificados.length > 1 && indice >= certificados.length;

            return (
              <article
                className="certificado-card"
                key={`${certificado.titulo}-${indice}`}
                role="button"
                tabIndex={ehDuplicado ? -1 : 0}
                aria-hidden={ehDuplicado ? "true" : undefined}
                onClick={(evento) => abrirCertificado(certificado, evento.currentTarget)}
                onKeyDown={(evento) => controlarTeclaCard(evento, certificado)}
                aria-label={`Abrir certificado ${certificado.titulo} em tela cheia`}
              >
                <div className="certificado-card__visual" aria-hidden="true">
                  <div className="certificado-card__placeholder">
                    <span />
                    <span />
                    <span />
                  </div>
                  {certificado.imagem && (
                    <img
                      src={certificado.imagem}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      onError={(evento) => {
                        evento.currentTarget.style.opacity = "0";
                      }}
                    />
                  )}
                </div>

                <div className="certificado-card__conteudo">
                  <div className="certificado-card__meta">
                    <span>{certificado.emissor}</span>
                    {deveExibirPeriodo && <span>{certificado.periodo}</span>}
                  </div>
                  <h3>{certificado.titulo}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {lightboxCertificado}
    </div>
  );
}
