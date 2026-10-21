import { Link } from "react-router-dom";
import PalavrasAnimadas from "../componentes/PalavrasAnimadas.jsx";
import Revelar from "../componentes/Revelar.jsx";

export default function Inicio() {
  return (
    <section className="entrada-inicial" aria-labelledby="titulo-inicial">
      <div className="entrada-inicial__cena" aria-hidden="true">
        <span className="lamina-abstrata lamina-abstrata--um" />
        <span className="lamina-abstrata lamina-abstrata--dois" />
        <span className="lamina-abstrata lamina-abstrata--tres" />
        <span className="risco-luz risco-luz--um" />
        <span className="risco-luz risco-luz--dois" />
      </div>

      <Revelar className="entrada-inicial__conteudo" quantidade={0.8}>
        <p className="entrada-inicial__meta">Desenvolvedor Full-Stack</p>
        <PalavrasAnimadas
          id="titulo-inicial"
          texto="Olá, eu sou Vitor Hugo"
          linhas={["Olá, eu sou", "Vitor Hugo"]}
          className="entrada-inicial__titulo"
          atraso={0.12}
        />
        <p className="entrada-inicial__texto">
          Desenvolvedor de software full-stack, atualmente atuando como PJ no mercado de desenvolvimento.
        </p>
        <div className="entrada-inicial__acoes" aria-label="Atalhos principais">
          <Link className="link-texto" to="/projetos">
            Ver projetos
            <span aria-hidden="true">→</span>
          </Link>
          <Link className="link-texto link-texto--discreto" to="/sobre-mim">
            Saiba mais sobre mim
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Revelar>
    </section>
  );
}
