import styled from "@emotion/styled";

// Componentes pequeños reutilizables que usan los valores del tema

export const Boton = styled.button<{ variante?: "primario" | "peligro" | "secundario" }>`
  padding: ${({ theme }) => `${theme.espacios.sm} ${theme.espacios.md}`};
  border: none;
  border-radius: ${({ theme }) => theme.radios.md};
  font: inherit;
  cursor: pointer;
  color: #fff;
  background: ${({ theme, variante = "primario" }) =>
    variante === "peligro"
      ? theme.colores.peligro
      : variante === "secundario"
        ? theme.colores.textoSuave
        : theme.colores.primario};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Tarjeta = styled.div`
  background: ${({ theme }) => theme.colores.superficie};
  border: 1px solid ${({ theme }) => theme.colores.borde};
  border-radius: ${({ theme }) => theme.radios.lg};
  padding: ${({ theme }) => theme.espacios.lg};
`;

export const Titulo = styled.h1`
  margin: 0 0 ${({ theme }) => theme.espacios.lg};
  font-size: 1.6rem;
`;