import { useState } from "react";
import type { FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Campo, Input, MensajeError, Titulo, TextoSuave } from "../components/ui";
import { Pantalla, TarjetaLogin, BotonAncho } from "./Login.styles";

function Login() {
  const { login, autenticado } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Si ya hay sesión, no tiene sentido ver el login
  if (autenticado) return <Navigate to="/" replace />;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim() || !password) {
      setError("Escribe tu email y tu contraseña");
      return;
    }

    setEnviando(true);
    setError("");

    try {
      await login(email.trim(), password);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo iniciar sesión");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <Pantalla>
      <TarjetaLogin>
        <Titulo>Mi Tienda</Titulo>
        <TextoSuave>Inicia sesión para gestionar la tienda</TextoSuave>
        <br />

        <form onSubmit={handleSubmit}>
          <Campo>
            Email
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Campo>

          <Campo>
            Contraseña
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Campo>

          {error && <MensajeError>{error}</MensajeError>}

          <BotonAncho type="submit" disabled={enviando}>
            {enviando ? "Entrando..." : "Entrar"}
          </BotonAncho>
        </form>
      </TarjetaLogin>
    </Pantalla>
  );
}

export default Login;