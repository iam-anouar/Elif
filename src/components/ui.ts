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



export const Campo = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.espacios.xs};
  margin-bottom: ${({ theme }) => theme.espacios.md};
  font-weight: 600;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.espacios.sm};
  border: 1px solid ${({ theme }) => theme.colores.borde};
  border-radius: ${({ theme }) => theme.radios.md};
  font: inherit;
  font-weight: normal;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colores.primario};
    border-color: transparent;
  }
`;

export const MensajeError = styled.p`
  margin: 0 0 ${({ theme }) => theme.espacios.md};
  padding: ${({ theme }) => theme.espacios.sm};
  border-radius: ${({ theme }) => theme.radios.md};
  background: #fbe4e2;
  color: ${({ theme }) => theme.colores.peligro};
`;

export const TextoSuave = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colores.textoSuave};
`;