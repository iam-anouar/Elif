import styled from "@emotion/styled";
import { Boton, Tarjeta } from "../components/ui";

// Ocupa toda la pantalla y centra la tarjeta
export const Pantalla = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.espacios.md};
`;

export const TarjetaLogin = styled(Tarjeta)`
  width: 100%;
  max-width: 380px;
`;

export const BotonAncho = styled(Boton)`
  width: 100%;
`;