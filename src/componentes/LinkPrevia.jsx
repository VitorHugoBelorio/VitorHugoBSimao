import { Link } from "react-router-dom";
import Revelar from "./Revelar.jsx";

export default function LinkPrevia({ item, indice }) {
  return (
    <Revelar como="article" className="linha-previa" atraso={indice * 0.08}>
      <div>
        <span className="marcador">{item.marcador}</span>
        <h3>{item.titulo}</h3>
      </div>
      <p>{item.texto}</p>
      <Link className="link-texto" to={item.caminho}>
        {item.acao}
        <span aria-hidden="true">→</span>
      </Link>
    </Revelar>
  );
}
