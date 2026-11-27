import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useGet } from "../hooks/useGet";
import { Tarjeta, Titulo, TextoSuave } from "../components/ui";
import type { Categoria, RespuestaProductos } from "../types";

const Rejilla = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.espacios.lg};
  margin-top: ${({ theme }) => theme.espacios.lg};
`;

const Numero = styled.p`
  margin: ${({ theme }) => theme.espacios.sm} 0;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colores.primario};
`;

function Inicio() {
  const { usuario } = useAuth();

  // Con limit=1 la API devuelve muy pocos datos, pero meta.total trae el total
  const productos = useGet<RespuestaProductos>("/productos?limit=1");
  const categorias = useGet<Categoria[]>("/categorias?limit=100");

  return (
    <>
      <Titulo>Hola, {usuario?.nombre}</Titulo>
      <TextoSuave>Este es el resumen de tu tienda.</TextoSuave>

      <Rejilla>
        <Tarjeta>
          <TextoSuave>Productos</TextoSuave>
          <Numero>
            {productos.cargando ? "…" : productos.error ? "—" : productos.datos?.meta.total}
          </Numero>
          <Link to="/productos">Ver productos</Link>
        </Tarjeta>

        <Tarjeta>
          <TextoSuave>Categorías</TextoSuave>
          <Numero>
            {categorias.cargando ? "…" : categorias.error ? "—" : categorias.datos?.length}
          </Numero>
          <Link to="/categorias">Ver categorías</Link>
        </Tarjeta>
      </Rejilla>
    </>
  );
}

export default Inicio;