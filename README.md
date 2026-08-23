# Vitor Hugo Portfólio

Portfólio pessoal estático em React, pensado para páginas informativas, animações sutis e deploy simples sem banco de dados, backend, autenticação ou CMS.

## Comandos

```bash
npm run dev
npm run build
npm run preview
```

## Publicação

O build gera apenas arquivos estáticos em `dist`.

Para Vercel, o arquivo `vercel.json` mantém fallback de SPA para rotas como `/portfolio`, `/projetos` e `/artigos`.

Para GitHub Pages, o workflow em `.github/workflows/publicar-github-pages.yml` publica o `dist` a partir da branch `main` e configura o base path usando o nome do repositório.
