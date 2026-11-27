import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Titulo, TextoSuave } from "../components/ui";

const Pantalla = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.espacios.md};
  text-align: center;
`;

const Codigo = styled.p`
  margin: 0;
  font-size: 5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colores.primario};
`;

function NotFound() {
  return (
    <Pantalla>
      <Codigo>404</Codigo>
      <Titulo>Página no encontrada</Titulo>
      <TextoSuave>La dirección que buscas no existe.</TextoSuave>
      <Link to="/">Volver al inicio</Link>
    </Pantalla>
  );
}

export default NotFound;