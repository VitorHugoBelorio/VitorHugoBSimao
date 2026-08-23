import Revelar from "../componentes/Revelar.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import { artigos } from "../dados/conteudo.js";

export default function Artigos() {
  return (
    <>
      <section className="abertura-pagina abertura-pagina--editorial">
        <Revelar className="abertura-pagina__conteudo">
          <p className="marcador">Artigos</p>
          <h1>Notas, estudos e opinião técnica.</h1>
          <p>
            Uma área mais editorial, com menos efeitos e mais espaço para leitura,
            preparada para artigos escritos diretamente no código enquanto o
            projeto evolui.
          </p>
        </Revelar>
      </section>

      <section className="secao-conteudo">
        <CabecalhoSecao
          marcador="Editorial"
          titulo="Publicações futuras."
          texto="A lista está pronta para receber textos reais sem depender de CMS ou banco de dados nesta etapa."
        />

        <div className="lista-artigos">
          {artigos.map((artigo, indice) => (
            <Revelar
              como="article"
              className="linha-artigo"
              atraso={indice * 0.08}
              key={artigo.titulo}
            >
              <div className="linha-artigo__indice">{String(indice + 1).padStart(2, "0")}</div>
              <div className="linha-artigo__conteudo">
                <div className="linha-artigo__meta">
                  <span>{artigo.rotulo}</span>
                  <span>{artigo.status}</span>
                </div>
                <h3>{artigo.titulo}</h3>
                <p>{artigo.descricao}</p>
              </div>
              <span className="linha-artigo__seta" aria-hidden="true">
                →
              </span>
            </Revelar>
          ))}
        </div>
      </section>
    </>
  );
}
