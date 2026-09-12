import csharp from "../imagens/tecnologias/csharp.svg";
import python from "../imagens/tecnologias/python.svg";
import javascript from "../imagens/tecnologias/javascript.svg";
import php from "../imagens/tecnologias/php.svg";
import sqlServer from "../imagens/tecnologias/sql-server.svg";
import mysql from "../imagens/tecnologias/mysql.svg";
import postgresql from "../imagens/tecnologias/postgresql.svg";
import aws from "../imagens/tecnologias/aws.svg";
import googleCloud from "../imagens/tecnologias/google-cloud.svg";
import react from "../imagens/tecnologias/react.svg";
import blazor from "../imagens/tecnologias/blazor.svg";
import laravel from "../imagens/tecnologias/laravel.svg";

const icones = {
  "C#": csharp,
  Python: python,
  JavaScript: javascript,
  PHP: php,
  "SQL Server": sqlServer,
  MySQL: mysql,
  PostgreSQL: postgresql,
  AWS: aws,
  "Google Cloud": googleCloud,
  React: react,
  Blazor: blazor,
  Blade: laravel,
};

export default function IconeTecnologia({ nome }) {
  const icone = icones[nome];

  if (!icone) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16" />
      </svg>
    );
  }

  return <img src={icone} alt="" aria-hidden="true" width="28" height="28" draggable={false} />;
}
