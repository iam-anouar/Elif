import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Menu = styled.nav`
  position: fixed;
  top: ${({ theme }) => theme.medidas.alturaBarra};
  left: 0;
  bottom: 0;
  width: ${({ theme }) => theme.medidas.anchoMenu};
  padding: ${({ theme }) => theme.espacios.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.espacios.xs};
  background: ${({ theme }) => theme.colores.superficie};
  border-right: 1px solid ${({ theme }) => theme.colores.borde};
`;

// NavLink añade la clase "active" al enlace de la página actual
export const Enlace = styled(NavLink)`
  padding: ${({ theme }) => `${theme.espacios.sm} ${theme.espacios.md}`};
  border-radius: ${({ theme }) => theme.radios.md};
  color: ${({ theme }) => theme.colores.texto};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colores.fondo};
  }

  &.active {
    background: ${({ theme }) => theme.colores.primario};
    color: ${({ theme }) => theme.colores.textoSobrePrimario};
    font-weight: bold;
  }
`;