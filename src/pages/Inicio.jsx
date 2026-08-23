import { Link } from "react-router-dom";
import PalavrasAnimadas from "../componentes/PalavrasAnimadas.jsx";
import FotoPerfil from "../componentes/FotoPerfil.jsx";
import LinksSociais from "../componentes/LinksSociais.jsx";
import LinkPrevia from "../componentes/LinkPrevia.jsx";
import Revelar from "../componentes/Revelar.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import { previasInicio } from "../dados/conteudo.js";

export default function Inicio() {
  return (
    <>
      <section className="secao-principal" aria-labelledby="titulo-principal">
        <div className="secao-principal__conteudo">
          <Revelar className="secao-principal__meta">
            <span>Software Engineer</span>
            <span>Backend · Cloud · AI · Full Stack</span>
          </Revelar>

          <div className="secao-principal__titulo">
            <PalavrasAnimadas
              id="titulo-principal"
              texto="Vitor Hugo"
              className="titulo-principal"
            />
          </div>

          <Revelar className="secao-principal__texto" atraso={0.38}>
            <p>
              [Adicionar descrição curta sobre atuação, interesses e momento
              profissional.]
            </p>
            <div className="secao-principal__acoes" aria-label="Atalhos principais">
              <Link className="link-texto" to="/portfolio">
                Ver trajetória
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="link-texto link-texto--discreto" to="/artigos">
                Ler artigos
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <LinksSociais />
          </Revelar>
        </div>

        <FotoPerfil />
      </section>

      <section className="secao-conteudo secao-conteudo--primeira">
        <CabecalhoSecao
          marcador="Estrutura inicial"
          titulo="Uma base visual para evoluir com calma."
          texto="As áreas principais já ficam preparadas para receber conteúdo real sem exigir banco de dados, login ou painel administrativo."
        />
        <div className="lista-previas">
          {previasInicio.map((item, indice) => (
            <LinkPrevia item={item} indice={indice} key={item.caminho} />
          ))}
        </div>
      </section>
    </>
  );
}
