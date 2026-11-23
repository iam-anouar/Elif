import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { apiFetch } from "../services/api";
import type { Usuario, RespuestaLogin } from "../types";

interface AuthContextType {
  usuario: Usuario | null;
  autenticado: boolean;
  comprobando: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  // Solo hay que comprobar si al arrancar ya hay un token guardado
  const [comprobando, setComprobando] = useState(() => localStorage.getItem("token") !== null);

  // Al cargar la aplicación: si hay token, preguntamos al servidor quién es
  useEffect(() => {
    if (!localStorage.getItem("token")) return;

    const controller = new AbortController();

    apiFetch<{ usuario: Usuario }>("/auth/me", { signal: controller.signal })
      .then((datos) => setUsuario(datos.usuario))
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
    setUsuario(datos.usuario);
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
      value={{ usuario, autenticado: usuario !== null, comprobando, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}