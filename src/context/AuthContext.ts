import { createContext } from "react";
import type { Usuario } from "../types";

export interface AuthContextType {
  usuario: Usuario | null;
  autenticado: boolean;
  esAdmin: boolean;
  comprobando: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);