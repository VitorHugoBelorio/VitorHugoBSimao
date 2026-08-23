import Revelar from "../componentes/Revelar.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import { itensTrajetoria } from "../dados/conteudo.js";

export default function Portifolio() {
  return (
    <>
      <section className="abertura-pagina abertura-pagina--compacta">
        <Revelar className="abertura-pagina__conteudo">
          <p className="marcador">Portfólio</p>
          <h1>Trajetória em construção.</h1>
          <p>
            Um espaço para organizar formação, estágios, trabalhos, experiências
            curriculares e iniciativas extracurriculares conforme o conteúdo real
            for sendo definido.
          </p>
        </Revelar>
      </section>

      <section className="secao-conteudo">
        <CabecalhoSecao
          marcador="Linha do tempo"
          titulo="Experiências sem ficção."
          texto="Os blocos abaixo são placeholders claros para você substituir por dados reais quando quiser."
        />

        <ol className="lista-linha-tempo">
          {itensTrajetoria.map((item, indice) => (
            <Revelar
              como="li"
              className="item-linha-tempo"
              atraso={indice * 0.07}
              key={indice}
            >
              <div className="item-linha-tempo__ponto" aria-hidden="true" />
              <div className="item-linha-tempo__corpo">
                <div className="item-linha-tempo__meta">
                  <span>{item.periodo}</span>
                  <span>{item.meta}</span>
                </div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            </Revelar>
          ))}
        </ol>
      </section>
    </>
  );
}
