import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { apiFetch } from "../services/api";
import { leerRol } from "../services/token";
import type { Usuario, RespuestaLogin } from "../types";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  // Solo hay que comprobar si al arrancar ya hay un token guardado
  const [comprobando, setComprobando] = useState(() => localStorage.getItem("token") !== null);

  // Al cargar la aplicación: si hay token, preguntamos al servidor quién es
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const controller = new AbortController();

    apiFetch<{ usuario: Usuario }>("/auth/me", { signal: controller.signal })
      .then((datos) => setUsuario({ ...datos.usuario, rol: leerRol(token) }))
      .catch((error) => {
        if (controller.signal.aborted) return;
        console.error(error);
        localStorage.removeItem("token"); // token caducado o no válido
      })
      .finally(() => {
        if (!controller.signal.aborted) setComprobando(false);
      });

    return () => controller.abort();
  }, []);

  async function login(email: string, password: string) {
    const datos = await apiFetch<RespuestaLogin>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    localStorage.setItem("token", datos.token);
    setUsuario({ ...datos.usuario, rol: leerRol(datos.token) });
  }

  async function logout() {
    try {
      await apiFetch("/auth/logout", { method: "POST" });
    } catch (error) {
      console.error(error); // aunque falle, cerramos la sesión en el navegador
    } finally {
      localStorage.removeItem("token");
      setUsuario(null);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        autenticado: usuario !== null,
        // Solo se ocultan opciones si sabemos seguro que NO es admin
        esAdmin: usuario !== null && usuario.rol !== "usuario",
        comprobando,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}