import styled from "@emotion/styled";

import { Link } from "react-router-dom";
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


// Un enlace con aspecto de botón (para "Nuevo" y "Editar")
export const EnlaceBoton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => `${theme.espacios.sm} ${theme.espacios.md}`};
  border-radius: ${({ theme }) => theme.radios.md};
  background: ${({ theme }) => theme.colores.primario};
  color: #fff;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

// Título a la izquierda y acciones a la derecha
export const Cabecera = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.espacios.md};
  margin-bottom: ${({ theme }) => theme.espacios.lg};

  h1 {
    margin: 0;
  }
`;

export const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colores.superficie};
  border: 1px solid ${({ theme }) => theme.colores.borde};
  border-radius: ${({ theme }) => theme.radios.lg};
  overflow: hidden;

  th,
  td {
    padding: ${({ theme }) => `${theme.espacios.sm} ${theme.espacios.md}`};
    border-bottom: 1px solid ${({ theme }) => theme.colores.borde};
    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.colores.fondo};
    color: ${({ theme }) => theme.colores.textoSuave};
    font-weight: 600;
  }
`;

export const Acciones = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.espacios.sm};
`;

export const Etiqueta = styled.span<{ activa: boolean }>`
  padding: 2px ${({ theme }) => theme.espacios.sm};
  border-radius: ${({ theme }) => theme.radios.sm};
  font-size: 0.85rem;
  background: ${({ activa }) => (activa ? "#e3f2e8" : "#eceff2")};
  color: ${({ theme, activa }) => (activa ? theme.colores.exito : theme.colores.textoSuave)};
`;