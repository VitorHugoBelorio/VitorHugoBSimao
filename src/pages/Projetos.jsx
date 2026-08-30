import Revelar from "../componentes/Revelar.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import IconeFerramentaDevOps from "../componentes/IconeFerramentaDevOps.jsx";
import { ferramentasDevOps, gruposHabilidades, projetos } from "../dados/conteudo.js";

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
          titulo="Tecnologias que utilizo"
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
                  <li
                    className="item-habilidade"
                    key={item.nome}
                    style={{
                      "--nivel-habilidade": `${item.uso}%`,
                      "--cor-habilidade": item.cor,
                      "--sombra-habilidade": item.sombra,
                    }}
                  >
                    <div className="item-habilidade__cabecalho">
                      <div className="item-habilidade__identidade">
                        {item.icone ? (
                          <span className="item-habilidade__icone" aria-hidden="true">
                            {item.icone}
                          </span>
                        ) : (
                          <span>{item.nome}</span>
                        )}
                      </div>
                      <span>{item.contexto}</span>
                    </div>
                    <div
                      className="item-habilidade__barra"
                      aria-label={`${item.nome}: ${item.uso}% de uso no desenvolvimento`}
                      role="img"
                    >
                      <span />
                    </div>
                  </li>
                ))}
              </ul>
            </Revelar>
          ))}
        </div>

        <Revelar className="ferramentas-devops" atraso={0.18}>
          <div className="ferramentas-devops__cabecalho">
            <p className="marcador">DevOps e entrega</p>
            <h3>Ferramentas que entram no meu fluxo fullstack.</h3>
            <p>
              Organização por uso prático no desenvolvimento, deploy,
              infraestrutura e acompanhamento das aplicações.
            </p>
          </div>

          <div className="ferramentas-devops__grade">
            {ferramentasDevOps.map((grupo) => (
              <article className="grupo-devops" key={grupo.categoria}>
                <div className="grupo-devops__cabecalho">
                  <h4>{grupo.categoria}</h4>
                  <p>{grupo.descricao}</p>
                </div>

                <ul className="grupo-devops__lista">
                  {grupo.itens.map((ferramenta) => (
                    <li
                      className="ferramenta-devops"
                      key={ferramenta.nome}
                      style={{ "--cor-ferramenta": ferramenta.cor }}
                    >
                      <span className="ferramenta-devops__icone">
                        <IconeFerramentaDevOps nome={ferramenta.nome} />
                      </span>
                      {ferramenta.nome}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Revelar>
      </section>
    </>
  );
}
