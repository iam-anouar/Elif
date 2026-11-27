import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Acciones, Boton, Campo, Input, MensajeError, Tarjeta } from "./ui";
import type { DatosCategoria } from "../types";

interface CategoriaFormProps {
  inicial: DatosCategoria; // vacío al crear, con los datos actuales al editar
  textoBoton: string;
  enviando: boolean;
  errorServidor: string;
  onGuardar: (datos: DatosCategoria) => void;
}

// El MISMO formulario sirve para crear y para editar
function CategoriaForm({ inicial, textoBoton, enviando, errorServidor, onGuardar }: CategoriaFormProps) {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState(inicial.nombre);
  const [descripcion, setDescripcion] = useState(inicial.descripcion);
  const [activa, setActiva] = useState(inicial.activa);
  const [errorValidacion, setErrorValidacion] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Las mismas reglas que tiene la API
    if (nombre.trim().length < 2 || nombre.trim().length > 80) {
      setErrorValidacion("El nombre debe tener entre 2 y 80 caracteres");
      return;
    }
    if (!descripcion.trim() || descripcion.trim().length > 500) {
      setErrorValidacion("La descripción es obligatoria (máximo 500 caracteres)");
      return;
    }

    setErrorValidacion("");
    onGuardar({ nombre: nombre.trim(), descripcion: descripcion.trim(), activa });
  }

  const error = errorValidacion || errorServidor;

  return (
    <Tarjeta>
      <form onSubmit={handleSubmit}>
        <Campo>
          Nombre
          <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Campo>

        <Campo>
          Descripción
          <Input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </Campo>

        <Campo as="div">
          <label>
            <input type="checkbox" checked={activa} onChange={(e) => setActiva(e.target.checked)} />{" "}
            Activa
          </label>
        </Campo>

        {error && <MensajeError>{error}</MensajeError>}

        <Acciones>
          <Boton type="submit" disabled={enviando}>
            {enviando ? "Guardando..." : textoBoton}
          </Boton>
          <Boton type="button" variante="secundario" onClick={() => navigate("/categorias")}>
            Cancelar
          </Boton>
        </Acciones>
      </form>
    </Tarjeta>
  );
}

export default CategoriaForm;