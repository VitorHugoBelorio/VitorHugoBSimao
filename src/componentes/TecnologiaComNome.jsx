import { useState } from "react";
import IconeTecnologia from "./IconeTecnologia.jsx";

export default function TecnologiaComNome({ nome, icone = nome, contexto }) {
  const [mouseSobre, setMouseSobre] = useState(false);
  const [focado, setFocado] = useState(false);
  const [dispensado, setDispensado] = useState(false);
  const mostrarNome = (mouseSobre || focado) && !dispensado;

  return (
    <div
      className="tecnologia-com-nome"
      data-nome-visivel={mostrarNome}
      onPointerEnter={(evento) => {
        if (evento.pointerType !== "touch") {
          setMouseSobre(true);
          setDispensado(false);
        }
      }}
      onPointerLeave={() => setMouseSobre(false)}
    >
      <button
        type="button"
        className="item-habilidade__icone"
        aria-label={nome}
        onFocus={() => {
          setFocado(true);
          setDispensado(false);
        }}
        onBlur={() => setFocado(false)}
        onClick={(evento) => {
          // O foco explícito também permite consultar o nome por toque.
          evento.currentTarget.focus();
          setDispensado(false);
        }}
        onKeyDown={(evento) => {
          if (evento.key === "Escape") {
            setDispensado(true);
          }
        }}
      >
        <IconeTecnologia nome={icone} />
      </button>
      <div className="tecnologia-com-nome__texto">
        <span className="tecnologia-com-nome__rotulo" aria-hidden="true">
          {nome}
        </span>
        <span className="item-habilidade__contexto">{contexto}</span>
      </div>
    </div>
  );
}
