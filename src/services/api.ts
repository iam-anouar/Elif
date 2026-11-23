const API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch<T>(ruta: string, opciones: RequestInit = {}): Promise<T> {
  const headers = new Headers(opciones.headers);

  if (opciones.body) headers.set("Content-Type", "application/json");

  const token = localStorage.getItem("token");
  if (token) headers.set("Authorization", `Bearer ${token}`);

  let res: Response;
  try {
    res = await fetch(`${API_URL}${ruta}`, { ...opciones, headers });
  } catch (error) {
    // Si la petición se canceló a propósito, dejamos pasar el error tal cual
    if (error instanceof DOMException && error.name === "AbortError") throw error;
    throw new Error("No se pudo conectar con el servidor");
  }

  if (res.status === 204) return undefined as T;

  const datos = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(datos?.message ?? `Error ${res.status}`);
  }

  return datos as T;
}