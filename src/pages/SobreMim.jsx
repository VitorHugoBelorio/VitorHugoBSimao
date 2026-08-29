import { Link } from "react-router-dom";
import PalavrasAnimadas from "../componentes/PalavrasAnimadas.jsx";
import FotoPerfil from "../componentes/FotoPerfil.jsx";
import LinksSociais from "../componentes/LinksSociais.jsx";
import Revelar from "../componentes/Revelar.jsx";
import { alemDoCodigo, pilaresTecnicos } from "../dados/conteudo.js";

export default function SobreMim() {
  return (
    <>
      <section className="secao-principal" aria-labelledby="titulo-sobre-mim">
        <div className="secao-principal__conteudo">
          <Revelar className="secao-principal__meta">
            <span>Software Engineer</span>
            <span>Backend · Cloud · AI · Full Stack</span>
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
              Sou formado no curso de Análise e Desenvolvimento de Sistemas pela FATEC - Presidente Prudente e atualmente atuo no mercado de tecnologia como desenvolvedor de software full-stack, na modalidade PJ. <br/>
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
        <div className="sobre-detalhes">
          <Revelar className="sobre-detalhes__coluna">
            <p className="marcador">Como eu penso e trabalho</p>
            <h2>Construção técnica com intenção.</h2>
            <p className="sobre-detalhes__introducao">
              [Preencher depois] Um recorte curto sobre sua forma de trabalhar,
              estudar e tomar decisões técnicas sem deixar a seção extensa.
            </p>

            <div className="sobre-detalhes__lista">
              {pilaresTecnicos.map((item) => (
                <article className="sobre-detalhe" key={item.titulo}>
                  <span className="sobre-detalhe__marcador">{item.marcador}</span>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                </article>
              ))}
            </div>
          </Revelar>

          <Revelar className="sobre-detalhes__coluna sobre-detalhes__coluna--pessoal" atraso={0.12}>
            <p className="marcador">Além do código</p>
            <h2>Um pouco do que também me forma.</h2>
            <p className="sobre-detalhes__introducao">
              [Preencher depois] Uma abertura breve para mostrar personalidade,
              interesses e motivações sem sair do tom profissional.
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
