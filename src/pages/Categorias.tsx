import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useGet } from "../hooks/useGet";
import { useMutation } from "../hooks/useMutation";
import {
  Acciones, Boton, Cabecera, EnlaceBoton, Etiqueta, Input, MensajeError, Tabla, TextoSuave, Titulo,
} from "../components/ui";
import type { Categoria } from "../types";

function Categorias() {
  const { esAdmin } = useAuth();
  const { datos, cargando, error, recargar } = useGet<Categoria[]>("/categorias?limit=100");
  const { enviar, enviando, error: errorBorrar } = useMutation();
  const [busqueda, setBusqueda] = useState("");

  const categorias = datos ?? [];

  // Filtro LOCAL: se calcula en cada render a partir del estado, sin useEffect
  const texto = busqueda.trim().toLowerCase();
  const filtradas = categorias.filter((c) => c.nombre.toLowerCase().includes(texto));

  async function borrar(categoria: Categoria) {
    if (!window.confirm(`¿Seguro que quieres borrar «${categoria.nombre}»?`)) return;

    const ok = await enviar(`/categorias/${categoria._id}`, "DELETE");
    if (ok) recargar(); // volvemos a pedir la lista al servidor
  }

  return (
    <>
      <Cabecera>
        <Titulo>Categorías</Titulo>
        {esAdmin && <EnlaceBoton to="/categorias/nueva">+ Nueva categoría</EnlaceBoton>}
      </Cabecera>

      <Cabecera>
        <Input
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <TextoSuave>
          Mostrando {filtradas.length} de {categorias.length}
        </TextoSuave>
      </Cabecera>

      {errorBorrar && <MensajeError>{errorBorrar}</MensajeError>}

      {cargando && categorias.length === 0 && <p>Cargando categorías...</p>}
      {error && <MensajeError>{error}</MensajeError>}

      {!cargando && !error && categorias.length === 0 && (
        <TextoSuave>Todavía no hay categorías. Crea la primera.</TextoSuave>
      )}

      {categorias.length > 0 && filtradas.length === 0 && (
        <TextoSuave>Ninguna categoría coincide con «{busqueda}».</TextoSuave>
      )}

      {filtradas.length > 0 && (
        <Tabla>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Estado</th>
              {esAdmin && <th>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {filtradas.map((categoria) => (
              <tr key={categoria._id}>
                <td>{categoria.nombre}</td>
                <td>{categoria.descripcion}</td>
                <td>
                  <Etiqueta activa={categoria.activa}>
                    {categoria.activa ? "Activa" : "Inactiva"}
                  </Etiqueta>
                </td>
                {esAdmin && (
                  <td>
                    <Acciones>
                      <EnlaceBoton to={`/categorias/${categoria._id}/editar`}>Editar</EnlaceBoton>
                      <Boton variante="peligro" disabled={enviando} onClick={() => borrar(categoria)}>
                        Borrar
                      </Boton>
                    </Acciones>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Tabla>
      )}
    </>
  );
}

export default Categorias;