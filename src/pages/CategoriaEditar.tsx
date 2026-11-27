import { useNavigate, useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { useMutation } from "../hooks/useMutation";
import CategoriaForm from "../components/CategoriaForm";
import { MensajeError, Titulo } from "../components/ui";
import type { Categoria, DatosCategoria } from "../types";

const VACIA: DatosCategoria = { nombre: "", descripcion: "", activa: true };

// Una sola página para /categorias/nueva y /categorias/:id/editar
function CategoriaEditar() {
  const { id } = useParams(); // undefined en "nueva"
  const esNueva = id === undefined;
  const navigate = useNavigate();

  // Al editar, cargamos la categoría. Si cambia el id en la URL, se vuelve a cargar.
  const { datos, cargando, error } = useGet<Categoria>(esNueva ? null : `/categorias/${id}`);
  const { enviar, enviando, error: errorGuardar } = useMutation();

  async function guardar(valores: DatosCategoria) {
    const ok = esNueva
      ? await enviar("/categorias", "POST", valores)
      : await enviar(`/categorias/${id}`, "PUT", valores);

    // Solo se sale si el servidor respondió bien
    if (ok) navigate("/categorias");
  }

  if (cargando) return <p>Cargando categoría...</p>;
  if (error) return <MensajeError>{error}</MensajeError>;

  const inicial = datos
    ? { nombre: datos.nombre, descripcion: datos.descripcion, activa: datos.activa }
    : VACIA;

  return (
    <>
      <Titulo>{esNueva ? "Nueva categoría" : "Editar categoría"}</Titulo>
      <CategoriaForm
        key={id ?? "nueva"} // si cambia el id, el formulario empieza de nuevo
        inicial={inicial}
        textoBoton={esNueva ? "Crear categoría" : "Guardar cambios"}
        enviando={enviando}
        errorServidor={errorGuardar}
        onGuardar={guardar}
      />
    </>
  );
}

export default CategoriaEditar;