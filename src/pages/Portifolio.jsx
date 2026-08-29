import Revelar from "../componentes/Revelar.jsx";
import CabecalhoSecao from "../componentes/CabecalhoSecao.jsx";
import CarrosselCertificados from "../componentes/CarrosselCertificados.jsx";
import { certificados, itensTrajetoria } from "../dados/conteudo.js";

export default function Portifolio() {
  return (
    <>
      <section className="abertura-pagina abertura-pagina--compacta">
        <Revelar className="abertura-pagina__conteudo">
          <p className="marcador">Portfólio</p>
          <h1>Minha trajetória no mundo tec.</h1>
          <p>
              Conheça como foi o meu desenvolvimento no mundo da tecnologia.
          </p>
        </Revelar>
      </section>

      <section className="secao-conteudo">
        <CabecalhoSecao
          marcador="Linha do tempo"
          titulo="Alguns dos princípais marcos da minha carreira."
          texto=""
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

      <section className="secao-conteudo secao-conteudo--compacta">
        <CabecalhoSecao
          marcador="Certificações"
          titulo="Certificações"
          texto="Alguns dos meus certificados de maior relevância."
        />

        <Revelar atraso={0.08}>
          <CarrosselCertificados certificados={certificados} />
        </Revelar>
      </section>
    </>
  );
}
