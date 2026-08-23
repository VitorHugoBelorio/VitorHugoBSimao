import Revelar from "../componentes/Revelar.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import { projetos, gruposHabilidades } from "../dados/conteudo.js";

export default function Projetos() {
  return (
    <>
      <section className="abertura-pagina abertura-pagina--ampla">
        <Revelar className="abertura-pagina__conteudo">
          <p className="marcador">Projetos</p>
          <h1>Construções técnicas com contexto.</h1>
          <p>
            A estrutura separa projetos e conhecimentos por intenção, tecnologia
            e participação, sem transformar a página em uma vitrine genérica de
            logos.
          </p>
        </Revelar>
      </section>

      <section className="secao-conteudo">
        <CabecalhoSecao
          marcador="Projetos"
          titulo="Espaços para casos reais."
          texto="Cada linha poderá receber objetivo, problema resolvido, stack e sua participação."
        />

        <div className="lista-projetos">
          {projetos.map((projeto, indice) => (
            <Revelar
              como="article"
              className="linha-projeto"
              atraso={indice * 0.08}
              key={projeto.titulo}
            >
              <span className="linha-projeto__tipo">{projeto.tipo}</span>
              <div>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
              </div>
              <span className="linha-projeto__meta">{projeto.meta}</span>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="secao-conteudo secao-conteudo--compacta">
        <CabecalhoSecao
          marcador="Skills"
          titulo="Conhecimento explicado, não empilhado."
          texto="A base já deixa espaço para descrever por que e como cada tecnologia entra no seu trabalho."
        />

        <div className="grade-habilidades">
          {gruposHabilidades.map((grupo, indice) => (
            <Revelar
              como="article"
              className="grupo-habilidades"
              atraso={indice * 0.06}
              key={grupo.titulo}
            >
              <h3>{grupo.titulo}</h3>
              <ul>
                {grupo.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Revelar>
          ))}
        </div>
      </section>
    </>
  );
}
