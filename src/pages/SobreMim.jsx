import { Link } from "react-router-dom";
import PalavrasAnimadas from "../componentes/PalavrasAnimadas.jsx";
import FotoPerfil from "../componentes/FotoPerfil.jsx";
import LinksSociais from "../componentes/LinksSociais.jsx";
import Revelar from "../componentes/Revelar.jsx";
import { alemDoCodigo } from "../dados/conteudo.js";

export default function SobreMim() {
  return (
    <>
      <section className="secao-principal" aria-labelledby="titulo-sobre-mim">
        <div className="secao-principal__conteudo">
          <Revelar className="secao-principal__meta">
            <span>Full-Stack</span>
          </Revelar>

          <div className="secao-principal__titulo">
            <PalavrasAnimadas
              id="titulo-sobre-mim"
              texto="Vitor Hugo Belório Simão"
              linhas={["Vitor Hugo", "Belório Simão"]}
              className="titulo-principal"
            />
          </div>

          <Revelar className="secao-principal__texto" atraso={0.38}>
            <p>
              Sou formado no curso de Análise e Desenvolvimento de Sistemas pela FATEC - Presidente
              Prudente e atualmente atuo no mercado de tecnologia como desenvolvedor de software
              full-stack, na modalidade PJ. <br />
              Amo trabalhar e estudar sobre tecnologia e solucionar problemas.
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
        <div className="sobre-detalhes sobre-detalhes--simples">
          <Revelar className="sobre-detalhes__coluna sobre-detalhes__coluna--unica">
            <p className="marcador">Além do código</p>
            <h2>Um pouco do que também me forma.</h2>
            <p className="sobre-detalhes__introducao">
              A tecnologia faz parte da minha rotina, mas também gosto de cultivar interesses,
              hábitos e valores que influenciam minha forma de aprender, colaborar e construir
              soluções com mais consciência, levando a vida além do código.
            </p>

            <div className="sobre-detalhes__lista">
              {alemDoCodigo.map((item) => (
                <article className="sobre-detalhe sobre-detalhe--pessoal" key={item.titulo}>
                  <span className="sobre-detalhe__marcador">{item.marcador}</span>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                </article>
              ))}
            </div>
          </Revelar>
        </div>
      </section>
    </>
  );
}
