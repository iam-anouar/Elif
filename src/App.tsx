import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Categorias from "./pages/Categorias";
import CategoriaEditar from "./pages/CategoriaEditar";
import NotFound from "./pages/NotFound";
import RutaPrivada from "./components/RutaPrivada";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<RutaPrivada />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/categorias" element={<Categorias />} />
                    <Route path="/categorias/nueva" element={<CategoriaEditar />} />
          <Route path="/categorias/:id/editar" element={<CategoriaEditar />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;