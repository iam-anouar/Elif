import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Avatar from "./Avatar";
import { Boton } from "./ui";
import { Barra, Logo, Derecha, EnlacePerfil } from "./Navbar.styles";

function Navbar() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login", { replace: true });
  }

  return (
    <Barra>
      <Logo to="/">Mi Tienda</Logo>

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