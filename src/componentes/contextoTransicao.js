import { createContext } from "react";

// Compartilha o movimento da aba com os blocos, sem acoplar as páginas ao roteador.
export const ContextoTransicao = createContext({ tipo: "entrada", direcao: 1 });
