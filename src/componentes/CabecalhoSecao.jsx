import Revelar from "./Revelar.jsx";

export default function CabecalhoSecao({ marcador, titulo, texto }) {
  return (
    <Revelar como="header" className="cabecalho-secao">
      <p className="marcador">{marcador}</p>
      <h2>{titulo}</h2>
      {texto ? <p>{texto}</p> : null}
    </Revelar>
  );
}
