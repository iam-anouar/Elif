import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Barra = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.medidas.alturaBarra};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.espacios.lg};
  background: ${({ theme }) => theme.colores.primario};
  color: ${({ theme }) => theme.colores.textoSobrePrimario};
  z-index: 10;
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colores.textoSobrePrimario};
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
`;

export const Derecha = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.espacios.md};
`;

export const EnlacePerfil = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.espacios.sm};
  color: ${({ theme }) => theme.colores.textoSobrePrimario};
  text-decoration: none;
`;