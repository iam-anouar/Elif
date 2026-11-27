import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// El margen deja sitio a la barra y al menú para que no tapen el contenido
const Contenido = styled.main`
  margin-top: ${({ theme }) => theme.medidas.alturaBarra};
  margin-left: ${({ theme }) => theme.medidas.anchoMenu};
  padding: ${({ theme }) => theme.espacios.xl};
`;

function Layout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Contenido>
        <Outlet />
      </Contenido>
    </>
  );
}

export default Layout;