import type { Rol } from "../types";

// Lee el rol guardado dentro del token JWT (solo para decidir qué se muestra).
// La seguridad real la sigue haciendo el backend en cada petición.
export function leerRol(token: string): Rol | undefined {
  try {
    const payload = token.split(".")[1];
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    const { role } = JSON.parse(json);
    return role === "admin" || role === "usuario" ? role : undefined;
  } catch {
    return undefined;
  }
}