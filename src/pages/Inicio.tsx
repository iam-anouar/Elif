import { useAuth } from "../hooks/useAuth";

function Inicio() {
 // const { usuario, logout, esAdmin } = useAuth();
const { usuario, logout } = useAuth();
  return (
    <div>
      <h1>Hola, {usuario?.nombre}</h1>
     {/*  <p>{esAdmin ? "Administrador" : "Usuario"}</p> */}
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

export default Inicio;