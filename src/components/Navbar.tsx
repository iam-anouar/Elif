import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Avatar from "./Avatar";
import { Boton } from "./ui";

const Barra = styled.header`
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
  color: #fff;
  z-index: 10;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
`;

const Derecha = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.espacios.md};
`;

const EnlacePerfil = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.espacios.sm};
  color: #fff;
  text-decoration: none;
`;

function Navbar() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login", { replace: true });
  }

  return (
    <Barra>
      <Logo to="/">Elif</Logo>

      <Derecha>
        {usuario && (
          <EnlacePerfil to="/perfil">
            <Avatar nombre={usuario.nombre} />
            {usuario.nombre}
          </EnlacePerfil>
        )}
        <Boton variante="secundario" onClick={handleLogout}>
          Cerrar sesión
        </Boton>
      </Derecha>
    </Barra>
  );
}

export default Navbar;