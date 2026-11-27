import styled from "@emotion/styled";


const Circulo = styled.span<{ tamano: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ tamano }) => tamano}px;
  height: ${({ tamano }) => tamano}px;
  border-radius: ${({ theme }) => theme.radios.circulo};
  background: ${({ theme }) => theme.colores.secundario};
  color: ${({ theme }) => theme.colores.texto};
  font-weight: bold;
  font-size: ${({ tamano }) => tamano / 2.2}px;
`;

interface AvatarProps {
  nombre: string;
  tamano?: number;
}

// Avatar predeterminado: la inicial del nombre (el backend no guarda imágenes)
function Avatar({ nombre, tamano = 36 }: AvatarProps) {
  return (
    <Circulo tamano={tamano} aria-hidden="true">
      {nombre.charAt(0).toUpperCase()}
    </Circulo>
  );
}

export default Avatar;