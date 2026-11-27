import { useAuth } from "../hooks/useAuth";
import { Titulo } from "../components/ui";

function Inicio() {
  const { usuario } = useAuth();

  return <Titulo>Hola, {usuario?.nombre}</Titulo>;
}

export default Inicio;