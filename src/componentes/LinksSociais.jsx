import { redesSociais } from "../dados/perfil.js";

const iconesRedes = {
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.5" cy="7.5" r="0.8" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 10v8" />
      <path d="M6.5 6.5v.1" />
      <path d="M11 18v-8" />
      <path d="M11 13.6c0-2.4 1.5-3.8 3.5-3.8 2.1 0 3 1.4 3 3.7V18" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 19c-4 1.2-4-2-5.6-2.4" />
      <path d="M15 21v-3.4c0-1 .3-1.7-.4-2.4 2.5-.3 5.1-1.2 5.1-5.4 0-1.2-.4-2.2-1.1-3 .1-.3.5-1.5-.1-3 0 0-.9-.3-3.1 1.1a10.6 10.6 0 0 0-5.6 0C7.6 3.1 6.7 3.4 6.7 3.4c-.6 1.5-.2 2.7-.1 3a4.3 4.3 0 0 0-1.1 3c0 4.2 2.6 5.1 5.1 5.4-.4.4-.7 1-.7 2V21" />
    </svg>
  ),
};

export default function LinksSociais() {
  return (
    <div className="links-sociais" aria-label="Redes sociais">
      {redesSociais.map((rede) => {
        const possuiUrl = Boolean(rede.url);
        const conteudo = (
          <>
            <span className="link-social__icone">{iconesRedes[rede.nome]}</span>
            <span className="link-social__texto">{rede.rotulo}</span>
          </>
        );

        if (!possuiUrl) {
          return (
            <span className="link-social link-social--placeholder" key={rede.nome}>
              {conteudo}
            </span>
          );
        }

        return (
          <a
            className="link-social"
            href={rede.url}
            target="_blank"
            rel="noreferrer"
            key={rede.nome}
          >
            {conteudo}
          </a>
        );
      })}
    </div>
  );
}
