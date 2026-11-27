import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";

interface Resultado<T> {
  peticion: string; // a qué petición corresponde esta respuesta
  datos: T | null;
  error: string;
}

// Hook reutilizable para CONSULTAR datos del servidor (peticiones GET
export function useGet<T>(url: string | null) {
  const [version, setVersion] = useState(0); // al cambiar, se vuelve a pedir
  const [resultado, setResultado] = useState<Resultado<T>>({
    peticion: "",
    datos: null,
    error: "",
  });

  // Identifica la petición actual: cambia si cambia la url o se pide recargar
  const peticion = `${url}#${version}`;

 
  useEffect(() => {
    if (!url) return; // nada que pedir

    const controller = new AbortController();

    apiFetch<T>(url, { signal: controller.signal })
      .then((datos) => {
        if (controller.signal.aborted) return; // respuesta antigua: se descarta
        setResultado({ peticion, datos, error: "" });
      })
      .catch((err: Error) => {
        if (controller.signal.aborted) return; // petición cancelada: se ignora
        setResultado({ peticion, datos: null, error: err.message });
      });

    // Limpieza: si cambia la url o se sale de la página, se cancela la petición
    return () => controller.abort();
  }, [url, peticion]);

  // Valor derivado: si la respuesta que tenemos no es de la petición actual, está cargando

  const cargando = url !== null && resultado.peticion !== peticion;

  function recargar() {
    setVersion((v) => v + 1);
  }

  return {
    datos: resultado.datos, // mientras carga, se siguen viendo los datos anteriores
    cargando,
    error: cargando ? "" : resultado.error,
    recargar,
  };
}