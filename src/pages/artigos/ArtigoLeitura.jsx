import { Link, Navigate, useParams } from "react-router-dom";
import Revelar from "../../componentes/Revelar.jsx";
import { artigos } from "../../dados/conteudo.js";

export default function ArtigoLeitura() {
  const { slug } = useParams();
  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    return <Navigate to="/artigos" replace />;
  }

  return (
    <article className="artigo-leitura">
      <section className="artigo-leitura__hero" aria-labelledby="titulo-artigo">
        <Revelar className="artigo-leitura__cabecalho">
          <Link className="link-texto link-texto--voltar" to="/artigos">
            <span aria-hidden="true">←</span>
            Artigos
          </Link>

          <div className="artigo-leitura__meta">
            <span>{artigo.rotulo}</span>
            <span>{artigo.data}</span>
          </div>

          <h1 id="titulo-artigo">{artigo.titulo}</h1>
        </Revelar>
      </section>

      <section className="artigo-leitura__corpo">
        <Revelar className="artigo-leitura__destaque">
          <p>{artigo.destaque}</p>
        </Revelar>

        <div className="artigo-leitura__texto">
          {artigo.secoes.map((secao, indice) => (
            <Revelar
              como="section"
              className="artigo-secao"
              atraso={indice * 0.06}
              key={secao.titulo}
            >
              <span className="artigo-secao__indice">{String(indice + 1).padStart(2, "0")}</span>
              <h2>{secao.titulo}</h2>
              {secao.paragrafos.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </Revelar>
          ))}

          <Revelar className="artigo-leitura__pontos" atraso={0.12}>
            <p className="marcador">Pontos principais</p>
            <ul>
              {artigo.pontos.map((ponto) => (
                <li key={ponto}>{ponto}</li>
              ))}
            </ul>
          </Revelar>
        </div>
      </section>
    </article>
  );
}
