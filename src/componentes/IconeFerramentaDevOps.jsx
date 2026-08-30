const icones = {
  Git: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7h6a4 4 0 0 1 4 4v6" />
      <path d="M7 7v10" />
      <circle cx="7" cy="7" r="2.4" />
      <circle cx="7" cy="17" r="2.4" />
      <circle cx="17" cy="17" r="2.4" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.2 19.4c-4.2 1.1-4.2-2.1-5.8-2.5" />
      <path d="M14.8 21v-3.1c0-.9.3-1.6-.4-2.2 2.6-.3 5.2-1.2 5.2-5.3 0-1.2-.4-2.2-1.1-3 .1-.3.5-1.5-.1-3 0 0-1-.3-3.1 1.1a10.1 10.1 0 0 0-5.6 0C7.6 4.1 6.7 4.4 6.7 4.4c-.6 1.5-.2 2.7-.1 3a4.4 4.4 0 0 0-1.1 3c0 4.1 2.6 5 5.2 5.3-.5.4-.8 1.1-.8 2.1V21" />
    </svg>
  ),
  Gitea: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8.2h12l-.8 8.1a3 3 0 0 1-3 2.7H9.8a3 3 0 0 1-3-2.7L6 8.2Z" />
      <path d="M8.1 8.2C8.5 5.9 10 4.6 12 4.6s3.5 1.3 3.9 3.6" />
      <path d="M10 13h2.2a2 2 0 0 1 2 2v2" />
      <circle cx="10" cy="13" r="1.1" />
      <circle cx="14.2" cy="17" r="1.1" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5h14c-.5 3.7-3.1 5.8-7.1 5.8-3.5 0-6.1-1.7-6.9-5.8Z" />
      <path d="M7.2 10.1h2.2v2.4H7.2z" />
      <path d="M10.2 10.1h2.2v2.4h-2.2z" />
      <path d="M13.2 10.1h2.2v2.4h-2.2z" />
      <path d="M10.2 7.2h2.2v2.4h-2.2z" />
      <path d="M18.4 10.8c.9-.1 1.6.2 2.2.9" />
    </svg>
  ),
  "Docker Compose": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.2 7.2h4.6v4.6H6.2z" />
      <path d="M13.2 7.2h4.6v4.6h-4.6z" />
      <path d="M6.2 14.2h4.6v4.6H6.2z" />
      <path d="M13.2 14.2h4.6v4.6h-4.6z" />
      <path d="M10.8 9.5h2.4" />
      <path d="M10.8 16.5h2.4" />
    </svg>
  ),
  PM2: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 7.4h14v9.2H5z" />
      <path d="M8 10.1h2.8" />
      <path d="M8 13.9h5.8" />
      <path d="M16 10.1h.1" />
      <path d="M16 13.9h.1" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5.4 20.1 19H3.9L12 5.4Z" />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 13.6c0-2 1.5-3.6 3.5-3.6.5-2.3 2.3-3.8 4.7-3.8 2.8 0 5 2.1 5.1 4.8a3.2 3.2 0 0 1-.3 6.4h-13" />
      <path d="M7 17.4c2.9 1.8 7.1 1.8 10 0" />
    </svg>
  ),
  Datadog: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 7h12v10H6z" />
      <path d="m8.4 14 2-3 2.5 2.3 2.7-4.2" />
      <path d="M8.2 19h7.6" />
      <path d="M12 17v2" />
    </svg>
  ),
  Grafana: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.7 5.2a6.4 6.4 0 0 1 5.6 9.5" />
      <path d="M13.2 8.6a3.8 3.8 0 1 1-4.9 4.8" />
      <path d="M12 11.4a1.7 1.7 0 1 1-1.7 1.7" />
      <path d="M8.2 5.9c1.2-.7 2.2-.9 3.8-.9" />
    </svg>
  ),
};

export default function IconeFerramentaDevOps({ nome }) {
  return icones[nome] || null;
}
