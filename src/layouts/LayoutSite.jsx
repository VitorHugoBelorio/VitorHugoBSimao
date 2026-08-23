import Cabecalho from "../componentes/Cabecalho.jsx";

export default function LayoutSite({ children }) {
  return (
    <div className="estrutura-site">
      <a className="link-pular" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Cabecalho />
      {children}
      <footer className="rodape-site">
        <div className="rodape-site__interno">
          <span>Vitor Hugo</span>
          <span>Software Engineering · Creative Development · Minimalism</span>
        </div>
      </footer>
    </div>
  );
}
