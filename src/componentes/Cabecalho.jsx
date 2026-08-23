import { NavLink } from "react-router-dom";
import { itensNavegacao } from "../dados/navegacao.js";

export default function Cabecalho() {
  return (
    <header className="cabecalho-site" aria-label="Navegação principal">
      <div className="cabecalho-site__interno">
        <NavLink className="marca" to="/" aria-label="Ir para o início">
          <span>VH</span>
        </NavLink>

        <nav className="navegacao-principal">
          {itensNavegacao.map((item) => (
            <NavLink
              key={item.caminho}
              to={item.caminho}
              className={({ isActive: estaAtivo }) =>
                estaAtivo
                  ? "navegacao-principal__link ativo"
                  : "navegacao-principal__link"
              }
              end={item.caminho === "/"}
            >
              {item.rotulo}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
