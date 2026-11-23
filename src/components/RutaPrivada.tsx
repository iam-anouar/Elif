import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function RutaPrivada() {
  const { autenticado, comprobando } = useAuth();

  if (comprobando) return <p>Comprobando sesión...</p>;
  if (!autenticado) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default RutaPrivada;