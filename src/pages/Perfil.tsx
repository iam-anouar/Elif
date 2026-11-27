import styled from "@emotion/styled";
import { useAuth } from "../hooks/useAuth";
import { useGet } from "../hooks/useGet";
import Avatar from "../components/Avatar";
import { MensajeError, Tarjeta, Titulo, TextoSuave } from "../components/ui";
import type { Usuario } from "../types";

// Estilos: pocos, así que van en el mismo archivo
const Cabecera = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.espacios.lg};
  margin-bottom: ${({ theme }) => theme.espacios.lg};
`;

const Dato = styled.p`
  margin: ${({ theme }) => theme.espacios.sm} 0;
`;

function Perfil() {
  const { usuario: usuarioSesion } = useAuth();
  // Los datos del perfil se piden al servidor
  const { datos, cargando, error } = useGet<{ usuario: Usuario }>("/auth/me");

  if (cargando) return <p>Cargando perfil...</p>;
  if (error) return <MensajeError>{error}</MensajeError>;
  if (!datos) return null;

  const { nombre, email, createdAt } = datos.usuario;
  const miembroDesde = createdAt
    ? new Date(createdAt).toLocaleDateString("es-ES", { dateStyle: "long" })
    : "—";

  return (
    <>
      <Titulo>Mi perfil</Titulo>

      <Tarjeta>
        <Cabecera>
          <Avatar nombre={nombre} tamano={80} />
          <div>
            <h2>{nombre}</h2>
            <TextoSuave>{email}</TextoSuave>
          </div>
        </Cabecera>

        <Dato>
          <strong>Rol:</strong>{" "}
          {usuarioSesion?.rol === "admin" ? "Administrador" : "Usuario"}
        </Dato>
        <Dato>
          <strong>Miembro desde:</strong> {miembroDesde}
        </Dato>
      </Tarjeta>
    </>
  );
}

export default Perfil;