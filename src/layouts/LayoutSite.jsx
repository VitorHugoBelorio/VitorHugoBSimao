import Cabecalho from "../componentes/Cabecalho.jsx";

export default function LayoutSite({ children, pathname }) {
  const estaNaTelaInicial = pathname === "/";

  return (
    <div className={estaNaTelaInicial ? "estrutura-site estrutura-site--inicio" : "estrutura-site"}>
      <a className="link-pular" href="#conteudo">
        Ir para o conteúdo
      </a>
      {!estaNaTelaInicial && <Cabecalho />}
      {children}
      {!estaNaTelaInicial && (
        <footer className="rodape-site">
          <div className="rodape-site__interno">
            <span>Vitor Hugo B Simão</span>
            <span>Desenvolvedor Full-Stack</span>
          </div>
        </footer>
      )}
    </div>
  );
}
