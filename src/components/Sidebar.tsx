import { Menu, Enlace } from "./Sidebar.styles";

function Sidebar() {
  return (
    <Menu>
      <Enlace to="/" end>Inicio</Enlace>
      <Enlace to="/productos">Productos</Enlace>
      <Enlace to="/categorias">Categorías</Enlace>
    </Menu>
  );
}

export default Sidebar;