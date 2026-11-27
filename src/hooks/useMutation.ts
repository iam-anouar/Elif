import { useState } from "react";
import { apiFetch } from "../services/api";

type Metodo = "POST" | "PUT" | "DELETE";

// Hook reutilizable para las operaciones PRIVADAS: crear, editar y borrar.
// El token lo añade apiFetch en la cabecera Authorization.
export function useMutation() {
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  // Devuelve true si la operación salió bien y false si hubo error
  async function enviar(ruta: string, metodo: Metodo, cuerpo?: unknown): Promise<boolean> {
    setEnviando(true);
    setError("");

    try {
      await apiFetch(ruta, {
        method: metodo,
        body: cuerpo === undefined ? undefined : JSON.stringify(cuerpo),
      });
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo completar la operación");
      return false;
    } finally {
      setEnviando(false);
    }
  }

  return { enviar, enviando, error };
}